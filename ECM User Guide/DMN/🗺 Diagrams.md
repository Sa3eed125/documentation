---
id: dmn-diagrams-business-cases
title: "🗺 DMN Diagrams, Architecture & Business Cases"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🗺 Diagrams"
slug: /dmn/diagrams-business-cases
tags: [dmn, diagrams, business-cases, decision-flows, architecture]
---

# DMN Diagrams, Architecture & Business Cases

:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


This section provides visual representations of DMN concepts, architecture, integration patterns, and detailed real-world business case examples.

## 1. DMN System Architecture

```mermaid
graph TB
    RECORD["Record Created/<br/>Field Changed"] --> TRIGGER["Workflow Trigger<br/>Event"]
    TRIGGER --> DMN_ENGINE["DMN Decision<br/>Engine"]
    
    DMN_ENGINE --> DECISION_TABLE["Decision Table<br/>Evaluate Rows"]
    DMN_ENGINE --> EXPRESSION["Expression<br/>Calculate Value"]
    DMN_ENGINE --> LOOKUP["Lookup Table<br/>Reference Data"]
    
    DECISION_TABLE --> EVALUATE["Match Conditions<br/>& Execute Rule"]
    EXPRESSION --> EVALUATE
    LOOKUP --> EVALUATE
    
    EVALUATE --> OUTPUT["Decision Output<br/>Routing Path /<br/>Classification /<br/>Field Value"]
    
    OUTPUT --> ACTION["Action Executed<br/>- Assign user<br/>- Create folder<br/>- Route document<br/>- Update field<br/>- Send notification"]
    
    ACTION --> WORKFLOW["Workflow<br/>Progresses"]
    
    WORKFLOW --> RECORD
    
    style DMN_ENGINE fill:#fff9c4
    style EVALUATE fill:#fff9c4
    style OUTPUT fill:#fff9c4
```

## 2. DMN Decision Table Components

```mermaid
graph TD
    INPUT["📥 INPUT<br/>Variables"]
    
    CONDITIONS["⚙️ CONDITIONS<br/>Rows"]
    
    OUTPUT["📤 OUTPUT<br/>Decision"]
    
    INPUT --> ROW1["Row 1: amount &lt; 5K"]
    INPUT --> ROW2["Row 2: 5K-50K"]
    INPUT --> ROW3["Row 3: &gt; 50K"]
    
    ROW1 --> MATCH1["✓ Matches?"]
    ROW2 --> MATCH2["✓ Matches?"]
    ROW3 --> MATCH3["✓ Matches?"]
    
    MATCH1 --> OUT1["→ MANAGER"]
    MATCH2 --> OUT2["→ FINANCE_HEAD"]
    MATCH3 --> OUT3["→ CFO"]
    
    OUT1 --> OUTPUT
    OUT2 --> OUTPUT
    OUT3 --> OUTPUT
    
    style INPUT fill:#e3f2fd
    style CONDITIONS fill:#fff9c4
    style OUTPUT fill:#c8e6c9
    style MATCH1 fill:#fff9c4
    style MATCH2 fill:#fff9c4
    style MATCH3 fill:#fff9c4
```

## 3. Invoice Approval Routing - Complete Business Case

### Business Case Overview
- **Company**: Global Finance Inc.
- **Annual Volume**: 50,000 invoices/year
- **Current Process**: Manual routing, 3-5 day delays
- **Goal**: Auto-route within 1 minute

### Current State (Before DMN)

```mermaid
graph TD
    INVOICE["Invoice Submitted"] --> WAIT["Admin Reviews<br/>Manually Routes<br/>~4 hours"]
    WAIT --> APPROVER["Routed to<br/>Approver"]
    APPROVER --> REVIEW["Approver Reviews<br/>~1-2 days"]
    REVIEW --> ESCALATE{"Need<br/>Escalation?"}
    ESCALATE -->|YES| WAIT
    ESCALATE -->|NO| APPROVED["Approved"]
    
    style WAIT fill:#ffcdd2
    style REVIEW fill:#ffcdd2
    style ESCALATE fill:#ffcdd2
```

**Pain Points**:
- ❌ Manual routing errors (wrong approver)
- ❌ Delays waiting for admin review
- ❌ Escalation required for some invoices (adds more delays)
- ❌ No audit trail of routing decisions
- ❌ Inconsistent rules applied

### Future State (With DMN)

```mermaid
graph TD
    INVOICE["Invoice Submitted"] --> DMN["🎯 DMN Decision<br/>Evaluate:<br/>- Amount<br/>- Vendor<br/>- Department<br/>~5 seconds"]
    DMN --> ROUTE["✓ Auto-Routed<br/>to Approver"]
    ROUTE --> APPROVER["Approver Reviews<br/>~1-2 days"]
    APPROVER --> DECISION{"Approve?"}
    DECISION -->|YES| APPROVED["✓ Approved"]
    DECISION -->|NO| REJECT["✗ Rejected<br/>Back to Submitter"]
    
    style DMN fill:#c8e6c9
    style ROUTE fill:#c8e6c9
    style APPROVED fill:#c8e6c9
```

**Benefits**:
- ✅ Instant routing (no admin delays)
- ✅ Consistent rules applied to every invoice
- ✅ Audit trail stored automatically
- ✅ Fewer escalations (rules handle edge cases)
- ✅ Faster overall approval time

### DMN Approval Decision Table

```
Input Variables:
├── invoice_amount (Decimal)
├── vendor_is_approved (Boolean)
├── department (String)
└── purchase_order_exists (Boolean)

Decision Rows:
┌────────────────┬───────────────┬────────────┬───────────┬────────────────┐
│ Amount         │ Approved      │ Department │ PO Exists │ Approval Route │
│                │ Vendor        │            │           │                │
├────────────────┼───────────────┼────────────┼───────────┼────────────────┤
│ < $5,000       │ YES           │ Any        │ Any       │ MANAGER        │
│ < $5,000       │ NO            │ Finance    │ YES       │ FINANCE_HEAD   │
│ < $5,000       │ NO            │ Finance    │ NO        │ CFO            │
│ < $5,000       │ NO            │ Other      │ Any       │ MANAGER        │
├────────────────┼───────────────┼────────────┼───────────┼────────────────┤
│ $5,000-50K     │ YES           │ Any        │ YES       │ FINANCE_HEAD   │
│ $5,000-50K     │ YES           │ Any        │ NO        │ CFO            │
│ $5,000-50K     │ NO            │ Any        │ Any       │ CFO            │
├────────────────┼───────────────┼────────────┼───────────┼────────────────┤
│ > $50,000      │ Any           │ Any        │ Any       │ CFO            │
└────────────────┴───────────────┴────────────┴───────────┴────────────────┘
```

### DMN Execution Flow

```mermaid
flowchart TD
    SUBMIT["Invoice Submitted<br/>Amount: $12,000<br/>Vendor: ABC Corp<br/>Dept: Operations<br/>Has PO: YES"] --> DMN["DMN Evaluates"]
    
    DMN --> CHECK1["Row 1: amount &lt; 5K?<br/>$12,000 &lt; 5,000?<br/>❌ NO"]
    CHECK1 --> CHECK2["Row 2: amount 5-50K &amp; approved?<br/>$12,000 in 5-50K? ✓ YES<br/>ABC Corp approved? ✓ YES<br/>Has PO? ✓ YES<br/>✅ MATCH!"]
    
    CHECK2 --> RESULT["Decision: FINANCE_HEAD"]
    RESULT --> ACTION["Assign to Finance Head<br/>Notify approver<br/>Log decision<br/>Create audit entry"]
    ACTION --> WORKFLOW["Workflow continues<br/>Awaiting approval"]
    
    style DMN fill:#fff9c4
    style CHECK2 fill:#c8e6c9
    style RESULT fill:#c8e6c9
    style ACTION fill:#c8e6c9
```

### Business Impact

```mermaid
graph LR
    BEFORE["📊 BEFORE<br/>3-5 days<br/>Manual routing<br/>High errors"] -->|DMN Implementation| AFTER["✨ AFTER<br/>1 minute<br/>Auto-routing<br/>Zero errors"]
    
    METRICS["📈 Metrics<br/>• 98% faster<br/>• 95% error reduction<br/>• $120K/year savings<br/>• Full audit trail"]
    
    AFTER --> METRICS
    
    style BEFORE fill:#ffcdd2
    style AFTER fill:#c8e6c9
    style METRICS fill:#e3f2fd
```

---

## 4. Document Classification Business Case

### Scenario
**Organization**: Legal Document Services  
**Challenge**: 1,000 documents uploaded daily; manual classification takes 8 hours/day  
**Solution**: DMN auto-classifies by content analysis

### Classification Rules Flowchart

```mermaid
flowchart TD
    DOC["Document Uploaded<br/>Content Scanned"] --> DMN["📊 DMN Analysis"]
    
    DMN --> Q1{"Contains<br/>contract<br/>keywords?"}
    Q1 -->|YES & Signatures| CAT1["✓ CATEGORY:<br/>CONTRACT"]
    Q1 -->|NO| Q2{"Contains<br/>invoice<br/>pattern?"}
    
    Q2 -->|YES & Amount| CAT2["✓ CATEGORY:<br/>INVOICE"]
    Q2 -->|NO| Q3{"Contains<br/>receipt<br/>markers?"}
    
    Q3 -->|YES & Store Name| CAT3["✓ CATEGORY:<br/>RECEIPT"]
    Q3 -->|NO| Q4{"Contains<br/>report<br/>structure?"}
    
    Q4 -->|YES & Tables| CAT4["✓ CATEGORY:<br/>REPORT"]
    Q4 -->|NO| CAT5["? CATEGORY:<br/>UNCLASSIFIED"]
    
    CAT1 --> ACTION1["→ Contract Folder<br/>→ Contract Workflow"]
    CAT2 --> ACTION2["→ Invoice Folder<br/>→ Approval Routing"]
    CAT3 --> ACTION3["→ Receipt Folder<br/>→ Processing"]
    CAT4 --> ACTION4["→ Reports Folder<br/>→ Archive"]
    CAT5 --> ACTION5["→ Unclassified<br/>→ Manual Review"]
    
    style DMN fill:#fff9c4
    style CAT1 fill:#c8e6c9
    style CAT2 fill:#c8e6c9
    style CAT3 fill:#c8e6c9
    style CAT4 fill:#c8e6c9
    style CAT5 fill:#ffcdd2
```

### Time Savings Analysis

```mermaid
graph LR
    MANUAL["Manual Classification<br/>1000 docs/day<br/>8 seconds each<br/>= 134 minutes/day<br/>= $1,680/month labor"]
    
    DMN["DMN Auto Classification<br/>1000 docs/day<br/>0.5 seconds each<br/>+ 10 min review<br/>= 18 minutes/day<br/>= $110/month labor"]
    
    SAVINGS["💰 Savings<br/>$1,570/month<br/>$18,840/year<br/>116 human hours/month"]
    
    MANUAL -->|Implementation| DMN
    DMN --> SAVINGS
    
    style MANUAL fill:#ffcdd2
    style DMN fill:#c8e6c9
    style SAVINGS fill:#e3f2fd
```

---

## 5. Field Visibility Control Business Case

### Healthcare Records Example

**Challenge**: Prevent unauthorized access to sensitive patient medical information

### Role-Based Visibility Rules

```mermaid
graph TB
    PATIENT["👤 Patient Record"]
    
    ADMIN["👨‍💼 Admin<br/>ALL fields"]
    DOCTOR["👨‍⚕️ Doctor<br/>Medical only"]
    NURSE["💉 Nurse<br/>Vitals only"]
    BILLING["💳 Billing<br/>Finance only"]
    PATIENT_ROLE["🧑 Patient<br/>Own data<br/>read-only"]
    
    PATIENT --> ADMIN
    PATIENT --> DOCTOR
    PATIENT --> NURSE
    PATIENT --> BILLING
    PATIENT --> PATIENT_ROLE
    
    ADMIN -.->|Can See| FIELDS["Name<br/>DOB<br/>Medical History<br/>Diagnosis<br/>Vitals<br/>Insurance<br/>Billing<br/>Notes"]
    
    DOCTOR -.->|Can See| FIELDS_D["Medical History<br/>Diagnosis<br/>Vitals<br/>Notes"]
    
    NURSE -.->|Can See| FIELDS_N["Vitals<br/>Allergies<br/>Symptoms"]
    
    BILLING -.->|Can See| FIELDS_B["Name<br/>Insurance<br/>Billing"]
    
    PATIENT_ROLE -.->|Can See| FIELDS_P["Name<br/>Contact<br/>Appointments<br/>(read-only)"]
    
    style ADMIN fill:#e8f5e9
    style DOCTOR fill:#e1f5fe
    style NURSE fill:#fff3e0
    style BILLING fill:#fce4ec
    style PATIENT_ROLE fill:#f3e5f5
```

### Security Impact

```mermaid
graph LR
    BEFORE["❌ BEFORE<br/>All users<br/>see all fields<br/>High risk<br/>Privacy violation"] -->|DMN Rules| AFTER["✅ AFTER<br/>Least privilege<br/>Role-based access<br/>HIPAA compliant<br/>Audit logged"]
    
    style BEFORE fill:#ffcdd2
    style AFTER fill:#c8e6c9
```

---

## 6. Folder Path Construction Business Case

### Real Estate Management Company

**Goal**: Organize property documents with auto-folder structure

### Metadata to Folder Path Mapping

```mermaid
graph TD
    RECORD["Property Record Created<br/>Address: 123 Main St<br/>Property Type: Residential<br/>Status: Active"] --> DMN["DMN: Build Folder Path"]
    
    DMN --> EXTRACT["Extract Metadata<br/>- Property Type: Residential<br/>- Status: Active<br/>- Year: 2026<br/>- Price Range: $500K+"]
    
    EXTRACT --> BUILD["Build Path Segments<br/>Segment 1: Properties<br/>Segment 2: Residential<br/>Segment 3: Active<br/>Segment 4: HighValue"]
    
    BUILD --> FOLDER["Create Folder<br/>Properties/<br/>  Residential/<br/>    Active/<br/>      HighValue/"]
    
    FOLDER --> LINK["Link Record<br/>to Auto-Folder"]
    
    LINK --> ORGANIZE["✅ Auto-Organized<br/>in Repository"]
    
    style DMN fill:#fff9c4
    style EXTRACT fill:#fff9c4
    style BUILD fill:#fff9c4
```

### Full Folder Structure

```
Properties/
├── Residential/
│   ├── Active/
│   │   ├── HighValue (>$500K)
│   │   ├── MidRange ($200K-500K)
│   │   └── Affordable (<$200K)
│   └── Sold/
├── Commercial/
│   ├── Active/
│   │   ├── Retail
│   │   ├── Office
│   │   └── Industrial
│   └── Leased/
└── Land/
    ├── Active/
    └── Sold/
```

---

## 7. Workflow Integration - Complete Flow

### Multi-Step Process with DMN at Each Stage

```mermaid
flowchart TD
    START["📥 Document<br/>Upload"] --> STAGE1["Stage 1:<br/>Classification"]
    
    STAGE1 --> DMN1["🎯 DMN Rule:<br/>Classify Document"]
    DMN1 --> CLASSIFY["✓ Classified as<br/>Invoice"]
    CLASSIFY --> ACTION1["Auto-assign<br/>Content Type"]
    
    ACTION1 --> STAGE2["Stage 2:<br/>Validation"]
    STAGE2 --> DMN2["🎯 DMN Rule:<br/>Validate Invoice"]
    DMN2 --> VALIDATE["✓ All fields<br/>complete"]
    VALIDATE --> ACTION2["Proceed to<br/>Routing"]
    
    ACTION2 --> STAGE3["Stage 3:<br/>Approval Routing"]
    STAGE3 --> DMN3["🎯 DMN Rule:<br/>Route by Amount"]
    DMN3 --> ROUTE["✓ Route to<br/>Finance Head"]
    ROUTE --> ACTION3["Assign to<br/>Approver Group"]
    
    ACTION3 --> STAGE4["Stage 4:<br/>Approval"]
    STAGE4 --> REVIEW["👤 Approver<br/>Reviews"]
    REVIEW --> DECISION["✓ Approves<br/>Invoice"]
    DECISION --> ACTION4["Update Status:<br/>APPROVED"]
    
    ACTION4 --> STAGE5["Stage 5:<br/>Post-Process"]
    STAGE5 --> DMN4["🎯 DMN Rule:<br/>Generate Reports"]
    DMN4 --> POSTPROCESS["✓ Generate<br/>Accounting Entry"]
    POSTPROCESS --> END["✅ Complete<br/>Archived"]
    
    style DMN1 fill:#fff9c4
    style DMN2 fill:#fff9c4
    style DMN3 fill:#fff9c4
    style DMN4 fill:#fff9c4
    style END fill:#c8e6c9
```

---

## 8. Decision Table Evaluation - Step by Step

```mermaid
graph TD
    INPUT["Input Values<br/>amount = 25000<br/>vendor_approved = true<br/>dept = Finance"] --> TABLE["Decision Table<br/>5 Rows"]
    
    TABLE --> ROW1["Row 1<br/>amount &lt; 5000?<br/>25000 &lt; 5000?<br/>❌ NO - Skip"]
    
    ROW1 --> ROW2["Row 2<br/>amount 5K-50K<br/>AND approved?<br/>✓ YES &amp; ✓ YES<br/>✅ MATCH!"]
    
    ROW2 --> OUTPUT["Output:<br/>FINANCE_HEAD"]
    
    OUTPUT --> ACTION["Take Action:<br/>Assign to Finance Head<br/>Send notification<br/>Log decision"]
    
    style TABLE fill:#fff9c4
    style ROW2 fill:#c8e6c9
    style OUTPUT fill:#c8e6c9
    style ACTION fill:#c8e6c9
```

---

## 9. DMN Expression vs Decision Table

### Decision Table (Best for multiple conditions)

```mermaid
graph TB
    A["Decision Table<br/>Good For:<br/>- Many similar rules<br/>- Clear conditions<br/>- Non-technical users<br/>- Easy to maintain<br/>- Visible row-by-row"]
    
    EXAMPLE["Example:<br/>Amount < 5K → Manager<br/>Amount 5-50K → Finance Head<br/>Amount > 50K → CFO"]
    
    A --> EXAMPLE
    
    style A fill:#e3f2fd
    style EXAMPLE fill:#fff9c4
```

### Expression (Best for calculation logic)

```mermaid
graph TB
    B["Expression<br/>Good For:<br/>- Calculations<br/>- Complex formulas<br/>- Single decision path<br/>- Dynamic values<br/>- Mathematical logic"]
    
    EXAMPLE2["Example:<br/>total = sum(line_items)<br/>tax = total × tax_rate<br/>final = total + tax"]
    
    B --> EXAMPLE2
    
    style B fill:#e3f2fd
    style EXAMPLE2 fill:#fff9c4
```

---

## 10. Comparison: DMN vs Workflow Conditionals

```mermaid
graph LR
    WORKFLOW["Workflow<br/>Conditionals<br/>(IF/THEN)"]
    
    DMN_RULE["DMN Rules<br/>(Decision Model)"]
    
    WORKFLOW --> WHEN["When to Use:<br/>- Sequential steps<br/>- Workflow progress<br/>- Orchestration"]
    
    DMN_RULE --> WHEN2["When to Use:<br/>- Business logic<br/>- Complex decisions<br/>- Reusable rules<br/>- Easy changes"]
    
    BEST["✅ Best Practice:<br/>Use BOTH together<br/>Workflow calls DMN<br/>for decisions"]
    
    WHEN --> BEST
    WHEN2 --> BEST
    
    style BEST fill:#c8e6c9
```

---

## 11. DMN Audit Trail & Compliance

```mermaid
graph TD
    ACTION["Action Executed<br/>e.g., Invoice Routed"] --> LOG["📋 Audit Log Entry"]
    
    LOG --> DETAILS["Logged Details:<br/>- DMN Rule Name<br/>- Input Values<br/>- Decision Output<br/>- Timestamp<br/>- User<br/>- Record ID"]
    
    DETAILS --> COMPLIANCE["✅ Compliance Benefits:<br/>- Audit Trail<br/>- Accountability<br/>- Regulatory Requirements<br/>- Decision Transparency"]
    
    style LOG fill:#fff9c4
    style COMPLIANCE fill:#c8e6c9
```

---

## 12. DMN Best Practices - Decision Tree

```mermaid
flowchart TD
    START["Creating a<br/>DMN Rule?"] --> Q1{"Is it<br/>Simple?"}
    
    Q1 -->|YES: 1-2<br/>conditions| SIMPLE["Use Expression<br/>Fast & Simple"]
    
    Q1 -->|NO: Many<br/>conditions| Q2{"Multiple<br/>similar rules?"}
    
    Q2 -->|YES| TABLE["Use Decision<br/>Table<br/>Easy to understand<br/>& maintain"]
    
    Q2 -->|NO: Complex<br/>flow| NESTED["Use Multiple<br/>Linked<br/>Decisions<br/>Break into steps"]
    
    SIMPLE --> TEST["✓ Test with<br/>Real Data"]
    TABLE --> TEST
    NESTED --> TEST
    
    TEST --> DEPLOY["✓ Deploy<br/>to Production"]
    
    DEPLOY --> MONITOR["✓ Monitor<br/>Execution"]
    
    MONITOR --> IMPROVE["✓ Improve<br/>as needed"]
    
    style TABLE fill:#c8e6c9
    style SIMPLE fill:#e1f5fe
    style NESTED fill:#fff3e0
```

---

## 13. Common DMN Patterns Library

### Pattern 1: Tiered Approval (Most Common)

```
IF amount <= 5000 THEN manager_approval
ELSE IF amount <= 50000 THEN finance_head
ELSE cfo_approval
```

### Pattern 2: Status Workflow

```
IF status = "draft" THEN allow_edit
ELSE IF status = "submitted" THEN allow_review_only
ELSE IF status = "approved" THEN lock_record
ELSE IF status = "archived" THEN allow_view_only
```

### Pattern 3: Risk-Based Routing

```
IF risk_score < 20 THEN auto_approve
ELSE IF risk_score < 50 THEN standard_review
ELSE IF risk_score < 80 THEN enhanced_review
ELSE manual_investigation
```

---

## 14. Troubleshooting Decision Trees

### When DMN Rule Doesn't Execute

```mermaid
flowchart TD
    ISSUE["🔴 Rule Not<br/>Executing?"] --> CHECK1["Is Status<br/>ACTIVE?"]
    
    CHECK1 -->|NO| FIX1["✅ Activate Rule"]
    CHECK1 -->|YES| CHECK2["Is Trigger<br/>Event Firing?"]
    
    CHECK2 -->|NO| FIX2["✅ Check workflow<br/>trigger config"]
    CHECK2 -->|YES| CHECK3["Do Inputs<br/>Match Record?"]
    
    CHECK3 -->|NO| FIX3["✅ Map fields<br/>correctly"]
    CHECK3 -->|YES| CHECK4["Test Case<br/>Pass?"]
    
    CHECK4 -->|NO| FIX4["✅ Debug<br/>decision table"]
    CHECK4 -->|YES| RESOLVED["✅ Resolved"]
    
    FIX1 --> RESOLVED
    FIX2 --> RESOLVED
    FIX3 --> RESOLVED
    FIX4 --> RESOLVED
```

---

## 15. DMN Performance Optimization

```mermaid
graph TD
    PROBLEM["🐢 Slow DMN<br/>Execution"] --> ANALYZE["Analyze Rule"]
    
    ANALYZE --> ISSUE1["Too Many<br/>Rows?"]
    ANALYZE --> ISSUE2["Complex<br/>Expressions?"]
    ANALYZE --> ISSUE3["External<br/>Lookups?"]
    
    ISSUE1 --> FIX1["✅ Consolidate<br/>conditions<br/>Check fastest<br/>conditions first"]
    
    ISSUE2 --> FIX2["✅ Simplify<br/>expressions<br/>Move complex<br/>logic to separate<br/>rule"]
    
    ISSUE3 --> FIX3["✅ Cache results<br/>Use local lookup<br/>Pre-compute values"]
    
    FIX1 --> RESULT["⚡ Optimized<br/>Sub-second<br/>execution"]
    FIX2 --> RESULT
    FIX3 --> RESULT
    
    style RESULT fill:#c8e6c9
```

---

## 16. Integration with ECM Modules

```mermaid
graph TB
    DMN["🎯 DMN<br/>Decision Engine"]
    
    WF["Workflow<br/>Orchestration"]
    CT["Content Types<br/>& Fields"]
    SEARCH["Quick/Advanced<br/>Search"]
    REPO["Repository<br/>& Folders"]
    WORKSPACE["Workspace<br/>Records"]
    
    DMN --> WF
    DMN --> CT
    DMN --> SEARCH
    DMN --> REPO
    DMN --> WORKSPACE
    
    WF -->|Uses DMN| DETAIL1["Auto-routing<br/>Conditional actions<br/>Status-based workflow"]
    CT -->|Configured via DMN| DETAIL2["Field visibility<br/>Field validation<br/>Dynamic metadata"]
    SEARCH -->|Searches results<br/>created by DMN| DETAIL3["Filter by DMN<br/>metadata fields<br/>Find auto-classified<br/>records"]
    REPO -->|DMN creates<br/>folder paths| DETAIL4["Auto-folder<br/>creation<br/>Folder structure<br/>via DMN"]
    WORKSPACE -->|DMN sets<br/>metadata| DETAIL5["Folder path<br/>metadata<br/>Auto-folder link"]
    
    style DMN fill:#fff9c4
```

---

## Key Takeaways

| Concept | Key Point |
|---------|-----------|
| **Decision Model** | Structure that defines business rules and decisions |
| **Decision Table** | Matrix of conditions → outputs (best for multi-condition logic) |
| **Expression** | Mathematical/logical formula for single decision |
| **Trigger** | Event that causes DMN rule to execute (record create, field change) |
| **Audit Trail** | Every decision is logged with inputs, outputs, timestamp |
| **Reusable** | Create rule once, use in multiple workflows |
| **Non-Technical** | Business users can modify decision tables without coding |
| **Performance** | Decisions evaluate in milliseconds |
| **Integration** | DMN integrated at workflow, search, folder, and visibility levels |

---

## What's Next?

- **[Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Understand core DMN concepts
- **[Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md)** - Components and interface reference
- **[Using Guide](%F0%9F%9B%A0%20Using%20Guide.md)** - Step-by-step workflows
- **[Workflow Management](../Workspace/%F0%9F%A7%A0%20Knowledge%20Overview.md)** - How DMN integrates
- **[Advanced Search](../Advanced%20Search/%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Search for DMN-created records

---

**Version**: v7.49.0+  
**Last Updated**: 2026-06-11  
**Powered by Contellect**
