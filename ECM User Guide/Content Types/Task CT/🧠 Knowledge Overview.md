---
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "🧠 Knowledge Overview"
---

# Task Form Content Types - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## ✅ What Is Task Form Content Types?

Task Form Content Types defines the metadata schema and form layout for human user tasks in ECM Workflows. These forms are rendered when a workflow task is assigned to a user for action (approval, review, data entry, decision).

:::info Key Concept
**Task Form Content Types = The Blueprint for Workflow User Tasks**

When you build a Task Content Type, you're defining what form users see when they open a workflow task to take action.
:::

## 🤇 Why We Need Task Form Content Types?

:::tip Business Benefits
- **Standardize** task interface across all workflow processes
- **Capture** task-specific data: decisions, approvals, feedback, review comments
- **Enforce** required actions and decisions on tasks
- **Control** which data fields are presented to task assignees
- **Enable** dynamic task behavior: show/hide fields based on workflow state
- **Support** task-specific components like approval decisions and routing options
- **Improve** task completion quality through consistent form design
:::

## 🗂️ Where It Is in ECM

:::note UI Navigation
- **Path**: Configuration → Content Type → Task Form Content Types
- **List page URL**: `/configuration/content-type`
- **Create URL**: `/configuration/content-type/create-document-type?appliedFor=TaskFormContentType`
:::

## 🔗 Where We Use Task Form Content Types in ECM

Task Form Content Types are **ONLY** accessible through Workflow user tasks:

<details>
<summary><strong>📜 Workflow User Task Assignment</strong></summary>
Form is rendered when a user opens an assigned workflow task.
</details>

<details>
<summary><strong>💳 Task Data Capture</strong></summary>
Form fields capture user input, decisions, or approval outcomes.
</details>

<details>
<summary><strong>📊 Approval Workflows</strong></summary>
Special Approval Task Form component captures approval decisions and routing.
</details>

<details>
<summary><strong>📝 Review Workflows</strong></summary>
Task form captures reviewer feedback, comments, and recommendations.
</details>

<details>
<summary><strong>🤖 Decision Workflows</strong></summary>
Task form inputs feed into DMN decision models for next-step routing.
</details>

## ✅ When To Choose Task Form Content Types

:::warning Use Task Form Content Types When:
- You are defining a human user task in a workflow process
- The task requires capturing structured data or decisions from the assignee
- You need approval/rejection/routing decisions from task users
- Task data must be standardized across multiple workflows or process instances
- Task form behavior should change dynamically based on document state or previous steps
:::

## 📃 Task CT Key Notes

:::note Important Details
- Task Form Content Types are in the UI section: **"Task Form Content Types"** (note the plural)
- Task CT includes all standard Form.io components (33 total) plus the **Approval Task Form** component **(Task CT ONLY)**
- Task CT is **NOT** used in Repository or Workspace create-record screens
- Task CT is **NOT** used in folder creation
- Task CT is rendered **ONLY** when a workflow task is opened by the assignee
- Task CT row actions: preview, edit, delete, clone
- Task CT creation requires: Name, Description, and at least one component
- UI mode identifier: `appliedFor=TaskFormContentType`
:::

## 📊 Approval Task Form Component (Task CT Exclusive)

### What Is Approval Task Form?

Approval Task Form is a special, task-specific component available **ONLY** in Task Form Content Types.

:::warning Special Component
- **Purpose**: Capture approval decision (Approve, Reject, Revise) and optional comments/notes
- **Output**: Decision field + routing logic for workflow next steps
- **Use**: Approval workflows, review processes, sign-off tasks
- **Configuration**: Decision options, required fields, routing per decision
:::

### When To Use Approval Task Form

Use this component when:
- Task requires a binary or multi-step decision (Approve, Reject, Revise, Escalate)
- Decision must be captured and routed to next workflow step
- Comments or justification must accompany the decision
- Multiple approval paths exist based on decision outcome

## Common Task CT Use Cases

| Use Case | Description | Example |
|----------|-------------|---------|
| Leave Request Approval | Manager approves/rejects leave requests | Decision: Approve, Reject; Comments required |
| Document Review | Reviewer provides feedback on document | Review Task Form with feedback fields + approve/reject |
| Compliance Sign-Off | Compliance officer approves document | Approval Task Form with compliance checklist |
| Invoice Approval | Finance approves invoice for payment | Payment approved/rejected; Reason field |
| Hiring Approval | HR/Manager approves candidate progression | Candidate info + approve/reject/interview decision |
| Change Request | Change board reviews and decides on change | Change description + approve/reject + reason |

## Differences: File CT vs. Task CT

| Aspect | File CT | Task CT |
|--------|---------|---------|
| **Used for** | File/document metadata | Workflow user task data |
| **Where used** | Repository, Workspace, Workflow processes | Workflow tasks ONLY |
| **When rendered** | When creating/editing a file record | When user opens assigned task |
| **Special components** | File upload | Approval Task Form |
| **Data flow** | To repository, workflows, RMS | To workflow engine for routing |
| **Typical fields** | Document attributes (title, date, etc.) | Task decisions, approvals, feedback |
| **Integration** | Template Generator, DMN, RMS | Workflow routing, decision tables |

## References
- Configuration location: Configuration → Content Type → Task Form Content Types
- Form.io builder docs: https://help.form.io/userguide/forms/form-building
- Related: Workflow Configuration, Approval Task Form Component
