---
id: permission-levels-use-cases
title: "🔐 Permission Levels - Use Cases"
sidebar_label: "🛠 Use Cases"
sidebar_position: 4
name: "🔐 Permission Levels Use Cases"
slug: /permission-levels/use-cases
tags: [permission-levels, use-cases, repository, workspace, content-type, workflow, security]
description: Practical permission-level scenarios for repository, workspace, workflow, and admin roles.
---

# 🔐 Permission Levels - Use Cases

:::tip 📌 At a Glance
**Document Type**: Using Guide  
**Goal**: Apply permission levels through realistic role-based and task-based scenarios.
:::

---

## Built-In Permission Levels Reference

Before creating custom levels, understand the built-in levels available per type.

### Repository Built-In Levels

| Level | What It Does |
|-------|-------------|
| **Browse** | View repository objects and their metadata, but can't read their content |
| **Read** | Able to read files and associated content |
| **Write** | Add, edit, and delete folders and files |
| **Full** | Full Control over the repository |

:::note Assignment Rule (Repository Levels)
Repository built-in levels and repository custom-created levels are assigned from the **Repository page** (folder/object permissions context), not from the **Permission Levels** page.
:::

### Application Built-In Levels

| Level | What It Does |
|-------|-------------|
| **Write** | Add resources, DMN and templates, view users and groups management |
| **Build** | Content types, add and edit resources, DMN and templates, invite users and groups management |
| **Full** | Full Control over the system |

---

## Use Case 1 — Access A Specific Folder In Repository

### Goal

A user needs to see a specific folder inside the repository and view records inside it, without access to other folders or modules.

### Required Permissions — 3 Levels

#### Level 1: Application Permission Level

The user must have an Application Permission Level that grants access to the repository page.

| Section | Permission |
|---------|-----------|
| Administration & Configuration > Manage Pages Access | View Repository |

Without this, the user cannot even navigate to the Repository in the app menu.

#### Level 2: Repository Permission Level

The user must have a Repository Permission Level assigned on the specific folder (or inherited from parent).

| Group | Permission |
|-------|-----------|
| Object Management | View Objects (Including Metadata) |
| File Management | Read Content |

Use the built-in **Read** level for standard read-only access, or create a custom one with only the needed actions.

Important assignment note:
- Both built-in and custom repository levels are applied from the Repository page permission panel, not directly from Permission Levels management.

#### Level 3: Content Type Permission Level

If records inside that folder are based on a specific Content Type, the user needs a Content Type Permission Level for it.

| Action | Scope |
|--------|-------|
| View | Specific Content Types → select the relevant one |

Without this, the user sees the folder and files but cannot open or interact with records.

### Setup Sequence

1. Create (or reuse) an Application PL with "View Repository" from Manage Pages Access.
2. Create (or reuse) a Repository PL with View Objects + Read Content.
3. Assign Repository PL on the target folder (not globally).
4. Create (or reuse) a Content Type PL with View scoped to the specific Content Type.
5. Assign all three PLs to the user or their group.

---

## Use Case 2 — Access Workspace, Create A Record, Then See It In Repository

### Goal

A user needs to:

1. Open My Workspace.
2. See and work inside Workspaces.
3. Create a new record using a Content Type.
4. Navigate to My Repository and see the created record.
5. Have workflow visibility for associated workflows.

### Required Permissions — Combined Levels

#### Application Permission Level

| Section | Permission |
|---------|-----------|
| Administration & Configuration > Manage Pages Access | View My Workspace |
| Administration & Configuration > Manage Pages Access | View Repository |
| Administration & Configuration > Manage Workflow | Create Workflow |
| Administration & Configuration > Resources > View List (including Filter & Sort) | View List |
| Administration & Configuration > Content types | Create (including: Clone & view logs) |

#### Repository Permission Level

| Group | Permission |
|-------|-----------|
| Object Management | View Objects (Including Metadata) |
| File Management | Read Content |

#### Content Type Permission Level

| Action | Scope |
|--------|-------|
| View | All Content Types (or specific ones used in workspace) |

#### Workflow Permission Level

| Action | Scope |
|--------|-------|
| View | All Workflows (or specific ones tied to the content type) |

### Setup Sequence

1. Create an Application PL with:
   - View My Workspace + View Repository (page access)
   - Content types: Create (including Clone & view logs)
   - Resources: View List
   - Manage Workflow: Create Workflow
2. Create a Repository PL with View Objects + Read Content.
3. Create a Content Type PL scoped to the content types used in workspace.
4. Create a Workflow PL scoped to relevant workflows.
5. Assign all PLs to the user or group.

---

## Use Case 3 — Read-Only Reviewer (Browse Only)

### Goal

A reviewer needs to see folders and file metadata in repository without opening any files.

### Required Permissions

| Type | Level / Action |
|------|---------------|
| Application PL | View Repository (Manage Pages Access) |
| Repository PL | Built-in **Browse** level |
| Content Type PL | View → All content types I have access to |

### Notes

Browse is the most restrictive built-in repository level. File content cannot be opened, only names and metadata are visible.

---

## Use Case 4 — Document Author (Write Access)

### Goal

A document author needs to create, upload, and edit files inside a specific repository folder.

### Required Permissions

| Type | Level / Action |
|------|---------------|
| Application PL | View Repository + View My Workspace |
| Repository PL | Built-in **Write** level (on the folder) |
| Content Type PL | View + Update → specific content type |

### Notes

Write level includes add, edit, delete of folders and files. Combine with specific Content Type PL to limit record interaction to authorized types.

---

## Use Case 5 — Workflow Operator (Operate Only)

### Goal

A process operator needs to monitor, retry, and resolve failed workflow instances via the Operate module, without accessing repository or configuration.

### Required Permissions

| Type | Level / Action |
|------|---------------|
| Application PL | Manage Pages Access → View Dashboard (optional) |
| Workflow PL | Manage Workflow Progress -Operate- → All Workflows |

### Notes

This user should not have Start Workflow or Deploy Workflow unless explicitly authorized.

---

## Use Case 6 — Content Type Admin (Build Configuration)

### Goal

A configuration admin needs to create and manage content types, templates, and decision models, without user management access.

### Required Permissions

| Type | Level / Action |
|------|---------------|
| Application PL | Content types: Create (Clone & view logs) |
| Application PL | Resources: View List, Create, Update, Delete |
| Application PL | Mange Decision Model: View List, Create, Update, Delete |
| Application PL | Mange Template: View List, Create, Update, Delete |

Use the built-in **Build** Application PL as the starting point for this role.

---

## Use Case 7 — User Manager (HR / Admin)

### Goal

An HR admin needs to invite users, deactivate users, and manage group memberships, without access to content types or repository.

### Required Permissions

| Type | Level / Action |
|------|---------------|
| Application PL | Users Management: View List, Invite Users, Deactivate User |
| Application PL | Groups Management: View List, Assign Users and Groups, Create Group, Update Group |

### Notes

Do not grant Delete Active User unless that is an explicit organizational requirement.

---

## Summary Matrix

| Use Case | App PL | Repo PL | CT PL | Workflow PL |
|----------|--------|---------|-------|-------------|
| 1 — View specific folder | View Repository | Read/Custom | View (specific CT) | — |
| 2 — Workspace + Create + Repository | View Workspace + Repo + CT Create + Workflow | Read | View (all or specific) | View (scope to relevant) |
| 3 — Read-Only Reviewer | View Repository | Browse (built-in) | View | — |
| 4 — Document Author | View Repository + View Workspace | Write (built-in) | View + Update | — |
| 5 — Workflow Operator | View Dashboard | — | — | Manage Progress (Operate) |
| 6 — Content Type Admin | CT + Resources + DMN + Template | — | — | — |
| 7 — User Manager (HR) | Users + Groups Management | — | — | — |

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Core permission concepts and model.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Configuration walkthrough by module type.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual maps for architecture and assignment flow.

---

Version: live UI exploration + user-provided scenarios  
Last Updated: 2026-06-21