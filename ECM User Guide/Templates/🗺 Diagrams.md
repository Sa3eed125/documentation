---
id: templates-diagrams
title: "🗺 Templates - Diagrams"
sidebar_label: "🗺 Diagrams"
sidebar_position: 3
name: "🗺 Templates Diagrams"
slug: /templates/diagrams
tags: [templates, diagrams, users, document-generator]
description: Visualize template lifecycle, mapping model, and operational error handling.
---
# 📄 Templates - Diagrams

:::tip 📌 At a Glance
**Document Type**: Diagrams
**Goal**: Provide visual references for template creation, generation, and troubleshooting.
:::

## 1) User Journey (Template To PDF)

```mermaid
flowchart TD
  A[Open Configuration > Template Form] --> B[Create New Template]
  B --> C[Enter Name and Optional Description]
  C --> D[Upload .docx/.docm with placeholders]
  D --> E[Save Template]
  E --> F{License and validation ok?}
  F -->|No| G[Show error and stop]
  F -->|Yes| H[Template saved]
  H --> I[Start workflow with Document Generator task]
  I --> J[Provide Template Content JSON]
  J --> K[Task executes]
  K --> L{Generation success?}
  L -->|No| M[Task incident / retry policy]
  L -->|Yes| N[PDF stored in generated-documents]
  N --> O[Output variable available for next step]
```

## 1.1) Folder Path Decision Flow (Invoice)

```mermaid
flowchart LR
  A[Invoice] --> B[Document Generator]
  B --> C{Check Folder Path}
  C -->|Folder path exist| D[Create Folder]
  C -->|Folder path empty| E[DMN For Path]
  E --> D
  D --> F[Create Record]
  F --> G[End]
```

Mapping notes:

- Start with the workflow CT form output and pass it as **Template Content** to **Document Generator**.
- In **Document Generator**, define the output file name using **File Name**.
- At **Create Record**, use a CT with a **File** component and map the generated file output into that component.

## 2) Placeholder Mapping Model

```mermaid
flowchart LR
  A[Word Template] --> B["Text Placeholder: {{customer_name}}"]
  A --> C["Image Placeholder: {{IMAGE signature}}"]
  D[Template Content JSON] --> E[customer_name: John Doe]
  D --> F[signature: image data or file reference]
  B --> G[Replacement at runtime]
  C --> G
  E --> G
  F --> G
  G --> H[Generated PDF]
```

## 3) Output Object Usage Flow

```mermaid
flowchart TD
  A[Document Generator Output Variable] --> B[binaryData]
  A --> C[prefix]
  A --> D[name]
  A --> E[size]
  A --> F[extension=pdf]
  B --> G[Download or storage reference]
  C --> H[Build full path]
  A --> I[Pass entire object to email/archive tasks]
```

## 4) User Error Decision Flow

```mermaid
flowchart TD
  A[Template Save or Generation Failed] --> B{What failed?}
  B --> C[Template save]
  B --> D[Document generation]

  C --> C1{Reason}
  C1 --> C2[Invalid name]
  C1 --> C3[Template quota exceeded]
  C1 --> C4[Feature disabled]

  D --> D1{Reason}
  D1 --> D2[Template not found]
  D1 --> D3[Generated docs quota exceeded]
  D1 --> D4[PDF conversion service down]

  C2 --> Z[Fix name and retry]
  C3 --> Z2[Free quota or update license]
  C4 --> Z3[Enable feature/license]
  D2 --> Z4[Use existing valid template]
  D3 --> Z5[Free quota or update license]
  D4 --> Z6[Wait service recovery and retry]
```

## Related Guides

- [🧠 Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) - Concepts and context.
- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Operational steps.

---

Version: user-focused extraction from document-generator.md
Last Updated: 2026-06-14
