---
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "🧠 Knowledge Overview"
---

# File Content Types - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


## 📄 What Is File Content Types?

File Content Types defines the metadata schema and form layout for file/document records in ECM. It is a configuration-time definition that gets reused whenever users create or manage file records throughout the system.

:::info Key Concept
**File Content Types = The Blueprint for File Metadata**

When you configure a File Content Type, you're defining the questions users must answer when creating or editing a file record. Every file in the system will use this form.
:::

## 🤇 Why We Need File Content Types?

:::tip Business Benefits
- **Standardize** metadata across all files and documents in the repository and workspace
- **Enforce** required fields and consistent data capture for every file
- **Control** which form fields appear based on business needs
- **Enable** downstream automation: workflow decisions, approval routing, filtering, search
- **Improve** data quality with centralized field definitions and validation rules
- **Support** integration with external systems (RMS, Template Generator, DMN)
:::

## 🗂️ Where It Is in ECM

:::note UI Navigation
- **Path**: Configuration → Content Type → Files Content Types
- **List page URL**: `/configuration/content-type`
- **Create URL**: `/configuration/content-type/create-document-type?appliedFor=VersionContentType`
:::

## 🔗 Where We Use File Content Types in ECM

File Content Types are reused across multiple ECM business flows:

<details>
<summary><strong>📁 Repository</strong></summary>
Used in Create Record flows when users upload or create new file records.
</details>

<details>
<summary><strong>🗻 Workspace</strong></summary>
Used when creating file-based records within workspace contexts.

**Workspace-to-Repository Sync:**
- When user creates a record in Workspace, system automatically creates a Folder in Repository named after the File CT (or reuses existing folder with same name)
- Record is placed inside that folder
- Duplicate record names are not allowed within the same folder
- Folder path and record naming follow the DMN (Decision Model Notation) configuration
</details>

<details>
<summary><strong>🔄 Workflow</strong></summary>
Used when workflows create or process file-based records during workflow execution.
</details>

<details>
<summary><strong>📈 Template Generator Workflow</strong></summary>
Metadata from File CT maps to document templates for generated documents.
</details>

<details>
<summary><strong>📊 DMN Folder Path & Naming</strong></summary>
File CT data configures folder path conventions and names consumed in decision tables.
</details>

<details>
<summary><strong>🔓 RMS Integration Mapping</strong></summary>

File CT metadata used in:
- **Add to RMS** (export file metadata to external system)
- **Pickup** (retrieve RMS file for processing)
- **Delivery** (send processed file back to RMS)
- **Return** (complete RMS transaction)
</details>

## ✅ When To Choose File Content Types

:::warning Use File Content Types When:
- You are defining metadata for file/document entities
- You need a standardized form for capturing file-related business attributes
- File data must feed into workflows, decisions, or external integrations
- Multiple users create files and must follow consistent data capture rules
:::

## 📃 File CT Key Notes

:::note Important Details
- File Content Types are in the UI section: **"Files Content Types"** (note the plural)
- **Workspace Behavior**: Creating a record in Workspace automatically syncs to Repository with auto-created folder (named after File CT) and applies DMN naming rules
- Same record name is not allowed in the same folder; check DMN for record naming convention and folder path rules
- File CT includes all standard Form.io components (33 total) plus the Contellect **File** component
- File CT does **NOT** include the Approval Task Form component (that is Task CT only)
- For each File CT, the system automatically maintains 3 linked workflows: **Create Record**, **Edit Record**, and **Delete Record**
- Any change to the File CT schema/fields must be reflected in those linked workflows to keep runtime behavior consistent
- File CT row actions: preview, edit, delete, clone
- File CT creation requires: Name, Description, and at least one component
- UI mode identifier: `appliedFor=VersionContentType`
:::

## 📝 Common File CT Use Cases

| Use Case | Description | Example |
|----------|-------------|----------|
| 📚 HR Document | Standardize metadata for HR files | Employee handbook, policy documents |
| 📜 Contract | Capture contract attributes | Duration, parties, amount, date signed |
| 💳 Invoice | Standardize invoice data | Invoice number, amount, vendor, date |
| 📊 Report | Ensure consistent reporting metadata | Report period, department, status |
| 📑 Project Document | Track project-related documents | Project ID, phase, owner, confidentiality level |
| 🔓 RMS Export | Prepare file for external record keeping | Archive category, retention period, destruction date |

## 📚 References

:::tip Learn More
- **Configuration location**: Configuration → Content Type
- **Form.io builder docs**: https://help.form.io/userguide/forms/form-building
- **Related pages**: Workflow Configuration, Template Generator, DMN Decision Model
:::
---

## Next Steps

<details>
<summary><strong>Ready to Build?</strong></summary>

1. **Ready to create?** Follow the [Detailed Guide](./%F0%9F%93%98%20Detailed%20Guide.md) for step-by-step instructions
2. **Want to visualize?** Check out the [Diagram](./%F0%9F%97%BA%20Diagram.md) to see how File CT integrates with workflows
3. **Comparing options?** Explore [Folder Content Types](../Folder%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md) and [Task Content Types](../Task%20CT/%F0%9F%A7%A0%20Knowledge%20Overview.md)
</details>