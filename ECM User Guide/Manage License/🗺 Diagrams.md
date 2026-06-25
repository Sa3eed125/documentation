---
id: manage-license-diagrams
title: "📜 Manage License - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "📜 Manage License Diagrams"
slug: /manage-license/diagrams
tags: [manage-license, diagrams, monitoring, tracking, storage, users, workflow]
description: Visualize license dashboard metrics, counting flows, and expiration/activation behavior.
---

# 📜 Manage License - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams  
**Goal**: Visualize license monitoring structure and lifecycle counters.
:::

## 1) License Monitoring Dashboard Structure

```mermaid
flowchart TD
  A[Manage License Dashboard] --> B[Storage Section]
  A --> C[Users and Expiration Section]
  A --> D[Drive Section]
  A --> E[Workflow Section]
  A --> G[Template Metrics Section]
  A --> F[Manage License Section]

  B --> B1["Storage Used (GB)"]
  
  C --> C1["Number of Users"]
  C --> C2["Expiration Date Countdown"]

  D --> D1["Number of Documents"]
  D --> D2["Number of Records"]
  D --> D3["Number of Pages"]
  D --> D4["Number of OCR Pages"]

  E --> E1["Number of Processes"]
  E --> E2["Number of Instances"]
  E --> E3["Number of User Tasks"]

  G --> G1["Number of Templates"]
  G --> G2["Number of Generated Documents"]

  F --> F1["License Key"]
  F --> F2["Activate Button"]
```

## 2) Storage Lifecycle

```mermaid
flowchart TD
  A[User uploads content] --> B[Storage consumed]
  B --> C{Usage < 80%?}
  C -->|Yes| D[Continue normal operations]
  C -->|No| E[Alert: Storage approaching limit]
  E --> F[Plan cleanup or upgrade]
```

## 3) User License Tracking

```mermaid
flowchart TD
  A[Invite user] --> B[Number of Users +1]
  B --> C[Delete invited user]
  C --> D[Number of Users -1]
  B --> E[Deactivate user]
  E --> F[Number of Users -1]
```

## 4) Expiration Monitoring

```mermaid
flowchart TD
  A[License starts] --> B[Days countdown: 30 → 0]
  B --> C{Days remaining > 30?}
  C -->|Yes| D[Normal operations]
  C -->|No| E{Days remaining > 0?}
  E -->|Yes| F[Alert: Renew license soon]
  E -->|No| G[License expired]
  G --> H[All tenant users frozen]
  H --> I[Tenant access blocked until renewal]
```

## 5) Drive Resource Usage Pattern

```mermaid
flowchart TD
  A[Repository Activity] --> B[Documents uploaded]
  B --> C[Pages scanned]
  C --> D[OCR extraction triggered]
  D --> E[Records created from content types]
  E --> F[All metrics updated in Manage License]
  
  B --> G[Document count increases]
  C --> H[Page count increases]
  D --> I[OCR page count increases]
  E --> J[Record count increases]
  E --> K[Permanent delete record]
  K --> L[Record count decreases]
  B --> M[Permanent delete document]
  M --> N[Document and page counts decrease]
  B --> O[Soft delete to trash]
  O --> P[No decrease until permanent delete]
```

## 6) Workflow Utilization Tracking

```mermaid
flowchart TD
  A[Deploy workflow] --> B[Process Definition created]
  B --> C[Process count +1]
  C --> C1[Delete workflow]
  C1 --> C2[Process count -1]
  B --> C3[Edit workflow]
  C3 --> C4[New version created]
  C4 --> C5[Not counted as new workflow]
  
  D[User starts workflow] --> E[Workflow Instance created]
  E --> F[Instance count +1]
  
  G[Workflow assigns task] --> H[User Task created]
  H --> I[Task count +1]
  
  B --> J[All counts visible in Manage License]
  E --> J
  H --> J
```

## 7) Template Usage Tracking

```mermaid
flowchart TD
  A[Create template] --> B[Number of Templates +1]
  B --> C[Delete template]
  C --> D[Number of Templates -1]
  A --> E[Generate document from template]
  E --> F[Number of Generated Documents +1]
```

## 8) License Activation Flow

```mermaid
flowchart TD
  A[Obtain new license key from vendor] --> B[Go to Manage License page]
  B --> C[View License Key field]
  C --> D[Click Activate button]
  D --> E[Enter/paste new license key]
  E --> F{Validation success?}
  F -->|Yes| G[License activated]
  G --> H[All metrics refresh]
  F -->|No| I[Show error message]
  I --> J[Request valid key]
```

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - License metrics and counting behavior.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Section-by-section operational guidance.

---

Version: live UI exploration  
Last Updated: 2026-06-21