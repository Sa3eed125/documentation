---
id: workflow-diagrams-business-cases
title: "🗺 Workflow Diagrams, Architecture & Business Cases"
sidebar_label: "🗺 Diagrams & Business Cases"
sidebar_position: 3
name: "🗺 Diagrams & Business Cases"
slug: /workflow/diagrams-business-cases
tags: [workflow, diagrams, business-cases, processes, architecture]
---

# Workflow Diagrams, Architecture & Business Cases


:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


This section provides visual representations of workflow concepts, architecture, integration patterns, and real-world business case examples.

## 1. Workflow System Architecture

```mermaid
graph TB
    TRIGGER["Event/Trigger<br/>- Record created<br/>- Field changed<br/>- Timer fired"]
    
    TRIGGER --> ENGINE["Workflow Engine<br/>Process orchestrator"]
    
    ENGINE --> STAGE["Current Stage<br/>Execute stage logic"]
    
    STAGE --> CHECK["🔀 Evaluate<br/>Conditions"]
    
    CHECK --> DMN["📊 Call DMN?"]
    DMN -->|YES| DMN_EXEC["Execute DMN<br/>Decision"]
    DMN -->|NO| COND["Check Conditions<br/>Which path to take?"]
    
    DMN_EXEC --> COND
    
    COND --> ACTION["⚙️ Execute Actions<br/>- Assign user<br/>- Send notification<br/>- Update fields<br/>- Create folders"]
    
    ACTION --> NEXT["Advance to<br/>Next Stage"]
    
    NEXT --> CONTINUE["Record continues<br/>through workflow"]
    
    style ENGINE fill:#fff9c4
    style STAGE fill:#c8e6c9
    style ACTION fill:#e1f5fe
    style DMN_EXEC fill:#fff9c4
```

## 2. Workflow Lifecycle - Complete Journey

```mermaid
graph LR
    A["🆕 Record<br/>Created"] --> B["📥 Workflow<br/>Triggered"]
    B --> C["Stage 1:<br/>Submit"]
    C --> D["Stage 2:<br/>Review"]
    D --> E{"Condition<br/>Met?"}
    E -->|NO| F["🔄 Loop<br/>Continue review"]
    E -->|YES| G["Stage 3:<br/>Approve"]
    F --> E
    G --> H["🚀 Execute"]
    H --> I["✅ Complete<br/>Archive"]
    
    style B fill:#c8e6c9
    style E fill:#fff9c4
    style I fill:#c8e6c9
```

## 3. Workflow Components Breakdown

```mermaid
graph TB
    WORKFLOW["Workflow<br/>Complete Process"]
    
    WORKFLOW --> STAGE["📍 Stages<br/>Discrete steps"]
    WORKFLOW --> COND["🔀 Conditions<br/>Decision logic"]
    WORKFLOW --> ACT["⚙️ Actions<br/>Tasks to do"]
    WORKFLOW --> TRIG["🔔 Triggers<br/>Start events"]
    WORKFLOW --> TIMER["⏱️ Timers<br/>SLA & escalation"]
    
    STAGE --> S1["Submit"]
    STAGE --> S2["Review"]
    STAGE --> S3["Approve"]
    
    COND --> C1["IF amount > 50K"]
    COND --> C2["IF status = approved"]
    
    ACT --> A1["Assign to user"]
    ACT --> A2["Send email"]
    ACT --> A3["Lock fields"]
    
    TRIG --> T1["Record created"]
    TRIG --> T2["Field changed"]
    
    TIMER --> TM1["SLA timer"]
    TIMER --> TM2["Escalation"]
    
    style WORKFLOW fill:#e3f2fd
    style STAGE fill:#c8e6c9
    style COND fill:#fff9c4
    style ACT fill:#e1f5fe
    style TRIG fill:#f3e5f5
    style TIMER fill:#ffe0b2
```

## 4. Invoice Approval Workflow - Complete Business Case

### Business Case Overview
- **Company**: Global Finance Inc.
- **Annual Volume**: 50,000 invoices/year
- **Current Process**: Manual routing, 5-7 day average
- **Goal**: Automated routing, 1-3 day average

### Current State (Before Workflow)

```mermaid
graph TD
    INV["Invoice<br/>Submitted"] --> WAIT1["⏳ Wait for<br/>Admin routing<br/>~4 hours"]
    WAIT1 --> ROUTE["Manual Assign<br/>to Approver<br/>~1-2 hours"]
    ROUTE --> WAIT2["⏳ Wait for<br/>Approval<br/>~1-3 days"]
    WAIT2 --> CHECK{"Need<br/>Escalation?"}
    CHECK -->|YES| ESC["Escalate to<br/>Higher level<br/>+1-2 days"]
    CHECK -->|NO| FINAL["Approved"]
    ESC --> FINAL
    
    style WAIT1 fill:#ffcdd2
    style WAIT2 fill:#ffcdd2
    style ROUTE fill:#ffcdd2
```

**Pain Points**:
- ❌ Manual routing errors
- ❌ Delays in admin queue
- ❌ Inconsistent approval timelines
- ❌ No escalation for overdue
- ❌ No audit trail of routing decisions

### Future State (With Workflow)

```mermaid
graph TD
    INV["Invoice<br/>Submitted"] --> DMN["🎯 DMN Instantly<br/>Determines route<br/>~5 seconds"]
    DMN --> ROUTE["Auto-Route to<br/>Approver<br/>based on amount"]
    ROUTE --> ASSIGN["Assign<br/>Immediately<br/>~1 second"]
    ASSIGN --> NOTIF["📧 Notification<br/>Sent to approver"]
    NOTIF --> WAIT["Waiting for<br/>Approval<br/>1-3 days"]
    WAIT --> SLA{"SLA<br/>Expired?"}
    SLA -->|NO| FINAL["Approved/Rejected"]
    SLA -->|YES| ESC["🚨 Auto-Escalate<br/>Notify manager<br/>~1 second"]
    ESC --> FINAL
    
    style DMN fill:#c8e6c9
    style ROUTE fill:#c8e6c9
    style ASSIGN fill:#c8e6c9
    style FINAL fill:#c8e6c9
    style ESC fill:#fff9c4
```

**Benefits**:
- ✅ Instant routing (no admin delays)
- ✅ Accurate assignment every time
- ✅ Consistent SLA tracking
- ✅ Automatic escalation
- ✅ Full audit trail

### Detailed Invoice Workflow Stages

```mermaid
graph LR
    S1["Stage 1:<br/>Submitted<br/>Invoice ready"] -->
    S2["Stage 2:<br/>Manager Review<br/>SLA: 1 day"] -->
    S3{"Amount<br>> $5K?"}
    
    S3 -->|NO| S5["Stage 5:<br/>Approved<br/>Ready to post"]
    
    S3 -->|YES| S4["Stage 4:<br/>Finance Head<br/>SLA: 2 days"]
    
    S4 --> S3B{"Amount<br>> $50K?"}
    
    S3B -->|NO| S5
    S3B -->|YES| S6["Stage 6:<br/>CFO Review<br/>SLA: 3 days"]
    
    S6 --> S5
    
    S5 --> S7["Stage 7:<br/>Execution<br/>Post to GL"]
    
    S7 --> S8["✅ Completed<br/>Archived"]
    
    style S1 fill:#e3f2fd
    style S2 fill:#fff9c4
    style S4 fill:#fff9c4
    style S6 fill:#fff9c4
    style S5 fill:#c8e6c9
    style S8 fill:#c8e6c9
```

### Business Impact

```mermaid
graph LR
    BEFORE["📊 BEFORE<br/>5-7 days avg<br/>Manual routing<br/>High errors"]
    AFTER["✨ AFTER<br/>1-3 days avg<br/>Auto-routing<br/>Zero errors"]
    
    METRICS["📈 Metrics<br/>• 70-85% faster<br/>• 99% accuracy<br/>• $250K/year savings<br/>• 100% SLA compliance"]
    
    BEFORE -->|Workflow<br/>Automation| AFTER
    AFTER --> METRICS
    
    style BEFORE fill:#ffcdd2
    style AFTER fill:#c8e6c9
    style METRICS fill:#e3f2fd
```

### Time Savings Analysis

```mermaid
graph LR
    CURRENT["Current Process<br/>50,000 invoices/year<br/>6 days average<br/>= 300,000 days total<br/>= 115 FTE years"]
    
    WORKFLOW["With Workflow<br/>50,000 invoices/year<br/>2 days average<br/>= 100,000 days total<br/>= 38 FTE years"]
    
    SAVINGS["💰 Savings<br/>77 FTE years freed up<br/>= $7.7M annual labor saved<br/>= 38 other process automations"]
    
    CURRENT --> WORKFLOW
    WORKFLOW --> SAVINGS
    
    style CURRENT fill:#ffcdd2
    style WORKFLOW fill:#c8e6c9
    style SAVINGS fill:#e3f2fd
```

---

## 5. Parallel Review Workflow - Legal Contracts

### Scenario
Legal contracts need simultaneous review by Legal, Finance, and Compliance.

```mermaid
flowchart TD
    START["Contract Submitted"] --> S1["Stage 1: Ready for Review"]
    
    S1 --> SPLIT["🔀 Parallel Task Creation"]
    
    SPLIT --> L["📋 Legal Review<br/>SLA: 2 days<br/>Check: Clauses, terms"]
    SPLIT --> F["💰 Finance Review<br/>SLA: 2 days<br/>Check: Payment terms"]
    SPLIT --> C["📋 Compliance Review<br/>SLA: 2 days<br/>Check: Regulations"]
    
    L --> MERGE["⏳ Wait for All<br/>Complete"]
    F --> MERGE
    C --> MERGE
    
    MERGE --> CHECK{"All<br/>Approved?"}
    
    CHECK -->|YES| EXEC["✅ Stage 2: Approved"]
    CHECK -->|NO| REJ["❌ Stage 2: Needs Revision"]
    
    EXEC --> FINAL["✅ Executed & Archived"]
    REJ --> REVISE["Send back to Legal"]
    REVISE --> S1
    
    style SPLIT fill:#fff9c4
    style MERGE fill:#fff9c4
    style EXEC fill:#c8e6c9
    style FINAL fill:#c8e6c9
```

**Time Savings**:
```
Sequential approach: 2 + 2 + 2 = 6 days
Parallel approach: max(2, 2, 2) = 2 days
Savings: 4 days per contract (67% faster)
```

---

## 6. Escalation Workflow - Customer Support

```mermaid
graph TB
    TICKET["🎫 Support Ticket<br/>Received"] --> L1["Level 1: Agent<br/>SLA: 2 hours<br/>Counter: ⏱️ 0:00"]
    
    L1 --> CHECK1{"Resolved<br/>in 2h?"}
    
    CHECK1 -->|YES| CLOSE["✅ Ticket Closed"]
    
    CHECK1 -->|NO| L2["🚨 L2: Supervisor<br/>SLA: 1 hour<br/>Counter: ⏱️ 2:00"]
    
    L2 --> CHECK2{"Resolved<br/>in 3h total?"}
    
    CHECK2 -->|YES| CLOSE
    CHECK2 -->|NO| L3["🚨 L3: Manager<br/>SLA: 30 min<br/>Counter: ⏱️ 3:00"]
    
    L3 --> CHECK3{"Resolved<br/>in 3.5h?"}
    
    CHECK3 -->|YES| CLOSE
    CHECK3 -->|NO| EXEC["🚨 Executive<br/>Notification"]
    
    EXEC --> RESOLVE["Manual intervention"]
    RESOLVE --> CLOSE
    
    style L1 fill:#e3f2fd
    style L2 fill:#fff9c4
    style L3 fill:#ffe0b2
    style EXEC fill:#ffcdd2
    style CLOSE fill:#c8e6c9
```

**Escalation Timeline**:
```
T+0h:     Agent receives ticket (no wait)
T+2h:     Agent escalates to supervisor
T+2h:     Supervisor reviews
T+3h:     Supervisor escalates to manager
T+3h:     Manager reviews
T+3.5h:   Manager escalates to executive
T+3.5h:   Executive involvement
T+4h:     All tickets guaranteed resolution
```

---

## 7. Conditional Routing Workflow - Document Classification

```mermaid
flowchart TD
    DOC["Document<br/>Uploaded"] --> S1["Stage 1:<br/>Classify<br/>(Using DMN)"]
    
    S1 --> CLASS["Classify as:<br/>Contract / Invoice /<br/>Report / Other"]
    
    CLASS --> C1["IF Contract<br/>Type = 'Contract'"]
    CLASS --> C2["IF Invoice<br/>Type = 'Invoice'"]
    CLASS --> C3["IF Report<br/>Type = 'Report'"]
    CLASS --> C4["IF Other<br/>Type = 'Other'"]
    
    C1 --> PATH1["🔗 Contract Path:<br/>Legal → Finance →<br/>Executive"]
    C2 --> PATH2["🔗 Invoice Path:<br/>Finance → Approval<br/>by amount"]
    C3 --> PATH3["🔗 Report Path:<br/>Peer Review →<br/>Manager"]
    C4 --> PATH4["🔗 Other Path:<br/>Manual Review"]
    
    PATH1 --> ARCHIVE["Archive to<br/>Classified Folder"]
    PATH2 --> ARCHIVE
    PATH3 --> ARCHIVE
    PATH4 --> ARCHIVE
    
    ARCHIVE --> COMPLETE["✅ Complete"]
    
    style S1 fill:#fff9c4
    style PATH1 fill:#c8e6c9
    style PATH2 fill:#c8e6c9
    style PATH3 fill:#c8e6c9
    style ARCHIVE fill:#c8e6c9
```

---

## 8. Workflow + DMN Integration

```mermaid
graph TB
    WF["Workflow<br/>Orchestrates process<br/>stages"]
    
    DMN["DMN<br/>Makes<br/>decisions"]
    
    CTYPE["Content Type<br/>Defines data"]
    
    REPO["Repository<br/>Organizes records"]
    
    SEARCH["Search<br/>Finds records"]
    
    WF --> CTYPE
    DMN --> WF
    WF --> REPO
    WF --> SEARCH
    
    DETAIL["Integration<br/>Workflow calls DMN<br/>for routing decisions<br/><br/>DMN output determines<br/>next workflow stage<br/><br/>Workflow maintains<br/>record metadata<br/>for folder organization<br/><br/>Search finds records<br/>by workflow status"]
    
    style WF fill:#c8e6c9
    style DMN fill:#fff9c4
    style CTYPE fill:#e1f5fe
    style REPO fill:#f3e5f5
    style DETAIL fill:#fffde7
```

---

## 9. Workflow Stage Structure - Detailed Anatomy

```mermaid
graph TB
    STAGE["Stage: Manager Review"]
    
    STAGE --> TRIGGER["🔔 Trigger<br/>When does this stage execute?<br/>- Previous stage completed<br/>- Record created<br/>- Field changed to 'submitted'"]
    
    STAGE --> ENTRY["📥 On Entry<br/>Actions taken when<br/>stage starts<br/>- Assign to user<br/>- Send notification<br/>- Lock fields<br/>- Call DMN"]
    
    STAGE --> EXECUTE["⚙️ Execution<br/>What happens in stage<br/>- User reviews record<br/>- User makes decision<br/>- User adds comments"]
    
    STAGE --> EXIT["📤 On Exit<br/>Conditions & actions<br/>- IF approved THEN go Stage 2<br/>- IF rejected THEN go Rejected<br/>- Send email<br/>- Update status"]
    
    STAGE --> SLA["⏱️ SLA & Escalation<br/>Time management<br/>- SLA: 2 days<br/>- Escalation: Day 1.5<br/>- Action: Send reminder"]
    
    style STAGE fill:#e3f2fd
    style ENTRY fill:#e1f5fe
    style EXECUTE fill:#c8e6c9
    style EXIT fill:#c8e6c9
    style SLA fill:#ffe0b2
```

---

## 10. Workflow Conditional Routing Example

```mermaid
flowchart TD
    REC["Invoice Submitted"] --> EVAL["Evaluate Conditions"]
    
    EVAL --> Q1{"Amount<br/>Check"}
    
    Q1 -->|< 5K| PATH1["🟢 Small Amount<br/>Route to Manager"]
    Q1 -->|5-50K| Q2{"Check<br/>Vendor"}
    Q1 -->|> 50K| PATH3["🔴 Large Amount<br/>Route to CFO"]
    
    Q2 -->|Approved| PATH2["🟡 Medium Amount<br/>Route to Finance Head"]
    Q2 -->|Not Approved| PATH3
    
    PATH1 --> ASSIGN1["Assign: Manager<br/>SLA: 1 day"]
    PATH2 --> ASSIGN2["Assign: Finance<br/>Head<br/>SLA: 2 days"]
    PATH3 --> ASSIGN3["Assign: CFO<br/>SLA: 3 days"]
    
    ASSIGN1 --> WAITING
    ASSIGN2 --> WAITING
    ASSIGN3 --> WAITING["⏳ Waiting for<br/>Approval"]
    
    style Q1 fill:#fff9c4
    style Q2 fill:#fff9c4
    style PATH1 fill:#a5d6a7
    style PATH2 fill:#ffe082
    style PATH3 fill:#ef9a9a
```

---

## 11. SLA & Escalation Visualization

```mermaid
graph LR
    START["Start<br/>Day 0"] --> CHECK1{"Day 1.5<br/>75%<br/>threshold?"}
    
    CHECK1 -->|NO| CONTINUE1["Continue<br/>Processing"]
    CHECK1 -->|YES| REMIND["📧 Send Reminder<br/>to Approver"]
    
    REMIND --> CHECK2{"Day 2<br/>100%<br/>SLA Met?"}
    
    CHECK2 -->|NO| ESCALATE["🚨 Escalate<br/>to Manager"]
    CHECK2 -->|YES| COMPLETE1["✅ Completed<br/>On time"]
    
    ESCALATE --> CHECK3{"Escalation<br/>Resolved?"}
    
    CHECK3 -->|YES| COMPLETE2["✅ Completed<br/>Late"]
    CHECK3 -->|NO| NOTIFY["🚨 Notify<br/>Executive"]
    
    NOTIFY --> MANUAL["Manual<br/>Intervention"]
    MANUAL --> COMPLETE2
    
    style CHECK1 fill:#fff9c4
    style CHECK2 fill:#fff9c4
    style REMIND fill:#ffe082
    style ESCALATE fill:#ef9a9a
    style COMPLETE1 fill:#c8e6c9
    style COMPLETE2 fill:#a5d6a7
```

---

## 12. Workflow Patterns - Visual Library

### Sequential Pattern (Most Common)
```mermaid
graph LR
    S1["Stage 1<br/>Submit"] --> S2["Stage 2<br/>Review"]
    S2 --> S3["Stage 3<br/>Approve"]
    S3 --> S4["Stage 4<br/>Execute"]
    S4 --> S5["Stage 5<br/>Archive"]
```

### Conditional Pattern
```mermaid
graph TB
    S1["Stage 1"] --> DECISION{"Decision<br/>Point"}
    DECISION -->|Path A| S2A["Stage 2A"]
    DECISION -->|Path B| S2B["Stage 2B"]
    DECISION -->|Path C| S2C["Stage 2C"]
    S2A --> MERGE["Merge"]
    S2B --> MERGE
    S2C --> MERGE
    MERGE --> S3["Stage 3"]
```

### Parallel Pattern
```mermaid
graph TB
    S1["Stage 1"] --> SPLIT["Split"]
    SPLIT --> P1["Parallel 1"]
    SPLIT --> P2["Parallel 2"]
    SPLIT --> P3["Parallel 3"]
    P1 --> MERGE["Wait for All"]
    P2 --> MERGE
    P3 --> MERGE
    MERGE --> S2["Stage 2"]
```

### Loop Pattern
```mermaid
graph TB
    S1["Stage 1"] --> REVIEW["Review"]
    REVIEW --> CHECK{"OK?"}
    CHECK -->|NO| REVISE["Revise"]
    REVISE --> REVIEW
    CHECK -->|YES| S2["Stage 2"]
```

---

## 13. Workflow Integration Touchpoints

```mermaid
graph TB
    WF["Workflow<br/>Manager"]
    
    WF -.->|Stage Progress| RECORD["Record Detail<br/>Displays current<br/>stage & history"]
    
    WF -.->|SLA Status| DASHBOARD["Dashboard<br/>Shows overdue<br/>& at-risk items"]
    
    WF -.->|Routing Info| TASK["User Tasks<br/>Shows assigned<br/>work items"]
    
    WF -.->|Status Updates| SEARCH["Advanced<br/>Search<br/>Filter by status<br/>or stage"]
    
    WF -.->|Field Values| CTYPE["Content Type<br/>Validates required<br/>fields per stage"]
    
    WF -.->|Audit Trail| ACTIVITY["Activity Log<br/>Track all<br/>transitions"]
    
    style WF fill:#e3f2fd
    style RECORD fill:#c8e6c9
    style DASHBOARD fill:#fff9c4
    style TASK fill:#e1f5fe
    style SEARCH fill:#f3e5f5
```

---

## 14. Workflow Metrics & KPIs

```mermaid
graph TB
    WF["Workflow<br/>System"]
    
    WF --> SPEED["⚡ Speed<br/>Avg time per stage<br/>Total duration"]
    
    WF --> QUALITY["✅ Quality<br/>Approval accuracy<br/>Rejection rate"]
    
    WF --> VOLUME["📊 Volume<br/>Records per stage<br/>Throughput"]
    
    WF --> SLA["⏱️ SLA Compliance<br/>% on-time<br/>Escalation count"]
    
    WF --> COST["💰 Cost<br/>Labor saved<br/>Efficiency gain"]
    
    SPEED --> REPORT["📈 Dashboard Report<br/>Track metrics<br/>Identify issues<br/>Optimize process"]
    QUALITY --> REPORT
    VOLUME --> REPORT
    SLA --> REPORT
    COST --> REPORT
    
    style WF fill:#e3f2fd
    style REPORT fill:#c8e6c9
```

---

## 15. Workflow Deployment Lifecycle

```mermaid
flowchart TD
    A["📝 Design<br/>Map process<br/>on paper"] --> B["⚙️ Build<br/>Create in<br/>Manage Workflow"]
    B --> C["🧪 Test<br/>Test all<br/>scenarios"]
    C --> D["✅ Review<br/>Get stakeholder<br/>approval"]
    D --> E["🚀 Deploy<br/>Set to Active<br/>Train users"]
    E --> F["📊 Monitor<br/>Track metrics<br/>Identify issues"]
    F --> G{"Optimize<br/>needed?"}
    G -->|YES| H["🔄 Refine<br/>Adjust logic<br/>or timelines"]
    G -->|NO| I["✅ Maintain<br/>Support users"]
    
    H --> F
    
    style A fill:#e3f2fd
    style B fill:#fff9c4
    style C fill:#f3e5f5
    style D fill:#ffe082
    style E fill:#c8e6c9
    style F fill:#e1f5fe
```

---

## 16. End-to-End Purchase Order Workflow

```mermaid
flowchart TD
    PO["PO Submitted<br/>Amount: $25K<br/>Vendor: ABC Corp"] --> DMN["Call DMN<br/>Determine Route"]
    
    DMN --> OUTPUT["DMN Result:<br/>approval_route=finance_head<br/>urgency=medium<br/>sla=2 days"]
    
    OUTPUT --> S1["Stage 1:<br/>Review & Verify"]
    S1 --> ASSIGN["Assign to:<br/>Finance Head"]
    ASSIGN --> NOTIFY1["Notify:<br/>Finance Head<br/>New PO for approval"]
    
    NOTIFY1 --> S2["Stage 2:<br/>Finance Review<br/>SLA: 2 days"]
    S2 --> APPROVE{"Approved?"}
    
    APPROVE -->|YES| S3["Stage 3:<br/>Procurement"]
    APPROVE -->|NO| REJECT["Rejected<br/>Send to submitter"]
    REJECT --> END1["❌ PO Rejected"]
    
    S3 --> EXEC["Execute:<br/>Create PO<br/>in system"]
    EXEC --> VENDOR["Notify<br/>Vendor"]
    VENDOR --> S4["Stage 4:<br/>Tracking"]
    S4 --> END2["✅ PO Complete"]
    
    style DMN fill:#fff9c4
    style S2 fill:#e1f5fe
    style EXEC fill:#c8e6c9
    style END2 fill:#c8e6c9
```

---

## Key Takeaways

| Concept | Purpose | Impact |
|---------|---------|--------|
| **Workflow** | Orchestrates process | Clear, standard execution |
| **Stages** | Discrete process steps | Accountability, focus |
| **Conditions** | Route based on data | Flexible, intelligent |
| **Actions** | Execute tasks | Automation, efficiency |
| **SLA/Escalation** | Time management | On-time delivery |
| **DMN Integration** | Complex decisions | Powerful routing |
| **Automation** | Reduce manual work | 70-80% labor saved |
| **Visibility** | Track progress | Dashboard metrics |

---

## What's Next?

- **[Using Manage Workflow](%F0%9F%9B%A0%20Using%20Manage%20Workflow.md)** - Step-by-step creation guide
- **[Workflow Detailed Guide](%F0%9F%9B%A0%20All%20BPMN%20Task%20Types%20Reference.md)** - Component reference
- **[Use Case Examples](%F0%9F%9B%A0%20Use%20Cases.md)** - Real-world implementations
- **[Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md)** - Core concepts

---

**Version**: v7.49.0+  
**Last Updated**: 2026-06-11  
**Powered by Contellect**
