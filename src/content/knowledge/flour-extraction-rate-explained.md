---
title: "Understanding Flour Extraction: Definitions, Measurement and Benchmarks"
seoTitle: "Flour Extraction: Definitions, Measurement and Benchmarks"
description: "A technical note on flour extraction: how it is measured, why mill extraction differs from commercial extraction, and benchmark figures. With full tables."
type: cluster
pillar: flour-milling-flow-sheet-design
updated: 2026-11-07
readingTime: 3
keywords: ["flour extraction definition", "mill extraction rate", "flour yield calculation"]
related: ["flour-extraction-rate-economics", "flour-milling-flow-sheet-design", "flour-ash-content-explained"]
keyTakeaways:
  - "Mill extraction is measured on a clean wheat basis; commercial extraction on as-received wheat. The two differ by 1.5–4%."
  - "Laboratory extraction (Bühler test mill) is the benchmark — production mills typically run 1–3 points below it."
  - "Benchmark: soft wheat 72–75%, hard wheat 76–79%, durum semolina 62–68%."
faq:
  - q: "What is the difference between mill and commercial extraction?"
    a: "Mill extraction divides flour by clean wheat entering the mill. Commercial extraction divides flour by wheat purchased, so it includes cleaning losses. Commercial is 1.5–4 points lower."
  - q: "What extraction should a mill achieve on hard wheat?"
    a: "76–79% for a 4B5M1S1T flow sheet with a purifier. A laboratory test mill might reach 79–81% on the same wheat; production losses account for the gap."
---

Three different numbers all get called 'extraction', and on the same wheat they can differ by six points. A supplier quoting 78% may be quoting a laboratory test mill; your production mill, measured against wheat purchased rather than wheat milled, may read 72%. Ask which definition before you compare anything.

This article is about **what extraction means and how to measure it** — the three definitions, the benchmarks, and the arithmetic that reconciles them. For the commercial case — what a point is worth, why flow sheet design sets it, and where the ash ceiling sits — see [why one point of extraction is worth more than your power bill](/knowledge/flour-extraction-rate-economics/).

## Three definitions that get confused

**1. Mill extraction** = flour ÷ clean wheat into mill × 100

**2. Commercial extraction** = flour ÷ wheat purchased × 100

**3. Laboratory extraction** = flour ÷ wheat in a Bühler or similar test mill × 100

| Definition | Hard wheat example |
|---|---|
| Laboratory | 80% |
| Mill | 77% |
| Commercial | 74.5% |

The 2.5-point gap between mill and commercial is cleaning loss plus moisture shrinkage. The 3-point gap between laboratory and mill is scale, flow sheet differences and operator reality.

**When a supplier quotes an extraction figure, ask which definition.** At [60 t/d](/flour-milling-plant/40-60tpd-flour-plant/) over 330 days, four points of commercial extraction is 792 t of flour — about USD 317,000 a year at USD 400/t. Even the 2.5-point gap between a mill figure and a commercial figure is worth roughly USD 198,000.

## Benchmarks

| Wheat / product | Laboratory | Production mill |
|---|---|---|
| Soft wheat, patent | 76–78% | 72–75% |
| Medium wheat, two grades | 79–81% | 75–78% |
| Hard wheat, two grades | 80–82% | 76–79% |
| Hard wheat, high extraction | 83–85% | 79–82% |
| Durum, semolina | 65–70% | 62–68% |
| Whole wheat / Atta | 97–99% | 85–95% |

## Measurement

The only reliable production measurement is a mass balance over a defined period:

1. Weigh wheat entering the mill (clean wheat, after cleaning)
2. Weigh flour leaving (all grades, before packing loss)
3. Weigh bran leaving
4. Reconcile — the three should sum to the input within 1%

Run it over a full 24 hours, not a shift, to average out surge and buffer effects.

Common measurement errors:

| Error | Effect |
|---|---|
| Using wheat purchased instead of clean wheat | Understates extraction by 2–4 points |
| Ignoring flour in the dust collector | Understates by 0.2–0.5 points |
| Weighing bags instead of using a flow meter | ±1–2 point noise |
| Short measurement window | Random error dominates |

## Improving extraction: ranked

| Action | Gain | Cost |
|---|---|---|
| Add bran finisher | +1.5–3.0 points | USD 6,000–15,000 |
| Re-flute rolls on schedule | +2–3 points | USD 40–120 per roll |
| Re-balance purifier air | +2–4 points | Technician time |
| Add a break passage | +1–2 points | USD 30,000–45,000 |
| Add tailing passage | +0.5–1.5 points | USD 15,000–30,000 |
| Fix sifter screen leaks | +0.5–2 points | Negligible |
| Improve tempering control | +0.5–1.5 points | USD 12,000–25,000 |

The first three are cheap or free and are the reason well-maintained older mills outperform neglected newer ones.


## Comparing a quoted figure to your own

If you want to know what a supplier's quoted extraction actually means, ask three questions: on what wheat, by which definition, and measured over what period. A laboratory figure on hard wheat and a commercial figure on a blend are not comparable, and the gap between them can be six points.

[UK Flour Millers](https://www.ukflourmillers.org/) publishes the industry's own description of the milling process and the terms used in it, which is useful when a supplier uses a term differently from the way you do.

## Sources

- [Bakerpedia — Extraction Rate](https://bakerpedia.com/processes/extraction-rate/) — the definition of extraction rate used here.
- [Codex Standard for Wheat Flour (CXS 152-1985)](https://www.fao.org/input/download/standards/50/CXS_152e.pdf) — definitions and compositional reference for wheat flour.

Figures in this article are typical ranges from Haiyun project work unless a source is named; they are not measurements reproduced from these documents. How figures are produced: [methodology](/about/methodology/).
