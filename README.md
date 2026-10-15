# France Restaurant Hygiene Ratings API (Alim'confiance)

**Every official hygiene inspection of French restaurants and food businesses, with SIRET and GPS.** Find the establishments rated « à améliorer » near you the day they are published, or add hygiene ratings to your app or map.

> 🇫🇷 Résultats officiels des contrôles d'hygiène des restaurants (Alim'confiance) avec SIRET et GPS. Les exemples ci-dessous sont en anglais ; les données restent en français.

**[▶ Run it on Apify](https://apify.com/jet_mythology/france-food-hygiene-inspections)** — no installation, no scraping, official data only.

## Use it without code

1. Open the [Actor page](https://apify.com/jet_mythology/france-food-hygiene-inspections) and click **Try for free**.
2. Paste one of the inputs below (or use the form).
3. Click **Start**, then **Export** the results as **Excel, CSV or JSON**, or send them to Google Sheets, Make, Zapier or n8n.

Schedule it (daily or weekly) to get only what changed since the last run.

## Sample output

```json
{
  "inspectionDate": "2026-10-08",
  "rating": "good",
  "ratingLabel": "Satisfaisant",
  "inspectionContext": "Re-contrôle",
  "name": "INTER PIZZA",
  "siret": "53293848700024",
  "activity": "Restaurants",
  "destination": "Restauration rapide",
  "address": {
    "street": "RUE BERTIN LALANDE",
    "postalCode": "33510",
    "city": "Andernos-les-Bains",
    "department": "33"
  },
  "geo": {
    "lat": 44.744672,
    "lon": -1.092849
  }
}
```

*Real result from 8 October 2026 (abridged).* Full field list below.

## Use it from code

Get your API token in [Apify Console → Settings → API & Integrations](https://console.apify.com/settings/integrations).

**Python** (`pip install apify-client`) — see [`examples/run.py`](examples/run.py)

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("jet_mythology/france-food-hygiene-inspections").call(run_input={"ratings": ["urgent", "to-improve"], "departments": ["33"], "lastNDays": 90})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

**JavaScript** (`npm install apify-client`) — see [`examples/run.mjs`](examples/run.mjs)

```js
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: "YOUR_APIFY_TOKEN" });
const run = await client.actor("jet_mythology/france-food-hygiene-inspections").call({"ratings": ["urgent", "to-improve"], "departments": ["33"], "lastNDays": 90});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

**curl** — one call, results returned directly — see [`examples/run.sh`](examples/run.sh)

```bash
curl -X POST "https://api.apify.com/v2/acts/jet_mythology~france-food-hygiene-inspections/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"ratings": ["urgent", "to-improve"], "departments": ["33"], "lastNDays": 90}'
```

## Example inputs

**Establishments to be corrected urgently in Gironde in the last 90 days**
```json
{"ratings": ["urgent", "to-improve"], "departments": ["33"], "lastNDays": 90}
```

**All inspected bakeries in Paris**
```json
{"activities": ["boulangerie"], "postalCodes": ["750"], "lastNDays": 365}
```

**Weekly alert on poor results for a hygiene consultant**
```json
{"ratings": ["to-improve", "urgent"], "departments": ["33", "24", "47"], "monitorNewInspections": true, "monitorKey": "sud-ouest", "lastNDays": 30}
```

## Who uses it

- **Hygiene consultants and HACCP trainers**: find establishments rated "A améliorer" or "A corriger de manière urgente" in your area, the day the result is published.
- **Food suppliers, equipment and cleaning companies**: build lists of active food businesses by activity and area.
- **Delivery platforms, review sites and insurers**: enrich restaurant listings or risk scores with the official rating.
- **Journalists and local media**: map inspection results by city.

## What you get

| Field | Description |
|---|---|
| `inspectionDate`, `inspectionId` | Date and official inspection number |
| `rating`, `ratingCode`, `ratingLabel` | `very-good` (1), `good` (2), `to-improve` (3), `urgent` (4), with the official French label |
| `overallAssessment`, `followUp`, `inspectionContext` | Assessment, follow-up action, planned inspection or re-check |
| `name`, `legalName`, `brand`, `siret`, `siren` | Establishment identity |
| `activity`, `activityType`, `destination`, `sector` | What the establishment does |
| `address`, `geo` | Street, postal code, city, INSEE code, département, region, latitude/longitude |
| `approvalNumber` | Sanitary approval number of food plants, when relevant |

## Pricing

Pay per result on Apify: you only pay for the items returned, nothing for what is filtered out. In monitor mode you only pay for new or changed items. Current prices are on the [Actor page](https://apify.com/jet_mythology/france-food-hygiene-inspections).

## Good to know

- The official dataset covers about the last 12 months of inspections and is refreshed weekly.
- By default only the latest inspection of each establishment is returned (`latestPerEstablishment`).
- A rating reflects the situation on the inspection day.

## Source and licence

Résultats des contrôles officiels sanitaires — dispositif Alim'confiance, Ministère de l'Agriculture (DGAL), published on data.gouv.fr under Licence Ouverte. This Actor is independent and not affiliated with the French administration.

The code examples in this repository are under the MIT licence. This repository contains usage examples only; the Actor itself runs on [Apify](https://apify.com/jet_mythology/france-food-hygiene-inspections).

---

More French public data Actors by the same author: [apify.com/jet_mythology](https://apify.com/jet_mythology)
