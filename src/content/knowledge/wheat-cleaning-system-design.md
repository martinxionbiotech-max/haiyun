---
title: "Wheat Cleaning System Design: A Machine-by-Machine Engineering Guide"
seoTitle: "Wheat Cleaning System Design: A Machine-by-Machine Guide"
description: "How to design a wheat cleaning line: impurity classes, machine sequence, capacity sizing rules, and where dry and wet cleaning diverge, plus machine order."
type: pillar
order: 2
updated: 2026-11-07
readingTime: 8
keywords: ["wheat cleaning process", "flour mill cleaning section", "wheat cleaning machine", "destoner flour mill", "wheat tempering"]
related: ["wheat-cleaning-process-flow", "dry-vs-wet-wheat-cleaning", "wheat-tempering-moisture-guide", "wheat-impurity-types", "destoner-selection-guide"]
keyTakeaways:
  - "Cleaning is 10% of plant capital and roughly 40% of achievable flour quality — it is the cheapest quality in the mill."
  - "The sequence is fixed: coarse before fine, dry before wet, size before density, magnets last. Reversing two stages either blinds a screen or sends stones into a roll."
  - "One destoner sized correctly removes 95%+ of stones; an undersized one removes almost none and the failure is invisible until a customer finds grit."
  - "Wet cleaning costs 0.8–1.2 m³ of water per tonne of wheat and buys a grade of flour that passes export residue testing."
  - "Every 0.01 percentage point of ash costs roughly 1.5% of flour price at the premium end of the market."
faq:
  - q: "What is the correct order of wheat cleaning machines?"
    a: "Intake and weighing, coarse pre-cleaning (drum sieve), size grading (vibrating screen), density separation (destoner), surface scouring (scourer), length grading (indent cylinder, optional), wet cleaning (optional), dampening and tempering, magnetic separation, then aspiration immediately before the first break."
  - q: "Do I need wet cleaning or is dry cleaning enough?"
    a: "Dry cleaning with two scourer passes produces good commercial flour and is sufficient for most domestic markets. Wet cleaning is required when wheat arrives with visible soil in the crease, when you sell into markets with enforceable pesticide residue limits, or when you are producing premium or export flour."
  - q: "How much wheat do I lose in cleaning?"
    a: "Expect 1.5–4% by weight depending on incoming impurity and moisture. Dirty wheat at 2.5% impurity plus 1% moisture shrinkage plus 0.5% spillage means roughly 4% loss. Budget for this in your wheat cost, not as a surprise."
  - q: "How many magnets does a flour mill need?"
    a: "Minimum four: wheat intake, before the first break, and one on each flour stream before packing. A 100 t/d plant normally has five to seven. Higher-gauss units (5,000–12,000) catch fine stainless wear particles that 3,000-gauss magnets miss."
  - q: "How long should wheat temper before milling?"
    a: "Twelve hours minimum, eighteen to twenty-four hours standard. Below twelve hours water has not reached the crease and bran remains brittle, which shatters into the flour and raises ash."
heroImage: "/images/p19_02.webp"
---

A flour mill has two halves. The milling half is visible, expensive and interesting. The cleaning half is invisible, cheap and decisive.

This article is about **designing and sizing** a cleaning line — impurity classes, capacity rules, wet versus dry economics, and the mistakes that destroy ash. For the stage-by-stage process sequence itself, see [wheat cleaning process flow](/knowledge/wheat-cleaning-process-flow/).

That asymmetry is why cleaning sections get under-specified. A buyer comparing two quotations sees a 30-stand milling floor in both and a cleaning section with four machines in one and six in the other, and reads the difference as margin rather than engineering. Then the plant runs and the flour ash is 0.72% instead of 0.58%, and nobody can explain where the extra bran came from — because it came in with the wheat and never left.

## What cleaning actually has to remove

Wheat arrives with six classes of contamination, and each one requires a physically different separation principle. No single machine handles more than one or two classes properly.

| Impurity class | Examples | Separation principle | Machine |
|---|---|---|---|
| Coarse | Straw, rope, cob, string, plastic | Size, large | Drum sieve |
| Size-graded | Small stones, sand, broken grain, weed seed | Size, small/medium | Vibrating screen, rotary screen |
| Density | Stones, glass, mud balls, coal | Density + airflow | Destoner |
| Surface | Dirt, dust, beard, smut, bacteria, pesticide | Abrasion + aspiration | Scourer, brush machine, aspirator |
| Shape/length | Broken kernels, shrivelled grain, ergot | Length | Indent cylinder |
| Ferrous | Wire, bolts, staples, wear particles | Magnetism | Plate or drum magnet |

A destoner cannot remove straw. A [scourer](/equipment/horizontal-wheat-scourer/) cannot remove stones. A screen cannot remove a stone that happens to be the same size as a wheat kernel — and that is exactly what most field stones are, which is why density separation is the one stage you cannot skip.

## The fixed sequence

Every Haiyun flow sheet uses the same order, from a 200 kg/h unit to a 500 t/d tower. The logic is physical, not customary.

**1. Intake and weighing.** Establish the tonnage. Every subsequent calculation and every payment depends on this number being right.

**2. Coarse pre-cleaning — [drum sieve](/equipment/drum-sieve-pre-cleaner/).** Removes material larger than the screen aperture: straw, rope, cobs, plastic bags. This stage exists to protect everything downstream. A rope entering a vibrating screen wraps a shaft and takes the line down for a day.

**3. Size grading — vibrating screen.** Separates by particle size in two or three decks. Large impurities stay on top; small sand and broken grain drop through; wheat travels over the middle deck.

**4. Density separation — [gravity destoner](/equipment/gravity-destoner/).** The critical stage. Wheat and stone have similar dimensions but different densities, so only a combined airflow and vibration deck separates them. **Sized correctly, this machine removes 95%+ of stones. Undersized, it removes almost none, and the failure is completely invisible from the outside.**

**5. Surface cleaning — scourer (one or two passes).** Beats the kernel against a perforated drum, removing surface dirt, beard and a measurable fraction of the microbial load. A single heavy-beat pass typically removes 0.03–0.06 percentage points of ash from the whole meal.

**6. Length grading — indent cylinder (optional).** Grades by kernel length, removing broken and shrivelled grains that no screen can separate. Essential for seed production and visual-grade markets; optional for plain commercial flour.

**7. Wet cleaning — washer-destoner-dryer (optional).** Floods the crease, floats off light material, sinks the stones, then centrifuges surface water back to a controlled level. The only process that reaches inside the crease.

**8. Dampening and tempering.** Adds water to a target and holds the wheat in bins for 12–24 hours so moisture penetrates to the endosperm.

**9. Magnetic separation.** Plate magnets in spouts, drum magnets on free-flowing lines. Always last, because you want to catch wear particles generated by the machines upstream.

**10. Aspiration before break.** A light air stream lifts the last of the chaff and beard out immediately before the wheat enters the first roll.

## Sizing rules that actually work

Cleaning machines are specified on **cleaning capacity**, which is roughly one third of the pre-cleaning capacity printed on the same datasheet. This is the single most misread number in the industry.

Take the TQLZ100×150: 50 t/h pre-cleaning, 12 t/h cleaning. A buyer who sizes on the first number installs a machine that is four times too small.

The correct sizing method:

**Cleaning capacity required = daily wheat intake ÷ effective working hours**

A 30 t/d plant running one 10-hour shift needs 3 t/h of cleaning capacity. But that ignores two facts: cleaning runs ahead of milling (you clean during the day and mill around the clock), and wheat needs 12–24 hours of tempering, so cleaning throughput determines your tempering bin turnover.

In practice, most plants size cleaning at 1.3–1.6× the milling rate. A 30 t/d mill therefore specifies a cleaner rated at 4–5 t/h cleaning capacity, which is a TQLZ100×150 (12 t/h cleaning — comfortably oversized) or a TQLZ100×100 (8 t/h cleaning) depending on shift pattern.

**Size up, not down.** An oversized screen costs 15% more and runs at lower amplitude per unit area, which improves separation efficiency. An undersized screen runs at full amplitude, blinds, and produces wheat that looks clean and is not.

## Dry versus wet: the real trade

| Criterion | Dry cleaning | Wet cleaning |
|---|---|---|
| Capital | 100% | 145–170% |
| Water use | ~0 | 0.8–1.2 m³/t wheat |
| Effluent | None | Requires settling + recirculation |
| Ash reduction | Baseline | 0.03–0.08 points better |
| Pesticide residue | Reduced, not eliminated | Effectively removed |
| Suitable for export | Sometimes | Yes |
| Extra drying load | 0 | 3–5% of wheat weight |
| Operator complexity | Low | High |

The decision is commercial, not technical. If your flour sells at a commodity price to a domestic bakery, dry cleaning plus two scourer passes is correct and wet cleaning is wasted capital. If you sell to a market that tests residue, or you are competing on flour colour and ash, wet cleaning pays for itself in price premium.

One warning: wet cleaning without effluent treatment is illegal in most jurisdictions and will eventually be discovered. Budget for a settling pit and a recirculation pump from the start — it is roughly 8% of the wet-cleaning cost and 100% of your ability to keep operating.

## The five mistakes

**1. Skipping the destoner to save 3% of capex.** The most expensive saving in the plant. Stones destroy roll flutes, contaminate flour and end up in a customer's bread.

**2. Sizing the screen on pre-cleaning capacity.** A four-fold under-sizing that produces a plant that "cleans" wheat by letting it pass through at speed.

**3. Running one scourer pass instead of two.** Two passes with an intervening brush reach 0.08 points of ash reduction. One pass reaches half that, and the difference is invisible until you test.

**4. Omitting the [automatic dampener](/equipment/automatic-dampening-system/).** Manual water addition varies by ±1.5% between operators. Automatic microwave-controlled dampening holds ±0.2%. Tempered moisture variation is the leading cause of "the mill behaved differently today".

**5. No magnets on flour streams.** Magnets on wheat only protect the rolls. Magnets before the packer protect the customer, and the customer is the one who brings a claim.

## Air, and where it goes

Every cleaning stage that removes light material — chaff, dust, beard, smut — needs air to carry it. The question that decides a great deal of your capital cost and your relationship with your neighbours is where that air ends up.

There are two architectures, and the choice is made almost by accident.

**Open circuit.** Air is drawn from the building, passes through the machine, and is exhausted to atmosphere through a dust collector. This is the default in most designs, and it is correct where you have space outdoors, a bag filter you are maintaining anyway, and no neighbours.

**Closed circuit.** The air is recirculated through the machine rather than exhausted. A [cycling air separator](/equipment/cycling-air-separator/) does this internally: the same air volume lifts the light fraction, drops it into a collection point, and returns to the fan. No external dust collector, no duct run to the roof, no plume.

| | Open circuit | Closed circuit |
|---|---|---|
| Dust collector required | Yes | No |
| Duct run to atmosphere | Yes | No |
| Heat loss from building | Continuous | None |
| Visible dust plume | Yes, if the filter fails | None |
| Capital cost, small plant | Higher (filter + ducting) | Lower |
| Maintenance burden | Filter bags, differential pressure | Fan and air path only |

Where closed circuit wins, decisively:

**Plants inside town limits.** A visible dust plume from a flour mill is the single fastest way to attract a regulator, and the complaint usually arrives before the filter has actually failed — a torn bag for one shift is enough. A closed circuit does not have a plume to see.

**Cold climates.** An open-circuit aspiration system pulls heated building air to atmosphere continuously. In a plant that is heated, that is a permanent energy loss, and the make-up air arrives cold at the mill floor.

**Small plants with no maintenance culture.** A bag filter that nobody checks is worse than no filter: it works until it does not, and then it dusts the neighbourhood. A closed circuit has fewer things to neglect.

Where open circuit still wins: large plants with a centralised aspiration system, an existing filter house, and maintenance staff who actually change bags on schedule. At 200 t/d and above, the ducting and filter are already there for the pneumatic conveying, and centralising aspiration into the same system is more efficient than a dozen small closed loops.

The mistake we see most often is neither of these. It is a plant that has open-circuit aspiration on the cleaning line, no dust collector specified, and a duct terminating at a wall louvre. That is not a design; it is a dust emission with a fan attached.

One sizing note that catches people: a cycling air separator is quoted with two capacities — cleaning capacity and pre-cleaning capacity — and they differ by a factor of three to four, exactly like a vibrating screen. A TFXH100 is 16 t/h cleaning and 65 t/h pre-cleaning. Size it on the first number.

## What a complete cleaning section costs

As a proportion of total plant capital:

| Capacity | Cleaning share | Rough absolute range |
|---|---|---|
| 20 t/d | 14% | USD 18,000–26,000 |
| 30 t/d | 15% | USD 26,000–38,000 |
| 60 t/d | 17% | USD 55,000–80,000 |
| 100 t/d | 18% | USD 95,000–140,000 |
| 200 t/d | 19% | USD 185,000–270,000 |
| 300 t/d+ | 20% | USD 280,000–450,000 |

The share rises with capacity because cleaning complexity grows faster than milling complexity — a 300 t/d plant needs two destoners, two scourers, a washer-destoner, an automatic dampening system with multiple tempering bins, and a full magnetic array.

That 15–20% of capital is doing 40% of the quality work. It is the best value in the plant.

## Send us your wheat analysis

Cleaning design begins with a wheat analysis, not a machine list. Send:

- Impurity percentage by class (coarse, small, stones, light matter)
- Incoming moisture
- Test weight (hectolitre weight)
- Origin and whether it is single-origin or blended
- Any residue or food-safety certification your market requires

We will respond with a cleaning flow diagram, machine list and capacity sizing within 12 working hours.

## Sources

- [USDA Wheat Standards](https://www.ams.usda.gov/grades-standards/wheat-standards) — US wheat class names and grading factors.
- [7 CFR Part 810 Subpart M — United States Standards for Wheat](https://www.ecfr.gov/current/title-7/subtitle-B/chapter-VIII/subchapter-A/part-810/subpart-M) — the legal text behind the class definitions.

Figures in this article are typical ranges from Haiyun project work unless a source is named; they are not measurements reproduced from these documents. How figures are produced: [methodology](/about/methodology/).
