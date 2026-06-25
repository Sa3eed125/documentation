---
sidebar_label: "📊 Workspace Diagrams"
sidebar_position: 5
name: "📊 Workspace Diagrams"
description: Visual architecture, workflow, and integration diagrams for Workspace
user-invocable: true
---

# 📊 Workspace — Diagrams


:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


This page contains comprehensive visual diagrams for the Workspace feature — covering architecture, workflows, permissions, record flows, and integration points.

---

## 🏗️ Workspace System Architecture

### How Workspace Connects to ECM

```mermaid
graph TB
    User["👤 User"]
    
    User -->|Navigate to| WS["🏢 Workspace<br/>/workspace"]
    
    WS -->|Organized by| Groups["👥 Permission<br/>Groups"]
    Groups -->|Contains| CTs["📋 Content Type<br/>Cards"]
    CTs -->|Click opens| Records["📊 Record<br/>List Grid"]
    
    Records -->|Create via| AddRecord["➕ Add Record<br/>Sidebar"]
    Records -->|Export via| Excel["📤 Export<br/>to Excel"]
    Records -->|Filter via| Filter["🔍 Advanced<br/>Filter"]
    Records -->|Send to| RMS["🔗 RMS<br/>Integration"]
    Records -->|Process via| WF["⚙️ Workflow<br/>Engine"]
    
    AddRecord -->|Form from| FileCT["📋 File CT<br/>Configuration"]
    FileCT -->|Defines| FormFields["📝 Form Fields<br/>& Validation"]
    
    AddRecord -->|Auto-creates/uses| RepoFolder["📁 Repository Folder<br/>Named by CT<br/>+ DMN Convention"]
    RepoFolder -->|Stores| Record["💾 Record<br/>in Folder"]
    
    WF -->|Assigns tasks via| Tasks["📌 My Tasks"]
    
    style User fill:#e1f5ff
    style WS fill:#ffeb3b
    style Groups fill:#c8e6c9
    style CTs fill:#b3e5fc
    style Records fill:#c8e6c9
    style FileCT fill:#ffccbc
    style RepoFolder fill:#c8e6c9
    style Record fill:#b3e5fc
```

---

## 🗺️ Workspace Landing Page Structure

### Visual Layout of the Landing Page

```mermaid
graph TD
    Landing["🏢 Workspace Landing Page<br/>/workspace"]
    
    Landing --> Header["🔝 Top Header<br/>My Workspace breadcrumb"]
    Landing --> Search["🔍 Search Box<br/>Search content types"]
    Landing --> Recent["⭐ Recent Cards<br/>Recently used CTs"]
    Landing --> PanelBar["📂 Panel Bar<br/>Groups + CT Cards"]
    
    PanelBar --> Group1["👥 Group 1<br/>Administrators"]
    PanelBar --> Group2["👥 Group 2<br/>HR Team"]
    PanelBar --> GroupN["👥 Group N<br/>...more groups"]
    
    Group1 --> Card1["📄 HR Letters"]
    Group1 --> Card2["📄 Employee Contracts"]
    Group1 --> Card3["📄 ...more CTs"]
    
    Group2 --> Card4["📄 Leave Requests"]
    Group2 --> Card5["📄 Payroll Forms"]
    
    Card1 -->|Click| RecordList["📊 Record List<br/>/workspace/groupId/ctId"]
    
    style Landing fill:#ffeb3b
    style Search fill:#b3e5fc
    style Recent fill:#fff9c4
    style PanelBar fill:#c8e6c9
    style RecordList fill:#c8e6c9
```

---

## 🎯 Record List Page Structure

### Inside a Content Type

```mermaid
graph TD
    RecordPage["📊 Record List Page<br/>/workspace/{groupId}/{ctId}"]
    
    RecordPage --> Breadcrumb["🧭 Breadcrumb<br/>Home → Workspace → Group/CT"]
    RecordPage --> Toolbar["🔧 Toolbar"]
    RecordPage --> Grid["📋 Grid Table"]
    RecordPage --> Pager["📄 Pagination"]
    
    Toolbar --> T1["📤 Export Excel"]
    Toolbar --> T2["🔄 Refresh"]
    Toolbar --> T3["🔍 Advanced Filter"]
    Toolbar --> T4["🔗 RMS Integration"]
    Toolbar --> T5["➕ Add Record"]
    
    Grid --> G1["☐ Select Column"]
    Grid --> G2["⚙️ Actions Column"]
    Grid --> G3["📝 Record Name"]
    Grid --> G4["📋 CT Dynamic Fields"]
    Grid --> G5["👤 Started By"]
    Grid --> G6["🕐 Created Time"]
    Grid --> G7["🔄 Modification Time"]
    Grid --> G8["🔢 Version"]
    Grid --> G9["🏷️ Barcodes"]
    
    Pager --> P1["◄◄ First Page"]
    Pager --> P2["◄ Previous"]
    Pager --> P3["Page Numbers"]
    Pager --> P4["► Next"]
    Pager --> P5["►► Last Page"]
    Pager --> P6["Items Per Page Selector"]
    Pager --> P7["X - Y of Z Items"]
    
    style RecordPage fill:#ffeb3b
    style Toolbar fill:#c8e6c9
    style Grid fill:#b3e5fc
    style Pager fill:#fff9c4
```

---

## ➕ Add Record Flow

### User Creates a New Record

```mermaid
graph TD
    User["👤 User"]
    
    User -->|Click| AddBtn["➕ Add Record<br/>Button in toolbar"]
    AddBtn -->|Opens| Sidebar["📋 Sidebar Panel<br/>Split View"]
    
    Sidebar --> Preview["👁️ Left 65%<br/>Preview Pane"]
    Sidebar --> Form["📝 Right 35%<br/>CT Form"]
    Sidebar --> Header["🎯 Sidebar Header<br/>'New Task' + Close X"]
    
    Form --> RequiredFields["⭐ Required Fields<br/>Must fill to enable SUBMIT"]
    Form --> OptionalFields["○ Optional Fields<br/>Fill if available"]
    Form --> FileUpload["📤 File Upload<br/>Attach document"]
    
    RequiredFields -->|All filled| SubmitEnabled["✅ SUBMIT<br/>Button Enabled"]
    RequiredFields -->|Any empty| SubmitDisabled["❌ SUBMIT<br/>Button Disabled"]
    
    SubmitEnabled -->|Click| Save["💾 Save Record<br/>+ Auto-create in Repo"]
    
    Save -->|Backend checks| FolderExists{"📁 Folder exists<br/>in Repository?"}
    FolderExists -->|YES| UseFolderPath["✅ Use existing<br/>folder path"]
    FolderExists -->|NO| CreateFolder["📁 Create folder<br/>Named by CT +<br/>DMN convention"]
    
    UseFolderPath -->|Apply naming| DMN["🤔 DMN rules<br/>Generate unique<br/>record name"]
    CreateFolder -->|Apply naming| DMN
    
    DMN -->|Check unique| UniqueCheck{"Name<br/>unique?"}
    UniqueCheck -->|YES| StoreRecord["💾 Store in<br/>Repository folder"]
    UniqueCheck -->|NO| NameError["⚠️ Name exists<br/>Use variation"]
    
    NameError -->|Retry| DMN
    StoreRecord -->|Return to| Grid["📊 Record Grid<br/>New record appears<br/>+ Linked to Repo"]
    
    Form --> Cancel["✖ CANCEL<br/>Discard and close"]
    
    style AddBtn fill:#ffeb3b
    style SubmitEnabled fill:#c8e6c9
    style StoreRecord fill:#c8e6c9
    style DMN fill:#ffe0b2
    style CreateFolder fill:#c8e6c9
    style NameError fill:#ffccbc
```

---

## 🔐 Permission Groups Architecture

### How Groups Control Workspace Access

```mermaid
graph TB
    Admin["🔧 Administrator<br/>Sets up groups"]
    
    Admin -->|Creates| G1["👥 Group: HR Team"]
    Admin -->|Creates| G2["👥 Group: Finance"]
    Admin -->|Creates| G3["👥 Group: Operations"]
    
    G1 -->|Has members| U1["👤 Alice\n(Editor)"]
    G1 -->|Has members| U2["👤 Bob\n(Viewer)"]
    G1 -->|Contains CTs| CT1["📄 HR Letters"]
    G1 -->|Contains CTs| CT2["📄 Leave Requests"]
    
    G2 -->|Has members| U3["👤 Carol\n(Editor)"]
    G2 -->|Contains CTs| CT3["📄 Invoices"]
    G2 -->|Contains CTs| CT4["📄 Purchase Orders"]
    
    G3 -->|Has members| U4["👤 Dave\n(Collaborator)"]
    G3 -->|Contains CTs| CT5["📄 Work Orders"]
    
    U1 -->|Sees in Workspace| WS1["📁 HR Team Group<br/>HR Letters, Leave Requests"]
    U3 -->|Sees in Workspace| WS2["📁 Finance Group<br/>Invoices, Purchase Orders"]
    U4 -->|Sees in Workspace| WS3["📁 Operations Group<br/>Work Orders"]
    
    style Admin fill:#ffeb3b
    style WS1 fill:#c8e6c9
    style WS2 fill:#c8e6c9
    style WS3 fill:#c8e6c9
```

---

## 🔄 Record Lifecycle

### From Creation to Archive

```mermaid
graph TD
    New["🆕 New Record<br/>Add Record"]
    Active["✅ Active Record<br/>In Grid"]
    Modified["🔄 Modified Record<br/>Version Incremented"]
    InWorkflow["⚙️ In Workflow<br/>Being Processed"]
    Completed["✅ Workflow Completed<br/>Final State"]
    Archived["📦 Archived"]
    Deleted["🗑️ Deleted"]
    
    New -->|SUBMIT| Active
    Active -->|Edit & Save| Modified
    Modified -->|Edit Again| Modified
    Active -->|Trigger Workflow| InWorkflow
    Modified -->|Trigger Workflow| InWorkflow
    InWorkflow -->|Approve/Complete| Completed
    InWorkflow -->|Reject| Active
    Completed -->|Archive| Archived
    Active -->|Delete| Deleted
    Modified -->|Delete| Deleted
    
    style New fill:#e1f5ff
    style Active fill:#c8e6c9
    style Modified fill:#fff9c4
    style InWorkflow fill:#ffe0b2
    style Completed fill:#c8e6c9
    style Archived fill:#b3e5fc
    style Deleted fill:#ffccbc
```

---

## 🔍 Search & Filter Flow

### Finding Records in Workspace

```mermaid
graph TD
    User["👤 User<br/>Needs to find records"]
    
    User -->|Where?| Decision{{"At which<br/>level?"}}
    
    Decision -->|On landing page| SearchCT["🔍 Search Box<br/>Find Content Type by name"]
    Decision -->|Inside CT grid| FilterGrid{{"Filter type?"}}
    
    SearchCT -->|Type CT name| FilterCards["📋 Cards Filter<br/>Only matching CTs shown"]
    FilterCards -->|Click card| OpenGrid["📊 Open Record Grid"]
    
    FilterGrid -->|Simple| ColumnSort["⬆⬇ Sort Column<br/>Click header"]
    FilterGrid -->|Complex| AdvFilter["🔍 Advanced Filter<br/>Multi-field conditions"]
    
    ColumnSort -->|Result| SortedGrid["📊 Sorted Grid"]
    AdvFilter -->|Apply| FilteredGrid["📊 Filtered Grid<br/>Matching records only"]
    
    FilteredGrid -->|Export| Excel["📤 Export to Excel<br/>Filtered data only"]
    
    style User fill:#e1f5ff
    style FilteredGrid fill:#c8e6c9
    style SearchCT fill:#b3e5fc
```

---

## 📊 Pagination Navigation

### How Pagination Works

```mermaid
graph TD
    Grid["📊 Grid<br/>45 total records"]
    Page1["Page 1<br/>Records 1-10"]
    Page2["Page 2<br/>Records 11-20"]
    Page3["Page 3<br/>Records 21-30"]
    Page4["Page 4<br/>Records 31-40"]
    Page5["Page 5<br/>Records 41-45"]
    
    Grid --> Page1
    Page1 -->|► Next| Page2
    Page2 -->|► Next| Page3
    Page3 -->|► Next| Page4
    Page4 -->|► Next| Page5
    Page5 -->|◄ Prev| Page4
    
    Grid --> ItemsPerPage["Items Per Page: 10"]
    ItemsPerPage -->|Change to 25| BigPage["Pages Reduce<br/>1-25, 26-45"]
    ItemsPerPage -->|Change to 50| OnePage["Single Page<br/>All 45 records"]
    
    style Grid fill:#ffeb3b
    style Page1 fill:#c8e6c9
    style BigPage fill:#b3e5fc
    style OnePage fill:#b3e5fc
```

---

## 🔗 RMS Integration Flow

### Sending Records to RMS System

```mermaid
graph TD
    User["👤 User<br/>In Record Grid"]
    
    User -->|Select records| Select["☑️ Select<br/>Checkboxes"]
    Select -->|Activates| RMSBtn["🔗 RMS Integration<br/>Button Enabled"]
    RMSBtn -->|Click| RMSFlow["📊 RMS Workflow<br/>Starts"]
    
    RMSFlow -->|Process| Add["➕ Add to RMS"]
    RMSFlow -->|Process| Pickup["🚚 Pickup"]
    RMSFlow -->|Process| Delivery["📦 Delivery"]
    RMSFlow -->|Process| Return["↩️ Return"]
    
    Add -->|Complete| RMSRecord["📋 RMS Record<br/>Created"]
    RMSRecord -->|Linked to| WSRecord["📄 Workspace Record<br/>Updated with RMS ref"]
    
    style Select fill:#ffeb3b
    style RMSBtn fill:#c8e6c9
    style RMSRecord fill:#b3e5fc
    style WSRecord fill:#c8e6c9
```

---

## 📋 Content Type Integration

### How File CT Flows into Workspace

```mermaid
graph LR
    Admin["🔧 Admin<br/>Configuration"]
    FileCT["📋 File CT<br/>Created in Config"]
    
    Admin -->|Creates| FileCT
    FileCT -->|Schema defines| Fields["📝 Form Fields<br/>- Text<br/>- Number<br/>- Date<br/>- File Upload"]
    
    FileCT -->|Assigned to| Group["👥 Workspace Group"]
    Group -->|Appears as| Card["📄 CT Card<br/>in Workspace"]
    Card -->|Click opens| RecordList["📊 Record List<br/>Grid + Toolbar"]
    RecordList -->|Add Record| Form["📋 Add Record Form<br/>With CT fields"]
    Form -->|Submit creates| Record["💾 Saved Record<br/>With metadata"]
    
    Record -->|Columns in grid| Grid["📊 Grid<br/>Dynamic columns<br/>from CT definition"]
    
    style FileCT fill:#ffccbc
    style Fields fill:#fff9c4
    style Record fill:#c8e6c9
    style Grid fill:#b3e5fc
```

---

## 👥 Multi-Group User Access

### User Belonging to Multiple Groups

```mermaid
graph TB
    User["👤 John Doe<br/>Member of 2 groups"]
    
    User -->|Member of| G1["👥 HR Team Group<br/>Editor role"]
    User -->|Member of| G2["👥 Finance Group<br/>Viewer role"]
    
    G1 -->|Contains| CT1["📄 HR Letters"]
    G1 -->|Contains| CT2["📄 Leave Requests"]
    
    G2 -->|Contains| CT3["📄 Invoices"]
    G2 -->|Contains| CT4["📄 Budget Reports"]
    
    User -->|Sees in Workspace| WS["🏢 Workspace"]
    WS --> PB1["📁 HR Team Group<br/>(expanded)"]
    WS --> PB2["📁 Finance Group<br/>(expanded)"]
    
    PB1 --> Card1["📄 HR Letters<br/>(Editor - can create/edit)"]
    PB1 --> Card2["📄 Leave Requests<br/>(Editor - can create/edit)"]
    
    PB2 --> Card3["📄 Invoices<br/>(Viewer - read only)"]
    PB2 --> Card4["📄 Budget Reports<br/>(Viewer - read only)"]
    
    style User fill:#e1f5ff
    style WS fill:#ffeb3b
    style Card1 fill:#c8e6c9
    style Card3 fill:#b3e5fc
```

---

## ⚙️ Advanced Filter Logic

### Building Complex Queries

```mermaid
graph TD
    Filter["🔍 Advanced Filter<br/>Panel Opens"]
    
    Filter -->|Add rule| Rule1["Rule 1:<br/>Department = 'Finance'"]
    Filter -->|Add rule| Rule2["Rule 2:<br/>Date Issue > 2026-01-01"]
    Filter -->|Add rule| Rule3["Rule 3:<br/>Started By = 'John'"]
    
    Rule1 --> Logic{{"Combine<br/>with AND/OR?"}}
    Rule2 --> Logic
    Rule3 --> Logic
    
    Logic -->|AND| Strict["📊 Strict Result<br/>ALL rules must match"]
    Logic -->|OR| Loose["📊 Flexible Result<br/>ANY rule can match"]
    
    Strict -->|Example| SR["Finance records<br/>after Jan 2026<br/>created by John"]
    Loose -->|Example| LR["Any Finance record<br/>OR any record after Jan 2026<br/>OR any John's records"]
    
    Strict -->|Apply| FilteredGrid["📊 Filtered Grid"]
    Loose -->|Apply| FilteredGrid
    
    style Filter fill:#ffeb3b
    style Strict fill:#c8e6c9
    style Loose fill:#fff9c4
    style FilteredGrid fill:#b3e5fc
```

---

## 🏷️ Version Tracking

### How Record Versioning Works

```mermaid
graph TD
    V1["📄 Version 1<br/>Created by Alice<br/>2026-06-01 10:00"]
    V2["📄 Version 2<br/>Edited by Alice<br/>2026-06-03 14:30"]
    V3["📄 Version 3<br/>Edited by Bob<br/>2026-06-05 09:00"]
    V4["📄 Version 4<br/>Edited by Alice<br/>2026-06-09 11:00"]
    
    V1 -->|Edit & Save| V2
    V2 -->|Edit & Save| V3
    V3 -->|Edit & Save| V4
    
    V4 -->|Grid shows| Current["📊 Grid Column 'Version'<br/>Shows: 4"]
    V4 -->|View History| History["📋 Version History<br/>V1 → V2 → V3 → V4<br/>Who changed what & when"]
    
    style V1 fill:#e1f5ff
    style V4 fill:#c8e6c9
    style Current fill:#fff9c4
    style History fill:#b3e5fc
```

---

## � Workspace-to-Repository Automatic Folder Sync

### Record Auto-Creates Folder in Repository

```mermaid
graph LR
    WS["🏢 Workspace<br/>User creates record"]
    
    WS -->|SUBMIT| Check{"📁 Folder<br/>exists in<br/>Repository?"}
    
    Check -->|YES| Exists["✅ Folder exists<br/>HR Letters"]
    Check -->|NO| Create["📁 CREATE Folder<br/>HR Letters"]
    
    Exists -->|Put record in| FolderUse["📁 Repository<br/>HR Letters Folder<br/>├─ Record 1<br/>├─ Record 2<br/>└─ Record 3"]
    
    Create -->|Put record in| FolderNew["📁 Repository<br/>HR Letters Folder<br/>├─ Record 1<br/>├─ Record 2<br/>└─ Record 3"]
    
    FolderUse -->|Naming:<br/>DMN rule| RecordName["📝 Record Name<br/>Must be UNIQUE<br/>within CT<br/>(DMN convention)"]
    FolderNew -->|Naming:<br/>DMN rule| RecordName
    
    RecordName -->|Result| Linked["🔗 Record linked<br/>in Workspace<br/>+ Stored in<br/>Repository folder"]
    
    style WS fill:#ffeb3b
    style Check fill:#fff9c4
    style FolderUse fill:#c8e6c9
    style FolderNew fill:#c8e6c9
    style RecordName fill:#b3e5fc
    style Linked fill:#e8f5e9
```

---

## �🔄 Workspace vs Repository Comparison

### When to Use Which

```mermaid
graph TB
    Need["❓ I need to..."]
    
    Need -->|Store structured<br/>business records| WS["🏢 WORKSPACE<br/>Use This"]
    Need -->|Store files<br/>& documents| Repo["📁 REPOSITORY<br/>Use This"]
    
    WS --> WS1["✅ HR Letters"]
    WS --> WS2["✅ Contracts"]
    WS --> WS3["✅ Invoice Register"]
    WS --> WS4["✅ Department Forms"]
    
    Repo --> R1["✅ Project Files"]
    Repo --> R2["✅ Shared Documents"]
    Repo --> R3["✅ Media Assets"]
    Repo --> R4["✅ Templates"]
    
    WS --> WSDesc["Grid-based, permission groups<br/>CT-defined metadata<br/>Workflow integration"]
    Repo --> RepoDesc["Folder-based, file browsing<br/>Search & favorites<br/>Sharing & permissions"]
    
    style WS fill:#c8e6c9
    style Repo fill:#b3e5fc
    style WSDesc fill:#f1f8e9
    style RepoDesc fill:#e3f2fd
```

---

## 📋 Best Practices

### Workspace Usage Guidelines

```mermaid
graph TD
    Design["🎨 Using<br/>Workspace Effectively"]
    
    Good["✅ BEST PRACTICES"]
    Avoid["❌ ANTI-PATTERNS"]
    
    Design --> Good
    Design --> Avoid
    
    Good --> G1["Organize Groups<br/>by Department/Function"]
    Good --> G2["Use Consistent<br/>CT Naming Conventions"]
    Good --> G3["Apply Advanced Filter<br/>Before Export"]
    Good --> G4["Keep Items Per Page<br/>at 10-25 for performance"]
    Good --> G5["Refresh Before<br/>Critical Work"]
    Good --> G6["Use Search on<br/>Landing Page"]
    
    Avoid --> A1["Creating Too Many<br/>Groups"]
    Avoid --> A2["Mixing Unrelated CTs<br/>in Same Group"]
    Avoid --> A3["Giving Everyone<br/>Editor/Owner role"]
    Avoid --> A4["Forgetting to<br/>Refresh Grid"]
    Avoid --> A5["Large Items Per Page<br/>> 50 in slow networks"]
    
    style Design fill:#ffeb3b
    style Good fill:#c8e6c9
    style Avoid fill:#ffccbc
```

---

## 📚 Related Guides

→ [Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) — Understand Workspace basics

→ [Managing Records](%F0%9F%93%98%20Managing%20Records.md) — Create, edit, delete records

→ [Workspace Groups](%F0%9F%93%98%20Workspace%20Groups.md) — Permission groups setup

→ [Grid & Navigation](%F0%9F%93%98%20Grid%20%26%20Navigation.md) — Toolbar, pagination, filters

→ [Repository Diagrams](../Repository/%F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 %F0%9F%97%BA%20🗺 Diagrams.md) — Repository visual guides
