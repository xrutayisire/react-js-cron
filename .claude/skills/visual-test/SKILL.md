---
name: visual-test
description: Full visual regression test comparing local Storybook against a production deployment. Use when verifying that a branch introduces no visual, textual, or interaction differences.
allowed-tools: mcp__playwright__browser_navigate mcp__playwright__browser_snapshot mcp__playwright__browser_take_screenshot mcp__playwright__browser_click mcp__playwright__browser_select_option mcp__playwright__browser_fill_form mcp__playwright__browser_press_key mcp__playwright__browser_hover mcp__playwright__browser_tabs mcp__playwright__browser_close mcp__playwright__browser_console_messages mcp__playwright__browser_wait_for mcp__playwright__browser_resize Bash Read Glob Grep
---

# Visual Regression Test

Compare the local Storybook running on this branch against the production deployment to verify there are zero visual, textual, or interaction differences.

## URLs

- **Production**: `https://xrutayisire.github.io/react-js-cron/`
- **Local Storybook**: `http://localhost:9009`

## Setup

1. Check if local Storybook is already running on port 9009. If not, start it:
   ```bash
   cd <project-root> && yarn storybook &
   ```
2. Wait for `http://localhost:9009` to respond before proceeding.

## Test procedure

For **every story** listed below, perform the full comparison cycle:

### Comparison cycle (repeat for each story)

1. **Navigate to the production story** at the given URL.
2. **Take a full-page screenshot** and save it as `prod-<story-slug>.png`.
3. **Take an accessibility snapshot** of the production page.
4. **Navigate to the same story locally** at `http://localhost:9009`.
5. **Take a full-page screenshot** and save it as `local-<story-slug>.png`.
6. **Take an accessibility snapshot** of the local page.
7. **Compare both screenshots visually.** Report any difference in:
   - Text content (every label, placeholder, value, heading, and button text must be identical)
   - Layout (element sizes, spacing, alignment, vertical and horizontal positioning)
   - Colors (backgrounds, borders, text color, button color)
   - Font rendering (size, weight, style)
   - Visibility (nothing hidden or newly visible)
8. **Compare both accessibility snapshots.** Report any difference in element tree, roles, names, or states.
9. If any difference is found, **stop immediately**, report it with both screenshots, and ask the user whether to continue.

### Stories to test

Test each of the following stories by navigating to the corresponding Storybook path. Derive the URL from the story name (e.g. `Demo` maps to `?path=/story/reactjs-cron--demo`).

| # | Story | Slug |
|---|-------|------|
| 1 | Demo | demo |
| 2 | Dynamic Settings | dynamic-settings |
| 3 | Input | input |
| 4 | Input With On Enter | input-with-on-enter |
| 5 | Read Only Input | read-only-input |
| 6 | Default Value | default-value |
| 7 | Default Period | default-period |
| 8 | Disabled | disabled |
| 9 | Read Only | read-only |
| 10 | Humanize Labels | humanize-labels |
| 11 | Humanize Value | humanize-value |
| 12 | Humanize Labels And Value | humanize-labels-and-value |
| 13 | Leading Zero | leading-zero |
| 14 | Track Error | track-error |
| 15 | Disable Error Style | disable-error-style |
| 16 | No Clear Button | no-clear-button |
| 17 | Clear Button Empty Value | clear-button-empty-value |
| 18 | Invalid Default Value | invalid-default-value |
| 19 | Empty Never Allowed | empty-never-allowed |
| 20 | Empty Always Allowed | empty-always-allowed |
| 21 | Shortcuts | shortcuts |
| 22 | Twelve Hour Clock | twelve-hour-clock |
| 23 | Twenty Four Hour Clock | twenty-four-hour-clock |
| 24 | No Periodicity On Double Click | no-periodicity-on-double-click |
| 25 | Single Selection Mode | single-selection-mode |
| 26 | Single Selection Mode Auto Close | single-selection-mode-auto-close |
| 27 | Restrict Period And Selection | restrict-period-and-selection |
| 28 | Track Selected Period | track-selected-period |
| 29 | French Locale | french-locale |
| 30 | Custom EN Locale | custom-en-locale |
| 31 | No Prefix And Suffix | no-prefix-and-suffix |
| 32 | Dropdowns Config | dropdowns-config |
| 33 | Custom Style | custom-style |
| 34 | Change Theme | change-theme |

## Interaction tests

After the static visual comparison of all stories, perform the following interaction tests on the **Dynamic Settings** story. For each interaction, perform the action on both production and local, then compare screenshots and snapshots.

### Period dropdown

1. Open the period dropdown.
2. Screenshot both versions with the dropdown open.
3. Select each period option one by one (year, month, week, day, hour, minute, reboot).
4. After each selection, screenshot and compare the resulting dropdowns and cron expression.

### Clock format

1. Toggle to 12-hour clock format.
2. Screenshot and compare.
3. Open the hours dropdown, verify the hour labels use 12-hour format (AM/PM).
4. Toggle back to 24-hour clock format.
5. Screenshot and compare.

### Locale

1. Switch the locale to French.
2. Screenshot and compare all labels and text.
3. Switch to English Variant.
4. Screenshot and compare.
5. Return to English.

### Toggles

Test each toggle switch in the Dynamic Settings story. For each toggle:

1. Click the toggle to change its state.
2. Screenshot and compare after each toggle.

Toggles to test:
- Display input
- Change input value on blur
- Change input value on enter
- Read-only input
- Disabled
- Read only
- Humanize labels
- Humanize value
- Display error text
- Display error style
- Display clear button
- Support shortcuts
- Remove prefix/suffix
- Custom style
- Leading zero
- Periodicity on double-click

### Selection mode

1. Switch to Single selection mode.
2. Open a dropdown (e.g. hours), click a single value, verify only that value is selected.
3. Screenshot and compare.

### Double-click behavior

1. Ensure "Periodicity on double-click" is enabled.
2. Double-click on a dropdown option.
3. Verify the periodicity toggles as expected (all selected or all deselected).
4. Screenshot and compare.
5. Disable "Periodicity on double-click".
6. Double-click again and verify it no longer toggles all values.
7. Screenshot and compare.

### Clear and reset

1. Click the clear button and verify the cron expression resets.
2. Screenshot and compare.
3. Change the default value and click "Set default value".
4. Screenshot and compare.

### Allowed dropdowns and periods

1. Uncheck specific dropdowns (e.g. uncheck "months").
2. Verify that dropdown disappears from the UI.
3. Screenshot and compare.
4. Uncheck specific periods (e.g. uncheck "year").
5. Verify that period option disappears from the period dropdown.
6. Screenshot and compare.

### Allow empty

1. Change the "Allow empty" setting to "always".
2. Clear the cron expression and verify no error is displayed.
3. Screenshot and compare.
4. Change to "never" and verify an error appears for empty values.
5. Screenshot and compare.

### Clear button action

1. Switch "Clear button action" to "empty".
2. Click the clear button.
3. Verify the cron expression becomes empty instead of filling with "every".
4. Screenshot and compare.

## Final report

After all checks are complete, provide a summary:

- Total stories tested
- Total interactions tested
- Total screenshots taken
- Any differences found (with screenshot file names)
- Pass/fail verdict

If all checks pass, confirm: **"No visual, textual, or interaction regressions detected. The branch is safe to merge."**
