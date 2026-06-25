---
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🗺 Diagrams"
description: Visual workflows, architecture diagrams, and system integration for File CT
user-invocable: true
---

# 📊 File Content Types - Diagrams


:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


This page contains comprehensive architecture diagrams, workflow flows, and visual references to help you understand how File Content Types work across the ECM system.

:::info Key Insight
File CT is the **metadata schema** that defines what fields appear when users create file records in Repository, Workspace, and Workflows.
:::

---

## 🏗️ Architecture & System Integration

### File CT Ecosystem Map

```mermaid
graph TB
    FCT["📋 File CT<br/>Metadata Schema"]
    
    FCT -->|Used By| Repo["📁 Repository<br/>Create File Records"]
    FCT -->|Used By| WS["🏢 Workspace<br/>Create File Records"]
    FCT -->|Used By| WF["⚙️ Workflow<br/>File Processing"]
    
    Repo -->|Data Export| TG["📄 Template Generator<br/>Document Creation"]
    Repo -->|Data Export| RMS["🔗 RMS Integration<br/>Pickup/Delivery"]
    
    WF -->|Decision Data| DMN["🤔 DMN Model<br/>Folder Path Decisions"]
    WF -->|Store Metadata| Repo
    WF -->|Store Metadata| WS
    
    DMN -->|Generate Paths| Repo
    
    style FCT fill:#ffeb3b
    style Repo fill:#c8e6c9
    style WS fill:#c8e6c9
    style WF fill:#c8e6c9
    style TG fill:#b3e5fc
    style RMS fill:#b3e5fc
    style DMN fill:#b3e5fc
```

---

## 🎯 File CT Creation Lifecycle

### Configuration to Deployment

```mermaid
graph TD
    Start["🚀 Start<br/>Create New File CT"]
    Name["📝 Enter Name<br/>& Description"]
    Builder["🎨 Open Form.io<br/>Builder"]
    Add["➕ Add Components<br/>Drag & Drop"]
    Config["⚙️ Configure<br/>Each Component"]
    Preview["👁️ Preview<br/>Form Layout"]
    Review["✅ Review &<br/>Validate"]
    Save["💾 Create/Save<br/>File CT"]
    Deploy["🚀 Available in<br/>Repository/Workspace/Workflow"]
    
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

## 🔗 File CT and Workflows

### Auto-Created Workflows per File CT

```mermaid
graph TD
    FCT["📋 File CT"]

    FCT --> C["🆕 Workflow: Create a record of this CT"]
    FCT --> E["✏️ Workflow: Edit a record"]
    FCT --> D["🗑️ Workflow: Delete a record"]

    C --> R1["Create record runtime"]
    E --> R2["Edit record runtime"]
    D --> R3["Delete record runtime"]

    style FCT fill:#ffeb3b
    style C fill:#c8e6c9
    style E fill:#c8e6c9
    style D fill:#c8e6c9
```

### CT Change Synchronization Rule

```mermaid
flowchart LR
    A["File CT Updated\nfields/schema/validation"] --> B{"Update linked\nworkflows?"}
    B -->|Yes| C["Sync Create + Edit + Delete workflows"]
    C --> D["✅ Workflows stay aligned\nwith CT"]
    B -->|No| E["❌ Runtime mismatch\nmissing fields/validation issues"]

    style A fill:#fff9c4
    style C fill:#c8e6c9
    style D fill:#c8e6c9
    style E fill:#ffccbc
```

:::warning Synchronization Required
When File CT changes, update the 3 linked workflows (Create/Edit/Delete) to keep runtime forms and validation aligned with the latest CT definition.
:::

---

## 📋 Component Organization

### All 33+ Components Available in File CT

```mermaid
graph TD
    All["📊 File CT Components<br/>33 Form.io + 1 Contellect"]
    
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
    
    All --> Custom["🎯 Contellect: 1"]
    Custom --> C1["File Upload<br/>Component"]
    
    style All fill:#ffeb3b
    style Basic fill:#c8e6c9
    style Advanced fill:#c8e6c9
    style Layout fill:#c8e6c9
    style Data fill:#c8e6c9
    style Custom fill:#ffccbc
```

---

## ⚙️ Configuration Workflow

### Building a File CT Step-by-Step

```mermaid
sequenceDiagram
    actor User
    participant ECM as ECM UI
    participant Builder as Form.io Builder
    participant Preview as Preview Modal
    participant Save as System

    User->>ECM: Go to Configuration
    User->>ECM: Content Type → Files
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
    Save->>ECM: File CT saved
    ECM->>User: ✅ Available in Repository
```

---

## 🔄 Data Flow: File Record Creation

### User Creates File Record in Repository

```mermaid
graph TD
    User["👤 User<br/>Repository"]
    Click["Click<br/>Create File"]
    Form["📋 Form Appears<br/>Based on File CT"]
    Fields["📝 All Fields<br/>from File CT"]
    Upload["📤 Add File<br/>& Metadata"]
    Validate["✅ Validate<br/>Against File CT"]
    Save["💾 Save<br/>File Record"]
    Record["📄 File Record<br/>Created"]
    
    User --> Click
    Click --> Form
    Form --> Fields
    Fields --> Upload
    Upload --> Validate
    Validate -->|Valid| Save
    Validate -->|Invalid| Fields
    Save --> Record
    
    style User fill:#e1f5ff
    style Form fill:#fff9c4
    style Fields fill:#c8e6c9
    style Record fill:#b3e5fc
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

## 📊 File CT in Different Workflows

### File CT Usage in Repository vs Workspace

```mermaid
graph TB
    FCT["📋 File CT<br/>One Schema"]
    
    FCT -->|Used in| Repo["📁 Repository"]
    FCT -->|Used in| WS["🏢 Workspace"]
    
    Repo -->|Create Record| RepoForm["📋 Repository<br/>File Form"]
    RepoForm -->|User Fills| RepoData["📝 Repository<br/>File Data"]
    RepoData -->|Stored in| RepoDB["💾 Repository<br/>Storage"]
    
    WS -->|Create Record| WSForm["📋 Workspace<br/>File Form"]
    WSForm -->|User Fills| WSData["📝 Workspace<br/>File Data"]
    WSData -->|Auto-Syncs| SyncFolder["📂 Repository Folder<br/>(Named after CT)"]
    SyncFolder -->|Record Stored| RepoDB
    
    style FCT fill:#ffeb3b
    style Repo fill:#c8e6c9
    style WS fill:#c8e6c9
    style RepoData fill:#b3e5fc
    style WSData fill:#b3e5fc
    style SyncFolder fill:#ffccbc
```

### Workspace Record Creation and Repository Sync

```mermaid
sequenceDiagram
    actor User
    participant WS as Workspace
    participant DMN as DMN Config
    participant Repo as Repository

    User->>WS: Create Record (File CT)
    WS->>DMN: Check record naming & folder path rules
    DMN-->>WS: Return naming convention
    
    alt Folder exists (CT name match)
        WS->>Repo: Put record in existing folder
    else Folder does not exist
        WS->>Repo: Auto-create folder (CT name)
        WS->>Repo: Put record in new folder
    end
    
    alt Same record name exists
        Repo-->>WS: ❌ Reject - duplicate name not allowed
    else Name unique
        Repo->>Repo: ✅ Save record
        Repo-->>WS: ✅ Record created & synced
    end

    Note over WS,Repo: Record in Workspace = Record in Repository
```

---

## 🔄 Component Configuration Tabs

### Five Configuration Areas for Each Component

```mermaid
graph TB
    Comp["Component Selected"]
    
    Comp --> Display["📺 Display Tab<br/>Label, Placeholder<br/>Tooltip, Size"]
    Comp --> Data["📋 Data Tab<br/>Key Name, Default Value<br/>Table View"]
    Comp --> Valid["✅ Validation Tab<br/>Required, Pattern<br/>Min/Max Length"]
    Comp --> Logic["⚙️ Logic Tab<br/>Conditional Display<br/>Calculated Values"]
    Comp --> Access["🔐 Access Tab<br/>Permissions, Read-Only"]
    
    Display --> Result["✅ Component Ready<br/>for Form"]
    Data --> Result
    Valid --> Result
    Logic --> Result
    Access --> Result
    
    style Comp fill:#ffeb3b
    style Display fill:#b3e5fc
    style Data fill:#b3e5fc
    style Valid fill:#b3e5fc
    style Logic fill:#b3e5fc
    style Access fill:#b3e5fc
    style Result fill:#c8e6c9
```

---

## 📋 Form Builder UI Layout

### File CT Builder Interface

```mermaid
graph TD
    Builder["🎨 Form.io Builder"]
    
    Builder --> Tabs["📑 Main Tabs"]
    Tabs --> T1["Design Tab"]
    Tabs --> T2["Data Tab"]
    Tabs --> T3["Display Tab"]
    
    Builder --> Sidebar["📂 Left Sidebar"]
    Sidebar --> S1["Component Palette"]
    Sidebar --> S2["Available Components"]
    
    Builder --> Canvas["🖼️ Canvas<br/>Middle Area"]
    Canvas --> C1["Drag Components"]
    Canvas --> C2["Drop & Configure"]
    
    Builder --> Actions["🎯 Right Panel"]
    Actions --> A1["Properties"]
    Actions --> A2["Component Settings"]
    
    Builder --> Buttons["🔘 Bottom Buttons"]
    Buttons --> B1["Preview"]
    Buttons --> B2["Save/Create"]
    Buttons --> B3["Cancel"]
    
    style Builder fill:#ffeb3b
    style Tabs fill:#fff9c4
    style Sidebar fill:#b3e5fc
    style Canvas fill:#c8e6c9
    style Actions fill:#b3e5fc
```

---

## 📤 File CT Export/Import

### Saving & Loading File CT Schemas

```mermaid
graph TB
    FCT["📋 Existing<br/>File CT"]
    
    FCT -->|Export| JSON["📄 JSON Schema<br/>Format"]
    JSON -->|Download| File["💾 File CT Name.json<br/>Local Computer"]
    
    File -->|Load| Import["📤 Import JSON"]
    Import -->|Parse| Load["📋 Load Components<br/>& Settings"]
    Load -->|Create New| NewCT["📋 New File CT<br/>From Template"]
    
    File -->|Share| Other["🔁 Share Schema<br/>With Team"]
    Other -->|Import| NewCT
    
    style FCT fill:#ffeb3b
    style JSON fill:#fff9c4
    style File fill:#b3e5fc
    style NewCT fill:#c8e6c9
```

---

## ⚡ Validation Rules in File CT

### Component Validation Logic

```mermaid
graph TD
    Input["👤 User Input"]
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
    R4 -->|Valid| Pass["✅ Save Value"]
    
    Input --> Component
    Fail --> Input
    Pass --> Save["💾 File Record<br/>Saved"]
    
    style Input fill:#e1f5ff
    style Component fill:#fff9c4
    style Pass fill:#c8e6c9
    style Fail fill:#ffccbc
```

---

## 🎯 Decision Tree: Which Components to Use

### Choosing the Right Component Type

```mermaid
graph TD
    Start["❓ What Data<br/>Need to Collect?"]
    
    Text{"Text<br/>Data?"}
    Numbers{"Numbers<br/>Only?"}
    Date{"Date/<br/>Time?"}
    File{"File<br/>Upload?"}
    Choice{"Single<br/>Choice?"}
    Multi{"Multiple<br/>Choices?"}
    
    Start --> Text
    Text -->|Yes| Numbers
    Text -->|No| Date
    
    Numbers -->|Yes| NumComp["🔢 Number"]
    Numbers -->|No| TextComp["🔤 Text Field"]
    
    Date -->|Yes| DateComp["📅 Date/Time"]
    Date -->|No| File
    
    File -->|Yes| FileComp["📤 File Upload"]
    File -->|No| Choice
    
    Choice -->|Single| Single["🔘 Radio or<br/>Select"]
    Choice -->|Multi| Multi
    Multi -->|Yes| MultiComp["☑️ Checkboxes or<br/>Multi-Select"]
    Multi -->|No| Other["Other"]
    
    style Start fill:#ffeb3b
    style NumComp fill:#c8e6c9
    style TextComp fill:#c8e6c9
    style DateComp fill:#c8e6c9
    style FileComp fill:#c8e6c9
    style Single fill:#c8e6c9
    style MultiComp fill:#c8e6c9
```

---

## 📚 Best Practices

### File CT Design Guidelines

```mermaid
graph TD
    Design["🎨 Designing<br/>File CT"]
    
    Good["✅ GOOD PRACTICES"]
    Bad["❌ AVOID"]
    
    Design --> Good
    Design --> Bad
    
    Good --> G1["Meaningful Field Names<br/>ProjectID not P_ID"]
    Good --> G2["Clear Validation Rules<br/>Prevent Bad Data"]
    Good --> G3["Logical Field Order<br/>Related Fields Together"]
    Good --> G4["Use Conditional Logic<br/>Show Only Needed Fields"]
    Good --> G5["Add Helpful Tooltips<br/>Guide Users"]
    Good --> G6["Keep Simple<br/>< 15 Fields for Most CTs"]
    
    Bad --> B1["Ambiguous Field Names<br/>Data, Doc, File"]
    Bad --> B2["No Validation<br/>Accept Any Input"]
    Bad --> B3["Too Many Fields<br/>Overwhelming Forms"]
    Bad --> B4["Unnecessary Required Fields<br/>Frustrate Users"]
    Bad --> B5["Hidden Required Fields<br/>Confuse Logic"]
    
    style Design fill:#ffeb3b
    style Good fill:#c8e6c9
    style Bad fill:#ffccbc
```

---

## 🔗 Integration Points

### Where File CT Connects to Other ECM Features

```mermaid
graph TB
    FCT["📋 File CT"]
    
    FCT --> R1["Repository<br/>Create/Update Records"]
    FCT --> R2["Workspace<br/>Create/Update Records"]
    FCT --> R3["Workflow<br/>Process Files"]
    FCT --> R4["Template Generator<br/>Map to Template"]
    FCT --> R5["DMN<br/>Decision Input"]
    FCT --> R6["RMS<br/>Export Metadata"]
    
    R1 -->|User fills| Form["📋 Form UI"]
    Form -->|Data stored| DB["💾 Database"]
    
    R3 -->|Workflow task| Task["📝 Task Form"]
    Task -->|Process| Logic["⚙️ Business Logic"]
    
    R4 -->|Field mapping| Doc["📄 Generated Doc"]
    R5 -->|Data input| Decision["🤔 Rule Decision"]
    R6 -->|Field export| External["🔗 External System"]
    
    style FCT fill:#ffeb3b
    style Form fill:#c8e6c9
    style Task fill:#c8e6c9
    style Doc fill:#b3e5fc
    style Decision fill:#b3e5fc
    style External fill:#b3e5fc
```

---

## 📚 Related Guides

→ [Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Understand File CT basics

→ [Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step creation guide

→ [Repository Diagrams](../../Repository/%F0%9F%97%BA%20Diagrams.md) - File storage workflows
