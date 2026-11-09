// Gallery mapping — hero photograph plus supporting crops, per machine and per plant.
// Every file here is catalogued in src/data/images.js with its original caption.
//
// ── How this mapping was built ──────────────────────────────────────────────
// Two sources, in this order of preference:
//
// 1. Machine photographs (`eq-*.jpg`). The 2026 wheat catalogue prints two to
//    four machines per page at thumbnail size (pp. 19–23 in columns, pp. 26–27
//    in blocks), so a brochure crop is usually too small and too crowded to be
//    a page hero. The manufacturer's own product photography shows one complete
//    machine per photograph and is used as the hero wherever it exists.
//
// 2. Brochure crops (`pNN_NN.jpg`). These stay in each page's gallery as
//    catalogue evidence — dimension drawings, parameter tables and detail
//    views. Two machines have no standalone product photograph (the grain
//    length grader and the wheat brush-scourer combination) and keep their
//    brochure crop as the hero instead.
//
// Where a brochure page carries several machines, the crops were assigned by
// the catalogue's own reading order and then cross-checked against every model
// designation printed beside an image. All of these agree with the mapping:
//
//   p19_02 = HZXZ rotary vibrating screen     ("HZXZ200×250")
//   p20_02 = TQLZ self-balancing screen       ("Model TQLZ…")
//   p21_02 = TQSF gravity destoner            ("Model TQSF…")
//   p22_02 = DZS automatic dampening          ("Computer automatically… water")
//   p25_01 = FMFQ(S) double roller mill       ("Model FMFQ(S)…")
//   p26_03 = FSFG high square plansifter      ("Model FSFG plansifter")
//   p27_01 = FPDW bran finisher               (first machine on page 27)
//
// Crops whose caption is a dimension or parameter table ("Overall dimensions…",
// "Weight (kg)") are kept in the gallery and never used as a hero: the numbers
// are already reproduced as HTML tables in each page's spec section.
//
// One photograph covers every capacity variant of a machine — that is how the
// manufacturer catalogues them, and the brochure prints one picture per family.

export const plantGallery = {
  'small-flour-mill-unit': {
    hero: 'p06_03.webp',
    gallery: ['p06_03.webp', 'p02_01.webp'],
  },
  'double-mill-unit': {
    hero: 'p07_03.webp',
    gallery: ['p07_01.webp', 'p07_02.webp', 'p07_03.webp', 'p07_04.webp'],
  },
  'five-mill-unit': {
    hero: 'p06_02.webp',
    gallery: ['p06_02.webp'],
  },
  'stone-mill-unit': {
    hero: 'p08_01.webp',
    gallery: ['p08_01.webp', 'p08_02.webp', 'p08_03.webp'],
  },
  '20-30tpd-flour-plant': {
    hero: 'p10_01.webp',
    gallery: ['p10_01.webp', 'p10_02.webp', 'p10_03.webp', 'p09_01.webp'],
  },
  '40-60tpd-flour-plant': {
    hero: 'p11_01.webp',
    gallery: ['p11_01.webp', 'p11_02.webp', 'p12_01.webp', 'p12_02.webp', 'p14_01.webp', 'p14_02.webp'],
  },
  '100-500tpd-flour-plant': {
    hero: 'p06_01.webp',
    gallery: [
      'p06_01.webp', 'p15_01.webp', 'p15_02.webp', 'p15_03.webp', 'p15_04.webp',
      'p16_01.webp', 'p16_02.webp', 'p17_01.webp', 'p17_02.webp', 'p17_03.webp', 'p17_04.webp',
      'p18_01.webp',
    ],
  },
};

export const equipmentGallery = {
  // ── Cleaning ──
  'drum-sieve-pre-cleaner': { hero: 'eq-drum-sieve-pre-cleaner.webp', gallery: ['p19_01.webp'] },
  'rotary-vibrating-screen': { hero: 'eq-rotary-vibrating-screen.webp', gallery: ['p19_02.webp'] },
  'self-balancing-vibrating-screen': {
    hero: 'eq-self-balancing-vibrating-screen.webp',
    gallery: ['p20_02.webp'],
  },
  'cycling-air-separator': { hero: 'eq-cycling-air-separator.webp', gallery: ['p20_01.webp'] },
  'gravity-destoner': { hero: 'eq-gravity-destoner.webp', gallery: ['p21_02.webp', 'p21_01.webp'] },
  'plane-rotary-sifter': { hero: 'eq-plane-rotary-sifter.webp', gallery: ['p21_01.webp'] },
  'horizontal-wheat-scourer': {
    hero: 'eq-horizontal-wheat-scourer.webp',
    gallery: ['p21_03.webp'],
  },
  // No standalone product photograph — the brochure crop stays the hero.
  'grain-length-grader': { hero: 'p22_01.webp', gallery: ['p22_01.webp'] },
  'wheat-washer-destoner-dryer': {
    hero: 'eq-wheat-washer-destoner-dryer.webp',
    gallery: ['p22_05.webp', 'p22_04.webp'],
  },
  'automatic-dampening-system': {
    hero: 'eq-automatic-dampening-system.webp',
    gallery: ['p22_02.webp', 'p22_03.webp'],
  },
  'aspiration-separator': { hero: 'eq-aspiration-separator.webp', gallery: ['p23_01.webp'] },
  'magnetic-separator': { hero: 'eq-magnetic-separator.webp', gallery: ['p23_02.webp', 'p23_03.webp'] },
  // No standalone product photograph — the brochure crop stays the hero.
  'wheat-brush-scourer-combination': { hero: 'p23_04.webp', gallery: ['p23_04.webp'] },

  // ── Milling ──
  '6f-single-roller-mill': {
    hero: 'eq-6f-single-roller-mill.webp',
    gallery: ['p24_01.webp', 'p24_02.webp'],
  },
  'fmfq-double-roller-mill': {
    hero: 'eq-fmfq-double-roller-mill.webp',
    gallery: ['p25_01.webp', 'p25_02.webp'],
  },
  'purifier': { hero: 'eq-purifier.webp', gallery: ['p25_03.webp'] },
  'single-bin-plansifter': {
    hero: 'eq-single-bin-plansifter.webp',
    gallery: ['p26_01.webp', 'p26_04.webp', 'p26_05.webp'],
  },
  'double-bin-plansifter': {
    hero: 'eq-double-bin-plansifter.webp',
    gallery: ['p26_02.webp'],
  },
  'high-square-plansifter': {
    hero: 'eq-high-square-plansifter.webp',
    gallery: ['p26_03.webp'],
  },
  'bran-finisher': { hero: 'eq-bran-finisher.webp', gallery: ['p27_01.webp'] },
  'impact-detacher': { hero: 'eq-impact-detacher.webp', gallery: ['p27_04.webp'] },
  'automatic-packer': { hero: 'eq-automatic-packer.webp', gallery: ['p27_02.webp'] },
  'pulse-jet-dust-collector': {
    hero: 'eq-pulse-jet-dust-collector.webp',
    gallery: ['p27_03.webp'],
  },
};

// Workshop photography, grouped by what the brochure caption says they show.
export const workshops = {
  overview: ['p04_01.webp', 'p04_03.webp', 'p04_04.webp', 'p04_05.webp'],
  rollerMill1: ['p04_06.webp', 'p04_07.webp'],
  rollerMill2: ['p04_10.webp', 'p04_11.webp'],
  assembly1: ['p04_08.webp', 'p04_09.webp'],
  assembly2: ['p04_12.webp', 'p04_13.webp'],
  detail: ['p04_02.webp'],
  cover: ['p01_01.webp'],
  contents: ['p02_01.webp'],
  backCover: ['p29_01.webp'],
};

export const certificates = [
  'p05_02.webp', 'p05_03.webp', 'p05_04.webp', 'p05_05.webp', 'p05_06.webp',
  'p05_07.webp', 'p05_09.webp', 'p05_10.webp', 'p05_11.webp',
];

export const honoursPanel = 'p05_01.webp';
export const honoursWall = 'p05_08.webp';
export const companyBanner = 'p03_01.webp';
export const certificateStrip = 'p03_02.webp';
export const exportBanner = 'p28_01.webp';

// Reference plants — keyed to the project cards on /projects/.
export const projectImages = {
  yengisar300: ['p13_01.webp', 'p13_02.webp'],
  shufu200: ['p13_03.webp'],
  beidahuang200: ['p13_04.webp'],
  yuncheng500: ['p13_06.webp'],
  capacityTable: ['p13_05.webp'],
};
