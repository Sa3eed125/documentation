---
id: operate-knowledge-overview
title: "🧠 Operate - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "🧠 Operate Knowledge Overview"
slug: /operate/overview
tags: [operate, monitoring, debugging, workflow, bpmn, process-instances]
description: Conceptual overview of Operate for runtime monitoring and incident triage.
---

# 🧠 Operate - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview
**Goal**: Understand Operate purpose, layout, and investigation flow before deep usage.
:::

## What Operate Is

Operate is Contellect ECM's runtime monitoring page for workflow execution. It is used to search process instances, inspect their runtime state, and debug incidents using a BPMN visualizer and instance grid.

Live page observed at:
- `/configuration/operate`
- Breadcrumb: `Configuration > Operate`
- Product footer version shown: `v7.49.0`

## Main Goal

Operate helps teams answer four core questions quickly:

1. Which process instances are running now?
2. Which instances failed (incident) and where?
3. Which instances completed or were canceled?
4. What exact execution path is shown in BPMN for the selected process?

## Pre-request (Prerequisite)

Before using Operate effectively, there must be at least one workflow instance running or already executed.

- If no workflow instances exist yet, Operate grid results will be empty.
- Best practice: run a known process first (for example `Create a record of QC`) and then open Operate.
- For troubleshooting flows, ensure at least one `Incident` instance exists to test failure handling.

## Core Layout (Observed)

Operate is split into 3 main panels:

1. Left panel: filter controls
2. Center panel: BPMN canvas (`Powered by bpmn.io`) with minimap action
3. Bottom panel: instance data table with paging controls

## Filter Model (Observed)

The left filter panel includes:

- `Process name` selector
- `Process Version` selector (disabled until process is chosen)
- `Start Date Range`:
   - `From`
   - `To`
- `End Date Range`:
   - `From`
   - `To`
- Status tree with grouped checkboxes:
   - `Running instance`
      - `Active`
      - `Incident`
   - `Finished instance`
      - `Completed`
      - `Cancel`
- Actions:
   - `Clear Filter`
   - `Filter`

## Instance Grid (Observed)

The bottom table headers are:

- `State`
- `Process ID`
- `Instance Key`
- `Instance Code`
- `Start Date`
- `End Date`
- `Actions`

The grid uses pagination and an items-per-page selector (default shown as `5`).

## Operational Use Cases

Operate is most useful in these cases:

1. Incident triage
2. Daily execution monitoring
3. Process trend checking by date ranges
4. Runtime verification after deploying a workflow change

## Practical Baseline Flow

Basic monitoring flow:

1. Select `Process name`
2. Set date windows (`Start Date Range`, `End Date Range`) if needed
3. Choose statuses in the instance tree (for example `Incident` only)
4. Click `Filter`
5. Open target row in `Actions`
6. Review BPMN panel and runtime details

## Status Semantics

- `Active`: currently running instance
- `Incident`: execution failed and requires investigation
- `Completed`: normal successful end
- `Cancel`: terminated before normal completion

## Notes For Admins And QA

- Use `Incident` + narrow date windows first for faster issue isolation.
- Keep `Clear Filter` as reset before switching between unrelated investigations.
- After workflow updates, compare old and new behavior using `Process Version`.

## Failed Instance Handling (Quick Reference)

When a workflow fails in an instance, the Process Instance Monitor actions should include:

- `Refresh`: reload instance status and latest runtime values.
- `Resolve`: mark or close incident after corrective action.
- `Retry`: re-run the failed instance path or operation.
- `Cancel`: terminate the instance and stop further execution.

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Field-by-field behavior and operational steps.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual process flows for monitoring and troubleshooting.

---

Version: `v7.49.0+`  
Last Updated: `2026-06-11`
