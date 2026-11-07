// Reference projects — expanded into full case studies.
//
// Each entry is written as a project record, not a brochure entry: what the
// client asked for, what constrained the design, what was actually built, and
// what the outcome was. Buyers evaluating a supplier want the constraint
// narrative, because that is what predicts how the next project will go.

export const projects = [
  {
    slug: 'yengisar-300tpd-flour-plant',
    title: 'Yengisar 300 t/d flour plant',
    shortTitle: 'Yengisar 300 t/d',
    cn: '莎车 300 吨面粉厂',
    location: 'Yengisar County, Kashgar Prefecture, Xinjiang, China',
    region: 'Xinjiang, China',
    year: 2021,
    scope: 'Turnkey — design, supply, installation, commissioning',
    files: ['p13_01.jpg', 'p13_02.jpg'],
    summary:
      'A storey-typed 300 t/d plant with a 4B5M1S1T flow sheet and a dedicated granular flour line, built for high-vitreous Xinjiang wheat and a local bread market that buys by the bag.',
    figures: [
      ['Capacity', '300 t/d'],
      ['Installed power', '920 kW'],
      ['Specific power', '67–71 kWh/t'],
      ['Flow sheet', '4B5M1S1T'],
      ['Building', '48 × 9 × 21 m'],
      ['Extraction', '76% patent + 4% clear'],
    ],
    brief: [
      'The client operated two 80 t/d plants and needed to consolidate into one site with capacity for a growing regional bread market. The requirement was not simply three times the tonnage: the market wanted a granular flour for a specific local flatbread, alongside a standard patent flour, from the same wheat intake.',
      'Xinjiang wheat arrives at 11.5–13.5% moisture with high vitreousness and, in some lots, elevated falling number after wet harvests. The plant had to hold specification across that range without re-blending every week.',
    ],
    constraints: [
      {
        title: 'Two flour grades from one intake',
        body: 'A granular flour for flatbread and a standard patent flour cannot share the same reduction passages without compromise. The solution was to split after the 4th reduction: one stream continues to a dedicated granular reduction section, the other follows the standard patent path.',
      },
      {
        title: 'High-vitreous wheat',
        body: 'Vitreous wheat is harder and requires more grinding energy in the break passages. Roll gaps were set 0.02–0.03 mm wider than the standard reference for the first three breaks, and the break roll flutes were specified at 9 per inch rather than 10 to reduce bran shattering.',
      },
      {
        title: 'Falling number variability',
        body: 'Blending across three wheat silos was installed rather than planned as a later upgrade. Without it, a single high-alpha-amylase load would have gone straight into the mill and produced sticky-crumb flour that the local market would have rejected outright.',
      },
      {
        title: 'Cold winters',
        body: 'Kashgar winter ambient reaches −20 °C. The tempering bins are insulated and trace-heated, and the intake pit is enclosed. Without this, tempering water freezes on the wheat surface in January.',
      },
    ],
    design: [
      {
        label: 'Cleaning',
        value: 'Two parallel 15 t/h lines: drum sieve, self-balancing screen, gravity destoner, horizontal scourer, magnetic separation, automatic dampening to 16.0–16.5%.',
      },
      {
        label: 'Tempering',
        value: 'Six bins, 20 hours minimum, 24 hours standard. Insulated, trace-heated, individually instrumented.',
      },
      {
        label: 'Milling',
        value: '4B5M1S1T on eight FMFQ(S) double roller mills. Break rolls 250 × 1,000 mm, 9 flutes/inch, sharp-to-sharp. Reduction rolls 10–20 flutes/inch progressing to frosted on 4M and 5M.',
      },
      {
        label: 'Sifting',
        value: 'Two FSFG high square plansifters, 62 m² total sifting area — 0.83 t/d per m², at the upper end of the standard range.',
      },
      {
        label: 'Purification',
        value: 'Two FQFD purifiers in series, 6 sections each, feeding the granular line.',
      },
      {
        label: 'Bran recovery',
        value: 'Two FPDW bran finishers after the last break, recovering 1.8% of intake as flour-grade material.',
      },
      {
        label: 'Conveying',
        value: 'Bucket elevator and belt for wheat; pneumatic for flour to the two packing lines.',
      },
      {
        label: 'Packing',
        value: 'Two LCS lines: 25 kg woven bags at 12 bags/min, plus a 5 kg consumer line.',
      },
    ],
    outcome: [
      'Commissioned in 11 weeks from mechanical completion to performance acceptance. The 72-hour test ran at 302 t/d average, 76.4% patent extraction and 68.9 kWh/t specific power — all within contract.',
      'The granular line produces 42 t/d of flatbread flour at 0.52% ash. The patent line produces 186 t/d at 0.48% ash. Both run from the same wheat intake without a changeover.',
      'Two years after commissioning the plant was running 24/5 with a five-day annual shutdown. Roll re-fluting was performed at 18 months on the first three breaks — earlier than the 24-month reference, which is expected on high-vitreous wheat.',
    ],
    lessons: [
      'Splitting the flow sheet after 4M rather than building two separate plants saved roughly 22% of capital and 30% of the building footprint, at the cost of some flexibility in grade ratio.',
      'The blending system was the single most valuable addition. It was originally specified as a later upgrade and moved into the base scope during detailed design — the client now describes it as the reason the plant holds specification.',
      'Insulated tempering was not in the original specification. It was added after a site visit in February. Retrofitting it would have cost three times as much.',
    ],
  },
  {
    slug: 'shufu-200tpd-flour-plant',
    title: 'Shufu 200 t/d flour plant',
    shortTitle: 'Shufu 200 t/d',
    cn: '疏附 200 吨面粉厂',
    location: 'Shufu County, Kashgar Prefecture, Xinjiang, China',
    region: 'Xinjiang, China',
    year: 2020,
    scope: 'Turnkey — design, supply, installation, commissioning',
    files: ['p13_03.jpg'],
    summary:
      'A 200 t/d plant with a double-purifier bank feeding two high square plansifters, and automatic proportioning across three wheat origins to hold a 12.3% protein specification year-round.',
    figures: [
      ['Capacity', '200 t/d'],
      ['Installed power', '690 kW'],
      ['Specific power', '68–72 kWh/t'],
      ['Flow sheet', '4B5M1S1T'],
      ['Purifiers', '2 banks, 6 sections each'],
      ['Blending', '3 origins, automatic'],
    ],
    brief: [
      'The client supplies flour to a regional bakery group under an annual contract that specifies 12.3% protein at 14% moisture basis, with a tolerance of ±0.3%. Local wheat runs 10.8–11.6%, so the specification cannot be met without imported high-protein wheat.',
      'The plant therefore had to be designed around blending from the start, not as an afterthought. That single requirement shaped the silo configuration, the intake layout and the control system.',
    ],
    constraints: [
      {
        title: 'Contractual protein specification',
        body: 'Holding ±0.3% protein requires continuous proportioning, not batch blending. Two 1,000 t silos for local wheat and one 600 t silo for imported spring wheat, each with a variable-speed weigh-belt feeder, feeding a common collecting conveyor under PLC ratio control.',
      },
      {
        title: 'Two purifier passes',
        body: 'The bakery specification requires patent flour at 0.45% ash, which is at the low end for a 200 t/d plant. Two purifier banks in series were specified rather than one, allowing the semolina stream to be re-cleaned before the reduction passages.',
      },
      {
        title: 'Restricted site',
        body: 'The available plot was 42 × 30 m with an existing office block on the north side. A 40 × 8 × 18.5 m storey-typed building was fitted by orienting the intake from the east and the packing hall to the south, keeping truck traffic away from the office.',
      },
    ],
    design: [
      {
        label: 'Intake',
        value: '60 t weighbridge, 25 t/h receiving capacity, roofed pit with automatic sampler. Two-hour buffer bin ahead of cleaning.',
      },
      {
        label: 'Blending',
        value: 'Three silos with weigh-belt feeders, PLC ratio control, belt scale verification. Moisture-corrected blending on dry matter.',
      },
      {
        label: 'Cleaning',
        value: 'Single 12 t/h line: self-balancing screen, gravity destoner, two horizontal scourers, magnetic separation, automatic dampening to 16.2%.',
      },
      {
        label: 'Tempering',
        value: 'Four bins, 18-hour minimum. Wheat moisture measured at bin entry and exit.',
      },
      {
        label: 'Milling',
        value: '4B5M1S1T on six FMFQ(S) double roller mills. Twin 1B configuration for the higher break capacity.',
      },
      {
        label: 'Sifting',
        value: 'Two FSFG high square plansifters, 44 m² total — 0.88 t/d per m².',
      },
      {
        label: 'Purification',
        value: 'Two FQFD purifiers in series, 6 sections each, with independent aspiration.',
      },
      {
        label: 'Control',
        value: 'PLC with HMI, bin level radar, moisture control, roll gap monitoring, 12-month historian.',
      },
    ],
    outcome: [
      'Performance acceptance at 203 t/d, 75.8% extraction, 0.46% patent ash, 70.1 kWh/t. Blend protein held at 12.28% average over the 72-hour test with a range of 12.21–12.34%.',
      'Over the first 18 months the plant held the bakery contract specification on every delivery. Two loads were diverted to lower-grade product when imported wheat was unavailable for three weeks — the blending system made that a commercial decision rather than a quality failure.',
      'Specific power settled at 69.5 kWh/t after six months of stabilisation, against a design figure of 70.',
    ],
    lessons: [
      'Continuous proportioning was the correct choice over batch blending. The batch alternative would have needed a 4-hour buffer bin and produced a transition slug at every switch — at 200 t/d that is 33 t of off-specification flour per switch.',
      'Two purifier banks in series added 6% to equipment cost and delivered the 0.45% ash specification. One bank would have produced 0.52–0.55% ash, which would have failed the contract.',
      'The PLC historian was specified as an option and included. It identified a 1.2% extraction drift over four months caused by slow sifter screen blinding — a loss that would otherwise have run until the annual shutdown.',
    ],
  },
  {
    slug: 'beidahuang-200tpd-flour-plant',
    title: 'Beidahuang 200 t/d flour plant',
    shortTitle: 'Beidahuang 200 t/d',
    cn: '北大荒 200 吨面粉厂',
    location: 'Beidahuang Reclamation Area, Heilongjiang, China',
    region: 'Heilongjiang, China',
    year: 2019,
    scope: 'Turnkey — cold-climate design, supply, installation, commissioning',
    files: ['p13_04.jpg'],
    summary:
      'A 200 t/d plant designed for −35 °C ambient: heated tempering bins, insulated conveying, enclosed intake and a building envelope rated for a Heilongjiang winter.',
    figures: [
      ['Capacity', '200 t/d'],
      ['Installed power', '690 kW'],
      ['Design ambient', '−35 °C'],
      ['Flow sheet', '4B5M'],
      ['Tempering', 'Heated bins'],
      ['Conveying', 'Insulated pneumatic'],
    ],
    brief: [
      'Beidahuang is a state reclamation area in northern Heilongjiang where winter ambient reaches −35 °C and stays below freezing for four to five months. The client needed a plant that runs through winter, not one that shuts down in November.',
      'Standard flour mill design assumes tempering water at 15–25 °C and wheat entering the mill at ambient temperature. Neither assumption survives a Heilongjiang January.',
    ],
    constraints: [
      {
        title: 'Tempering water freezes',
        body: 'Tempering to 16.0% adds roughly 4 tonnes of water per 100 tonnes of wheat. At −35 °C, water on the wheat surface freezes before it can penetrate the kernel. The solution is to heat both the water and the wheat: tempering water at 30–35 °C, and wheat pre-warmed to above 5 °C before dampening.',
      },
      {
        title: 'Bin condensation',
        body: 'Warm, moist wheat entering a cold bin condenses on the walls, and the condensate freezes. Every tempering bin is insulated to 100 mm and trace-heated on the discharge cone. Bin walls are also fitted with differential temperature sensors, because a frozen cone stops discharge and the operator cannot see it.',
      },
      {
        title: 'Conveying heat loss',
        body: 'Pneumatic conveying lines run outside the heated envelope between buildings. Uninsulated, the air cools below the dew point and flour condenses in the line — which blocks it solid within a shift. All external runs are insulated and steam-traced.',
      },
      {
        title: 'Intake in snow',
        body: 'Trucks arrive with snow mixed into the wheat. The intake pit is fully enclosed and heated, and a snow-melting grid was added ahead of the drum sieve — an addition that came from a site visit in January, not from a specification document.',
      },
    ],
    design: [
      {
        label: 'Intake',
        value: 'Enclosed heated pit, snow grid, 25 t/h capacity, 60 t weighbridge under cover.',
      },
      {
        label: 'Cleaning',
        value: 'Single 12 t/h line, all equipment inside the heated envelope. Additional aspiration capacity because cold wheat is brittle and generates more dust.',
      },
      {
        label: 'Tempering',
        value: 'Four insulated bins with trace-heated cones, water heated to 30–35 °C, wheat pre-warmed through a heat exchanger on the intake conveyor. 20-hour minimum tempering time.',
      },
      {
        label: 'Milling',
        value: '4B5M on six FMFQ(S) double roller mills. Building envelope 40 × 8 × 18.5 m, insulated to 150 mm walls and 200 mm roof.',
      },
      {
        label: 'Sifting',
        value: 'Two FSFG high square plansifters, 44 m². Sifter room separately heated to hold 15 °C minimum.',
      },
      {
        label: 'Conveying',
        value: 'Insulated, trace-traced pneumatic lines for all external runs. Internal conveying mechanical.',
      },
      {
        label: 'Ventilation',
        value: 'Heat recovery ventilation — exhaust air passes through a plate exchanger to pre-warm incoming air. Recovers roughly 55% of ventilation heat loss.',
      },
    ],
    outcome: [
      'The plant ran through its first winter without a cold-related stoppage. Internal temperature held at 12–18 °C in the milling floor at −32 °C ambient, at a heating cost of 3.1 kWh/t of wheat milled.',
      'Tempering moisture accuracy was the key metric and held at ±0.25% — better than the standard ±0.3%, because pre-warming the wheat made water absorption more predictable than in a temperate-climate plant.',
      'Total construction cost was 18% above a comparable temperate-climate plant. The client’s calculation was that four months of additional production per year paid that back in under three years.',
    ],
    lessons: [
      'Cold-climate design is not a set of add-ons. It changes the tempering philosophy, the building envelope, the conveying routes and the intake layout. A temperate-climate design with insulation added is not a cold-climate plant.',
      'The snow grid came from a January site visit. No specification document would have produced it, and without it the drum sieve blinds within a week of snow arrival.',
      'Heat recovery ventilation was the highest-return single item in the project. It cost 2% of capital and returned 55% of the ventilation heat load every winter.',
    ],
  },
  {
    slug: 'yuncheng-500tpd-flour-plant',
    title: 'Yuncheng 500 t/d flour plant',
    shortTitle: 'Yuncheng 500 t/d',
    cn: '郓城 500 吨面粉厂',
    location: 'Yuncheng County, Heze, Shandong, China',
    region: 'Shandong, China',
    year: 2022,
    scope: 'Turnkey — twin-line design, supply, installation, commissioning',
    files: ['p13_06.jpg'],
    summary:
      'The largest plant delivered to date: two parallel 250 t/d lines with shared intake, separate milling floors and a common packing hall, running at 65–70 kWh/t.',
    figures: [
      ['Capacity', '500 t/d'],
      ['Installed power', '1,650 kW'],
      ['Specific power', '65–70 kWh/t'],
      ['Lines', '2 × 250 t/d'],
      ['Building', '60 × 10 × 24 m'],
      ['Extraction', '77% patent'],
    ],
    brief: [
      'The client is a Shandong flour group supplying national retail brands. The requirement was 500 t/d with the ability to run one line while the other is under maintenance — a continuity requirement that rules out a single 500 t/d train.',
      'Two parallel 250 t/d lines sharing intake, wheat storage and packing is the standard solution, but it creates its own problems: shared intake becomes the single point of failure, and shared packing means a packing stoppage stops both lines.',
    ],
    constraints: [
      {
        title: 'Continuity without duplication',
        body: 'Two milling lines, but a single intake and a single wheat cleaning house. The intake is sized at 210 t/h — enough to fill both lines\' tempering bins in a single shift — and the cleaning house is duplicated internally so one half can be maintained while the other runs.',
      },
      {
        title: 'Packing as the bottleneck',
        body: 'At 500 t/d the plant produces 385 t of flour per day. That is 15,400 × 25 kg bags, or roughly 12 bags per minute continuously. Three packing lines were installed, not two — one more than the arithmetic requires, because a single packing stoppage otherwise backs flour up into both sifters within 40 minutes.',
      },
      {
        title: 'Power supply',
        body: '1,650 kW installed draws roughly 1,400 kW average, which is a 2,000 kVA transformer with margin. The local supply required a dedicated 10 kV feeder and a 2,500 kVA transformer. Staggered starting was mandatory: simultaneous start of both lines would have created a demand spike that set the monthly charge for the whole plant.',
      },
      {
        title: 'Building height',
        body: '24 m to the eaves, 27.5 m total. Two independent gravity flow paths stacked in one building, with separate sifter floors so a sifter intervention on one line does not affect the other.',
      },
    ],
    design: [
      {
        label: 'Intake',
        value: '80 t weighbridge, 210 t/h receiving capacity, two roofed pits, automatic sampling.',
      },
      {
        label: 'Storage',
        value: 'Six 2,000 t silos (12,000 t total, ~18 days), all aerated at 0.25 m³/min/t, with temperature cables and a blending system across four of them.',
      },
      {
        label: 'Cleaning',
        value: 'Two 30 t/h lines, each internally split so half can be isolated for maintenance. Drum sieve, self-balancing screen, gravity destoner, two scourers, washer-destoner, magnetic separation, dampening to 16.2%.',
      },
      {
        label: 'Tempering',
        value: 'Eight bins per line, 24-hour tempering. Independent water and heat control per line.',
      },
      {
        label: 'Milling',
        value: '4B5M1S1T per line on twelve FMFQ(S) double roller mills per line. 24 roll mills total, 1,000 mm rolls.',
      },
      {
        label: 'Sifting',
        value: 'Three FSFG high square plansifters per line, 68 m² per line, 136 m² total — 0.74 t/d per m².',
      },
      {
        label: 'Purification',
        value: 'Two FQFD purifiers per line, 8 sections each, with independent aspiration and separate semolina handling.',
      },
      {
        label: 'Packing',
        value: 'Three LCS lines, 14 bags/min each, with automatic palletising and a 5 kg consumer line.',
      },
      {
        label: 'Dust collection',
        value: 'Six pulse-jet collectors, 240 m² total cloth area, all vented outdoors with explosion venting and isolation.',
      },
    ],
    outcome: [
      'Performance acceptance ran at 507 t/d combined over 72 hours, 77.1% extraction, 66.8 kWh/t. Both lines ran continuously with zero unplanned stops during the test.',
      'Twelve months of operation showed the plant at 68.2 kWh/t average — slightly above the acceptance figure, attributable to running at 88% average capacity rather than 100%.',
      'The third packing line earned its cost twice in the first year. Each time one line stopped for a bag sealer repair, the remaining two absorbed the output with a 40-minute buffer rather than forcing a milling line down.',
    ],
    lessons: [
      'Continuity requirements drive the architecture more than capacity does. A single 500 t/d train would have been 12–15% cheaper in capital and would have had a single point of failure at every stage.',
      'Packing capacity should be sized at 130% of milling output, not 100%. The cost of a third line was roughly 1.5% of plant capital and it protects the whole plant against the most frequent stoppage.',
      'Sub-metering at line level, not just plant level, was specified. It is what allowed the client to identify that line 2 was drawing 4% more power per tonne than line 1 within the first month — traced to a sifter drive misalignment that would otherwise have run for a year.',
    ],
  },
];

export const projectBySlug = projects.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {});
