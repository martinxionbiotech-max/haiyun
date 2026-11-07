---
title: "Flour Mill Capacity Calculation: From Demand to Tonnage in Four Steps"
description: "A practical calculation method for specifying flour mill capacity — extraction rate, utilisation headroom, shift pattern and wheat quality all change the number you should buy. Includes worked examples."
type: cluster
pillar: how-to-size-a-flour-mill
updated: 2026-11-07
readingTime: 9
keywords: ["flour mill capacity calculation", "how many tonnes per day flour mill", "flour mill output calculation"]
related: ["how-to-size-a-flour-mill", "flour-extraction-rate-economics", "flour-mill-power-consumption"]
keyTakeaways:
  - "Capacity in tonnes per day means wheat intake, not flour output. The two differ by the extraction rate."
  - "Always divide by 0.85 to convert average demand into required capacity — plants need maintenance windows."
  - "Shift pattern changes the plant you need as much as demand does."
faq:
  - q: "Is a 30 t/d flour mill 30 tonnes of wheat or 30 tonnes of flour?"
    a: "Wheat. Industry convention quotes capacity as wheat intake per 24 hours. At 76% extraction a 30 t/d plant produces about 22.8 tonnes of flour and 7 tonnes of bran per day."
  - q: "How many hours a day does a flour mill run?"
    a: "Small plants typically run one 8–10 hour shift; commercial plants two shifts; industrial plants 24 hours. Capacity ratings assume continuous operation, so a one-shift operator gets roughly 40% of the rated tonnage."
  - q: "Do I size on flour sold or wheat bought?"
    a: "Flour sold. Work backwards: flour demand ÷ extraction = wheat required; wheat required × 1.08 (losses) ÷ 0.85 (utilisation) = plant capacity to buy."
---

Capacity numbers in the milling industry are quoted in tonnes of **wheat per 24 hours**. This trips up almost every first-time buyer, because what they know is how much flour they can sell.

The conversion has four steps, and skipping any one of them gives you the wrong plant.

## Step 1 — Flour demand into wheat demand

Divide your finished flour requirement by the extraction rate.

| Product mix | Extraction | Wheat per tonne of flour |
|---|---|---|
| Patent only | 68–72% | 1.39–1.47 t |
| Two grades | 75–78% | 1.28–1.33 t |
| Atta / whole wheat | 85–92% | 1.09–1.18 t |

If you need 20 t of flour per day at 76% extraction, you need 26.3 t of wheat.

## Step 2 — Add process losses

Cleaning removes 1.5–4% by weight. Tempering adds water but sifting and conveying lose material. Spillage is real.

**Multiply by 1.08.** That covers 4% cleaning loss, 2% process loss and 2% handling loss.

26.3 × 1.08 = **28.4 t/day**

## Step 3 — Divide by utilisation

No plant runs at 100% every day. Maintenance, cleaning breaks, power interruptions and demand troughs all take a bite.

**Divide by 0.85.** That assumes a competent operation with one maintenance day per week and modest seasonal variation. If your market is highly seasonal, use 0.75.

28.4 ÷ 0.85 = **33.4 t/day**

You need a 35 t/d plant, or a 40 t/d with comfortable headroom.

## Step 4 — Check it against your shift pattern

Published capacity assumes 24-hour operation. If you plan one 10-hour shift, you get 10/24 = 42% of rated capacity.

This is where buyers get badly caught. A 30 t/d plant run for one shift produces 12.5 t of wheat throughput — about 9.5 t of flour.

Two responses:

- **Buy bigger.** A 60 t/d plant on one shift gives you 25 t/d of wheat throughput.
- **Run more shifts.** Same plant, three shifts, full output — but you need three crews.

Most new mills start with one or two shifts and buy capacity for three. Labour is easier to add than a building.

## A complete example

Target: 15 t of flour per day, two grades, 76% extraction, two shifts.

| Step | Calculation | Result |
|---|---|---|
| Wheat for flour | 15 ÷ 0.76 | 19.7 t |
| Plus losses | 19.7 × 1.08 | 21.3 t |
| Plus utilisation | 21.3 ÷ 0.85 | 25.1 t |
| Shift adjustment | 25.1 ÷ 0.83 (two shifts) | 30.2 t |
| **Plant to buy** | | **30 t/d (6FTDP-30)** |

Note the shift adjustment: two shifts out of 24 hours is 83% of rated capacity, so the required rated capacity rises.

## Capacity versus building

Once you have the tonnage, the building follows:

| Capacity | Building (L × W × H) | Installed power |
|---|---|---|
| 20 t/d | 12 × 5 × 4 m | 51 kW |
| 25 t/d | 15 × 5 × 4 m | 67 kW |
| 30 t/d | 18 × 6 × 6.5 m | 92 kW |
| 40 t/d | 18 × 8 × 8 m | 100 kW |
| 60 t/d | 24 × 8 × 8 m | 150 kW |
| 100 t/d | 35 × 7.5 × 18.5 m | 308 kW |
| 200 t/d | 50 × 7.5 × 22.5 m | 690 kW |

If your available building cannot accommodate the tonnage you calculated, either the tonnage is wrong or the building is.

## The three numbers people get wrong

**Using flour tonnage as plant tonnage.** Off by 25–30% in the wrong direction.

**Forgetting utilisation.** Produces a plant that is chronically 15% short and cannot catch up after any disruption.

**Forgetting shift pattern.** Produces a plant that delivers 40% of what the buyer expected in month one.
