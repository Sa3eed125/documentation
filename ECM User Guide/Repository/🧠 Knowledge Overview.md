---
sidebar_label: "📚 Repository Overview"
sidebar_position: 1
name: "📚 Repository Overview"
description: Understand what Repository is, why it matters, where to find it, and when to use it
user-invocable: true
---

# 📚 Repository Knowledge Overview

## 🎯 What is Repository?

**Repository** is the central **file and folder storage system** in Contellect ECM. It's where all your organization's documents, files, and records live. Think of it as an enterprise-grade file explorer with permissions, versioning, and advanced search capabilities.

:::info Key Concept
Repository = Your organization's centralized document storage with advanced access control and collaboration features
:::

**Key Characteristics:**
- 📁 Hierarchical folder structure
- 🔐 Permission-based access control
- 👥 Multi-user collaboration
- 🔍 Advanced search and filtering
- ⭐ Favorites/bookmarking system
- 🗑️ Recycle bin with recovery
- 📊 Storage quota management
- 🎯 Quick access shortcuts

---

## 🤔 Why Use Repository?

### Business Benefits

| Benefit | Description |
|---------|-------------|
| **Centralized Storage** | Single source of truth for all organizational documents |
| **Security** | Role-based access control ensures only authorized users see files |
| **Collaboration** | Share files easily with colleagues across departments |
| **Organization** | Hierarchical folders keep files logically grouped |
| **Auditability** | Track who accessed/modified files for compliance |
| **Search Efficiency** | Find documents instantly with advanced search |
| **Disaster Recovery** | Recycle bin prevents accidental permanent deletion |
| **Scalability** | Grows with your organization's document volume |

:::tip Business Advantage
Using Repository as your centralized storage eliminates scattered spreadsheets, email attachments, and duplicate files. This improves compliance and reduces data silos.
:::

---

## 📍 Where is Repository?

### Accessing Repository

1. **From Main Navigation**
   - Click **"My Repository"** in the left sidebar
   - URL: `/repository`
   - Location: Top-level menu item

2. **From Any Page**
   - Repository is always accessible from the main navigation
   - Quick access from the breadcrumb menu

3. **Default Location**
   - **Start:** Always opens to your **Drive** section (root repository)
   - **Sidebar:** Shows all 7 sections for quick navigation

### Navigation Structure

```
Repository (Main)
├── Drive (Root - see all items you have access to)
├── My Favorites (Bookmarked items)
├── My Files (Files/folders shared with you by others)
├── Shared With Me (Files others shared with you)
├── Shared With Others (Files you shared with colleagues)
├── My Drafts (Unpublished/draft records)
└── Trash (Deleted items - recoverable)
```

---

## ⏰ When to Use Repository?

### Use Cases by User Role

<details>
<summary><strong>📄 End Users</strong> - Who uploads and manages documents</summary>

**When to use Repository:**
- ✅ Upload project documents and reports
- ✅ Organize files into logical folder structure
- ✅ Share files with team members
- ✅ Search for files by name, date, or content
- ✅ Create drafts before publishing
- ✅ Access shared files from colleagues
- ✅ Recover accidentally deleted files from Trash

**Daily workflows:**
1. Upload weekly reports → Organize into Project folder → Share with manager
2. Search for client contracts → Download for review → Add notes as draft
3. Create team folder → Upload meeting notes → Share permission with department

</details>

<details>
<summary><strong>🔐 Administrators</strong> - Who manage permissions and structure</summary>

**When to use Repository:**
- ✅ Create folder hierarchy matching org structure
- ✅ Assign folder-level permissions to groups
- ✅ Monitor storage usage and quotas
- ✅ Configure Content Type templates for folders
- ✅ Audit file access and modifications
- ✅ Set retention policies for archived files

**Daily workflows:**
1. Create Department folder → Apply permissions to HR group → Configure Content Type
2. Monitor storage → Alert users over quota → Archive old projects
3. Review access logs → Enforce security policies

</details>

<details>
<summary><strong>👔 Workflow Designers</strong> - Who automate document processes</summary>

**When to use Repository:**
- ✅ Configure File CT to store workflow artifacts
- ✅ Link workflow tasks to Repository storage
- ✅ Set auto-publish rules for processed files
- ✅ Create approval workflows for sensitive documents
- ✅ Archive completed workflow records

**Daily workflows:**
1. Design invoice approval workflow → Route file to Accounting folder → Auto-publish approved files
2. Create leave request process → Store attachments in HR folder → Archive after 90 days

</details>

<details>
<summary><strong>💻 Developers</strong> - Who integrate Repository with apps</summary>

**When to use Repository:**
- ✅ Call Repository APIs for file operations
- ✅ Integrate document uploads into custom apps
- ✅ Query Repository for reporting/analytics
- ✅ Automate bulk file operations
- ✅ Sync Repository with external storage

**Daily workflows:**
1. Build file upload widget → Call Repository API → Return file reference
2. Create reporting app → Query Repository for file metadata → Display in dashboard

</details>

---

## 🔄 How Repository Connects to Other Features

### Repository in the Ecosystem

**File Content Type → Repository**
- Files created via File CT are stored in Repository
- File CT defines the structure/schema
- Repository stores the actual file data

**Workspace → Repository**
- Each Workspace can have associated files in Repository
- Workspace files are a filtered view of Repository
- Both use same underlying file storage

**Workflow → Repository**
- Workflows process files from Repository
- Task forms can reference Repository files
- Auto-publish moves files between folders

**Search → Repository**
- Quick Search queries Repository contents
- Advanced Search with filters and facets
- Full-text search on file metadata

---

## 📊 Repository Statistics

- **Sections:** 7 navigation categories
- **Supported File Types:** Unlimited (depends on org configuration)
- **Sharing Levels:** Folder-level and file-level permissions
- **Access Control:** Role-based with granular permissions
- **Version History:** Track modifications (if enabled)
- **Recycle Bin:** 30-day retention (configurable)

---

## ✨ Key Features at a Glance

| Feature | Purpose |
|---------|---------|
| **Quick Folder** | Create folders instantly |
| **Quick Record** | Create file records (if File CT enabled) |
| **Upload File/Folder** | Bulk upload documents |
| **Grid/List View** | Choose your preferred display |
| **Search** | Find files by name or metadata |
| **Favorites** | Star important files for quick access |
| **Sharing** | Collaborate with specific users/groups |
| **Permissions** | Control who can view, edit, delete |
| **Properties** | View file metadata and history |
| **Trash** | Recover accidentally deleted files |

---

## 🎓 Next Steps

→ **Want to create and manage files?** See [File Management](%F0%9F%93%98%20File%20Management.md)

→ **Need to organize into folders?** See [Folder Management](%F0%9F%93%98%20Folder%20Management.md)

→ **Looking for specific files?** See [Search & Organization](%F0%9F%93%98%20Search%20%26%20Organization.md)

→ **Setting up access?** See [Permissions & Sharing](%F0%9F%93%98%20Permissions%20%26%20Sharing.md)

→ **Understanding all sections?** See [Repository Sections](%F0%9F%93%98%20Repository%20Sections.md)
