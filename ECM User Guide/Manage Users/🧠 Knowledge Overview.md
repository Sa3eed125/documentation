---
id: manage-users-knowledge-overview
title: "👥 Manage Users - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "👥 Manage Users Knowledge Overview"
slug: /manage-users/overview
tags: [manage-users, invitations, groups, permission-levels, rms]
description: Understand user lifecycle, invitations, groups, and permission-level governance.
---

# 👥 Manage Users - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Understand how Manage Users controls invitations, status lifecycle, and access governance.
:::

## What Manage Users Does

Manage Users is the central feature for inviting people, activating/deactivating access, assigning RMS roles (when RMS is integrated), assigning Groups, and assigning Permission Levels (PL).

Observed entry path:

- Configuration > Manage Users
- User list route: `/configuration/users-list`

## Why This Feature Is Important

With Manage Users, tenant admins can:

1. Invite one or many users in one action.
2. Control who can access the platform.
3. Assign user roles and permissions by business responsibility.
4. Move users through status lifecycle (Invited, Active, Inactive).

## Invitation Basics

The invite flow supports multiple emails:

1. Click Invite Users.
2. In Users Emails input, enter one email and press Enter to add it.
3. Repeat to add more emails.
4. Send Invitation once the list is complete.

## RMS Role Assignment During Invitation

If tenant is integrated with RMS, invite flow can assign an RMS role for each invited user:

- Administrator
- Client
- Packer
- Driver

## User Status Lifecycle

### Invited

User appears as Invited after invitation is sent.

### Active

User becomes Active after opening invitation link, verifying account, and setting name/password.

### Inactive

If deactivated, user cannot access website until activated again.

## What Admins Can Manage Per User

1. Groups (system groups or custom groups).
2. Permission Levels (PL).
3. RMS role (if RMS exists in tenant).
4. Activation state.

## Group And Permission Model

Users can be placed in:

- System groups (Everyone by default, Administrator)
- Custom groups created by tenant

Permission Levels can define access scopes such as:

- Application
- Repository
- Workflow
- Content Types
- RMS Roles (if integrated)

Actions can include:

- View
- Create
- Edit
- Delete

## Key Rules You Requested

1. Invited users can be deleted.
2. Active users cannot be deleted.
3. Deactivated users cannot log in until reactivated.

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step admin operations.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Lifecycle and access-flow visuals.

---

Version: live UI + tenant rules provided by user  
Last Updated: 2026-06-21
