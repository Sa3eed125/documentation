---
id: workflow-all-task-types
title: "🧩 Workflow - All BPMN Task Types & Settings"
sidebar_label: "🧩 All Task Types Reference"
sidebar_position: 5
name: "🧩 All Task Types Reference"
slug: /workflow/all-task-types
tags: [workflow, bpmn, task-types, elements, configuration, settings]
---

# Workflow - Complete BPMN Task Types & Element Settings


:::tip 📌 At a Glance
**Document Type**: Using Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


This guide documents all BPMN 2.0 task types and elements available in Contellect Workflow Create form.

---

## 1. BPMN Task Types Overview

When creating a workflow in Manage Workflow → Create Workflow, you can select different task types from the "Change element" dropdown menu.

### Available Task Types:

```
┌─ Service task
├─ Send task
├─ Receive task
├─ Manual task
├─ Script task
├─ Call activity
├─ Sub-process (collapsed)
├─ Sub-process (expanded)
└─ Ad-hoc sub-process (collapsed)
```

---

## 2. Service Task

**Icon**: Gear icon ⚙️  
**Purpose**: Automated task executed by a system service  
**When to Use**:
- Call external APIs
- Execute database operations
- Trigger integrations
- System-to-system communication

**Configuration Options**:
- Service name/endpoint
- Input parameters
- Output mapping
- Error handling
- Timeout settings
- Retry logic

**Properties Panel Sections**:
- **General**: Basic task name and ID
- **Documentation**: Description of what the service does
- **Template**: Service template configuration
- **Execution listeners**: Triggers before/after execution
- **Extension properties**: Custom attributes
- **Example data**: Sample input/output for testing

**Use Case Example**:
```
User submits invoice → Service task calls accounting API → 
Auto-creates GL entry → Sends confirmation email
```

---

## 3. Send Task

**Icon**: Envelope/email icon 📧  
**Purpose**: Send a message to an external participant  
**When to Use**:
- Send notifications to users
- Email alerts
- Message queue operations
- External system notifications

**Configuration Options**:
- Recipient(s) definition
- Message template
- Message format (email, SMS, API)
- Subject and body
- Attachments
- Variable substitution

**Properties Panel Sections**:
- **General**: Task identification
- **Documentation**: Purpose and description
- **Template**: Message template details
- **Execution listeners**: Run scripts before/after send
- **Extension properties**: Custom send options
- **Example data**: Sample message content

**Use Case Example**:
```
Task approved → Send task → Email notification to submitter → 
Include approval details and next steps
```

---

## 4. Receive Task

**Icon**: Receive/inbox icon 📨  
**Purpose**: Wait for incoming message from external source  
**When to Use**:
- Wait for callback from external system
- Receive payment confirmation
- Wait for customer response
- Integration with third-party webhooks

**Configuration Options**:
- Message source identification
- Message type expected
- Variable mapping for received data
- Timeout period
- Fallback actions if timeout

**Properties Panel Sections**:
- **General**: Task details
- **Documentation**: What message is expected
- **Template**: Message structure template
- **Execution listeners**: Process received message
- **Extension properties**: Receive configuration
- **Example data**: Sample expected message

**Use Case Example**:
```
Send payment request → Receive task (wait for bank response) →
Timeout after 24 hours → Escalate if no response
```

---

## 5. Manual Task

**Icon**: Hand/person icon 🖐️  
**Purpose**: Human-performed task requiring manual action  
**When to Use**:
- User review and approval
- Manual verification
- Data entry
- Quality checks
- Physical world tasks

**Configuration Options**:
- Task assignment (specific user, role, or team)
- Form configuration (what fields to show)
- SLA/deadline
- Escalation rules
- Notifications
- Required approvals

**Properties Panel Sections**:
- **General**: Task name, ID, assignee
- **Documentation**: Instructions for performer
- **Template**: Form template for task
- **Execution listeners**: Trigger on task events
- **Extension properties**: Custom field configurations
- **Example data**: Sample form data

**Use Case Example**:
```
Invoice received → Manual task (Assign to Manager) →
Manager reviews and approves → Sends to Finance
```

---

## 6. Script Task

**Icon**: Code/script icon { }  
**Purpose**: Execute automated script/code  
**When to Use**:
- Complex calculations
- Data transformations
- Business logic execution
- Conditional processing
- Custom validations

**Configuration Options**:
- Script language (JavaScript, Python, Groovy, etc.)
- Script code
- Input variables
- Output variable assignment
- Error handling
- Timeout settings

**Properties Panel Sections**:
- **General**: Task identification
- **Documentation**: Script purpose
- **Template**: Script template/code editor
- **Execution listeners**: Additional triggers
- **Extension properties**: Script options
- **Example data**: Sample input/output

**Use Case Example**:
```
Manual task completed → Script task (Calculate total amount) →
IF amount > $5K THEN add to high-value queue
ELSE route normally
```

---

## 7. Call Activity

**Icon**: Expand/reference icon 🔗  
**Purpose**: Call a subprocess or external process  
**When to Use**:
- Reuse existing workflows
- Call a subprocess
- Reference another process
- Modular workflow design
- Process composition

**Configuration Options**:
- Process/subprocess to call
- Input parameter mapping
- Output variable mapping
- Process instance handling
- Error propagation
- Wait for completion (synchronous vs asynchronous)

**Properties Panel Sections**:
- **General**: Call activity identification
- **Documentation**: What process is called
- **Template**: Process reference configuration
- **Execution listeners**: Pre/post call events
- **Extension properties**: Call options
- **Example data**: Sample parameter passing

**Use Case Example**:
```
Main workflow → Call Activity (invokes "Approval Sub-process") →
Returns approval result → Main workflow continues
```

---

## 8. Sub-process (Collapsed)

**Icon**: Rectangle with collapsed marker [-]  
**Purpose**: Inline subprocess contained within main process  
**When to Use**:
- Group related tasks
- Encapsulate complex logic
- Improve diagram readability
- Local error handling scope

**Collapsed View**:
- Shows as single box
- Details hidden (collapsed)
- Cleaner diagram appearance
- Can be expanded to see contents

**Configuration Options**:
- subprocess name
- Input/output mapping (if called)
- Local variables
- Error handling events
- Compensation (undo) logic

**Properties Panel Sections**:
- **General**: Subprocess identification
- **Documentation**: Purpose of grouped tasks
- **Template**: Subprocess structure
- **Execution listeners**: Subprocess events
- **Extension properties**: Subprocess options
- **Example data**: Sample data flow

**Use Case Example**:
```
Main Workflow:
├─ [Subprocess: Validate Data] (collapsed)
│  └─ Can expand to see: Validate format, Check values, etc.
├─ Approve Task
└─ Execute
```

---

## 9. Sub-process (Expanded)

**Icon**: Rectangle with expanded marker [+]  
**Purpose**: Same as collapsed, but displayed in expanded form  
**When to Use**:
- When you need to edit tasks within the subprocess
- Detail view of what's happening inside
- Adding more tasks to subprocess

**Expanded View**:
- Shows all tasks inside
- Full diagram visibility
- Can add/edit contained tasks
- Takes more space on diagram

**Configuration Options**: Same as collapsed subprocess

**Properties Panel Sections**: Same as collapsed subprocess

---

## 10. Ad-hoc Sub-process (Collapsed)

**Icon**: Rectangle with asterisk [*]  
**Purpose**: Subprocess where tasks can be executed in any order  
**When to Use**:
- Flexible task execution
- Tasks can be skipped
- No strict sequence required
- Dynamic task selection

**Key Difference from Regular Subprocess**:
- Tasks are NOT sequential
- Tasks can be performed in any order
- Tasks can be skipped
- More flexible, less structured

**Configuration Options**:
- Task availability (Parallel vs Sequential)
- Task selection criteria
- Completion logic (how to know it's done)
- Input/output mapping
- Compensation logic

**Use Case Example**:
```
Processing Customer Request (Ad-hoc):
├─ Can do: Check inventory (skip if not needed)
├─ Can do: Verify payment (might need later)
├─ Can do: Update customer record (do anytime)
└─ User can pick which to do and in what order
```

---

## 11. Events (BPMN Event Types)

While not strictly "tasks," events are important workflow elements:

### Start Event
**Icon**: Circle (empty)  
**Purpose**: Marks workflow beginning  
**Types**:
- None (Simple start)
- Timer (Start at specific time)
- Message (Start when message received)
- Conditional (Start when condition met)

### End Event
**Icon**: Circle (filled/solid)  
**Purpose**: Marks workflow completion  
**Types**:
- None (Simple end)
- Terminate (Stop all)
- Error (End with error)
- Message (Send end message)

### Intermediate Event
**Icon**: Circle (double border)  
**Purpose**: Events that occur during workflow  
**Types**:
- Timer event (Delay/wait)
- Message event (Wait for message)
- Conditional event (Wait for condition)
- Escalation event (Escalate situation)

---

## 12. Gateway Elements (Conditional Logic)

### Exclusive Gateway (XOR)
**Icon**: Diamond with X  
**Purpose**: Only ONE path executes (IF/ELSE logic)  
**Example**:
```
IF amount > $5000
  THEN route to CFO
ELSE
  THEN route to Manager
```

### Inclusive Gateway (OR)
**Icon**: Diamond with O  
**Purpose**: ONE or MORE paths can execute  
**Example**:
```
IF high priority, route to Manager
IF urgent, route to VP (can do both)
IF new vendor, route to Compliance
```

### Parallel Gateway (AND)
**Icon**: Diamond with +  
**Purpose**: ALL paths execute in parallel  
**Example**:
```
Document received
  → Start Legal review (parallel)
  → Start Finance review (parallel)
  → Start Compliance review (parallel)
  → Wait for all 3 to complete
```

---

## 13. Task Properties Panel - All Sections

When you select any task type, the right panel shows these sections:

### Section 1: TASK (Checkbox)
- **Purpose**: Mark if this is a human task
- **Options**: ☐ Unchecked (default) or ☑ Checked
- **Effect**: Affects task assignment and visibility

### Section 2: General
- **Name**: Task identifier
- **ID**: System ID
- **Type**: Current task type
- **Assignee**: Who performs this task
- **Documentation**: Task description
- **Default Flow**: Default path if no conditions met

### Section 3: Documentation
- **Purpose**: Official task documentation
- **Content**: Task description, instructions
- **Visibility**: Can reference in forms and reports

### Section 4: Template
- **Purpose**: Task form or message template
- **Types**:
  - Form template (for manual tasks)
  - Email template (for send tasks)
  - Script template (for script tasks)
- **Content**: Template structure and fields

### Section 5: Execution Listeners
- **Purpose**: Run custom code on task events
- **Events**:
  - Start: When task begins
  - End: When task completes
  - Error: If task fails
- **Action**: Button (+) to add new listeners

### Section 6: Extension Properties
- **Purpose**: Custom attributes and configurations
- **Content**: Key-value pairs
- **Action**: Button (+) to add new properties
- **Examples**:
  - service_name: "PaymentAPI"
  - timeout: "3600"
  - retry_count: "3"

### Section 7: Example Data
- **Purpose**: Sample input/output for testing
- **Content**: JSON or structured data
- **Usage**: Testing and documentation

---

## 14. Task Configuration Common Settings

Regardless of task type, these settings are often available:

### SLA & Timers
- **Due Date**: When task must complete
- **Timer**: Automatic actions after delay
- **Escalation**: What happens if overdue

### Assignment
- **Assignee**: Single user
- **Assignee List**: Multiple users
- **Role**: Job title or role
- **Department/Team**: Group assignment
- **Dynamic**: Based on field value

### Input/Output Mapping
- **Input Variables**: Data into task
- **Output Variables**: Data out of task
- **Transformation**: Convert/map data
- **Validation**: Ensure data quality

### Error Handling
- **On Error**: What to do if task fails
- **Retry Logic**: Automatically retry
- **Fallback**: Alternative action
- **Escalation**: Notify manager

### Notifications
- **On Create**: Notify when created
- **On Assign**: Notify when assigned
- **On Complete**: Notify when done
- **On Delay**: Notify if approaching deadline
- **Email Template**: Customize message

---

## 15. Right Panel Navigation

The properties panel on the right side is organized like this:

```
┌─ TASK (checkbox)
├─ General (expandable section)
├─ Documentation (expandable section)
├─ Template (expandable section)
├─ Execution listeners (+ to add)
├─ Extension properties (+ to add)
└─ Example data (expandable section)
```

**How to Use**:
1. Click section header to expand/collapse
2. Click + button to add new items
3. Scroll down to see all sections
4. Fill in fields as needed
5. Click Save when done

---

## 16. Common Task Configuration Patterns

### Pattern 1: Simple Approval
```
Task Type: Manual task
Assignee: Department Manager
Template: Approval form
SLA: 1 day
Escalation: Email manager at 18 hours
Output: Approved Yes/No
```

### Pattern 2: Service Integration
```
Task Type: Service task
Service: Call REST API endpoint
Input: Order ID, Amount
Output: Transaction ID, Status
Error Handling: Retry 3 times, then escalate
Timeout: 30 seconds
```

### Pattern 3: Notification
```
Task Type: Send task
Message Type: Email
Recipient: Task creator
Template: "Your task was {{status}}"
Attachments: Task document
Async: Yes (don't wait for response)
```

### Pattern 4: Complex Logic
```
Task Type: Script task
Language: JavaScript
Logic: Calculate total, apply discount, validate
Input: Items array, Customer type
Output: Final amount
Error: Log to system, set status to "error"
```

---

## 17. Best Practices When Selecting Task Type

| Task Type | When to Use | When NOT to Use |
|-----------|-----------|-----------------|
| **Manual** | Human action needed | Pure automation |
| **Service** | API/system call | Human decision |
| **Send** | Notifications | Expecting response |
| **Receive** | Waiting for response | One-way messages |
| **Script** | Calculate/transform | Complex workflows |
| **Call Activity** | Reuse subprocess | Single workflow |
| **Subprocess** | Group tasks | Just 1-2 tasks |
| **Sub-process (Ad-hoc)** | Flexible order | Strict sequence |

---

## 18. Quick Reference: Task Type Icons

```
⚙️  Service task      → External system call
📧 Send task        → Send message/email
📨 Receive task      → Wait for message
🖐️  Manual task       → Human action needed
{ }  Script task      → Execute code
🔗 Call activity    → Call subprocess
📦 Subprocess        → Group of tasks
*   Ad-hoc subprocess → Tasks in any order
○   Start event      → Workflow beginning
●   End event        → Workflow completion
◇   Exclusive gateway → IF/ELSE logic
◇ᴼ  Inclusive gateway  → Multiple paths (OR)
◇⁺  Parallel gateway  → All paths (AND)
```

---

## Summary

**7 Main Task Types**:
1. Service task - Automated actions
2. Send task - Send messages
3. Receive task - Wait for messages
4. Manual task - Human actions
5. Script task - Execute code
6. Call activity - Call subprocess
7. Subprocess (2 styles) - Group tasks
8. Ad-hoc subprocess - Flexible ordering

**3 Workflow Element Types**:
- Events (Start/End/Intermediate)
- Gateways (Exclusive/Inclusive/Parallel)
- Connections (Flows between elements)

**7 Property Panel Sections**:
1. TASK checkbox
2. General details
3. Documentation
4. Template
5. Execution listeners
6. Extension properties
7. Example data

---

**Version**: v7.49.0+  
**BPMN Standard**: 2.0  
**Last Updated**: 2026-06-11  
**Powered by Contellect**
