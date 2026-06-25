---
id: manage-groups-knowledge-overview
title: "👥 Manage Groups - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "👥 Manage Groups Knowledge Overview"
slug: /manage-groups/overview
tags: [manage-groups, users, groups, permission-levels, user-tasks]
description: Understand group types, membership model, and how groups govern access and tasks.
---

# 👥 Manage Groups - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Understand what groups are, why they matter, and how they control access and task routing.
:::

## What Manage Groups Does

Manage Groups is used to organize users into business groups, assign permission levels to groups, and reuse groups in workflow user task assignment.

Observed entry path:

- Configuration > Groups
- Route: `/configuration/manage-groups`

## Why This Feature Is Important

Groups reduce repeated user-by-user setup. Instead of assigning permissions and task ownership to each user individually, admins can:

1. Build reusable groups (for teams, departments, roles).
2. Assign group-level permission levels.
3. Use groups in workflow user tasks.
4. Control membership centrally.

## Main Screens

1. Manage Groups List
2. Create Group
3. Edit Group
4. View Members (users/groups assigned)

## Group Types

### System Groups

- `administrators`
- `everyone`

These are default/system groups and are governance anchors.

### Custom Groups

Tenant-created groups (for example, HR, Finance, Operations, Review Team).

## Assignment Model

A group can contain:

1. Users
2. Other groups

This supports hierarchical access design.

## Permission Level Model For Groups

Groups can be assigned a Permission Level, similar to users.

Typical scope-based rights inside permission levels:

- Application
- Repository
- Workflow
- Content Types

Typical actions inside each scope:

- View
- Create
- Edit
- Delete

## Group And Workflow User Tasks

Groups can be used as assignees for workflow User Tasks, allowing tasks to route to a team instead of a single person.

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step group creation, editing, and deletion.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Lifecycle, membership, and deletion-guard visuals.

## Critical Deletion Constraints

You requested the following strict rules:

1. A group cannot be deleted if it still has any assigned users.
2. A group cannot be deleted if it still has any assigned child groups.
3. If a group has assigned permission level/data assignments, all assignments must be removed before deletion.
4. To delete safely, first unassign users/groups and remove permission-level dependencies, then delete.

## Admin Best Practice

Before deleting a group:

1. Open Edit Group.
2. Remove all users.
3. Remove all nested groups.
4. Remove permission-level and related assignments.
5. Return to list and delete.

---

Version: live UI exploration + tenant rules provided by user  
Last Updated: 2026-06-21