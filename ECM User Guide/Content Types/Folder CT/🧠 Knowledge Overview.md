---
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "🧠 Knowledge Overview"
---

# Folder Content Types - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## 📁 What Is Folder Content Types?

Folder Content Types defines the metadata schema and form layout for folder/container entities in ECM. It standardizes the business attributes that folders can carry beyond just a folder name.

:::info Key Concept
**Folder Content Types = The Blueprint for Folder Metadata**

When you configure a Folder Content Type, you're defining what attributes every folder in the system will have.
:::

## 🤇 Why We Need Folder Content Types?

:::tip Business Benefits
- **Standardize** metadata across all folders in the repository
- **Enforce** required attributes when users create folders
- **Control** which folder metadata fields appear to creators
- **Enable** organizing folders by business attributes (department, project, classification)
- **Improve** discoverability of folders through structured metadata
- **Support** folder-level retention, compliance, and lifecycle policies
:::

## 🗂️ Where It Is in ECM

:::note UI Navigation
- **Path**: Configuration → Content Type → Folders Content Types
- **List page URL**: `/configuration/content-type`
- **Create URL**: `/configuration/content-type/create-document-type?appliedFor=FolderContentType`
:::

## 🔗 Where We Use Folder Content Types in ECM

Folder Content Types are only accessible from Repository folder creation flows:

<details>
<summary><strong>📁 Repository Folder Creation</strong></summary>
Used when users create new folders with structured metadata.
</details>

<details>
<summary><strong>🔍 Folder Search & Discovery</strong></summary>
Folder metadata enables advanced search and filtering.
</details>

<details>
<summary><strong>📊 Folder Organization</strong></summary>
Folders grouped by business attributes (department, project, etc.).
</details>

<details>
<summary><strong>🔒 Retention & Lifecycle</strong></summary>
Folder metadata can drive retention policies and archival decisions.
</details>

<details>
<summary><strong>🔍 Audit & Compliance</strong></summary>
Folder metadata tracks ownership, classification, and access levels.
</details>

## ✅ When To Choose Folder Content Types

:::warning Use Folder Content Types When:
- You are defining metadata for folder/container entities
- Folders in your system carry business context beyond just a name
- Multiple departments create folders and must follow consistent metadata capture
- Folders need to be discoverable by attributes (project, department, classification)
- You need to enforce governance on folder creation (required attributes, validation)
:::

## 📃 Folder CT Key Notes

:::note Important Details
- Folder Content Types are in the UI section: **"Folders Content Types"** (note the plural)
- Folder CT includes all standard Form.io components (33 total) plus the Contellect **File** component
- Folder CT does **NOT** include the Approval Task Form component (that is Task CT only)
- Folder CT is **NOT** used in Workflow task forms
- Folder CT row actions: preview, edit, delete, clone
- Folder CT creation requires: Name, Description, and optionally components
- UI mode identifier: `appliedFor=FolderContentType`
:::

## Common Folder CT Use Cases

| Use Case | Description | Example |
|----------|-------------|---------|
| Project Folder | Capture project-level metadata | Project ID, Owner, Start Date, Budget |
| Department Folder | Track department context | Department Name, Manager, Cost Center |
| Case Folder | Store case information | Case ID, Type, Status, Client |
| Classification Folder | Apply security/privacy level | Classification Level, Approver, Review Date |
| Retention Folder | Define folder lifecycle | Retention Period, Destruction Date, Archive Flag |

## Differences: File CT vs. Folder CT

| Aspect | File CT | Folder CT |
|--------|---------|-----------|
| **Used for** | Individual file/document metadata | Folder/container metadata |
| **Where used** | Repository, Workspace, Workflow, Template Generator, DMN, RMS | Repository folder creation only |
| **Scope** | Per-file attributes | Per-folder attributes (applies to all files inside) |
| **Workflow** | Data flows to workflow decisions | Does NOT appear in workflow tasks |
| **Typical fields** | Document title, date, amount, etc. | Folder owner, project, department, etc. |
| **Integrations** | RMS export, Template mapping | Folder retention, policies |

## References
- Configuration location: Configuration → Content Type → Folders Content Types
- Form.io builder docs: https://help.form.io/userguide/forms/form-building
- Related: File Content Types, Task Form Content Types, Repository Folder Creation
