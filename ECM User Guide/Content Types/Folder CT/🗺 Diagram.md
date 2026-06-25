---
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🗺 Diagrams"
description: Visual workflows, architecture diagrams, and folder organization for Folder CT
user-invocable: true
---

# 📊 Folder Content Types - Diagrams


:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


This page contains comprehensive architecture diagrams, workflow flows, and visual references to help you understand how Folder Content Types work in the ECM repository system.

:::info Key Insight
Folder CT is the **metadata schema** for folders in Repository. It defines what attributes folders can have for organization, search, and compliance.
:::

---

## 🏗️ Architecture & System Integration

### Folder CT Ecosystem Map

```mermaid
graph TB
    FCT["📋 Folder CT<br/>Metadata Schema"]
    
    FCT -->|Used in| Repo["📁 Repository<br/>Folder Creation"]
    
    Repo -->|Enable| Search["🔍 Search<br/>& Filter by<br/>Metadata"]
    Repo -->|Enable| Org["🗂️ Organization<br/>by Attributes"]
    Repo -->|Enable| Retain["📊 Retention<br/>Lifecycle<br/>Policies"]
    Repo -->|Enable| Audit["📝 Audit<br/>Compliance<br/>Tracking"]
    Repo -->|Enable| Sharing["🤝 Share<br/>with Teams"]
    
    Search -->|User finds| SearchResult["✅ Filtered<br/>Results"]
    Org -->|User organizes| OrgResult["✅ Structured<br/>Hierarchy"]
    Retain -->|System enforces| RetainResult["✅ Auto-Archive/<br/>Delete"]
    Audit -->|System tracks| AuditResult["✅ Compliance<br/>Reports"]
    
    style FCT fill:#ffeb3b
    style Repo fill:#c8e6c9
    style SearchResult fill:#b3e5fc
```

---

## 🎯 Folder Creation Lifecycle

### Configuration to Deployment

```mermaid
graph TD
    Start["🚀 Start<br/>Create New Folder CT"]
    Name["📝 Enter Name<br/>& Description"]
    Builder["🎨 Open Form.io<br/>Builder"]
    Add["➕ Add Components<br/>Drag & Drop"]
    Config["⚙️ Configure<br/>Each Component"]
    Preview["👁️ Preview<br/>Form Layout"]
    Review["✅ Review &<br/>Validate"]
    Save["💾 Create/Save<br/>Folder CT"]
    Deploy["🚀 Available in<br/>Repository"]
    
    Start --> Name
    Name --> Builder
    Builder --> Add
    Add --> Config
    Config --> Preview
    Preview --> Review
    Review -->|Adjust?| Config
    Review -->|OK| Save
    Save --> Deploy
    
    style Start fill:#c8e6c9
    style Deploy fill:#c8e6c9
    style Save fill:#fff9c4
    style Preview fill:#ffe0b2
```

---

## 📋 Component Organization

### All 33+ Components Available in Folder CT

```mermaid
graph TD
    All["📊 Folder CT Components<br/>33 Form.io"]
    
    All --> Basic["🔤 Basic: 9"]
    Basic --> B1["Text Field, Text Area"]
    Basic --> B2["Number, Password"]
    Basic --> B3["Checkbox, Select"]
    Basic --> B4["Radio, Button"]
    
    All --> Advanced["⚡ Advanced: 8"]
    Advanced --> A1["Email, URL, Phone"]
    Advanced --> A2["Tags, Date/Time"]
    Advanced --> A3["Currency, Survey"]
    Advanced --> A4["Signature"]
    
    All --> Layout["📐 Layout: 9"]
    Layout --> L1["HTML, Content"]
    Layout --> L2["Columns, Field Set"]
    Layout --> L3["Panel, Table, Tabs"]
    Layout --> L4["Well"]
    
    All --> Data["💾 Data: 6"]
    Data --> D1["Hidden, Container"]
    Data --> D2["Data Grid, Edit Grid"]
    Data --> D3["Nested Form"]
    
    All --> Note["📌 Note"]
    Note --> N1["No File Upload<br/>Component<br/>(Folders don't store files)"]
    
    style All fill:#ffeb3b
    style Basic fill:#c8e6c9
    style Advanced fill:#c8e6c9
    style Layout fill:#c8e6c9
    style Data fill:#c8e6c9
    style N1 fill:#ffe0b2
```

---

## ⚙️ Configuration Workflow

### Building a Folder CT Step-by-Step

```mermaid
sequenceDiagram
    actor User
    participant ECM as ECM UI
    participant Builder as Form.io Builder
    participant Preview as Preview Modal
    participant Save as System

    User->>ECM: Go to Configuration
    User->>ECM: Content Type → Folders
    User->>ECM: Click Create New
    User->>Builder: Enter Name & Description
    User->>Builder: Add Components (drag/drop)
    User->>Builder: Configure Display Tab
    User->>Builder: Configure Data Tab
    User->>Builder: Configure Validation Tab
    User->>Preview: Click Preview
    Preview->>User: Show form as users see it
    User->>Builder: Adjust if needed
    User->>Save: Click Create
    Save->>ECM: Folder CT saved
    ECM->>User: ✅ Available in Repository
```

---

## 🔄 Data Flow: Folder Creation

### User Creates Folder in Repository

```mermaid
graph TD
    User["👤 User<br/>Repository"]
    Click["Click<br/>Create Folder"]
    Form["📋 Form Appears<br/>Based on Folder CT"]
    Fields["📝 All Fields<br/>from Folder CT"]
    Name["📝 Enter Folder<br/>Name & Metadata"]
    Validate["✅ Validate<br/>Against Folder CT"]
    Save["💾 Save<br/>Folder Record"]
    Folder["📁 Folder Created"]
    
    User --> Click
    Click --> Form
    Form --> Fields
    Fields --> Name
    Name --> Validate
    Validate -->|Valid| Save
    Validate -->|Invalid| Fields
    Save --> Folder
    
    style User fill:#e1f5ff
    style Form fill:#fff9c4
    style Fields fill:#c8e6c9
    style Folder fill:#b3e5fc
```

---

## 🔐 Component Visibility Logic

### How Hidden & Visible Components Work

```mermaid
graph TD
    Comp["⚙️ Component<br/>Configuration"]
    Hidden{{"Hidden<br/>= ON?"}}
    TableView{{"Display in<br/>Table View?"}}
    ClearValue{{"Clear Value<br/>When Hidden?"}}
    
    Comp --> Hidden
    
    Hidden -->|YES| HideForm["❌ Hide in Form"]
    Hidden -->|YES| HideTable["❌ Hide in Table"]
    Hidden -->|NO| TableView
    
    TableView -->|YES| ShowBoth["✅ Show in Form<br/>✅ Show in Table"]
    TableView -->|NO| FormOnly["✅ Show in Form<br/>❌ Hide in Table"]
    
    Hidden --> ClearValue
    ClearValue -->|YES| ClearData["🗑️ Clear Data<br/>When Hidden"]
    ClearValue -->|NO| KeepData["💾 Keep Data<br/>Even When Hidden"]
    
    style Comp fill:#ffeb3b
    style HideForm fill:#ffccbc
    style HideTable fill:#ffccbc
    style ShowBoth fill:#c8e6c9
    style FormOnly fill:#fff9c4
```

---

## 📊 Folder Hierarchy Structure

### How Folder CT Enables Hierarchical Organization

```mermaid
graph TD
    Root["📁 Drive Root"]
    
    Root --> Org["🏢 Organization<br/>(L1)"]
    Root --> Dept["🏛️ Department<br/>(L1)"]
    
    Org --> Team["👥 Team<br/>(L2)"]
    Dept --> Project["📊 Project<br/>(L2)"]
    
    Team --> Subfolder["📂 Sub-Folder<br/>(L3)"]
    Project --> Task["📋 Task<br/>(L3)"]
    
    Subfolder -->|Has CT Metadata| Meta1["- Owner: John<br/>- Department: Finance<br/>- Status: Active"]
    Task -->|Has CT Metadata| Meta2["- Project: Q2 Budget<br/>- Deadline: 2026-06-30<br/>- Status: In Progress"]
    
    style Root fill:#ffeb3b
    style Org fill:#c8e6c9
    style Dept fill:#c8e6c9
    style Meta1 fill:#b3e5fc
    style Meta2 fill:#b3e5fc
```

---

## 🔍 Search Using Folder CT Metadata

### Finding Folders by Metadata Attributes

```mermaid
graph TD
    User["👤 User<br/>Search Folders"]
    SearchUI["🔍 Search Interface"]
    
    SearchUI --> Filter1["📌 Filter by<br/>Department"]
    SearchUI --> Filter2["📌 Filter by<br/>Status"]
    SearchUI --> Filter3["📌 Filter by<br/>Owner"]
    SearchUI --> Filter4["📌 Filter by<br/>Custom Field"]
    
    Filter1 --> Query["📊 Build Query<br/>Department = Finance"]
    Filter2 --> Query
    Filter3 --> Query
    Filter4 --> Query
    
    Query -->|Match Against<br/>Folder CT| Search["🔎 Search<br/>Engine"]
    Search -->|Find Matching<br/>Folders| Results["✅ Results<br/>Finance Dept Folders"]
    
    User --> SearchUI
    Results -->|Show| User
    
    style User fill:#e1f5ff
    style Results fill:#c8e6c9
    style Query fill:#fff9c4
```

---

## 📋 Folder CT Field Types

### Common Metadata Fields for Folders

```mermaid
graph TD
    Folder["📁 Folder Metadata<br/>Using Folder CT"]
    
    Folder --> Org["🏢 Organization Fields"]
    Org --> O1["Department Name"]
    Org --> O2["Team Name"]
    Org --> O3["Cost Center"]
    
    Folder --> Admin["⚙️ Admin Fields"]
    Admin --> A1["Folder Owner"]
    Admin --> A2["Creation Date"]
    Admin --> A3["Last Modified"]
    
    Folder --> Business["📊 Business Fields"]
    Business --> B1["Project Name"]
    Business --> B2["Budget Code"]
    Business --> B3["Client/Customer"]
    
    Folder --> Compliance["🔐 Compliance Fields"]
    Compliance --> C1["Classification<br/>(Public/Internal/Confidential)"]
    Compliance --> C2["Retention Period"]
    Compliance --> C3["Archive Status"]
    
    style Folder fill:#ffeb3b
    style Org fill:#c8e6c9
    style Admin fill:#c8e6c9
    style Business fill:#c8e6c9
    style Compliance fill:#fff9c4
```

---

## 🎯 Conditional Logic for Folders

### Show/Hide Fields Based on Context

```mermaid
graph TD
    Start["🚀 Folder Creation<br/>Starts"]
    DeptSelect{{"Select<br/>Department?"}}
    
    DeptSelect -->|Finance| FinanceFields["💰 Show Finance Fields<br/>- Budget Code<br/>- Cost Center<br/>- Approval Level"]
    DeptSelect -->|HR| HRFields["👥 Show HR Fields<br/>- Employee Type<br/>- Policy Category<br/>- Confidential Checkbox"]
    DeptSelect -->|Sales| SalesFields["📊 Show Sales Fields<br/>- Territory<br/>- Customer Segment<br/>- Opportunity ID"]
    
    FinanceFields -->|User fills| FormComplete["✅ Folder CT Form<br/>Complete"]
    HRFields -->|User fills| FormComplete
    SalesFields -->|User fills| FormComplete
    
    FormComplete --> Save["💾 Save Folder<br/>with Conditional<br/>Metadata"]
    
    style Start fill:#e1f5ff
    style DeptSelect fill:#ffeb3b
    style FinanceFields fill:#fff9c4
    style HRFields fill:#fff9c4
    style SalesFields fill:#fff9c4
    style Save fill:#c8e6c9
```

---

## 🔄 Permission Inheritance from Folder CT

### How Folder Metadata Enables Permission Management

```mermaid
graph TD
    FCT["📋 Folder CT<br/>with Team Field"]
    
    FCT -->|Folder Created| Folder["📁 Folder Instance<br/>Team = Finance"]
    
    Folder -->|Extract| TeamValue["👥 Team Value<br/>= Finance"]
    
    TeamValue -->|Auto-Assign<br/>Permissions| Group["👥 Finance Group"]
    
    Group -->|Grant| Perms["🔐 Permissions<br/>Collaborator Role"]
    
    Perms -->|Result| Access["✅ All Finance Team<br/>Members Can Access"]
    
    style FCT fill:#ffeb3b
    style Folder fill:#c8e6c9
    style TeamValue fill:#fff9c4
    style Access fill:#c8e6c9
```

---

## 📚 Folder CT vs File CT

### Key Differences

```mermaid
graph TB
    Comparison["📋 Content Type Comparison"]
    
    Comparison --> Scope["🎯 SCOPE"]
    Scope --> F1["📁 Folder CT"]
    Scope --> F2["📄 File CT"]
    
    F1 -->|Used for| FolderOnly["Folders Only<br/>in Repository"]
    F2 -->|Used for| FileMany["Files in:<br/>Repository<br/>Workspace<br/>Workflow"]
    
    Comparison --> Storage["💾 STORAGE"]
    F1S["Stores Folder<br/>Metadata Only"]
    F2S["Stores File<br/>Metadata +<br/>File Content"]
    F1 --> F1S
    F2 --> F2S
    
    Comparison --> Components["🔧 COMPONENTS"]
    F1C["All 33 Components<br/>No File Upload"]
    F2C["All 33 + File Upload<br/>Component"]
    F1 --> F1C
    F2 --> F2C
    
    Comparison --> Sharing["🤝 SHARING"]
    F1Share["Share Entire<br/>Folder to Users"]
    F2Share["Share Individual<br/>Files"]
    F1 --> F1Share
    F2 --> F2Share
    
    style Comparison fill:#ffeb3b
    style FolderOnly fill:#c8e6c9
    style FileMany fill:#b3e5fc
    style F1C fill:#fff9c4
    style F2C fill:#fff9c4
```

---

## ⚡ Validation Rules in Folder CT

### Component Validation Logic

```mermaid
graph TD
    Input["👤 User Input<br/>When Creating<br/>Folder"]
    Component["📋 Component<br/>with Validation"]
    
    Component --> Rules["✅ Validation Rules"]
    Rules --> R1["Required = ON?"]
    Rules --> R2["Pattern Matches?"]
    Rules --> R3["Min/Max?"]
    Rules --> R4["Custom Validation?"]
    
    R1 -->|Empty| Fail["❌ Error Message"]
    R1 -->|Filled| R2
    R2 -->|No Match| Fail
    R2 -->|Match| R3
    R3 -->|Out of Range| Fail
    R3 -->|In Range| R4
    R4 -->|Custom Error| Fail
    R4 -->|Valid| Pass["✅ Save Folder"]
    
    Input --> Component
    Fail --> Input
    Pass --> Save["💾 Folder Record<br/>Saved with<br/>Metadata"]
    
    style Input fill:#e1f5ff
    style Component fill:#fff9c4
    style Pass fill:#c8e6c9
    style Fail fill:#ffccbc
```

---

## 🎯 Decision Tree: Folder Organization Strategy

### Choosing How to Structure Folders with Metadata

```mermaid
graph TD
    Start["❓ How to Organize<br/>Folders?"]
    
    Org1{{"By<br/>Organization<br/>Structure?"}}
    Org2{{"By<br/>Time<br/>Period?"}}
    Org3{{"By<br/>Project?"}}
    
    Start --> Org1
    Org1 -->|Yes| Struct["🏢 Use Fields:<br/>- Department<br/>- Team<br/>- Cost Center"]
    Org1 -->|No| Org2
    
    Org2 -->|Yes| Time["📅 Use Fields:<br/>- Year<br/>- Quarter<br/>- Month"]
    Org2 -->|No| Org3
    
    Org3 -->|Yes| Project["📊 Use Fields:<br/>- Project Name<br/>- Client<br/>- Phase"]
    Org3 -->|No| Hybrid["🔀 Use Hybrid<br/>Combination"]
    
    Struct --> Result["✅ Folder Structure<br/>with CT Metadata"]
    Time --> Result
    Project --> Result
    Hybrid --> Result
    
    style Start fill:#ffeb3b
    style Result fill:#c8e6c9
```

---

## 📊 Best Practices

### Folder CT Design Guidelines

```mermaid
graph TD
    Design["🎨 Designing<br/>Folder CT"]
    
    Good["✅ GOOD PRACTICES"]
    Bad["❌ AVOID"]
    
    Design --> Good
    Design --> Bad
    
    Good --> G1["Required Field<br/>for Organization<br/>e.g., Department"]
    Good --> G2["Clear Metadata<br/>Names<br/>Avoid abbreviations"]
    Good --> G3["Logical Field<br/>Organization<br/>Related fields together"]
    Good --> G4["Use Dropdowns<br/>for Fixed Values<br/>e.g., Status"]
    Good --> G5["Hide Internal<br/>Fields<br/>Keep user form clean"]
    
    Bad --> B1["Too Many Required<br/>Fields<br/>Slow folder creation"]
    Bad --> B2["Ambiguous<br/>Metadata<br/>e.g., 'Type'"]
    Bad --> B3["Validation<br/>Too Strict<br/>Frustrate users"]
    Bad --> B4["Free Text<br/>for Everything<br/>Inconsistent data"]
    Bad --> B5["No Organization<br/>Strategy<br/>Hard to search"]
    
    style Design fill:#ffeb3b
    style Good fill:#c8e6c9
    style Bad fill:#ffccbc
```

---

## 📚 Related Guides

→ [Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Understand Folder CT basics

→ [Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step creation guide

→ [Task CT Diagrams](../Task%20CT/%F0%9F%97%BA%20Diagram.md) - Approval workflows

### Form Builder Button Actions
All available buttons in the Folder CT builder.

```mermaid
flowchart LR
  A[Form Builder] --> B[Create]
  A --> C[Cancel]
  A --> D[Preview]
  A --> E[Export]
  A --> F[Import]

  D --> D1[Folder Form Preview]
  D1 --> D2[Validate]
  D1 --> D3[Close Preview]

  E --> E1[Download JSON Schema]
  F --> F1[Upload JSON Schema]
  F1 --> F2[Load Components]
```

### List View Row Actions Map
Quick reference for Folder CT list actions.

```mermaid
flowchart TD
  A[Folder CT Row] --> B[Preview]
  A --> C[Edit]
  A --> D[Delete]
  A --> E[Clone]

  B --> B1["Show folder form<br/>as users see it"]
  C --> C1["Edit metadata fields<br/>and configuration"]
  D --> D1["Remove from system<br/>with confirmation"]
  E --> E1["Duplicate for<br/>similar use cases"]
```

## Comparison: File CT vs. Folder CT

Difference in scope and where each is used.

```mermaid
graph TD
  CT["Content Types"]
  
  CT --> File["File CT<br/>(Individual document metadata)"]
  CT --> Folder["Folder CT<br/>(Container metadata)"]
  
  File --> FU1["Repository Create Record"]
  File --> FU2["Workspace Create Record"]
  File --> FU3["Workflow Processing"]
  File --> FU4["RMS Integration"]
  
  Folder --> FDU1["Repository Folder Creation Only"]
  Folder --> FDU2["Folder Search & Discovery"]
  Folder --> FDU3["Lifecycle Policies"]
```

## Folder Organization Examples

### Multi-Department Folder Structure
How different departments might use different Folder CTs.

```mermaid
graph TD
  Root["Root Folder<br/>(no CT)"]
  
  Root --> HR["HR Folder CT<br/>Fields: Employee#, Manager, Team"]
  Root --> Finance["Finance Folder CT<br/>Fields: Budget, Cost Center, Owner"]
  Root --> IT["IT Folder CT<br/>Fields: Project, Tech Stack, Criticality"]
  
  HR --> EMP1["Employee 123 Folder"]
  HR --> EMP2["Employee 456 Folder"]
  
  Finance --> BUD1["Q1 Budget"]
  Finance --> BUD2["Q2 Budget"]
```

---

For detailed step-by-step folder configuration guides, see the **📘 Detailed Guide.md** file.
