---
sidebar_label: "📋 Managing Records"
sidebar_position: 2
name: "📋 Managing Records"
description: How to create, view, edit, delete, and manage records in Workspace
user-invocable: true
---

# 📋 Workspace — Managing Records


:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


Records are the **data entries** you create inside a Content Type in Workspace. Each record captures structured metadata defined by the CT form — like an HR letter, invoice, or any document type your organization uses.

---

## 🆕 Creating a New Record

### Step-by-Step: Add Record

1. Navigate to **My Workspace** in the top nav
2. Find and click the **Content Type card** you want to add a record to
3. Click the **Add Record** button in the toolbar (top right of grid)
4. A **sidebar panel** opens with the CT form
5. Fill in all required fields (marked with \*)
6. Optionally upload a file if the CT includes a File field
7. Click **SUBMIT** to save

:::info The Add Record Sidebar
The form opens as a **split panel**:
- **Left side (65%)**: Preview area — shows document preview if applicable
- **Right side (35%)**: The CT form to fill in
:::

:::success Behind the Scenes
When you click **SUBMIT**, ECM automatically:
1. **Creates or uses** a Repository folder with the Content Type name
2. **Stores the record** inside that folder
3. **Assigns the record** a unique name following the DMN naming convention
4. **Links it back** to Workspace for easy access

You don't need to do anything — it's automatic!
:::

### Form Fields

Form fields are defined by the **Content Type configuration**. Common fields include:

| Field | Type | Example |
|-------|------|---------|
| Record Name | Auto-generated or text | `HR-2026-001` |
| File Barcode | Text (required) | `BC-123456` |
| Employee Name | Text (required) | `John Doe` |
| Employee ID | Number | `EMP-1001` |
| Department | Text | `Finance` |
| Date Issue | Date/Time | `2026-06-09` |
| File | File Upload | `letter.pdf` |

:::note Required Fields & Unique Record Names
Fields with `*` next to their label must be filled before you can submit. The **SUBMIT** button stays disabled until all required fields are valid.

**Important:** Record names must be unique within the Content Type. You cannot create two records with the same name in the same CT. Following the DMN naming convention helps avoid duplicates.
:::

### Sidebar Buttons

| Button | Action |
|--------|--------|
| **SUBMIT** | Save the record — disabled until all required fields are filled |
| **CANCEL** | Discard and close the sidebar |
| **✕ (Close)** | Same as Cancel — close without saving |

---

## 👁️ Viewing a Record

### In the Grid

Once records exist, they appear in the **grid table** with all CT-defined columns visible:

- **Record Name** — unique identifier for the record
- **CT custom fields** — Employee Name, Department, etc.
- **Started By** — who created the record
- **Created Time** — when the record was created
- **Modification Time** — when it was last updated
- **Version** — version number of the record
- **File Barcode** — barcode value if applicable
- **Box Barcode** — box barcode if applicable

### Opening a Record

Click the **record row** or use the **Actions** column menu to open/view individual record details.

---

## ✏️ Editing a Record

1. Locate the record in the grid
2. Click the **Actions** button/menu on that row
3. Select **Edit** from the dropdown
4. Modify the fields in the sidebar form
5. Click **SUBMIT** to save changes

:::tip Versioning
Each time you edit and save a record, the **Version** number increments automatically. This maintains a full change history.
:::

---

## 🗑️ Deleting a Record

1. Locate the record in the grid
2. Click the **Actions** menu on that row
3. Select **Delete**
4. Confirm the deletion in the dialog

:::warning Deletion Warning
Deleting a record may be **irreversible** depending on your system configuration. Check with your administrator before deleting.
:::

---

## 🔍 Finding Records

### Using the Grid

The grid supports:
- **Column sorting** — click any column header to sort ascending/descending
- **Pagination** — use navigation arrows to page through large record sets
- **Items Per Page** — set 10, 25, 50 or 100 records per page

### Using Advanced Filter

1. Click **Advanced Filter** in the toolbar
2. Select field(s) to filter by
3. Choose operator (contains, equals, greater than, etc.)
4. Enter filter value(s)
5. Apply filter — grid updates to show matching records

Advanced Filter operators available per field type:

| Field Type | Operators |
|------------|-----------|
| Text | Contains, Equals, Starts With, Ends With |
| Number | Equals, Greater Than, Less Than, Between |
| Date | On, Before, After, Between |
| Dropdown | Equals, In List |

---

## 📤 Exporting Records

### Export to Excel

1. Navigate to the CT in Workspace
2. (Optional) Apply Advanced Filter to narrow down records
3. Click **Export to Excel** in the toolbar
4. The grid data downloads as a `.xlsx` file

:::info What Gets Exported
The export includes **all visible grid columns** for the current page or filtered view, depending on configuration.
:::

---

## 🔄 Refreshing the Grid

Click the **Refresh** button in the toolbar to reload the record list with the latest data from the server. Useful when:
- Someone else just created a record
- A workflow changed a record's status
- You want to see latest modifications

---

## 🔗 RMS Integration

The **RMS Integration** button in the toolbar allows you to connect records to the **Records Management System**:

1. Select one or more records using the checkbox column
2. Click **RMS Integration** (only enabled when records are selected)
3. Follow the RMS workflow to process pickup/delivery/return

:::note RMS Integration Availability
This button is **disabled by default** and only activates when:
- The Content Type is mapped to an RMS configuration
- You have selected at least one record
:::

---

## 📄 Record Lifecycle

### A Record Goes Through These States

```
New Record Created → Saved → Modified (versioned) → Workflow Processed → Archived/Deleted
```

| State | Description |
|-------|-------------|
| **New** | Just created via Add Record |
| **Active** | Exists in the grid, accessible |
| **Modified** | Edited — version number increments |
| **In Workflow** | A workflow is currently processing this record |
| **Archived** | Moved to archive (if system supports) |
| **Deleted** | Removed from the system |

---

## 💡 Tips & Best Practices

:::tip For Faster Work
- Use the **Search box** on the Workspace landing page to jump directly to your CT
- Recently used CTs appear in the **Recent** section for one-click access
:::

:::tip For Data Quality
- Always fill optional fields when you have the data — it helps with search later
- Use consistent naming conventions for Record Name
- Add File Barcode if documents have physical barcodes
:::

:::tip For Large Teams
- Use **Advanced Filter** to see only your records (filter by "Started By = your name")
- Export to Excel for periodic reporting
- Refresh regularly in shared workspaces
:::

---

## Related Guides

→ [Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) — Understand Workspace basics

→ [Grid & Navigation](%F0%9F%93%98%20Grid%20%26%20Navigation.md) — Toolbar, pagination, and filtering in detail

→ [Workspace Groups](%F0%9F%93%98%20Workspace%20Groups.md) — How permissions control CT access
