---
title: "Flour Milling Flow Sheet Design: Break, Reduction, Sifting and Purification"
seoTitle: "Flour Milling Flow Sheet Design: Break, Reduction, Sifting"
description: "How to design a wheat flour milling flow sheet: break and reduction passages, differential ratios, sifter area per tonne and where the purifier belongs."
type: pillar
order: 3
updated: 2026-11-07
readingTime: 7
keywords: ["flour milling flow sheet", "3B2M flow sheet", "break and reduction rolls", "flour extraction rate", "roller mill differential"]
related: ["roller-mill-differential-ratio", "plansifter-sizing-guide", "purifier-function-flour-milling", "flour-extraction-rate-explained", "impact-detacher-role", "pneumatic-conveying-in-flour-mills", "roll-wear-and-flute-life", "roll-fluting-and-surface-technology"]
keyTakeaways:
  - "Flow sheet notation counts passages: B = break, M = reduction, S = scratch/sizing, T = tailing. 4B5M1S1T means 4 breaks, 5 reductions, 1 scratch, 1 tailing."
  - "Each extra break passage scrapes more endosperm off bran. Below 2 breaks you cannot make clean flour; below 4 you cannot exceed ~76% extraction."
  - "Break rolls run a 2.5:1 differential to shear bran open. Reduction rolls run 1.25:1 so endosperm reduces by attrition rather than being cut."
  - "Purifiers only make sense at 4 breaks and above — with less middlings they sit idle and consume air for nothing."
  - "Sifter area, not roll capacity, is the binding constraint in most plants: 1 m² per 0.8 t/d of capacity for a standard flow sheet."
faq:
  - q: "What does 4B5M1S1T mean?"
    a: "Four break passages, five reduction passages, one scratch (sizing) passage and one tailing passage. Each letter counts grinding stages, not machines — one passage may be served by several roll stands running in parallel."
  - q: "Can I increase extraction by grinding finer?"
    a: "No. Grinding finer produces more fine bran, which raises ash faster than it raises extraction. Extraction comes from more passages and better purification, not from tighter roll gaps."
  - q: "What is the minimum flow sheet for a commercial flour mill?"
    a: "3B2M produces a clean patent flour at 72–74% extraction, which is adequate for a small commercial plant. Below that the flour carries visible bran specks and cannot be sold as patent grade."
  - q: "Do I need a purifier at 40 t/d?"
    a: "Yes. At 40 t/d the flow sheet normally has 4 breaks, which produces enough middlings to feed a purifier. Without one you cap out around 74% extraction; with one you reach 76–77% at lower ash."
  - q: "How many roll stands does a 60 t/d plant need?"
    a: "Twelve for a single-pair configuration (6FTDP-60 with 2240/12 mills), fewer if you use compound double-roll stands. Stand count depends on passage count, not directly on tonnage."
heroImage: "/images/p14_02.jpg"
---

A flow sheet is a diagram of decisions. Where you break the wheat, how hard, what you sift out, and what you send back determine your extraction, your ash, your power bill and your product range — all before a single machine is ordered.

This article explains the reasoning behind the flow sheets we publish, so that a buyer can evaluate a competing quotation on engineering rather than on machine count.


<figure class="my-8">
  <img src="/images/figure-flow-sheet.svg" alt="A 4B5M1S1T flow sheet. Each break passage scrapes more endosperm off the bran; each reduction grinds it finer. Stop early and you leave flour on the bran." width="1000" loading="lazy" class="w-full rounded-lg border border-steel-200" />
  <figcaption class="mt-3 text-sm leading-relaxed text-steel-500">A 4B5M1S1T flow sheet. Each break passage scrapes more endosperm off the bran; each reduction grinds it finer. Stop early and you leave flour on the bran.</figcaption>
</figure>

## The notation

| Symbol | Passage | Function |
|---|---|---|
| **B** | Break | Opens the wheat, scrapes endosperm off bran |
| **M** | Reduction | Grinds released endosperm into flour |
| **S** | Scratch / sizing | Separates coarse middlings into size fractions |
| **T** | Tailing | Recovers flour from the coarsest reject material |

So **4B5M1S1T** is four break passages, five reduction passages, one scratch and one tailing. The numbers are passages, not machines. A single passage at 100 t/d may be served by four roll stands running in parallel.

Two flow sheets with identical capacity can have radically different capital cost and radically different extraction. That difference is the entire subject of this article.

## What a break passage does

Wheat is not a homogeneous particle. It is a kernel with a starchy endosperm core wrapped in several bran layers. The first break's job is not to make flour — it is to **open the kernel and release endosperm in chunks large enough to be graded**.

This is why break rolls run a large differential (typically 2.5:1) with fluted rolls. The fast roll holds the kernel while the slow roll shears. The result is a clean split rather than a crush.

From the first break you get roughly:

- 5–8% flour (fine enough to pass)
- 55–60% middlings of various sizes
- 30–35% bran with adherent endosperm

Only the flour is finished. The middlings go to sizing, then to reduction. The bran goes to the second break.

## Why each break matters

Every additional break passage scrapes additional endosperm off bran that the previous passage could not reach. Diminishing returns set in, but the returns are money.

| Breaks | Extraction ceiling | Bran residual starch |
|---|---|---|
| 2 breaks | 68–70% | 12–15% |
| 3 breaks | 72–74% | 9–11% |
| 4 breaks | 76–78% | 6–8% |
| 5 breaks | 78–80% | 4–6% |

"Bran residual starch" is the flour you paid to mill and then sold as animal feed at a 70% discount. At 100 t/d, the difference between 11% and 7% residual starch in bran is roughly 1 tonne of flour per day — at USD 400/t that is USD 400/day, or USD 132,000 a year.

A 4th break passage costs perhaps USD 30,000–45,000 installed. It pays back in four months.

This is why we push buyers toward one more break than they think they need. It is the highest-return capital in the plant.

## Why reduction passages are different

Reduction rolls take clean endosperm and reduce it to flour. They run smooth rolls at a small differential (2.5:1 down to 1.25:1 as the passage number rises) because the objective is **attrition, not cutting**.

A high differential on a reduction passage cuts endosperm particles, generating heat and fine bran that then has to be sifted out. A low differential crushes and rubs, producing a controlled particle size distribution with less bran contamination.

| Passage | Typical differential | Roll type |
|---|---|---|
| 1B–4B | 2.5 : 1 | Fluted |
| 1S–2S (scratch) | 1.5–2.0 : 1 | Fluted, fine |
| 1M–2M | 2.0 : 1 | Smooth |
| 3M–4M | 1.5 : 1 | Smooth |
| 5M+ | 1.25 : 1 | Smooth |

Ordering the wrong differential for a position is a common and expensive mistake. A 2.5:1 roll in a 4M position will overheat the stock and raise ash. A 1.25:1 roll in a 2B position will not open the wheat at all.

## The sifter is usually the constraint

Roll stands grind. Sifters classify. Most flow sheets are limited by classification, not by grinding — because sifting area is expensive and bulky, while roll capacity is relatively cheap to add.

The working rule:

**Sifting area (m²) = daily capacity (t/d) ÷ 0.8**

| Capacity | Sifter area | Typical configuration |
|---|---|---|
| 20 t/d | 25 m² | 2 × twin-bin (5 m²/bin) |
| 30 t/d | 38 m² | 2 × twin-bin, or 1 × FSFG4×24 |
| 60 t/d | 75 m² | 2 × FSFG6×24 |
| 100 t/d | 125 m² | FSFG8×24 + FSFG6×24 |
| 200 t/d | 250 m² | 4–5 high square units |
| 300 t/d | 375 m² | 7–8 high square units |

Two caveats. First, the rule assumes a standard 4B5M flow sheet; more passages need proportionally more area. Second, sifting area must be distributed by **stream**, not just totalled — a plant with 125 m² concentrated on one machine cannot grade five streams independently.

## Where the purifier belongs

A [purifier](/equipment/purifier/) takes middlings from the break sifters and separates them by **density** rather than size. Pure endosperm is lighter and more angular, so it floats on the air stream and travels further; bran-contaminated particles of the same size settle and are rejected.

The consequences are large:

- Ash reduction of 0.08–0.15 points on the purified stream
- 5–8 points more patent extraction at the same ash specification
- The ability to produce genuinely low-ash flour rather than merely well-sifted flour

But a purifier needs feed. Below four break passages there is not enough middlings to keep it loaded, and the machine runs half-empty, consuming air and attention for nothing. **That is why 40 t/d is the practical threshold for a purifier** — it is also the point at which the flow sheet typically reaches 4 breaks.

## Scratch and tailing passages

**Scratch (S)** passages handle coarse middlings that are too big for reduction but too valuable to discard. A scratch roll reduces them to a size the sifter can handle, sending the clean portion to reduction and the contaminated portion to tailing.

**Tailing (T)** recovers flour from the coarsest, most bran-contaminated reject stream. Without a tailing passage, that material leaves as bran — with a significant amount of good flour still attached. A tailing passage typically recovers 0.5–1.5% of mill intake.

Neither is glamorous. Both are pure margin.

## Impact detachers: the invisible passage

Smooth reduction rolls produce flat flakes. Flakes blind sifter screens and lock flour inside their structure, so the sifter rejects material that is actually finished flour.

An [impact detacher](/equipment/impact-detacher/) throws the stock against pins at ~2,900 rpm, breaking flakes apart without grinding bran finer. The effect on sifting efficiency is immediate and measurable.

**Fit one after each group of smooth reduction mills.** It costs 3–5.5 kW and typically lifts sifting throughput by 8–15% on the affected streams.

## Comparing two flow sheets

Consider two quotations for a 60 t/d plant:

| | Option A | Option B |
|---|---|---|
| Flow sheet | 3B4M1S | 4B5M1S1T |
| Roll stands | 9 | 12 |
| High square sifters | 1 × FSFG6×24 | 2 × FSFG6×24 |
| Purifier | None | 1 bank |
| Installed power | 118 kW (floor-mounted) | 190 kW (tower) |
| Extraction | 74% | 78% |
| Patent ash | 0.68% | 0.52% |

Option A looks 21% cheaper on capital. Now run the numbers.

At 60 t/d of wheat and 74% extraction, Option A produces 44.4 t of flour per day. Option B produces 46.8 t. The 2.4 t/day difference, at USD 400/t, is USD 960/day — USD 316,800 a year at 330 operating days.

The extra capital is roughly USD 90,000. It pays back in about three and a half months, and then continues paying for twenty years.

Add the price premium for 0.52% ash versus 0.68% ash — typically 3–6% on the ex-mill price — and the gap widens further.

**This is the comparison that matters, and it is almost never presented in a quotation.**

## The flow sheet decision, in order

1. **Target extraction and grade count.** This sets the minimum passage count and whether a purifier is required.
2. **Break count.** One more than the minimum, almost always.
3. **Reduction count.** Two to three more than the break count for a standard flow sheet.
4. **Sifter area.** Capacity ÷ 0.8, distributed by stream.
5. **Purifier requirement.** Yes at 4 breaks and 40 t/d and above.
6. **Detachers.** One per smooth-roll group.
7. **Power and building.** Follows from all of the above.

## Ask for the flow sheet, not the price

Any supplier can quote a machine list. A flow sheet with the passages named, the differentials specified, the sifter area calculated and the extraction target stated is a document you can hold someone to.

If a quotation does not include one, that is the answer to your question about that supplier.
