---
id: permission-levels-diagrams
title: "🔐 Permission Levels - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🔐 Permission Levels Diagrams"
slug: /permission-levels/diagrams
tags: [permission-levels, diagrams, application, repository, content-type, workflow]
description: Visual models for permission level selection, scope, assignment, and governance.
---

# 🔐 Permission Levels - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Visualize permission level design and assignment paths across ECM modules.
:::

## 1) Permission Level Selection Model

```mermaid
flowchart TD
  A[Open Configuration > Permission Levels] --> B{Choose level type}
  B --> C[Application Permission Levels]
  B --> D[Repository Permission Levels]
  B --> E[Content Type Permission Levels]
  B --> F[Workflow Permission Levels]
```

## 2) Shared Create Flow

```mermaid
flowchart TD
  A[Select level type] --> B[Click Create Permission Levels]
  B --> C[Enter Name and Description]
  C --> D[Expand All / review options]
  D --> E[Select allowed actions]
  E --> F[Choose scope options if available]
  F --> G[Save]
```

## 3) Application Permission Architecture

```mermaid
flowchart TD
  A[Application Permission Level] --> B[Content Security]
  A --> C[System Security]
  A --> D[Administration and Configuration]

  B --> B1[Permissions modules actions]
  C --> C1[Users and Groups management]
  D --> D1[Resources, Templates, DMN, Workflow, Settings]
```

## 4) Module-Specific Scope Model

```mermaid
flowchart TD
  A[Repository Level] --> A1[Object and File actions]
  A --> A2[Annotation and Redact actions]

  B[Content Type Level] --> B1[View / Update / Delete]
  B --> B2[All / Accessible / Excluding / Specific types]

  C[Workflow Level] --> C1[View / Start / Deploy / Update / Delete]
  C --> C2[Operate progress + Enable/Disable]
  C --> C3[All / Accessible / Excluding / Specific workflows]
```

## 5) Assignment Model

```mermaid
flowchart TD
  A[Permission Level] --> B[Assign to User]
  A --> C[Assign to Group]
  B --> D[User effective access]
  C --> E[Group members effective access]
```

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Permission types and governance fundamentals.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step permission setup instructions.
- [🛠 Use Cases](%F0%9F%9B%A0%20Use%20Cases.md) - Applied permission strategies by role.

---

Version: live UI exploration (Create + Expand All)  
Last Updated: 2026-06-21