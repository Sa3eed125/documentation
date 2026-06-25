---
id: operate-detailed
title: "📘 Operate - Detailed Guide"
sidebar_label: "📘 Detailed Guide"
sidebar_position: 2
name: "📘 Operate Detailed Guide"
slug: /operate/detailed
tags: [operate, detailed, filters, bpmn, instances]
description: Step-by-step operating guide for filters, BPMN view, and incident handling.
---

# 📘 Operate - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide
**Goal**: Execute practical monitoring, filtering, and incident-handling steps in Operate.
:::

This file provides the detailed page behavior based on live UI exploration and your reference notes.

## 1) Navigation And Entry

- Main menu path: `Configuration`
- Route: `/configuration/operate`
- Breadcrumb observed: `Configuration > Operate`

### Pre-request (Prerequisite)

Operate requires workflow runtime data to monitor. Before opening Operate for analysis:

1. Run at least one workflow instance.
2. Confirm the instance is in `Active`, `Incident`, `Completed`, or `Cancel` state.
3. Then open Operate and filter by process/date.

## 2) Left Panel: Filter Area

### 2.1 Process Name

- Field label: `Process name`
- Purpose: scope the query to one workflow definition.
- Expected behavior: once a process is selected, `Process Version` becomes usable.

### 2.2 Process Version

- Field label: `Process Version`
- Purpose: inspect runtime by workflow version.
- Observed behavior: disabled until process selection exists.

### 2.3 Date Filters

Operate contains two date groups:

1. `Start Date Range`
- `From`
- `To`

2. `End Date Range`
- `From`
- `To`

Use case guidance:

- Investigating today's incidents: set both ranges around today's window.
- Comparing historical runs: widen to weekly/monthly windows.

### 2.4 State Tree

Status selection is grouped in a checkbox tree:

- `Running instance`
  - `Active`
  - `Incident`
- `Finished instance`
  - `Completed`
  - `Cancel`

Meaning:

- `Active`: still executing.
- `Incident`: failed and should be investigated first.
- `Completed`: successful finish.
- `Cancel`: terminated before successful end.

### 2.5 Filter Actions

Buttons:

- `Clear Filter`: reset all current criteria.
- `Filter`: execute query with selected criteria.

Recommended sequence:

1. Clear old criteria.
2. Select process and statuses.
3. Set date windows.
4. Run Filter.

## 3) Center Panel: BPMN Viewer

Observed elements:

- BPMN canvas with `Powered by bpmn.io` indicator.
- Minimap action: `Open minimap`.

Expected usage:

- Select an instance from table to inspect its process path.
- Use minimap for large diagrams.
- Correlate failed states (`Incident`) with BPMN stage context.

## 4) Bottom Panel: Instance Grid

### 4.1 Columns (Observed)

- `State`
- `Process ID`
- `Instance Key`
- `Instance Code`
- `Start Date`
- `End Date`
- `Actions`

### 4.2 Paging And Volume

- Grid has paginator controls.
- Items-per-page selector shown with default `5`.

### 4.3 Diagnostic Pattern

Use this high-signal flow:

1. Filter for `Incident`.
2. Sort/read most recent rows.
3. Open row from `Actions`.
4. Inspect BPMN context and runtime metadata.
5. Record `Process ID` and `Instance Key` for traceability.

##### Process Instance Monitor

If workflow fails in any instance, use these options:

- `Refresh`: reload latest instance state and UI values.
- `Resolve`: close/resolve incident after applying fix.
- `Retry`: execute the instance again after corrective action.
- `Cancel`: stop and terminate the current failed execution.

## 5) Practical Example: QC Monitoring

Example target process: `Create a record of QC`

Steps:

1. Select process name.
2. Limit date windows around test execution time.
3. Keep `Incident` and/or `Completed` checked depending on verification goal.
4. Run `Filter`.
5. Open matching row and verify timeline outcome.

## 6) Troubleshooting Focus

For production support and QA triage:

1. Start with `Incident` only.
2. Keep date range narrow.
3. Capture keys:
- Process ID
- Instance Key
- Start/End timestamps
4. Expand to `Completed` only when validating post-fix runs.

## 7) Alignment With Your Reference

Covered reference points in this file:

- Filter panel behavior and scope
- Version awareness
- Date windows
- State model (`Active`, `Incident`, `Completed`, `Cancel`)
- Grid-driven investigation flow
- Practical QC example path

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Core concepts and page purpose.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual flow references for incidents and validation.

---

Version: `v7.49.0+`  
Last Updated: `2026-06-11`
