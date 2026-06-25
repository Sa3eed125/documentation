---
id: using-manage-workflow
title: "🛠 Using Manage Workflow - Step-by-Step Workflows"
sidebar_label: "🛠 Using Manage Workflow"
sidebar_position: 2
name: "🛠 Using Manage Workflow"
slug: /workflow/using-manage-workflow
tags: [workflow, manage-workflow, process-design, automation, business-cases]
---

# Using Manage Workflow - Step-by-Step Workflows & Business Cases


:::tip 📌 At a Glance
**Document Type**: Using Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Overview

**Manage Workflow** is where you design and configure the process that records follow through your ECM system. This section covers practical workflows for real-world scenarios.

:::info Prerequisite
You must have **Admin** role to access Configuration → Manage Workflow. If you don't see this option, contact your ECM administrator.
:::

---

## Workflow 1: Create Sequential Invoice Approval Workflow

### Scenario
**Company**: Global Financial Services  
**Process**: Invoice approval requiring sequential review by manager → finance head → CFO (based on amount)  
**Goal**: Create workflow with conditional routing and SLA tracking

### Approval Rules
- **Under $5,000**: Manager approval only (1-day SLA)
- **$5,000-$50,000**: Manager → Finance Head (2-day SLA per stage)
- **Over $50,000**: Manager → Finance Head → CFO (3-day SLA per stage)

### Step-by-Step Workflow Setup

#### Step 1: Create Workflow
1. Navigate to **Configuration → Manage Workflow**
2. Click **Create Workflow** button
3. Enter workflow details:

| Field | Value |
|-------|-------|
| **Name** | `Invoice_Approval_Sequential` |
| **Description** | Multi-level invoice approval routing based on amount |
| **Content Type** | Invoice |
| **Status** | Draft (test before activating) |

#### Step 2: Design Workflow Stages

**Stage 1: Submit**
```
Name: Submitted
Trigger: Record created
Description: Invoice submitted for approval
Assignee: None (auto-populated by user)
SLA: N/A

On Entry:
- Send email: "Invoice submitted, awaiting approval"
- Update field: status = "Submitted"
- Call DMN: Determine_Approval_Route
```

**Stage 2: Manager Review**
```
Name: Manager Review
Trigger: Previous stage completed
Description: Manager reviews invoice details
Assignee: Manager (based on department)
SLA: 1 day

On Entry Actions:
- Assign to invoice submitter's manager
- Send notification: "Invoice ready for your review"
- Lock field: amount (prevent tampering)

On Exit Conditions:
IF approved:
  - Go to Stage 3 (IF amount < $5K → Complete)
  - Go to Stage 3 (IF amount >= $5K → Finance Head Review)
ELSE IF rejected:
  - Go to Stage 4 (Rejected)
  - Send email to submitter with rejection reason

Escalation (if > 1 day):
  - Send reminder email
  - Escalate to manager's superior
```

**Stage 3: Finance Head Review**
```
Name: Finance Head Review
Condition: IF amount >= $5,000
Trigger: Manager approved
Description: Finance head reviews amount and vendor
Assignee: Finance Head (based on department)
SLA: 2 days

On Entry Actions:
- Assign to Finance Head
- Send notification with approval recommendation from manager
- Verify vendor in approved vendor list

On Exit Conditions:
IF approved:
  - IF amount < $50K → Go to Stage 5 (Complete)
  - IF amount >= $50K → Go to Stage 4 (CFO Review)
ELSE IF rejected or needs revision:
  - Send back to Manager Review
  
Escalation:
  - Day 2: Reminder email
  - Day 2.5: Escalate to Finance Director
```

**Stage 4: CFO Review**
```
Name: CFO Review
Condition: IF amount > $50,000
Trigger: Finance Head approved
Description: CFO final approval for large amounts
Assignee: CFO
SLA: 3 days

On Entry Actions:
- Assign to CFO
- Send notification with full details and chain approvals
- Create PDF report of approval chain

On Exit Conditions:
IF approved:
  - Go to Stage 5 (Approved - Ready for Execution)
ELSE IF rejected:
  - Go to Stage 6 (Rejected)
  
Escalation:
  - Day 2: Reminder
  - Day 3: Executive notification
```

**Stage 5: Approved**
```
Name: Approved - Ready for Execution
Trigger: Final approval received
Description: Record approved, ready to post to accounting
Assignee: Accounting Team
Actions: Update field: status = "Approved"
        Create GL entry automatically
        Archive to completed folder
```

**Stage 6: Rejected**
```
Name: Rejected
Trigger: Any approver rejected
Description: Record rejected, awaiting resubmission
Assignee: Submitter
Actions: Send notification with rejection reason
        Allow resubmission
        Reset approval chain
```

#### Step 3: Configure Conditions

Create routing rules:

```
Rule 1: IF amount < 5000 AND manager approved
  THEN skip Finance Head Review
  THEN go directly to Approved stage

Rule 2: IF amount >= 5000 AND amount < 50000 AND manager AND finance head approved
  THEN skip CFO Review
  THEN go to Approved stage

Rule 3: IF amount > 50000
  THEN require all 3 approvals
  THEN require CFO approval
```

#### Step 4: Configure SLA Timers

```
Stage 2 (Manager Review):
  - SLA: 1 day
  - Escalation at: 0.75 days (18 hours)
  - Action: Send reminder email

Stage 3 (Finance Head Review):
  - SLA: 2 days
  - Escalation at: 1.5 days
  - Action: Escalate to Finance Director

Stage 4 (CFO Review):
  - SLA: 3 days
  - Escalation at: 2.5 days
  - Action: Notify CFO's executive assistant
```

#### Step 5: Integrate with DMN

Link workflow to DMN decision:

```
At Stage Entry (Manager Review):
  - Call DMN: "Determine_Approval_Route"
  - Pass inputs: amount, vendor, department
  - Get output: approval_route
  - Use to pre-populate recommended approver
```

#### Step 6: Test Workflow

Test cases:

```
Test 1: Invoice $3,500
  - Expected path: Submitted → Manager Review → Approved
  - Duration: ~1 day
  ✓ PASS

Test 2: Invoice $25,000
  - Expected path: Submitted → Manager → Finance Head → Approved
  - Duration: ~3 days
  ✓ PASS

Test 3: Invoice $75,000
  - Expected path: All 3 approvals
  - Duration: ~6 days
  ✓ PASS

Test 4: Manager rejects
  - Expected: Rejected stage, notify submitter
  ✓ PASS
```

#### Step 7: Deploy

1. Change status from "Draft" to "Active"
2. Notify users of workflow changes
3. Monitor first batch of records
4. Adjust as needed

### Result
✅ Automated 3-stage approval process  
✅ SLA tracking & escalation  
✅ Conditional routing by amount  
✅ 2-3 day process (vs previous 5+ days)

---

## Workflow 2: Create Parallel Review Workflow (Legal Contract)

### Scenario
**Company**: International Legal Services  
**Process**: Contracts need simultaneous review by Legal, Finance, and Compliance teams  
**Goal**: Create workflow with parallel stages and merge point

### Setup

#### Stages

```
Stage 1: Submit Contract
  ├─ Assignee: Contract Manager
  └─ Output: Contract ready for review

Stage 2A: Legal Review (PARALLEL)
  ├─ Assignee: Legal Team
  ├─ SLA: 2 days
  └─ Check: Clause compliance, signature requirements

Stage 2B: Finance Review (PARALLEL)
  ├─ Assignee: Finance Team
  ├─ SLA: 2 days
  └─ Check: Payment terms, cost impact

Stage 2C: Compliance Review (PARALLEL)
  ├─ Assignee: Compliance Officer
  ├─ SLA: 2 days
  └─ Check: Regulatory requirements, data privacy

Stage 3: Merge Results
  ├─ Wait for: All 3 reviews completed
  ├─ Check: All approved?
  └─ Condition: IF all approved THEN Stage 4
             IF any rejected THEN Rejected

Stage 4: Executive Approval
  ├─ Assignee: VP Legal
  ├─ SLA: 1 day
  └─ Final sign-off

Stage 5: Executed
  ├─ Status: Contract signed
  └─ Archive: Move to contracts folder
```

### Result
✅ Parallel reviews (2 days vs 6 days sequential)  
✅ Clear merge point  
✅ All perspectives considered simultaneously

---

## Workflow 3: Create Escalation Workflow (Customer Support Tickets)

### Scenario
**Company**: Customer Support Center  
**Process**: Support tickets escalate if not resolved within SLA  
**Goal**: Auto-escalation based on time and priority

### Stages & Escalation

```
Stage 1: New Ticket
  └─ Assign to: First-available support agent

Stage 2: In Progress
  ├─ SLA: 2 hours
  ├─ Escalation at: 1.5 hours
  │   └─ Action: Send agent reminder
  ├─ If not resolved in 2 hours:
  │   └─ Auto-escalate to: Supervisor
  │   └─ Reason: "SLA exceeded"

Stage 3: Supervisor Review
  ├─ SLA: 1 hour
  ├─ Escalation at: 50 minutes
  │   └─ Action: Notify manager
  ├─ If still not resolved:
  │   └─ Auto-escalate to: Manager

Stage 4: Manager Intervention
  ├─ SLA: 30 minutes
  ├─ Escalation at: 25 minutes
  │   └─ Action: Notify VP
  └─ Resolve or close ticket

Stage 5: Resolved
  └─ Send customer survey
```

### Result
✅ No tickets slip through cracks  
✅ Clear escalation path  
✅ Automatic routing, no manual tracking needed

---

## Workflow 4: Create Conditional Workflow (Document Classification)

### Scenario
**Company**: Document Management Services  
**Process**: Documents routed to different approval paths based on type  
**Goal**: Single entry point, conditional routing

### Setup

```
Stage 1: Upload & Classify
  ├─ Upload document
  ├─ Classify (using DMN):
  │  ├─ Contract
  │  ├─ Invoice
  │  ├─ Report
  │  └─ Other
  └─ Route based on classification

Stage 2A: IF Contract (CONDITIONAL PATH 1)
  ├─ Legal Review
  └─ Executive Approval

Stage 2B: IF Invoice (CONDITIONAL PATH 2)
  ├─ Finance Review
  └─ Approval (amount-based)

Stage 2C: IF Report (CONDITIONAL PATH 3)
  ├─ Peer Review
  └─ Manager Approval

Stage 2D: IF Other (CONDITIONAL PATH 4)
  ├─ Manual Review
  └─ Classification

Stage 3: Archive
  └─ Move to classified folder
```

### Result
✅ Single workflow handles multiple document types  
✅ Automatic routing to correct path  
✅ Scalable for new document types

---

## Workflow 5: Create Field-Based Workflow (Auto-Routing with DMN)

### Scenario
**Company**: Purchase Order Processing  
**Process**: POs routed based on vendor, amount, and type  
**Goal**: Complex multi-factor routing

### Setup

```
Stage 1: PO Submitted
  └─ Call DMN: Evaluate_PO_Route
     Inputs: vendor, amount, po_type, department
     Output: approval_route, urgency_level

Stage 2: Based on DMN Output
  ├─ IF route = "auto_approve":
  │  └─ Auto-approve, proceed to execution
  ├─ IF route = "manager":
  │  └─ Route to department manager
  ├─ IF route = "procurement":
  │  └─ Route to procurement team
  └─ IF route = "director":
     └─ Route to director

Stage 3: Approval
  ├─ SLA: Based on urgency level
  ├─ IF urgency = high: 1 day
  ├─ IF urgency = medium: 3 days
  └─ IF urgency = low: 5 days

Stage 4: Execute
  └─ Create purchase order in system
```

### Result
✅ Automatic routing based on multiple factors  
✅ Dynamic SLA based on urgency  
✅ Combines DMN intelligence with workflow orchestration

---

## Common Workflow Configuration Tasks

### Task: Add a New Stage

1. Click **Edit Workflow**
2. Right-click on stage → **Add Stage After**
3. Configure:
   - Name
   - Trigger
   - Assignee rules
   - SLA timer
4. Link to next stage

### Task: Configure Stage Conditions

1. Select stage → **Conditions** tab
2. Add condition:
   ```
   IF [field] [operator] [value]
   THEN go to [next stage]
   ```
3. Examples:
   - IF status = "approved" THEN go to Stage 3
   - IF amount > 50000 THEN go to Stage 4
   - IF department = "Finance" THEN assign to Finance Team

### Task: Set Up SLA Timer

1. Select stage → **SLA** section
2. Set:
   - **SLA Duration**: e.g., 2 days
   - **Escalation Threshold**: e.g., 1.5 days (75%)
   - **Escalation Action**: e.g., Send email, reassign
3. Click Save

### Task: Link DMN Decision

1. Select stage → **Actions** tab
2. Click **Add Action** → **Call DMN**
3. Select DMN rule
4. Map inputs (field → DMN input)
5. Map outputs (DMN output → field or variable)

### Task: Configure Notifications

1. Select stage
2. **On Entry** → **Add Action** → **Send Notification**
3. Configure:
   - Recipient (assignee, manager, group)
   - Email template
   - Variables to include

---

## Troubleshooting Workflow Issues

### Issue 1: Records Stuck in Stage

**Diagnosis**:
- Check SLA timer (is it actually running?)
- Verify assignee has access
- Check if condition to exit stage is met

**Solution**:
1. Navigate to record detail
2. Check current stage in workflow panel
3. Verify all required fields filled
4. Check if condition blocking exit
5. Manually advance if necessary

### Issue 2: Wrong Records Going to Wrong Stage

**Diagnosis**: Condition logic incorrect or incomplete

**Solution**:
1. Review workflow conditions
2. Test with sample data
3. Verify field names and operators
4. Check order of conditions (first match wins)

### Issue 3: Notifications Not Sending

**Diagnosis**: Email config, recipient not found, or action not triggered

**Solution**:
1. Check email server configuration
2. Verify recipient email addresses exist
3. Verify action is set to trigger on stage entry
4. Check notification template

### Issue 4: Performance Slow

**Diagnosis**: Complex conditions, many stages, or large volume

**Solution**:
1. Simplify conditions
2. Use indexed fields
3. Reduce number of stages if possible
4. Archive old records

---

## Workflow Best Practices

| Practice | Reason | Example |
|----------|--------|---------|
| **Keep stages focused** | Clear responsibility | "Manager Review" not "Manager Review & Approve & Archive" |
| **Name clearly** | Self-documenting | "Finance Head Review" not "Stage 2" |
| **Define SLAs realistically** | Achievable targets | 2-day SLA for complex approval, not 4 hours |
| **Use DMN for complex logic** | Easier to maintain | Call DMN for routing decisions vs complex IF/THEN |
| **Test thoroughly** | Catch errors early | Test all condition branches |
| **Document decisions** | Future maintainers | Explain why this workflow design |
| **Monitor metrics** | Identify issues | Track stage duration, escalations, rejections |
| **Get user feedback** | Real-world issues | Ask users about workflow pain points |

---

## Workflow Patterns Library

### Pattern 1: Sequential (Most Common)
```
Stage 1 → Stage 2 → Stage 3 → Complete
```

### Pattern 2: Conditional Routing
```
Stage 1 → Decision → Path A or Path B or Path C → Merge → Stage 4
```

### Pattern 3: Parallel + Merge
```
Stage 1 → Parallel{A, B, C} → Wait for All → Stage 2
```

### Pattern 4: Loop/Revision
```
Stage 1 → Review → IF needs revision → Back to Stage 1
         → IF approved → Stage 2
```

### Pattern 5: Exception Handling
```
Normal flow: Stage 1 → Stage 2 → Stage 3
Exception: IF error → Exception stage → Manual fix → Resume normal
```

---

## What's Next?

- **[Workflow Detailed Guide](%F0%9F%9B%A0%20All%20BPMN%20Task%20Types%20Reference.md)** - UI components reference
- **[Diagrams & Business Cases](%F0%9F%97%BA%20Diagrams%20%26%20Business%20Cases.md)** - Visual architecture
- **[Use Case Examples](%F0%9F%9B%A0%20Use%20Cases.md)** - Real-world implementations
- **[Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Core concepts

---

**Version**: v7.49.0+  
**Last Updated**: 2026-06-11  
**Powered by Contellect**
