---
sidebar_label: "👥 Workspace Groups"
sidebar_position: 3
name: "👥 Workspace Groups"
description: Understanding workspace groups, permission-based access, and content type organization
user-invocable: true
---

# 👥 Workspace Groups & Permissions


:::tip 📌 At a Glance
**Document Type**: Detailed Guide  
**Goal**: Follow the unified ECM User Guide design and structure for this page.
:::


Workspace Groups are the **access control layer** of the Workspace feature. They define which users can see and work with which Content Types, organized into logical business boundaries.

---

## What Is a Workspace Group?

A **Workspace Group** is a named container that:
1. Holds one or more **Content Types** (CTs)
2. Is assigned to specific **users** or **user groups**
3. Controls **who sees what** in the Workspace landing page

:::info Think of Groups as Departments
A group named "HR Team" would contain CTs like "HR Letters", "Leave Requests", "Employee Contracts" — and only HR team members would see that group.
:::

---

## How Groups Work

### In the Workspace Landing Page

Groups appear as **expandable panel bar sections**:

```
Workspace
├── 📁 Administrators (expanded)
│   ├── 📄 HR Letters
│   ├── 📄 Employee Contracts
│   └── 📄 Leave Requests
├── 📁 Finance Team (collapsed)
│   ├── 📄 Invoices
│   └── 📄 Purchase Orders
└── 📁 Operations
    └── 📄 Work Orders
```

Each group shows:
- Group name as the panel bar header
- All CTs the current user has access to within that group
- Expand/collapse toggle

---

## User Access: Who Sees What

### Access Rules

| If user is... | They see... |
|---------------|-------------|
| Member of "Administrators" group | All CTs in the Administrators workspace group |
| Member of "HR Team" group | All CTs in the HR Team workspace group |
| Member of multiple groups | All groups they belong to, each with their CTs |
| Not in any workspace group | Empty workspace — no groups visible |

:::note Individual Permissions
Within a group, you can also control **what a user can do** with each CT — whether they can only view records, or also create, edit, and delete.
:::

---

## Permission Levels in Workspace

Each user-to-group assignment can carry specific permissions:

| Permission Level | Can View Records | Can Create | Can Edit | Can Delete | Can Export |
|-----------------|-----------------|------------|----------|------------|------------|
| **Viewer** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Collaborator** | ✅ | ✅ | Own only | Own only | ✅ |
| **Editor** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Owner/Admin** | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Setting Up Workspace Groups (Admin)

### Creating a Group

1. Navigate to **Configuration → Groups**
2. Click **Create New Group**
3. Enter a group name (e.g., "Finance Team")
4. Add users or user groups as members
5. Assign Content Types to the group
6. Set permission levels per member
7. Save

### Assigning Content Types to a Group

Content Types appear in Workspace only if they are:
- ✅ Created in Configuration → Content Types → Files
- ✅ Assigned to at least one workspace group
- ✅ The current user is a member of that group

:::warning If a CT doesn't appear in Workspace
Check that:
1. The CT was created in **Files** Content Types (not Folder or Task)
2. The CT is assigned to a group
3. Your user account is a member of that group
4. You have at least "Viewer" permission
:::

---

## Group Organization Strategies

### By Department

```
Groups:
├── Human Resources → HR Letters, Leave Requests, Job Offers
├── Finance → Invoices, Purchase Orders, Budget Requests
├── Operations → Work Orders, Maintenance Logs, Delivery Notes
└── Legal → Contracts, NDAs, Compliance Reports
```

**Best for:** Organizations with clear department boundaries

### By Project

```
Groups:
├── Project Alpha → Alpha Specs, Alpha Contracts, Alpha Reports
├── Project Beta → Beta Specs, Beta Reports
└── Shared → General Forms, Standard Templates
```

**Best for:** Project-based organizations

### By Role/Access Level

```
Groups:
├── Executives → All strategic reports
├── Managers → Team performance, budgets
├── Staff → Day-to-day operational forms
└── External → Limited vendor/client forms
```

**Best for:** Hierarchical access requirements

---

## Multi-Group Membership

Users can belong to **multiple groups**. All groups appear in their Workspace:

```
User "John Doe" is in:
├── HR Team group → HR Letters, Leave Requests
└── Finance group → Invoices

John sees in Workspace:
├── 📁 HR Team
│   ├── 📄 HR Letters
│   └── 📄 Leave Requests
└── 📁 Finance
    └── 📄 Invoices
```

---

## Common Group Scenarios

<details>
<summary>📋 Scenario 1: HR Department Setup</summary>

**Goal:** HR staff can create employee letters and track leave requests

**Setup:**
1. Create CT: "HR Letter" with fields (Employee Name, Employee ID, Date, Letter Type, File)
2. Create CT: "Leave Request" with fields (Employee, Manager, Start Date, End Date, Reason)
3. Create Group: "Human Resources"
4. Assign both CTs to this group
5. Add HR staff as "Editor" members
6. Add HR managers as "Owner" members

**Result:** HR staff see both CTs in the HR Group card view

</details>

<details>
<summary>📋 Scenario 2: Executive Read-Only Access</summary>

**Goal:** Executives can view all department records but not edit

**Setup:**
1. Add executives to all relevant groups
2. Set permission level to "Viewer" for executives
3. Do NOT give them "Editor" or "Owner" permissions

**Result:** Executives see all CTs but cannot create, edit, or delete records

</details>

<details>
<summary>📋 Scenario 3: Restricted Finance CTs</summary>

**Goal:** Finance CTs visible only to Finance team

**Setup:**
1. Create Finance group
2. Add Finance team members only
3. Assign Finance CTs to Finance group only
4. Do NOT add Finance CTs to other groups

**Result:** Only Finance team members see Finance-related CTs in Workspace

</details>

---

## The Search Box and Groups

The **Search** box on the Workspace landing page searches **across all groups** the user can access:

```
Search: "invoice"
→ Shows all CTs with "invoice" in the name, across all your groups
```

This makes it easy to find a specific CT even when you belong to many groups with many CTs.

---

## Best Practices for Groups

:::tip Do This
- **Name groups clearly** after departments or teams
- **Keep groups focused** — don't add unrelated CTs to a group
- **Review group memberships** quarterly
- **Use user groups** (not individual users) for easier management
- **Document group purpose** in group description
:::

:::warning Avoid This
- Groups with no members (orphaned groups)
- Too many groups (leads to confusion)
- Same CT in too many groups (confusing for users — duplicate cards)
- Giving everyone "Owner" permission
:::

---

## Related Guides

→ [Knowledge Overview](%F0%9F%A7%A0%20Knowledge%20Overview.md) — Understand Workspace basics

→ [Managing Records](%F0%9F%93%98%20Managing%20Records.md) — Create and work with records

→ [Grid & Navigation](%F0%9F%93%98%20Grid%20%26%20Navigation.md) — Grid, pagination, and filter features

→ [Diagrams](%F0%9F%97%BA%20Diagrams.md) — Visual permission and group diagrams
