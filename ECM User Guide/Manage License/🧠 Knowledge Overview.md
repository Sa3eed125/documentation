---
id: manage-license-knowledge-overview
title: "📜 Manage License - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "📜 Manage License Knowledge Overview"
slug: /manage-license/overview
tags: [manage-license, storage, users, expiration, documents, records, workflow]
description: Understand license metrics, counting rules, and tenant usage monitoring behavior.
---

# 📜 Manage License - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Understand all license-tracked metrics and how usage counters increase or decrease.
:::

## What Manage License Does

Manage License provides comprehensive monitoring and tracking of all license components including storage, user capacity, expiration, document/record limits, workflow metrics, OCR page usage, templates, and generated documents.

Observed entry path:

- Configuration > Manage License
- Route: `/configuration/manage-license`

## License Monitoring Dashboard

The single Manage License page displays all tracking metrics in real-time, organized into core sections:

1. **Storage** — Storage capacity used vs. allocated
2. **Users and Expiration** — User seat count + license expiration countdown
3. **Drive** — Document, Record, Page, and OCR page counts
4. **Workflow** — Process definitions, instances, and user task counts
5. **Manage License** — License key entry and activation control
6. **Template Metrics (tenant-dependent)** — Template count and generated documents count

---

## Storage Section

| Metric | Type | Example |
|--------|------|---------|
| Storage Used | Progress bar + GB display | 0.005 / 0.193 GBs |

Shows current storage utilization against license allocation. Visual progress bar indicates usage percentage.

---

## Users and Expiration Section

| Metric | Type | Example |
|--------|------|---------|
| Number of Users | Progress bar + count | 2 / 5 Users |
| Expiration Date | Progress bar + date range | 30 / 30 Days (2026-05-01 to 2026-05-31) |

Tracks active user seats and days remaining on the license. Expiration shows both day countdown and calendar dates.

---

## Drive Section

| Metric | Type | Example |
|--------|------|---------|
| Number of Documents | Count display | 29 / Unlimited Documents |
| Number of Records | Count display | Varies (tracked vs. limit) |
| Number of Pages | Count display | 95 / Unlimited Pages |
| Number of OCR Pages | Count display | 0 / Unlimited OCR Extraction Pages |

Tracks repository content volume including OCR-processed pages for documents requiring text extraction.

---

## Workflow Section

| Metric | Type | Example |
|--------|------|---------|
| Number of Processes | Count display | 64 / Unlimited Process Definitions |
| Number of Instances | Count display | 50 / Unlimited Process Instances |
| Number of User Tasks | Count display | 24 / Unlimited User Tasks |

Monitors workflow engine usage including deployed process definitions, running instances, and assigned user tasks.

---

## License Activation Control

| Component | Type | Purpose |
|-----------|------|---------|
| License Key | Text input (disabled) | Encrypted license credential |
| Activate Button | Button | Apply/renew a license |

The License Key field stores the activation credential in encrypted form. Click Activate to apply a new license.

---

## Key Observations

1. All metrics use progress bars (where applicable) for visual quick-reference.
2. Unlocked metrics show "Unlimited" when no cap exists.
3. Expiration countdown is the most critical metric — watch for approaching dates.
4. OCR pages are tracked separately for processing-heavy workflows.
5. Real-time updates — no refresh needed to see current usage.

## License Counting Rules (Business Behavior)

1. **Number of Users** increases with each invited user.
2. **Number of Users** decreases when invited users are deleted or users are deactivated.
3. **Expiration Date**: when expired, all tenant users are frozen and cannot access the tenant.
4. **Number of Documents** increases by direct upload or file upload through records.
5. **Number of Documents** decreases only on permanent delete (not soft delete/trash).
6. **Number of Pages** follows document behavior (increase with new pages, decrease with permanent delete).
7. **Number of Records** increases when new records are created and decreases on permanent delete.
8. **Number of Processes** increases when a new workflow is added and decreases when deleted.
9. **Workflow edits create versions, but those versions are not counted as new workflows in license metrics.**
10. **Number of Instances** increases every time any workflow runs.
11. **Number of Templates** increases when templates are created and decreases when templates are deleted.
12. **Number of Generated Documents** counts documents generated from templates.

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step interpretation of each section and metric.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual lifecycles for storage, users, workflow, and activation.

---

Version: live UI exploration  
Last Updated: 2026-06-21