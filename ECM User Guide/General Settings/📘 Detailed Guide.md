---
id: general-settings-detailed
title: "⚙️ General Settings - Detailed Guide"
sidebar_label: "📘 Detailed Guide"
sidebar_position: 2
name: "⚙️ General Settings Detailed Guide"
slug: /general-settings/detailed
tags: [general-settings, language, trash, versioning, barcode]
description: Step-by-step guide to configure language, content behavior, and feature toggles.
---

# ⚙️ General Settings - Detailed Guide

:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Configure General, Content, and Features tabs safely for tenant-wide behavior.
:::

## 1) General Settings Entry

Path:

- Configuration > General Settings
- Left sidebar shows 3 tabs: General, Content, Features

---

## 2) General Tab

Route: `/configuration/general-settings/general_settings`

### Language Section

- **Section heading**: Language
- **Purpose**: Define the primary language for the user interface.

| Field | Type | Current Value | Description |
|-------|------|---------------|-------------|
| System Language | Dropdown | English | Sets the default language for the application interface |

### Navigation Section

- **Section heading**: Navigation
- **Purpose**: Set the default page for users after they log in.

| Field | Type | Current Value | Description |
|-------|------|---------------|-------------|
| Landing Page | Dropdown | My Repository | The page users are redirected to after a successful login |

---

## 3) Content Tab

Route: `/configuration/general-settings/content_settings`

### Trash Management Section

- **Section heading**: Trash Management
- **Purpose**: Configure settings for deleted items and the trash bin.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Enable Auto-Delete | Toggle (ON/OFF) | ON | If enabled, items in trash are permanently deleted after a set period |
| Delete After (Days) | Number input | 1 | Number of days to keep items in trash before permanent deletion |
| Show Trash in Search Results | Toggle (ON/OFF) | ON | If enabled, search results include items in the trash |

### Version Control Section

- **Section heading**: Version Control
- **Purpose**: Manage document versions and history.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Enable Version Copy | Toggle (ON/OFF) | OFF | Allows copying content from previous versions when creating a new version |
| Max Number of Versions | Number input | 6 | Maximum number of versions stored for a single document |

---

## 4) Features Tab

Route: `/configuration/general-settings/feature_settings`

### Document Features Section

- **Section heading**: Document Features
- **Purpose**: Manage features directly related to documents.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Enable Barcode | Toggle (ON/OFF) | ON | Enables barcode generation and scanning functionalities within the application |

---

## 5) Operational Notes

1. Changes in General Settings apply tenant-wide and affect all users.
2. Auto-Delete cannot be undone once items are permanently deleted — set the delete window carefully.
3. Lowering Max Number of Versions may trigger cleanup of old versions.
4. Landing Page affects all users' login experience — coordinate with team before changing.
5. Disabling Barcode removes the feature from document views immediately.

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Concepts and impact summary.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual lifecycle and settings maps.

---

Version: live UI exploration  
Last Updated: 2026-06-21