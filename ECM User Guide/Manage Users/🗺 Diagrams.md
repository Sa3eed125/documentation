---
id: manage-users-diagrams
title: "👥 Manage Users - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "👥 Manage Users Diagrams"
slug: /manage-users/diagrams
tags: [manage-users, diagrams, lifecycle, groups, permission-levels, rms]
description: Visualize invitation lifecycle, status actions, and access governance paths.
---

# 👥 Manage Users - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Visualize user invitation lifecycle, status transitions, and authorization model.
:::

## 1) Invitation To Activation Lifecycle

```mermaid
flowchart TD
  A[Admin opens Manage Users] --> B[Click Invite Users]
  B --> C[Enter email and press Enter]
  C --> D[Add more emails and press Enter]
  D --> E{RMS integrated?}
  E -->|Yes| F[Assign RMS role: Administrator / Client / Packer / Driver]
  E -->|No| G[Skip RMS role]
  F --> H[Send Invitation]
  G --> H
  H --> I[User status = Invited]
  I --> J[User clicks email link]
  J --> K[User verifies account and sets name/password]
  K --> L[User status = Active]
```

## 2) Status-Based Actions Matrix

```mermaid
flowchart LR
  A[Invited] --> A1[Delete]
  A --> A2[Manage Groups]
  A --> A3[Manage PL]
  A --> A4[Resend Invitation]
  A --> A5[Edit RMS Role]

  B[Active] --> B1[Manage Groups]
  B --> B2[Manage PL]
  B --> B3[Deactivate]
  B --> B4[Edit RMS Role]
  B --> B5[Delete not allowed]

  C[Inactive] --> C1[Cannot access website]
  C --> C2[Needs re-activation]
```

## 3) Access Governance Model

```mermaid
flowchart TD
  A[User] --> B[Assign Groups]
  A --> C[Assign Permission Level]
  A --> D[Assign RMS Role if integrated]

  B --> B1[Everyone default]
  B --> B2[Administrator]
  B --> B3[Custom Groups]

  C --> C1[Application]
  C --> C2[Repository]
  C --> C3[Workflow]
  C --> C4[Content Types]
  C --> C5[RMS Roles if available]

  C1 --> E[View/Create/Edit/Delete]
  C2 --> E
  C3 --> E
  C4 --> E
  C5 --> E
```

## 4) Deactivation Effect

```mermaid
flowchart TD
  A[Active user] --> B[Admin clicks Deactivate]
  B --> C[User status becomes Inactive]
  C --> D[User cannot log in]
  D --> E[Admin activates again]
  E --> F[User can access website]
```

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Core concepts and rules.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Operational steps for admins.

---

Version: live UI + tenant rules provided by user  
Last Updated: 2026-06-21
