---
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🗺 Diagrams"
description: Visual architecture, workflows, and Mongo Search integration diagrams for Quick Search
user-invocable: true
---

# 📊 Quick Search Architecture & Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Audience**: Technical users, architects, and reviewers  
**Goal**: Visualize page flow, architecture, and filter behavior quickly.
:::

## System Architecture

```mermaid
graph LR
    A["🖥️ User Browser<br/>(Angular 19.2.3)"] -->|HTTP Request| B["📡 Quick Search Service"]
    B -->|Filter Query| C["🔍 Mongo Search Engine<br/>(New Backend)"]
    C -->|Indexed Data| D["📚 Search Index<br/>(Full-Text + Metadata)"]
    B -->|Grid Data| E["📊 Results Display<br/>(Kendo Grid)"]
    
    B -->|Get Filters| F["🏷️ Content Type Groups<br/>(Dynamic Metadata)"]
    F -->|CT-Specific Fields| B
    
    style A fill:#e1f5ff
    style B fill:#fff3e0
    style C fill:#f3e5f5
    style D fill:#e8f5e9
    style E fill:#fce4ec
    style F fill:#fff9c4
```

---

## Page Layout Structure

```mermaid
graph TD
    A["🔍 Quick Search Page"]
    A --> B["🎨 Layout: Kendo Splitter<br/>(Horizontal Split)"]
    
    B --> C["📋 Left Pane (Filter Panel)"]
    B --> D["📊 Right Pane (Results Grid)"]
    
    C --> C1["🔹 Search Input<br/>Search across all content"]
    C --> C2["📌 Attributes Section<br/>Type | Content Type | File Type<br/>File Size | Creation Date"]
    C --> C3["📝 Metadata Section<br/>(Dynamic - Changes by CT)"]
    
    D --> D1["Toolbar<br/>Columns | Export | Refresh | Advanced Filter"]
    D --> D2["Grid Data<br/>Name | CT | Company | Created | Employee"]
    D --> D3["📄 Pagination<br/>First | Prev | Page# | Next | Last"]
    
    style C fill:#f0f4c3,color:#000
    style D fill:#c8e6c9,color:#000
    style C3 fill:#ffccbc,color:#000
    style D2 fill:#b3e5fc,color:#000
```

---

## Filter Panel Details (Left Pane)

```mermaid
graph TD
    A["📋 Filter Panel<br/>(Kendo Splitter Pane 1)"]
    
    A --> B["🔍 SEARCH Section<br/>Title: 'Search'<br/>Desc: 'Search across all document content and fields'"]
    B --> B1["Input: Single Text Box<br/>Placeholder: 'Search...'<br/>Type: Full-text search<br/>Trigger: On keystroke"]
    
    A --> C["🏷️ ATTRIBUTES Section<br/>(Always Visible)"]
    C --> C1["1️⃣ Type Filter<br/>Button component<br/>Status: Collapsible"]
    C --> C2["2️⃣ Content Type Filter<br/>Multi-select dropdown<br/>Shows all available CTs<br/>Displays counts per option"]
    C --> C3["3️⃣ File Type Filter<br/>Dropdown with file types"]
    C --> C4["4️⃣ File Size Filter<br/>Range or preset options"]
    C --> C5["5️⃣ Creation Date Filter<br/>Date picker / range selector"]
    
    A --> D["📝 METADATA Section<br/>(Dynamic - CT-Dependent)"]
    D --> D1["Visibility Logic:<br/>• No CT filter → Show all (9 fields)<br/>• CT filter applied → Show CT-specific<br/>• Some CTs → Hide section"]
    D --> D2["Example Metadata Fields:<br/>• Test Unique<br/>• Text Field<br/>• Employee Name<br/>• Reason<br/>• Company Name<br/>+ varies per CT"]
    
    style B fill:#e3f2fd
    style C fill:#f1f8e9
    style D fill:#ffe0b2
    style B1 fill:#81c784
    style D1 fill:#ff6e40
```

---

## Filter Popup (Content Type Example)

```mermaid
graph TD
    A["📌 Content Type Filter Popup"]
    
    A --> B["🔎 Search Box<br/>Placeholder: 'Search...'<br/>Filters option list"]
    
    A --> C["📋 Option List<br/>(Facet Editor)"]
    C --> C1["☐ Blank Web Upload<br/>30 items"]
    C --> C2["☐ InvoiceCT Ve2<br/>11 items"]
    C --> C3["☐ Verion49CT<br/>8 items"]
    C --> C4["☐ QA new Search CT<br/>6 items"]
    C --> C5["☐ [More options...]"]
    
    A --> D["🔘 Action Buttons"]
    D --> D1["✅ Apply Button<br/>(Primary - Blue)<br/>Applies filter to Mongo Search"]
    D --> D2["❌ Cancel Button<br/>(Secondary - Gray)<br/>Closes without applying"]
    
    style C1 fill:#c8e6c9
    style C2 fill:#ffccbc
    style D1 fill:#81c784,color:#fff
    style D2 fill:#bdbdbd,color:#fff
```

---

## Dynamic Metadata Behavior Flow

```mermaid
graph TD
    A["🎯 Content Type Selection"] -->|No Filter| B["📊 Metadata = 9 Fields"]
    A -->|Select CT| C{Which CT?}
    
    C -->|Blank Web Upload| D["📝 Metadata = 1 Field<br/>(Text Field only)"]
    C -->|InvoiceCT Ve2| E["⚠️ Metadata = 0 Fields<br/>(Section Hidden)"]
    C -->|Other CTs| F["📝 Metadata = Variable<br/>(CT-specific fields)"]
    
    B --> B1["Grid: 50 rows<br/>Multiple CTs shown"]
    D --> D1["Grid: 30 rows<br/>Only Blank Web Upload"]
    E --> E1["Grid: 11 rows<br/>Only InvoiceCT Ve2"]
    F --> F1["Grid: X rows<br/>Only selected CT"]
    
    style B fill:#c8e6c9,color:#000
    style E fill:#ffccbc,color:#000
    style D fill:#fff9c4,color:#000
    style B1 fill:#a5d6a7,color:#000
    style E1 fill:#ff8a65,color:#000
```

---

## Search Execution Flow (Mongo Search Integration)

```mermaid
sequenceDiagram
    participant User as 👤 User Browser
    participant UI as 🎨 Quick Search UI<br/>(Angular)
    participant Service as 📡 Backend Service
    participant Mogo as 🔍 Mongo Search Engine
    participant Index as 📚 Search Index
    
    User->>UI: Type search term "invoice"
    UI->>Service: POST /api/search<br/>{query: "invoice", filters: [...]}
    Service->>Mogo: Execute Mongo Search query
    Mogo->>Index: Query full-text index
    Index-->>Mogo: Return matching documents
    Mogo-->>Service: Return results + metadata facets
    Service-->>UI: Results {items: [...], facets: {...}}
    UI-->>User: Display 50 results + filter counts
    
    User->>UI: Click "InvoiceCT Ve2" checkbox
    UI->>Service: POST /api/search<br/>{query: "invoice",<br/>filter: {contentTypeGroupId: "uuid"}}
    Service->>Mogo: Execute filtered query
    Mogo-->>Service: Return 11 InvoiceCT Ve2 results
    Service-->>UI: Filtered results + updated metadata
    UI-->>User: Show 11 records + hidden metadata section
```

---

## Results Grid Structure

```mermaid
graph TD
    A["📊 Kendo Grid Component"]
    
    A --> B["🎯 Grid Features"]
    B --> B1["Multi-column display<br/>Sortable headers<br/>Filterable columns<br/>Drag to reorder"]
    
    A --> C["📋 Column Definition"]
    C --> C1["Column 1: Name<br/>(Record identifier)"]
    C --> C2["Column 2: Content Type<br/>(filtered by Attributes)"]
    C --> C3["Column 3: Company Name<br/>(CT-specific field)"]
    C --> C4["Column 4: Created At<br/>(Timestamp)"]
    C --> C5["Column 5: Employee Name<br/>(CT-specific field)"]
    C --> C6["Column 6: Text Field<br/>(CT metadata)"]
    C --> C7["+ System columns<br/>Started By | Version | Barcodes"]
    
    A --> D["🔄 Pagination Controls"]
    D --> D1["Buttons: First | Prev | 1 | 2 | 3 | Next | Last"]
    D --> D2["Result Counter: '1 - 50 of 67 items'"]
    D --> D3["Items per page: Default 10-50"]
    
    A --> E["⚙️ Toolbar Buttons"]
    E --> E1["⊞ Columns - Show/hide"]
    E --> E2["🔄 Refresh - Reload results"]
    E --> E3["⬇️ Export - Download Excel"]
    E --> E4["⚙️ Advanced Filter"]
    
    style C fill:#bbdefb
    style D fill:#fff9c4
    style E fill:#f0f4c3
```

---

## Filter Logic with Mongo Search Operators

```mermaid
graph TD
    A["🔍 Filter Logic"]
    
    A --> B["Single Content Type Selected"]
    B --> B1["contentTypeGroupId eq 019e8725...<br/>(Equals operator)"]
    
    A --> C["Multiple Content Types Selected"]
    C --> C1["(contentTypeGroupId eq UUID1)<br/>OR<br/>(contentTypeGroupId eq UUID2)"]
    
    A --> D["Combined Filters"]
    D --> D1["(contentTypeGroupId eq UUID1)<br/>AND<br/>(creationDate >= date)"]
    
    A --> E["URL Representation"]
    E --> E1["filter[logic]=and<br/>filter[filters][0][logic]=or<br/>filter[filters][0][filters][0][field]=contentTypeGroupId<br/>filter[filters][0][filters][0][operator]=eq<br/>filter[filters][0][filters][0][value]=UUID"]
    
    style B1 fill:#c8e6c9
    style C1 fill:#fff9c4
    style D1 fill:#ffe0b2
    style E1 fill:#e1f5fe,font-family:monospace
```

---

## Metadata Field Changes Comparison

```mermaid
graph LR
    A["No Filter<br/>(All CTs)"] -->|9 Fields| B["Test Unique<br/>Text Field<br/>Employee Name<br/>Reason<br/>Not Hidden...<br/>Text Field Name<br/>Text Area Desc<br/>Date Time<br/>Company Name"]
    
    C["Blank Web Upload<br/>(30 items)"] -->|1 Field| D["Text Field"]
    
    E["InvoiceCT Ve2<br/>(11 items)"] -->|0 Fields| F["⚠️ Metadata<br/>Section Hidden"]
    
    G["Verion49CT<br/>(8 items)"] -->|? Fields| H["CT-Specific<br/>(to explore)"]
    
    style B fill:#c8e6c9,color:#000
    style D fill:#fff9c4,color:#000
    style F fill:#ffccbc,color:#000
    style H fill:#e1f5fe,color:#000
```

---

## Advanced Filter Panel (Left Pane Open/Collapsed)

```mermaid
graph TD
    A["🎛️ Kendo Splitter<br/>Layout Control"]
    
    A --> B["State: EXPANDED"]
    B --> B1["Left Pane Width: 30-40%<br/>Filter Panel visible<br/>Right Pane: 60-70%"]
    B --> B2["Filters fully accessible<br/>All options visible"]
    
    A --> C["State: COLLAPSED"]
    C --> C1["Left Pane: Hidden (0% width)<br/>Filter panel slides out"]
    C --> C2["Right Pane: Expands to 100%<br/>Grid takes full width"]
    C --> C3["Button to re-expand filters"]
    
    style B1 fill:#a5d6a7,color:#000
    style B2 fill:#81c784,color:#fff
    style C1 fill:#ffb74d,color:#000
    style C2 fill:#ffa726,color:#000
```

---

## Content Type and Metadata Relationship

```mermaid
graph TD
    A["📚 Content Type System"]
    
    A --> B["Content Type Groups<br/>(Mongo Search Groups)"]
    B --> B1["Group: Blank Web Upload<br/>ID: abc123...<br/>Metadata: {Text Field}"]
    B --> B2["Group: InvoiceCT Ve2<br/>ID: 019e8725...<br/>Metadata: {} (empty)"]
    B --> B3["Group: QA new Search CT<br/>ID: def456...<br/>Metadata: {varies}"]
    
    A --> C["Metadata Configuration<br/>(Per Content Type)"]
    C --> C1["Blank Web Upload<br/>→ Text Field (visible in searches)"]
    C --> C2["InvoiceCT Ve2<br/>→ No searchable metadata<br/>(section hidden in UI)"]
    C --> C3["Custom CTs<br/>→ Admin-defined fields"]
    
    style B1 fill:#fff9c4
    style B2 fill:#ffccbc
    style C1 fill:#c8e6c9
    style C2 fill:#ffab91
```

---

## Full Search Journey (End-to-End)

```mermaid
graph TD
    A["🎯 User Goal: Find urgent invoices"] --> B["Step 1: Open Quick Search"]
    B --> C["📊 Page loads with filters"]
    
    C --> D["Step 2: Type in Search Box"]
    D --> D1["Search: 'urgent'<br/>🔍 Mongo Search indexes matching"]
    D --> D2["Grid shows 25 results with 'urgent'"]
    
    D2 --> E["Step 3: Filter by Content Type"]
    E --> E1["Click Content Type → InvoiceCT<br/>Filter Popup opens"]
    E --> E2["Select: InvoiceCT Ve2<br/>Badge shows: 11 matches"]
    E --> E3["Click Apply"]
    
    E3 --> F["🔄 Mongo Search Executes Filtered Query"]
    F --> F1["Query: 'urgent' AND contentTypeGroupId=019e8725...<br/>Backend processes filter"]
    F --> F1_A["Results: 11 urgent invoices"]
    
    F1_A --> G["📊 Grid Updates"]
    G --> G1["Display 11 invoices only<br/>Metadata section HIDES<br/>(InvoiceCT has no metadata)"]
    
    G1 --> H["Step 4: Sort & Export"]
    H --> H1["Sort by Created At<br/>Export to Excel<br/>✅ Task complete!"]
    
    style A fill:#e1f5fe
    style D1 fill:#c8e6c9
    style F fill:#f3e5f5
    style G1 fill:#ffccbc
    style H1 fill:#81c784,color:#fff
```

---

## Performance & Caching

```mermaid
graph TD
    A["⚡ Quick Search Performance"]
    
    A --> B["🔍 Mongo Search Optimizations"]
    B --> B1["Full-Text Index<br/>Pre-indexed content<br/>Fast retrieval"]
    B --> B2["Facet Caching<br/>Filter counts cached<br/>Quick updates"]
    B --> B3["Incremental Indexing<br/>New records indexed automatically"]
    
    A --> C["🎨 Frontend Caching"]
    C --> C1["Column Preferences<br/>Remembered per user"]
    C --> C2["Filter Selections<br/>Persisted in URL"]
    C --> C3["Search History<br/>Optional local storage"]
    
    A --> D["📊 Result Set Limits"]
    D --> D1["Default: 50 rows per page<br/>Can increase to 100"]
    D --> D2["Export: Limited to current page<br/>(not all matching records)"]
    D --> D3["API limit: Mongo Search default<br/>Usually 10,000 max results"]
    
    style B1 fill:#a5d6a7
    style B2 fill:#81c784
    style C1 fill:#fff9c4
    style D1 fill:#ffb74d
```

---

## Mobile/Responsive Behavior

```mermaid
graph TD
    A["📱 Responsive Design"]
    
    A --> B["Desktop (1200px+)"]
    B --> B1["Split pane layout<br/>Filter panel: 30%<br/>Grid: 70%<br/>Sidebar visible"]
    
    A --> C["Tablet (768px - 1199px)"]
    C --> C1["Adjustable split<br/>Filters can collapse<br/>Grid expandable<br/>Touch-friendly buttons"]
    
    A --> D["Mobile (<768px)"]
    D --> D1["Stacked layout<br/>Filters as slide-out panel<br/>Grid full-width<br/>Pagination simplified"]
    
    style B1 fill:#c8e6c9
    style C1 fill:#fff9c4
    style D1 fill:#ffccbc
```

---

## Data Flow from Mongo Search to UI

```mermaid
graph LR
    A["📚 Mongo Search<br/>Response"] -->|JSON| B["📊 Service Response<br/>{items: [...],<br/>facets: {CTs: [...]}}"]
    
    B -->|Kendo DataSource| C["🎨 Grid Binding"]
    
    B -->|Facet Data| D["🏷️ Filter Updates"]
    
    C -->|Visual Render| E["📋 Grid Display<br/>(50 rows visible)"]
    
    D -->|Visual Render| F["🎛️ Filter Counts<br/>(30, 11, 8, etc.)"]
    
    style A fill:#f3e5f5
    style B fill:#fff9c4
    style E fill:#c8e6c9
    style F fill:#ffe0b2
```

---

## Content Type Filter - Open/Close Animation

```mermaid
graph TD
    A["🔘 Content Type Button"] -->|Click| B["Animation Starts"]
    
    B --> C["Popup Opens<br/>Duration: 200ms<br/>Direction: Down<br/>Easing: Ease-out"]
    
    C --> D["Popup Content Renders<br/>Search box active<br/>All options visible<br/>Checkboxes ready"]
    
    D --> E["User Selects Options"]
    
    E --> F{User Action}
    F -->|Apply| G["Close & Apply"]
    F -->|Cancel| H["Close Without Change"]
    F -->|Escape Key| H
    
    G -->|URL Update| I["Filter Applied<br/>contentTypeGroupId=..."]
    H -->|No Change| J["Filter Unchanged"]
    
    style C fill:#e1f5fe
    style D fill:#c8e6c9
    style G fill:#81c784,color:#fff
    style H fill:#ffb74d,color:#fff
```

---

## Search Metadata Table

| Property | Value | Notes |
|----------|-------|-------|
| **Search Engine** | Mongo Search | Replaces Elasticsearch |
| **Indexing Type** | Full-text + Metadata | Real-time indexing |
| **Filter Logic** | AND/OR operators | Combinable filters |
| **Default Results** | 50 per page | Configurable |
| **Max Page Size** | 100-200 | Backend dependent |
| **Cached Facets** | 24 hours | Content type counts |
| **Export Format** | Excel (.xlsx) | Current page only |
| **Sort Support** | All columns | Ascending/Descending |
| **Mobile Optimized** | Yes | Responsive design |
| **Real-time Updates** | Yes | Sub-second response |

---

## References & Related Concepts

- **Mongo Search**: Modern search backend (replacing Elasticsearch)
- **Kendo Components**: Grid, splitter, textbox, dropdown used
- **Angular**: Frontend framework (v19.2.3)
- **Content Type Groups**: Organizational structure with metadata
- **Faceted Search**: Filter counts and dynamic options
- **Full-Text Indexing**: Search document content

---

**Last Updated**: June 2026 | **Version**: v7.50.0+ | **Search Backend**: Mongo Search
