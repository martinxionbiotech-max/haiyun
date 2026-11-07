---
title: "Wheat Blending Strategy: How to Hit a Protein Target Every Day"
description: "Batch versus continuous blending, proportioning equipment, the arithmetic of hitting a specification, and why most mills lose money by blending badly rather than buying well."
type: cluster
pillar: wheat-procurement-and-storage
updated: 2026-11-07
readingTime: 7
keywords: ["wheat blending", "grain proportioning system", "protein blending flour mill", "wheat blend calculation"]
related: ["wheat-procurement-and-storage", "wheat-classes-and-specifications", "wheat-protein-and-flour-quality"]
keyTakeaways:
  - "Blending lets you hit a protein target within ±0.2%; without it you hit ±0.6% and lose contracts."
  - "Continuous proportioning with weigh-belt feeders is the only method that holds specification at 60 t/d and above."
  - "Blend on cost, not just protein — two wheats at the same protein can differ 20% in price."
faq:
  - q: "How do I calculate a wheat blend?"
    a: "Solve for the proportion x of wheat A: protein_target = x·protein_A + (1−x)·protein_B. With 13.5% and 10.0% wheats targeting 12.0%, x = 0.571, so 57.1% of the high-protein wheat."
  - q: "What equipment does wheat blending need?"
    a: "Above 20 t/d: two or more silos with variable-speed weigh-belt feeders under each, a collecting conveyor and a controller holding the ratio. Below 20 t/d, batch weighing into a mixer is acceptable."
  - q: "Can I blend to fix falling number?"
    a: "Partially. A low falling number wheat can be blended up to about 20% into sound wheat. Beyond that the enzyme load is too high regardless of the average."
---

## Why blend at all

Because no single wheat does everything, and because the cheapest way to hit a specification is usually a mixture.

| Situation | Blending answer |
|---|---|
| Local wheat 10.5%, market wants 12.5% | Blend with imported 14% spring wheat |
| Harvest varies 11.8–12.9% | Blend high and low lots to hold 12.3% |
| Two grades required simultaneously | Blend differently for each product |
| Cheap wheat available but weak gluten | Blend with strong wheat for structure |

## The arithmetic

Two-component blend:

**protein_target = x · protein_A + (1 − x) · protein_B**

Target 12.0% from 13.5% (A) and 10.0% (B):

12.0 = 13.5x + 10.0 − 10.0x
2.0 = 3.5x
**x = 0.571** → 57.1% wheat A

### Three components

Target 12.0% from 14.0%, 11.0% and 9.5%:

Choose proportions, then check. With A 40%, B 40%, C 20%:
(0.4 × 14.0) + (0.4 × 11.0) + (0.2 × 9.5) = 5.6 + 4.4 + 1.9 = **11.9%**

Adjust: A 45%, B 40%, C 15% → 6.3 + 4.4 + 1.43 = **12.13%**

Three components give you a cost-optimisation problem, not just an arithmetic one — see below.

## Blending on cost, not just protein

Two wheats at identical protein can differ enormously in price.

| Wheat | Protein | Price | Cost per % protein |
|---|---|---|---|
| Local hard | 12.0% | USD 290/t | USD 24.2 |
| Imported spring | 14.2% | USD 355/t | USD 25.0 |
| Local soft | 9.8% | USD 250/t | USD 25.5 |

Here the local hard wheat is the cheapest protein source, so blend toward it. In another season the ranking reverses. **The blend should be recalculated every time a purchase is made**, not fixed once.

A simple linear program — minimise cost subject to protein ≥ target, falling number ≥ target, moisture ≤ limit — is worth 2–5% on the wheat bill at any scale above 100 t/d. Spreadsheets do this adequately; dedicated mill software does it continuously.

## Batch versus continuous

| Method | Accuracy | Scale | Cost |
|---|---|---|---|
| Manual batch weighing | ±1.0% | Under 10 t/d | Negligible |
| Batch weigh hopper + mixer | ±0.5% | 10–30 t/d | USD 15,000–40,000 |
| Continuous weigh-belt proportioning | ±0.2% | 20 t/d+ | USD 40,000–150,000 |
| Continuous with NIR feedback | ±0.1% | 100 t/d+ | USD 120,000–300,000 |

### Why continuous wins at scale

At 60 t/d you blend 78 t of wheat per day. A batch system requires a weigh hopper, a mixer and a buffer bin — the buffer alone is 2–4 hours of capacity, and every transition creates a slug of off-specification wheat.

Continuous proportioning draws from each silo at a controlled rate onto a common conveyor. There is no buffer, no transition slug, and the correction is instantaneous when a new silo is switched in.

## Equipment

| Component | Function | Notes |
|---|---|---|
| Weigh-belt feeder | Meters each wheat at a set rate | One per component silo |
| Collecting belt | Combines streams | Must handle total rate |
| Belt scale | Verifies total | Cross-check on feeders |
| Controller | Holds ratios, logs data | PLC with recipe storage |
| Moisture sensor (optional) | Corrects for water content | Dry-matter blending |
| NIR (optional) | Measures protein in real time | Feedback control |

### Dry matter correction

Blending on wet weight is wrong when moisture differs. Two wheats at 12.0% and 14.0% moisture, blended 50/50 by wet weight, give 13.0% moisture — but the protein on a dry basis is not what the arithmetic predicted.

Correct every component to dry matter before calculating:

**dry mass = wet mass × (1 − moisture)**

For precise work, the controller should accept moisture per silo and convert automatically.

## Verification

| Check | Frequency |
|---|---|
| Feeder calibration | Weekly |
| Blend sample protein | Every shift |
| Falling number on blend | Daily |
| Moisture on blend | Every shift |
| Full analysis | Weekly |

A blend that is calculated correctly but metered incorrectly is worse than no blend at all, because it produces confident-looking paperwork attached to out-of-specification flour.

## The failure modes

**Blending to hide a defect.** Blending a 180 s falling number wheat into sound wheat does not fix the enzyme — it dilutes it, and at 20% inclusion the flour still fails. Falling number is the one parameter where blending is a weak tool.

**Blending without silo segregation.** If you cannot draw from a specific silo, you cannot blend. This is a storage design decision made before the mill is built — see the silo article.

**Blending on paper only.** Purchase contracts specify protein at 14% moisture basis; the mill measures at whatever moisture the wheat actually is. Without correction, the blend is wrong by 0.1–0.3% routinely.

**Never re-optimising.** Wheat prices move weekly. A blend ratio fixed at the start of the season is almost certainly not the cheapest blend by month three.
