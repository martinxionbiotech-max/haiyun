---
title: "Pneumatic Conveying in Flour Mills: When Air Beats a Bucket Elevator"
description: "Positive and negative pressure systems, air-to-material ratios, power per tonne and the routing cases where pneumatic conveying is cheaper than mechanical."
type: cluster
pillar: flour-milling-flow-sheet-design
updated: 2026-11-07
readingTime: 4
keywords: ["pneumatic conveying flour mill", "air conveying grain", "flour transport system", "dilute phase conveying"]
related: ["flour-milling-flow-sheet-design", "dust-explosion-safety-in-flour-mills", "flour-mill-energy-audit"]
keyTakeaways:
  - "Pneumatic conveying costs 3–5× the power per tonne of a bucket elevator. Use it for routing, not for bulk transfer."
  - "Dilute phase at 15–25 m/s is standard for flour; dense phase at 3–8 m/s is gentler but needs 2–3× the pressure."
  - "Every pneumatic system needs a filter receiver — the air has to be cleaned somewhere."
faq:
  - q: "Is pneumatic conveying good for flour?"
    a: "Yes for short, complex routes and for hygienic transfer. It is 3–5× more power-hungry than mechanical conveying, so use it where routing justifies the cost, not for main bulk transfer."
  - q: "What air velocity should flour conveying use?"
    a: "15–25 m/s in dilute phase. Below 12 m/s flour settles and blocks the line; above 30 m/s it abrades and heats."
  - q: "How much air does a pneumatic conveying system need?"
    a: "At an air-to-material ratio of 5:1 by mass, moving 5 t/h of flour needs about 1 t/h of air — roughly 800 m³/h at standard conditions."
---

Pneumatic conveying costs three to five times the power per tonne of a bucket elevator. Use it where routing demands it and budget the energy accordingly — and never without a filter receiver, because the air has to be cleaned somewhere before it goes back into the building.


<figure class="my-8">
  <img src="/images/figure-pneumatic-conveying.svg" alt="Pneumatic conveying costs three to five times the power per tonne of a bucket elevator, and always needs a filter receiver." width="1000" loading="lazy" class="w-full rounded-lg border border-steel-200" />
  <figcaption class="mt-3 text-sm leading-relaxed text-steel-500">Pneumatic conveying costs three to five times the power per tonne of a bucket elevator, and always needs a filter receiver.</figcaption>
</figure>

## The comparison that decides it

| System | Power per tonne per 10 m lift | Route flexibility | Hygiene | Capital |
|---|---|---|---|---|
| Bucket elevator + belt | 0.8–1.5 kWh | Low, vertical only | Good | Low |
| Screw conveyor | 1.5–2.5 kWh | Straight lines only | Poor (residue) | Low |
| Dilute phase pneumatic | 5–9 kWh | Excellent, any direction | Excellent | Medium |
| Dense phase pneumatic | 4–7 kWh | Good | Excellent | High |

Pneumatic conveying is not a bulk transfer technology. It is a routing technology. The moment you compare it on power alone, mechanical handling wins by a factor of four.

Where pneumatic wins is when the alternative is four elbows, two transfers and a 12 m vertical run through an occupied building.

## How the systems work

### Dilute phase (positive pressure)

A blower pushes air into the line, material is fed in through a rotary valve, and the mixture travels at 15–25 m/s to a filter receiver.

| Parameter | Typical value |
|---|---|
| Air velocity | 15–25 m/s |
| Air-to-material ratio | 3:1 to 8:1 by mass |
| Pressure | 30–100 kPa |
| Distance | Up to 100 m |
| Product degradation | Moderate |

### Dilute phase (negative pressure / vacuum)

A fan pulls air through the line; material is drawn in at a pick-up point and separated at a cyclone or filter.

| Parameter | Typical value |
|---|---|
| Air velocity | 18–28 m/s |
| Ratio | 2:1 to 5:1 |
| Vacuum | −20 to −50 kPa |
| Distance | Up to 60 m |
| Advantage | No dust escape at pick-up; good for multiple points |

Vacuum systems are the standard choice for collecting from several discharge points into one receiver — for example, gathering from four roll mills into one sifter feed.

### Dense phase

Material moves as a slug or a fluidised bed at low velocity.

| Parameter | Typical value |
|---|---|
| Air velocity | 3–8 m/s |
| Ratio | 15:1 to 40:1 |
| Pressure | 200–600 kPa |
| Distance | Up to 300 m |
| Product degradation | Very low |
| Wear | Low |

Dense phase is the choice for abrasive materials (semolina, bran) and for long distances where dilute phase pressure would be excessive. It needs a pressure vessel or a high-pressure rotary valve, which is where the capital cost goes.

## Air-to-material ratio is the design decision

The ratio determines how much air you must move, and air is where the power goes.

| Ratio | Air for 5 t/h | Approx. blower power | Note |
|---|---|---|---|
| 2:1 | 2.5 t/h air | 30–45 kW | Very dilute, high wear |
| 5:1 | 1.0 t/h air | 15–25 kW | Standard dilute phase |
| 10:1 | 0.5 t/h air | 10–15 kW | Upper limit for dilute |
| 20:1 | 0.25 t/h air | Dense phase territory | Requires pressure vessel |

Doubling the ratio halves the air volume and roughly halves the power. The constraint is that at high ratios the material starts to settle in horizontal runs, which is why dilute phase stops around 8–10:1.

## Line design rules

| Rule | Reason |
|---|---|
| Minimum velocity above saltation point | Below it, material settles and the line blocks |
| Horizontal runs as short as possible | Highest pressure loss and highest blockage risk |
| Long-radius bends (R ≥ 6D) | Tight bends wear through in months |
| Vertical runs preferred for lifts | Gravity assists, less settling |
| No dead legs | Flour accumulates and sours |
| Inspection ports at every bend | You will need them |
| Ground and bond every section | Static ignition risk with flour dust |

### The saltation problem

Saltation velocity is the air speed below which particles drop out of suspension. For flour in a 100 mm line it is around 10–12 m/s.

If you design at 15 m/s and the system runs at 80% of design flow, actual velocity drops to 12 m/s — right at the edge. This is why pneumatic lines block on partial load, not on full load, and why variable-load systems need either a variable-speed blower or a smaller line.

## Filter receivers

Every pneumatic system terminates in a filter. It is not optional.

| Type | Efficiency | Use |
|---|---|---|
| Cyclone only | 85–92% | Pre-separation, never final |
| Cyclone + bag filter | 99.5%+ | Standard |
| Reverse pulse jet filter | 99.9%+ | Flour, where dust emission matters |
| Centrifugal + cartridge | 99.9%+ | Compact installations |

Filter sizing: 0.8–1.2 m² of cloth per m³/min of air for flour. Undersized filters blind quickly and the whole system loses capacity as back-pressure rises.

## Where pneumatic genuinely wins

| Situation | Why |
|---|---|
| Retrofit into an existing building | Routes around structure that cannot be modified |
| Multiple pick-up points to one receiver | Vacuum system is elegant; mechanical needs many conveyors |
| Cross-building transfer | No weatherproof gallery needed |
| Hygienic requirement (export, food safety) | Fully enclosed, no residue, easy to clean |
| Toxic or dusty product | No dust escape at transfer points |
| Short, convoluted route under 40 m | Cheaper than three conveyors and two transfers |

## Where it loses

- **Main intake from silos to mill.** A bucket elevator does this at a quarter of the power.
- **Long horizontal runs.** Pressure loss is proportional to length and horizontal runs are worst.
- **Very high tonnage.** Above about 30 t/h, mechanical handling is almost always cheaper over the plant life.
- **Abrasive product at high velocity.** Semolina at 25 m/s will wear a mild steel bend through in under a year. Use dense phase or ceramic-lined bends.

## Energy reality check

A [60 t/d](/flour-milling-plant/40-60tpd-flour-plant/) mill moving 78 t of wheat and 58 t of flour per day:

| Transfer | Mechanical | Pneumatic |
|---|---|---|
| Wheat to mill, 20 m lift | 1.2 kWh/t → 94 kWh/day | 6 kWh/t → 468 kWh/day |
| Flour to packing, 15 m | 1.0 kWh/t → 58 kWh/day | 7 kWh/t → 406 kWh/day |
| Total daily | 152 kWh | 874 kWh |

At USD 0.10/kWh that is USD 15 versus USD 87 per day — USD 26,000 a year difference. Pneumatic conveying has to earn that difference through routing, hygiene or building constraints, or it should not be specified.
