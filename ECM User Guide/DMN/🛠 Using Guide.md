---
id: using-manage-dmn
title: "🛠 DMN Using Guide - Step-by-Step Workflows"
sidebar_label: "🛠 Using Guide"
sidebar_position: 4
name: "🛠 Using Guide"
slug: /dmn/using-manage-dmn
tags: [dmn, manage-dmn, workflow, business-cases, decision-tables]
---

# DMN Using Guide - Step-by-Step Workflows & Business Cases

:::tip 📌 At a Glance
**Document Type**: Using Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## Overview

**Manage DMN** is where Contellect ECM administrators create, edit, test, and deploy decision rules that automate business processes. This section covers practical workflows for real-world scenarios.

:::info Prerequisite
You must have **Admin** role to access Configuration → Manage DMN. If you don't see this option, contact your ECM administrator.
:::

## Workflow 1: Create a Basic DMN Rule for Approval Routing

### Scenario
**Company**: Global Finance Inc.  
**Problem**: Invoice approvals take 5+ days because there's no automated routing.  
**Goal**: Create DMN rule that routes invoices to correct approver based on amount.

### Rules to Implement
- Invoices **under $5,000** → Manager approval
- Invoices **$5,000 - $50,000** → Finance Head approval
- Invoices **over $50,000** → CFO approval

### Step-by-Step Workflow

#### Step 1: Access Manage DMN
1. Login to Configuration page
2. Click **Manage DMN** in left navigation
3. Click **Create New Decision Model** button

#### Step 2: Set Up Decision Model Basics
| Field | Value |
|-------|-------|
| **Decision Name** | `Invoice_Approval_Routing` |
| **Description** | Auto-route invoices based on amount for approval |
| **Decision Type** | Decision Table |
| **Trigger Point** | Document Submitted |
| **Status** | Draft (test before enabling) |

#### Step 3: Define Input Variables

```
Input 1:
  Name: invoice_amount
  Type: Decimal
  Description: Total invoice amount

Input 2:
  Name: vendor_is_approved
  Type: Boolean
  Description: Is vendor on approved list?

Input 3:
  Name: department
  Type: String
  Description: Department requesting invoice
```

#### Step 4: Create Decision Table

Create table with 4 columns:

| invoice_amount | vendor_is_approved | department | Approval_Route |
|---|---|---|---|
| < 5000 | true | Any | MANAGER |
| < 5000 | false | Finance | CFO |
| 5000-50000 | true | Any | FINANCE_HEAD |
| 5000-50000 | false | Any | CFO |
| > 50000 | - | Any | CFO |

#### Step 5: Set Output Variable
```
Output:
  Name: approval_route
  Type: String
  Possible Values: MANAGER, FINANCE_HEAD, CFO
  Description: Target approver group for this invoice
```

#### Step 6: Test with Sample Data
```
Test Case 1:
  Input: amount=3500, approved=true, dept=Sales
  Expected: MANAGER
  ✓ PASS

Test Case 2:
  amount=25000, approved=false, dept=Finance
  Expected: CFO
  ✓ PASS

Test Case 3:
  amount=75000, approved=true, dept=Ops
  Expected: CFO
  ✓ PASS
```

#### Step 7: Link to Workflow
1. Navigate to **Workflow Management**
2. Select **Invoice Workflow**
3. At workflow stage "Submit for Approval", add action:
   - **Type**: DMN Decision
   - **Decision Model**: `Invoice_Approval_Routing`
   - **Map Inputs**:
     - invoice_amount ← Record field "Amount"
     - vendor_is_approved ← Record field "Is_Approved_Vendor"
     - department ← Record field "Department"
   - **Use Output**: `approval_route` → Assign to group

#### Step 8: Deploy to Production
1. Return to **Manage DMN**
2. Set status to **Active**
3. Enable for all workspaces
4. Document changes in audit log

### Result
✅ Invoices automatically routed to correct approver within seconds instead of days

---

## Workflow 2: Create DMN Rule for Automatic Folder Organization

### Scenario
**Company**: Legal Services LTD  
**Problem**: Documents uploaded randomly; users spend time searching for files  
**Goal**: Auto-organize documents using DMN folder path metadata

### Target Folder Structure
```
Root
├── Contracts
│   ├── 2026
│   │   ├── Q1
│   │   ├── Q2
│   │   └── Q3
├── Litigation
│   ├── Active
│   └── Closed
└── HR Documents
    ├── Employee Records
    └── Policies
```

### DMN Implementation

#### Step 1: Create Metadata Fields (In Content Type Configuration)
```
Field 1:
  Name: document_category
  Type: Dropdown
  Values: Contract, Litigation, HR Document, Other

Field 2:
  name: subcategory
  Type: Dropdown
  Conditional: Based on document_category

Field 3:
  name: year
  Type: Number

Field 4:
  name: quarter
  Type: Dropdown (Q1, Q2, Q3, Q4) - Only if category=Contract

Field 5:
  name: status
  Type: Dropdown - Only if category=Litigation
  Values: Active, Closed
```

#### Step 2: Create DMN Rule - "Build_Folder_Path"

**Decision Type**: Expression  
**Inputs**: document_category, subcategory, year, quarter, status

**Decision Logic** (Pseudo-code):
```
IF document_category = "Contract"
  THEN folder_path = "Contracts/" + year + "/" + quarter
  
ELSE IF document_category = "Litigation"
  THEN folder_path = "Litigation/" + status
  
ELSE IF document_category = "HR Document"
  THEN folder_path = "HR Documents/" + subcategory
  
ELSE
  THEN folder_path = "Other/" + document_category
```

#### Step 3: Set Output Variables
```
Output:
  folder_path_segment_1: String (e.g., "Contracts")
  folder_path_segment_2: String (e.g., "2026")
  folder_path_segment_3: String (e.g., "Q1")
```

#### Step 4: Link to Workspace Record Creation

When user creates a **Workspace record**:
1. DMN evaluates folder path rules
2. Auto-creates folder in Repository
3. Link Workspace record to auto-folder

**Workflow Integration**:
```
User Creates Workspace Record
  ↓
DMN: Build_Folder_Path evaluates
  ↓
System Creates Folder:
  "Contracts/2026/Q1"
  ↓
Workspace → Linked to Auto-Folder
  ↓
User sees organized records
```

#### Step 5: Test Examples

```
Test 1:
  category="Contract", year="2026", quarter="Q1"
  Expected Path: "Contracts/2026/Q1"
  ✓ PASS

Test 2:
  category="Litigation", status="Active"
  Expected Path: "Litigation/Active"
  ✓ PASS

Test 3:
  category="HR Document", subcategory="Employee Records"
  Expected Path: "HR Documents/Employee Records"
  ✓ PASS
```

### Result
✅ Documents auto-organized into logical folder hierarchy

---

## Workflow 3: Create DMN Rule for Conditional Field Visibility

### Scenario
**Company**: Healthcare Clinic  
**Problem**: All users see sensitive fields (medical history, diagnoses); creates privacy/security risk  
**Goal**: DMN rule shows/hides fields based on user role

### Rules
- **Admin**: Sees all fields
- **Doctor**: Sees medical fields + patient basic info (NOT billing)
- **Nurse**: Sees vitals + symptoms (NOT diagnosis or billing)
- **Billing**: Sees insurance + billing fields (NOT medical)
- **Patient**: Sees own contact info + appointment history (read-only)

### Implementation

#### Step 1: Create DMN Decision - "Get_Visible_Fields"

**Input Variables**:
```
user_role: String (Admin, Doctor, Nurse, Billing, Patient)
record_type: String (PatientRecord, Appointment, MedicalHistory)
is_own_record: Boolean (only for Patient role)
```

**Decision Table**:

| user_role | record_type | is_own_record | Visible_Fields |
|---|---|---|---|
| Admin | ANY | - | ALL |
| Doctor | PatientRecord | - | basic_info, medical_history, diagnosis, notes |
| Doctor | Appointment | - | date, type, provider, notes |
| Nurse | PatientRecord | - | vitals, symptoms, allergies |
| Nurse | Appointment | - | date, time, type |
| Billing | PatientRecord | - | name, insurance, account_balance |
| Billing | Appointment | - | date, cost, payment_status |
| Patient | PatientRecord | true | name, dob, contact_info |
| Patient | PatientRecord | false | (empty - deny access) |
| Patient | Appointment | true | date, type, provider, location |

#### Step 2: Set Output
```
Output:
  Name: visible_fields
  Type: Array of String
  Example: ["name", "dob", "contact_info", "appointment_history"]
```

#### Step 3: Link to Record Display

In Angular component rendering:
```typescript
// On record load:
const userRole = getCurrentUserRole();
const visibleFields = await callDMN('Get_Visible_Fields', {
  user_role: userRole,
  record_type: recordType,
  is_own_record: isOwnRecord
});

// Only render fields in visibleFields array
displayedFields = allFields.filter(f => 
  visibleFields.includes(f.name)
);
```

#### Step 4: Test Cases
```
Test 1:
  Admin viewing PatientRecord
  Expected: ALL fields visible
  ✓ PASS

Test 2:
  Doctor viewing PatientRecord
  Expected: basic_info, medical_history, diagnosis, notes
  ✓ PASS

Test 3:
  Patient viewing own PatientRecord
  Expected: name, dob, contact_info only
  ✓ PASS

Test 4:
  Patient viewing another PatientRecord
  Expected: (access denied)
  ✓ PASS
```

### Result
✅ Sensitive fields protected; each role sees only authorized data

---

## Workflow 4: Create DMN Rule for Document Classification

### Scenario
**Company**: Document Management Services  
**Problem**: Incoming documents (scans, uploads) manually classified; slow and error-prone  
**Goal**: Auto-classify documents based on content analysis

### Classification Rules
- **Contract** IF: contains "agreement" OR "contract" AND has signatures
- **Invoice** IF: contains numbers/formatting pattern + "amount due" OR "total"
- **Receipt** IF: contains store name OR date + total amount under $500
- **Report** IF: contains "report" OR "analysis" + has charts/tables

### Implementation

#### Step 1: Setup DMN - "Classify_Document"

**Inputs**:
```
document_text: String (extracted text from document)
file_type: String (pdf, docx, image, etc.)
file_size: Decimal (KB)
has_signature_area: Boolean
has_tables: Boolean
has_charts: Boolean
```

**Decision Logic**:
```
IF document_text contains ["contract", "agreement"] 
   AND (has_signature_area OR file_size > 50KB)
  THEN classification = "CONTRACT"

ELSE IF document_text contains ["invoice", "bill", "amount due"]
  AND file_size between 50-500KB
  THEN classification = "INVOICE"

ELSE IF document_text contains ["receipt", "total amount"]
  AND file_size < 100KB
  THEN classification = "RECEIPT"

ELSE IF document_text contains ["report", "analysis"]
  AND (has_tables OR has_charts)
  THEN classification = "REPORT"

ELSE
  THEN classification = "OTHER"
```

#### Step 2: Set Output
```
Output:
  classification: String (CONTRACT, INVOICE, RECEIPT, REPORT, OTHER)
  confidence_score: Decimal (0-100, percentage)
  tags: Array (auto-generated tags)
```

#### Step 3: Link to Upload Workflow
```
Document Uploaded
  ↓
Extract text + analyze
  ↓
DMN: Classify_Document evaluates
  ↓
Auto-assign Content Type & folder
  ↓
Route through type-specific workflow
```

#### Step 4: Test with Sample Documents
```
Test 1:
  Input: Legal document with "hereby agree" + signatures detected
  Expected: CONTRACT with 95% confidence
  ✓ PASS

Test 2:
  Input: Document with "Invoice #12345" + "Total: $5,000"
  Expected: INVOICE with 90% confidence
  ✓ PASS

Test 3:
  Input: Small document with "receipt" + date + amount
  Expected: RECEIPT with 85% confidence
  ✓ PASS
```

### Result
✅ Documents auto-classified within seconds

---

## Workflow 5: Create DMN Rule for Validation & Error Checking

### Scenario
**Company**: Manufacturing Corp  
**Problem**: Invalid records submitted (missing required fields, data conflicts); causes downstream processing errors  
**Goal**: DMN rule validates record completeness before submission

### Validation Rules
- **Purchase Orders**: Must have PO number + vendor + amount
- **Invoices**: Must match vendor in PO + amount within 10% of PO
- **Shipments**: Must link to PO + have tracking number

### Implementation

#### Step 1: Create DMN - "Validate_Record"

**Inputs**:
```
record_type: String (PurchaseOrder, Invoice, Shipment)
po_number: String
vendor_name: String
amount: Decimal
po_reference: String (for Invoice/Shipment)
tracking_number: String (for Shipment)
```

**Decision Table**:

| record_type | has_required_fields | amount_matches_po | status | message |
|---|---|---|---|---|
| PurchaseOrder | YES | N/A | VALID | Ready to submit |
| PurchaseOrder | NO | N/A | INVALID | Missing PO number or vendor |
| Invoice | YES | YES (±10%) | VALID | Can process |
| Invoice | YES | NO | WARNING | Amount differs from PO by >10% |
| Invoice | NO | - | INVALID | Missing required fields |
| Shipment | YES | N/A | VALID | Tracked and linked |
| Shipment | NO | N/A | INVALID | Missing PO reference or tracking |

#### Step 2: Set Output
```
Outputs:
  is_valid: Boolean
  validation_status: String (VALID, WARNING, INVALID)
  error_message: String (description for user)
  suggested_action: String (proceed, review, reject)
```

#### Step 3: Link to Submission Workflow
```
User clicks "Submit"
  ↓
DMN: Validate_Record evaluates
  ↓
IF VALID → Allow submission
IF WARNING → Show warning, allow user to override
IF INVALID → Block submission, show error message
```

#### Step 4: Examples

```
Test 1:
  PO with number, vendor, amount
  Expected: VALID
  ✓ PASS

Test 2:
  Invoice matching PO but amount differs by 15%
  Expected: WARNING "Invoice amount differs from PO"
  ✓ PASS

Test 3:
  Invoice missing vendor name
  Expected: INVALID "Vendor required for invoice"
  ✓ PASS
```

### Result
✅ Invalid records caught before they cause problems downstream

---

## Troubleshooting Manage DMN

### Issue 1: DMN Rule Not Triggering

**Symptoms**: Records processed but DMN rule doesn't execute

**Diagnosis**:
1. Check rule **Status** is "Active"
2. Verify **Trigger Point** matches workflow stage
3. Review rule **Conditions** - all inputs provided?
4. Check user has workflow access permissions

**Solution**:
```
1. Go to Manage DMN
2. Select rule
3. Check "Active" status checkbox
4. Review trigger configuration
5. Run test case to verify
```

### Issue 2: Unexpected DMN Output

**Symptoms**: DMN returns wrong routing, classification, or value

**Diagnosis**:
1. Review decision table for conflicting rules
2. Check input variable mapping
3. Verify test data format

**Solution**:
```
1. Click "Edit" on DMN rule
2. Click "Test" tab
3. Run with actual record data
4. Review decision table row-by-row
5. Identify which condition matched
6. Adjust rule logic if needed
```

### Issue 3: Performance - DMN Evaluation Too Slow

**Symptoms**: Documents take 10+ seconds to route/process

**Diagnosis**:
1. Complex decision table with many rows
2. Expensive expressions (text analysis, regex)
3. Lookup to external systems

**Solution**:
```
1. Simplify conditions (check fastest first)
2. Use indexed fields only
3. Cache results for repeated inputs
4. Move complex logic to background
```

### Issue 4: Users Confused About Decisions

**Symptoms**: Support tickets about "why was this routed there?"

**Solution**:
```
1. Document each rule's business purpose
2. Provide decision flowchart
3. Create "Decision Log" audit trail
4. Train users on decision logic
```

## Best Practices for Manage DMN

| Practice | Reason | Example |
|----------|--------|---------|
| **Name rules clearly** | Self-documenting | `Invoice_Approval_Routing` not `Rule_1` |
| **Document purpose** | Future maintainers | "Routes by amount to correct approver" |
| **Test thoroughly** | Catch errors early | Test all edge cases before production |
| **Version control** | Track changes | Keep DMN changelog |
| **Simple vs complex** | Performance & maintenance | Break into multiple simple rules |
| **Define default behavior** | Handle unmapped cases | Always have "catch-all" rule |
| **Monitor execution** | Identify issues | Log all DMN decisions |
| **Audit trail** | Compliance & debugging | Store inputs, outputs, timestamp |

## Common DMN Patterns

### Pattern 1: Decision Table with Priorities

**Use**: Multiple rules could match; need priority  
**Example**: Approval routing where rule order matters

```
Rule 1: IF amount > 100K THEN CFO (Priority: HIGH)
Rule 2: IF department = Finance THEN Finance Head (Priority: MEDIUM)
Rule 3: DEFAULT THEN Manager (Priority: LOW)
```

### Pattern 2: Nested Decisions (Decision Tree)

**Use**: Complex logic with multiple levels  
**Example**: Folder path that depends on previous decisions

```
Decision 1: Get document category
Decision 2: Based on category, get subcategory
Decision 3: Based on subcategory, get folder
```

### Pattern 3: Lookup Table

**Use**: Many rules with similar conditions  
**Example**: Tax rates by state, approval amounts by role

```
Store as reference data:
- State → Tax Rate mapping
- Role → Approval Limit mapping
Then use in DMN: lookup(state) → tax_rate
```

## What's Next?

- **[Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Understand core DMN concepts
- **[Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md)** - Components and interface reference
- **[Diagrams](%F0%9F%97%BA%20Diagrams.md)** - Visual workflows and advanced examples
- **[Workflow Management](../Workspace/%F0%9F%A7%A0%20Knowledge%20Overview.md)** - How DMN fits into workflows
- **[Quick Search](../Quick%20Search/%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Search for records created via DMN rules
- **[Configuration](%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Other Configuration options

---

**Version**: v7.49.0+  
**Last Updated**: 2026-06-11  
**Powered by Contellect**
