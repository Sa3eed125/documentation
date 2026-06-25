---
id: my-tasks-diagrams
title: "🗺 My Tasks - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🗺 My Tasks Diagrams"
slug: /my-tasks/diagrams
tags: [my-tasks, diagrams, claim, user-task, workflow]
description: Visual lifecycle, assignment, and troubleshooting diagrams for My Tasks.
---

# 🗺 My Tasks - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams
**Goal**: Visualize My Tasks lifecycle, assignment modes, and start-path decisions.
:::

## 1) End-To-End Task Lifecycle

```mermaid
flowchart TD
  A[Workflow Start] --> B[Service Tasks Run]
  B --> C{Reached User Task node?}
  C -->|No| D[Workflow Continues]
  C -->|Yes| E[Task Created in My Tasks]
  E --> F{Assignment Type}
  F -->|Single User| G[User Opens Task]
  F -->|Multi Users / Group| H[Eligible User Claims Task]
  H --> G
  G --> I[Fill Form + Complete Task]
  I --> J[Workflow Resumes]
  J --> K[Next Node / End]
```

## 2) Assignment And Claim Logic

```mermaid
flowchart LR
  A[User Task Generated] --> B{Assignee Mode}
  B --> C[Single User]
  B --> D[Multiple Users]
  B --> E[Group]
  C --> C1[No claim required]
  D --> D1[Claim required]
  E --> E1[Claim required]
  D1 --> F[First claimer owns task]
  E1 --> F
  C1 --> G[Complete Task]
  F --> G
```

## 3) Start Method Decision Map

```mermaid
flowchart TD
  A[Need to start workflow] --> B{Start node has Start Workflow with a node?}
  B -->|Yes| C[Start from My Workspace on existing record/folder]
  B -->|No| D{Where to start from?}
  D --> E[My Tasks > Start New Task]
  D --> F[Manage Workflow > Start icon]
```

## 4) Sequential vs Parallel User Tasks

```mermaid
flowchart TD
  A[User Task A] --> B[User Task B]
  B --> C[User Task C]
```

```mermaid
flowchart TD
  A[Parallel Gateway] --> B[User Task A]
  A --> C[User Task B]
  B --> D[Join Gateway]
  C --> D
  D --> E[Continue Workflow]
```

## 5) My Tasks Operational Loop

```mermaid
flowchart LR
  A[Refresh Task List] --> B[Open/Claim Task]
  B --> C[Complete Task Form]
  C --> D[Workflow Resumes]
  D --> E[New tasks may arrive]
  E --> A
```

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Concepts and status model.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - End-user operations and troubleshooting steps.

---

Version: v7.50-style reference aligned to current source docs  
Last Updated: 2026-06-11
