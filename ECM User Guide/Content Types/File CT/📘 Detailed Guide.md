---
sidebar_label: "📘 Detailed Guide"
name: "📘 Detailed Guide"
description: Complete step-by-step guide for creating and configuring File Content Types in ECM, including all components, attributes, and button actions.
user-invocable: true
sidebar_position: 2
---

# File Content Types - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


:::tip Step-by-Step Instructions
This guide provides **hands-on, practical instructions** for creating, building, and managing File Content Types using the Form.io builder. Follow each section sequentially to build your first File Content Type.
:::

:::note Quick Navigation
- **New to File CT?** Start with [\"How To Create a File Content Type\"](#how-to-create-a-file-content-type)
- **Ready to configure fields?** Jump to [\"Component Reference\"](#component-reference)
- **Need help with Form.io?** See [\"Form.io Builder Usage\"](#formio-builder-usage)
- **Looking for troubleshooting tips?** Check [\"Common Mistakes & Tips\"](#common-mistakes--tips)
:::

## Purpose
This guide provides step-by-step instructions for creating, building, and managing File Content Types using the Form.io builder. It covers all available components, configuration options, and actions.

## Scope
- **Feature page**: Configuration → Content Type → Files Content Types
- **Builder engine**: Form.io
- **Use case**: Creating metadata forms for file/document records

## How To Create a File Content Type

### Step-by-Step: Create File Content Type
1. Open **Configuration** → **Content Type**.
2. Click **Files Content Types** tab at the top.
3. Click **Create New Content Type** button.
4. Enter **Name** (required, e.g., "Invoice Record").
5. Enter **Description** (optional, e.g., "Metadata for invoice documents").
6. In the **Form Builder** canvas:
   - Drag components from the left palette into the canvas.
   - Configure each component (see Component Reference section below).
   - Use Preview to validate form appearance.
7. Click **Create** button to save.
8. Verify the new File CT appears in the Files Content Types list.

### Configuration Pattern (Recommended Order)
For each component you add, configure in this sequence:
1. **Display**: Label, Placeholder, Tooltip, Help text.
2. **Data**: API Key (required), Default value, Input format.
3. **Validation**: Required flag, Min/Max length, Pattern/Regex, Custom validation.
4. **Logic**: Show/hide conditions, Calculated values, Dependent fields.
5. **Access**: Read-only rules, Hidden by role (if permissions enabled).

## Form.io Builder Usage

### Builder Workflow
1. Click **Create New Content Type** to open the builder.
2. On the left panel: Browse components by category (Basic, Advanced, Layout, Data, Premium, Contellect Fields).
3. Use **Search field(s)** textbox to find a component by name.
4. **Drag** component from palette to the center canvas.
5. Click the **gear/settings icon** on the component to open its configuration dialog.
6. Set Label, Key, Required, Validation, and Data options.
7. **Close** the dialog to save component settings.
8. **Repeat** for all required fields.
9. Click **Preview** to see the form as users will see it.
10. Click **Create** to save the File CT.

### Builder Toolbar Buttons
- **Create**: Save the File CT. Requires Name + at least 1 component.
- **Cancel**: Discard changes and return to the File CT list.
- **Preview**: Open split view to see live form preview.
- **Export**: Download the form schema as JSON.
- **Import**: Load a previously exported JSON schema.

## Component Reference

### Basic Components

#### Text Field (textfield)
- **What**: Single-line text input for names, titles, IDs.
- **How to use**: Drag Text Field, set label (e.g., "Document Title"), set key (e.g., "title"), mark Required if needed.
- **Key configuration**: Label, Key, Placeholder, Required, Min/Max length, Pattern regex.
- **Example**: "Invoice Number" field with pattern `^INV-\d+$`

#### Text Area (textarea)
- **What**: Multi-line text input for notes, descriptions, comments.
- **How to use**: Use for longer text entries.
- **Key configuration**: Rows (3-10), Label, Key, Required, Min/Max length.
- **Example**: "Comments" or "Description of document"

#### Number (number)
- **What**: Numeric-only input for quantities, amounts, serial numbers.
- **How to use**: Use for financial amounts, serial numbers, counts.
- **Key configuration**: Decimal places, Min/Max value, Step size, Required.
- **Example**: "Invoice Amount", "Page Count"

#### Password (password)
- **What**: Masked text input for sensitive data.
- **How to use**: Rarely used in File CT; use for secret tokens or codes if needed.
- **Key configuration**: Masking behavior, Min/Max length, Required.

#### Checkbox (checkbox)
- **What**: Boolean true/false toggle.
- **How to use**: For flags, flags, compliance checks, approvals.
- **Key configuration**: Default checked, Required, Label position.
- **Example**: "Confidential Document", "Requires Approval"

#### Select Boxes (selectboxes)
- **What**: Multiple checkbox options group.
- **How to use**: User can select multiple values from a list.
- **Key configuration**: Values list, inline/grid display, Min/Max selected.
- **Example**: "Document Tags": Education, Finance, Legal, HR

#### Select (select)
- **What**: Single or multi-select dropdown.
- **How to use**: For controlled lists like document type, department, status.
- **Key configuration**: Data source, Value/Label mapping, Multi-select flag, Lazy load.
- **Example**: "Document Type": Contract, Report, Invoice, Memo

#### Radio (radio)
- **What**: Single selection from visible options.
- **How to use**: When only one of a few options is valid.
- **Key configuration**: Options list, Inline/Vertical display, Required.
- **Example**: "Approval Status": Pending, Approved, Rejected

#### Button (button)
- **What**: Action button for custom actions in the form.
- **How to use**: For custom workflows or form actions.
- **Key configuration**: Action type (submit/custom), Theme, Disable on invalid.

### Advanced Components

#### Email (email)
- **What**: Email-validated text input.
- **How to use**: For document owner, contact email fields.
- **Key configuration**: Required, Unique (if needed), Email format validation.

#### Url (url)
- **What**: URL-validated text input.
- **How to use**: For reference links, external document URLs.
- **Key configuration**: URL validation, Required, Placeholder.

#### Phone Number (phoneNumber)
- **What**: Phone input with number formatting.
- **How to use**: For contact numbers related to document.
- **Key configuration**: Input mask/format, Country, Required.

#### Tags (tags)
- **What**: Multi-tag token input.
- **How to use**: For flexible keyword tagging, document categories.
- **Key configuration**: Allow custom tags, Separator (comma/space), Max tags.

#### Date / Time (datetime)
- **What**: Date and time picker.
- **How to use**: For document creation date, due date, effective date.
- **Key configuration**: Date format, Enable/disable time, Min/Max date.
- **Example**: "Document Date", "Contract Expiration"

#### Time (time)
- **What**: Time-only picker.
- **How to use**: Rarely used unless time-specific data is needed.
- **Key configuration**: Time format, Minute step, Required.

#### Currency (currency)
- **What**: Numeric monetary field with currency symbol.
- **How to use**: For amounts, invoice totals, contract values.
- **Key configuration**: Currency code/symbol, Decimal precision, Min/Max.
- **Example**: "Invoice Total", "Contract Amount"

#### Survey (survey)
- **What**: Matrix-style survey/rating input.
- **How to use**: For ratings, evaluations, quality scores on documents.
- **Key configuration**: Questions, Rating scale, Required rows.

#### Signature (signature)
- **What**: Digital signature pad.
- **How to use**: For document approval/acknowledgement capture.
- **Key configuration**: Width/height, Background color, Required.

### Layout Components

#### HTML Element (htmlelement)
- **What**: Static HTML block for headings, instructions, help text.
- **How to use**: Add section headings or instructional text.
- **Key configuration**: HTML content, CSS class.
- **Example**: `<h3>Document Metadata</h3>`

#### Content (content)
- **What**: Static rich content block.
- **How to use**: For static instructions or section dividers.
- **Key configuration**: Content body, Sanitization.

#### Columns (columns)
- **What**: Multi-column layout container.
- **How to use**: Organize components side-by-side for compact form.
- **Key configuration**: Number of columns, Width ratios, Responsive behavior.

#### Field Set (fieldset)
- **What**: Grouping container with title and border.
- **How to use**: Group related fields under a logical section.
- **Key configuration**: Legend/title, Nested components.
- **Example**: "Document Routing", "Compliance Information"

#### Panel (panel)
- **What**: Framed container for grouped fields.
- **How to use**: Logical partitioning in long forms.
- **Key configuration**: Panel title, Collapsible, Theme.

#### Table (table)
- **What**: Grid layout container.
- **How to use**: Place components in row/column positions.
- **Key configuration**: Row/column count, Cell merge.

#### Tabs (tabs)
- **What**: Multi-tab container.
- **How to use**: Split large File CT forms into tabbed sections.
- **Key configuration**: Tab titles, Default tab, Nested components.
- **Example**: Tab 1 "Basic Info", Tab 2 "Advanced Metadata", Tab 3 "Compliance"

#### Well (well)
- **What**: Simple highlighted container.
- **How to use**: Visually separate grouped fields.
- **Key configuration**: Styling class, Inner components.

### Data Components

#### Hidden (hidden)
- **What**: Non-visible field for internal/system values.
- **How to use**: Store system IDs or calculated values not shown to users.
- **Key configuration**: Default value, Protected flag.
- **Example**: System "document_id", "creation_timestamp"

#### Container (container)
- **What**: Object wrapper for nested fields (groups as one JSON object).
- **How to use**: Group fields into a nested data structure.
- **Key configuration**: Key name, Nested components.

#### Data Grid (datagrid)
- **What**: Repeatable rows of the same field set.
- **How to use**: For line items, repeated sections.
- **Key configuration**: Initial rows, Min/Max rows, Add/Remove row behavior.
- **Example**: "Attachments List", "Related Documents"

#### Edit Grid (editgrid)
- **What**: Repeatable records with row editor dialog.
- **How to use**: When each row needs detailed editing.
- **Key configuration**: Row template, Min/Max rows, Inline/edit mode.

#### Nested Form (form)
- **What**: Embed another form resource inside this form.
- **How to use**: Reuse existing form schema.
- **Key configuration**: Referenced form, Submission behavior, Lazy load.

### Contellect Components

#### File (file) **[File CT Only]**
- **What**: File upload component integrated in Contellect forms.
- **How to use**: Add File component to allow attachment uploads within the form.
- **Key configuration**: Allowed file extensions, File size limits, Storage location, Required flag.
- **Example**: "Upload Supporting Documents", "Attach Invoice PDF"
- **Note**: Available in File CT; also available in Folder CT and Task CT.

## Component Attributes & Control Options

When configuring components, control visibility and behavior through these attributes (found in component settings dialog):

### Hidden Toggle
- **Location**: Component settings → Display section.
- **Effect**: Hides component from both form view and table view.
- **Use**: Hide internal or system-generated fields.

### Table View Toggle
- **Location**: Component settings → Display section.
- **Effect**: Controls visibility in table column view.
- **When enabled**: Shows in table + form.
- **When disabled**: Shows in form only (not in table).
- **Use**: Exclude verbose fields from table view.

### Clear Value When Hidden
- **Location**: Component settings → Data section.
- **Effect**: Clears stored value if component becomes hidden via conditional logic.
- **Use**: Ensure data integrity when fields are conditionally hidden.

### Default Value
- **Location**: Component settings → Data section.
- **Effect**: Pre-populates component with initial value on form load.
- **Use**: Reduce user input, speed up data entry.

## Buttons & Actions Reference

### List View Actions

#### Refresh Button
- **Icon**: Refresh/reload icon
- **Location**: Top toolbar
- **Action**: Reload File CT list from server.

#### Create New Content Type Button
- **Icon**: Plus/add
- **Location**: Top toolbar
- **Action**: Open builder to create new File CT.

#### Preview Button (Row)
- **Icon**: Eye
- **Location**: Actions column on each File CT row
- **Action**: Show preview modal of the form.

#### Edit Button (Row)
- **Icon**: Pencil
- **Location**: Actions column
- **Action**: Open builder with existing schema.

#### Delete Button (Row)
- **Icon**: Trash
- **Location**: Actions column
- **Action**: Permanently remove File CT.

#### Clone Button (Row)
- **Icon**: Duplicate/copy
- **Location**: Actions column
- **Action**: Create identical copy for reuse.

### Form Builder Actions

#### Create Button
- **Location**: Bottom left
- **Action**: Save File CT
- **Requires**: Name filled + 1+ component

#### Cancel Button
- **Location**: Bottom left
- **Action**: Discard changes, return to list.

#### Preview Button
- **Location**: Bottom right
- **Action**: Split view with live form preview.
- **Includes**: Validate button to check component integrity.

#### Export Button
- **Location**: Bottom right
- **Action**: Download form schema as JSON.
- **Use**: Backup, version control, transfer to another environment.

#### Import Button
- **Location**: Bottom right
- **Action**: Load JSON schema file.
- **Use**: Restore from backup, reuse saved schema.

## Live Validation Notes (File CT)
- UI mode identifier: `appliedFor=VersionContentType`
- Components available: All 33 Form.io components (including File) + standard Contellect File component.
- Approval Task Form: NOT available in File CT (Task CT only).
- Each File CT automatically has 3 related workflows: **Create a record of this CT**, **Edit a record**, and **Delete a record**.
- If this File CT is edited (fields/schema/validation), update the 3 related workflows so they stay aligned with the latest CT definition.
- **Workspace Sync**: When user creates a record in Workspace, system automatically creates a Folder in Repository named after the File CT (or reuses existing folder). Record is placed inside. Duplicate record names not allowed in same folder. Folder path and record naming follow DMN configuration.
- File CT can be created as empty (validation not strict on components).

## Common Mistakes & Tips

| Issue | Solution |
|-------|----------|
| Form too long | Use Tabs or Columns to organize fields |
| Fields not required | Add Required flag to critical fields |
| Users confused by fields | Add Help text, Placeholder, or Tooltip |
| Data not showing in workflow | Ensure field Key matches workflow mapping |
| File upload not working | Add File component, check allowed extensions |
| Table view cluttered | Use Table View toggle to hide verbose fields |
| Can't find a field | Use Search field(s) in component palette |
| User cannot see created records | Verify the user/group has Create permission on File Content Types and view access on the target folder/location |
| Export/Import failed | Ensure JSON format is valid (use Export to see format) |

## References
- Form.io docs: https://help.form.io/userguide/forms/form-building
- ECM Configuration path: Configuration → Content Type → Files Content Types
- Page object: Pages/My Configuration/contentType.ts

---

## 📚 Next Steps

<details>
<summary><strong>Continue Learning</strong></summary>

**Just configured a File Content Type?** Check out the [visual guide](./%F0%9F%97%BA%20Diagram.md) to understand how it integrates with workflows and other systems.

**Want to explore other Content Types?**
- [Folder Content Types](../Folder%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md) - For organizing folder metadata
- [Task Content Types](../Task%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md) - For workflow user tasks

**Need a quick refresh?** Return to [File Content Types - Knowledge Overview](./%F0%9F%A7%A0%20Knowledge%20Overview.md)
</details>

---
