---
id: manage-groups-diagrams
title: "👥 Manage Groups - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "👥 Manage Groups Diagrams"
slug: /manage-groups/diagrams
tags: [manage-groups, diagrams, permission-levels, user-tasks, deletion-rules]
description: Visualize group lifecycle, membership structure, and deletion guard flows.
---

# 👥 Manage Groups - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Visualize group creation lifecycle, membership model, and safe deletion sequence.
:::

## 1) Group Lifecycle

```mermaid
flowchart TD
  A[Admin opens Manage Groups] --> B[Create Group]
  B --> C[Set Name and Description]
  C --> D[Assign Users or Groups]
  D --> E[Save Group]
  E --> F[Edit Group]
  F --> G[Assign Permission Level]
  G --> H[Use Group in Workflow User Tasks]
```

## 2) Membership Model

```mermaid
flowchart TD
  A[Group] --> B[Users]
  A --> C[Child Groups]
  A --> D[Permission Level]

  D --> E[Application Scope]
  D --> F[Repository Scope]
  D --> G[Workflow Scope]
  D --> H[Content Type Scope]

  A --> I[Workflow User Task Assignee]
```

## 3) Deletion Guard Rules

```mermaid
flowchart TD
  A[Admin clicks Delete Group] --> B{Any users assigned?}
  B -->|Yes| C[Block delete]
  B -->|No| D{Any child groups assigned?}
  D -->|Yes| C
  D -->|No| E{Permission level or dependent assignments exist?}
  E -->|Yes| C
  E -->|No| F[Allow delete]
```

## 4) Safe Deletion Sequence

```mermaid
flowchart TD
  A[Open Edit Group] --> B[Remove all users]
  B --> C[Remove all child groups]
  C --> D[Remove permission-level and dependent assignments]
  D --> E[Update Group]
  E --> F[Back to Manage Groups list]
  F --> G[Delete group]
```

---

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Concepts and governance model.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Operational steps for admins.

---

Version: live UI exploration + tenant rules provided by user  
Last Updated: 2026-06-21