# Portfolio redesign prototype

## Scope

- Preview only: `dist/index.html` and the currently deployed route remain unchanged.
- This prototype keeps the current color variables as a temporary palette. It does not decide the final color direction or the final lower career section.
- Existing project copy is used as the source of truth. Missing captures remain explicitly marked rather than replaced with generated imagery.

## Information architecture

1. Left introduction: role, target position, three credential lines, section navigation, GitHub link.
2. Right work area: two featured projects in vertical sequence.
3. Additional work: text-first project list and one selected project preview.
4. Lower notes: a provisional boundary for future career/content material; no final career layout decision is made here.

## Layout specification

### Desktop (`min-width: 900px`)

- Two columns: a sticky left rail and independently scrolling work content on the right.
- Navigation stays in the left rail. The active item is indicated by an expanding horizontal line.
- Each featured project is a thin-bordered, spacious card with its actual capture and description in two columns.
- Additional project names form a text list. Selecting one updates the fixed sticky preview alongside it.

### Mobile (`max-width: 899px`)

- Introduction and all three credential lines remain before the work area.
- Navigation becomes an inline horizontal menu.
- Featured projects stack their image above the description.
- Additional projects become an accordion: tapping a row expands its 4:3 preview directly below the row.

## Interaction specification

- Section links scroll to their target; Intersection Observer changes the active navigation line.
- Additional project rows use a single selected state. Keyboard activation works through native buttons.
- On desktop selection changes the fixed preview. On mobile selection expands or closes the matching 4:3 panel.
- Project images are decorative; GitHub is the only external link in this prototype.

## Verification criteria

- The deployed `dist/index.html` is not edited.
- The preview loads from `dist/redesign-preview/index.html` and references existing captures only where available.
- At desktop width, the left rail is sticky and both featured projects show two-column content.
- At mobile width, the inline menu is visible, the three credential lines are retained, and an additional row expands a 4:3 preview.
- Automated checks validate required project data, image paths, section targets, and mobile accordion state changes.
- Desktop and mobile screenshots are saved with the prototype for visual review. Passing checks do not constitute design approval.
