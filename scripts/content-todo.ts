/**
 * Scripts to extract and list all TODO_CLIENT markers across the content layer.
 * Run via `npm run content:todo`.
 */

import { todoRegistry } from "../src/content/todo";

// Import content files to ensure registration executes
import "../src/content/site";
import "../src/content/levels";
import "../src/content/faculty";
import "../src/content/labs";
import "../src/content/stats";
import "../src/content/messages";
import "../src/content/fees";
import "../src/content/disclosure";

console.log("===============================================================================");
console.log("             SUNRAYS VIDHYALAYA — CONTENT VERIFICATION CHECKLIST              ");
console.log("===============================================================================");
console.log(`Found ${todoRegistry.length} pending client placeholders across content files.\n`);

const byFile = todoRegistry.reduce((acc, item) => {
  if (!acc[item.location]) {
    acc[item.location] = [];
  }
  acc[item.location]!.push(item);
  return acc;
}, {} as Record<string, typeof todoRegistry>);

for (const [file, items] of Object.entries(byFile)) {
  console.log(`📁 File: src/content/${file} (${items.length} items)`);
  for (const item of items) {
    console.log(`  • [${item.field}]`);
    console.log(`    Placeholder: "${item.currentValue}"`);
    if (item.notes) {
      console.log(`    Notes: ${item.notes}`);
    }
  }
  console.log("");
}

console.log("===============================================================================");
console.log("Please collect these values from the school administration to finalize content.");
console.log("===============================================================================");
