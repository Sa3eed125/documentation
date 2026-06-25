---
id: permission-levels-knowledge-overview
title: "🔐 Permission Levels - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "🔐 Permission Levels Knowledge Overview"
slug: /permission-levels/overview
tags: [permission-levels, application, repository, content-type, workflow]
description: Understand permission level types, scopes, and assignment governance in ECM.
---

# 🔐 Permission Levels - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Understand permission level types, scope behavior, and assignment model.
:::

## What Permission Levels Do

Permission Levels define what users/groups can do across ECM modules. They are reusable security profiles that can be assigned to users and groups.

Observed entry path:

- Configuration > Permission Levels
- Security area route family: `/configuration/manage-security/*`

## The 4 Permission Level Types

1. Application Permission Levels
2. Repository Permission Levels
3. Content Type Permission Levels
4. Workflow Permission Levels

## Main Screen Pattern

All 4 types share the same management pattern:

1. Switch between level types using top buttons.
2. View existing permission levels in a grid (name, description, actions).
3. Click Create Permission Levels.
4. Fill Name + Description.
5. Configure allowed actions/scope.
6. Save.

## Create Screen Pattern

Create screens use one of two models:

1. Tree model with Select All + Expand All (Application).
2. Flat action list + scope radio options (Repository, Content Type, Workflow).

## Application Permission Levels (High-Level)

Application-level permissions are broad and include grouped domains:

1. Content Security
2. System Security
3. Administration & Configuration

Examples of options inside these domains:

- Permissions management actions (view/create/update/delete)
- Users and Groups management actions
- Resources, templates, decision model, workflow management actions
- System configuration and reporting actions

## Repository Permission Levels (High-Level)

Repository-level permissions are object/file centric, including:

- Object lifecycle actions (view/create/delete/move/rename)
- Permission/inheritance management
- File content actions (read/download/edit/check-in/check-out/history/renditions)
- Annotation and redaction actions

## Content Type Permission Levels (High-Level)

Content-type permissions include:

- Allowed actions: View, Update, Delete
- Scope selector for content types:
  - All Content Types
  - All content types I have access to
  - All content types except selected ones
  - Specific Content Types

## Workflow Permission Levels (High-Level)

Workflow permissions include:

- Allowed actions: View, Start Workflow, Deploy Workflow, Update, Delete
- Operate-related action: Manage Workflow Progress -Operate-
- Toggle action: Disable/Enable Workflow
- Scope selector for workflows:
  - All Workflows
  - All workflows I can access
  - All workflows except selected ones
  - Specific Workflow

## Assignment And Governance

Permission Levels can be assigned to:

1. Users
2. Groups

This enables role-based security management and easier operational control.

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step configuration and operational notes.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual permission architecture and flow models.
- [🛠 Use Cases](%F0%9F%9B%A0%20Use%20Cases.md) - Real-world access-control scenarios.

---

Version: live UI exploration (Create + Expand All)  
Last Updated: 2026-06-21