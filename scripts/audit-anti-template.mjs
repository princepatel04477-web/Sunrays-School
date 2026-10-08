import fs from "fs";
import path from "path";

const forbidden = [
  "lorem",
  "variations of passages",
  "Anthony",
  "Cources",
  "SCIECNE",
  "maitlo",
  "Demografie",
  'href="#"',
];

function scanDir(dir) {
  let matches = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      matches = matches.concat(scanDir(fullPath));
    } else if (entry.isFile() && /\.(tsx?|jsx?|css|html|json|md)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf8");
      for (const term of forbidden) {
        if (content.toLowerCase().includes(term.toLowerCase())) {
          matches.push({ file: fullPath, term });
        }
      }
    }
  }
  return matches;
}

const found = scanDir("src");
console.log(`\n================ ANTI-TEMPLATE SCAN ================`);
console.log(`Target directory: src/`);
console.log(`Forbidden terms checked: ${forbidden.join(", ")}`);
console.log(`Total occurrences found: ${found.length}`);

if (found.length > 0) {
  console.error("\n❌ Found forbidden template terms in src:");
  for (const m of found) {
    console.error(`  - ${m.file}: "${m.term}"`);
  }
  process.exit(1);
} else {
  console.log("\n✅ ALL ZERO! No forbidden placeholder, typo, or dead link found in src/.\n");
}
