---
title: "How to Size a Wheat Flour Mill: The Complete Engineering Method"
seoTitle: "How to Size a Wheat Flour Mill: The Engineering Method"
description: "The five-stage method for sizing a wheat flour mill from a market demand figure: extraction, utilisation, flow sheet, sifter area and power budget, with."
type: pillar
order: 1
updated: 2026-11-07
readingTime: 8
keywords: ["how to size a flour mill", "flour mill capacity calculation", "flour milling plant design", "wheat flour plant sizing", "flour mill feasibility"]
related: ["flour-mill-capacity-calculation", "flour-mill-power-consumption", "flour-mill-building-requirements", "flour-mill-layout-design", "how-does-a-flour-mill-work", "flour-mill-electrical-supply"]
keyTakeaways:
  - "Size from finished flour demand backwards, not from wheat intake forwards — the difference between 72% and 78% extraction is 8% of your wheat bill."
  - "Sifter area is the binding constraint in most flow sheets: allow 1 m² per 0.8 t of daily capacity for a 4B5M layout."
  - "Power consumption per tonne falls from ~72 kWh at 60 t/d to ~67 kWh at 500 t/d; at 300 t/d that gap is worth roughly 500,000 kWh a year."
  - "A 30 t/d plant needs 18 × 6 × 6.5 m and 92 kW; a 200 t/d plant needs 50 × 7.5 × 22.5 m and 690 kW. Those numbers decide the building before the machines."
faq:
  - q: "How do I calculate the capacity of a flour mill I need?"
    a: "Start from your finished flour sales per day, divide by the extraction rate (typically 0.72–0.78) to get wheat intake, then add 10% headroom for peak days and cleaning losses. A mill selling 15 t of flour per day at 75% extraction needs 20 t of wheat per day, so a 20–25 t/d plant is correct."
  - q: "Is it better to buy a larger plant than I need now?"
    a: "Usually yes, up to one capacity step. The marginal capital cost of the next size up is typically 15–25%, while the cost of a second plant later is 100% plus a building extension. But do not jump two steps — an oversized plant runs below its design point where specific power consumption rises."
  - q: "What determines the number of roll passages?"
    a: "Target extraction and flour grade count. 3B2M is the minimum for a clean patent flour; 4B4M allows two or three grades simultaneously; 4B5M1S1T with a purifier is required for genuinely low-ash patent flour at high extraction."
  - q: "How much building height does a flour mill need?"
    a: "Below 30 t/d with floor-mounted plansifters: 4–6.5 m clear. At 40–60 t/d: 8 m. Above 60 t/d the plant is normally storey-typed with 12.5–27.5 m total height depending on capacity."
  - q: "How long does it take to build a flour mill?"
    a: "A 20–30 t/d plant: 80–100 days from order to first flour. A 60 t/d plant: 100–130 days. A 300 t/d turnkey plant: 8–11 months including civil works."
heroImage: "/images/p13_05.webp"
---

Sizing a flour mill is an exercise in working backwards. Almost every failed project we are asked to rescue was sized forwards — someone decided to buy a 30 t/d plant, built a building around it, and only later worked out that the local market could absorb 12 t of flour a day.

This article sizes a plant **forwards, from the market backwards** — flour demand, extraction, flow sheet, sifting area, power, building. For the reverse check — starting from a tonnage you have been quoted and testing whether it survives losses, utilisation and shift pattern — see [flour mill capacity calculation](/knowledge/flour-mill-capacity-calculation/).

The method below is the one we use on every enquiry. It has five stages, and each stage constrains the next.

## Stage 1 — Establish finished flour demand, not wheat intake

The first number you need is not tonnage. It is **bags sold per day, by grade**.

Write it down like this:

| Grade | Bag size | Bags/day | Tonnes/day | Price/t |
|---|---|---|---|---|
| Patent / special grade 1 | 25 kg | 300 | 7.5 | reference |
| Standard / grade 2 | 50 kg | 140 | 7.0 | −12% |
| Bran (by-product) | 50 kg | 120 | 6.0 | −70% |

This table does three things at once. It gives you total flour output (14.5 t/day), it gives you the product mix that determines how many passages and sifter compartments you need, and it gives you the revenue structure that determines whether the plant can service its capital.

Most feasibility studies skip this and go straight to "we want a 30-ton plant". That is buying a machine before knowing the job.

## Stage 2 — Convert flour demand into wheat intake

Extraction rate is the ratio of flour produced to wheat milled. It is the single most economically important number in the plant, because wheat is 65–80% of your cost base.

| Product | Typical extraction | Wheat needed per tonne of flour |
|---|---|---|
| Patent flour only | 65–72% | 1.39–1.54 t |
| Patent + standard (2 grades) | 75–78% | 1.28–1.33 t |
| Atta / whole wheat | 85–92% | 1.09–1.18 t |
| Maida (South Asian) | 72–76% | 1.32–1.39 t |

At 14.5 t of flour per day and 76% extraction, you need 19.1 t of wheat per day. Add 8% for cleaning losses, moisture shrinkage in tempering and spillage: **20.6 t/day**.

Now add headroom. A plant that runs at 100% of design capacity every day has no maintenance window and no ability to catch up after a breakdown. Design for 85–90% utilisation:

**20.6 ÷ 0.87 ≈ 23.7 t/day → specify a 25 t/d plant.**

This is why so many buyers end up on the 6FTDP-25 rather than the 20. They started with a "20 t/d requirement" and the arithmetic moved them one step.

Assumptions matter here. If your wheat is dirty (2.5% impurity instead of 1%), cleaning losses double and you need a bigger intake for the same output. If your wheat is dry (10.5% moisture instead of 12.5%), you lose less in tempering but the bran is more brittle and extraction drops. Both effects are real and both are usually ignored at the enquiry stage.

## Stage 3 — Choose the flow sheet, which sets the passage count

The flow sheet is the diagram of how wheat becomes flour. Its notation is compact: **3B2M** means three break passages and two reduction passages.

| Flow sheet | Minimum capacity | Grades produced | Purifier | Typical extraction |
|---|---|---|---|---|
| 3B2M | 15 t/d | 1–2 | No | 72–74% |
| 3B3M | 25 t/d | 2 | No | 74–76% |
| 3B4M1S | 40 t/d | 3 | Yes (1 unit) | 75–77% |
| 4B5M1S1T | 60 t/d | 3–4 | Yes (bank) | 76–79% |
| 5B7M2S2T | 100 t/d+ | 4+ | Yes (bank) | 77–80% |

B = break, M = reduction, S = scratch/sizing, T = tailing.

Here is the rule that matters: **you cannot reach a given extraction with too few passages.** Each additional break passage scrapes a little more endosperm off the bran. Each additional reduction passage grinds that endosperm a little finer. Stop too early and you leave flour on the bran, which goes out the door as low-value by-product.

A 3B2M plant physically cannot exceed about 74% extraction no matter how it is operated. If your business plan assumes 78%, you need 4B4M and a [purifier](/equipment/purifier/). This is the most common arithmetic error in small-mill feasibility.

## Stage 4 — Size the sifting area, which usually binds

Sifting area is the constraint that surprises people, because it is invisible on a price list. Sifters are expensive and large, and under-sizing them produces a plant that grinds fine but cannot classify.

The working rule for a standard flow sheet:

**Sifting area (m²) = daily capacity (t/d) ÷ 0.8**

So:

| Capacity | Sifter area needed | Typical configuration |
|---|---|---|
| 20 t/d | 25 m² | 3 × twin-bin plansifter (10 m² per unit, 30 m² total) |
| 30 t/d | 37.5 m² | 1 × FSFG6×24 (39.5 m²) |
| 60 t/d | 75 m² | 2 × FSFG6×24 (39.5 m² each, 79 m² total) |
| 100 t/d | 125 m² | 2 × FSFG8×24 + 1 × FSFG6×24 (145 m²) |
| 200 t/d | 250 m² | 5 × FSFG8×24 (264 m²) |
| 300 t/d | 375 m² | 7 × FSFG8×24 (369 m²) + check sifter |

The rule assumes a standard 4B5M flow sheet. If your flow sheet has more passages, you need more sifting area. If you are making a single whole wheat product with no grading, you need much less.

## Stage 5 — Set the power budget and the building envelope

Power and building dimensions both flow directly from capacity, and both are published in our plant tables because they are the two numbers that block a project at the planning-permission stage rather than the purchase stage.

| Capacity | Installed power | kWh per tonne flour | Building (L × W × H) |
|---|---|---|---|
| 30 t/d | 92 kW | 70–74 | 18 × 6 × 6.5 m |
| 60 t/d | 190 kW | 70–74 | 30 × 7 × 12.5 m |
| 100 t/d | 308 kW | 70–74 | 35 × 7.5 × 18.5 m |
| 200 t/d | 690 kW | 65–71 | 50 × 7.5 × 22.5 m |
| 300 t/d | 920 kW | 65–71 | 60 × 11 × 27.5 m |
| 500 t/d | 1,650 kW | 65–70 | 55 × 17 × 27.5 m |

Two observations that are worth more than the table.

**First, specific power falls with scale.** The gap between 74 and 65 kWh/t looks small until you multiply it. A 300 t/d plant running 330 days consumes 300 × 330 × 7 = 693,000 kWh a year more if it operates at 72 instead of 65 kWh/t. At USD 0.10/kWh that is USD 69,300 per year, every year, for the life of the plant. Scale is not just about labour.

The 30 t/d row is a floor-mounted plant. From 60 t/d up the figures are tower-type, with pneumatic lift and a purifier bank. The floor-mounted 6FTDP-60 without pneumatic lift draws about 150 kW at the same tonnage — less installed power, more manual handling, and the reason the 20–60 t/d class is cheaper to build but dearer to staff.

**Second, height is the expensive dimension.** Going from 8 m to 18.5 m roughly doubles civil cost per square metre. This is why the [20–30 t/d](/flour-milling-plant/20-30tpd-flour-plant/) class uses floor-mounted [plansifters](/equipment/high-square-plansifter/) — it keeps the building cheap. Above 60 t/d the gravity flow advantage of a tower pays for the structure within a few years of reduced pneumatic conveying power.

## Worked example — a 60 t/d plant in East Africa

A buyer has a wheat supply contract and a market for two flour grades.

1. **Demand**: 45 t/day of patent flour, 15 t/day of standard flour. Total 60 t/day *of flour* — not of wheat. This distinction is where most sizing goes wrong.
2. **Extraction**: 78% at two grades. Wheat needed = 60 ÷ 0.78 = 76.9 t/day. Plus 6% cleaning and handling losses = 81.5 t/day of intake.
3. **Headroom**: at 87% utilisation, 81.5 ÷ 0.87 = 93.7 t/day. Specify a 100 t/d plant — not a 60.
4. **Flow sheet**: 4B5M1S1T with a purifier bank and three high square plansifters. This is the minimum that holds 78%.
5. **Sifter area**: 100 ÷ 0.8 = 125 m². Two FSFG8×24 plus one FSFG6×24 give 145 m² — comfortably sized, which is what you want when the flow sheet is at the top of its extraction range.
6. **Power**: 308 kW installed. At 70 kWh/t of flour and 78 t of flour per day, daily consumption is 5,460 kWh — an average draw of 228 kW, a 0.74 load factor.
7. **Building**: 35 × 7.5 × 18.5 m, storey-typed. Height is the expensive dimension, which is why the 20–30 t/d class avoids it.

The entire sizing exercise took seven numbers, and the answer was a plant 67% larger than the buyer's opening request of "a 60-ton plant". That is normal, not an upsell — the 60 was a flour figure, the plant is specified in wheat. The rest of the project — civil design, electrical, erection sequencing — is engineering labour, but it is labour applied to a correctly specified target.

## Where sizing goes wrong

Four failure modes, in order of frequency:

**Sizing to peak demand instead of average.** A mill that sells 20 t/day in December and 8 t/day in June should not buy a 20 t/d plant. It should buy 12 t/d and run an extra shift in December.

**Ignoring wheat variability.** A plant specified for 12.5% moisture hard wheat will underperform on 10.5% soft wheat. Specify the worst wheat you will actually buy, not the best.

**Under-sizing sifting to save capital.** Sifter cost is roughly 12–18% of plant cost. Cutting it by a third saves 4–6% of capex and costs 3–5 points of extraction forever.

**Forgetting the by-product.** Bran is 22–28% of intake and it has to go somewhere — storage, bagging, transport. A 60 t/d plant produces 18 t/day of bran, which needs a silo or a very reliable buyer.

## What to send us

If you want a flow sheet rather than a brochure, send:

- Target flour output per day, by grade
- Wheat type, origin and typical analysis (moisture, protein, ash, impurity)
- Available building footprint and height, or confirmation that a new building is possible
- Local power supply: voltage, phases, available kVA
- Water availability and effluent constraints
- Labour availability and skill level
- Budget range and financing structure

With those seven items we can produce a preliminary flow sheet, equipment list and budget range in 12 working hours. Without them, any quotation you receive is a guess dressed as a price.
