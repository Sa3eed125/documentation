---
sidebar_label: "📘 Detailed Guide"
name: "📘 Detailed Guide"
description: Complete step-by-step guide for creating and configuring Folder Content Types in ECM.
user-invocable: true
sidebar_position: 2
---

# Folder Content Types - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Purpose
This guide provides step-by-step instructions for creating, building, and managing Folder Content Types using the Form.io builder. Folder CTs define metadata for folder entities that users create in the Repository.

## Scope
- Feature page: Configuration → Content Type → Folders Content Types
- Builder engine: Form.io
- Use case: Creating metadata forms for folder/container records

## How To Create a Folder Content Type

### Step-by-Step: Create Folder Content Type
1. Open **Configuration** → **Content Type**.
2. Click **Folders Content Types** tab at the top.
3. Click **Create New Content Type** button.
4. Enter **Name** (required, e.g., "Project Folder").
5. Enter **Description** (optional, e.g., "Standard folder for project files").
6. In the **Form Builder** canvas:
   - Drag components from the left palette into the canvas.
   - Configure each component (see Component Reference section below).
   - Use Preview to validate form appearance.
7. Click **Create** button to save.
8. Verify the new Folder CT appears in the Folders Content Types list.

### Configuration Pattern (Recommended Order)
For each component you add, configure in this sequence:
1. **Display**: Label, Placeholder, Tooltip, Help text.
2. **Data**: API Key (required), Default value, Input format.
3. **Validation**: Required flag, Min/Max length, Pattern/Regex.
4. **Logic**: Show/hide conditions, Calculated values.
5. **Access**: Read-only rules, Hidden by role.

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
9. Click **Preview** to see the form as users will see it when creating folders.
10. Click **Create** to save the Folder CT.

### Builder Toolbar Buttons
- **Create**: Save the Folder CT. Requires Name + optional components.
- **Cancel**: Discard changes and return to the Folder CT list.
- **Preview**: Open split view to see live form preview.
- **Export**: Download the form schema as JSON.
- **Import**: Load a previously exported JSON schema.

## Component Reference

### Basic Components
All 33 Form.io components are available for Folder CT. Here are the most commonly used in folder metadata:

#### Text Field (textfield)
- **Use**: Folder name, project code, owner name, keywords.
- **Example**: "Folder Name", "Project Code"

#### Text Area (textarea)
- **Use**: Folder description, notes, scope.
- **Example**: "Folder Purpose", "Comments"

#### Number (number)
- **Use**: Budget amount, cost center, employee ID.
- **Example**: "Budget (USD)", "Cost Center Code"

#### Checkbox (checkbox)
- **Use**: Flags, compliance checkboxes, approval status.
- **Example**: "Confidential", "Requires Approval"

#### Select (select)
- **Use**: Department, project, classification level.
- **Example**: "Department": HR, Finance, IT, Sales

#### Radio (radio)
- **Use**: Folder type, access level, priority.
- **Example**: "Priority": High, Medium, Low

#### Date / Time (datetime)
- **Use**: Folder creation deadline, project start/end date.
- **Example**: "Project Start Date", "Deadline"

#### Currency (currency)
- **Use**: Budget, allocation amounts.
- **Example**: "Allocated Budget"

### Layout Components

#### Columns (columns)
- **Use**: Organize folder metadata side-by-side.
- **Example**: Left column "Project Info", Right column "Finance Info"

#### Field Set (fieldset)
- **Use**: Group related folder metadata.
- **Example**: "Project Metadata", "Compliance Information"

#### Tabs (tabs)
- **Use**: Split folder CT into logical sections.
- **Example**: Tab 1 "Basic Info", Tab 2 "Governance", Tab 3 "Access"

#### HTML Element (htmlelement)
- **Use**: Section headings, help text, instructions.
- **Example**: `<h3>Project Details</h3>`

### Data Components

#### Hidden (hidden)
- **Use**: System folder ID, creation timestamp.
- **Example**: Auto-generated folder UUID

#### Container (container)
- **Use**: Group related metadata into nested object.
- **Example**: "Project" container holding project_id, project_name, project_manager

#### Data Grid (datagrid)
- **Use**: Multiple stakeholders, contributors, approvers.
- **Example**: "Stakeholders" grid with Name, Role, Email

### Contellect Components

#### File (file)
- **What**: File upload for folder-level attachments.
- **Use**: Attach folder charter, project plan, governance documents.
- **Example**: "Upload Folder Charter", "Project Approval Document"

## Component Attributes & Control Options

### Hidden Toggle
- **Effect**: Hides component from folder creation form and table view.
- **Use**: Hide system fields or internal metadata.

### Table View Toggle
- **Effect**: Controls whether field appears as a column in folder list view.
- **When enabled**: Shows in table + form.
- **When disabled**: Shows in form only.
- **Use**: Keep verbose fields out of folder list view.

### Clear Value When Hidden
- **Effect**: Clears value if component becomes hidden via conditional logic.
- **Use**: Maintain data integrity.

### Default Value
- **Effect**: Pre-fills component with initial value.
- **Use**: Speed up folder creation with standard values.

## Buttons & Actions Reference

### List View Actions

#### Refresh Button
- **Action**: Reload Folder CT list from server.

#### Create New Content Type Button
- **Action**: Open builder to create new Folder CT.

#### Preview Button (Row)
- **Action**: Show preview of the folder creation form.

#### Edit Button (Row)
- **Action**: Open builder with existing Folder CT schema.

#### Delete Button (Row)
- **Action**: Permanently remove Folder CT.

#### Clone Button (Row)
- **Action**: Create identical copy for modification.

### Form Builder Actions

#### Create Button
- **Action**: Save Folder CT
- **Requires**: Name filled (components are optional for Folder CT)

#### Cancel Button
- **Action**: Discard changes, return to list.

#### Preview Button
- **Action**: Split view with live form preview.
- **Includes**: Validate button.

#### Export Button
- **Action**: Download form schema as JSON.

#### Import Button
- **Action**: Load JSON schema file to create or modify Folder CT.

## Common Folder CT Configurations

### Example 1: Simple Project Folder
```
Folder Name (Text Field, Required)
Project ID (Text Field, Required)
Project Manager (Text Field)
Department (Select)
Start Date (Date)
Budget (Currency)
```

### Example 2: Comprehensive Classification Folder
```
Folder Name (Text Field, Required)
Folder Type (Radio): Project, Case, Maintenance
Classification Level (Select): Public, Internal, Confidential, Secret
Owner (Text Field, Required)
Approvers (Data Grid): Name, Email, Role
Retention Period (Number)
Review Date (Date)
Compliance Documents (File)
```

### Example 3: HR Case Folder
```
Case ID (Text Field, Required, Hidden from table view)
Employee Name (Text Field, Required)
Case Type (Select): Onboarding, Performance, Separation, Complaint
Status (Radio): Open, In Progress, Closed
HR Owner (Text Field)
Case Notes (Text Area)
Supporting Documents (File)
Confidential (Checkbox)
```

## Live Validation Notes (Folder CT)
- UI mode identifier: `appliedFor=FolderContentType`
- Components available: All 33 Form.io components (including File) + Contellect File component.
- Approval Task Form: NOT available in Folder CT (Task CT only).
- Empty Folder CT is allowed (components optional).
- Folder CT used ONLY in Repository folder creation, NOT in workflow.

## Common Mistakes & Tips

| Issue | Solution |
|-------|----------|
| Folder form too complex | Use Tabs or Field Sets to organize |
| Users don't understand fields | Add Help text and Tooltips |
| Required fields missing | Mark critical fields as Required |
| Metadata not searchable | Ensure fields are indexed (in search configuration) |
| Default values not appearing | Check field Key matches configuration |
| Can't select field from dropdown | Use Search field(s) to find component |
| User cannot see created records | Verify the user/group has Create permission on Folder Content Types and view access in the destination repository path |
| Export/Import failing | Validate JSON format is correct |

## References
- Form.io docs: https://help.form.io/userguide/forms/form-building
- ECM Configuration path: Configuration → Content Type → Folders Content Types
- Related: File Content Types, Task Form Content Types

---

## 📚 Next Steps

<details>
<summary><strong>Continue Learning</strong></summary>

**Just configured a Folder Content Type?** Check out the [visual guide](./%F0%9F%97%BA%20Diagram.md) to understand folder creation flows and organization patterns.

**Want to explore other Content Types?**
- [File Content Types](../File%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md) - For document and record metadata
- [Task Content Types](../Task%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md) - For workflow user tasks

**Need a quick refresh?** Return to [Folder Content Types - Knowledge Overview](./%F0%9F%A7%A0%20Knowledge%20Overview.md)
</details>

---
