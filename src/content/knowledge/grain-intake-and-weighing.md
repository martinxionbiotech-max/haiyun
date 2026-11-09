---
title: "Grain Intake and Weighing: Sizing the Front Door of a Flour Mill"
seoTitle: "Grain Intake and Weighing: Sizing the Front Door"
description: "Intake capacity, weighbridge selection, receiving pit design and the truck-queue arithmetic that decides whether your mill can take a harvest at all."
type: cluster
pillar: wheat-procurement-and-storage
updated: 2026-11-07
readingTime: 3
keywords: ["grain intake system", "flour mill weighbridge", "receiving pit design", "wheat intake capacity"]
related: ["wheat-procurement-and-storage", "silo-design-and-aeration", "wheat-cleaning-process-flow"]
keyTakeaways:
  - "Intake must handle a full day's wheat in 3–4 hours, not 24. Size to 4–6× average consumption rate."
  - "A 60 t/d mill needs 8–10 t/h intake capacity, not the 3.25 t/h its consumption implies."
  - "One weighbridge lane processes 8–12 trucks per hour. Calculate queue length before you buy land."
faq:
  - q: "How do I size grain intake capacity?"
    a: "Take daily consumption, divide by the hours you actually receive (typically 4–6), and multiply by 1.3 for surge. A 60 t/d mill consuming 78 t/day needs 17–25 t/h intake if all wheat arrives in a 4-hour window."
  - q: "Do I need a weighbridge?"
    a: "Above about 20 t/d, yes. Inline truck scales cost USD 12,000–35,000 and pay for themselves by ending disputes over delivered weight."
  - q: "How big should the receiving pit be?"
    a: "At least 1.5× the volume of the largest truck that will tip, with 45° slopes and a grid rated for the truck axle load."
---

Intake has to swallow a full day's wheat in three or four hours, not twenty-four. A [60 t/d](/flour-milling-plant/40-60tpd-flour-plant/) mill consumes 3.25 t/h but needs 8–10 t/h of receiving capacity, and the truck queue that forms when it doesn't is a land-purchase problem long before it becomes an equipment problem.

## The arithmetic everyone gets wrong

A 60 t/d mill consumes 78 t of wheat in 24 hours — 3.25 t/h. It is tempting to order a 4 t/h intake line.

Then harvest arrives. Twelve trucks of 25 t each, all within four hours, because that is how farmers deliver.

| Scenario | Requirement |
|---|---|
| Average consumption | 3.25 t/h |
| Harvest delivery (78 t in 4 h) | 19.5 t/h |
| With 30% surge | 25 t/h |

The intake must be sized for the second number. An undersized intake does not slow the mill — it stops it, because the silo runs dry while trucks queue outside.

**Rule: intake capacity = daily consumption ÷ receiving hours × 1.3.**

| Plant | Wheat/day | Intake at 4 h | Intake at 6 h |
|---|---|---|---|
| 20 t/d | 26 t | 8.5 t/h | 5.6 t/h |
| 60 t/d | 78 t | 25 t/h | 17 t/h |
| 100 t/d | 130 t | 42 t/h | 28 t/h |
| 200 t/d | 260 t | 85 t/h | 56 t/h |
| 500 t/d | 650 t | 210 t/h | 140 t/h |

## Weighbridge

| Type | Capacity | Cost | Notes |
|---|---|---|---|
| Pit-mounted, 60 t | 60 t | USD 12,000–20,000 | Standard for rigid trucks |
| Pit-mounted, 80 t | 80 t | USD 18,000–30,000 | Covers articulated lorries |
| Above-ground, 60 t | 60 t | USD 15,000–25,000 | Easier to service, needs ramps |
| Axle-weighing pads | Portable | USD 4,000–9,000 | Temporary or backup only |

Throughput per lane: **8–12 trucks per hour** for a 60 t bridge with a competent operator and a printing terminal. That is 200–300 t/h of receiving capacity — usually not the bottleneck once the bridge is in place.

## Receiving pit

| Parameter | Specification |
|---|---|
| Volume | 1.5× largest truck load |
| Grid opening | 80 × 80 mm, rated for axle load |
| Slope | 45° minimum on all sides |
| Discharge | Belt or chain conveyor, not gravity chute |
| Dust control | Aspiration hood, 1,500–3,000 m³/h |
| Cover | Roofed; rain ingress ruins wheat |

The pit is where most intake systems fail in practice. Two common errors: grid openings too large (stones and tools fall through into the conveyor) and no dust extraction (the operator works in a visible cloud, which is both a health hazard and an explosion risk).

## Conveying

| Conveyor | Capacity | Best for |
|---|---|---|
| Belt, 400 mm | 20–40 t/h | Short horizontal runs |
| Belt, 600 mm | 50–100 t/h | Main intake |
| Chain, 300 mm | 20–50 t/h | Inclines up to 45° |
| Bucket elevator | 20–200 t/h | Vertical lift to silos |
| Pneumatic | 5–30 t/h | Complex routing, high power |

Belt and bucket elevator is the standard combination: lowest power per tonne and least grain damage. Pneumatic conveying is 3–5× the power per tonne but routes around obstacles, which matters in retrofit buildings.

## Layout: the queue problem

Truck queue length is a land requirement, not an operational detail.

| Trucks/hour | Average wait if 1 bridge | Space needed |
|---|---|---|
| 4 | Under 10 min | 2 truck lengths |
| 8 | 15–25 min | 4–5 truck lengths |
| 12 | 40–60 min | 8–10 truck lengths |
| 16 | Over 90 min | 2 bridges required |

If you cannot provide the queuing space, add a second weighbridge or extend receiving hours. A mill that turns trucks away during harvest loses its supply base to a competitor who does not.

## Sampling at intake

Every truck must be sampled before tipping. Options:

| Method | Cost | Representativeness |
|---|---|---|
| Manual probe, 5 cores | Labour only | Good if done properly |
| Automatic sampler on pit | USD 8,000–20,000 | Excellent, removes dispute |
| Hand scoop from truck top | Free | Unacceptable |

Automatic samplers pay back quickly at intake above 100 t/day simply by removing arguments.

## What this means for the building

Intake dictates the site plan more than the mill does:

- Truck turning circle: 18–24 m for articulated lorries
- One-way traffic flow to avoid reversing
- Weighbridge before the pit, always
- Pit roofed and lit, with drainage away from the pit
- Sampler station beside the bridge, not at the pit

Getting this wrong is expensive: moving a weighbridge after construction costs more than the bridge did.
