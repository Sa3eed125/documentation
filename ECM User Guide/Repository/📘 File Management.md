---
sidebar_label: "📄 File Management"
sidebar_position: 2
name: "📄 File Management"
description: Create, upload, edit, and manage files in Repository with detailed step-by-step guides
user-invocable: true
---

# 📄 File Management


:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Overview

This guide covers all file operations in Repository: uploading, creating, renaming, editing, and managing file properties.

:::note UI Navigation
All file operations are accessible from the **Repository toolbar** or **item action menus** in the Drive view.
:::

---

## 🚀 Quick Actions

### Create/Upload Quick Reference

| Action | Method | Time | Result |
|--------|--------|------|--------|
| **Upload Single File** | Toolbar → Upload File | 30 sec | File in Drive |
| **Batch Upload** | Toolbar → Upload Folder | 2 min | Multiple files organized |
| **Create File Record** | Toolbar → Quick Record | 1 min | New File CT record |
| **Drag & Drop Upload** | Drag to Repository area | 20 sec | Auto-upload |

---

## 📤 Uploading Files

### Method 1: Quick File Upload

**Steps:**
1. Click **Toolbar → "Quick Folder" Dropdown → "Upload File"**
2. Select file(s) from your computer
3. Files appear in current folder
4. Status bar shows upload progress

**What you see:**
```
┌─────────────────────────────────────┐
│ Upload Progress                      │
├─────────────────────────────────────┤
│ [████████░░░░░░░░░░░░░░░░░░░░] 45%  │
│ Budget Report 2026.xlsx             │
│ (2.3 MB of 5.1 MB)                  │
└─────────────────────────────────────┘
```

**After Upload:**
- ✅ File appears in grid
- ✅ Shows file name and date
- ✅ Instantly searchable

:::tip Pro Tip
Files upload to your current location in Repository. Navigate to the desired folder first, then upload.
:::

---

### Method 2: Bulk Folder Upload

**Steps:**
1. Click **Toolbar → "Quick Folder" Dropdown → "Upload Folder"**
2. Select a folder containing multiple files
3. Files upload maintaining folder structure
4. Progress bar shows total uploads

**Use when:**
- Migrating project files
- Backing up local folders
- Organizing pre-created folder structure

---

### Method 3: Drag & Drop Upload

**Steps:**
1. Locate the **"Drag here" area** in main Repository section
2. Drag files from your computer desktop
3. Drop into the drag zone
4. Upload starts automatically

**Limitations:**
- Single-file uploads only
- Some browsers require explicit folder selection first

---

## 📝 Creating File Records

### What is a File Record?

A **File Record** is a structured document managed by the **File Content Type**. It includes metadata, versioning, and workflow capabilities.

:::info Difference
- **Uploaded File** = Raw document file (.pdf, .xlsx, .docx)
- **File Record** = Structured document with metadata, audit trail, and workflow integration
:::

### Creating a File Record

**Steps:**
1. Click **Toolbar → "Quick Folder" Dropdown → "Quick Record"**
2. Select **"File"** Content Type (if multiple options)
3. Fill in required fields:
   - **Name** (required)
   - **Description** (optional)
   - **Tags** (optional)
   - **Upload File** (optional but recommended)
4. Click **"Save"**

**Form Fields:**
| Field | Required | Type | Example |
|-------|----------|------|---------|
| Name | ✅ Yes | Text | "Q2 Financial Report" |
| Description | ❌ No | Text Area | "Quarterly financial summary..." |
| File | ❌ No | File Upload | Attach .pdf or .xlsx |
| Tags | ❌ No | Multi-select | ["Finance", "Reporting"] |
| Owner | ✅ Auto | User | (auto-filled: current user) |
| Folder | ✅ Auto | Folder | (auto-filled: current location) |

**After Creation:**
- ✅ Record appears in Repository
- ✅ Becomes searchable
- ✅ Can be shared and assigned permissions
- ✅ Has full edit/audit history

:::tip Best Practice
Create File Records for important documents that need versioning, audit trails, or workflow integration. Use simple uploads for transient files.
:::

---

## ✏️ Editing Files

### Editing Metadata (Properties)

**Steps:**
1. Right-click file or click **⋮ menu → "Properties"**
2. Edit available fields:
   - Name
   - Description
   - Tags
   - Custom metadata (if configured)
3. Click **"Save Changes"**

**What's Editable:**
- ✅ File name
- ✅ Description
- ✅ Tags
- ✅ Custom fields (depends on File CT configuration)

**What's NOT Editable:**
- ❌ File creation date
- ❌ Original creator
- ❌ File type (.pdf → .xlsx requires re-upload)

### Uploading New File Version

**Steps:**
1. Click **⋮ menu → "New Version"** or **"Replace File"**
2. Select new file from computer
3. (Optional) Add version notes
4. Click **"Confirm Upload"**

**Result:**
- ✅ Old version saved as history
- ✅ New version becomes current
- ✅ Previous versions remain searchable
- ✅ Audit log shows all versions

:::warning Important
Uploading a new version replaces the current file. To keep both versions, create a new File Record instead.
:::

---

## 🎯 File Actions

### Complete Action Menu

**Right-click any file or click ⋮ menu:**

```
📂 Open / Preview
   ↳ View file in web viewer

✏️ Edit Metadata
   ↳ Change name, description, tags

📑 View Versions
   ↳ See version history

📋 Copy
   ↳ Duplicate file to same/different folder

↪️ Move
   ↳ Change file location

✏️ Rename
   ↳ Change file name only

🗑️ Delete
   ↳ Move to Trash (recoverable)

⭐ Add to Favorites
   ↳ Quick access from Favorites section

🔗 Share
   ↳ Grant access to users/groups

🔐 Manage Permissions
   ↳ Set granular access levels

📊 Properties
   ↳ View all metadata & audit info

📥 Download
   ↳ Save to computer

🔐 Generate Share Link
   ↳ Create public/restricted link
```

---

## ✨ File Organization Features

### Search Files

**Basic Search:**
1. Click **Search box** (top toolbar)
2. Type file name or partial name
3. Results filter in real-time
4. Press **Enter** or click **Search** button

**Advanced Search (if enabled):**
- Filter by date range
- Filter by tags
- Filter by owner
- Filter by Content Type
- Full-text search in file content

### Favorites / Bookmarking

**Add to Favorites:**
1. Right-click file → **"Add to Favorites"** (or click ⭐)
2. File appears in **"My Favorites"** sidebar section
3. Quick access without navigating folder structure

**Remove from Favorites:**
1. Click **"Remove from Favorites"** from same menu
2. File stays in Repository, just removed from Favorites

### Tags & Metadata

**Adding Tags:**
1. Open file properties
2. Find **"Tags"** field
3. Enter tag names (comma-separated)
4. Save

**Benefits:**
- Organize files by project/department
- Filter search results by tags
- Easy categorization without folder hierarchy

---

## 🗑️ File Deletion & Recovery

### Deleting Files

**Steps:**
1. Right-click file → **"Delete"**
2. Confirm deletion dialog
3. File moves to **"Trash"** section
4. File remains searchable (if Trash search enabled)

**Result:**
- ✅ File removed from Drive
- ✅ Appears in Trash for 30 days
- ✅ Can be recovered within retention period
- ✅ Audit log shows deletion

:::info Trash Retention
Default: **30 days**. After 30 days, files are permanently deleted and cannot be recovered.
:::

### Recovering Deleted Files

**Steps:**
1. Navigate to **Sidebar → "Trash"**
2. Find the file you want to recover
3. Right-click → **"Restore"** (or click restore icon)
4. Select destination folder (usually original location)
5. Click **"Confirm"**

**After Recovery:**
- ✅ File returns to specified folder
- ✅ All metadata preserved
- ✅ Appears in Drive again
- ✅ Accessible to those with permissions

### Permanent Deletion

**Steps:**
1. Navigate to **Sidebar → "Trash"**
2. Right-click file → **"Permanently Delete"**
3. Confirm in dialog (⚠️ Cannot be undone)
4. File is immediately removed from system

:::danger Warning
Permanent deletion cannot be undone. The file is completely removed from Repository and backup systems. Use with caution.
:::

---

## 📊 File Permissions & Visibility

### Permission Basics

**Default Permission:**
- Files inherit **folder permissions**
- Original creator = automatic full access
- Others need explicit permission grant

**Permission Levels:**
| Level | Can View | Can Edit | Can Delete | Can Share |
|-------|----------|----------|-----------|-----------|
| **Viewer** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Collaborator** | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Editor** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Owner** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

### Sharing a File

**Steps:**
1. Right-click file → **"Share"** or **"Manage Permissions"**
2. Click **"+ Add User/Group"**
3. Search for user name or group name
4. Select **permission level** (Viewer/Collaborator/Editor)
5. Click **"Grant Permission"**
6. Click **"Done"** or **"Save Changes"**

**Result:**
- ✅ User/group gains access
- ✅ They see file in Repository
- ✅ Notification sent (if enabled)
- ✅ Permission tracked in audit log

### Revoking Access

**Steps:**
1. Right-click file → **"Manage Permissions"**
2. Find user/group to remove
3. Click **"Remove"** or **"✕" button**
4. Confirm removal
5. Click **"Save Changes"**

**Result:**
- ✅ User/group loses access immediately
- ✅ File disappears from their Repository
- ✅ Removal logged in audit trail

---

## 📋 File Properties & Metadata

### Viewing File Properties

**Steps:**
1. Right-click file → **"Properties"**
2. View available tabs:
   - **General** - Name, size, format
   - **Metadata** - Custom fields, tags
   - **Sharing** - Who has access
   - **History** - Versions & modifications
   - **Audit** - Access log

### File Property Reference

| Property | Description |
|----------|-------------|
| **Name** | File display name |
| **Type** | File format (.pdf, .xlsx, etc.) |
| **Size** | File storage size |
| **Created** | Creation date/time |
| **Modified** | Last edit date/time |
| **Created By** | Original uploader/creator |
| **Modified By** | Last person who edited |
| **Owner** | Primary owner (can transfer) |
| **Folder Path** | Full path in Repository |
| **Storage Location** | Physical storage reference |
| **Version Number** | Current version (if versioning enabled) |
| **Status** | Draft/Published/Archived |

---

## 🎓 Best Practices

✅ **DO:**
- Organize files by project/department
- Use descriptive names (avoid "Doc1", "Final_v3")
- Add tags for cross-project filtering
- Create versions instead of duplicates
- Share with groups (not individual users) for easier management
- Review permissions quarterly

❌ **DON'T:**
- Store sensitive data without encryption
- Share files publicly without review
- Keep old versions forever (archive quarterly)
- Delete files without backup
- Mix project files in same folder without organization

---

## 🆘 Common Issues

### Issue: Can't see uploaded file

**Causes & Solutions:**
1. Check folder location → Navigate to same folder where you uploaded
2. Check permissions → Ensure you have access rights
3. Check search cache → Refresh page (F5)
4. Check file size → Verify upload completed (no progress bar)

### Issue: File won't upload

**Causes & Solutions:**
1. File size too large → Check org storage quota
2. File type blocked → Try different format
3. Browser/network issue → Try different browser
4. Permissions insufficient → Contact folder owner

### Issue: Can't edit file properties

**Causes & Solutions:**
1. Only owner can edit → Ask file owner to change
2. File type restricted → Some formats are read-only
3. Folder locked → Contact admin

---

## 📚 Related Guides

→ [Folder Management](%F0%9F%93%98%20Folder%20Management.md) - Organize files into folders

→ [Permissions & Sharing](%F0%9F%93%98%20Permissions%20%26%20Sharing.md) - Control file access

→ [Search & Organization](%F0%9F%93%98%20Search%20%26%20Organization.md) - Find files efficiently

→ [Repository Sections](%F0%9F%93%98%20Repository%20Sections.md) - Understand all 7 sections
