---
id: my-tasks-knowledge-overview
title: "🧠 My Tasks - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "🧠 My Tasks Knowledge Overview"
slug: /my-tasks/overview
tags: [my-tasks, workflow, user-task, claim, assignee]
description: Conceptual guide to My Tasks lifecycle, assignment modes, and status semantics.
---

# 🧠 My Tasks - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview
**Goal**: Understand how My Tasks works, when tasks are created, and how execution resumes.
:::

## What My Tasks Is

My Tasks is the workflow inbox for human actions in Contellect ECM. When a workflow reaches a User Task node, a task is created and appears for the configured assignee(s).

Primary source set used for this guide:

- docs/my-tasks/knowledge-base.md
- docs/my-tasks/My Tasks-User Manual.md
- docs/my-tasks/02-guidde-speaker-scripts.md

## Purpose

My Tasks is used to:

1. View pending/assigned workflow tasks.
2. Claim tasks when assignment is multi-user or group-based.
3. Open and complete assigned tasks to resume workflow execution.
4. Start a new workflow from the task area (when start-node rules allow it).

## Main Concepts

### Task Origin

Tasks appear when a running workflow reaches a User Task node.

### Workflow Pause/Resume

- Workflow pauses at User Task.
- User completes task form.
- Workflow resumes automatically to next node.

### Assignment Modes

| Assignment | Who sees task | Claim required | Who completes |
|---|---|---|---|
| Single User | Specific user | No | That user |
| Multiple Users | All listed users | Yes | First claimer |
| Group | Group members | Yes | First claimer |

## Task Status Model

| Status | Meaning |
|---|---|
| Pending | Created and waiting for action |
| In Progress | Opened and being worked on |
| Claimed | Claimed by a user in multi/group mode |
| Completed | Submitted and workflow resumed |
| Cancelled | Process stopped before completion |

## Two Ways To Start A Workflow Related To My Tasks

1. My Tasks > Start New Task
2. Configuration > Manage Workflow > Start icon

Constraint:

Both methods require a start node that does not enforce Start Workflow with a node. If that option is enabled, start must come from My Workspace on an existing record/folder.

## Start Node Rules (Important)

### Normal Start Node

- Starts directly.
- No form required by default.
- Can be started from task/workflow contexts when activated and permitted.

### Start Node With File Content Type

Key options:

1. Show the form on workflow start
- Checked: start form opens at trigger time.
- Unchecked: no form shown at launch.

2. Start Workflow with a node
- Checked: requires existing record/folder and must start from workspace context.
- Unchecked: can be started as standalone process.

## Operational Pre-Request

Before expecting tasks in My Tasks:

1. Workflow is activated.
2. User Task node is configured with valid assignee and form.
3. User has permission to start/see the workflow.
4. A process instance has actually reached a User Task node.

## Practical Summary

- Use My Tasks for human decision points.
- Use claim flow for shared ownership assignments.
- Design User Task forms and output variables clearly so downstream logic can branch correctly.

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Page behavior, claim flow, and completion steps.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Lifecycle and decision maps.

---

Version: v7.50-style reference aligned to current source docs  
Last Updated: 2026-06-11
