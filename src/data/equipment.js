// Equipment catalogue — cleaning and milling. Enriched beyond brochure data
// with selection notes, application ranges and maintenance guidance.

export const equipmentCategories = [
  { id: 'cleaning', name: 'Cleaning Equipment', slug: 'cleaning-equipment', count: 13, blurb: 'Everything between the weighbridge and the tempering bin: screens, destoners, scourers, washers, dampeners, magnets and aspirators.' },
  { id: 'milling', name: 'Flour Milling Equipment', slug: 'flour-milling-equipment', count: 10, blurb: 'Roll stands, plansifters, purifiers, bran finishers, impact detachers, packers and dust collectors — the core of any flour line.' },
];

export const equipment = [
  // ─── CLEANING ────────────────────────────────────────────────
  {
    slug: 'drum-sieve-pre-cleaner',
    name: 'Drum Sieve Pre-Cleaner',
    altName: '圆筒初清筛',
    model: 'SCQY',
    category: 'cleaning',
    stage: 'Intake / pre-cleaning',
    tagline: 'First line of defence: straw, string and dust out before anything else sees the wheat.',
    intro:
      'The SCQY rotary drum is the cheapest tonne of cleaning you will ever buy. It removes coarse straw, rope, cob and dust before the wheat reaches any precision equipment, which is what keeps the fine screens downstream from blinding.',
    specs: {
      headers: ['Model', 'Capacity', 'Power', 'Dimensions (mm)', 'Weight'],
      rows: [
        ['SCQY80', '8–10 t/h', '1.1 kW', '1650 × 1000 × 1500', '460 kg'],
        ['SCQY100', '10–15 t/h', '1.5 kW', '1700 × 1250 × 2100', '580 kg'],
        ['SCQY125', '15–20 t/h', '2.2 kW', '2740 × 1600 × 2490', '900 kg'],
        ['SCQY150', '20–30 t/h', '3 kW', '2950 × 1860 × 2490', '1,100 kg'],
      ],
    },
    selection: 'Size to 1.3× your peak intake rate — pre-cleaners are often bypassed during harvest rush and you do not want to be the reason a truck waits.',
    maintenance: 'Inspect the drum screen every 200 hours; replace when hole deformation exceeds 15%. Bearing grease every 500 hours.',
    faq: [
      { q: 'Does the drum sieve replace a vibrating screen?', a: 'No. It removes only coarse and large impurities. Size grading of small impurities requires a vibrating screen downstream.' },
    ],
  },
  {
    slug: 'rotary-vibrating-screen',
    name: 'Rotary Vibrating Screen',
    altName: '旋转振动筛',
    model: 'HZXZ',
    category: 'cleaning',
    stage: 'Pre-cleaning',
    tagline: 'High-capacity size grading for wheat, millet, sorghum and oilseed.',
    intro:
      'A two- or three-deck rotary vibrating screen that grades by particle size. Widely used beyond wheat — the same frame handles millet, sorghum, brewing grain and chemical granulate — which is why it is often the second machine purchased after a drum sieve.',
    specs: {
      headers: ['Model', 'Decks', 'Pre-clean wheat (t/h)', 'Clean wheat (t/h)', 'Power', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['HZXZ150×250', '2', '50', '30', '3 kW', '2,800 kg', '2988 × 2206 × 2106'],
        ['HZXZ150×250A', '3', '50', '30', '3 kW', '2,900 kg', '2988 × 2206 × 2106'],
        ['HZXZ200×250', '2', '60', '40', '4 kW', '3,200 kg', '2988 × 2705 × 2106'],
        ['HZXZ200×250A', '3', '60', '40', '4 kW', '3,300 kg', '2988 × 2705 × 2106'],
      ],
    },
    selection: 'Three decks are worth the marginal cost when you also need to grade small impurities below 1.5 mm — a two-deck unit leaves them in the wheat.',
    maintenance: 'Check screen tension weekly; slack screens are the number one cause of premature frame cracking. Replace rubber buffers annually.',
    faq: [
      { q: 'What is the difference between pre-cleaning and cleaning capacity?', a: 'Pre-cleaning capacity assumes lightly contaminated grain straight from the field. Cleaning capacity assumes grain that has already passed a first stage and is being graded to mill-ready standard.' },
    ],
  },
  {
    slug: 'self-balancing-vibrating-screen',
    name: 'Self-Balancing Vibrating Screen',
    altName: '自衡振动筛',
    model: 'TQLZ',
    category: 'cleaning',
    stage: 'Primary cleaning',
    tagline: 'The reference machine for large, medium and light impurity separation.',
    intro:
      'TQLZ is the workhorse screen of the flour industry, and for good reason: a counterweighted self-balancing drive means the frame does not transmit vibration into the building, so it can sit on a mezzanine without a separate isolation foundation.',
    specs: {
      headers: ['Model', 'Screen size (cm)', 'Pre-clean (t/h)', 'Clean (t/h)', 'Power', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['TQLZ60×100', '60 × 100', '20', '8', '2 × 0.25 kW', '360 kg', '1640 × 1550 × 1455'],
        ['TQLZ100×100', '100 × 100', '30', '8', '2 × 0.25 kW', '420 kg', '1640 × 1610 × 1455'],
        ['TQLZ100×150', '100 × 150', '50', '12', '2 × 0.37 kW', '520 kg', '2140 × 1610 × 1455'],
        ['TQLZ100×200', '100 × 200', '60', '16', '2 × 0.37 kW', '540 kg', '2640 × 1610 × 1455'],
        ['TQLZ150×150', '150 × 150', '75', '18', '2 × 0.55 kW', '630 kg', '2140 × 2160 × 1455'],
        ['TQLZ150×200', '150 × 200', '100', '24', '2 × 0.75 kW', '650 kg', '2640 × 2160 × 1455'],
        ['TQLZ180×200', '180 × 200', '120', '28', '2 × 1.1 kW', '1,000 kg', '2740 × 2510 × 1980'],
      ],
    },
    selection: 'Match cleaning capacity (not pre-cleaning capacity) to your mill throughput. A 30 t/d plant needs a TQLZ100×150 at minimum, sized on the cleaning column at 12 t/h over a 10-hour effective working window.',
    maintenance: 'Rebound rubber and screen frames are consumables — budget for one set per 18 months on two-shift operation.',
    faq: [
      { q: 'Why is cleaning capacity so much lower than pre-cleaning capacity?', a: 'Cleaning requires the grain to spend far longer on the screen so that small impurities can pass. The same deck area therefore handles roughly a third of the throughput when it is doing real cleaning rather than rough scalping.' },
    ],
  },
  {
    slug: 'cycling-air-separator',
    name: 'Cycling Air Separator',
    altName: '循环风选器',
    model: 'TFXH',
    category: 'cleaning',
    stage: 'Primary cleaning',
    tagline: 'Closed-loop air. Dust removal without the dust collector.',
    intro:
      'The TFXH separates low-density impurities using a closed air circuit — the air is recirculated rather than exhausted. That means no external dust collector, no heat loss to the atmosphere, and no dust plume over the neighbourhood, which matters enormously for plants inside town limits.',
    specs: {
      headers: ['Model', 'Cleaning (t/h)', 'Pre-clean (t/h)', 'Power', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['TFXH60', '9', '40', '2.25 kW', '400 kg', '1166 × 1000 × 1680'],
        ['TFXH80', '12', '50', '2.6 kW', '430 kg', '1366 × 1000 × 1680'],
        ['TFXH100', '16', '65', '2.6 kW', '460 kg', '1566 × 1000 × 1680'],
        ['TFXH125', '20', '83', '4.1 kW', '500 kg', '2216 × 1000 × 1680'],
        ['TFXH150', '24', '100', '4.1 kW', '660 kg', '2446 × 1000 × 1680'],
        ['TFXH180', '28', '105', '4.1 kW', '780 kg', '2766 × 1000 × 1680'],
        ['TFXH200', '32', '130', '8.2 kW', '890 kg', '2966 × 1000 × 1680'],
        ['TFXH250', '40', '160', '8.2 kW', '960 kg', '3466 × 1000 × 1680'],
        ['TFXH300', '60', '200', '10.2 kW', '1,260 kg', '3966 × 1000 × 1680'],
      ],
    },
    selection: 'Choose the closed-loop version wherever the plant is in a residential or food-grade environment. The open-aspiration alternative is cheaper to buy and much more expensive to permit.',
    maintenance: 'Clean the settling chamber every shift; a loaded chamber silently cuts separation efficiency by 30% or more.',
    faq: [
      { q: 'Does a cycling air separator need a bag filter?', a: 'No. The heavy dust fraction drops into a settling hopper. A small secondary filter is only needed if the machine exhausts into a sealed room.' },
    ],
  },
  {
    slug: 'gravity-destoner',
    name: 'Gravity Classifying Destoner',
    altName: '比重分级去石机',
    model: 'TQSF',
    category: 'cleaning',
    stage: 'Primary cleaning',
    tagline: 'The machine that decides how much ash ends up in your flour.',
    intro:
      'Stones are the same size as wheat and heavier, so only a combined air-and-vibration separation can lift them out. Skipping or under-sizing the destoner is the single most common cause of excessive ash in small mills — and the damage is invisible until a customer complains about grit.',
    specs: {
      headers: ['Model', 'Screen width (cm)', 'Capacity, wheat (t/h)', 'Air volume (m³/h)', 'Power', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['TQSF43', '43', '1–1.5', '3,000', '2 × 0.25 kW', '215 kg', '1270 × 700 × 1600'],
        ['TQSF50', '50', '2–4', '4,000', '2 × 0.25 kW', '230 kg', '1420 × 780 × 1800'],
        ['TQSF60', '60', '3–5', '4,500', '2 × 0.25 kW', '280 kg', '1450 × 876 × 1800'],
        ['TQSF80', '80', '5–7', '6,000', '2 × 0.25 kW', '340 kg', '1450 × 1046 × 1800'],
        ['TQSF100', '100', '7–9', '8,000', '2 × 0.25 kW', '400 kg', '1500 × 1246 × 1900'],
        ['TQSF125', '125', '9–11', '10,200', '2 × 0.25 kW', '500 kg', '1470 × 1496 × 1900'],
        ['TQSFB4125', '125', '15–18', '12,000', '2 × 0.55 kW', '650 kg', '1649 × 1714 × 2083'],
        ['TQSF150', '150', '11–14', '12,000', '2 × 0.25 kW', '600 kg', '1580 × 1746 × 1900'],
        ['TQSFB150', '150', '18–20', '15,000', '2 × 0.55 kW', '760 kg', '1649 × 1964 × 2083'],
        ['TQSF175', '175', '14–18', '15,000', '2 × 0.25 kW', '750 kg', '1470 × 1990 × 1900'],
        ['TQSF200', '200', '16–20', '17,000', '2 × 0.25 kW', '1,000 kg', '1470 × 2292 × 1900'],
        ['TQSF250', '250', '20–22', '20,400', '2 × 0.25 kW', '1,050 kg', '1470 × 2835 × 1900'],
      ],
    },
    selection: 'The "B" variants deliver roughly 60% more capacity on the same screen width by using a larger air volume and a steeper deck. Use them when floor space is the constraint rather than headroom.',
    maintenance: 'Replace the screen cloth when stone removal efficiency drops below 95%; test quarterly by spiking a sample with 200 counted stones.',
    faq: [
      { q: 'How do I know my destoner is working?', a: 'Take a 1 kg sample from the stone outlet. It should be almost entirely stones and glass. If you see more than 10 wheat kernels per 100 stones, the air volume is too high or the deck angle is wrong.' },
      { q: 'Why does ash matter so much?', a: 'Ash is the mineral residue after burning — it is essentially a proxy for bran contamination. A patent flour at 0.55% ash and one at 0.70% ash look similar but behave very differently in a bakery and price 8–12% apart.' },
    ],
  },
  {
    slug: 'plane-rotary-sifter',
    name: 'Plane Rotary Sifter',
    altName: '平面回转筛',
    model: 'TQLM',
    category: 'cleaning',
    stage: 'Primary cleaning',
    tagline: 'Gentle, enclosed and dust-free — the polite screen.',
    intro:
      'The TQLM separates large and small impurities through a slow planar rotary motion inside a fully enclosed sieve boat. Because there is no vertical throwing action, it damages grain far less than a vibrating screen — which is why it is preferred for seed cleaning and malting barley.',
    specs: {
      headers: ['Model', 'Screen size W × L (cm)', 'Capacity (t/h)', 'Weight', 'Power', 'Dimensions (mm)'],
      rows: [
        ['TQLM63', '63 × 100', '2–3', '500 kg', '0.75 kW', '1355 × 936 × 946'],
        ['TQLM80', '80 × 150', '3–5', '635 kg', '0.75 kW', '2120 × 1265 × 1645'],
        ['TQLM100', '100 × 150', '5–8', '750 kg', '0.75 kW', '2120 × 1465 × 1645'],
        ['TQLM125', '125 × 150', '8–12', '885 kg', '1.1 kW', '2120 × 1715 × 1645'],
        ['TQLM160', '160 × 150', '12–16', '996 kg', '1.1 kW', '2120 × 2065 × 1645'],
      ],
    },
    selection: 'Use this where grain damage matters — seed stock, malting barley, specialty wheat with a premium on kernel integrity. For bulk commercial wheat, the cheaper vibrating screen is adequate.',
    maintenance: 'The eccentric drive runs in an oil bath; change oil every 2,000 hours and check the flexible coupling for fatigue every quarter.',
    faq: [
      { q: 'Can the TQLM replace a vibrating screen entirely?', a: 'In capacity terms no — it is a lower-throughput machine. It is usually installed as a second-stage screen or where kernel integrity is a commercial requirement.' },
    ],
  },
  {
    slug: 'horizontal-wheat-scourer',
    name: 'Horizontal Wheat Scourer',
    altName: '卧式打麦机',
    model: 'FDMW',
    category: 'cleaning',
    stage: 'Surface cleaning',
    tagline: 'Beats bacteria, insects and beard dust off the kernel surface.',
    intro:
      'A horizontal rotor throws wheat against a perforated drum, scouring the surface and the brush end. It removes not only visible dirt but a measurable share of the surface microbial load — which is why flour mills chasing export or food-safety certification specify two scourer passes.',
    specs: {
      headers: ['Model', 'Drum dia.', 'Drum length', 'Speed (rpm)', 'Capacity (t/h)', 'Light beat', 'Heavy beat', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['FDMW30×60', 'Φ300', '600', '800–1200', '2–4', '4 kW', '5.5 kW', '450 kg', '1270 × 400 × 1200'],
        ['FDMW40×100', 'Φ400', '1000', '800–1200', '4–7', '5.5 kW', '7.5 kW', '710 kg', '2130 × 920 × 1700'],
        ['FDMW40×150', 'Φ400', '1500', '800–1200', '7–10', '7.5 kW', '11 kW', '750 kg', '2630 × 920 × 1700'],
        ['FDMW40×100×2', 'Φ400', '1000 × 2', '800–1200', '8–14', '2 × 5.5 kW', '2 × 7.5 kW', '1,200 kg', '2130 × 1490 × 1700'],
        ['FDMW40×150×2', 'Φ400', '1500 × 2', '800–1200', '16–20', '2 × 7.5 kW', '2 × 11 kW', '1,500 kg', '2630 × 1490 × 1700'],
      ],
    },
    selection: 'Light-beat for soft wheat and durum where breakage is costly; heavy-beat for hard wheat with visible surface contamination. The double-drum units are two machines on one frame and share a single inlet.',
    maintenance: 'Rotate or replace beaters every 800–1,200 hours. Worn beaters round off and stop scouring entirely while still consuming full power.',
    faq: [
      { q: 'How much does scouring reduce ash?', a: 'A single heavy-beat pass typically removes 0.03–0.06 percentage points of ash from the whole meal. Two passes with an intervening brush can reach 0.08.' },
      { q: 'Does the scourer break wheat?', a: 'At correct clearance, breakage stays under 0.5%. Excess breakage almost always means the drum-to-beater clearance has closed up from wear.' },
    ],
  },
  {
    slug: 'grain-length-grader',
    name: 'Grain Length Grader',
    altName: '粮食精选机 / 长度机',
    model: 'MDJY',
    category: 'cleaning',
    stage: 'Fine cleaning',
    tagline: 'Removes broken, shrivelled and diseased kernels by length alone.',
    intro:
      'An indent cylinder grades by kernel length, which no screen can do. It pulls out broken grains, ergot-adjacent shrivelled kernels and light diseased grain that would otherwise inflate your ash and downgrade your flour colour. The cylinder lifts broken kernels and short round seeds — vetch, wild radish, cockle — that no sieve separates because their width matches sound wheat. Capacity follows cylinder area rather than drive power, so two short cylinders in parallel beat one long one where headroom is limited.',
    specs: {
      headers: ['Model', 'Capacity (t/h)', 'Power', 'Dimensions (mm)', 'Broken-in-whole', 'Whole-in-broken'],
      rows: [
        ['MDJY50×2', '1.2', '0.75 × 2 kW', '3130 × 640 × 1600', '≤ 2%', '≤ 5%'],
        ['MDJY50×3', '2', '0.75 × 3 kW', '3130 × 640 × 2150', '≤ 2%', '≤ 5%'],
        ['MDJY50×3B', '2.5', '0.75 × 3 kW', '2650 × 640 × 2100', '≤ 2%', '≤ 5%'],
        ['MDJY50×4', '3.5', '0.75 × 4 kW', '3130 × 720 × 3100', '≤ 2%', '≤ 5%'],
        ['MDJY60/60', '1.5–2', '0.75 × 2 kW', '3130 × 735 × 1700', '≤ 2%', '≤ 5%'],
        ['MDJY60/2B', '2', '0.75 × 2 kW', '2780 × 735 × 1700', '≤ 2%', '≤ 5%'],
        ['MDJY60×3', '2.5–3', '0.75 × 3 kW', '3130 × 740 × 2450', '≤ 2%', '≤ 5%'],
      ],
    },
    selection: 'Essential for seed production and for any market that grades visually. For plain commercial flour milling it is optional — but it pays back quickly on high-value wheat.',
    maintenance: 'Indent pockets wear at the leading edge; re-cut or replace cylinders every 3–5 seasons depending on tonnage.',
    faq: [
      { q: 'What is the difference between the two separation figures?', a: 'Broken-in-whole is how much broken grain remains in the accepted stream (lower is better). Whole-in-broken is how much good grain is lost to the reject stream (also lower is better). Together they define the machine\'s efficiency.' },
    ],
  },
  {
    slug: 'wheat-washer-destoner-dryer',
    name: 'Wheat Washer, Destoner & Dryer',
    altName: '去石洗麦甩干机',
    model: 'XMS / FZSQ',
    category: 'cleaning',
    stage: 'Wet cleaning',
    tagline: 'Washes the crease. Nothing else reaches inside it.',
    intro:
      'The crease of a wheat kernel traps dirt, pesticide residue and micro-organisms that no dry process can reach. A washer-destoner floods it out, floats off light impurities, sinks the stones, and then centrifuges the surface water back down to a controlled moisture.',
    specs: {
      headers: ['Model', 'Capacity (t/h)', 'Power', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['FZSQ32×150', '3–6', '3 kW', '250 kg', '—'],
        ['FZSQ40×200', '6–12', '4 kW', '280 kg', '—'],
        ['FZSQ40×250', '12–18', '5.5 kW', '460 kg', '—'],
        ['FZSQ50×250', '16–22', '7.5 kW', '540 kg', '—'],
        ['FZSQ50×280', '18–25', '11 kW', '560 kg', '—'],
        ['FZSQ50×300', '20–30', '11 kW', '620 kg', '—'],
        ['XMS40×100', '1.2–2.0', '2.2 + 0.75 kW', '460 kg', '2000 × 800 × 1500'],
        ['XMS50×110', '2.5–4', '4 + 1.1 kW', '640 kg', '2700 × 1000 × 1700'],
        ['XMS60×130', '4–6', '5.5 + 1.5 kW', '1,000 kg', '2700 × 1200 × 1860'],
        ['XMS90×150', '6–8', '11 + 2.2 kW', '1,800 kg', '3450 × 1450 × 2400'],
      ],
    },
    selection: 'Wet cleaning costs water, effluent treatment and 3–5% extra drying load. It is justified when wheat arrives with visible soil in the crease, when the mill serves a premium or export market, or when pesticide residue limits are contractually enforced.',
    maintenance: 'Water consumption is 0.8–1.2 m³ per tonne of wheat. Budget for a settling pit and a recirculation pump — discharging once-through is illegal in most jurisdictions now.',
    faq: [
      { q: 'Can I skip wet cleaning?', a: 'Yes, with dry cleaning plus two scourer passes you can reach good commercial quality. Wet cleaning is what separates a commodity flour from a flour that passes residue testing for export.' },
      { q: 'How much water does it use?', a: 'Expect 0.8–1.2 m³ per tonne of wheat processed. A 30 t/d plant therefore needs roughly 30 m³/day, most of which is recoverable with a settling and filtration loop.' },
    ],
  },
  {
    slug: 'automatic-dampening-system',
    name: 'Microcomputer Automatic Dampening System',
    altName: '电脑自动着水系统',
    model: 'DZS',
    category: 'cleaning',
    stage: 'Tempering',
    tagline: 'Microwave moisture measurement, ±0.2% water control, no operator guesswork.',
    intro:
      'Milling performance is decided before the wheat ever reaches a roll. The DZS measures incoming moisture with a microwave sensor, calculates the water needed to hit target tempered moisture, and adds it continuously — holding accuracy to ±0.2%, which is finer than any operator with a jug and a moisture meter. Control quality depends far more on where moisture is measured than on the pump: an online meter after the dampener lets the loop correct within seconds, while a lab sample taken an hour later corrects wheat milled an hour ago. Budget for a tempering bin sized to the rest time, not just for the dampener.',
    specs: {
      headers: ['Parameter', 'Value'],
      rows: [
        ['Preset moisture range', '5–10%'],
        ['Dampening accuracy', '±0.2%'],
        ['Working capacity', '3–30 t/h'],
        ['Water supply pressure', '0.1–0.3 MPa'],
        ['Control modes', 'Fully automatic + manual (for maintenance without stopping)'],
        ['Display', 'LCD, full parameter and status readout'],
        ['Diagnostics', 'Fault self-diagnosis, software-based hardware adjustment'],
      ],
    },
    selection: 'If you are running more than one wheat origin, this is not optional. Blended wheat with mismatched tempering is the classic cause of "the mill was fine yesterday" complaints.',
    maintenance: 'Calibrate the microwave sensor against an oven-dry reference every 30 days. A drifted sensor is worse than no sensor because operators trust it.',
    faq: [
      { q: 'What tempered moisture should I target?', a: 'Soft wheat: 15.0–15.5%. Hard wheat: 16.0–16.5%. Durum: 16.5–17.0%. Below these figures the bran shatters; above them the rolls smear.' },
      { q: 'How long should wheat temper?', a: '12 hours minimum, 18–24 hours is standard. Below 12 hours the water has not reached the crease and the bran is still brittle.' },
    ],
  },
  {
    slug: 'aspiration-separator',
    name: 'Aspiration Separator',
    altName: '吸风分离器',
    model: 'TXFY / TXFL',
    category: 'cleaning',
    stage: 'Final cleaning',
    tagline: 'The last chance to pull chaff, beard and insect fragments out.',
    intro:
      'Positioned immediately before the first break, the aspirator uses a light air stream to lift remaining light material out of the mill feed. It is cheap, it has almost no wearing parts, and it prevents contaminants from entering the milling system where they would be very difficult to remove.',
    specs: {
      headers: ['Model', 'Cleaning (t/h)', 'Pre-clean (t/h)', 'Air volume (m³/h)', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['TXFL80', '12', '50', '2,800–3,000', '230 kg', '860 × 2100'],
        ['TXFL100', '16', '65', '3,500–3,800', '360 kg', '1060 × 2150'],
        ['TXFL120', '20', '83', '4,100–4,500', '400 kg', '1260 × 2200'],
      ],
    },
    selection: 'Always fit one. The payback is not measured in capacity but in avoided customer complaints.',
    maintenance: 'No wearing parts. Clean the air inlet grille weekly.',
    faq: [
      { q: 'Is an aspirator the same as a pneumatic conveyor?', a: 'No. The aspirator uses air only to separate light material; it does not transport product. Pneumatic conveying is a separate system with much higher air volume and pressure.' },
    ],
  },
  {
    slug: 'magnetic-separator',
    name: 'Magnetic Separator',
    altName: '磁选器',
    model: 'TCXP / TCXT',
    category: 'cleaning',
    stage: 'Final cleaning',
    tagline: '3,000–12,000 gauss. Non-negotiable in any food-grade plant.',
    intro:
      'Ferrous contamination — a broken screen wire, a bolt, a staple from a jute bag — is the single most common cause of product recall. Plate magnets in spouts and permanent magnetic drums on free-flowing lines intercept it before it can reach a roll or a customer. Field strength at the face is not field strength at 40 mm, which is where the wheat actually flows. Neodymium plates hold their strength but lose it above 80 °C, a real problem after a dryer; ferrite is weaker but tolerant. Clean the plate every shift and check gauss annually.',
    specs: {
      headers: ['Type', 'Model', 'Field strength', 'Wheat (t/h)', 'Paddy (t/h)', 'Flour (t/h)'],
      rows: [
        ['Plate', 'TCXP20', '≥ 3,000 Gs', '12', '8', '—'],
        ['Plate', 'TCXP30', '≥ 3,000 Gs', '18', '12', '—'],
        ['Plate', 'TCXP40', '≥ 3,000 Gs', '24', '16', '—'],
        ['Plate', 'TCXP50', '≥ 3,000 Gs', '30', '20', '—'],
        ['Drum', 'TCXT12a/b', '≥ 3,000 Gs', '10–15', '—', '5–8'],
        ['Drum', 'TCXT15a/b', '≥ 3,000 Gs', '20–30', '—', '10–15'],
        ['Drum', 'TCXT20a/b', '≥ 3,000 Gs', '35–50', '—', '20–30'],
        ['Drum', 'TCXT25a/b', '≥ 3,000 Gs', '45–70', '—', '35–50'],
        ['Drum', 'TCXT30a/b', '≥ 3,000 Gs', '60–90', '—', '45–70'],
      ],
    },
    selection: 'Install at minimum: one on wheat intake, one before the first break, one on each flour stream before packing. Higher-gauss (5,000–12,000) units catch fine stainless wear particles that 3,000 gauss misses.',
    maintenance: 'Clean magnets every shift. A magnet caked with iron filings stops attracting. Record the material removed — it is your early-warning system for equipment wear.',
    faq: [
      { q: 'Where do magnets belong in a flour mill?', a: 'Wheat intake, pre-break, each flour outlet before the packer, and on any stream that passes a screen. Five to seven locations is normal for a 100 t/d plant.' },
    ],
  },
  {
    slug: 'wheat-brush-scourer-combination',
    name: 'Wheat Roller-Brush Combination Machine',
    altName: '小麦碾打刷组合机',
    model: 'TNSW',
    category: 'cleaning',
    stage: 'Surface cleaning',
    tagline: 'Kernel-by-kernel cleaning that leaves the bran intact.',
    intro:
      'This machine treats grain one kernel at a time with a combined peeling and brushing action. It removes the outer epidermis, beard, fine dust and micro-organisms while deliberately preserving the endocarp, seed coat, nucellar layer and aleurone — the layers that hold the bran together.',
    specs: {
      headers: ['Model', 'Capacity (t/h)', 'Weight', 'Power', 'Dimensions (mm)'],
      rows: [
        ['TNSW75', '8–10', '1,020 kg', '7.5 kW', '2230 × 700 × 1425'],
        ['TNSW-110', '10–18', '1,080 kg', '11 kW', '2230 × 700 × 1425'],
        ['TNSW-150', '18–26', '1,160 kg', '15 kW', '2230 × 700 × 1425'],
      ],
    },
    selection: 'The premium alternative to a second scourer pass when bran integrity matters — whole wheat flour, stone milling, and any line where the bran must stay in large flakes rather than shatter into powder.',
    maintenance: 'Brush segments wear against the screen; inspect every 600 hours and rotate position to even out wear.',
    faq: [
      { q: 'How much ash reduction is achievable?', a: 'Up to 0.10 percentage points on the whole meal, which is substantial — roughly equivalent to a full extra break passage in ash terms.' },
    ],
  },

  // ─── MILLING ─────────────────────────────────────────────────
  {
    slug: '6f-single-roller-mill',
    name: '6F Single Roller Mill',
    altName: '6F 型单式磨粉机',
    model: '6F',
    category: 'milling',
    stage: 'Grinding',
    tagline: 'The building block of every small and medium flour plant.',
    intro:
      'The 6F range is the single-roll unit from which most Haiyun plants are assembled. Roll diameter and length determine capacity; drive type determines maintenance; feed arrangement determines how many parallel streams one stand can serve. Understanding these three choices is most of what selecting a roll stand requires.',
    specs: {
      headers: ['Model', 'Roll dia. × length', 'Drive options', 'Feed options', 'Power', 'Weight', 'Dimensions (m)'],
      rows: [
        ['6F2560', 'Φ250 × 600', 'Belt / chain', 'Single / double', '7.5–15 kW', '1,000 kg', '1.14 × 0.78 × 0.67'],
        ['6F2550', 'Φ250 × 500', 'Belt / chain', 'Single / double / triple', '7.5–11 kW', '900 kg', '1.04 × 0.78 × 0.67'],
        ['6F2540', 'Φ250 × 400', 'Belt / chain', 'Single / double', '7.5–11 kW', '800 kg', '1.04 × 0.78 × 0.67'],
        ['6F2250', 'Φ220 × 500', 'Belt / gear', 'Single / double / triple', '7.5–11 kW', '540–560 kg', '0.97 × 0.7 × 0.59'],
        ['6F2240', 'Φ220 × 400', 'Belt / gear', 'Single / double', '5.5–7.5 kW', '460–480 kg', '0.87 × 0.7 × 0.59'],
        ['6F2235', 'Φ220 × 350', 'Belt / gear', 'Single / double', '5.5–7.5 kW', '420–440 kg', '0.82 × 0.7 × 0.59'],
      ],
    },
    selection: 'Synchronous belt drive transmits more torque at low speed and is quieter; chain drive tolerates heat and dust better and is easier to repair with basic tools. In dusty environments with unskilled maintenance, choose chain and accept the noise.',
    maintenance: 'Roll re-fluting every 1,500–2,500 operating hours depending on wheat hardness. Worn flutes polish the bran instead of cutting it, which floods the patent stream with fine bran.',
    faq: [
      { q: 'What does "single" and "double" feed mean?', a: 'Single feed means the stand serves one grinding passage. Double feed means two separate product streams can be fed to the same roll pair from either end — effectively doubling useful capacity on a stand.' },
      { q: 'How often do rolls need re-fluting?', a: 'Every 1,500–2,500 hours. Hard wheat and high extraction accelerate wear. Re-fluting costs far less than the losses from a dull roll, so most mills schedule it rather than wait for symptoms.' },
      { q: 'Belt or gear drive?', a: 'Belt: smoother, quieter, easier to align, needs tension checks. Gear: compact, no slip, better at very low speed, but needs an oil bath and is unforgiving of contamination.' },
    ],
  },
  {
    slug: 'fmfq-double-roller-mill',
    name: 'FMFQ(S) Double Roller Mill',
    altName: 'FMFQ(S) 型复式磨粉机',
    model: 'FMFQ(S)',
    category: 'milling',
    stage: 'Grinding',
    tagline: 'Pneumatic, hydraulic, precision — the industrial standard.',
    intro:
      'FMFQ is what a serious flour plant grinds with. Two roll pairs per stand, pneumatic or manual engagement, hydraulic roll removal, independent feed drive. Every feature exists because at industrial scale a fifteen-minute adjustment turns into a fifteen-hour shutdown.',
    highlights: [
      'Cast iron base + manganese plate body — stable under continuous load',
      'Synchronous belt drive with eccentric tensioning',
      'Manual and pneumatic operation on the same unit',
      'Independent feed motor ensures feed-before-grind sequencing',
      'Hydraulic roll bearing removal — no hammering, no alignment loss',
    ],
    specs: {
      headers: ['Model', 'Roll spec (mm)', 'Fast roll (rpm)', 'Differential', 'Motor power', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['FMFQ(S) 50×2', 'Φ250 × 500', '550', '2.5 : 1', '5.5–15 kW', '2,400 kg', '1400 × 1410 × 1850'],
        ['FMFQ(S) 60×2', 'Φ250 × 600', '550', '2 : 1', '5.5–18.5 kW', '2,700 kg', '1500 × 1410 × 1850'],
        ['FMFQ(S) 80×2', 'Φ250 × 800', '550', '1.5 : 1', '7.5–22 kW', '2,900 kg', '1700 × 1410 × 1850'],
        ['FMFQ(S) 100×2', 'Φ250 × 1000', '550', '1.25 : 1', '11–22 kW', '3,100 kg', '1900 × 1410 × 1850'],
      ],
    },
    selection: 'The differential ratio is not interchangeable — it belongs to the passage. Break passages run 2.5:1 for a cutting action; reduction passages step down to 1.25:1 for a gentle attrition action. Ordering the wrong ratio for a position is a common and costly mistake.',
    maintenance: 'Working pressure 0.4–0.6 MPa; air consumption 0.06–0.08 m³/h per mill. Check roll parallelism every 500 hours with a feeler gauge at both ends; a 0.05 mm taper produces a visible ash gradient across the flour stream.',
    faq: [
      { q: 'What does the S in FMFQ(S) mean?', a: 'It denotes the pneumatic (servo-assisted) engagement variant. The base FMFQ is manual engagement; the S adds pneumatic roll engagement and disengagement with remote control.' },
      { q: 'Why does the differential ratio change per passage?', a: 'Break rolls need a fast differential to shear bran open. Reduction rolls need a small differential so the endosperm is reduced by attrition rather than being cut, which would generate excessive fine bran and heat.' },
      { q: 'How much air does a mill floor need?', a: 'At 0.06–0.08 m³/h per mill of consumption, a 20-stand floor draws roughly 1.6 m³/h at 0.6 MPa. Add 30% margin for leakage and future stands.' },
    ],
  },
  {
    slug: 'purifier',
    name: 'Purifier',
    altName: '清粉机',
    model: 'FQFD',
    category: 'milling',
    stage: 'Grading',
    tagline: 'The machine that separates a good flour from a great one.',
    intro:
      'A purifier stratifies middlings on a vibrating sieve under an air stream. Pure endosperm, being lighter and more angular, floats and travels; bran-contaminated particles of the same size settle and are rejected. This is how a mill produces genuinely low-ash patent flour instead of merely sifting what the rolls produced. Air volume per metre of sieve, not sieve area alone, sets the separation: too little air and semolina rides with the bran, too much and good semolina reports to the coarse stream. The eccentric drive and the sieve clothing matter as much as the frame, and both are specified per stream.',
    specs: {
      headers: ['Model', 'Coarse fraction (t/h)', 'Fine fraction (t/h)', 'Power', 'Air volume (m³/h)', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['FQFD49×2×3', '1.4–2.8', '0.6–1.4', '0.18 × 2 kW', '40–70', '970 kg', '2700 × 1290 × 1700'],
        ['FQFD59×2×3', '1.8–3.5', '1.2–2.0', '0.25 × 2 kW', '50–85', '1,100 kg', '2700 × 1500 × 1800'],
      ],
    },
    selection: 'A purifier is only worth installing if you have at least 4 break passages — with less, there is not enough middlings to purify and the machine sits idle. Below 40 t/d, most plants skip it; at 40 t/d and above it becomes the difference between 65% and 73% patent extraction.',
    maintenance: 'Air balance is everything. Re-balance the aspiration hoods every 6 months and after any change to the flow sheet. Sieve frames are consumable — replace when the mesh sags.',
    faq: [
      { q: 'Can I add a purifier to an existing plant?', a: 'Only if the flow sheet has enough middling streams to feed it. Retrofits usually require adding a break passage at the same time, which is why the decision is best made at initial design.' },
      { q: 'How much ash does a purifier remove?', a: 'Typically 0.08–0.15 percentage points from the purified stream, and it enables a 5–8 point increase in patent extraction at the same ash specification.' },
    ],
  },
  {
    slug: 'single-bin-plansifter',
    name: 'Single Bin Plansifter',
    altName: '单仓平筛',
    model: 'FSFJ',
    category: 'milling',
    stage: 'Sifting',
    tagline: 'The check sifter that keeps a bad batch out of a bag.',
    intro:
      'A single-bin sifter sits immediately before the packer and inspects every kilogram of flour. It catches screen wire, lumps, foreign bodies and any oversize material from an upstream failure. Cheap insurance, and mandatory under most food-safety schemes.',
    specs: {
      headers: ['Parameter', 'FSFJ×12 (83)', 'FSFJ×12 sealed'],
      rows: [
        ['Main shaft speed', '245 rpm', '245 rpm'],
        ['Gyration diameter', '45–50 mm', '45–50 mm'],
        ['Sifting area', '5 m²', '5 m²'],
        ['Power', '1.1 kW', '1.1 kW'],
        ['Dimensions', '1500 × 1500 × 2000 mm', '2200 × 1450 × 2000 mm'],
      ],
    },
    selection: 'One per packing line. If you run three flour grades simultaneously, you need three check sifters — sharing one defeats the purpose because a failure in one stream contaminates the others.',
    maintenance: 'Inspect the sieve frames weekly under strong light; a single pinhole defeats the entire machine. Replace wooden frames when they warp.',
    faq: [
      { q: 'What is the difference between a check sifter and a plansifter?', a: 'A check sifter inspects finished flour — one product, one pass, safety function. A plansifter grades mill streams — many products, many passes, process function.' },
    ],
  },
  {
    slug: 'double-bin-plansifter',
    name: 'Double Bin Plansifter',
    altName: '双仓高效平筛 / 双仓平筛',
    model: 'FSFJ-D',
    category: 'milling',
    stage: 'Sifting',
    tagline: 'Two independent bins, one frame — the small plant standard.',
    intro:
      'Twin-bin sifters dominate the 15–40 t/d range because they deliver plansifter-grade grading on a frame that fits under a normal ceiling. Each bin runs independently, so you can sift two different streams without cross-contamination.',
    specs: {
      headers: ['Parameter', 'FSFJ double bin'],
      rows: [
        ['Main shaft speed', '245 rpm'],
        ['Gyration diameter', '45–50 mm'],
        ['Sifting area', '5 m² per bin'],
        ['Power', '1.1 kW'],
        ['Dimensions', '2200 × 1450 × 2000 mm'],
      ],
    },
    selection: 'Specify the number of bins and the sieve stack at order — the frame is standard but the internal stack is bespoke to your flow sheet. Changing it afterwards is possible but costs a rebuild.',
    maintenance: 'Check the flexible connections between bins annually; a perished sleeve leaks flour into the wrong stream and is difficult to diagnose.',
    faq: [
      { q: 'How many sifters does a 25 t/d plant need?', a: 'Two twin-bin units, typically one for break and coarse reduction streams and one for the reduction and flour streams.' },
    ],
  },
  {
    slug: 'high-square-plansifter',
    name: 'High Square Plansifter',
    altName: '高方平筛 / 高方六仓筛 / 高方八仓筛',
    model: 'FSFG',
    category: 'milling',
    stage: 'Sifting',
    tagline: 'Four, six or eight isolated bins — the grading heart of a large mill.',
    intro:
      'The high square plansifter is a stack of four, six or eight completely separate compartments on a single gyrating frame. Each compartment handles one stream, so a large flow sheet can be graded in a single machine without any risk of intermixing. Its footprint-to-sifting-area ratio is what makes multi-storey mills economically viable.',
    specs: {
      headers: ['Model', 'Speed', 'Gyration', 'Sifting area', 'Motor', 'Weight', 'Min. install height', 'Dimensions (mm)'],
      rows: [
        ['FSFG4×20', '245 rpm', '65 mm', '22 m²', '3 kW', '2,400 kg', '3,000 mm', '2300 × 1520 × 1900'],
        ['FSFG6×20', '245 rpm', '65 mm', '33 m²', '4 kW', '3,200 kg', '3,000 mm', '2300 × 2300 × 1900'],
        ['FSFG4×24', '245 rpm', '65 mm', '26.3 m²', '3 kW', '2,800 kg', '3,200 mm', '2300 × 1520 × 2200'],
        ['FSFG6×24', '245 rpm', '65 mm', '39.5 m²', '4 kW', '3,600 kg', '3,200 mm', '2400 × 2400 × 2200'],
        ['FSFG8×24', '245 rpm', '65 mm', '52.7 m²', '5.5 kW', '4,700 kg', '3,200 mm', '3100 × 3100 × 2200'],
      ],
    },
    selection: 'Rule of thumb: 1 m² of sifting area per 0.8 t of daily capacity for a standard 4B5M flow sheet. A 100 t/d plant therefore wants roughly 125 m², which is one FSFG8×24 plus one FSFG6×24, or three FSFG6×24.',
    maintenance: 'The hanger rods and their rubber bushes are the critical wear item. Replace bushes every 12–18 months; a worn bush changes the gyration path and silently degrades grading efficiency across every compartment at once.',
    faq: [
      { q: 'How do I size a plansifter?', a: 'Start from total sifting area: daily capacity in tonnes divided by 0.8 gives the square metres required for a standard flow sheet. Then choose the compartment combination that covers that area with the fewest machines.' },
      { q: 'Can I add compartments later?', a: 'On most Haiyun frames yes — the frame and drive are rated for the maximum compartment count. Adding compartments requires new sieve stacks and rebalancing, but not a new machine.' },
    ],
  },
  {
    slug: 'bran-finisher',
    name: 'Bran Finisher',
    altName: '打麸机',
    model: 'FPDW / FBZD / KFS',
    category: 'milling',
    stage: 'By-product recovery',
    tagline: 'Recovers the flour that is stuck to the bran.',
    intro:
      'Bran leaves the mill carrying 8–15% adherent flour. A bran finisher beats the bran against a screen to release it. On a 100 t/d plant the recovered material is worth more than the machine costs within the first year — it is the cheapest capacity you will ever add.',
    specs: {
      headers: ['Model', 'Drum dia. (mm)', 'Drum length (mm)', 'Speed (rpm)', 'Power', 'Capacity (t/h)', 'Weight', 'Dimensions (mm)'],
      rows: [
        ['FPDW30×1', '300', '800', '1300–1600', '2.2 kW', '0.9–1.0', '320 kg', '1270 × 480 × 1330'],
        ['FPDW30×2', '300', '800', '1300–1600', '2 × 2.2 kW', '1.8–2.0', '640 kg', '1270 × 960 × 1330'],
        ['FPDW45×1', '450', '1100', '1000–1100', '5.5 kW', '1.3–1.5', '500 kg', '1700 × 650 × 1620'],
        ['FPDW45×2', '450', '1100', '1000–1100', '2 × 5.5 kW', '2.6–3.0', '1,000 kg', '1700 × 1300 × 1620'],
        ['FBZD4510', '450', '1000', '1028 ± 10', '5.5 kW', '1.5', '520 kg', '1620 × 710 × 1550'],
        ['FBZD6012', '600', '1200', '1028 ± 10', '7.5 kW', '2.8', '730 kg', '1820 × 810 × 1650'],
      ],
    },
    selection: 'Size on bran flow, not mill capacity. Bran is typically 22–28% of wheat intake, so a 60 t/d plant produces 14–17 t/day of bran across two shifts — one FPDW45×2 handles that comfortably.',
    maintenance: 'Beater tips and screen cloth wear together; replace both, never one alone. Worn beaters against a new screen will shred it in weeks.',
    faq: [
      { q: 'How much flour does a bran finisher recover?', a: 'Typically 1.5–3% of mill intake — on 100 t/d that is 1.5–3 tonnes of saleable flour per day, which generally pays for the machine in under a year.' },
    ],
  },
  {
    slug: 'impact-detacher',
    name: 'Impact Detacher',
    altName: '撞击松粉机',
    model: 'FSJZ / FSJQ',
    category: 'milling',
    stage: 'Intermediate treatment',
    tagline: 'Breaks up flakes so the sifter can actually do its job.',
    intro:
      'Smooth-roll reduction produces flat flakes that blind the sifter and lock flour inside. An impact detacher throws the stock against pins at ~2,900 rpm, breaking the flakes apart without grinding the bran any finer. The result is a measurable lift in sifting efficiency and flour yield.',
    specs: {
      headers: ['Parameter', 'FSJZ43 (standard)', '', '', 'FSJQ51 (intensive)', '', '', ''],
      rows: [
        ['Capacity (t/h)', '1.5', '2.5', '4', '1', '1.7', '2.8', '4'],
        ['Rotor speed (rpm)', '2,830', '2,890', '2,900', '2,910', '2,910', '2,910', '2,910'],
        ['Rotor diameter (mm)', '430', '430', '430', '510', '510', '510', '510'],
        ['Cylindrical pins', '80', '80', '80', '192', '192', '192', '192'],
        ['Square pins', '—', '—', '—', '64', '64', '64', '64'],
        ['Motor power', '3 kW', '4 kW', '5.5 kW', '5.5 kW', '7.5 kW', '11 kW', '15 kW'],
        ['Dimensions (mm)', '576 × 650 × 642', '', '', '576 × 650 × 642', '', '', ''],
      ],
    },
    selection: 'The FSJQ intensive model is used where the stock is heavily flaked or where a second function is required — impact disinfestation. Standard FSJZ is sufficient for normal reduction streams.',
    maintenance: 'Pins wear on the leading face; rotate the rotor plate 180° at mid-life, then replace. Check rotor balance after any pin change — imbalance destroys bearings within weeks.',
    faq: [
      { q: 'Where in the flow sheet does an impact detacher go?', a: 'Immediately after the smooth-roll reduction mills, before the sifter. One unit can serve a group of mills via a common collecting conveyor.' },
      { q: 'Can impact detaching kill insects?', a: 'Yes — the centrifugal impact is used as a physical disinfestation step in some markets, though regulatory acceptance varies. It is a useful additional barrier, not a replacement for hygiene control.' },
    ],
  },
  {
    slug: 'automatic-packer',
    name: 'Automatic Quantitative Packer',
    altName: '电脑打包机',
    model: 'LCS',
    category: 'milling',
    stage: 'Packing',
    tagline: '±0.2% weighing accuracy at 150–300 bags per hour.',
    intro:
      'The packer is where a mill either makes or loses money quietly. A 0.2% accuracy figure sounds trivial until you calculate it against 60,000 bags a month — it is the difference between giving away product and being fined for underweight. Bag clamping, tare and dust extraction decide whether that accuracy survives a shift: a leaking spout seal lets air into the bag, the weight drifts and the operator over-fills to compensate. Specify the bag size range at order — moving from 25 kg to 50 kg needs a different weigh hopper, not a setting.',
    specs: {
      headers: ['Model', 'Output (bags/h)', 'Power', 'Accuracy', 'Range', 'Air supply'],
      rows: [
        ['LCS5', '200–300', '3.2 kW', '± 0.2%', '1–10 kg', '0.4–0.6 MPa'],
        ['LCS25', '150–220', '3.2 kW', '± 0.2%', '10–25 kg', '0.4–0.6 MPa'],
        ['LCS50', '150–180', '3.2 kW', '± 0.2%', '25–50 kg', '0.4–0.6 MPa'],
      ],
    },
    selection: 'For retail flour, specify the 5 kg unit with a bag-presenting carousel; for bulk, the 50 kg unit with a sewing head. Both need a stable 0.6 MPa air supply — under-supplied air is the most common cause of accuracy drift.',
    maintenance: 'Calibrate with certified test weights weekly. Replace the load cell every 3–4 years; load cells drift silently before they fail.',
    faq: [
      { q: 'What accuracy can I legally claim?', a: 'Pre-packaged goods regulations in most jurisdictions require the average net content to equal the declared weight, with a tolerated negative deviation. ±0.2% machine accuracy keeps you comfortably inside those limits.' },
    ],
  },
  {
    slug: 'pulse-jet-dust-collector',
    name: 'Low Pressure Pulse-Jet Dust Collector',
    altName: '脉冲除尘器',
    model: 'TBLM',
    category: 'milling',
    stage: 'Environmental',
    tagline: 'Dry collection without stopping the plant.',
    intro:
      'Every flour mill is a dust explosion risk and a dust nuisance simultaneously. The TBLM uses electromagnetic pulse valves to clean filter bags online — the plant keeps running while a compartment is being cleaned, which is what makes 24-hour operation possible. Sizing is an air-to-cloth ratio decision: 1.2–1.5 m/min for flour dust, lower if bags are washed rather than replaced. On a milling line the collector is also the explosion-protection node — venting, a rotary valve and a spark detector belong to the system, not to the accessory list.',
    specs: {
      headers: ['Model', 'Bags', 'Bag length (mm)', 'Filter area (m²)', 'Air volume (m³/h)', 'Scraper power', 'Airlock power'],
      rows: [
        ['TBLM52', '52', '1800', '35.2', '2,112–10,560', '1.1 kW', '0.75 kW'],
        ['TBLM52', '52', '2000', '38.2', '2,292–11,460', '1.1 kW', '0.75 kW'],
        ['TBLM52', '52', '2400', '46.1', '2,766–13,830', '1.1 kW', '0.75 kW'],
        ['TBLM78', '78', '1800', '51.5', '3,090–15,450', '1.1 kW', '0.75 kW'],
        ['TBLM78', '78', '2000', '57.3', '3,438–17,190', '1.1 kW', '0.75 kW'],
        ['TBLM78', '78', '2400', '69.1', '4,146–20,730', '1.1 kW', '0.75 kW'],
        ['TBLM104', '104', '1800', '68.6', '4,116–20,580', '1.5 kW', '1.1 kW'],
        ['TBLM104', '104', '2000', '76.5', '4,590–22,950', '1.5 kW', '1.1 kW'],
        ['TBLM104', '104', '2400', '92.1', '5,526–27,630', '1.5 kW', '1.1 kW'],
      ],
    },
    selection: 'Size on total aspiration air volume with 20% margin. Cylinder construction with tangential inlet reduces bag load; flat-bottom scraper discharge keeps the unit short enough to fit under a normal roof.',
    maintenance: 'Pulse valves fail quietly — test each one monthly by listening for the discharge pulse. A dead valve blinds its row of bags and halves effective filter area.',
    faq: [
      { q: 'Is a dust collector required by law?', a: 'In nearly every jurisdiction, yes — both for occupational exposure limits and for explosion safety. Flour dust is a combustible dust with a Kst value in the explosive range.' },
    ],
  },
];

export const getEquipment = (slug) => equipment.find((e) => e.slug === slug);
export const equipmentByCategory = (cat) => equipment.filter((e) => e.category === cat);
