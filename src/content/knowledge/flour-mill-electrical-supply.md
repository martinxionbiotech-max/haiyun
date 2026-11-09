---
title: "Power Supply for a Flour Mill: Transformer Sizing and Voltage Sag"
seoTitle: "Power Supply for a Flour Mill: Transformer Sizing"
description: "How to size a flour mill transformer, why voltage sag matters, what a generator really costs to run, and the power-quality checks that decide whether a 200."
type: cluster
pillar: how-to-size-a-flour-mill
updated: 2026-11-08
readingTime: 3
keywords: ["flour mill power supply", "transformer sizing flour mill", "flour mill generator", "voltage fluctuation milling plant"]
related: ["how-to-size-a-flour-mill", "flour-mill-power-consumption", "plc-automation-flour-mill", "flour-mill-electrical-supply"]
keyTakeaways:
  - "Size the transformer on starting current, not on connected load. The mistake is universal and it shows up as nuisance trips in the first week."
  - "Voltage sag of 10% for 200 ms will restart a PLC and cost you a production day. Most buyers check voltage but never check sag."
  - "A generator is not a backup for a mill — it is a backup for the packing line and the lights. Starting a 90 kW motor on a generator needs a set twice that size."
  - "Anyone quoting a mill without asking about your supply voltage has not thought about your project."
faq:
  - q: "What size transformer does a 60 t/d flour mill need?"
    a: "A 250 kVA transformer for a plant with roughly 190 kW connected load, assuming a 0.8 power factor and a 40% starting margin. A 200 kVA unit will run the plant and trip on the largest motor start in a cold morning."
  - q: "Can I run a flour mill on a generator?"
    a: "Not economically for production. Diesel generation costs three to five times grid power per kWh. It is worth having for the packing line and control room so a shutdown does not spoil finished goods, but not for milling."
  - q: "Why does my mill trip when the big motor starts?"
    a: "Because the transformer or cable is sized on running current and the motor draws five to seven times that during a direct-on-line start. Either use a soft starter or a star-delta arrangement, or size the supply for the starting current."
---

Power supply is the most underestimated input in milling projects, and the reason is that buyers ask the wrong question.

They ask "how much power does the mill need?" and get an answer in kilowatts. That number is almost never what breaks a project. What breaks projects is power *quality* — voltage sag, frequency drift, phase imbalance — and the starting current of the largest motor, neither of which appears in a connected-load figure.

## Connected load is not the number you buy on

A [60 t/d](/flour-milling-plant/40-60tpd-flour-plant/) plant draws around 190 kW connected. The obvious move is to buy a transformer just above that. It is also the wrong move.

Two corrections have to be applied. First, power factor: motors run at 0.8–0.85, so 190 kW is 225–240 kVA of apparent power. Second, and more important, starting current. A 90 kW motor started direct-on-line pulls five to seven times its rated current for a few seconds. If the transformer cannot supply that, the voltage collapses, contactors drop out, and the plant trips — sometimes taking the whole board with it.

| Approach | Result |
|---|---|
| Transformer = connected kW | Trips on largest motor start |
| Transformer = kW ÷ 0.8 | Marginal; trips on cold mornings |
| Transformer = kW ÷ 0.8 × 1.3 | Reliable; standard practice |
| Soft starter fitted | Only needed if the supply cannot be upgraded |

That last row is the pragmatic option. A soft starter costs a fraction of a transformer upgrade and solves the same problem — but it adds a failure mode to every start, so it is a workaround rather than a fix.

## Voltage sag, not voltage

Here is a distinction worth carrying into every conversation with a utility.

**Voltage** is what you measure with a multimeter: 400 V, 380 V, or whatever the nominal is. **Sag** is what happens for 100–500 milliseconds when a neighbouring factory starts a large motor or a transmission fault clears.

A mill will run happily at 370 V. It will not run through a 15% sag, because the PLC power supply drops out and the plant goes to a safe stop — which means a full restart sequence, half-filled spouts, and a production day lost to cleaning.

The measurement that matters is a power quality logger left on the incomer for a week. It costs a few hundred dollars to rent and it will tell you more about your site than any quotation document.

## What the generator is actually for

Every mill buyer eventually asks about a generator, and the honest answer is uncomfortable: a generator for a flour mill is a way of protecting finished goods, not a way of milling.

Diesel generation runs three to five times the grid cost per kWh. On a 60 t/d plant that is not a business case, it is a subsidy.

What does make sense — and is genuinely worth the money in regions with unstable supply — is a modest set sized for the packing line, the laboratory, the control room and lighting. The logic: a power cut during milling costs you a day of cleaning. A power cut during packing, with 400 bags on the floor and the scale mid-cycle, costs you the batch.

Sizing note: starting a motor on a generator needs roughly twice the motor rating in generator capacity, because the governor has to absorb the inrush. A 30 kW set will not start a 15 kW packer motor reliably.

## What I would ask before signing

Three questions, and the answers change the quotation:

What is the supply voltage and how many phases? A 60 t/d plant on a single-phase supply is not a mill, it is a fantasy — and we have been asked.

What is the largest motor you can start on your existing supply? If the answer is unknown, a soft starter is not optional.

Has anyone logged power quality at the site? A week of data prevents a year of nuisance trips.

None of this is exotic engineering. It is simply the difference between buying a plant and buying a plant that runs.
