---
id: advanced-search-using-guide
title: "🛠 Using Advanced Search"
sidebar_label: "🛠 Using Advanced Search"
sidebar_position: 2
name: "🛠 Using Guide"
slug: /advanced-search/using-guide
tags: [how-to, advanced-search, workflows, tutorials]
---

# Using Advanced Search

:::tip 📌 At a Glance
**Document Type**: Using Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


Complete workflows and step-by-step guides for mastering Advanced Search in Contellect ECM.

## Workflow 1: Basic Two-Condition Filter (AND)

**Goal**: Find all invoices from a specific vendor created in a specific month

**Steps**:

1. **Navigate to Advanced Search**
   - Click "Advanced Search" in left sidebar
   - You'll see empty filter area with "Search" input and "Add Additional Criteria" section

2. **Select Content Type (Optional)**
   - Click "Content Types" section
   - This restricts search to specific Content Types only
   - Skip if you want to search all types

3. **Add First Filter Condition**
   - Click "Add Filter" button
   - A filter row appears with three dropdowns: [Field] [Operator] [Value]
   - Click first dropdown to select field
   - Type or scroll to find: "Vendor Name [Invoice CT]"
   - Select operator: "Is equal to"
   - Enter value: "Acme Corporation"

4. **Add Second Filter Condition**
   - Click "Add Filter" button again
   - For new row, select field: "Creation Date [System]"
   - Select operator: "Is equal to" (or "Starts with" for month-based search)
   - Enter value: "2026-05" (May 2026)

5. **Verify AND Logic**
   - Look at toolbar between filter rows
   - Confirm "AND" button is selected/highlighted (not "OR")
   - If needed, click "AND" button to switch from OR

6. **Execute Search**
   - Click "Search" button (blue button at top)
   - System queries Mongo Search backend
   - Results appear in right panel showing matching invoices

7. **Review Results**
   - See invoice records listed in grid
   - Click any record to open details
   - Use pagination (1, 2, 3... at bottom) to navigate pages

:::success Expected Result
Results show only invoices from "Acme Corporation" created in May 2026. Any invoice that doesn't match BOTH conditions is excluded.
:::

---

## Workflow 2: Multiple Conditions with OR

**Goal**: Find documents that have been flagged for review OR are waiting for approval

**Steps**:

1. **Navigate to Advanced Search**
   - Open Advanced Search page

2. **Add First Filter**
   - Click "Add Filter"
   - Field: "Status [Document CT]"
   - Operator: "Is equal to"
   - Value: "Flagged for Review"

3. **Change to OR Logic**
   - Click "OR" button in toolbar (next to AND button)
   - This changes from AND to OR logic

4. **Add Second Filter**
   - Click "Add Filter"
   - Field: "Status [Document CT]"
   - Operator: "Is equal to"
   - Value: "Waiting for Approval"

5. **Execute Search**
   - Click "Search"
   - Mongo Search returns all documents with either status

:::tip OR Logic
OR logic WIDENS your results. You get records matching Condition A OR Condition B (or both). Useful when looking for alternative states or values.
:::

---

## Workflow 3: Complex Grouped Conditions

**Goal**: Find high-priority invoices from approved vendors, OR all invoices pending approval regardless of vendor

**Structure**:
```
(Priority = "High" AND Vendor Status = "Approved")
OR
(Invoice Status = "Pending Approval")
```

**Steps**:

1. **Create First Group**
   - Click "Add Filter" → Select "Priority" field → "Is equal to" → "High"
   - Click "Add Filter" → Select "Vendor Status" field → "Is equal to" → "Approved"
   - Verify AND button selected between them

2. **Create Second Group**
   - Click "Add Group" button
   - A new filter group appears below with its own AND/OR buttons
   - In new group, click "Add Filter"
   - Select "Invoice Status" → "Is equal to" → "Pending Approval"

3. **Set Group Relationship**
   - Look at the toolbar BETWEEN the two groups
   - Click "OR" button (to set OR relationship between groups)
   - This means: Group1 OR Group2

4. **Execute Search**
   - Click "Search"
   - Results include both:
     - High-priority invoices from approved vendors
     - ANY pending approval invoices (regardless of priority/vendor)

:::warning Group Precedence
Groups allow you to control the order of operations:
- (A AND B) OR C is different from A AND (B OR C)
- Always review your group structure before executing search
:::

---

## Workflow 4: Text-Based Filtering

**Goal**: Find all documents that contain specific keywords in file name OR description

**Steps**:

1. **Add First Filter (Keyword in Name)**
   - Click "Add Filter"
   - Field: "File Name [System]"
   - Operator: "Contains"
   - Value: "Compliance"

2. **Add Second Filter (Keyword in Description)**
   - Click "Add Filter" (or "Add Group" for clarity)
   - Field: "Description [Document CT]"
   - Operator: "Contains"
   - Value: "Audit"

3. **Choose OR Logic**
   - Click "OR" button to find documents with EITHER keyword

4. **Execute Search**
   - Click "Search"
   - Results include all documents matching either condition

:::tip Text Operators
- **Contains**: Substring anywhere in field (most flexible)
- **Starts with**: Only at beginning
- **Ends with**: Only at end (useful for file extensions: ".pdf")
:::

---

## Workflow 5: Filtering with Null/Empty Values

**Goal**: Find all documents where approval date is still empty (not yet approved)

**Steps**:

1. **Add Filter**
   - Click "Add Filter"
   - Field: "Approval Date [Document CT]"
   - Operator: "Is null" or "Is empty"
   - No value needed (these operators don't require a value)

2. **Execute Search**
   - Click "Search"
   - Results show all documents without approval dates

:::info Null vs Empty
- **Is null**: Field has no value (database NULL)
- **Is empty**: Field is empty string or whitespace
- **Is not null**: Field has any value
- **Is not empty**: Field has non-empty content

Use "Is not null" to find documents WHERE a field has been filled in.
:::

---

## Workflow 6: Negation Filters (Finding What You DON'T Want)

**Goal**: Find all active invoices that are NOT from blocked vendors

**Steps**:

1. **Add First Filter (Positive Condition)**
   - Click "Add Filter"
   - Field: "Status [Invoice CT]"
   - Operator: "Is equal to"
   - Value: "Active"
   - Toolbar: "AND"

2. **Add Second Filter (Negative Condition)**
   - Click "Add Filter"
   - Field: "Vendor Status [Vendor CT]"
   - Operator: "Is not equal to"
   - Value: "Blocked"

3. **Execute Search**
   - Click "Search"
   - Results: Active invoices from any vendor EXCEPT blocked vendors

:::success Use Case
Negation filters are powerful for exclusion: "Show me everything EXCEPT archived records", "All documents except those from Department X", etc.
:::

---

## Workflow 7: Saving and Reusing Search Expressions

**Goal**: Save a complex search for regular use (e.g., daily reporting)

**Steps**:

1. **Build Your Search Expression**
   - Create all filters and groups as needed
   - Test by clicking "Search" to verify results
   - Adjust if needed

2. **Save the Search**
   - When satisfied, click "Save Search" button (blue button)
   - A popup appears with form fields:
     - **Search Name**: "High Priority Unpaid Invoices" (descriptive name)
     - **Description**: "All unpaid invoices marked as high priority for daily review" (optional)

3. **Complete Save**
   - Click "Save" in popup
   - System confirms: "Search saved successfully"
   - Your search is now stored in Mongo Search backend

4. **Access Saved Search Later**
   - Click "My Search" button/link
   - See grid of all your saved searches
   - Click any saved search to LOAD its expression
   - Modify if needed or click "Search" to execute

5. **Manage Saved Searches**
   - From "My Search" page:
     - Edit: Click search name to reload and modify
     - Delete: Click delete action (if available)
     - Duplicate: Load then save as new with different name

:::tip Naming Convention
Use clear, descriptive names like:
- ✅ "Invoices > $50K Unpaid from Top 10 Vendors"
- ✅ "Active Contracts Expiring Next 90 Days"
- ❌ "Search 1" (not helpful)

---

## Workflow 7A: Save Search (Personal Saved Expression)

**Goal**: Save your current filter expression as a personal saved search for quick access later

**When to Use**: You have a search you run frequently (daily, weekly)

**Steps**:

1. **Build and Test Your Filter**
   - Create all filters with AND/OR/Groups
   - Click "Search" button to verify results are correct
   - Adjust filters if needed until satisfied

2. **Open Save Menu**
   - Click "Save Search " button (large blue button on top right)
   - A dropdown menu appears with 2 options:
     - "Save Search"
     - "Save Template"

3. **Select "Save Search"**
   - Click "Save Search" option (first option)
   - A dialog opens titled **"Save Search"**

4. **Fill Dialog Fields**
   - **Name Your Search** (required field):
     - Enter descriptive name
     - Examples: "High-Value Unpaid Invoices", "Q3 2026 Contracts", "Monthly Audit Records"
   - **Description Search** (optional):
     - Add context about what this search finds
     - Example: "All invoices from top 10 vendors with outstanding balances > $50K"

5. **Complete Save**
   - Click "Save" button in dialog
   - System processes and saves
   - Dialog closes
   - Confirmation message shows: "Search saved successfully"

6. **Access Your Saved Search**
   - Click "My Search" button/tab
   - You'll see your saved search in a grid with columns:
     - Search Name
     - Description
     - Created At
     - Actions
   - Your saved search appears at top of grid

7. **Reuse Your Saved Search**
   - Go to "My Search" tab anytime
   - Click your saved search name to load it
   - The filter expression appears in Advanced Search filter builder
   - Modify if needed or click "Search" to execute immediately

:::success Personal Organization
Each user has their own "My Search" space. Your saved searches are private to your account only. Save searches you use regularly to save time building expressions.
:::

---

## Workflow 7B: Save Template (Team-Reusable Template)

**Goal**: Save your filter expression as a reusable template for your team

**When to Use**: You want other team members to use the same search criteria

**Difference from "Save Search"**: Templates are shared (organization-level), saved searches are personal

**Steps**:

1. **Build and Test Your Filter**
   - Create filters representing common team search need
   - Test by clicking "Search" to verify results
   - Make sure the expression is generically useful (not specific to you)

2. **Open Save Menu**
   - Click "Save Search " button (blue button)
   - Dropdown menu appears with:
     - "Save Search"
     - "Save Template"

3. **Select "Save Template"**
   - Click "Save Template" option (second option)
   - A dialog opens titled **"Save as a Template"**

4. **Fill Template Dialog Fields**
   - **Name Your Template** (required):
     - Name should describe the template purpose
     - Examples: "All Unpaid Invoices Above Threshold", "Contracts Expiring Q4", "Documents Pending Review"
   - **Template Description** (optional):
     - Explain what this template is used for
     - Who should use it
     - Example: "This template finds all vendor invoices with outstanding balance > $50K for Finance team's weekly reconciliation"

5. **Complete Save**
   - Click "Save" button
   - System saves template
   - Dialog closes
   - Confirmation message: "Template saved successfully"

6. **Verify in Search Template Tab**
   - Click "My Search" button (this takes you to My Search page)
   - On this page, click "Search Template" tab (next to "My Search" tab)
   - Your template appears in a grid showing:
     - Template Name
     - Description
     - Created At
     - Actions

7. **Team Members Can Access**
   - Other team members navigate to "My Search" page
   - Click "Search Template" tab
   - See your template listed
   - Click template name to load it into Advanced Search
   - They can modify or execute as-is

:::warning Template Governance
Templates should represent approved, standardized searches. Different organizations may have different permissions - some templates may require admin approval before appearing in the team list. Check with your administrator.
:::

---

## Workflow 7C: Navigate Between "My Search" and "Search Template" Tabs

**Goal**: Switch between viewing your personal saved searches and team templates

**Steps**:

1. **From Advanced Search, Click "My Search"**
   - Click "My Search" button (large button on right side)
   - Navigates to "My Search" page
   - Shows your personal saved searches

2. **View "My Search" Tab (Default)**
   - When you land on "My Search" page, "My Search" tab is active
   - Shows grid with your personal saved searches
   - Columns: Search Name, Description, Created At, Actions
   - If no saved searches: Shows "No records available"

3. **Click "Search Template" Tab**
   - At top of page, look for tab area
   - You'll see two tabs:
     - **"My Search"** (currently active, highlighted)
     - **"Search Template"** (inactive, gray)
   - Click on "Search Template" tab
   - Tab switches to show team templates instead

4. **View "Search Template" Tab**
   - Now showing all team templates
   - Grid shows: Template Name, Description, Created At, Actions
   - These are templates created by you and other team members

5. **Switch Back to "My Search"**
   - Click "My Search" tab again
   - Returns to view of your personal saved searches

6. **Use Saved Search from My Search Tab**
   - Click on any saved search name
   - Advanced Search page loads with that expression pre-populated
   - Filter builder shows all your conditions/groups
   - You can:
     - Click "Search" to execute
     - Modify conditions and save as new search
     - Click "Save Search" to update the existing search

7. **Use Template from Search Template Tab**
   - Click on any template name
   - Advanced Search page loads with template expression
   - Filter builder shows conditions/groups from template
   - You can:
     - Click "Search" to execute
     - Modify conditions (modifying doesn't affect template)
     - Click "Save Search" to save as your personal search (creates copy)
     - Click "Save Template" to create variation of template

:::tip Tab Navigation
Use "My Search" tab for your personal frequent searches - quick access to YOUR searches.  
Use "Search Template" tab to find team-standardized searches - useful when you need a common report or analysis.
:::

---

## Workflow 8: Comparison - Save Search vs Save Template

**When to use each:**

| Scenario | Use Save Search | Use Save Template |
|----------|-----------------|-------------------|
| "I run this search daily" | ✅ | ❌ |
| "My team all needs this search" | ❌ | ✅ |
| "This is specific to my department" | ✅ | ❌ (unless cross-department) |
| "This is a company-wide standard" | ❌ | ✅ |
| "I might modify this each time" | ✅ (easy to edit) | ✅ (doesn't change template) |
| "I want fast access to my searches" | ✅ (in My Search) | ❌ |
| "I want others to use my method" | ❌ | ✅ |
| "This is for one-time use" | ❌ | ❌ |

---

## Workflow 8A (was 8): Multi-Content Type Search
:::

---

## Workflow 8: Multi-Content Type Search

**Goal**: Find records from multiple Content Types in single search

**Example**: Search across "Invoice CT", "PO CT", and "Contract CT" for records matching criteria

**Steps**:

1. **Open Advanced Search**
   - Click "Advanced Search"

2. **Select Multiple Content Types**
   - Click "Content Types" section
   - If a dropdown appears, select each Content Type needed
   - (Or leave empty to search all types)

3. **Add Filters Using Common Fields**
   - When searching multiple CTs, use fields that exist across all:
     - Vendor Name
     - Creation Date
     - Status
     - Custom shared fields

4. **Build Filter Expression**
   - Click "Add Filter" and build conditions normally
   - System knows to search in all selected Content Types

5. **Execute Search**
   - Click "Search"
   - Results aggregate records from all selected Content Types
   - Grid columns adjust to show relevant fields from each type

:::warning Field Naming
When using multi-CT search, fields are labeled with their Content Type: "Vendor [Invoice CT]" vs "Supplier [PO CT]". Ensure you select the correct field variant for each search criteria.
:::

---

## Workflow 9: Using Filter Operators Effectively

**Goal**: Understand when to use each operator for best results

**Common Scenarios**:

| Scenario | Operator | Example |
|----------|----------|---------|
| Exact match needed | Is equal to | Status = "Approved" |
| Exclude specific value | Is not equal to | Status ≠ "Rejected" |
| Search word in text | Contains | File name contains "Invoice" |
| Exclude word | Does not contain | File name NOT contains "Draft" |
| Start of value | Starts with | Reference code starts with "2026-" |
| End of value | Ends with | File name ends with ".pdf" |
| Missing data | Is null / Is not null | Approval Date is null |
| Empty field | Is empty / Is not empty | Notes is empty |

**Test Different Operators**:
- Start with "Is equal to" for most precise results
- Switch to "Contains" if need flexibility
- Use "Starts with" / "Ends with" for partial matching
- Use negation (Is not) to exclude values

---

## Workflow 10: Exporting Search Results

**Goal**: Export matching records to external format for reporting

**Steps** (if export feature available):

1. **Execute Your Search**
   - Build and run filter expression
   - Verify results are correct

2. **Look for Export Option**
   - Check toolbar at top of results grid
   - Look for "Export" button or icon

3. **Choose Export Format**
   - Options may include: CSV, Excel, PDF
   - Select desired format

4. **Complete Export**
   - System generates file
   - Download starts automatically
   - File contains all matching records with selected columns

:::info Column Selection
Before exporting, you can customize which columns appear:
- Right-click column header or look for "Column" settings
- Select/deselect fields to include in export
- Only selected columns will appear in exported file
:::

---

## Workflow 11: Sorting Results

**Goal**: Organize search results by specific field

**Steps**:

1. **Execute Search**
   - Build and run your filter expression
   - Results appear in grid

2. **Click Column Header**
   - Results grid shows column headers: "File Name", "Status", "Creation Date", etc.
   - Click any column header to sort by that field
   - Click again to reverse sort order (ascending ↔ descending)

3. **Visual Indicator**
   - Small arrow (↑ or ↓) shows current sort column/direction

:::tip Multi-Column Sort
Some systems support multi-column sorting:
- Hold Shift (if supported)
- Click second column to sort by two fields
- Useful for grouping then sorting within groups
:::

---

## Workflow 12: Navigating Large Result Sets

**Goal**: Handle search results with 100+ matching records

**Steps**:

1. **Check Pagination Controls**
   - Bottom of results grid shows: "1 - 10 of 234 items" (example)
   - Shows current page and total count

2. **Navigate Pages**
   - Pagination buttons: « ‹ 1 2 3 › »
   - Click page number to jump to specific page
   - Use ‹ › for next/previous page
   - Use « » for first/last page

3. **Change Items Per Page**
   - Look for dropdown: "10 items per page"
   - Change to 25, 50, or 100 to see more at once
   - More items per page = fewer clicks, but slower to load

4. **Search Within Results**
   - Use browser Find (Ctrl+F) to search current page
   - For searching within ALL results, create a new Advanced Search with narrower criteria

:::warning Performance
Viewing 100+ items per page may slow down your browser. Recommend 10-25 items per page for best performance.
:::

---

## Troubleshooting

### Issue: Search Button is Disabled

**Problem**: "Search" button appears grayed out / disabled

**Solutions**:
1. Verify filter is complete:
   - Field selected ✓
   - Operator selected ✓
   - Value entered ✓ (except for Is null / Is empty operators)
2. For "Is null" or "Is empty" operators, value is not needed
3. Try clicking in value field and entering a space character, then clear it

### Issue: No Results Returned

**Problem**: Search executes but shows "No records available"

**Solutions**:
1. Verify your criteria are not too restrictive:
   - Try removing one filter to broaden search
   - Change AND to OR to widen results
2. Check field names and values:
   - Confirm field exists in selected Content Type
   - Verify value spelling and exact case
3. Verify Content Type selection:
   - If you selected specific Content Types, records must be in one of them
   - Try clearing Content Type selection to search all types

### Issue: Too Many Results

**Problem**: Search returns 500+ records, making it hard to find what you need

**Solutions**:
1. Add more filter conditions to narrow results:
   - Click "Add Filter" to restrict by additional field
2. Make filter more restrictive:
   - Change "Contains" to "Starts with" for more exact match
   - Change "Is not equal to" to "Is equal to"
3. Sort results by relevant field:
   - Click column header to sort (e.g., by date to find most recent)

### Issue: Filter Not Saving

**Problem**: Click "Save Search" but search doesn't appear in "My Search"

**Solutions**:
1. Ensure search name is entered (required)
2. Check if system shows error message (bottom of page)
3. Try refreshing page: F5 or Ctrl+R
4. Go to "My Search" page to confirm save

---

## Tips & Tricks

:::tip Performance
- **Narrow your scope first**: Select specific Content Types before adding filters
- **Use indexed fields**: System fields (Name, Date, Status) are faster to search than custom fields
- **Keep groups simple**: Complex nested groups process slower than simple linear filters
:::

:::tip Accuracy
- **Use exact match first**: Start with "Is equal to" for most precise results
- **Test with one condition**: Build filters incrementally and test after each
- **Save frequently**: Before making major changes, save your current search
:::

:::tip Organization
- **Descriptive names**: Use full phrases: "Q2 2026 Unpaid Invoices > $100K"
- **Team conventions**: Establish naming patterns so team members understand saved searches
- **Document complex searches**: Add detailed descriptions for complex filter logic
:::

---

## What's Next?

- **[Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Concepts and architecture
- **[Advanced Search Diagrams](%F0%9F%97%BA%20Diagrams.md)** - UI flows and filter logic visualization
- **[Using Quick Search](../Quick%20Search/%F0%9F%9B%A0%20Using%20Quick%20Search.md)** - Related search workflows
- **[Quick Search Knowledge Overview](../Quick%20Search/%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Simpler alternative for basic searches

---

**Version**: v7.50.0+  
**Last Updated**: 2026-06-09  
**Powered by Contellect**
