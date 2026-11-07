---
title: "What a Purifier Does in a Flour Mill (and Why 40 t/d Is the Threshold)"
description: "How a purifier separates middlings by density rather than size, the ash and extraction gains it delivers, why it needs at least four break passages to be worthwhile, and how to balance its air."
type: cluster
pillar: flour-milling-flow-sheet-design
updated: 2026-11-07
readingTime: 8
keywords: ["purifier flour mill", "flour purifier function", "FQFD purifier", "middlings purification"]
related: ["flour-milling-flow-sheet-design", "flour-ash-content-explained", "plansifter-sizing-guide"]
keyTakeaways:
  - "A purifier separates by density, not size — which is the only way to separate pure endosperm from same-sized bran-contaminated particles."
  - "Typical gain: 0.08–0.15 points of ash reduction and 5–8 points of patent extraction."
  - "Below 4 break passages there is not enough middlings to feed it; the machine idles and consumes air for nothing."
  - "Air balance is the whole machine — re-balance every 6 months and after any flow sheet change."
faq:
  - q: "Do I need a purifier in a small flour mill?"
    a: "Below 40 t/d usually not — you will not have four break passages, so there is not enough middlings feed to justify it. At 40 t/d and above it becomes the difference between 74% and 78% extraction."
  - q: "How does a purifier work?"
    a: "Middlings fall onto a vibrating sieve while air passes upward through them. Pure endosperm particles are lighter and more angular, so they float and travel forward. Bran-contaminated particles of the same size settle and are rejected."
  - q: "Can I retrofit a purifier to an existing plant?"
    a: "Only if the flow sheet has enough middling streams and adequate headroom. Most retrofits also require an additional break passage, which is why the decision is best made at design stage."
---

## The problem a purifier solves

After four break passages you have middlings: particles of endosperm ranging from 200 to 600 µm, mixed with bran-contaminated particles of exactly the same size.

A sifter cannot separate these. It sorts by size, and they are the same size.

If you send this mixture to reduction rolls, the bran contamination gets ground finer and distributed through your flour. Ash rises and colour darkens.

## How density separation works

A purifier is a vibrating sieve with air passing upward through the material bed.

Three forces act on each particle:

| Force | Direction | Depends on |
|---|---|---|
| Gravity | Down | Mass (density × volume) |
| Air drag | Up | Surface area and shape |
| Sieve vibration | Forward | Bed agitation |

Pure endosperm has density ~1.45 g/cm³ and an angular, blocky shape. Bran-contaminated particles have density ~1.55–1.65 g/cm³ (minerals) and a flatter, more rounded shape.

The lower-density, more angular endosperm is lifted more effectively by the air relative to its weight. It floats on the bed and travels forward over the sieve. The denser, flatter contamination stays in contact with the sieve and is discharged to a reject spout.

The net result: **two streams of identical particle size, separated by purity.**

## What you gain

| Metric | Without purifier | With purifier |
|---|---|---|
| Patent extraction | 72–74% | 77–79% |
| Patent ash | 0.62–0.72% | 0.48–0.58% |
| Standard flour ash | 0.85–0.95% | 0.75–0.85% |
| Energy per tonne | Baseline | +2–3% |
| Capital | Baseline | +USD 45,000–90,000 |

The extraction gain is the main prize. At 60 t/d, 5 points of extraction is 3 t of extra flour per day — around USD 1,200/day at USD 400/t.

## The 40 t/d threshold

A purifier needs feed. Specifically it needs **middlings from at least four break passages**.

| Breaks | Middlings available | Purifier worthwhile? |
|---|---|---|
| 2 | Very little | No |
| 3 | Marginal | No |
| 4 | Adequate | Yes |
| 5+ | Abundant | Yes, multiple units |

Below 40 t/d, flow sheets rarely reach four breaks because the capital is better spent elsewhere. At 40 t/d the economics flip: four breaks become affordable and the purifier pays for itself in extraction.

This is not an arbitrary rule — it is the point where the flow sheet geometry makes the machine useful.

## Air balance: the whole machine

A purifier is 90% air balance and 10% mechanics.

| Parameter | Target | Symptom if wrong |
|---|---|---|
| Air volume per unit | 40–85 m³/h depending on model | Too low: no separation. Too high: flour blown into rejects |
| Sieve amplitude | Per manufacturer spec | Too low: bed does not fluidise |
| Sieve inclination | 5–8° | Too steep: short residence, poor separation |
| Feed rate | 60–80% of rated capacity | Overfeed: bed too deep, separation collapses |

Re-balance every six months and after any change to the flow sheet. Most badly-performing purifiers are simply out of air balance.

**The practical test:** collect a sample from the reject spout. It should be predominantly bran-contaminated particles. If you find clean endosperm in the reject, the air is too high. If you find bran in the accept stream, the air is too low or the bed is too deep.

## Models and capacities

| Model | Coarse fraction | Fine fraction | Power | Air volume |
|---|---|---|---|---|
| FQFD49×2×3 | 1.4–2.8 t/h | 0.6–1.4 t/h | 0.36 kW | 40–70 m³/h |
| FQFD59×2×3 | 1.8–3.5 t/h | 1.2–2.0 t/h | 0.50 kW | 50–85 m³/h |

Note that the power figure (0.18 kW × 2 or 0.25 kW × 2) covers only the sieve drive. The aspiration fan is a separate item and typically draws 3–7 kW depending on the bank size.

## When to install a purifier bank

Above 100 t/d, one purifier is not enough. A bank of three to six units is fed from a common middlings distributor, with each unit handling a specific size fraction.

At 200 t/d expect 5–8 purifiers. At 300 t/d, 8–12.

The building implications matter: purifiers need 1.7–1.8 m of height and their aspiration ducting needs careful routing to avoid long runs, which cost pressure and therefore separation efficiency.
