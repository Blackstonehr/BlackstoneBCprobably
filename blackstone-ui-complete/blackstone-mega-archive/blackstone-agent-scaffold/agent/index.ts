
import dotenv from "dotenv";
dotenv.config();
import { auditUI } from "./tasks/auditUI.js";
import { generateDocs } from "./tasks/generateDocs.js";

async function main() {
  console.log("Blackstone Agent started...");
  await auditUI();
  await generateDocs();
  console.log("All tasks completed.");
}

main().catch(console.error);
