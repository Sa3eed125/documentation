---
sidebar_label: "📁 Folder Management"
sidebar_position: 3
name: "📁 Folder Management"
description: Create, organize, and manage repository folder structure with detailed guides
user-invocable: true
---

# 📁 Folder Management


:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Overview

This guide covers folder operations: creating folders, organizing hierarchies, setting permissions, and managing folder properties.

:::note UI Navigation
All folder operations are accessible from the **Repository toolbar** or **item action menus** in the Drive view.
:::

---

## 🚀 Quick Folder Creation

### The Fastest Way: Quick Folder

**Steps:**
1. Click **Toolbar → "Quick Folder"** button (primary button)
2. Fill in **"Name"** field in dialog
3. Click **"Save"**

**What appears:**
```
┌─────────────────────────────────────┐
│ Name                            [X] │
├─────────────────────────────────────┤
│ Name                                │
│ [________________________________] │
│                                     │
│      [Save]  [Cancel]              │
└─────────────────────────────────────┘
```

**Result:**
- ✅ New folder created instantly
- ✅ Appears in current location
- ✅ Inherits parent folder permissions
- ✅ Ready for organization

:::tip Pro Tip
Click "Quick Folder" multiple times to create several folders quickly, then rename them if needed.
:::

---

## 📋 Folder Structure Design

### Planning Your Hierarchy

**Good Folder Structure (Flat):**
```
Drive/
├── Projects/
│   ├── Project A/
│   ├── Project B/
│   └── Project C/
├── HR/
│   ├── Recruiting/
│   ├── Policies/
│   └── Payroll/
└── Finance/
    ├── Invoices/
    ├── Budgets/
    └── Reports/
```

**Recommended Practices:**
- ✅ Maximum 3-4 levels deep (easier navigation)
- ✅ Use consistent naming (all lowercase or Title Case)
- ✅ Group by department/function first
- ✅ Group by time period second (2026-Q1, 2026-Q2)
- ✅ Create one folder per project/client

**Anti-Patterns (Avoid):**
- ❌ "Temp", "Old", "Archive", "Misc" folders (not descriptive)
- ❌ Too many levels (>5 deep = hard to navigate)
- ❌ Duplicate folder names
- ❌ Using spaces and special characters in names

:::warning Folder Naming
Use alphanumeric characters, hyphens (-), and underscores (_). Avoid special characters that may cause issues with external systems or downloads.
:::

---

## 🎯 Creating Folder Hierarchy

### Method 1: Top-Down (Recommended)

**Steps:**
1. Create main department/project folder
2. Create sub-folders inside for categories
3. Create sub-sub-folders if needed
4. Move files into appropriate folders

**Example: "Marketing" Project**
1. Create "Marketing 2026"
2. Inside: Create "Q1", "Q2", "Q3", "Q4"
3. Inside each Q: Create "Campaigns", "Analytics", "Assets"
4. Upload files into lowest-level folders

### Method 2: Bottom-Up (Temporary Files First)

**When:** Organizing existing unstructured files

**Steps:**
1. Create flat list of category folders
2. Organize uploaded files by category
3. Create sub-folders as needed
4. Move files into proper hierarchy

---

## ✏️ Editing Folder Properties

### Renaming Folders

**Steps:**
1. Right-click folder → **"Rename"**
2. Enter new name in dialog
3. Click **"Save"** or press **Enter**

**Restrictions:**
- ✅ Can rename empty or full folders
- ✅ Old files stay inside
- ✅ Permissions unchanged
- ✅ Shortcuts/links may break (use with caution)

**Result:**
- ✅ Folder name updated
- ✅ All contained files remain
- ✅ Access unchanged
- ✅ Audit log shows rename

:::warning Impact
Renaming folders may break bookmarks or shortcuts. If folder is shared widely, notify users.
:::

### Editing Folder Description & Metadata

**Steps:**
1. Right-click folder → **"Properties"**
2. Click **"Edit"** or **"Metadata"** tab
3. Edit fields:
   - Description
   - Custom tags
   - Classification level (if configured)
4. Click **"Save Changes"**

**Editable Fields:**
| Field | Type | Purpose |
|-------|------|---------|
| Name | Text | Folder display name |
| Description | Text Area | Purpose & contents info |
| Tags | Multi-select | Categorization labels |
| Classification | Dropdown | Security level |
| Owner | User Select | Primary responsible person |
| Retention Policy | Dropdown | Archive/delete schedule |

---

## 🔄 Moving & Copying Folders

### Moving Folders (Entire Tree)

**Steps:**
1. Right-click folder → **"Move"**
2. Browse destination folders
3. Select target location
4. Click **"Move to [Location]"**
5. Confirm if prompted

**Result:**
- ✅ Folder moves with all contents
- ✅ All sub-folders and files remain inside
- ✅ Permissions may adjust (if different parent)
- ✅ All shortcuts update automatically

**Use when:**
- Reorganizing departments
- Consolidating projects
- Moving project to archive

### Copying Folders

**Steps:**
1. Right-click folder → **"Copy"** (if available)
2. Browse destination
3. Click **"Paste"** in target location
4. Optionally rename duplicated folder

**Result:**
- ✅ Copy created with all contents
- ✅ Original remains unchanged
- ✅ Copy owner = current user
- ✅ Separate permission set for copy

**Use when:**
- Creating template folders
- Duplicating project structure for new year
- Backing up important projects

:::tip Pro Tip
Copying is useful for creating "template" folders. Set up the first one perfectly, then copy it for subsequent projects.
:::

---

## 🔐 Folder Permissions

### Permission Inheritance

**Default Behavior:**
- Folders inherit **parent folder permissions**
- Subfolders inherit **parent folder permissions**
- All files inside inherit **folder permissions**

```
Drive (Public - Everyone Read)
└── HR (Private - HR Group Edit)
    └── Salaries (Confidential - Managers Only)
        └── 2026 Payroll (Very Confidential - Owner Only)
```

**Result:** Each level has stricter permissions

### Setting Folder Permissions

**Steps:**
1. Right-click folder → **"Manage Permissions"**
2. View current permissions (table shows):
   - User/Group name
   - Permission level
   - Granted date
   - Granted by (admin)
3. Click **"+ Add"** to grant access
4. Select user/group from list
5. Choose permission level:
   - **Viewer** - Read-only
   - **Collaborator** - Can edit content
   - **Editor** - Can edit + manage items
   - **Owner** - Full control
6. Click **"Grant Permission"**
7. Click **"Save Changes"**

### Permission Levels Explained

| Level | View | Edit | Delete | Manage Permissions | Share |
|-------|------|------|--------|-------------------|-------|
| **Viewer** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Collaborator** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Editor** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Owner** | ✅ | ✅ | ✅ | ✅ | ✅ |

### Revoking Access

**Steps:**
1. Right-click folder → **"Manage Permissions"**
2. Find user/group to remove
3. Click **"Remove"** or **"✕" icon**
4. Confirm dialog
5. Click **"Save Changes"**

**Result:**
- ✅ User/group loses access immediately
- ✅ Folder & contents disappear from their view
- ✅ Audit log shows removal

---

## 👥 Sharing Folders with Teams

### Creating Team Folders

**Scenario:** Marketing team needs shared folder

**Steps:**
1. Create folder: "Marketing 2026"
2. Right-click → **"Manage Permissions"**
3. Click **"+ Add"**
4. Search for group: "Marketing Team"
5. Select permission: **"Collaborator"** or **"Editor"**
6. Click **"Grant Permission"**
7. Click **"Save Changes"**

**Result:**
- ✅ All group members have access
- ✅ Permissions are group-based (not individual)
- ✅ New team members auto-inherit access
- ✅ Leaving team removes access

### Delegating Folder Management

**Scenario:** Project manager should manage project folder

**Steps:**
1. Right-click folder → **"Manage Permissions"**
2. Find project manager user
3. Select **"Owner"** permission level
4. Click **"Grant Permission"**

**Result:**
- ✅ Project manager can create subfolders
- ✅ They can add/remove team members
- ✅ They can upload/delete files
- ✅ Original owner retains Owner access too

:::tip Best Practice
Use group-based permissions for easier management. When adding permissions, prefer "Sales Team" over individual names.
:::

---

## 🗑️ Deleting Folders

### Deleting Empty Folders

**Steps:**
1. Right-click empty folder → **"Delete"**
2. Confirm deletion dialog
3. Folder moves to Trash

**Result:**
- ✅ Folder removed from Drive
- ✅ Appears in Trash
- ✅ Can be recovered for 30 days

### Deleting Folders with Contents

**Steps:**
1. Right-click folder (has files) → **"Delete"**
2. Warning dialog appears:
   - "This folder contains X items. Delete anyway?"
3. Confirm deletion
4. Entire folder tree moves to Trash

**What happens to contents:**
- ✅ All files move to Trash with folder
- ✅ Folder structure preserved in Trash
- ✅ Can recover entire folder or individual files
- ✅ Audit log shows folder & contents deletion

:::warning Important
Deleting a folder deletes ALL contents. If unsure, move to an "Archive" folder first instead of deleting.
:::

### Recovering Deleted Folders

**Steps:**
1. Navigate to **Sidebar → "Trash"**
2. Find folder you want to recover
3. Right-click → **"Restore"**
4. Choose destination (usually original parent)
5. Click **"Confirm"**

**Result:**
- ✅ Folder restored with entire contents
- ✅ All sub-folders appear
- ✅ All files inside restored
- ✅ Permissions restored

---

## 🎯 Folder Organization Strategies

### Strategy 1: By Department + Project

```
Drive/
├── Sales/
│   ├── Q1 Campaigns/
│   ├── Q2 Campaigns/
│   └── Client Accounts/
├── Finance/
│   ├── 2026 Budget/
│   ├── Invoices/
│   └── Reports/
└── HR/
    ├── Recruiting/
    ├── Onboarding/
    └── Benefits/
```

**Pros:** Aligns with org structure, easy to manage permissions by dept

### Strategy 2: By Time Period + Type

```
Drive/
├── 2026-Q1/
│   ├── Marketing/
│   ├── Sales/
│   └── Reports/
├── 2026-Q2/
│   ├── Marketing/
│   ├── Sales/
│   └── Reports/
└── Archive/
```

**Pros:** Easy to archive old quarters, good for regulatory retention

### Strategy 3: By Project + Client

```
Drive/
├── Clients/
│   ├── Acme Corp/
│   │   ├── Contracts/
│   │   ├── Invoices/
│   │   └── Communications/
│   └── TechCorp/
│       ├── Contracts/
│       ├── Invoices/
│       └── Communications/
└── Internal Projects/
```

**Pros:** Client-centric, easy to share entire client folder with team

---

## 📊 Folder Properties & Audit

### Viewing Folder Properties

**Steps:**
1. Right-click folder → **"Properties"**
2. View tabs:
   - **General** - Name, size, created date
   - **Metadata** - Tags, description, owner
   - **Sharing** - Who has access
   - **Contents** - File count, storage used
   - **Audit** - History of changes

### Folder Statistics

| Stat | Shows |
|------|-------|
| **Total Size** | Storage used by all contents |
| **Item Count** | Number of files + subfolders |
| **Subfolder Count** | Only direct subfolders |
| **Files Count** | Only direct files (not in subfolders) |
| **Created Date** | When folder was created |
| **Modified Date** | Last change (file added/deleted) |
| **Owner** | Primary responsible user |
| **Last Modified By** | User who last changed contents |

---

## 🆘 Common Issues

### Issue: Can't create subfolder

**Causes & Solutions:**
1. No Edit permission → Contact folder owner
2. Storage quota full → Delete old files or request more quota
3. Folder locked by admin → Contact administrator

### Issue: Moved folder disappeared

**Causes & Solutions:**
1. Moved to location you don't have access to → Ask owner to restore
2. Accidentally deleted → Check Trash, restore within 30 days
3. Restricted permissions → Only owner can see

### Issue: Too many levels (hard to navigate)

**Solution:** Reorganize into flatter structure

**Before (Too Deep):**
```
Drive > Projects > 2026 > Q1 > Marketing > Campaigns > Digital > Social > Twitter
```

**After (Better):**
```
Drive > Marketing 2026 > Q1 Campaigns > Twitter
```

---

## 📚 Related Guides

→ [File Management](%F0%9F%93%98%20File%20Management.md) - Work with files inside folders

→ [Permissions & Sharing](%F0%9F%93%98%20Permissions%20%26%20Sharing.md) - Control folder access

→ [Search & Organization](%F0%9F%93%98%20Search%20%26%20Organization.md) - Find folders efficiently

→ [Repository Sections](%F0%9F%93%98%20Repository%20Sections.md) - Understand folder organization
