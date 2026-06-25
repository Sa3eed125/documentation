---
sidebar_label: "🏢 Workspace Overview"
sidebar_position: 1
name: "🏢 Workspace Overview"
description: What is Workspace, why use it, where to find it, and when to use it in ECM
user-invocable: true
---

# 🏢 Workspace — Knowledge Overview

## What Is Workspace?

**Workspace** is your **structured record management area** in Contellect ECM. It organizes File Content Types into permission-based groups, allowing teams to create, view, and manage business records — such as HR letters, contracts, invoices, or any document type you define.

:::info In Simple Terms
Workspace = Content Types you've created → organized into groups → presented as records for day-to-day work.
:::

Think of Workspace as a **business inbox** where:
- Each **group** represents a department or permission boundary (e.g., "HR", "Finance", "Administrators")
- Each **card inside a group** is a specific record type (e.g., "HR Letters", "Employee Contracts")
- Each **record** is an actual document entry with metadata, files, and workflow

---

## Why Use Workspace?

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>

<div style={{ border: '1px solid #4CAF50', borderRadius: '8px', padding: '1rem', background: '#f1f8e9' }}>

### ✅ For End Users
- One place for all daily document work
- Know exactly which records you can access
- Search across all content types instantly
- Find recently used types quickly
- Create records with guided forms

</div>

<div style={{ border: '1px solid #2196F3', borderRadius: '8px', padding: '1rem', background: '#e3f2fd' }}>

### ✅ For Administrators
- Control who sees what via groups
- Organize content types by business area
- Grant or restrict access to record types
- One-click RMS integration per CT
- Export all records to Excel

</div>

</div>

---

## Where to Find Workspace

### Navigation Path

```
Top Navigation Bar → "My Workspace"
or
Direct URL: https://csp.contellect.net/workspace
```

:::tip Quick Access
Click **My Workspace** in the top navigation bar — it's always the first item.
:::

### URL Patterns

| Page | URL |
|------|-----|
| Workspace Landing (all CT types) | `/workspace` |
| Record List for a specific CT | `/workspace/{groupId}/{contentTypeId}` |
| Example: HR Letters | `/workspace/tr9v2/019d70fa-6600-713c-b84d-dc3528c6ba78` |

---

## When to Use Workspace

Use **Workspace** when you need to:

| Scenario | Action |
|----------|--------|
| Create a new HR letter | Open HR Letters CT → Add Record |
| View all invoices submitted | Open Finance → Invoices → Browse grid |
| Export all contracts to Excel | Open Contracts → Export to Excel |
| Filter records by date/department | Open CT → Advanced Filter |
| Check who created a record | Open CT → View Started By column |
| Send a record to RMS system | Open CT → Select Record → RMS Integration |
| Restart a workflow | Open CT → Select Record → Actions |

:::note When NOT to Use Workspace
- **File storage** → Use **Repository** instead
- **Workflow management** → Use **My Tasks** for pending tasks
- **Search across all records** → Use **Quick Search** or **Advanced Search**
:::

---

## How Workspace Is Organized

### Two-Level Structure

```
Workspace
└── Groups (organized by permissions)
    └── Content Type Cards
        └── Record List (the actual data)
```

### Level 1: Groups

Groups are **permission containers**. An administrator assigns users or user groups to a workspace group, which controls what content types they can see.

- A group is shown as an expandable **panel bar item** in the Workspace landing page
- Each group has a name (e.g., "Administrators", "HR Team", "Finance")
- Groups can be collapsed/expanded

### Level 2: Content Type Cards

Inside each group, you see **Kendo cards** representing each content type:
- Card shows: **file icon** + **Content Type name**
- Click any card → opens the **Record List** for that CT
- You only see CTs you have permission to access

### Level 3: Record List

When you click a card:
- Opens the **Record List grid** for that Content Type
- Grid shows all records (if any)
- Toolbar: Export to Excel | Refresh | Advanced Filter | RMS Integration | Add Record
- Pagination: navigate through pages, set items per page (10 by default)

---

## Key Features at a Glance

| Feature | Description |
|---------|-------------|
| 🔍 **Search** | Search across all content types by name in real-time |
| ⭐ **Recent Cards** | Quick access to recently used content types |
| 👥 **Groups** | Permission-based organization of CTs |
| 📋 **Add Record** | Create new records using the CT form |
| � **Auto-Folder** | **NEW:** Automatically creates Repository folder with CT name when record is created |
| �📊 **Grid View** | See all records in a sortable, filterable table |
| 🔽 **Pagination** | Navigate pages, set items per page |
| 🔽 **Advanced Filter** | Filter records by any metadata field |
| 📤 **Export to Excel** | Download all visible records as .xlsx |
| 🔗 **RMS Integration** | Connect selected records to RMS |
| 🔄 **Refresh** | Reload the grid with latest data |

---

## Workspace ↔ Repository Integration

:::info Auto-Folder Creation
When you create a record in Workspace, ECM **automatically creates a folder in Repository** with the Content Type name (if it doesn't exist). Your record is stored in that folder.

**Example:** Create an "HR Letters" record in Workspace → Automatically creates/uses "HR Letters" folder in Repository → Record stored inside.
:::

**Record Name Convention:**
- Record names must be **unique** — no two records in the same CT can have the same name
- Naming convention follows the **DMN (Decision Model)** configuration for your system
- Folder path in Repository is derived from the CT name and DMN rules

## Workspace vs Repository

:::warning Key Distinction
Both Workspace and Repository can hold records using File Content Types. Here's the difference:
:::

| | **Workspace** | **Repository** |
|--|---------------|----------------|
| **Purpose** | Structured business record management | General file storage |
| **Access** | Controlled via workspace groups | Controlled via file permissions |
| **Organization** | Groups → CTs → Records | Folders → Files |
| **Entry Point** | Top nav "My Workspace" | Top nav "My Repository" |
| **Best For** | Departmental forms & documents | General files & documents |
| **Grid View** | Always visible with CT columns | Folder-based browsing |
| **RMS** | Available per CT record | Available per file record |

---

## Role-Based Quick Start

<details>
<summary>👤 End User — I need to create a record</summary>

1. Click **My Workspace** in top navigation
2. Find your content type (or search for it)
3. Click the CT card to open the record list
4. Click **Add Record** in the toolbar
5. Fill the form fields (required fields marked with *)
6. Click **SUBMIT** to save

</details>

<details>
<summary>👤 End User — I need to find an existing record</summary>

1. Click **My Workspace** in top navigation
2. Click the CT card with your records
3. Use **Advanced Filter** to filter by field values
4. Or scroll/page through the grid
5. Click a record row to view details

</details>

<details>
<summary>🔧 Administrator — I need to set up workspace access</summary>

1. Go to **Configuration → Groups**
2. Create or edit a workspace group
3. Assign users or user groups to the group
4. Assign content types to the group with permissions
5. Users will now see the group and its CTs in Workspace

</details>

<details>
<summary>🔧 Administrator — I need to export data</summary>

1. Click **My Workspace** in top navigation
2. Navigate to the desired CT
3. Apply any filters needed (Advanced Filter)
4. Click **Export to Excel**
5. Download opens as .xlsx file

</details>

---

## Content Types Available in Workspace

The search box at the top of the Workspace landing page lets you **instantly filter** across all content types you can access.

:::tip What Gets Searched
The search covers **content type names** — not individual record values. To search record data, use Quick Search or Advanced Search.
:::

All **File Content Types** that have been:
1. Created in Configuration → Content Types → Files
2. Added to a Workspace group you have access to

...will appear as cards in Workspace.

---

## Navigation in Workspace

### Breadcrumb Navigation

Once inside a CT record list, breadcrumbs show:
```
🏠 Home  ›  Workspace  ›  Group Name / CT Name
```

Click any breadcrumb level to navigate back:
- **Home** → ECM dashboard
- **Workspace** → Back to the CT cards landing page

---

## Related Sections

→ [Managing Records](%F0%9F%93%98%20Managing%20Records.md) — How to create, view, edit, and delete records

→ [Workspace Groups](%F0%9F%93%98%20Workspace%20Groups.md) — Understanding groups and permission-based access

→ [Grid & Navigation](%F0%9F%93%98%20Grid%20%26%20Navigation.md) — Toolbar, pagination, filters, and grid columns

→ [Diagrams](%F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 Diagrams.md) — Visual architecture and workflow diagrams
