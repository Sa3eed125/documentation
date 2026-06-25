---
sidebar_label: "📘 Detailed Guide"
name: "📘 Detailed Guide"
description: Complete guide for creating and configuring Task Form Content Types in ECM, including the Approval Task Form component.
user-invocable: true
sidebar_position: 2
---

# Task Form Content Types - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Purpose
This guide provides step-by-step instructions for creating, building, and managing Task Form Content Types. Task CTs define forms rendered when workflow tasks are assigned to users.

## Scope
- Feature page: Configuration → Content Type → Task Form Content Types
- Builder engine: Form.io
- Use case: Creating task forms for workflow user task nodes

## How To Create a Task Form Content Type

### Step-by-Step: Create Task Form Content Type
1. Open **Configuration** → **Content Type**.
2. Click **Task Form Content Types** tab at the top.
3. Click **Create New Content Type** button.
4. Enter **Name** (required, e.g., "Leave Request Approval").
5. Enter **Description** (optional, e.g., "Form for manager to approve/reject leave").
6. In the **Form Builder** canvas:
   - Drag components from the left palette into the canvas.
   - Configure each component (see Component Reference section below).
   - Use Preview to validate form appearance as task users will see it.
7. Click **Create** button to save.
8. Verify the new Task CT appears in the Task Form Content Types list.

### Configuration Pattern (Recommended Order)
For each component you add, configure in this sequence:
1. **Display**: Label, Placeholder, Tooltip, Help text.
2. **Data**: API Key (required), Default value, Input format.
3. **Validation**: Required flag, Min/Max length, Pattern/Regex.
4. **Logic**: Show/hide conditions based on document state or previous task output.
5. **Task-specific**: Routing based on decision (especially for Approval Task Form).

## Form.io Builder Usage

### Builder Workflow
1. Click **Create New Content Type** to open the builder.
2. On the left panel: Browse components by category.
3. Use **Search field(s)** textbox to find a component by name.
4. **Drag** component from palette to the center canvas.
5. Click the **gear/settings icon** on the component to configure it.
6. Set Label, Key, Required, Validation, and Data options.
7. **Close** the dialog to save component settings.
8. **Repeat** for all required fields.
9. Click **Preview** to see the form as task users will see it when the task is assigned.
10. Click **Create** to save the Task CT.

### Builder Toolbar Buttons
- **Create**: Save the Task CT. Requires Name + at least 1 component.
- **Cancel**: Discard changes and return to the Task CT list.
- **Preview**: Open split view to see live form preview.
- **Export**: Download the form schema as JSON.
- **Import**: Load a previously exported JSON schema.

## Component Reference

### Basic Components (Most Commonly Used in Tasks)

#### Text Field (textfield)
- **Use**: Reviewer comments, request justification, action notes.
- **Example**: "Rejection Reason", "Comments for Requestor"

#### Text Area (textarea)
- **Use**: Detailed feedback, review comments, explanations.
- **Example**: "Detailed Feedback", "Review Comments"

#### Checkbox (checkbox)
- **Use**: Compliance checklist items, conditions, confirmations.
- **Example**: "Verified Compliance", "Budget Approved", "All Documents Attached"

#### Select (select)
- **Use**: Category selection, priority adjustment, routing choices.
- **Example**: "Priority Level", "Department to Route To", "Next Approver"

#### Radio (radio)
- **Use**: Binary or multi-step decisions, approval options.
- **Example**: "Decision": Approve, Reject, Request Changes
- **Note**: Approval Task Form is often better for approval workflows; see below.

#### Date / Time (datetime)
- **Use**: Approval date, effective date, deadline.
- **Example**: "Effective Date", "Implementation Date"

#### Number (number)
- **Use**: Amounts, percentages, ratings, adjustments.
- **Example**: "Approved Amount", "Discount Percentage", "Quality Score"

#### Rating (survey or similar)
- **Use**: Quality rating, approval level, confidence score.
- **Example**: "Document Quality Rating" (1-5 stars)

### Contellect Components (Task CT Exclusive)

#### Approval Task Form (approvalTaskForm) **[TASK CT ONLY]**
- **What**: Specialized component for capturing approval decisions and routing logic.
- **How to use**: Drag Approval Task Form into canvas for task-based approval workflows.
- **Best for**: Approval tasks, sign-off workflows, decision-based routing.
- **Key configuration**: 
  - Decision options (Approve, Reject, Revise, etc.)
  - Required approver role/justification fields
  - Conditional visibility based on approval decision
  - Routing/next step per decision outcome
- **Output**: Decision field + associated data feeds to workflow engine
- **Example workflow**: Manager task opens → Form shows document summary + Approval Task Form → Manager selects Approve/Reject + Comments → Form submitted to workflow engine for routing

#### File (file)
- **What**: File upload component for task attachments.
- **Use**: Attach supporting documents, approvals, evidence.
- **Example**: "Upload Signed Approval", "Attach Updated Document"

### Layout Components

#### Columns (columns)
- **Use**: Side-by-side task information.
- **Example**: Left side document preview info, Right side approval fields.

#### Field Set (fieldset)
- **Use**: Group related task fields.
- **Example**: "Approval Information", "Routing Details"

#### Tabs (tabs)
- **Use**: Split task into logical sections.
- **Example**: Tab 1 "Document Summary", Tab 2 "Approval Decision", Tab 3 "Routing"

#### HTML Element (htmlelement)
- **Use**: Task instructions, headings, help text.
- **Example**: `<h3>Please review and approve this leave request</h3>`

#### Panel (panel)
- **Use**: Highlight important task information or decisions.
- **Example**: Approval summary panel, routing decision panel.

### Data Components

#### Hidden (hidden)
- **Use**: Task ID, workflow instance ID, routing data.
- **Example**: System fields auto-populated by workflow

#### Container (container)
- **Use**: Group related approval fields together.
- **Example**: "Approval" container with decision, date, justification

#### Data Grid (datagrid)
- **Use**: Multiple reviewers, cascading approvals, routing matrix.
- **Example**: "Approval Chain": Person 1 Decision, Person 2 Decision, Final Status

## Approval Task Form - Deep Dive

### What Does Approval Task Form Do?
Approval Task Form is a specialized task component that:
1. Presents decision options to the task user (e.g., Approve, Reject, Revise).
2. Captures optional justification or comments for the decision.
3. Routes the task result to the next workflow step based on the decision.
4. Integrates with workflow engine to trigger conditional next steps.

### Configuring Approval Task Form

**Basic Setup:**
1. Drag **Approval Task Form** into the Task CT canvas.
2. Open component settings (gear icon).
3. Configure:
   - **Decision Options**: Define buttons/choices (e.g., Approve, Reject, Request Changes)
   - **Required Fields**: Mark justification required for Reject? Mark approval notes required?
   - **Display**: Label, Instructions, Help text for task users

**Routing Configuration:**
1. In workflow definition, map Approval Task Form output to decision nodes.
2. Each decision option (Approve, Reject, Revise) routes to different next step.
3. Task form output field becomes workflow variable for conditional routing.

### Example: Leave Request Approval Task

```
Task Name: Leave Request Approval

Fields:
  - Employee Name (Text Field, Read-Only): Filled from File CT
  - Leave Type (Text Field, Read-Only): Filled from File CT
  - Leave Dates (Text Field, Read-Only): Filled from File CT
  - Requested Days (Number, Read-Only): Filled from File CT
  
  === APPROVAL SECTION ===
  - Approval Task Form (configured with options):
    * Approve
    * Reject
    * Request Additional Info
  
  - Approval Comments (Text Area, Required if Reject selected)
  - Approved Leave Days (Number, Shown if Approve selected)

Routing:
  - Approve → Grant leave, send confirmation to employee
  - Reject → Deny leave, send rejection to employee with comments
  - Request Additional Info → Send request back to employee
```

## Component Attributes & Control Options

### Hidden Toggle
- **Effect**: Hides component from task form.
- **Use**: Hide fields not needed for this specific task.

### Table View Toggle
- **Effect**: Not typically used in Task CTs (task forms don't show table view).
- **Note**: Can be ignored for task forms.

### Clear Value When Hidden
- **Effect**: Clears value if component becomes hidden via conditional logic.
- **Use**: Ensure task routing based on hidden field values doesn't cause issues.

### Default Value
- **Effect**: Pre-populates component with initial value.
- **Use**: Set default approval level, pre-fill common responses.
- **Example**: "Approval Status" defaults to "Pending Review"

### Conditional Show/Hide
- **Purpose**: Show/hide fields based on previous fields or workflow state.
- **Example**: Show "Rejection Reason" field ONLY if Reject decision is selected.
- **Configuration**: Use Logic tab in component settings.

## Buttons & Actions Reference

### List View Actions

#### Refresh Button
- **Action**: Reload Task CT list from server.

#### Create New Content Type Button
- **Action**: Open builder to create new Task CT.

#### Preview Button (Row)
- **Action**: Show preview of the task form as users will see it.

#### Edit Button (Row)
- **Action**: Open builder with existing Task CT schema.

#### Delete Button (Row)
- **Action**: Permanently remove Task CT.

#### Clone Button (Row)
- **Action**: Create identical copy for modification.

### Form Builder Actions

#### Create Button
- **Action**: Save Task CT
- **Requires**: Name filled + 1+ component

#### Cancel Button
- **Action**: Discard changes, return to list.

#### Preview Button
- **Action**: Split view with live form preview as task user sees it.

#### Export Button
- **Action**: Download form schema as JSON.

#### Import Button
- **Action**: Load JSON schema file.

## Common Task CT Patterns

### Pattern 1: Simple Approval
```
Task Form CT: Manager Approval

Fields:
  - Document Summary (HTML)
  - Approval Task Form (Approve/Reject)
  - Rejection Reason (Text Area, show if Reject)
```

### Pattern 2: Multi-Step Approval
```
Task Form CT: Department Review

Fields:
  - Document (Read-Only)
  - Technical Review (Approve/Reject/Revise)
  - Technical Comments (Text Area)
  - Compliance Check (Checkbox)
  - Final Approval (Approval Task Form)
  - Approval Date (Date)
```

### Pattern 3: Leave Request with Routing
```
Task Form CT: Leave Request Approval

Fields:
  - Leave Summary (HTML)
  - Leave Type (Read-Only)
  - Start/End Dates (Read-Only)
  - Days Requested (Number, Read-Only)
  - Manager Decision (Approval Task Form: Approve/Reject/Request Info)
  - Rejection Reason (Text Area, conditional)
  - Approved Days (Number, conditional)
  - Routing (Radio: Escalate to HR if needed)
```

## Live Validation Notes (Task CT)
- UI mode identifier: `appliedFor=TaskFormContentType`
- Components available: All 33 Form.io components PLUS **Approval Task Form** (unique to Task CT).
- Approval Task Form: Only available in Task CT, not in File or Folder CT.
- Task CT used ONLY in workflow task assignment, not in Repository/Workspace create.
- Task CT rendered when user opens assigned task in workflow.

## Common Mistakes & Tips

| Issue | Solution |
|-------|----------|
| Task form too complex | Use Tabs or hide conditional fields |
| Decision not routing correctly | Verify Approval Task Form output field matches workflow mapping |
| Required fields missing | Mark critical approval/justification fields as Required |
| Users confused by task | Add clear instructions via HTML Element or Tooltip |
| Conditional fields not showing | Check Logic conditions in component settings |
| Approval comments not capturing | Add Text Area after Approval Task Form for optional comments |
| Can't find Approval Task Form | Search "approval" in component palette; it's in Contellect Fields |

## References
- Form.io docs: https://help.form.io/userguide/forms/form-building
- ECM Configuration path: Configuration → Content Type → Task Form Content Types
- Related: Workflow Configuration, Approval workflows, DMN Decision Models
- Approval Task Form specific: Only available in Task CT for workflow task nodes

---

## 📚 Next Steps

<details>
<summary><strong>Continue Learning</strong></summary>

**Just configured a Task Content Type?** Check out the [visual guide](./%F0%9F%97%BA%20Diagram.md) to understand task execution flows and workflow integration.

**Want to explore other Content Types?**
- [File Content Types](../File%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md) - For document and record metadata
- [Folder Content Types](../Folder%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md) - For folder organizational metadata

**Need a quick refresh?** Return to [Task Content Types - Knowledge Overview](./%F0%9F%A7%A0%20Knowledge%20Overview.md)
</details>

---
