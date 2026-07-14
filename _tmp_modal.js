const fs = require("fs");
const h = fs.readFileSync("index.html", "utf8");
const i = h.indexOf("btn-abrir");
console.log(h.slice(i, i + 400));
const j = h.indexOf("modal-overlay");
console.log("\nmodal class usage samples:");
let idx = 0, n = 0;
while ((idx = h.indexOf("classList", idx + 1)) !== -1 && n < 8) {
  if (h.slice(idx, idx + 80).includes("modal") || h.slice(idx - 40, idx + 80).includes("modal")) {
    console.log(h.slice(idx - 60, idx + 100).replace(/\s+/g, " "));
    n++;
  }
}
// find open modal pattern
const k = h.indexOf("tabay-modal");
console.log("\ntabay-modal", h.slice(k, k + 200));
const m = h.indexOf("function abrir");
console.log("\nabrir", m, h.slice(m, m + 250));
