---
title: "Flour Mill Spare Parts: What to Stock, What to Order and What to Never Hold"
description: "A criticality-based spares strategy for flour mills — the parts that stop production, the parts that only cost money, and the stock levels that balance."
type: cluster
pillar: flour-mill-operations-and-maintenance
updated: 2026-11-07
readingTime: 4
keywords: ["flour mill spare parts", "mill maintenance inventory", "critical spares list", "flour mill downtime cost"]
related: ["flour-mill-operations-and-maintenance", "flour-mill-preventive-maintenance-schedule", "flour-mill-operating-cost-breakdown", "plc-automation-flour-mill"]
keyTakeaways:
  - "Spares should be sized by downtime cost, not by part price. A USD 40 bearing that stops a 200 t/d plant for a day costs USD 20,000."
  - "Stock 100% of parts whose lead time exceeds your tolerable downtime, and nothing else."
  - "A 1.5–2.5% of plant capital annual spares budget is the industry norm for a well-run mill."
faq:
  - q: "What spare parts should a flour mill keep in stock?"
    a: "Bearings for all roll mills and sifters, sifter screens, belts, V-belts, rotary valve seals, filter bags, fuses and contactors, and one complete set of roll mill feed rolls. Everything else can be ordered."
  - q: "How much should a flour mill spend on spare parts?"
    a: "1.5–2.5% of plant capital value per year, split roughly 60% consumables and wear parts, 40% critical insurance spares."
  - q: "How long should parts be stored?"
    a: "Rubber and elastomer parts degrade — rotate stock every 3 years. Bearings stored over 5 years should be inspected before use. Electronic components over 10 years are suspect."
---

Spares should be sized by what a stoppage costs, not by what the part costs. A USD 40 bearing that idles a 200 t/d plant for a day costs roughly USD 20,000 in lost margin — which makes stocking a financial decision that purchasing departments are usually not equipped to make.

## The arithmetic that drives everything

Downtime cost per day for a flour mill:

| Plant | Wheat/day | Gross margin | Downtime cost/day |
|---|---|---|---|
| 20 t/d | 26 t | USD 60/t | USD 1,560 |
| 60 t/d | 78 t | USD 60/t | USD 4,680 |
| 100 t/d | 130 t | USD 60/t | USD 7,800 |
| 200 t/d | 260 t | USD 60/t | USD 15,600 |
| 500 t/d | 650 t | USD 60/t | USD 39,000 |

Add contract penalties, spoilage of in-process material and the cost of restarting a mill (2–6 hours of off-specification flour) and the real figure is 1.3–1.6× the above.

Against that, a bearing costs USD 40. A [sifter screen](/equipment/high-square-plansifter/) costs USD 60. The decision to hold them or not is not a purchasing decision, it is an arithmetic one.

## The criticality matrix

Classify every part on two axes: **how long can we run without it** and **how long to obtain it**.

| | Lead time under 3 days | 3–14 days | Over 14 days |
|---|---|---|---|
| **Stops production immediately** | Stock 2 | Stock 2–3 | Stock 3+ |
| **Degrades output** | Stock 1 | Stock 1 | Stock 1–2 |
| **No production impact** | Stock 0 | Stock 0 | Stock 1 |

The rule that falls out: **if lead time exceeds tolerable downtime, stock it.** Everything else is working capital sitting on a shelf.

## Category A: stock generously

### Bearings

The most common failure in a flour mill. Every roll mill has 4–8; every sifter has 8–16.

| Location | Types to hold | Quantity |
|---|---|---|
| Roll mill roll journals | Spherical roller, 2 sizes | 4 each |
| Roll mill feed rolls | Deep groove ball | 4 |
| Plansifter hangers | Rubber-cushioned or spring | 8 |
| Plansifter drive | Spherical roller | 2 |
| Bucket elevator head/boot | Spherical roller | 2 each |
| Conveyor pulleys | Pillow block | 2 each |

Hold **two complete sets** of roll mill bearings. Bearing replacement on a roll mill is a 4–8 hour job; waiting three days for a bearing turns it into a 76-hour job.

### Sifter screens

| Item | Stock |
|---|---|
| Screens per size in use | 2 sets minimum |
| Screen frames | 1 spare per size |
| Screen cleaning balls | 1 kg per sifter |
| Tensioning clamps | 10% of installed count |

Screens blind, tear and stretch. A torn screen contaminates flour; a blinded screen costs extraction. Both are immediate problems with a same-day fix if you hold stock.

### Belts and drives

| Item | Stock |
|---|---|
| V-belts, each size | 2 sets |
| Timing belts (roll mill drive) | 1 set per size |
| Conveyor belting | 5–10 m of each width |
| Belt fasteners | 20 |
| Couplings and inserts | 2 per type |

### Seals, gaskets and flexible connections

| Item | Stock |
|---|---|
| Rotary valve seals | 4 per valve |
| Sifter door gaskets | 2 sets per sifter |
| Flexible spouting connectors | 10 |
| O-rings, standard sizes | Assorted box |
| Gland packing | 5 m per size |

These are cheap, fail predictably, and a leaking seal on a sifter is a dust emission that fails an inspection.

### Electrical

| Item | Stock |
|---|---|
| Fuses, all ratings | 5 each |
| Contactors | 1 each size |
| Thermal overloads | 1 each size |
| Proximity switches | 4 |
| Level sensors | 2 per type |
| PLC I/O modules | 1 each type in use |

A USD 15 contactor that stops a 200 t/d mill for a day is the worst ratio in the plant.

### Filters

| Item | Stock |
|---|---|
| Filter bags | 10% of installed count |
| Pulse valves | 2 |
| Solenoid coils | 4 |
| Differential pressure gauges | 2 |

## Category B: stock one, order one

| Item | Note |
|---|---|
| Feed roll (one complete) | Wears but rarely fails suddenly |
| Roll mill drive motor | Expensive; hold only if lead time > 30 days |
| Purifier brushes | Wear item, cheap |
| Bran finisher screens | Wear item |
| Packing machine jaws | Wear item |
| Gearbox oil | Consumable |

## Category C: do not stock

| Item | Why |
|---|---|
| Rolls | Made to order, USD 3,500–11,000 each, 11 passages |
| Motors above 30 kW | Cost prohibitive; negotiate a loaner agreement instead |
| Sifter main frames | Structural, rarely fail |
| PLC CPU | Hold a spare only if the plant cannot run manually |
| Complete gearboxes | 6–12 week lead time; accept the risk or hold one shared spare |

For Category C, the correct strategy is a **service agreement with the supplier**: guaranteed 48-hour dispatch, pre-agreed pricing, and a stated loaner policy. That costs a small annual retainer and converts a capital item into an operating one.

## Stock level calculation

For a part with:
- Failure rate λ (failures per year)
- Lead time L (days)
- Downtime cost D (USD/day)

Expected annual cost at stock level n:

**cost = holding cost + (expected stockouts × D × L)**

A bearing that fails 0.5 times per year, costs USD 40, has a 5-day lead time and sits in a plant with USD 15,600/day downtime:

| Stock level | Holding cost/yr | Expected stockout cost/yr | Total |
|---|---|---|---|
| 0 | USD 0 | 0.5 × 15,600 × 5 = USD 39,000 | USD 39,000 |
| 1 | USD 8 | ~USD 0 | USD 8 |
| 2 | USD 16 | USD 0 | USD 16 |

The arithmetic is not close. This is why criticality-based stocking is not a matter of opinion.

## Storage and rotation

| Requirement | Reason |
|---|---|
| Dry, temperature-stable store | Bearings rust, electronics degrade |
| Original packaging until use | Sealed bearings lose grease protection |
| FIFO rotation | Rubber parts have shelf life |
| Labelled with receipt date | Everything has a shelf life |
| Bin locations in the ERP | A part you cannot find is not a spare |
| Annual stocktake | Phantom stock is worse than no stock |

### Shelf lives

| Item | Shelf life |
|---|---|
| Rubber seals, gaskets | 3–5 years |
| V-belts | 5–8 years |
| Bearings (sealed) | 5–10 years |
| Lubricants | 2–5 years |
| Electronic modules | 10+ years, but check for capacitor ageing |
| Filter bags | 3–5 years |

Rotate stock by receipt date. A 12-year-old bearing in original packaging is not a spare, it is a false assurance.

## The budget

| Plant | Annual spares budget (1.5–2.5% of capital) |
|---|---|
| 20 t/d (capital ~USD 250,000) | USD 3,750–6,250 |
| 60 t/d (capital ~USD 900,000) | USD 13,500–22,500 |
| 200 t/d (capital ~USD 2.4M) | USD 36,000–60,000 |
| 500 t/d (capital ~USD 5M) | USD 75,000–125,000 |

Split roughly 60% consumables and wear parts (screens, seals, belts, lubricants), 40% critical insurance spares (bearings, electrical, sensors).

Mills that underspend on this line do not save money. They convert a predictable annual cost into an unpredictable large one, usually at the worst possible moment — during harvest, when the mill is running flat out and every tonne matters.
