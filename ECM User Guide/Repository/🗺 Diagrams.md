---
sidebar_label: "📊 Repository Diagrams"
sidebar_position: 7
name: "📊 Repository Diagrams"
description: Visual workflows and architecture diagrams for Repository features
user-invocable: true
---

# 📊 Repository Diagrams


:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Repository Architecture

### High-Level System Diagram

```mermaid
graph TB
    User["👤 User Access"]
    UI["🖥️ Repository UI"]
    Search["🔍 Search Engine"]
    Perms["🔐 Permissions Engine"]
    Storage["💾 File Storage"]
    Audit["📝 Audit Log"]
    
    User -->|Navigate| UI
    UI -->|Query| Search
    UI -->|Check Access| Perms
    Perms -->|Verify| Audit
    UI -->|Read/Write| Storage
    Storage -->|Log Events| Audit
    
    style User fill:#e1f5ff
    style UI fill:#f3e5f5
    style Search fill:#fff3e0
    style Perms fill:#ffe0b2
    style Storage fill:#c8e6c9
    style Audit fill:#ffccbc
```

---

## File Upload Workflow

### Complete Upload Process

```mermaid
graph TD
    Start["📤 User Initiates Upload"]
    Select["Select File(s)"]
    Validate["✅ Validate File"]
    Upload["⬆️ Upload to Storage"]
    Index["🔍 Index for Search"]
    Perms["🔐 Apply Permissions"]
    Notify["📢 Notify Subscribers"]
    Done["✅ Complete"]
    
    Start --> Select
    Select --> Validate
    Validate -->|Valid| Upload
    Validate -->|Invalid| Error["❌ Error"]
    Upload --> Index
    Index --> Perms
    Perms --> Notify
    Notify --> Done
    
    style Start fill:#e3f2fd
    style Done fill:#c8e6c9
    style Error fill:#ffcdd2
```

---

## File Sharing Flow

### How Files Get Shared

```mermaid
graph LR
    Owner["👤 Owner"]
    Share["🔗 Grant Permission"]
    User["👤 Recipient"]
    Access["✅ Can Access"]
    Notify["📧 Notification"]
    
    Owner -->|"Shares File"| Share
    Share -->|"Updates Permissions"| Access
    Access -->|"User now sees file"| User
    Share -.->|"Sends notification"| Notify
    Notify --> User
    
    style Owner fill:#e8f5e9
    style Share fill:#fff9c4
    style User fill:#e1f5ff
    style Access fill:#c8e6c9
    style Notify fill:#ffe0b2
```

---

## Permission Levels Hierarchy

### Access Control Progression

```mermaid
graph TB
    Public["🌍 Everyone"]
    Group["👥 Group/Team"]
    User["👤 Individual User"]
    Viewer["👁️ Viewer<br/>View Only"]
    Collab["✍️ Collaborator<br/>View + Edit"]
    Editor["✏️ Editor<br/>View + Edit + Delete"]
    Owner["👑 Owner<br/>Full Control"]
    
    Public --> Group
    Group --> User
    User --> Viewer
    User --> Collab
    User --> Editor
    User --> Owner
    
    Viewer -.->|Least Access| Collab
    Collab -.->|More Access| Editor
    Editor -.->|Full Access| Owner
    
    style Owner fill:#ffcdd2
    style Editor fill:#fff9c4
    style Collab fill:#c8e6c9
    style Viewer fill:#e1f5ff
```

---

## File Lifecycle

### From Creation to Archive

```mermaid
graph TD
    Create["➕ Create File<br/>or Upload"]
    Draft["📝 Draft Status<br/>Not Published"]
    Publish["✅ Publish<br/>Share with Others"]
    Active["🟢 Active<br/>In Use"]
    Archive["📦 Archive<br/>Move Old Files"]
    Delete["🗑️ Delete<br/>Move to Trash"]
    Recover["🔄 Recover<br/>Restore from Trash"]
    Permanent["❌ Permanent Delete<br/>Remove Forever"]
    
    Create --> Draft
    Draft --> Publish
    Publish --> Active
    Active --> Archive
    Active --> Delete
    Delete --> Recover
    Delete -->|After 30 Days| Permanent
    Recover --> Active
    Archive -->|Archive Retention| Permanent
    
    style Create fill:#c8e6c9
    style Publish fill:#fff9c4
    style Active fill:#b3e5fc
    style Delete fill:#ffccbc
    style Permanent fill:#ef9a9a
    style Recover fill:#a5d6a7
```

---

## Folder Hierarchy Navigation

### Typical Org Structure

```mermaid
graph TD
    Drive["📁 Drive<br/>Root Repository"]
    Dept1["📁 Finance"]
    Dept2["📁 Sales"]
    Dept3["📁 Marketing"]
    
    Sub1["📁 2026"]
    Sub2["📁 Invoices"]
    Sub3["📁 Q1"]
    Sub4["📁 Campaigns"]
    
    File1["📄 Invoice #001"]
    File2["📄 Q1 Report"]
    File3["📄 Budget.xlsx"]
    
    Drive --> Dept1
    Drive --> Dept2
    Drive --> Dept3
    Dept1 --> Sub1
    Dept1 --> Sub2
    Sub1 --> Sub3
    Sub2 --> File1
    Sub3 --> File2
    Dept3 --> Sub4
    Sub4 --> File3
    
    style Drive fill:#ffeb3b
    style Dept1 fill:#fff9c4
    style Dept2 fill:#fff9c4
    style Dept3 fill:#fff9c4
    style File1 fill:#b3e5fc
    style File2 fill:#b3e5fc
    style File3 fill:#b3e5fc
```

---

## Search Flow

### How Search Finds Files

```mermaid
graph TD
    Query["🔍 User Types Query"]
    SearchEngine["🔎 Search Engine"]
    FileNames["📄 Search File Names"]
    Metadata["📋 Search Metadata"]
    Content["📖 Search Content"]
    Filter["🎯 Apply Filters"]
    CheckPerms["🔐 Check Permissions"]
    Results["📊 Display Results"]
    
    Query --> SearchEngine
    SearchEngine --> FileNames
    SearchEngine --> Metadata
    SearchEngine --> Content
    FileNames --> Filter
    Metadata --> Filter
    Content --> Filter
    Filter --> CheckPerms
    CheckPerms -->|Only items user can see| Results
    
    style Query fill:#e1f5ff
    style SearchEngine fill:#f3e5f5
    style Results fill:#c8e6c9
```

---

## Permission Inheritance

### How Permissions Flow Down

```mermaid
graph TD
    FolderA["📁 Drive<br/>Permission: Public"]
    FolderB["📁 Finance<br/>Permission: Finance Team"]
    FolderC["📁 Salaries<br/>Permission: Managers Only"]
    FileD["📄 Salary.xlsx<br/>Inherits: Managers Only"]
    
    FolderA -->|Inherits| FolderB
    FolderB -->|Inherits| FolderC
    FolderC -->|Inherits| FileD
    
    PermA["🔓 Public<br/>Everyone can view"]
    PermB["🔐 Finance Team<br/>Team members only"]
    PermC["🔒 Managers Only<br/>Restricted access"]
    PermD["🔒 Inherits Manager<br/>Restricted access"]
    
    FolderA -.-> PermA
    FolderB -.-> PermB
    FolderC -.-> PermC
    FileD -.-> PermD
    
    style FolderA fill:#fff9c4
    style FolderB fill:#ffe0b2
    style FolderC fill:#ffccbc
    style FileD fill:#ffccbc
```

---

## Multi-User Collaboration

### How Teams Work Together

```mermaid
graph TB
    TeamLead["👨‍💼 Team Lead"]
    Member1["👤 Member 1"]
    Member2["👤 Member 2"]
    Member3["👤 Member 3"]
    
    Folder["📁 Project Folder<br/>Team = Collaborator"]
    File1["📄 Doc 1"]
    File2["📄 Doc 2"]
    
    TeamLead -->|Creates| Folder
    TeamLead -->|Shares| Folder
    Folder -->|Shares| Member1
    Folder -->|Shares| Member2
    Folder -->|Shares| Member3
    
    Member1 -->|Uploads| File1
    Member2 -->|Uploads| File2
    Member3 -->|Can Edit| File1
    Member3 -->|Can Edit| File2
    
    style TeamLead fill:#ffcdd2
    style Member1 fill:#c8e6c9
    style Member2 fill:#c8e6c9
    style Member3 fill:#c8e6c9
    style Folder fill:#fff9c4
    style File1 fill:#b3e5fc
    style File2 fill:#b3e5fc
```

---

## Sidebar Navigation

### All 7 Sections Overview

```mermaid
graph TD
    Repo["🗂️ Repository"]
    Drive["📁 Drive<br/>All Accessible Files"]
    Fav["⭐ My Favorites<br/>Starred Files"]
    MyFiles["📄 My Files<br/>Shared To You"]
    Shared["📨 Shared With Me<br/>Incoming Shares"]
    Gave["📤 Shared With Others<br/>Outgoing Shares"]
    Drafts["✏️ My Drafts<br/>Work-in-Progress"]
    Trash["🗑️ Trash<br/>Deleted Items"]
    
    Repo --> Drive
    Repo --> Fav
    Repo --> MyFiles
    Repo --> Shared
    Repo --> Gave
    Repo --> Drafts
    Repo --> Trash
    
    style Repo fill:#ffeb3b
    style Drive fill:#b3e5fc
    style Fav fill:#b3e5fc
    style MyFiles fill:#b3e5fc
    style Shared fill:#b3e5fc
    style Gave fill:#b3e5fc
    style Drafts fill:#b3e5fc
    style Trash fill:#b3e5fc
```

---

## File Action Menu

### Available Operations on Files

```mermaid
graph TD
    File["📄 File Selected"]
    Open["👁️ Open/Preview"]
    Edit["✏️ Edit Metadata"]
    Version["📑 View Versions"]
    Copy["📋 Copy"]
    Move["↪️ Move"]
    Rename["📝 Rename"]
    Delete["🗑️ Delete"]
    Favorite["⭐ Add to Favorites"]
    Share["🔗 Share"]
    Perms["🔐 Manage Permissions"]
    Props["📊 View Properties"]
    Download["📥 Download"]
    Link["🔗 Generate Share Link"]
    
    File --> Open
    File --> Edit
    File --> Version
    File --> Copy
    File --> Move
    File --> Rename
    File --> Delete
    File --> Favorite
    File --> Share
    File --> Perms
    File --> Props
    File --> Download
    File --> Link
    
    style File fill:#ffeb3b
    style Delete fill:#ffccbc
    style Favorite fill:#fff9c4
    style Share fill:#c8e6c9
```

---

## Quick Folder Creation Workflow

### Create Folder in 3 Clicks

```mermaid
graph LR
    Click1["Click<br/>Quick Folder"]
    Dialog["📝 Enter Folder<br/>Name"]
    Click2["Click<br/>Save"]
    Result["✅ Folder Created<br/>in Current Location"]
    
    Click1 --> Dialog
    Dialog --> Click2
    Click2 --> Result
    
    style Click1 fill:#fff9c4
    style Dialog fill:#c8e6c9
    style Click2 fill:#fff9c4
    style Result fill:#b3e5fc
```

---

## File Deletion & Recovery

### Trash Workflow

```mermaid
graph TD
    Active["🟢 Active File<br/>In Repository"]
    Delete["🗑️ Delete Action"]
    Trash["Trash Section<br/>30-Day Retention"]
    Recover["🔄 Restore<br/>Back to Location"]
    Permanent["❌ Permanently Delete<br/>Cannot Recover"]
    Auto["⏰ After 30 Days<br/>Auto-Deleted"]
    
    Active -->|User Deletes| Delete
    Delete --> Trash
    Trash -->|User Recovers| Recover
    Recover --> Active
    Trash -->|User Confirms| Permanent
    Trash -->|Time Expires| Auto
    
    style Active fill:#c8e6c9
    style Delete fill:#ffccbc
    style Trash fill:#fff9c4
    style Recover fill:#b3e5fc
    style Permanent fill:#ef9a9a
    style Auto fill:#ef9a9a
```

---

## Search & Filter Decision Tree

### How to Find Your File

```mermaid
graph TD
    Start["❓ What are you looking for?"]
    
    KnowName{"Know<br/>File Name?"}
    RecentFiles{"Recent<br/>Files?"}
    Project{"Specific<br/>Project?"}
    Type{"Specific<br/>File Type?"}
    
    Search["🔍 Use Search Box<br/>Type Name"]
    MyFiles["📄 My Files<br/>Shared To You"]
    Drive["📁 Drive<br/>Browse Folder"]
    Filter["🎯 Use Filters<br/>Select Type"]
    
    Start --> KnowName
    KnowName -->|Yes| Search
    KnowName -->|No| RecentFiles
    RecentFiles -->|Yes| MyFiles
    RecentFiles -->|No| Project
    Project -->|Yes| Drive
    Project -->|No| Type
    Type -->|Yes| Filter
    Type -->|No| Fav["⭐ Check<br/>My Favorites"]
    
    style Start fill:#ffeb3b
    style Search fill:#b3e5fc
    style MyFiles fill:#b3e5fc
    style Drive fill:#b3e5fc
    style Filter fill:#b3e5fc
    style Fav fill:#b3e5fc
```

---

## Permission Change Workflow

### How to Update Access

```mermaid
graph TD
    Start["📄 Have File/Folder"]
    Open["Right-Click →<br/>Manage Permissions"]
    View["See Current Access<br/>Table of Users/Groups"]
    Decide{"What to<br/>Change?"}
    
    Add["➕ Add User/Group"]
    Remove["❌ Remove User/Group"]
    Upgrade["⬆️ Upgrade Permission<br/>Viewer → Collaborator"]
    Downgrade["⬇️ Downgrade Permission<br/>Editor → Viewer"]
    
    AddSteps["Search User → Select<br/>Permission Level → Grant"]
    RemoveSteps["Find User → Click<br/>Remove → Confirm"]
    UpSteps["Click Dropdown →<br/>Select Higher Level"]
    DownSteps["Click Dropdown →<br/>Select Lower Level"]
    
    Save["💾 Save Changes"]
    Done["✅ Permissions Updated"]
    
    Start --> Open
    Open --> View
    View --> Decide
    Decide -->|Add| Add
    Decide -->|Remove| Remove
    Decide -->|Upgrade| Upgrade
    Decide -->|Downgrade| Downgrade
    
    Add --> AddSteps
    Remove --> RemoveSteps
    Upgrade --> UpSteps
    Downgrade --> DownSteps
    
    AddSteps --> Save
    RemoveSteps --> Save
    UpSteps --> Save
    DownSteps --> Save
    
    Save --> Done
    
    style Start fill:#ffeb3b
    style View fill:#f3e5f5
    style Done fill:#c8e6c9
```

---

## Storage & Quota Management

### How Storage Works

```mermaid
graph TD
    Total["📊 Total Storage Quota<br/>10 GB"]
    Used["💾 Used Storage<br/>7 GB"]
    Remaining["⚪ Remaining<br/>3 GB"]
    Archive["📦 Archive Old Files<br/>Free Space"]
    Delete["🗑️ Empty Trash<br/>Free Space"]
    Request["📈 Request More Quota<br/>From Admin"]
    
    Total --> Used
    Total --> Remaining
    
    Used -->|When Full| Archive
    Used -->|When Full| Delete
    Used -->|When Full| Request
    
    Archive -->|Reduces Used| Remaining
    Delete -->|Reduces Used| Remaining
    Request -->|Increases Total| Total
    
    style Total fill:#fff9c4
    style Used fill:#ffccbc
    style Remaining fill:#c8e6c9
    style Archive fill:#b3e5fc
    style Delete fill:#b3e5fc
    style Request fill:#b3e5fc
```

---

## Best Practices Summary

### Repository Guidelines Flowchart

```mermaid
graph TD
    Start["📌 Using Repository?"]
    
    Naming["✅ Use clear,<br/>descriptive names"]
    Organize["✅ Create hierarchy<br/>by dept/project"]
    Perms["✅ Use groups<br/>not individuals"]
    Clean["✅ Archive & delete<br/>old files"]
    Backup["✅ Assume files<br/>are backed up"]
    Share["✅ Notify people<br/>before sharing"]
    Audit["✅ Review permissions<br/>quarterly"]
    
    BadName["❌ Avoid: Doc1,<br/>Final_v3, Temp"]
    BadOrg["❌ Avoid: Misc folder,<br/>too deep paths"]
    BadPerms["❌ Avoid: Sharing<br/>to Everyone"]
    BadClean["❌ Avoid: Never<br/>deleting old files"]
    BadShare["❌ Avoid: Sharing<br/>without context"]
    
    Start --> Naming
    Naming --> Organize
    Organize --> Perms
    Perms --> Clean
    Clean --> Backup
    Backup --> Share
    Share --> Audit
    
    Naming -.-> BadName
    Organize -.-> BadOrg
    Perms -.-> BadPerms
    Clean -.-> BadClean
    Share -.-> BadShare
    
    style Start fill:#ffeb3b
    style Naming fill:#c8e6c9
    style Organize fill:#c8e6c9
    style Perms fill:#c8e6c9
    style Clean fill:#c8e6c9
    style Backup fill:#c8e6c9
    style Share fill:#c8e6c9
    style Audit fill:#c8e6c9
```

---

## 📚 Related Guides

→ [Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Repository basics

→ [File Management](%F0%9F%93%98%20File%20Management.md) - Work with files

→ [Folder Management](%F0%9F%93%98%20Folder%20Management.md) - Organize folders

→ [Search & Organization](%F0%9F%93%98%20Search%20%26%20Organization.md) - Find files

→ [Permissions & Sharing](%F0%9F%93%98%20Permissions%20%26%20Sharing.md) - Control access

→ [Repository Sections](%F0%9F%93%98%20Repository%20Sections.md) - All 7 sections explained
