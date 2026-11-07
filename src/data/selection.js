// Selection matrices — "when to choose A instead of B".
//
// Parameter tables tell a buyer what a machine can do. They do not tell them
// which machine to buy. These groups put directly competing options side by
// side and give the decision rule, which is the question every enquiry
// actually starts with.
//
// Each group: { id, title, intro, options:[{slug,name,model,choose,mind}], rule }

export const selectionGroups = [
  {
    id: 'pre-cleaning-screens',
    title: 'Pre-cleaning screens: drum vs rotary vibrating',
    intro:
      'Both remove coarse impurities before the main cleaning house. The choice is about capacity, footprint and how dirty the wheat arrives.',
    options: [
      {
        slug: 'drum-sieve-pre-cleaner',
        name: 'Drum Sieve Pre-Cleaner',
        model: 'SCQY',
        choose:
          'High-throughput intake where wheat arrives with straw, sticks and large foreign matter. Best when you need to take 30–80 t/h out of a truck pit without a tall building.',
        mind:
          'Poor at fine separation — it is a scalper, not a grader. Needs a screen change for different grain sizes and cannot handle damp wheat.',
      },
      {
        slug: 'rotary-vibrating-screen',
        name: 'Rotary Vibrating Screen',
        model: 'HZXZ',
        choose:
          'Smaller plants (under 20 t/h) where a single compact machine must do coarse and medium separation, and where the building height is limited.',
        mind:
          'Lower capacity per unit width than a drum sieve. The rotary motion is harder on the screen cloth, so expect more frequent replacement.',
      },
    ],
    rule:
      'Above 25 t/h intake, use a drum sieve. Below that, a rotary vibrating screen is cheaper for the same duty and takes less headroom.',
  },
  {
    id: 'primary-screens',
    title: 'Primary screens: self-balancing vs plane rotary',
    intro:
      'Once coarse impurities are out, the wheat needs efficient size grading. Both machines do it; they differ in how the motion is generated and what that costs.',
    options: [
      {
        slug: 'self-balancing-vibrating-screen',
        name: 'Self-Balancing Vibrating Screen',
        model: 'TQLZ',
        choose:
          'The default choice for any plant above 10 t/d. The counterweight system cancels the reaction force, so it can be mounted high in a frame without transmitting vibration into the structure.',
        mind:
          'More bearings and a more complex drive than a plane rotary sifter, so maintenance skill matters. Rubber mounts need replacing on a 2–3 year cycle.',
      },
      {
        slug: 'plane-rotary-sifter',
        name: 'Plane Rotary Sifter',
        model: 'TQLM',
        choose:
          'Smaller mills and pre-cleaning duties where gentle action matters, or where the wheat is fragile and you want to minimise breakage.',
        mind:
          'Lower capacity per unit area. The eccentric drive is simple but imposes a reaction force on the structure, so it needs a heavier support frame.',
      },
    ],
    rule:
      'Self-balancing for capacity and structural freedom; plane rotary for gentleness and simplicity at small scale.',
  },
  {
    id: 'destoning',
    title: 'Destoning: dry gravity vs wet washer',
    intro:
      'Stone removal is mandatory. Whether you also wash is an economic decision driven by wheat dirt load and the flour market you serve.',
    options: [
      {
        slug: 'gravity-destoner',
        name: 'Gravity Classifying Destoner',
        model: 'TQSF',
        choose:
          'Every dry cleaning line. Air classification plus a vibrating deck separates stones by density with no water, no effluent and no drying cost.',
        mind:
          'Cannot remove surface-borne dirt, bacteria or embedded sand. If your wheat is heavily soil-contaminated, dry destoning leaves the dirt on the grain.',
      },
      {
        slug: 'wheat-washer-destoner-dryer',
        name: 'Wheat Washer, Destoner & Dryer',
        model: 'XMS / FZSQ',
        choose:
          'Wheat with high soil contamination, or when the flour must meet a low bacterial count or a premium ash specification. Washing removes surface dirt that no dry process reaches.',
        mind:
          'Adds 3–6% moisture that must be dried back, costing 8–15 kWh/t and requiring a centrifuge plus dryer. Produces effluent that needs treatment. Capital cost is 4–6× dry destoning.',
      },
    ],
    rule:
      'Dry destoning is correct for clean wheat and standard flour. Wet washing earns its cost only where dirt load is high or the market pays a premium for low bacterial count.',
  },
  {
    id: 'air-separation',
    title: 'Air separation: cycling vs aspiration',
    intro:
      'Both use air to separate light impurities. The difference is whether the air is recirculated or drawn through once.',
    options: [
      {
        slug: 'cycling-air-separator',
        name: 'Cycling Air Separator',
        model: 'TFXH',
        choose:
          'Where the plant is closed and dust emission must be minimal, or where the building is heated and you do not want to exhaust conditioned air.',
        mind:
          'Recirculated air picks up moisture and dust, so the separation efficiency drifts as the shift progresses. Needs a bleed-off and a filter.',
      },
      {
        slug: 'aspiration-separator',
        name: 'Aspiration Separator',
        model: 'TXFY / TXFL',
        choose:
          'Final cleaning before tempering, and anywhere you need the lightest possible aspiration duty with simple maintenance.',
        mind:
          'Once-through air must be filtered before discharge — the dust collector is part of the system cost, not an optional extra.',
      },
    ],
    rule:
      'Cycling air in cold or dust-sensitive plants; once-through aspiration where the dust collector already exists.',
  },
  {
    id: 'surface-cleaning',
    title: 'Surface cleaning: scourer vs brush combination',
    intro:
      'Both scrub the bran layer to remove dirt and loosen the outer pericarp. They differ in aggression and in what they do to the kernel.',
    options: [
      {
        slug: 'horizontal-wheat-scourer',
        name: 'Horizontal Wheat Scourer',
        model: 'FDMW',
        choose:
          'Hard wheat with firmly attached dirt, and any wheat where you want aggressive surface action. Standard in most medium and large cleaning houses.',
        mind:
          'Aggressive enough to break kernels if the clearance is set too tight. Generates heat and dust, so it needs aspiration.',
      },
      {
        slug: 'wheat-brush-scourer-combination',
        name: 'Wheat Roller-Brush Combination Machine',
        model: 'TNSW',
        choose:
          'Soft wheat, or where you want scouring and brushing in one machine to save a floor and a transfer point.',
        mind:
          'Less aggressive than a dedicated scourer. Brushes wear and need periodic replacement — a wear item that is easy to forget in the budget.',
      },
    ],
    rule:
      'Hard wheat: scourer. Soft wheat or a tight building: brush-scourer combination.',
  },
  {
    id: 'roller-mills',
    title: 'Roller mills: single vs double',
    intro:
      'The roll mill is 55–65% of plant power and the machine that sets your extraction. The single/double choice drives the whole building layout.',
    options: [
      {
        slug: '6f-single-roller-mill',
        name: '6F Single Roller Mill',
        model: '6F',
        choose:
          'Plants under 20 t/d, village mills, and anywhere the flow sheet has one or two passages. Simple, cheap, easy to maintain without specialist skill.',
        mind:
          'One pair of rolls per machine means one passage per machine — a 4B5M flow sheet would need nine separate mills and nine feed systems.',
      },
      {
        slug: 'fmfq-double-roller-mill',
        name: 'FMFQ(S) Double Roller Mill',
        model: 'FMFQ(S)',
        choose:
          'Every plant above 20 t/d. Two independent roll pairs in one frame with separate feeds, so one machine serves two passages — which is what makes a compact multi-passage flow sheet possible.',
        mind:
          'Higher capital per unit and it needs proper foundation and alignment. Also grinds maize, sorghum, chilli and feed materials, so it is the flexible choice for multi-product plants.',
      },
    ],
    rule:
      'Under 20 t/d and two passages: single. Above that: double, without exception — the building savings alone justify it.',
  },
  {
    id: 'plansifters',
    title: 'Plansifters: single bin vs double bin vs high square',
    intro:
      'Sifting is the second-largest power consumer and the constraint most flow sheets hit first. Bin configuration determines capacity per unit floor area.',
    options: [
      {
        slug: 'single-bin-plansifter',
        name: 'Single Bin Plansifter',
        model: 'FSFJ',
        choose:
          'Small plants (under 40 t/d) with few passages, or as a dedicated machine for one product stream such as semolina or bran.',
        mind:
          'Lowest sifting area per square metre of floor. In a multi-passage flow sheet you would need several, each with its own drive and hangers.',
      },
      {
        slug: 'double-bin-plansifter',
        name: 'Double Bin Plansifter',
        model: 'FSFJ-D',
        choose:
          'Plants of 40–100 t/d where floor area is limited and you need two independent sifting streams in one frame.',
        mind:
          'Two bins share one drive, so a drive failure stops both streams. Access to the inner bin is tighter for screen changes.',
      },
      {
        slug: 'high-square-plansifter',
        name: 'High Square Plansifter',
        model: 'FSFG',
        choose:
          'Plants above 60 t/d, and the standard choice for any 4B5M1S1T flow sheet. Maximum sifting area per unit footprint, with each section independently fed.',
        mind:
          'Tall — needs 12.5 m or more of building height in a storey-typed plant. Section changes require working at height with proper access platforms.',
      },
    ],
    rule:
      'Sizing rule of thumb: 1 m² of sifting area per 0.8 t/d of capacity for a 4B5M flow sheet. Choose the configuration that delivers that area in the footprint you have.',
  },
  {
    id: 'byproduct-treatment',
    title: 'Bran recovery vs stock detachment',
    intro:
      'These two are often confused because both sit at the end of the milling section. They do different jobs and are not alternatives.',
    options: [
      {
        slug: 'bran-finisher',
        name: 'Bran Finisher',
        model: 'FPDW / FBZD',
        choose:
          'Whenever bran is sold as a by-product. Recovers adhering flour from bran, typically 1–3% of intake — which is 1–3 points of extraction that would otherwise leave the plant as low-value bran.',
        mind:
          'Over-aggressive finishing puts fine bran into the flour and raises ash. Screen condition is critical and needs weekly inspection.',
      },
      {
        slug: 'impact-detacher',
        name: 'Impact Detacher',
        model: 'FSJZ / FSJQ',
        choose:
          'Between reduction passages where stock leaves the roll mill as flakes and agglomerates. Detaching before sifting lets the sifter do its job instead of screening lumps.',
        mind:
          'Excess speed or worn pins damage starch, raising starch damage and hurting biscuit and cake flours. It is a conditioning machine, not a grinder.',
      },
    ],
    rule:
      'They are complementary, not alternatives: detachers go between rolls and sifters, bran finishers go after the last break. Fit both in any plant above 40 t/d.',
  },
];

// slug → group lookup
export const selectionBySlug = selectionGroups.reduce((acc, g) => {
  for (const o of g.options) acc[o.slug] = g;
  return acc;
}, {});
