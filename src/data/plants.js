// Production line data. Source: Haiyun 2026 wheat brochure, enriched with
// engineering commentary, selection guidance and application notes.

export const plantSeries = [
  {
    id: 'small-unit',
    slug: 'small-flour-mill-unit',
    name: '6FSZ Small Flour Mill Unit',
    altName: '6FSZ 系列自动上料磨粉机组',
    capacity: '200–450 kg/h',
    capacityRaw: [200, 450],
    unit: 'kg/h',
    scale: 'Village / farm-level',
    tagline: 'One machine, three jobs: grind, sift, lift.',
    intro:
      'The 6FSZ series packs milling, sifting and pneumatic self-feeding into a single self-supporting frame. It is the entry point into commercial flour production: no building, no bucket elevator, no separate sifter room — a poured slab and three-phase power is enough to start.',
    highlights: [
      'Combines roller mill, sifter and automatic feeding in one frame',
      'Runs on 10.45–16.5 kW — single small generator compatible',
      'Also mills sorghum, maize, rice and other granular material',
      'Delivered pre-assembled; commissioning typically 2–3 days',
    ],
    models: [
      { model: '6FSZ-40A', capacity: '260–320 kg/h', power: '10.45 kW', weight: '1,000 kg', dims: '2000 × 1400 × 3100 mm', note: 'Base single-mill unit, gravity discharge' },
      { model: '6FSZ-40B', capacity: '260–320 kg/h', power: '14.75 kW', weight: '1,060 kg', dims: '2000 × 1400 × 3200 mm', note: 'Adds pneumatic lift and cyclone collection' },
      { model: '6FSZ-50A', capacity: '330–400 kg/h', power: '15.5 kW', weight: '1,280 kg', dims: '2600 × 1400 × 3100 mm', note: 'Longer rolls, higher throughput' },
      { model: '6FSZ-50B', capacity: '330–400 kg/h', power: '16.5 kW', weight: '1,340 kg', dims: '2600 × 1400 × 3400 mm', note: 'Full pneumatic version of the 50 frame' },
      { model: '6FSZ-40C', capacity: '200–250 kg/h', power: '14 kW', weight: '1,100 kg', dims: '2580 × 1350 × 3560 mm', note: 'Compact footprint, taller column for tight sites' },
      { model: '6FSZ-50C', capacity: '300–400 kg/h', power: '16 kW', weight: '1,200 kg', dims: '2680 × 1350 × 3560 mm', note: 'Highest output in the C (compact) family' },
    ],
    flow: ['Wheat intake', 'Single-pass cleaning (optional', 'Roller mill', 'Integrated sifter', 'Flour + bran discharge'],
    applications: ['Village milling service', 'Farm-gate flour sales', 'Institutional kitchens', 'Trial production before scaling', 'Multi-grain custom milling'],
    selection:
      'Choose the 40 frame when mains power is limited to 15 kW or the site is a single-phase-adjacent rural plot. Choose the 50 frame when you have confirmed demand above 3 t/day and a 380 V supply that can carry 20 kW peak. The C variants trade floor area for height — useful in narrow shop-houses where you cannot spread out.',
    faq: [
      { q: 'How much wheat does a 6FSZ unit need per day?', a: 'At 320 kg/h finished flour and a 10-hour shift, a 6FSZ-40 will process roughly 4.5–5 tonnes of wheat per day including cleaning losses. Plan storage for at least 7 days of intake.' },
      { q: 'Can a 6FSZ mill whole wheat flour?', a: 'Yes. With the sifter bypassed or fitted with a coarse screen, the unit produces whole wheat flour at a higher extraction rate, typically 85–92% depending on screen and roll gap.' },
      { q: 'What power supply is required?', a: '380 V three-phase at 50 or 60 Hz. For the 6FSZ-40A you need a 15 kVA supply; for the 50B plan on 25 kVA to cover inrush.' },
    ],
  },
  {
    id: 'double-unit',
    slug: 'double-mill-unit',
    name: '6FTS Double Mill Unit',
    altName: '6FSZ-10 双机组系列（皮芯分离）',
    capacity: '400–450 kg/h',
    capacityRaw: [400, 450],
    unit: 'kg/h',
    scale: 'Small commercial',
    tagline: 'Bran and core separated from the first break.',
    intro:
      'The double mill adds a core-collector to the automatic-feed platform. Wheat is split and the endosperm released early, so the following reduction passes do less work and produce less bran powder. In blind tests the process yields visibly whiter flour at the same extraction.',
    highlights: [
      'Bran/core separation built into the flow sheet',
      'Two mill stands on one frame with shared drive',
      '20.5–22 kW total installed power',
      'Consistent granulation for steamed bread and noodle flour',
    ],
    models: [
      { model: '6FSZ-10A', capacity: '400–450 kg/h', power: '20.5 kW', weight: '2,000 kg', dims: '4000 × 1500 × 3100 mm', note: 'Standard core-collector configuration' },
      { model: '6FSZ-10B', capacity: '400–450 kg/h', power: '22 kW', weight: '2,000 kg', dims: '4000 × 1500 × 3300 mm', note: 'Taller column, larger sifter area' },
    ],
    flow: ['Intake', 'Cleaning (external or integrated)', 'First break (split)', 'Core collector', 'Reduction mill', 'Sifter', 'Flour / bran'],
    applications: ['Steamed bread flour', 'Noodle flour', 'Regional bakery flour', 'Semi-industrial village mills'],
    selection:
      'The double mill is the correct step up when customers start asking about flour colour and gluten quality rather than just price per bag. The extra 6–8 kW buys a cleaner granulation that commands a premium at retail.',
    faq: [
      { q: 'What is bran-core separation?', a: 'Instead of grinding everything together, the first break splits the wheat so the starchy endosperm can be graded out before it is contaminated by bran flakes. The result is lower ash in the patent flour stream.' },
      { q: 'Is a separate cleaning house required?', a: 'For wheat above 1.5% impurity, yes — a small destoner and a vibrating screen upstream will pay for themselves within a season. The mill itself ships without cleaning unless specified.' },
    ],
  },
  {
    id: 'five-unit',
    slug: 'five-mill-unit',
    name: '6FSZ-20 Five Mill Unit',
    altName: '五机组系列',
    capacity: '16–18 t/d',
    capacityRaw: [16, 18],
    unit: 't/d',
    scale: 'Small factory',
    tagline: 'A complete mini-mill: cleaning, 3B2M milling, sifting.',
    intro:
      'The five-mill unit is the smallest configuration that behaves like a real flour factory. Cleaning is included — a gravity destoner, a wheat scourer and a washing destoner — and the mill runs a 3 break / 2 reduction flow sheet with either a conical screen or a twin-bin plansifter.',
    highlights: [
      'Complete cleaning section included',
      '3B2M flow sheet — the industry standard for small plants',
      'Cone screen or twin-bin plansifter, customer choice',
      '48–51 kW installed; 16–18 t/day output',
    ],
    models: [
      { model: '6FSZ-20 C (cone sieve)', capacity: '16–18 t/d', power: '48 kW', weight: '6,000 kg', dims: '10 × 5 × 3.5 m', note: 'Cone sifter — lower temperature, near-zero retention, ideal for custom milling' },
      { model: '6FSZ-20 F (flat sieve)', capacity: '16–18 t/d', power: '51 kW', weight: '8,000 kg', dims: '12 × 5 × 4 m', note: 'Twin-bin plansifter — better grading, more stable flour, ideal for a fixed product line' },
    ],
    flow: ['Wheat intake', 'Gravity destoner', 'Wheat scourer', 'Washing destoner', 'Tempering', '3B2M milling', 'Cone or flat sifting', 'Flour / bran'],
    applications: ['District-level flour mill', 'Contract milling for local bakeries', 'Multigrain custom plant', 'NGO / government food security projects'],
    selection:
      'Pick the cone-sieve version when your wheat changes every week — cone screens retain almost nothing, so switching grain costs you minutes not hours, and the lower sifting temperature protects gluten. Pick the flat-sieve version when you sell one or two fixed flour grades and want the tighter ash curve.',
    faq: [
      { q: 'What does 3B2M mean?', a: 'Three break passages and two reduction passages. Break rolls open the wheat and scrape endosperm off bran; reduction rolls grind the released endosperm into flour. 3B2M is the minimum flow sheet that can produce a clean patent flour.' },
      { q: 'How many people run a five-mill plant?', a: 'Three per shift: one at intake and cleaning, one at the mill floor, one at packing. With pneumatic conveying, two is workable.' },
      { q: 'What building does it need?', a: 'A 10 × 5 × 3.5 m bay with a 200 mm reinforced slab and 3 m clear height at the mill floor. No tower is required for the cone version.' },
    ],
  },
  {
    id: 'stone-mill',
    slug: 'stone-mill-unit',
    name: 'SFM Stone Mill Series',
    altName: '石磨面粉机组',
    capacity: '50–600 kg/h',
    capacityRaw: [50, 600],
    unit: 'kg/h',
    scale: 'Specialty / premium',
    tagline: '28–30 rpm. Cold stone. The flour the premium market pays for.',
    intro:
      'Stone milling is not nostalgia — it is a thermal argument. At 28–30 rpm the stone generates a fraction of the heat of a roller mill, so the starch granule and the gluten network arrive intact. The commercial consequence is a flour that behaves differently in the hand and sells at 1.5–2× the price.',
    highlights: [
      'Low-speed cold grinding preserves vitamins and gluten',
      'SFM-1+2 and SFM-3+4 hybridise roller and stone for higher yield',
      'Automatic feeding, sifting and grinding in one unit (SFM-100)',
      'Ideal for whole wheat, buckwheat and multigrain premium lines',
    ],
    models: [
      { model: 'SFM-100', capacity: '50 kg/h', power: '6 kW', weight: '—', dims: '3 × 2 × 3.2 m + H', note: 'Single stone unit with automatic feed and sifting' },
      { model: 'SFM-1+2', capacity: '200 kg/h', power: '21 kW', weight: '—', dims: '6 × 5 × 4 m + H', note: '1 roller mill + 2 stone mills; roller splits, stone grinds' },
      { model: 'SFM-3+4', capacity: '600 kg/h', power: '80 kW', weight: '—', dims: '24 × 6 × 4.5 m + H', note: '3 roller mills + 4 stone mills; one-pass core extraction' },
    ],
    flow: ['Wheat intake', 'Cleaning', 'Tempering', 'Roller split (SFM-1+2 / 3+4)', 'Core collection', 'Stone grinding', 'Sifting', 'Flour'],
    applications: ['Premium whole wheat flour', 'Buckwheat and multigrain flour', 'Organic / additive-free lines', 'Export to health-food markets'],
    selection:
      'If you are selling to health-food distributors, buy the stone line and market the temperature. If you are selling to a bakery that needs volume, buy a roller plant and add one stone unit for a premium SKU. Trying to run a stone-only line at 20 t/day is a common and expensive mistake — stone capacity scales linearly with stone diameter, not with pressure.',
    faq: [
      { q: 'Why is stone-milled flour more expensive?', a: 'Stone output per kW is roughly one fifth of a roller mill, so capital and energy per tonne are higher. The market pays for it because the flour retains carotenoids and vitamin E at levels roller milling destroys.' },
      { q: 'Does stone milling damage the stone?', a: 'Dress the stones every 300–500 operating hours. Undressed stones smear instead of cut, which raises flour temperature and defeats the entire purpose.' },
      { q: 'Can SFM units run 24 hours?', a: 'Yes, but stone surface temperature must stay under 45 °C. Continuous operation requires a water-cooled stone hub or a forced-air shroud on the stone housing.' },
    ],
  },
  {
    id: 'plant-20-30',
    slug: '20-30tpd-flour-plant',
    name: '6FTDP 20–30 t/d Flour Plant',
    altName: '20–30 吨面粉生产线',
    capacity: '20–30 t/d',
    capacityRaw: [20, 30],
    unit: 't/d',
    scale: 'Medium commercial',
    tagline: 'The workhorse: 3B2M to 4B4M, fully documented flow sheet.',
    intro:
      'This is the plant most commercial mills actually buy. Three models cover 20, 25 and 30 tonnes per day; the flow sheet graduates from 3B2M with a single twin-bin sifter to 4B4M with two. All three are delivered with a cleaning flow diagram and a milling flow diagram engraved into the documentation pack.',
    highlights: [
      '6FTDP-20 / 25 / 30 all share spares and roll housings',
      'Full cleaning section: vibrating screen, destoner, scourers, washer-destoner',
      'Floor-mounted plansifters — no tower required up to 30 t/d',
      '6FGP patented mill bodies: lower energy per tonne',
    ],
    models: [
      { model: '6FTDP-20', capacity: '20 t/d', power: '51 kW', weight: '—', dims: '12 × 5 × 4 m', note: '6F2240/5 mills, 1 twin-bin sifter, 3B2M' },
      { model: '6FTDP-25', capacity: '25 t/d', power: '67 kW', weight: '9,000 kg', dims: '15 × 5 × 4 m', note: '6F2240/6 mills, 2 twin-bin sifters, 3B3M' },
      { model: '6FTDP-30', capacity: '30 t/d', power: '92 kW', weight: '—', dims: '18 × 6 × 6.5 m', note: '1830/10 mills, 2 twin-bin sifters, 4B4M' },
    ],
    flow: ['Intake & pre-cleaning', 'Vibrating screen', 'Gravity destoner', 'Two scourers', 'Washing destoner', 'Tempering 12–24 h', '4B4M milling', 'Two twin-bin plansifters', 'Packing'],
    applications: ['Regional flour brands', 'Bakery supply contracts', 'Noodle and steamed-bread flour', 'Xinjiang-style granular flour (6FGP)'],
    selection:
      'Take the 30 t/d over the 25 t/d if you expect to grow: the marginal cost of the extra 4B passage is small compared with the cost of a second plant later. Take the 25 t/d if your building is fixed and 15 m is your maximum bay length.',
    faq: [
      { q: 'What is the difference between 3B3M and 4B4M?', a: 'One additional break and one additional reduction passage each. 4B4M gives you a cleaner separation of patent, middle and clear flour streams, and typically 1.5–2 points more patent extraction.' },
      { q: 'How long is commissioning?', a: '12–18 days on site for a 20–30 t/d plant, including steel erection, alignment, dry running, load testing and operator training.' },
      { q: 'Can it produce Atta and Maida?', a: 'Yes. The 6FTDP flow sheet with a purifier and a suitable screen stack produces both chakki-style Atta and 76% extraction Maida for South Asian markets.' },
    ],
  },
  {
    id: 'plant-40-60',
    slug: '40-60tpd-flour-plant',
    name: '6FTDP 40–60 t/d Flour Plant',
    altName: '40–60 吨面粉生产线',
    capacity: '40–60 t/d',
    capacityRaw: [40, 60],
    unit: 't/d',
    scale: 'Industrial',
    tagline: 'Purifier, bran finisher and three simultaneous flour grades.',
    intro:
      'At 40 t/d the flow sheet crosses a threshold: a purifier enters the process, which means you are now separating endosperm by quality rather than just by particle size. The plant can hold three flour grades in production at once — special first grade, special second grade and standard — and skims wheat core flour off the top.',
    highlights: [
      'High-square plansifter + purifier + bran brusher',
      'Simultaneous 3-grade production with core-flour extraction',
      '3B4M1S (40 t/d) and 4B5M1S1T (60 t/d) flow sheets',
      'Single-pair or compound (pneumatic) roll variants',
    ],
    models: [
      { model: '6FTDP-40', capacity: '40 t/d', power: '100 kW', weight: '—', dims: '18 × 8 × 8 m', note: '6F2240/8 mills, 1 six-bin high square sifter, 83-type check sifter, 3B4M1S' },
      { model: '6FTDP-60 (single)', capacity: '60 t/d', power: '150 kW', weight: '—', dims: '24 × 8 × 8 m', note: '2240/12 mills, 2 four-bin high square sifters, 4B5M1S1T, double 1B' },
      { model: '6FTDP-60 (compound)', capacity: '60 t/d', power: '150 kW', weight: '—', dims: '24 × 8 × 8 m', note: 'Pneumatic compound rolls, same flow sheet, lower operator load' },
    ],
    flow: ['Intake', 'Two screens', 'Two scourers', 'Two destoners', 'Tempering', '4B5M1S1T milling', 'High square plansifter', 'Purifier', 'Bran finisher', 'Three-grade packing'],
    applications: ['National flour brands', 'Bakery and noodle industrial supply', 'Export milling contracts', 'Multi-grade retail portfolios'],
    selection:
      'The 60 t/d compound-roll version is worth the premium if you plan to run two shifts — pneumatic roll engagement removes the single most common operator error, which is inconsistent manual roll pressure between shifts.',
    faq: [
      { q: 'What does the purifier actually do?', a: 'It stratifies middlings on a vibrating sieve with an air stream, separating pure endosperm chunks from bran-contaminated particles of the same size. Without a purifier you cannot make a genuinely low-ash patent flour.' },
      { q: 'Why two 1B passages at 60 t/d?', a: 'Doubling the first break lets you run gentler roll settings on each pass, which produces fewer fine bran particles. Fine bran is the main source of ash in the patent stream.' },
      { q: 'Is a tower necessary?', a: 'At 60 t/d, yes — a 4–5 storey structure or a steel frame with the sifters on the top floor. Gravity flow is still cheaper to operate than pneumatic lifting at this scale.' },
    ],
  },
  {
    id: 'plant-100-500',
    slug: '100-500tpd-flour-plant',
    name: '60–500 t/d Complete Flour Plant',
    altName: '60–500 吨成套面粉工程',
    capacity: '60–500 t/d',
    capacityRaw: [60, 500],
    unit: 't/d',
    scale: 'Turnkey industrial',
    tagline: 'Storey-typed turnkey plants with guaranteed tonnage and power draw.',
    intro:
      'Above 100 t/d the plant is a building, not a machine. Haiyun designs the storey-typed structure, the cleaning flow, the milling flow and the pneumatic system as one package, then commissions it to a guaranteed tonnage. Every model in this range ships with a measured power consumption figure per tonne of flour — the number that decides whether the plant is profitable.',
    highlights: [
      '12 standard capacities from 60 to 500 t/d',
      'Dry cleaning: 3 screening, 2 threshing, 1 brushing, 2 destoning, 2 dampening, 2 magnetic, 1 air',
      'Light grinding, fine separation, purifier refinement, same-quality merging',
      'Turnkey: design, manufacture, install, train, commission',
    ],
    models: [
      { model: '60 t/d', capacity: '60 t/d', power: '190 kW', weight: '70–74 kWh/t', dims: '30 × 7 × 12.5 m' },
      { model: '80 t/d', capacity: '80 t/d', power: '240 kW', weight: '70–74 kWh/t', dims: '35 × 7 × 12.5 m' },
      { model: '100 t/d', capacity: '100 t/d', power: '308 kW', weight: '70–74 kWh/t', dims: '35 × 7.5 × 18.5 m' },
      { model: '120 t/d', capacity: '120 t/d', power: '420 kW', weight: '70–74 kWh/t', dims: '39 × 7.5 × 18.5 m' },
      { model: '140 t/d', capacity: '140 t/d', power: '520 kW', weight: '68–72 kWh/t', dims: '44 × 7.5 × 18.5 m' },
      { model: '150 t/d', capacity: '150 t/d', power: '540 kW', weight: '68–72 kWh/t', dims: '44 × 7.5 × 22.5 m' },
      { model: '160 t/d', capacity: '160 t/d', power: '580 kW', weight: '68–72 kWh/t', dims: '50 × 7.5 × 18.5 m' },
      { model: '200 t/d', capacity: '200 t/d', power: '690 kW', weight: '65–71 kWh/t', dims: '50 × 7.5 × 22.5 m' },
      { model: '220 t/d', capacity: '220 t/d', power: '740 kW', weight: '65–71 kWh/t', dims: '50 × 7.5 × 22.5 m' },
      { model: '300 t/d', capacity: '300 t/d', power: '920 kW', weight: '65–71 kWh/t', dims: '60 × 11 × 27.5 m' },
      { model: '350 t/d', capacity: '350 t/d', power: '1,170 kW', weight: '65–70 kWh/t', dims: '60 × 11 × 27.5 m' },
      { model: '500 t/d', capacity: '500 t/d', power: '1,650 kW', weight: '65–70 kWh/t', dims: '55 × 17 × 27.5 m' },
    ],
    flow: ['Intake & weighing', 'Pre-cleaning', '3-sift / 2-scour / 1-brush cleaning', '2 destoners', '2 dampening + tempering 16–24 h', '2 magnetic separators', 'Air separation', 'Multi-pass milling', 'Purifiers', 'High square sifters', 'Packing & palletising'],
    applications: ['National milling groups', 'Government food security programmes', 'Export-oriented flour production', 'Port-adjacent milling for import wheat'],
    selection:
      'Note the power curve: consumption per tonne falls from 70–74 kWh at 60 t/d to 65–70 kWh at 500 t/d. On 300 t/d and 330 operating days, that gap is roughly 500,000 kWh a year — often the entire margin difference between two otherwise similar plants.',
    faq: [
      { q: 'How long does a 300 t/d plant take to build?', a: 'Typically 8–11 months from contract to first flour: 8–10 weeks for design and approval, 14–18 weeks for manufacture, 6–10 weeks for civil works in parallel, then 8–12 weeks erection and 3–4 weeks commissioning.' },
      { q: 'Can the plant handle imported wheat?', a: 'Yes. Imported wheat usually means blending 2–4 origins, so the design includes electronic proportioning scales and 4–6 tempering bins with independent water addition.' },
      { q: 'What guarantee is provided?', a: 'Contracted tonnage at contracted extraction, verified over a 72-hour continuous performance test, plus a 12-month warranty on mechanical parts and 24 months on the roll packs.' },
    ],
  },
];

export const getPlant = (slug) => plantSeries.find((p) => p.slug === slug);
