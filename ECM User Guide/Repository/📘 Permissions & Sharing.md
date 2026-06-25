---
sidebar_label: "🔐 Permissions & Sharing"
sidebar_position: 5
name: "🔐 Permissions & Sharing"
description: Control access to files and folders using permissions, sharing, and access levels
user-invocable: true
---

# 🔐 Permissions & Sharing


:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Overview

This guide covers how permissions work in Repository, sharing files with users/groups, and managing access levels.

:::info Key Concept
Permissions control WHO can access files/folders and WHAT they can do (view, edit, delete, share).
:::

---

## 🎯 Permission Basics

### How Permissions Work

**Three-Tier System:**
```
1. FOLDER PERMISSIONS (Foundation)
   └─ Files inherit from parent folder
   └─ Setting: Managed at folder level

2. FILE PERMISSIONS (Override)
   └─ Can be different from folder
   └─ Setting: Per-file overrides

3. USER/GROUP PERMISSIONS (Assignment)
   └─ Who has access
   └─ What can they do
```

### Default Permissions

**When you create a file/folder:**
1. ✅ YOU = Full access (Owner)
2. ✅ Your group = Depends on folder setting
3. ❌ Others = No access (unless shared)

**When someone shares with you:**
1. ✅ Shared to you explicitly
2. ✅ Inherits group permissions
3. ✅ Can be accessed from Shared With Me section

---

## 👥 Permission Levels

### Four Access Tiers

| Permission | View | Edit | Delete | Manage Perms | Share | Can Download |
|------------|------|------|--------|--------------|-------|--------------|
| **Viewer** | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Collaborator** | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Editor** | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Owner** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### Permission Level Details

#### Viewer (Read-Only)
**Capabilities:**
- ✅ View file contents
- ✅ Download file
- ✅ View properties
- ✅ Add to Favorites
- ❌ Modify anything
- ❌ Share with others

**Use for:** External stakeholders, clients, read-only access

#### Collaborator (Editor without Delete)
**Capabilities:**
- ✅ View file
- ✅ Edit metadata/properties
- ✅ Create new versions
- ✅ Comment/collaborate
- ❌ Delete file
- ❌ Change permissions

**Use for:** Team members working on project, internal collaborators

#### Editor (Full File Control)
**Capabilities:**
- ✅ View file
- ✅ Edit file & properties
- ✅ Delete file
- ✅ Create new versions
- ❌ Change permissions
- ❌ Share with others

**Use for:** Project leads, department managers

#### Owner (Full Control)
**Capabilities:**
- ✅ All Editor permissions
- ✅ Manage access permissions
- ✅ Share with new users/groups
- ✅ Transfer ownership
- ✅ Set retention policies

**Use for:** Primary owner, administrators

---

## 📋 Sharing Files with Users

### Sharing to Single User

**Steps:**
1. Right-click file → **"Share"** or **"Manage Permissions"**
2. Click **"+ Add User"** or **"Grant Access"**
3. Search for user by:
   - First name
   - Last name
   - Email address
4. Click user to select
5. Choose permission level:
   - Viewer
   - Collaborator
   - Editor
6. Click **"Grant Permission"**
7. Click **"Done"** or **"Save Changes"**

**Result:**
- ✅ User receives access
- ✅ File appears in their Repository
- ✅ Notification sent (if enabled)
- ✅ Audit log shows share event

**Example:**
```
Sharing "Q1-Budget.xlsx" with "john.doe@company.com"
Permission: Collaborator (can edit)
Time: Instant
```

### Sharing to Groups (Recommended)

**Why Groups?**
- ✅ Easier management (one action for many users)
- ✅ Automatic when new users join group
- ✅ Easier to revoke (one action, all lose access)

**Steps:**
1. Right-click file → **"Manage Permissions"**
2. Click **"+ Add Group"** (or search by name)
3. Search for group:
   - "Marketing Team"
   - "Finance Department"
   - "Project Acme"
4. Click group to select
5. Choose permission level
6. Click **"Grant Permission"**
7. Click **"Save Changes"**

**Result:**
- ✅ All group members get access
- ✅ New group members auto-inherit access
- ✅ Much easier to manage
- ✅ One revocation removes all

### Permission View Dialog

**Layout:**
```
┌─ Manage Permissions ──────────────────────┐
│ [+ Add User/Group]   [Clear All]          │
├───────────────────────────────────────────┤
│ User/Group Name          Permission  Remove│
├───────────────────────────────────────────┤
│ John Doe (User)          Collaborator  ✕  │
│ Marketing Team (Group)   Editor        ✕  │
│ Finance Dept (Group)     Viewer        ✕  │
│ You (Owner)              Owner        (Fixed)
├───────────────────────────────────────────┤
│         [Save Changes]  [Cancel]          │
└───────────────────────────────────────────┘
```

---

## 📁 Sharing Folders with Teams

### Creating Team Folders

**Scenario:** Marketing team needs shared work area

**Steps:**
1. Create folder: "Marketing-2026"
2. Right-click → **"Manage Permissions"**
3. Click **"+ Add Group"**
4. Search: "Marketing Team"
5. Select permission: **"Collaborator"** or **"Editor"**
6. Click **"Grant Permission"**
7. Click **"Save Changes"**

**Result:**
- ✅ Entire "Marketing Team" group has access
- ✅ All members can see folder instantly
- ✅ New members auto-inherit access
- ✅ All files inside inherit permissions

### Permission Inheritance

**Folder Permission Flow:**
```
Parent Folder: Marketing (Editor to Marketing Team)
    ↓
Subfolder: Q1-Campaigns
    ↓ (Inherits if no override)
Subsubfolder: Twitter-Campaign
    ↓ (Inherits if no override)
File: Twitter-Ad-Copy.xlsx
    └─ Inherits: Marketing Team = Editor
```

**Result:** Everyone with folder access can see all files inside

### Overriding Folder Permissions (Advanced)

**Scenario:** Most files are Team visible, but one is secret

**Steps:**
1. Create file in shared folder (inherits permissions)
2. Right-click file → **"Manage Permissions"**
3. Click **"Remove"** on group that shouldn't see it
4. Add specific users only if needed
5. Click **"Save Changes"**

**Result:**
- ✅ File has different permissions than folder
- ✅ Group members can't see this file
- ✅ Overrides folder settings

:::warning Override Caution
Overriding folder permissions creates exceptions. Keep these rare to avoid confusion.
:::

---

## 🔄 Changing Permissions

### Upgrading Access Level

**Scenario:** Collaborator needs to become Editor

**Steps:**
1. Right-click file → **"Manage Permissions"**
2. Find user/group in list
3. Click **permission dropdown** next to name
4. Select new level: "Editor"
5. Click **"Save Changes"**

**Result:**
- ✅ Access level updated instantly
- ✅ Old permission removed
- ✅ New permission takes effect
- ✅ Audit log shows change

### Downgrading Access Level

**Steps:** Same as upgrading, just select lower permission level

**Example:**
- Was: Editor → Now: Viewer

**Result:**
- ✅ User can no longer edit/delete
- ✅ Can still view file

:::info Transition
Users don't need to log out. Permission changes take effect immediately.
:::

---

## 🚫 Revoking Access

### Removing Single User

**Steps:**
1. Right-click file → **"Manage Permissions"**
2. Find user in list
3. Click **"Remove"** button or **"✕" icon**
4. Confirm removal (if prompted)
5. Click **"Save Changes"**

**Result:**
- ✅ User loses access immediately
- ✅ File disappears from their Repository
- ✅ Audit log shows removal
- ✅ They cannot re-access without new share

### Removing Group

**Steps:** Same as removing user

**Important:** Removing group removes ALL group members' access instantly

**Result:**
- ✅ All 50+ group members lose access at once
- ✅ Best practice: Notify team before removing

### Clearing All Permissions (Advanced)

**Steps:**
1. Right-click file → **"Manage Permissions"**
2. Click **"Clear All"** (if available)
3. Confirm: "Remove all permissions?"
4. Click **"Confirm"**

**Result:**
- ✅ All users/groups removed
- ✅ ONLY YOU (Owner) have access
- ✅ File becomes completely private

:::danger Careful
This removes access for everyone! Use only if you want absolute privacy.
:::

---

## 🔗 Sharing Links (If Enabled)

### Creating Public Share Links

**Scenario:** Want to share file without giving Repository access

**Steps:**
1. Right-click file → **"Generate Share Link"** (or "Create Link")
2. Choose link type:
   - **Public** - Anyone with link can view
   - **Restricted** - Only people you specify
   - **Expiring** - Link valid for X days
3. Choose permissions for link:
   - View only
   - Download allowed
4. Click **"Generate Link"**
5. Copy link to clipboard
6. Share via email/message

**Result:**
- ✅ Link created
- ✅ Share with external people (not in system)
- ✅ Can set expiration date
- ✅ Can disable link anytime

### Disabling Share Links

**Steps:**
1. Right-click file → **"Manage Links"**
2. Find link to disable
3. Click **"Disable"** or **"✕ Remove"**
4. Click **"Confirm"**

**Result:**
- ✅ Link stops working
- ✅ Anyone with link gets "Access Denied"
- ✅ Can be re-enabled if needed

---

## 👮 Permission Best Practices

### ✅ DO

**DO:**
- ✅ Use **group-based sharing** (not individual users)
- ✅ Grant **lowest necessary permission level**
- ✅ Review permissions **quarterly**
- ✅ Remove access when user leaves
- ✅ Document why specific people have access (comments)
- ✅ Use folder permissions as foundation
- ✅ Notify people when sharing sensitive files

**Example Good Practice:**
```
File: Salary-Data.xlsx
Permissions:
- Finance Team (Group): Editor
- CEO (User): Owner
- HR Manager (User): Editor
Review Date: Q2 2026
Reason: Salary administration
```

### ❌ DON'T

**DON'T:**
- ❌ Share to "Everyone" unless necessary
- ❌ Grant Owner access unless they need it
- ❌ Use individual user sharing (use groups)
- ❌ Keep access after user leaves company
- ❌ Share sensitive files through public links
- ❌ Override folder permissions without reason
- ❌ Create folders with unclear permissions

**Example Bad Practice:**
```
Folder: "Misc"
Permissions: Everyone = Editor
├─ Contains:
   - Salary-Data.xlsx (Sensitive! Wrong)
   - Budget-2026.xlsx (Sensitive! Wrong)
   - Old-Templates/ (OK)
```

---

## 🎯 Permission Scenarios

### Scenario 1: Team Project Folder

**Goal:** Team collaborates, but leader manages

**Setup:**
1. Create "Project-Alpha" folder
2. Permission: "Project Alpha Team" (Group) = **Collaborator**
3. Permission: "Project Lead" (User) = **Owner**

**Result:**
- Team members can create/edit files
- Can't delete others' work
- Leader has full control

### Scenario 2: Client Access Folder

**Goal:** Client can view but not edit

**Setup:**
1. Create "Client-Acme-Docs" folder
2. Permission: "Acme Client Users" (Group) = **Viewer**
3. Permission: "Account Manager" (User) = **Editor**

**Result:**
- Clients see materials
- Can't modify anything
- Account manager updates materials

### Scenario 3: Read-Only Document

**Goal:** Information-only reference

**Setup:**
1. Create "Company-Policies" folder
2. Permission: "All Employees" (Group) = **Viewer**
3. Permission: "HR Department" (Group) = **Editor**

**Result:**
- Everyone can read policies
- Only HR can update
- Changes automatically visible to all

### Scenario 4: Executive Summary

**Goal:** Confidential report for directors only

**Setup:**
1. Create "Executive-Reports" folder
2. Permission: "Board Members" (Group) = **Viewer**
3. Permission: "CFO" (User) = **Owner**
4. NO group access for regular employees

**Result:**
- Only board sees reports
- CFO manages contents
- Private access for sensitive info

---

## 📊 Permission Audit

### Viewing Who Has Access

**Steps:**
1. Right-click file → **"Manage Permissions"**
2. Table shows everyone with access:
   - Name
   - Type (User or Group)
   - Permission level
   - Date granted
   - Granted by

### Auditing Access Log

**Steps:**
1. Right-click file → **"Properties"**
2. Click **"Audit"** or **"History"** tab
3. See all events:
   - Created
   - Accessed
   - Permissions changed
   - Files deleted/restored
   - Shared/unshared

**Use for:** Compliance, security review, troubleshooting

---

## 🆘 Common Issues

### Issue: User says "Access Denied"

**Causes & Solutions:**
1. **Not shared with them** → Share file/folder
2. **Group removed them** → Re-add to group
3. **Permission revoked** → Share again
4. **Folder permission overridden** → Check file permission

### Issue: User created a record but cannot see it

**Causes & Solutions:**
1. **Missing Create permission on Content Type** → Verify user/group has Create permission on the relevant File CT or Folder CT
2. **No view access on destination path** → Grant read/view access to the target folder/repository location
3. **Group mapping not applied** → Confirm the user is in the expected permission group
4. **Record created in different folder** → Open Drive and verify the actual save location

### Issue: Everyone has access (too permissive)

**Causes & Solutions:**
1. **Folder shared to "All"** → Change folder permission
2. **File individually shared** → Remove sharing
3. **Inheritance too loose** → Use more restrictive folder perms

### Issue: Can't change permissions

**Causes & Solutions:**
1. **Only Owner can change** → Ask file owner
2. **Admin locked folder** → Contact administrator
3. **Group permissions in use** → Manage group instead

---

## 📚 Related Guides

→ [File Management](%F0%9F%93%98%20File%20Management.md) - File operations

→ [Folder Management](%F0%9F%93%98%20Folder%20Management.md) - Folder organization

→ [Search & Organization](%F0%9F%93%98%20Search%20%26%20Organization.md) - Find files

→ [Repository Sections](%F0%9F%93%98%20Repository%20Sections.md) - All sections explained
