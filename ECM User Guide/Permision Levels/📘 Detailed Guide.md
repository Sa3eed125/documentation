---
id: permission-levels-detailed
title: "🔐 Permission Levels - Detailed Guide"
sidebar_label: "📘 Detailed Guide"
sidebar_position: 2
name: "🔐 Permission Levels Detailed Guide"
slug: /permission-levels/detailed
tags: [permission-levels, create-permission-level, security, q-and-a]
description: Step-by-step guide for configuring permission levels across all ECM modules.
---

# 🔐 Permission Levels - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Configure permission levels accurately and safely across module boundaries.
:::

## 1) Permission Levels Main Screen

Main controls:

- Type switcher (4 buttons):
  - Application Permission Levels
  - Repository Permission Levels
  - Content Type Permission Levels
  - Workflow Permission Levels
- Refresh
- Create Permission Levels
- Grid (name, description, actions)
- Filters + pagination

## 2) Create Flow (Shared)

For any level type:

1. Select level type from top switcher.
2. Click Create Permission Levels.
3. Enter Permission Level Name.
4. Enter Description.
5. Configure actions/scope.
6. Click Save.

## 3) Application Permission Levels - Create + Expand All

Observed controls:

- Select All
- Expand All

Expandable domains:

1. Content Security
2. System Security
3. Administration & Configuration

Examples of available actions discovered after expansion:

- Permission modules: View List, Assign Users, Create Permissions, Update Permissions, Delete
- Users Management: View List, Invite Users, Delete Active User, Deactivate User, Update User Details
- Groups Management: View List, Assign Users and Groups, Create Group, Update Group, Delete
- Admin modules: Resources, Decision Models, Templates, System Configuration, Reports, Workflow, RMS Mapping, etc.

## 4) Repository Permission Levels - Create + Expand All

Section:

- Repository

Discovered options include:

1. Object Management:
- View Objects (Including Metadata)
- Create Object (Includes Copy)
- Delete (Includes Move, Rename)
- Manage Permissions
- Break Inheritance
- Favorite/Unfavorite

2. File Management:
- Read Content
- Download Content
- Download Folder
- Edit Content (includes checkout/checkin)
- View History (including metadata)
- View Renditions
- Add Manual Renditions
- Cancel check-out

3. Annotation:
- Create / Update / Delete / Resolve Annotation

4. Redact:
- Create / Update / Delete / Resolve Redact

Assignment rule:
- Repository built-in permission levels and repository custom-created levels are assigned from the Repository page context (folder/object permissions), not from the Permission Levels page.

## 5) Content Type Permission Levels - Create + Expand All

Allowed actions:

- View
- Update
- Delete

Scope options:

1. All Content Types
2. All content types I have access to
3. All content types except selected ones
4. Specific Content Types

## 6) Workflow Permission Levels - Create + Expand All

Allowed actions:

- View
- Start Workflow
- Deploy Workflow
- Update
- Delete
- Manage Workflow Progress -Operate-
- Disable/Enable Workflow

Scope options:

1. All Workflows
2. All workflows I can access
3. All workflows except selected ones
4. Specific Workflow

## 7) Operational Notes

1. Create forms are strict about required name field.
2. Expand All is critical to review complete permissions before saving.
3. Scope selectors define where the permissions apply.

## 8) Questions And Answers

1. Q: Why do we have 4 permission level types?
A: To separate security by module boundary (Application, Repository, Content Type, Workflow).

2. Q: When should I use Application vs Repository levels?
A: Application covers broad admin/system capabilities, while Repository targets file/object operations.

3. Q: Why use Expand All before saving?
A: It reveals hidden nested actions and prevents missing a critical permission.

4. Q: Can I limit permissions to specific workflows/content types?
A: Yes, Workflow and Content Type levels provide scope selectors including specific-only options.

5. Q: Can groups receive permission levels?
A: Yes, groups can be assigned permission levels similar to users.

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Concepts, types, and assignment model.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual selection, scope, and assignment models.
- [🛠 Use Cases](%F0%9F%9B%A0%20Use%20Cases.md) - Practical scenario-based permission setups.

---

Version: live UI exploration (Create + Expand All)  
Last Updated: 2026-06-21