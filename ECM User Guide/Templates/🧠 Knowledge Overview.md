---
id: templates-knowledge-overview
title: "🧠 Templates - Knowledge Overview"
sidebar_label: "🧠 Knowledge Overview"
sidebar_position: 1
name: "🧠 Templates Knowledge Overview"
slug: /templates/overview
tags: [templates, document-generator, users]
description: Understand how templates, placeholders, and workflow generation fit together.
---
# 📄 Templates - Knowledge Overview

:::tip 📌 At a Glance
**Document Type**: Knowledge Overview
**Goal**: Explain what templates are, why they matter, and how they integrate with workflows.
:::

## What Templates Are

Templates are Word files (`.docx` / `.docm`) used by Document Generator to produce final PDF documents.

A template includes placeholders that are replaced at runtime.

## Why Templates Matter

No document can be generated until a matching template exists.

Template usage flow:

1. Create template in Configuration > Template Form.
2. Use that template in a BPMN Document Generator task.
3. Start the process with matching data.
4. Generated PDF is produced and stored.

## User Prerequisites

Before users run document generation:

1. A template is already created and saved.
2. Template contains valid placeholders.
3. Workflow task references the same template.
4. Input JSON keys match placeholder names.

## Placeholder Syntax

| Syntax                   | Purpose           | Example                    |
| ------------------------ | ----------------- | -------------------------- |
| `{{keyname}}`          | Text replacement  | `{{customer_name}}`      |
| `{{IMAGE image_name}}` | Image replacement | `{{IMAGE company_logo}}` |

## What Users Do (High Level)

1. Create Template.
2. Trigger workflow that contains Document Generator task.
3. Retrieve output from process variable (PDF file object).

## Common User Errors

| Situation                          | What happens                                |
| ---------------------------------- | ------------------------------------------- |
| Template limit reached             | Save rejected                               |
| Generated documents limit reached  | Generation rejected                         |
| Template feature disabled          | Save and generation blocked                 |
| Invalid template name              | Validation error before save                |
| Template not found                 | BPMN task fails with incident               |
| PDF conversion service unavailable | Generation fails and task retries by policy |

## Related Guides

- [📘 Detailed Guide](%F0%9F%93%98%20Detailed%20Guide.md) - Step-by-step template creation and generation.
- [🗺 Diagrams](%F0%9F%97%BA%20Diagrams.md) - Visual flows for mapping, generation, and failures.

---

Version: user-focused extraction from document-generator.md
Last Updated: 2026-06-14
