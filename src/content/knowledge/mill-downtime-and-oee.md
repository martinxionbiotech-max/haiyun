---
title: "Downtime and OEE in a Flour Mill: Measuring What Actually Stops You"
seoTitle: "Downtime and OEE in a Flour Mill: What Stops You"
description: "How to calculate OEE for a flour mill honestly, why the standard formula misleads in milling, and the four downtime categories to track. And the OEE maths."
type: cluster
pillar: flour-mill-operations-and-maintenance
updated: 2026-11-08
readingTime: 3
keywords: ["flour mill OEE", "milling downtime", "flour mill availability", "mill performance metrics"]
related: ["flour-mill-operations-and-maintenance", "flour-mill-preventive-maintenance-schedule", "plc-automation-flour-mill", "remote-monitoring-and-plc-data"]
keyTakeaways:
  - "Standard OEE assumes a discrete manufacturing line with a takt time. A flour mill is a continuous process, so the A×P×Q formula needs reinterpretation or it flatters you."
  - "Four downtime categories cover almost everything: mechanical, changeover and cleaning, upstream supply, and downstream blockage. Only the first is a maintenance problem."
  - "A mill at 85% availability is doing well. Anything quoted above 95% is measuring scheduled hours, not calendar hours."
  - "The single best predictive signal is specific power trending up at constant throughput. It moves weeks before a bearing fails."
faq:
  - q: "What is a good OEE for a flour mill?"
    a: "80–88% on a two-shift operation is strong. Above 90% usually means the measurement excludes cleaning and changeover time, which are real losses. Below 70% means either the plant or the market is wrong."
  - q: "How do I measure availability without a PLC?"
    a: "A paper log at the mill floor with four columns: stop time, restart time, category, and who attended. It works, it costs nothing, and the discipline of writing it is more valuable than the data."
  - q: "What causes most flour mill downtime?"
    a: "In order: blocked spouts and chutes, sifter screen failures, roll changes, pneumatic system faults, and packing line stoppages. Bearing failures are rarer but take far longer to fix."
---

OEE is borrowed from discrete manufacturing — automotive, electronics — where a line makes a countable unit at a defined cycle time. A flour mill does not work that way, and applying the standard formula without adjustment produces a number that looks rigorous and means very little.

That is not an argument against measuring. It is an argument for measuring the right things.

## Why the standard formula misleads

OEE is Availability × Performance × Quality.

In a mill, **Performance** is throughput against a design rate that depends on wheat, extraction target and flow sheet. Run softer wheat and you can hit 105% of nominal — which the formula reads as excellent, when it actually means you bought cheaper wheat.

**Quality** is first-pass yield, which in a mill is close to 100% because flour is not scrapped, it is reclassified. A mill producing clear flour instead of patent flour has a quality problem that OEE scores as a full pass.

**Availability** is the only term that behaves normally, and it is where the useful information lives.

| Term | Discrete line | Flour mill reality |
|---|---|---|
| Availability | Meaningful | Meaningful — use this |
| Performance | Against takt time | Against wheat-dependent capacity — misleading |
| Quality | First-pass yield | Near 100% by construction — misleading |

So the practical approach: track **availability** properly, track **extraction and specific power** as your performance proxies, and track **complaint rate** as your quality proxy. Those four numbers describe a mill. OEE describes a factory.

## The four downtime categories

Every stop in a flour mill falls into one of four buckets, and the bucket determines who fixes it.

**Mechanical.** Breakage, wear, bearing failure, screen tear. Maintenance's problem, and the only category where [preventive maintenance](/knowledge/flour-mill-preventive-maintenance-schedule/) shows up.

**Cleaning and changeover.** Scheduled cleaning, screen changes, grade changes, sanitation between products. Often excluded from availability figures, which is dishonest — it is time the plant is not making flour.

**Upstream.** No wheat, wet wheat, wrong wheat, silo discharge blockage. A procurement and intake problem, not a milling one.

**Downstream.** Packing stoppage, no bags, full warehouse, no truck. A logistics problem that stops the mill because the flour silo is too small.

The distribution matters more than the total. A mill at 78% availability with 60% of losses in the downstream bucket does not need a maintenance programme — it needs a bigger finished flour silo. Buying condition monitoring for that mill would be spending money on the wrong constraint.

## The measurement that predicts failure

If you track one thing beyond availability, track **specific power at constant throughput**: kWh per tonne of flour, plotted weekly, against wheat source.

It is the earliest reliable signal of mechanical degradation. A worn bearing, a misaligned belt, a blunt roll, a partially blocked pneumatic line — all of them raise the energy required per tonne before they cause a stoppage. The rise is typically 3–8% and it appears weeks ahead of the failure.

The discipline required is that you have to know your wheat. Specific power moves for wheat reasons too, so the plot only works if you annotate wheat changes. A mill that tracks kWh/t without recording wheat source has a squiggly line and no information.

Second-best signal, and much easier: **vibration on the mill floor**, measured monthly with a handheld meter at fixed points. It catches bearing degradation and imbalance early and needs no instrumentation.

## What I would put on the wall

Four numbers, updated weekly, visible to the crew:

1. Availability, calendar basis, including cleaning
2. kWh per tonne of flour, with wheat source noted
3. Extraction, actual against target
4. Hours since last unplanned stop

The last one is a behavioural instrument more than a technical one. A crew that can see the number running up takes a different view of a rumbling bearing than a crew that reports it into a system nobody reads.

One closing warning. Availability figures are easy to improve by redefining the denominator — excluding cleaning, excluding changeover, excluding "planned" stops. Every mill that quotes 96% availability is doing one of those three. The number worth having is the honest one, even when it is 78%, because only the honest number tells you where the money is going.

## Evidence note

This article describes Haiyun engineering practice. The figures are typical ranges from project
work, not published measurements, and no external standard is claimed where none is named in the
text. How these figures are produced: [methodology](/about/methodology/).
