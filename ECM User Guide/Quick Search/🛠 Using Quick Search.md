---
sidebar_label: "🛠 Using Guide"
sidebar_position: 2
name: "🛠 Using Guide"
description: Step-by-step guide for using Quick Search filters, finding records, and understanding dynamic metadata
user-invocable: true
---

# 📖 Using Quick Search

:::tip 📌 At a Glance
**Document Type**: Using Guide  
**Audience**: End users and support teams  
**Goal**: Complete common Quick Search tasks with step-by-step workflows.
:::

## Getting Started

### Step 1: Access Quick Search
1. Click **Quick Search** in the left sidebar
2. The search page loads with filter panel on the left and results grid on the right
3. Default view shows **last 50 records** across all content types

### Step 2: Understand the Layout

```
┌─────────────────────────────────────────────────────────────┐
│                      🔍 Quick Search                         │
├──────────────────┬──────────────────────────────────────────┤
│ 📋 FILTER PANEL  │                                          │
│                  │        📊 RESULTS GRID (50 rows)        │
│ • Search         │                                          │
│ • Attributes     │  Name │ CT │ Company │ Created │ ...    │
│ • Metadata       │  ────┼───┼─────────┼─────────┤         │
│   (dynamic)      │  Rec1│ CT1│ ABC Inc │ Jun 5  │ ...     │
│                  │  Rec2│ CT2│ XYZ Ltd │ Jun 4  │ ...     │
│                  │                                          │
└──────────────────┴──────────────────────────────────────────┘
```

---

## 🔍 Basic Search (Step-by-Step)

### **Workflow 1: Search by Name**

**Goal**: Find a record called "Invoice #001"

**Steps**:
1. Locate the **Search** box at the top of the filter panel
2. Click in the search field
3. Type: `Invoice #001`
4. Results update instantly showing matching records
5. Displays: "1 - 5 of 5 items" (or similar)
6. Click any result row to open the record

**Result**: ✅ Record appears in grid with highlighted match

**Tips**:
- Search is full-text (searches document content, not just names)
- No need to press Enter - results update as you type
- Case-insensitive (ABC = abc = Abc)

---

### **Workflow 2: Search by Content**

**Goal**: Find documents containing "purchase order"

**Steps**:
1. In the **Search** box, type: `purchase order`
2. System searches across:
   - Record names
   - Document content (full-text index)
   - Metadata fields
   - CT-specific text
3. Results show all matching documents
4. Grid displays where the term was found

**Result**: ✅ All documents with "purchase order" appear in results

**Performance**: ⚡ Usually < 1 second

---

## 🎯 Filtering by Content Type (Critical for Metadata)

### **Workflow 3: Filter by Single Content Type**

**Goal**: See only Invoice records (and observe metadata changes)

**Steps**:

1. **Locate Content Type Filter**
   - In the **Attributes** section, find **Content Type**
   - Click the **Content Type** button/dropdown

2. **Open Filter Popup**
   - A popup appears showing all available content types with counts
   - Example:
     ```
     ☐ Blank Web Upload (30)
     ☐ InvoiceCT Ve2 (11)
     ☐ Verion49CT (8)
     ☐ QA new Search CT (6)
     ... [more options]
     ```

3. **Select Content Type**
   - Click the checkbox for **InvoiceCT Ve2**
   - The checkbox gets checked ✓
   - Count badge shows: "11 matches"

4. **Apply Filter**
   - Click the blue **Apply** button
   - OR click the **X** to cancel

5. **Observe the Results**
   - Grid updates to show **only InvoiceCT Ve2** records (11 rows)
   - URL changes to include filter parameter: `contentTypeGroupId=019e8725-5e41-77a6-b169-e0f2b53b3f6a`
   - **Metadata section DISAPPEARS** (because InvoiceCT Ve2 has no metadata fields)

**Result**: ✅ Filtered grid + Dynamic metadata update

**Key Finding**:
```
🎯 METADATA CHANGES BY CONTENT TYPE

No Filter:           → 9 metadata fields visible
↓
Filter by InvoiceCT  → Metadata section hides (0 fields)
↓
Filter by BlankWeb   → Only 1 metadata field (Text Field)
```

---

### **Workflow 4: Filter by Multiple Content Types**

**Goal**: Find both Invoice and Verion records

**Steps**:

1. Click **Content Type** filter button
2. Select checkboxes:
   - ☑ InvoiceCT Ve2
   - ☑ Verion49CT
   - Leave others unchecked
3. Click **Apply**
4. Grid shows records from BOTH types (11 + 8 = 19 total)
5. Metadata section still hidden (because InvoiceCT Ve2 has no metadata)

**Result**: ✅ Combined results from multiple content types

---

## 📝 Using Metadata Filters

### **Workflow 5: Refine by Metadata (When Available)**

**Goal**: Find text field entries with value "urgent"

**Prerequisites**:
- Content Type must have metadata fields
- Metadata section must be visible (not hidden)

**Steps**:

1. **Ensure Metadata is Visible**
   - If you filtered by InvoiceCT Ve2, metadata is hidden - select a different CT like **Blank Web Upload**
   - Click **Apply** to see metadata fields

2. **Locate Metadata Section**
   - Below the Attributes section, find the **Metadata** section
   - It shows dynamic fields based on selected CT
   - Example for Blank Web Upload:
     ```
     📌 Metadata
     ├─ Text Field
     └─ (only 1 field for this CT)
     ```

3. **Click on Metadata Field**
   - Click on **Text Field** button/dropdown
   - Popup shows available values
   - Example:
     ```
     ☐ urgent (7)
     ☐ normal (15)
     ☐ low (8)
     ```

4. **Select Value**
   - Check: ☑ urgent
   - Click **Apply**

5. **Observe Results**
   - Grid now shows only Blank Web Upload records with "urgent" text field
   - Combined filters applied: Content Type + Metadata value

**Result**: ✅ Precisely filtered results

---

## 📅 Using Date Filters

### **Workflow 6: Filter by Creation Date**

**Goal**: Find all records created in June 2026

**Steps**:

1. Expand **Attributes** section (if collapsed)
2. Click **Creation Date** button
3. Popup appears with date options:
   ```
   ○ Last 7 days
   ○ Last 30 days
   ○ This month
   ○ Last month
   ○ Custom range
   ```
4. Select: **This month** (or custom if needed)
5. Click **Apply**
6. Grid filters to show only June records

**Result**: ✅ Date-filtered results

---

## 📊 Grid Navigation

### **Workflow 7: Navigate Results**

**Page Structure**:
- Results display **10 items per page** by default
- Pagination controls at bottom: `[First] [Prev] [1] [2] [3] ... [Next] [Last]`
- Shows: **"1 - 10 of 67 items"** (example)

**Steps**:

1. **Go to Page 2**
   - Click page number **2** at the bottom
   - Grid shows items 11-20

2. **Go to Last Page**
   - Click **[Last]** button
   - Automatically goes to final page with remaining items

3. **Change Items Per Page**
   - Look for items per page dropdown
   - Select: 25, 50, or 100 items
   - Page reloads with new view

**Result**: ✅ Navigate large result sets efficiently

---

### **Workflow 8: Sort Results**

**Goal**: Sort records by creation date (newest first)

**Steps**:

1. Locate column header: **Created At**
2. Click the header once
   - Arrow appears: ⬇ (descending)
   - Oldest records appear first

3. Click the header again
   - Arrow changes: ⬆ (ascending)
   - Newest records appear first

4. Click **"Name"** header to sort alphabetically

**Result**: ✅ Results sorted by any column

**Sortable Columns**:
- Name
- Content Type
- Company Name
- Created At
- Employee Name
- Text Field
- System columns (Created Time, Modified Time, etc.)

---

## 🎨 Column Management

### **Workflow 9: Show/Hide Columns**

**Goal**: Remove unnecessary columns and focus on important data

**Steps**:

1. Click **Columns** button in toolbar
   - A popup appears with list of all available columns
   - Example:
     ```
     ☑ Name
     ☑ Content Type
     ☑ Company Name
     ☑ Created At
     ☐ Employee Name
     ☑ Text Field
     ```

2. **Uncheck** columns you don't need
   - Unchecking hides the column
   - Checking shows it

3. **Click outside** popup or press **Done** (if available)
   - Grid updates immediately

4. **Column order persists** for future searches

**Result**: ✅ Customized view of results

**Pro Tip**: Save your column preference - it persists across sessions

---

## 📥 Export Results

### **Workflow 10: Export to Excel**

**Goal**: Download 50 search results for external analysis

**Steps**:

1. Set up your filters and search (all results ready)
2. Click **Export** button in toolbar (or similar)
3. System prepares Excel file with:
   - All visible columns
   - Current page's data (usually 50 items)
   - Column headers

4. File downloads automatically
   - Filename: `quick-search-results.xlsx` (or similar)
   - Open in Excel, Google Sheets, etc.

5. Analyze external data
   - Charts, pivot tables, filtering in Excel
   - Share with stakeholders

**Result**: ✅ Data exported for external use

**Note**: Export typically includes what's visible on current page (10-50 items), not all matching results

---

## 🔄 Combined Workflows

### **Workflow 11: Complex Multi-Filter Search**

**Goal**: Find urgent invoices from ABC Inc created in June 2026

**Steps**:

1. **Content Type**: InvoiceCT Ve2
   - Click Content Type → Check InvoiceCT Ve2 → Apply
   - Grid updates: 11 invoices
   - Metadata section hides (no metadata for this CT)

2. **Company Filter** (metadata alternative)
   - If metadata existed, use Company Name field
   - OR use search box to find "ABC Inc"

3. **Date Filter**: June 2026
   - Click Creation Date → Select "This month" → Apply
   - Grid narrows to June invoices only

4. **Final Result**
   - All 3 filters combined
   - Shows only urgent invoices from ABC Inc in June
   - Exactly what you need

**Result**: ✅ Precisely filtered, multi-criteria results

---

## 📝 Understanding Filter Behavior

### **How Metadata Changes**

| Scenario | Metadata Visible? | Fields Shown | Reason |
|----------|------------------|--------------|--------|
| No Content Type selected | ✅ YES | 9 fields | Default metadata (all CTs) |
| InvoiceCT Ve2 selected | ❌ NO | None | This CT has no metadata |
| Blank Web Upload selected | ✅ YES | 1 field | CT-specific metadata |
| Multiple CTs selected | Depends | Varies | Intersection of metadata |

**Key Rule**:
```
Metadata adapts to Content Type selection
↓
Different CTs show different metadata fields
↓
Some CTs hide metadata section entirely
```

---

## 🛠️ Toolbar Buttons Reference

| Button | Icon | Function | Keyboard |
|--------|------|----------|----------|
| **Collapse Filters** | ← | Hide left filter panel | - |
| **Expand Preview** | → | Expand right preview pane | - |
| **Columns** | ⊞ | Show/hide columns | - |
| **Export** | ⬇️ | Download as Excel | - |
| **Refresh** | 🔄 | Reload results | F5 |
| **Advanced Filter** | ⚙️ | Open advanced search | - |

---

## ⚠️ Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Search results are slow** | Try narrowing with filters, reduce search term length |
| **Metadata disappeared** | This is normal - the CT you selected has no metadata fields |
| **Can't find my record** | Check spelling, try partial search, verify Content Type |
| **Pagination stuck** | Refresh page (F5), clear filters and try again |
| **Column widths are wrong** | Columns auto-adjust to content - resize manually if needed |
| **Export button missing** | May only be available for certain content types |

---

## 📱 Quick Tips & Tricks

:::tip **Tip 1: Bookmark Searches**
Frequent searches are saved in URL. Bookmark them:
```
https://csp.ecm.efileecm.local/search/quick-search?filter[filters][0][value]=019e8725-5e41-77a6-b169-e0f2b53b3f6a
```
:::

:::tip **Tip 2: Search Operators (if supported)**
Try quotes for exact phrases:
- `"exact phrase"` - finds exact match
- `word1 AND word2` - both terms required
- `word1 OR word2` - either term acceptable
:::

:::tip **Tip 3: Filter First, Search Second**
Narrow down by Content Type first, then search within results. This is faster than searching everything.
:::

:::tip **Tip 4: Monitor Result Counts**
Each filter option shows match count. Use this to understand your data:
- Blank Web Upload: 30 records
- InvoiceCT: 11 records
- Others: varies
:::

:::warning **Note: Real-Time Updates**
Filters apply immediately - no "Apply" button in most cases. URLs update with filter parameters as you change selections.
:::

---

## 🔗 Related Guides

- [📖 Knowledge Overview](./%F0%9F%A7%A0%20Knowledge%20Overview.md) - Conceptual understanding
- [📊 Diagrams & Architecture](./%F0%9F%97%BA%20Diagrams.md) - System flows and architecture
- [🗂️ Advanced Search](../Advanced%20Search/%F0%9F%A7%A0%20Knowledge%20Overview.md) - Complex searches
- [📁 Repository Search](../Repository/%F0%9F%A7%A0%20Knowledge%20Overview.md) - File-focused search

---

**Last Updated**: June 2026 | **Version**: v7.50.0+ | **Search Engine**: Mongo Search
