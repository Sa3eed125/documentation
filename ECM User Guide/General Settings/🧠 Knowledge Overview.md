---
id: general-settings-knowledge-overview
title: "⚙️ General Settings - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "⚙️ General Settings Knowledge Overview"
slug: /general-settings/overview
tags: [general-settings, language, trash, versioning, barcode, features]
description: Understand tenant-wide general settings for language, content lifecycle, and features.
---

# ⚙️ General Settings - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Understand the three General Settings tabs and their tenant-wide operational impact.
:::

## What General Settings Does

General Settings is the tenant-level configuration area that controls system-wide behavior across three domains: UI language and navigation, content lifecycle (trash and versioning), and feature toggles.

Observed entry path:

- Configuration > General Settings
- Route family: `/configuration/general-settings/*`

## The 3 Setting Sections

| Section | Purpose | Route |
|---------|---------|-------|
| **General** | Manage system language and landing page | `/general_settings` |
| **Content** | Control versioning and trash behavior | `/content_settings` |
| **Features** | Enable or disable application features | `/feature_settings` |

---

## General Tab — Language & Navigation

Controls two tenant-wide defaults:

1. **System Language** — Sets the default language for the application interface (e.g., English).
2. **Landing Page** — The page users are redirected to after a successful login (e.g., My Repository).

## Content Tab — Trash & Versioning

### Trash Management

Controls deleted item behavior:

- **Enable Auto-Delete** (toggle) — If enabled, items in the trash are permanently deleted after a set number of days.
- **Delete After (Days)** — Number of days before permanent deletion.
- **Show Trash in Search Results** (toggle) — If enabled, search results include items in the trash.

### Version Control

Controls document version history behavior:

- **Enable Version Copy** (toggle) — Allows copying content from previous versions when creating a new version.
- **Max Number of Versions** — Maximum number of versions stored per document.

## Features Tab — Feature Toggles

### Document Features

- **Enable Barcode** (toggle) — Enables barcode generation and scanning within the application.

---

## Admin Impact Summary

| Setting | Impact When Changed |
|---------|-------------------|
| System Language | All users see UI in that language |
| Landing Page | All users land on that page after login |
| Enable Auto-Delete | Trash items deleted automatically without manual purge |
| Delete After (Days) | Sets permanent deletion window |
| Show Trash in Search | Deleted items visible/invisible in search |
| Enable Version Copy | Users can carry content from older versions |
| Max Versions | Limits storage by capping version history |
| Enable Barcode | Barcode scan/generate becomes available in documents |

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Field-by-field configuration details for each tab.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual flows for trash lifecycle and version behavior.

---

Version: live UI exploration  
Last Updated: 2026-06-21