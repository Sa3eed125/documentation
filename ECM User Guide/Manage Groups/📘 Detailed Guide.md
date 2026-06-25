---
id: manage-groups-detailed
title: "👥 Manage Groups - Detailed Guide"
sidebar_label: "📘 Detailed Guide"
sidebar_position: 2
name: "👥 Manage Groups Detailed Guide"
slug: /manage-groups/detailed
tags: [manage-groups, create-group, edit-group, permission-levels, user-tasks]
description: Step-by-step guide for creating, editing, assigning, and deleting groups.
---

# 👥 Manage Groups - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Create and manage groups, assign permissions, and safely delete groups when needed.
:::

## 1) Manage Groups Main Screen

Main controls:

- Refresh
- Create Group
- Grid columns: name, description, actions
- Filter row (name/description)
- Pagination

Actions per row:

- View members/assignees
- Edit
- Delete (available for custom groups only when constraints are satisfied)

## 2) Create Group Flow

### Step-by-step

1. Open Configuration > Groups.
2. Click Create Group.
3. Enter Group Name.
4. Enter optional Description.
5. In Assignee section, choose members:

- Users tab: search and assign users.
- Groups tab: search and assign groups.

6. Click Create Group.

Important observation:

- Create Group screen focuses on identity + membership.
- Permission level assignment is managed from Edit Group (post-creation stage).

## 3) Edit Group Flow

From Manage Groups list, click Edit on a custom group.

Editable areas:

1. Name
2. Description
3. Permission Level section
4. Assignee section (Users tab, Groups tab)

Buttons:

- Update Group
- Cancel

## 4) Permission Level Assignment For Groups

Groups can receive permission levels just like users.

Operational effect:

- Members of that group inherit access behavior according to assigned permission model (based on tenant configuration and scope).

## 5) Group Assignment For Workflow User Tasks

Groups can be used as user-task assignees in workflow design/runtime.

Why this matters:

1. Team-based task routing.
2. Reduced maintenance when users change.
3. Consistent ownership model across workflows.

## 6) Deletion Rules And Safe Removal Process

### Hard constraints (as requested)

1. You cannot delete a group while it contains any assigned user.
2. You cannot delete a group while it contains any assigned child group.
3. If the group has permission-level dependencies, remove them first.
4. If the group has data/assignment dependencies linked to those permissions, remove them first.

### Recommended deletion sequence

1. Open Edit Group.
2. Unassign all users.
3. Unassign all nested groups.
4. Remove permission-level and dependent assignments.
5. Save/update group.
6. Return to list and delete group.

## 7) System Groups Governance Notes

System groups like `administrators` and `everyone` are foundational and should not be treated as normal disposable groups.

## 8) Practical Admin Checklist

Before creating:

1. Define naming convention (Team/Dept/Role).
2. Decide if group will be used in workflow user tasks.
3. Decide required permission level model.

Before deleting:

1. Verify users count is zero.
2. Verify nested groups count is zero.
3. Verify permission-level/dependent assignments are removed.
4. Perform deletion.

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Core concepts, group types, and governance model.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual flows for lifecycle and deletion rules.

---

Version: live UI exploration + tenant rules provided by user  
Last Updated: 2026-06-21