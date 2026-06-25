---
id: manage-license-detailed
title: "📜 Manage License - Detailed Guide"
sidebar_label: "📘 Detailed Guide"
sidebar_position: 2
name: "📜 Manage License Detailed Guide"
slug: /manage-license/detailed
tags: [manage-license, storage, users, expiration, drive, workflow, licensing]
description: Step-by-step guide to interpret and manage all license tracking metrics.
---

# 📜 Manage License - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Operate the Manage License dashboard and respond to capacity/expiration signals.
:::

## 1) Manage License Page Overview

Route: `/configuration/manage-license`

Single-page monitoring dashboard for all license-based resource tracking. All metrics are read-only and update in real-time.

---

## 2) Storage Section

### Purpose

Track total storage consumption against allocated quota.

### Fields

| Field | Display Type | Example | Description |
|-------|--------------|---------|-------------|
| Storage (Capacity) | Progress bar + GB heading | 0.005 / 0.193 GBs | Current used / Total allocated in gigabytes |

### Notes

- Progress bar fills proportionally as usage increases.
- Visual indicator turns warning color as threshold approaches.
- Measured in GB (gigabytes).

---

## 3) Users and Expiration Section

### Purpose

Track licensed user seats and license expiration timeline.

### Fields

#### Users Tracking

| Field | Display Type | Example | Description |
|-------|--------------|---------|-------------|
| Number of Users | Progress bar + count | 2 / 5 Users | Active users / Licensed seats |

#### Expiration Tracking

| Field | Display Type | Example | Description |
|-------|--------------|---------|-------------|
| Expiration Date | Progress bar + dates + countdown | 2026-05-01 → 2026-05-31 (30 / 30 Days) | License period start → end, with days remaining |

### Notes

- Number of Users increases with each invited user.
- Number of Users decreases when invited users are deleted.
- Number of Users decreases when users are deactivated.
- Expiration countdown shown as days remaining / total days in license period.
- Calendar dates clarify when license expires.
- Critical for renewal planning.
- On expiration, all tenant users are frozen and cannot access the tenant until renewal/activation.

---

## 4) Drive Section

### Purpose

Monitor repository content volume and OCR processing metrics.

### Fields

| Field | Type | Example | Description |
|-------|------|---------|-------------|
| Number of Documents | Display | 29 / Unlimited Documents | Total documents stored |
| Number of Records | Display | Variable / Unlimited Records | Total records created from content types |
| Number of Pages | Display | 95 / Unlimited Pages | Total pages scanned/uploaded |
| Number of OCR Pages | Display | 0 / Unlimited OCR Extraction Pages | Pages processed by OCR extraction |

### Notes

- Number of Documents increases by direct upload or file upload through records.
- Number of Documents decreases only on permanent delete (not soft delete/trash).
- Number of Pages follows document behavior (increase with new pages, decrease with permanent delete).
- Number of Records increases when new records are created.
- Number of Records decreases on permanent delete.
- OCR Pages = count of pages where text extraction was performed.
- "Unlimited" indicates no cap on this resource in current license.

---

## 5) Workflow Section

### Purpose

Track workflow engine utilization including definitions, executions, and task assignments.

### Fields

| Field | Type | Example | Description |
|-------|------|---------|-------------|
| Number of Processes | Display | 64 / Unlimited Process Definitions | Deployed workflow definitions |
| Number of Instances | Display | 50 / Unlimited Process Instances | Running/completed workflow instances |
| Number of User Tasks | Display | 24 / Unlimited User Tasks | Active user task assignments |

### Notes

- Number of Processes increases when a new workflow is added.
- Number of Processes decreases when a workflow is deleted.
- Workflow edits create new versions, but versions are not counted as new workflows in license counting.
- Number of Instances increases every time any workflow runs.
- User Tasks = active tasks awaiting user action.
- All three metrics update in real-time as workflows run.

---

## 6) Template Metrics (Tenant-Dependent)

### Purpose

Track template creation volume and generated output documents.

### Fields

| Field | Type | Counting Rule |
|-------|------|---------------|
| Number of Templates | Counter | Increases with new template creation, decreases when templates are deleted |
| Number of Generated Documents | Counter | Counts documents generated from templates |

### Notes

- These counters are used to monitor template-driven usage patterns.
- Generated document volume helps estimate operational load from template automation.

---

## 7) Manage License Section

### Purpose

Store and manage the license activation key.

### Fields

| Field | Type | State | Purpose |
|-------|------|-------|---------|
| License Key | Text input | Disabled (read-only) | Displays encrypted license credential |
| Activate Button | Button | Enabled | Triggers license activation/renewal |

### Actions

- **Activate**: Click to apply a new license or renew an existing license with an updated key.

### Notes

- License Key is encrypted and cannot be edited directly in this interface.
- To apply a new license, obtain the key from vendor and click Activate.
- Activation typically requires admin authorization.

---

## 8) Operational Alerts

Watch for these conditions:

1. **Storage > 80%**: Plan storage upgrades or cleanup.
2. **Users count approaching limit**: Request additional licenses.
3. **Expiration < 30 days**: Schedule license renewal.
4. **OCR Pages approaching limit**: Monitor document processing workflows.
5. **Workflow instances > 70% of limit**: Review workflow efficiency.

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Metric definitions and business counting rules.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual model of tracking and activation flows.

---

Version: live UI exploration  
Last Updated: 2026-06-21