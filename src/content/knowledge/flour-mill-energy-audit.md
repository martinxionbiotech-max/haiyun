---
title: "Flour Mill Energy Audit: Where the Kilowatt-Hours Actually Go"
seoTitle: "Flour Mill Energy Audit: Where the kWh Actually Go"
description: "A stage-by-stage breakdown of flour mill power use, the measurements that reveal waste, and the interventions with the shortest payback, plus payback."
type: cluster
pillar: flour-mill-project-economics
updated: 2026-11-07
readingTime: 4
keywords: ["flour mill energy audit", "flour milling power consumption", "kwh per tonne flour", "flour mill energy saving"]
related: ["flour-mill-project-economics", "flour-mill-power-consumption", "flour-mill-operating-cost-breakdown", "flour-milling-flow-sheet-design"]
keyTakeaways:
  - "Milling consumes 60–70% of plant power; cleaning 12–18%; conveying 8–15%; packing and dust collection the rest."
  - "Specific power falls from ~72 kWh/t of flour at 60 t/d to ~67 kWh/t at 500 t/d — scale efficiency is worth 7%."
  - "The three highest-return interventions are gap optimisation, sifter screen condition and eliminating idle running."
faq:
  - q: "How much electricity does a flour mill use per tonne?"
    a: "65–74 kWh per tonne of flour for a well-run roller mill plant. Small plants under 30 t/d run 80–88 kWh/t; 500 t/d plants reach 63–68 kWh/t. Figures on a wheat basis are 24% lower at a 76% extraction rate."
  - q: "What is the biggest energy consumer in a flour mill?"
    a: "The roll mills, at 55–65% of total plant power. Sifters take 10–15%, pneumatic conveying 8–15%, cleaning 12–18% and dust collection 3–6%."
  - q: "How can a flour mill reduce energy costs?"
    a: "In payback order: fix idle running, optimise roll gaps, replace worn sifter screens, convert pneumatic to mechanical conveying where routing allows, add VFDs to fans, and correct power factor."
---

A 200 t/d plant spends roughly USD 350,000 a year on electricity, and most of it passes through roll stands whose gaps nobody has checked since commissioning. The highest-return savings are not capital projects: they are idle running, roll gap settings and blinded sifter screens, all of which are found by measurement rather than by purchase.

This article is about **diagnosing an existing mill** — what to meter, where the kilowatt-hours actually go, and the ten interventions ranked by payback. For budgeting power on a new plant, and for why specific consumption falls with scale, see [flour mill power consumption](/knowledge/flour-mill-power-consumption/).

## The baseline

A 200 t/d plant milling 200 t of wheat a day produces 152 t of flour. At 70 kWh/t of flour that is 10,640 kWh daily — about 3.5 GWh a year at 330 operating days. At USD 0.10/kWh that is USD 351,000 annually, typically **15–22% of conversion cost** once the wheat itself is excluded.

That is an average draw of about 440 kW against 690 kW installed — the bottom of the 0.65–0.80 load-factor band, which is where large plants with sequential start-up sit.

A 5% reduction is USD 17,500 a year, every year, for interventions that mostly cost engineering time.

## Where the power goes

| Stage | Share of total | Notes |
|---|---|---|
| Roll mills | 55–65% | Dominant, and highly sensitive to gap and flute condition |
| Sifters and plansifters | 10–15% | Mostly fixed load once running |
| Cleaning equipment | 12–18% | Fans and vibration motors |
| Pneumatic conveying | 8–15% | Zero if mechanical conveying is used |
| Dust collection | 3–6% | Fans, largely fixed |
| Packing and misc | 3–5% | |

### Specific power by plant size

| Capacity | kWh/t flour | Why |
|---|---|---|
| 20 t/d | 80–85 | Small motors, no load optimisation |
| 40 t/d | 72–78 | Better but still single-line |
| 60 t/d | 70–74 | Standard reference point |
| 100 t/d | 68–72 | Multiple lines, better matching |
| 200 t/d | 66–70 | Optimised flow sheet pays off |
| 500 t/d | 63–68 | Best motor efficiency and sifter loading |

The scale effect is real but it is not automatic. A badly designed 200 t/d plant consumes more per tonne than a well-designed 60 t/d plant. Capacity does not create efficiency; flow sheet design does.

## Measuring before changing

| Measurement | Instrument | Frequency |
|---|---|---|
| Total plant kWh | Utility meter or CT logger | Continuous |
| Sub-metering by area | kWh meters on mill, cleaning, conveying | Continuous |
| Per-motor power | Clamp meter or VFD readout | Weekly |
| Power factor | Utility bill or analyser | Monthly |
| Peak demand | Utility bill | Monthly |
| Idle consumption | Meter reading with mill empty | Monthly |

### The idle test

Run the plant empty for one hour and record consumption. A 200 t/d plant should idle at 8–15% of full-load power. Above 20% and you are paying for equipment to run when it is not producing.

Common idle offenders:

- Sifters and fans left running during breaks
- Dust collection on full flow when no dust is being generated
- Pneumatic conveying running to clear a line that is already clear
- Conveyors running empty because start-up sequence is manual

A sequenced start/stop with a 10-minute idle timeout typically saves 3–6% of total plant energy at zero capital cost.

## The ten interventions, ranked by payback

| # | Intervention | Saving | Cost | Payback |
|---|---|---|---|---|
| 1 | Idle-running elimination (sequencing, timers) | 3–6% | Engineering time | Under 1 month |
| 2 | Roll gap optimisation | 2–5% | Labour | 1–2 months |
| 3 | Sifter screen replacement (worn or blinded) | 2–4% | USD 3,000–15,000 | 2–4 months |
| 4 | Power factor correction | 1–3% of bill | USD 8,000–25,000 | 4–8 months |
| 5 | VFDs on cleaning and dust fans | 5–12% of fan power | USD 2,000–8,000 per fan | 6–14 months |
| 6 | Compressed air leak repair | 10–30% of air cost | Labour + parts | 1–3 months |
| 7 | Belt tension and pulley alignment | 1–3% of conveyor power | Labour | 2–4 months |
| 8 | Motor replacement with IE3/IE4 | 2–4% of motor power | USD 1,500–12,000 per motor | 2–5 years |
| 9 | Pneumatic to mechanical conveying | 5–10% of total | High | 3–6 years |
| 10 | Roll flute restoration | 3–5% | USD 350–700 per roll | 6–18 months |

### Why gap optimisation ranks second

A roll gap that is 0.05 mm too tight increases power draw measurably and produces no additional extraction — it just shatters bran and raises ash. Operators close gaps to chase throughput; the mill then runs hotter, wears faster and uses more power per tonne.

Measuring gaps on all passages and resetting to the flow sheet specification typically returns 2–5% of total plant energy within a week, with no parts.

### Why sifter screens matter

A blinded sifter screen does not just reduce sifting efficiency — it forces the whole upstream section to work harder because material backs up. Power draw rises across the flow sheet, not just at the sifter.

Screen condition is checked visually far too infrequently. A quarterly inspection with a light behind the screen finds the problem in twenty minutes.

## Power factor and demand charges

Two line items on the utility bill that most mills ignore:

**Power factor.** Induction motors run at 0.75–0.85 PF without correction. Utilities penalise below 0.90–0.95. Capacitor banks cost USD 8,000–25,000 for a 200 t/d plant and typically save 1–3% of the total bill — often the fastest capital payback in the plant.

**Maximum demand.** Utilities charge for the highest 15- or 30-minute average demand in the month. Starting all motors simultaneously creates a demand spike that sets the charge for the whole month. Staggered starting (which most PLCs already support) costs nothing and can cut demand charges 5–15%.

## The audit report

A useful energy audit produces four things:

1. **Breakdown** — kWh by stage, measured not estimated
2. **Benchmark** — kWh/t compared with similar-capacity plants
3. **Ranked measures** — saving, cost, payback, for each intervention
4. **Measurement plan** — what to meter so the next audit takes a day, not a month

Without sub-metering, every audit is an estimate. The meters cost USD 300–800 each and turn an annual guess into a monthly fact. For a 200 t/d plant, eight meters are enough to cover the whole process.

## Evidence note

This article describes Haiyun engineering practice. The figures are typical ranges from project
work, not published measurements, and no external standard is claimed where none is named in the
text. How these figures are produced: [methodology](/about/methodology/).
