---
id: general-settings-diagrams
title: "⚙️ General Settings - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "⚙️ General Settings Diagrams"
slug: /general-settings/diagrams
tags: [general-settings, diagrams, trash, versioning, barcode, language]
description: Visualize General Settings structure, trash lifecycle, and version-control behavior.
---

# ⚙️ General Settings - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Visualize how General Settings options drive lifecycle and feature behavior.
:::

## 1) Settings Section Map

```mermaid
flowchart TD
  A[General Settings] --> B[General Tab]
  A --> C[Content Tab]
  A --> D[Features Tab]

  B --> B1[System Language]
  B --> B2[Landing Page]

  C --> C1[Trash Management]
  C --> C2[Version Control]

  C1 --> C1a[Enable Auto-Delete]
  C1 --> C1b[Delete After Days]
  C1 --> C1c[Show Trash in Search Results]

  C2 --> C2a[Enable Version Copy]
  C2 --> C2b[Max Number of Versions]

  D --> D1[Document Features]
  D1 --> D1a[Enable Barcode]
```

## 2) Trash Lifecycle

```mermaid
flowchart TD
  A[User deletes item] --> B[Item moves to Trash]
  B --> C{Auto-Delete enabled?}
  C -->|No| D[Item stays in Trash until manually purged]
  C -->|Yes| E[Timer starts: Delete After Days countdown]
  E --> F[Timer expires]
  F --> G[Item permanently deleted]

  B --> H{Show Trash in Search?}
  H -->|Yes| I[Item appears in search results]
  H -->|No| J[Item hidden from search]
```

## 3) Version Control Flow

```mermaid
flowchart TD
  A[User uploads new version] --> B[New version created]
  B --> C{Version Copy enabled?}
  C -->|Yes| D[User can copy content from previous version]
  C -->|No| E[New version starts empty]
  B --> F{Max versions reached?}
  F -->|Yes| G[Oldest version removed]
  F -->|No| H[All versions retained]
```

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Concepts and tenant impact.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step configuration details.

---

Version: live UI exploration  
Last Updated: 2026-06-21