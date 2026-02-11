
# Bring Accounting, Inventory, and Tasks pages up to CRM standard

## Overview
The CRM page (Meridian) has been refined through multiple iterations with proper product naming, ProductHero component, ProductPreviewFrame wrappers, ProblemContrast section, CapabilityGrid, branded copy, and realistic workflow vignettes. The other three pages are still on the old template. This plan brings all three to parity.

## Gap analysis (what each page is missing vs CRM)

| Feature | CRM (has) | Accounting/Inventory/Tasks (missing) |
|---------|-----------|--------------------------------------|
| ProductHero with ASCII + TM branding | Yes | Raw section hero, no branding |
| "Product in action" preview section | Yes | Missing entirely |
| ProductPreviewFrame wrappers | Yes (persona, outcomes, governance, support) | Raw dark divs |
| ProblemContrast section | Yes | Missing entirely |
| CapabilityGrid section | Yes | Missing entirely |
| Branded product naming in copy | Meridian for CRM | Generic "Accounting", "Inventory", "Tasks" |
| SettingsPanel + ImportMapper in workflow | Yes | Uses ConfigurationPreview (less realistic) |
| Marketing headlines per section | Yes | Generic headlines |

## Changes per page

### 1. SoftwareAccounting.tsx (Ledger for Accounting)

**Section-by-section rewrite to match CRM's 10-section structure:**

1. **Hero**: Replace raw section with `ProductHero` -- productName="Ledger", productDescriptor="for Accounting", asciiComponent=CyberPercentage
2. **Product Preview** (NEW): Add "Ledger in action" section with `ProductPreviewFrame` browser variant wrapping `TabbedProductPreview`
3. **Persona Cards**: Wrap side preview in `ProductPreviewFrame variant="card"` instead of raw dark div. Update headline to "Built for teams who manage money"
4. **ProblemContrast** (NEW): Add "Replace the chaos" section with accounting-specific before/after items (e.g., "Invoices created in Word" -> "Templated invoices with auto-numbering")
5. **Outcomes**: Wrap MiniDashboard in `ProductPreviewFrame variant="minimal"`. Update headline to "What changes on day one"
6. **CapabilityGrid** (NEW): Add "Core capabilities" section with 6 accounting capabilities (invoicing, expense tracking, approvals, dashboards, tax categories, audit trail)
7. **Workflow Stepper**: Replace `ConfigurationPreview` with `SettingsPanel` (with accounting config) and `ImportMapper` (with accounting mappings). Add accounting settings config and import mappings data
8. **Governance**: Wrap in `ProductPreviewFrame variant="card"`. Update headline to "Control who does what"
9. **Setup/Support**: Wrap support vignette in `ProductPreviewFrame variant="minimal"`. Update headline
10. **Pricing + CTA**: Use "Ledger for Accounting" branding

**New data to add:**
- `accountingSettingsConfig` for SettingsPanel (categories, invoice templates, approval rules)
- `accountingImportMappings` for ImportMapper (vendor, amounts, categories)
- `problemItems` array (4 before/after pairs)
- `capabilities` array (6 items with icons)

### 2. SoftwareInventory.tsx (Stockroom for Inventory)

Same 10-section structure:

1. **Hero**: `ProductHero` -- productName="Stockroom", productDescriptor="for Inventory", asciiComponent=CyberPyramid
2. **Product Preview** (NEW): "Stockroom in action" with ProductPreviewFrame
3. **Persona Cards**: ProductPreviewFrame wrapper. Headline: "Built for teams who track and manage"
4. **ProblemContrast** (NEW): Inventory-specific items (e.g., "Stock counted manually" -> "Real-time stock levels with alerts")
5. **Outcomes**: ProductPreviewFrame wrapper. Headline: "What changes on day one"
6. **CapabilityGrid** (NEW): 6 inventory capabilities (item tracking, location management, reorder alerts, asset tracking, checkout/return, audit trail)
7. **Workflow Stepper**: Replace ConfigurationPreview with SettingsPanel + ImportMapper with inventory-specific configs
8. **Governance**: ProductPreviewFrame wrapper
9. **Setup/Support**: ProductPreviewFrame wrapper
10. **Pricing + CTA**: "Stockroom for Inventory" branding

**New data:**
- `inventorySettingsConfig`, `inventoryImportMappings`, `problemItems`, `capabilities`

### 3. SoftwareTasks.tsx (Cadence for Tasks)

Same 10-section structure:

1. **Hero**: `ProductHero` -- productName="Cadence", productDescriptor="for Tasks", asciiComponent=CyberGyroscope
2. **Product Preview** (NEW): "Cadence in action" with ProductPreviewFrame
3. **Persona Cards**: ProductPreviewFrame wrapper. Headline: "Built for teams who deliver"
4. **ProblemContrast** (NEW): Tasks-specific items (e.g., "Tasks tracked in chat threads" -> "Structured task boards with deadlines")
5. **Outcomes**: ProductPreviewFrame wrapper. Headline: "What changes on day one"
6. **CapabilityGrid** (NEW): 6 task capabilities (kanban boards, task assignments, approval workflows, project timelines, recurring tasks, progress dashboards)
7. **Workflow Stepper**: Replace ConfigurationPreview with SettingsPanel + ImportMapper with tasks-specific configs
8. **Governance**: ProductPreviewFrame wrapper
9. **Setup/Support**: ProductPreviewFrame wrapper
10. **Pricing + CTA**: "Cadence for Tasks" branding

**New data:**
- `tasksSettingsConfig`, `tasksImportMappings`, `problemItems`, `capabilities`

## Shared component additions

### SettingsPanel configs (added to SettingsPanel.tsx)
- `accountingSettingsConfig` -- Categories, Invoice Templates, Approval Rules sections
- `inventorySettingsConfig` -- Locations, Thresholds, Checkout Rules sections
- `tasksSettingsConfig` -- Projects, Workflow Stages, Automation sections

### ImportMapper mappings (added to ImportMapper.tsx)
- `accountingImportMappings` -- vendor_name, invoice_number, amount, category, etc.
- `inventoryImportMappings` -- sku, item_name, quantity, location, threshold, etc.
- `tasksImportMappings` -- task_title, assignee, due_date, project, priority, etc.

## Files to modify

| File | Change |
|------|--------|
| `src/pages/software/SoftwareAccounting.tsx` | Full rewrite to match CRM 10-section structure |
| `src/pages/software/SoftwareInventory.tsx` | Full rewrite to match CRM 10-section structure |
| `src/pages/software/SoftwareTasks.tsx` | Full rewrite to match CRM 10-section structure |
| `src/components/ui/vignettes/SettingsPanel.tsx` | Add accounting, inventory, tasks settings configs |
| `src/components/ui/vignettes/ImportMapper.tsx` | Add accounting, inventory, tasks import mappings |

## Acceptance criteria
1. All 3 pages follow the exact same 10-section structure as CRM
2. Product naming uses TM branding (Ledger, Stockroom, Cadence) throughout
3. ProductHero with ASCII animations replaces raw hero sections
4. ProductPreviewFrame wraps all vignette containers (no raw dark divs)
5. ProblemContrast and CapabilityGrid sections added to all 3 pages
6. WorkflowStepper uses SettingsPanel + ImportMapper (not ConfigurationPreview)
7. Section headlines match CRM's marketing tone
8. All existing animations and hover-pause behavior preserved
