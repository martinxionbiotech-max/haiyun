---
title: "Flour Mill Power Consumption: What kWh per Tonne Really Means"
description: "Why specific power consumption falls from 72 kWh/t at 60 t/d to 65 kWh/t at 500 t/d, what drives the difference, how to budget connected load versus actual draw, and how to cut energy cost by 8–12%."
type: cluster
pillar: how-to-size-a-flour-mill
updated: 2026-11-07
readingTime: 10
keywords: ["flour mill power consumption", "kwh per tonne flour", "flour mill electricity cost", "roller mill power"]
related: ["how-to-size-a-flour-mill", "flour-mill-operating-cost-breakdown", "roller-mill-differential-ratio"]
keyTakeaways:
  - "Specific energy falls with scale: 70–74 kWh/t at 60 t/d versus 65–70 kWh/t at 500 t/d."
  - "Installed power is not running power. Typical load factor is 65–80% of connected load."
  - "Milling consumes 60–70% of plant power; cleaning 12–18%; pneumatic conveying and dust collection 10–15%."
  - "On a 300 t/d plant, moving from 72 to 67 kWh/t saves roughly USD 50,000 a year."
faq:
  - q: "How much electricity does a flour mill use per tonne?"
    a: "65–74 kWh per tonne of flour depending on plant size, flow sheet and wheat hardness. Small plants sit at the top of that range, large plants at the bottom."
  - q: "What is the connected load of a 100 t/d flour mill?"
    a: "About 308 kW installed. Actual running draw is typically 220–250 kW, so plan the transformer at 350–400 kVA with margin for starting currents."
  - q: "Does wheat hardness affect power consumption?"
    a: "Yes, substantially. Hard wheat requires 8–12% more grinding energy than soft wheat at the same extraction. Durum can be 15% higher."
---

Power is 5–8% of operating cost, which sounds small until you annualise it. A 300 t/d plant consuming 7 million kWh a year at USD 0.10/kWh spends USD 700,000 on electricity.

Specific consumption — kWh per tonne — is the number to compare, and it depends on four things.

## Scale

| Capacity | Installed power | kWh/t flour |
|---|---|---|
| 60 t/d | 190 kW | 70–74 |
| 100 t/d | 308 kW | 70–74 |
| 150 t/d | 540 kW | 68–72 |
| 200 t/d | 690 kW | 65–71 |
| 300 t/d | 920 kW | 65–71 |
| 500 t/d | 1,650 kW | 65–70 |

Larger plants are more efficient per tonne because:

- Pneumatic systems move more product per unit of air
- Motors run closer to their design duty point
- Fewer small drives for the same throughput
- Better heat recovery and less re-grinding

## Where the power goes

| System | Share of total |
|---|---|
| Roll stands | 55–65% |
| Sifters | 6–9% |
| Purifiers and detachers | 5–8% |
| Cleaning section | 12–18% |
| Pneumatic conveying | 8–12% |
| Dust collection | 3–5% |
| Packing | 3–5% |

Roll stands dominate, and within them the reduction passages consume more than break passages because they spend more energy per tonne on particle size reduction.

## Installed versus running

Connected load is the sum of nameplate ratings. Actual draw is lower because:

- Roll stands rarely run at full motor load
- Not all machines run simultaneously
- Motors are oversized by 15–25% for starting torque

**Load factor is typically 0.65–0.80.** A 100 t/d plant with 308 kW installed draws 220–250 kW while running.

Size your transformer at 1.3× connected load to cover starting currents of the largest motors plus future expansion. Under-sizing produces nuisance trips on every start.

## Cutting energy cost

**1. Check roll condition.** Dull flutes require more pressure and more power for the same reduction. Re-fluting on schedule typically recovers 3–5%.

**2. Tune pneumatic conveying.** Oversized air volume is the single biggest avoidable waste. Measure and balance annually.

**3. Fix compressed air leaks.** Mill floors leak 20–30% of compressed air. A weekend of soapy-water testing can find most of it.

**4. Replace worn belt drives.** Slipping belts lose 5–8% before they fail audibly.

**5. Shut down idle machines.** Many plants run sifters and conveyors during cleaning breaks. Timers pay for themselves in weeks.

**6. Consider power factor correction.** Mills typically run at 0.80–0.85 PF. Correcting to 0.95 usually avoids utility penalties and can reduce kVA billing by 10%.

## Budgeting

For a feasibility study, assume:

- Installed power = the published figure
- Running draw = 0.72 × installed
- Operating hours = 6,000–7,900 per year
- Price = your local industrial tariff

A 60 t/d plant: 150 kW × 0.72 = 108 kW × 7,900 h = 853,000 kWh. At USD 0.10 that is USD 85,300 a year.

Add 12% for lighting, offices, laboratory and workshop. Total roughly USD 95,000.
