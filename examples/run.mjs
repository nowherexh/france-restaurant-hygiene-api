// Run France Restaurant Hygiene Ratings API (Alim'confiance) on Apify.
// npm install apify-client
// APIFY_TOKEN=your_token node run.mjs
import { ApifyClient } from "apify-client";

const input = {
  "ratings": [
    "urgent",
    "to-improve"
  ],
  "departments": [
    "33"
  ],
  "lastNDays": 90
};

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor("jet_mythology/france-food-hygiene-inspections").call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(`${items.length} items`);
console.log(JSON.stringify(items.slice(0, 3), null, 2));
