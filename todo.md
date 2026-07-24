# itemViewer.html - Improvement TODO List

## 🔴 High Priority (Bugs & Breaking Issues)

- [x ] **Fix CSS syntax error** (line 42)
  - Missing semicolon after `height: 650px` in `.gameContainer`
  - Affects grid layout rendering

- [ ] **Remove variable shadowing** (line 463)
  - `const [key, random] = ...` shadows the function name `random()`
  - Change to: `const [key, value] = ...`

- [ ] **Fix HTML nesting issue** (line 580-583)
  - `detailsTag` contains `<p>` elements but is itself a `<p>`
  - Change `.detailsTag` to `<div>` or restructure content

## 🟡 Medium Priority (Code Quality)

### Structure & Organization
- [ ] **Separate HTML, CSS, and JavaScript into separate files**
  - Create `index.html` (markup only)
  - Create `styles.css` (all styling)
  - Create `script.js` (all logic)
  - Improves maintainability and reusability

- [ ] **Extract configuration into JSON/JS module** (`config.js`)
  - Move `types`, `forms`, `materials`, `prefixes`, `suffixes`, `rarities`, `itemRules`
  - Makes item definitions easy to modify without touching code
  - Example structure:
    ```javascript
    // config.js
    export const itemConfig = { types, forms, materials, ... }
    ```

### Code Refactoring
- [ ] **Consolidate duplicate functions**
  - `createRandomItem()` and `createRandomItem2()` are 90% identical
  - Create single function with parameter: `createRandomItem(includeCustomPrefixSuffix = false)`

- [ ] **Simplify and improve `random()` helper**
  - Current logic is confusing with the `Object.entries` approach
  - Refactor to:
    ```javascript
    function random(input) {
      const arr = Array.isArray(input) ? input : Object.keys(input);
      return arr[Math.floor(Math.random() * arr.length)];
    }
    ```

- [ ] **Extract item display name logic into function**
  - Current inline logic (lines 559-565) is repeated/complex
  - Create: `function getItemDisplayName(item) { ... }`

- [ ] **Fix variable naming inconsistencies**
  - Rename `testEintrag` → `inventoryItem`
  - Rename `entryMidContainer` → `inventoryGrid`
  - Rename `entryRightContainer` → `logPanel`
  - Use consistent camelCase (e.g., `entryLeftContainer`, not `Midcontainer`)

### Remove Unused Code
- [ ] **Delete commented-out code** (lines 159-161, 174-176, 185-187, 523-542)
  - Old test elements and `createItem()` function
  - Use version control if historical reference needed

- [ ] **Remove placeholder text from HTML**
  - `<p>LOGO</p>`, `<p>TESTEINTRAG</p>`, `<p>foot</p>`
  - Replace with semantic elements or actual content

- [ ] **Clean up comments**
  - Remove German test comments like `// console.log(key)`
  - Keep only meaningful comments about "why", not "what"

## 🟢 Low Priority (Enhancements & UX)

### UI/UX Improvements
- [ ] **Make button labels more semantic**
  - Change button text from function names to user-friendly labels
  - `renderInventory()` → `Refresh Inventory`
  - `createRandomItem()` → `Add Random Item`
  - `createRandomItem() + pre/suffix` → `Add Item (With Modifiers)`

- [ ] **Add keyboard shortcuts**
  - Support hotkeys for common actions (e.g., `R` to refresh, `A` to add item)

- [ ] **Add item counter/stats**
  - Display total items, total value, etc. in header or stats panel

- [ ] **Improve accessibility**
  - Add `aria-label` attributes to buttons
  - Ensure color contrast meets WCAG standards
  - Add focus states to interactive elements

### Data Persistence
- [ ] **Implement localStorage persistence**
  - Save inventory on every change
  - Load inventory on page load
  - Add "Clear Inventory" button

- [ ] **Add inventory export/import**
  - Export as JSON for backup
  - Import from JSON to restore state

### Functionality
- [ ] **Add weighted rarity distribution**
  - Current: uniform random selection per `itemRules.rarities`
  - Replace with weighted algorithm (e.g., 60% common, 30% uncommon, 8% rare, 2% epic)
  - Add configuration in `itemRules` or separate `rarityWeights`

- [ ] **Add item removal/deletion**
  - Right-click context menu or delete button on each item
  - Confirm before deletion

- [ ] **Add filtering/sorting**
  - Filter by type (metal, wood, fish, herb)
  - Filter by rarity
  - Sort by name, rarity, amount, quality

- [ ] **Add item search**
  - Search bar to find items by name

- [ ] **Add item quantity management**
  - Increment/decrement amount directly in UI
  - Stack identical items (same type, form, prefix, suffix)

### Styling
- [ ] **Consolidate CSS color variables**
  - Replace hardcoded colors with CSS custom properties
  - Example:
    ```css
    :root {
      --primary-color: rgb(217, 21, 150);
      --bg-dark: #15071a;
      --text-light: #d8bfd8;
    }
    ```

- [ ] **Remove redundant CSS rules**
  - Multiple elements share identical border/margin declarations
  - Create utility classes or simplify selectors

- [ ] **Add responsive design**
  - Media queries for mobile/tablet
  - Currently assumes desktop-only layout

- [ ] **Improve visual hierarchy**
  - Add shadows, spacing, or size variation for emphasis
  - Better distinguish header/footer from main content

### Testing & Documentation
- [ ] **Add JSDoc comments to functions**
  - Document parameters, return values, side effects

- [ ] **Add unit tests**
  - Test `random()` helper
  - Test `createRandomItem()` logic
  - Test item rendering

- [ ] **Create README**
  - Document how to use the item viewer
  - Explain item structure and configuration

## 📋 Refactoring Checklist

- [ ] Separate files (HTML, CSS, JS)
- [ ] Extract config
- [ ] Remove unused code
- [ ] Consolidate functions
- [ ] Improve naming
- [ ] Fix bugs (semicolon, shadowing, nesting)
- [ ] Add localStorage
- [ ] Improve UI/accessibility
