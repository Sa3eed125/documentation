---
id: operate-diagrams
title: "🗺 Operate - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🗺 Operate Diagrams"
slug: /operate/diagrams
tags: [operate, diagrams, workflows, troubleshooting]
description: Visual diagrams for Operate monitoring, incident triage, and post-fix validation.
---

# 🗺 Operate - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams
**Goal**: Visualize Operate runtime monitoring and troubleshooting journeys.
:::

This file contains visual references for how Operate is used in real monitoring and debugging flows.

## 1) Operate Page Map

```mermaid
flowchart LR
  A[Configuration Menu] --> B["/configuration/operate"]
  B --> C[Filter Panel]
  B --> D[BPMN Viewer]
  B --> E[Instance Grid]
  C --> C1[Process name]
  C --> C2[Process Version]
  C --> C3[Start Date Range]
  C --> C4[End Date Range]
  C --> C5[State Tree]
  C --> C6[Filter / Clear Filter]
  E --> E1[State]
  E --> E2[Process ID]
  E --> E3[Instance Key]
  E --> E4[Instance Code]
  E --> E5[Start Date]
  E --> E6[End Date]
  E --> E7[Actions]
```

## 2) Status Tree Model

```mermaid
flowchart TB
  A[Instance Status Tree]
  A --> B[Running instance]
  A --> C[Finished instance]
  B --> B1[Active]
  B --> B2[Incident]
  C --> C1[Completed]
  C --> C2[Cancel]
```

## 3) Incident Investigation Flow

```mermaid
flowchart LR
  A[Open Operate] --> B[Clear Filter]
  B --> C[Select Process name]
  C --> D[Set Date Windows]
  D --> E[Check Incident]
  E --> F[Click Filter]
  F --> G[Open target row from Actions]
  G --> H[Read Process ID + Instance Key]
  H --> I[Inspect BPMN context]
  I --> J[Document root cause]
```

## 4) Post-Fix Validation Flow

```mermaid
flowchart LR
  A[Deploy Fix] --> B[Run process again]
  B --> C[Operate Filter]
  C --> D[Process name + date]
  D --> E[Check Completed]
  E --> F[Click Filter]
  F --> G[Open new instance]
  G --> H[Verify success timestamps]
  H --> I[Close ticket]
```

## 5) QC Example Monitoring

```mermaid
sequenceDiagram
  participant U as User/QA
  participant O as Operate
  participant G as Instance Grid
  participant B as BPMN Viewer

  U->>O: Open /configuration/operate
  U->>O: Select "Create a record of QC"
  U->>O: Set Start/End windows
  U->>O: Choose Incident or Completed
  U->>O: Click Filter
  O->>G: Load matching instances
  U->>G: Open row from Actions
  G->>B: Focus selected process context
  U->>B: Review execution context
```

## 6) Fast Triage Matrix

| Situation | Filter Setup | Expected Next Action |
|---|---|---|
| Runtime issue now | `Active` + narrow recent dates | watch transition to completed/incident |
| Failure analysis | `Incident` + target process | open row, capture keys, inspect BPMN context |
| Regression retest | `Completed` + latest date window | compare runtime metadata before/after fix |
| Audit sample | mixed statuses + wider range | export/sample instance records |

## 7) Pre-request Flow (Run Workflow First)

```mermaid
flowchart LR
  A[Need to use Operate] --> B{Any workflow instance exists?}
  B -->|No| C[Run a workflow instance]
  C --> D[Wait for Active / Incident / Completed / Cancel]
  D --> E[Open /configuration/operate]
  B -->|Yes| E
```

## 8) Failed Instance Actions (Process Instance Monitor)

```mermaid
flowchart TB
  A[Instance state = Incident] --> B[Process Instance Monitor]
  B --> C[Refresh]
  B --> D[Resolve]
  B --> E[Retry]
  B --> F[Cancel]

  C --> C1[Reload runtime status]
  D --> D1[Mark incident resolved]
  E --> E1[Re-execute after fix]
  F --> F1[Terminate failed execution]
```

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Understand Operate concepts and status semantics.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Follow complete operational steps.

---

Version: `v7.49.0+`  
Last Updated: `2026-06-11`
