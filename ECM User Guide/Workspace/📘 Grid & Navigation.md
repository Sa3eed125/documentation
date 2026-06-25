---
sidebar_label: "🗃️ Grid & Navigation"
sidebar_position: 4
name: "🗃️ Grid & Navigation"
description: Complete guide to the Workspace record grid, toolbar, pagination, and filtering
user-invocable: true
---

# 🗃️ Workspace — Grid & Navigation


:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


This guide covers the **record grid** view inside a Content Type — including all toolbar actions, grid columns, pagination controls, and advanced filtering.

---

## 🗺️ Page Structure

When you open a Content Type in Workspace, the page has:

```
Breadcrumb: 🏠 Home › Workspace › Group Name / CT Name
────────────────────────────────────────────────────
Toolbar: [Export Excel] [Refresh] [Advanced Filter] [RMS Integration] [Add Record]
────────────────────────────────────────────────────
Grid Header: [Select All] [Actions] [Record Name] [CT Fields...] [Meta Columns]
────────────────────────────────────────────────────
Grid Rows: Records displayed here
────────────────────────────────────────────────────
Pagination: [◄◄] [◄] [1] [2] [3] [►] [►►]   Items Per Page: [10▼]   0-10 of 45 Items
```

---

## 🔘 Toolbar Buttons

### Export to Excel

| Property | Value |
|----------|-------|
| **Icon** | Excel file icon |
| **data-testid** | `workspace-btn-export-excel` |
| **When Enabled** | When records exist |
| **Action** | Downloads all visible grid data as `.xlsx` |

**Use when:** You need a spreadsheet report of all records

---

### Refresh

| Property | Value |
|----------|-------|
| **Icon** | Refresh/rotate icon |
| **data-testid** | `workspace-btn-refresh` |
| **When Enabled** | Always |
| **Action** | Reloads the grid from server |

**Use when:** You need the latest data after someone else made changes

---

### Advanced Filter

| Property | Value |
|----------|-------|
| **Icon** | Filter icon |
| **data-testid** | `workspace-btn-advanced-filter` |
| **When Enabled** | Always |
| **Action** | Opens filter panel for complex queries |

**Use when:** You want to find records matching specific criteria

---

### RMS Integration

| Property | Value |
|----------|-------|
| **Icon** | Integration/link icon |
| **data-testid** | `workspace-btn-rms-integration` |
| **When Enabled** | When records are selected AND CT is RMS-mapped |
| **Default State** | Disabled |
| **Action** | Triggers RMS workflow for selected records |

**Use when:** You need to send records to the RMS system

---

### Add Record

| Property | Value |
|----------|-------|
| **Icon** | Plus/add icon |
| **data-testid** | `workspace-btn-add-record` |
| **When Enabled** | Always (when user has Create permission) |
| **Action** | Opens Add Record sidebar with CT form |

**Use when:** You need to create a new record entry

---

## 📊 Grid Columns

### System Columns (Always Present)

| Column | Description |
|--------|-------------|
| **☐ Select** | Checkbox to select rows for bulk actions |
| **Actions** | Row action menu for individual record operations |
| **Started By** | User who created the record |
| **Created Time** | When the record was created |
| **Modification Time** | When the record was last modified |
| **Version** | Current version number (increments on each save) |
| **File Barcode** | File barcode value if assigned |
| **Box Barcode** | Box barcode value if assigned |

### CT-Defined Columns (Dynamic)

These columns come from the **Content Type configuration** — every CT is different. Examples:

| CT Example | Dynamic Columns |
|------------|-----------------|
| HR Letters | Employee Name, Employee ID, Department, Date Issue, File |
| Invoice | Invoice Number, Vendor, Amount, Due Date |
| Contract | Contract Name, Client, Start Date, End Date, Value |

:::info Column Order
CT fields appear **between** the Actions column and the system columns (Started By, Created Time, etc.)
:::

---

## 🔽 Pagination Controls

### Navigation Buttons

| Button | Action | data-testid |
|--------|--------|-------------|
| `◄◄` First Page | Go to page 1 | Go to the first page |
| `◄` Previous Page | Go to previous page | Go to the previous page |
| `1 2 3...` Page Numbers | Jump to specific page | Page N |
| `►` Next Page | Go to next page | Go to the next page |
| `►►` Last Page | Go to last page | Go to the last page |

### Items Per Page

A **dropdown selector** to control how many records appear per page:
- Default: **10 items**
- Options typically: 10, 25, 50, 100
- Changing this refreshes the grid

### Record Count Display

Shows current position in the dataset:
```
10 - 20 Of 45 Items
```
(Reading: showing records 10 to 20, out of 45 total)

---

## 🔍 Advanced Filter

### Opening the Filter

Click **Advanced Filter** in the toolbar → filter panel appears.

### Filter Anatomy

Each filter rule has:
1. **Field** — select which column to filter (dropdown)
2. **Operator** — how to match (equals, contains, etc.)
3. **Value** — what to look for

### Available Operators by Field Type

| Field Type | Operators |
|------------|-----------|
| **Text** | Is, Contains, Starts With, Ends With, Is Empty, Is Not Empty |
| **Number** | Equals, Greater Than, Less Than, Between, Is Empty |
| **Date/Time** | On, Before, After, Between, This Week, This Month |
| **Dropdown/Select** | Is, Is Not, In List |
| **Boolean** | Is True, Is False |

### Multiple Filters

You can combine multiple filter rules with:
- **AND** — all rules must match
- **OR** — any rule can match

Example:
```
Department = "Finance"  AND  Date Issue > 2026-01-01
→ Shows only Finance records created after January 2026
```

### Clearing Filters

Click the **Clear** or **Reset** button in the filter panel to remove all active filters and show all records.

---

## ✅ Row Actions

The **Actions** column provides per-row operations. Common actions:

| Action | Description |
|--------|-------------|
| **View** | Open record in read-only mode |
| **Edit** | Open record in edit mode |
| **Delete** | Remove the record |
| **Download File** | Download the attached file (if any) |
| **Start Workflow** | Trigger a workflow for this record |
| **View History** | See all versions and change log |

:::note Available Actions Depend On Permissions
- Viewer: View only
- Collaborator: View + Edit own records
- Editor: View + Edit + Delete all records
- Owner: All actions including admin operations
:::

---

## 🧭 Breadcrumb Navigation

Breadcrumbs appear above the toolbar when inside a CT:

```
🏠  ›  Workspace  ›  Administrators / HR Letters
```

| Part | Clickable | Navigates To |
|------|-----------|--------------|
| 🏠 Home icon | ✅ | ECM dashboard |
| Workspace | ✅ | Workspace landing page (all CT cards) |
| Group / CT Name | ❌ | Current page (not clickable) |

---

## ⌨️ Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move between interactive elements |
| `Space` / `Enter` | Activate focused button or checkbox |
| `Arrow keys` | Navigate pagination, dropdowns |
| `Esc` | Close open dialogs/sidebars |

---

## 💡 Tips for Grid Efficiency

:::tip Sort by Column
Click any **column header** to sort records by that column. Click again to reverse the sort order.
:::

:::tip Bulk Select
Use the **Select All** checkbox in the header to select all records on the current page. Then you can perform bulk operations like RMS integration on all selected records.
:::

:::tip Remember Your Filters
If you close the page and come back, filters may reset. Note your common filter combinations for quick re-application.
:::

:::tip Items Per Page for Large Datasets
For CT types with many records, set Items Per Page to **25 or 50** to see more records without excessive scrolling.
:::

---

## 🔗 Column Header Reference

### HR Letters CT — Full Column List

| Column | Type | CT-defined? |
|--------|------|-------------|
| Select All | Checkbox | System |
| Actions | Action Menu | System |
| Record Name | Text | System |
| Employee Name | Text | **CT field** |
| Employee ID | Number | **CT field** |
| Department | Text | **CT field** |
| Date Issue | Date/Time | **CT field** |
| File | File | **CT field** |
| Started By | Text | System |
| Created Time | DateTime | System |
| Modification Time | DateTime | System |
| Version | Number | System |
| File Barcode | Text | System |
| Box Barcode | Text | System |

---

## Related Guides

→ [Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) — Understand Workspace basics

→ [Managing Records](%F0%9F%93%98%20Managing%20Records.md) — Create and work with records

→ [Workspace Groups](%F0%9F%93%98%20Workspace%20Groups.md) — Permission-based access setup

→ [Diagrams](%F0%9F%97%BA%20Diagrams.md) — Visual diagrams of grid and navigation flows
