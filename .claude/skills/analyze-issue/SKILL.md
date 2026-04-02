---
name: analyze-issue
description: Deep analysis of a GitHub issue. Reads the issue, all comments, and the codebase to classify the issue, reproduce bugs, and produce a full implementation plan with breaking-change assessment.
argument-hint: <github-issue-url>
allowed-tools: Bash Read Glob Grep Agent mcp__playwright__browser_navigate mcp__playwright__browser_snapshot mcp__playwright__browser_take_screenshot mcp__playwright__browser_click mcp__playwright__browser_select_option mcp__playwright__browser_fill_form mcp__playwright__browser_press_key mcp__playwright__browser_hover mcp__playwright__browser_tabs mcp__playwright__browser_close mcp__playwright__browser_console_messages mcp__playwright__browser_wait_for mcp__playwright__browser_resize
---

# Analyze GitHub Issue

Given a GitHub issue URL, perform a thorough analysis and produce a complete, actionable plan.

**Repository:** `xrutayisire/react-js-cron`
**Issue URL:** `$ARGUMENTS`

---

## Phase 1 — Gather context

### 1.1 Read the issue

Use the GitHub CLI to extract everything about the issue:

```bash
# Extract the issue number from the URL
gh issue view <number> --repo xrutayisire/react-js-cron --json title,body,state,labels,assignees,milestone,createdAt,updatedAt,author,closedAt

# Read every comment with author and timestamp
gh issue view <number> --repo xrutayisire/react-js-cron --comments
```

Record:
- Title and full description
- Every comment (author, date, content)
- Labels, state, milestone, assignees
- Timeline of events (opened, labeled, referenced, closed)
- Any linked pull requests or related issues

### 1.2 Identify the reporter's intent

From the description and comments, determine:
- What is the reporter asking for?
- What behavior did they expect?
- What behavior did they observe?
- Did they provide a reproduction (code snippet, cron expression, screenshot)?
- Did they specify a version?

---

## Phase 2 — Classify the issue

Assign exactly one primary classification:

| Classification | Criteria |
|---|---|
| **Bug** | The library behaves differently from what the documentation or API contract promises. Something that worked before is now broken, or a specific input produces an incorrect output. |
| **Feature request** | A new capability that does not exist today. The current behavior is correct but the reporter wants more. |
| **Enhancement** | An improvement to existing behavior (better UX, performance, accessibility) without adding a new feature. |
| **Question / Support** | The reporter is asking how to use something. The library may already support what they need. |
| **Not actionable** | Insufficient information, cannot reproduce, outside the scope of this library, or a duplicate. |

Explain the classification with evidence from the issue text. If the issue is ambiguous, state the ambiguity and provide the most likely classification.

---

## Phase 3 — Analyze the codebase

### 3.1 Locate relevant code

Based on the issue content, search the codebase to find every file that is related:

- Components (`src/Cron.tsx`, `src/fields/*.tsx`, `src/components/*.tsx`)
- Types and interfaces (`src/types.ts`)
- Conversion logic (`src/converter.ts`)
- Utilities (`src/utils.ts`)
- Locale definitions (`src/locale.ts`)
- Styles (`src/styles.css`)
- Stories and tests (`src/stories/`, `src/tests/`)

Read the relevant sections. Understand the current behavior and why it works the way it does.

### 3.2 Trace the code path

For bugs or enhancements, trace the exact code path involved:

1. Identify which props, state variables, and callbacks are involved.
2. Follow the data flow from user interaction to rendered output.
3. Identify where the current behavior diverges from the expected behavior.
4. Note any edge cases or related logic that could be affected by a change.

### 3.3 Check existing tests

```bash
# Run the test suite to see current state
yarn test --run
```

Review test files in `src/tests/` to understand what is already covered and what gaps exist relative to this issue.

---

## Phase 4 — Reproduce (if bug)

If the issue is classified as a bug:

### 4.1 Write a failing test

If possible, write a minimal test case that demonstrates the bug. Do not commit it yet — just confirm the reproduction.

### 4.2 Reproduce visually

If the bug is visual or interaction-based:

1. Start local Storybook (`yarn storybook` on port 9009) if not already running.
2. Navigate to the relevant story using Playwright MCP.
3. Reproduce the exact steps described in the issue.
4. Take screenshots documenting the current (broken) behavior.
5. Compare with production (`https://xrutayisire.github.io/react-js-cron/`) if the bug is a regression.

---

## Phase 5 — Assess impact

### 5.1 Breaking-change analysis

Evaluate whether fixing or implementing this would break existing users:

| Impact level | Definition |
|---|---|
| **None** | Internal refactor, new additive prop, or bug fix that restores documented behavior. No user code changes needed. |
| **Minor** | Default behavior changes slightly but the previous behavior is available via a new prop or option. Migration is trivial. |
| **Breaking** | Existing user code would produce different results or fail to compile. Requires a semver major bump. |

For each impact level, explain specifically what would change for a user upgrading.

### 5.2 User experience assessment

Consider both:
- **Existing users**: Will their current cron expressions, configurations, or UIs change?
- **New users**: Will the change make the library easier to adopt, harder, or neutral?

### 5.3 Scope of code changes

List every file that would need to change, and estimate the complexity (trivial / moderate / significant).

---

## Phase 6 — Produce the plan

### 6.1 Recommendation

State one of:

- **Do nothing** — Explain why (not a bug, out of scope, already works as intended, duplicate).
- **Respond to the issue** — If it is a question, draft a helpful reply.
- **Implement** — Proceed with the plan below.

### 6.2 Implementation plan

If the recommendation is to implement, provide:

#### Summary

One paragraph describing what will be done and why.

#### Steps

A numbered list of concrete steps. Each step should specify:

1. The file to modify
2. What to change (add, modify, or remove)
3. Why this change is needed
4. Any edge cases to handle

#### Props / API changes

If new props or API surface is added:

- Prop name and type
- Default value (must preserve backward compatibility)
- Description
- Example usage

#### Tests to add

List specific test cases that should be written:

- What input
- What expected output
- What edge cases

#### Stories to add or update

If the change affects the UI, specify which Storybook stories need updating or adding.

#### Visual verification

Describe how to visually verify the change using `/visual-test` to confirm no regressions.

### 6.3 Breaking-change justification (if applicable)

If the plan involves a breaking change, provide:

1. **What breaks** — Exact behavior that changes.
2. **Who is affected** — What user configurations would see different behavior.
3. **Why it is necessary** — Why a non-breaking alternative is not feasible.
4. **Migration path** — Step-by-step guide for users to update their code.
5. **Semver impact** — This requires a major version bump.

---

## Phase 7 — Draft the response

Draft a comment to post on the GitHub issue that:

1. Thanks the reporter.
2. Confirms or corrects the classification.
3. Summarizes the findings (bug confirmed/not confirmed, feature feasibility).
4. Outlines the plan at a high level (without internal implementation details).
5. Sets expectations (timeline, next steps, whether a PR will follow).

Do not post the comment. Present it for review.

---

## Output format

Present the full analysis as a structured report with these sections:

```
## Issue analysis: #<number> — <title>

### Classification: <Bug | Feature request | Enhancement | Question | Not actionable>
<Evidence and reasoning>

### Reproduction
<Steps taken, whether reproduced, screenshots if applicable>

### Impact assessment
<Breaking-change level, user experience impact, scope of changes>

### Recommendation: <Do nothing | Respond | Implement>
<Reasoning>

### Implementation plan
<Full plan as described in Phase 6.2, or "N/A" if not implementing>

### Suggested GitHub response
<Draft comment for the issue>
```
