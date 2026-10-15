#!/usr/bin/env bash
# Run France Restaurant Hygiene Ratings API (Alim'confiance) on Apify and print the results as JSON.
# export APIFY_TOKEN=your_token && bash run.sh
set -euo pipefail
curl -sS -X POST "https://api.apify.com/v2/acts/jet_mythology~france-food-hygiene-inspections/run-sync-get-dataset-items?token=${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"ratings": ["urgent", "to-improve"], "departments": ["33"], "lastNDays": 90}'
