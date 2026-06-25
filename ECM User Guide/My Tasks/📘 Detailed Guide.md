---
id: my-tasks-detailed
title: "📘 My Tasks - Detailed Guide"
sidebar_label: "📘 Detailed Guide"
sidebar_position: 2
name: "📘 My Tasks Detailed Guide"
slug: /my-tasks/detailed
tags: [my-tasks, ui, start-new-task, claim-task, complete-task]
description: Step-by-step operational guide for My Tasks inbox, claim flow, and completion.
---

# 📘 My Tasks - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide
**Goal**: Execute My Tasks operations from start, claim, and complete flows with troubleshooting.
:::

This file provides detailed behavior and usage patterns based on docs/my-tasks sources.

## 1) Page Scope And Access

Known path in source material:

- /tasks

Note from current environment check:

- Direct /tasks may return Not Found in some deployments/versions.
- Use the My Tasks navigation entry in the top menu when route behavior differs by environment.

## 2) UI Structure

### 2.1 Toolbar

Main actions:

- Refresh: reload latest tasks.
- Start New Task: open process selection dialog.

### 2.2 Table Columns

Expected columns from source docs:

- #
- Name
- Process Code
- Created At
- Completed At
- Assignee
- Status

### 2.3 Task Side Panel

When a task row is opened, side panel shows task form and completion action.

## 3) Start New Task Flow

Steps:

1. Click Start New Task.
2. Select workflow from searchable dropdown.
3. Start the process.
4. If a User Task is reached, task appears for assignee(s).

Selector references from source knowledge base:

- Start New Task button: button:has-text("Start New Task")
- Workflow dropdown: kendo-dropdownlist[valuefield="id"]
- Task sidebar container: [data-testid="sidebar-container"]

## 4) Claim Task Flow

Use this when task assignment is multi-user or group:

1. Open task from list.
2. Click Claim Task.
3. Ownership moves to claimer.
4. Other eligible users can no longer claim the same task.

## 5) Complete Task Flow

1. Open assigned/claimed task.
2. Fill required form fields.
3. Click Complete Task (or equivalent action label by configuration).
4. Workflow resumes automatically from next node.

## 6) Assignment And Notification Behavior

| Assignment | Notification | Claim | Runtime behavior |
|---|---|---|---|
| Single user | Direct user notification | Not required | User starts directly |
| Multi users | All users notified | Required | First claimer proceeds |
| Group | Group members notified | Required | First claimer proceeds |

## 7) Task Node Design Rules (Admin)

To make My Tasks work correctly:

1. Use User Task (Contellect User Task) in workflow design.
2. Configure assignee correctly.
3. Link appropriate task form/content type.
4. Set output variable when downstream gateway/service needs submitted values.
5. Activate workflow after saving.

## 8) Multiple User Tasks

Supported patterns:

- Sequential: task B appears only after task A completion.
- Parallel: multiple tasks appear at once and process waits for required joins.

## 9) Troubleshooting

### Task not visible

Check:

1. Workflow is activated.
2. Process instance actually reached User Task node.
3. Assignee/group mapping is correct.
4. User permission is valid.
5. Filter/refresh state is current.

### Cannot start from My Tasks or Workflow page

Likely reason:

- Start Workflow with a node is enabled in start node settings.

Action:

- Start from My Workspace with an existing record/folder.

### Claim button missing

Possible reasons:

- Task already claimed.
- Task is direct single-user assignment.

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Core concepts and assignment model.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual flow references.

---

Version: v7.50-style reference aligned to current source docs  
Last Updated: 2026-06-11
