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
    hero: 'p06_03.jpg',
    gallery: ['p06_03.jpg', 'p02_01.jpg'],
  },
  'double-mill-unit': {
    hero: 'p07_03.jpg',
    gallery: ['p07_01.jpg', 'p07_02.jpg', 'p07_03.jpg', 'p07_04.jpg'],
  },
  'five-mill-unit': {
    hero: 'p06_02.jpg',
    gallery: ['p06_02.jpg'],
  },
  'stone-mill-unit': {
    hero: 'p08_01.jpg',
    gallery: ['p08_01.jpg', 'p08_02.jpg', 'p08_03.jpg'],
  },
  '20-30tpd-flour-plant': {
    hero: 'p10_01.jpg',
    gallery: ['p10_01.jpg', 'p10_02.jpg', 'p10_03.jpg', 'p09_01.jpg'],
  },
  '40-60tpd-flour-plant': {
    hero: 'p11_01.jpg',
    gallery: ['p11_01.jpg', 'p11_02.jpg', 'p12_01.jpg', 'p12_02.jpg', 'p14_01.jpg', 'p14_02.jpg'],
  },
  '100-500tpd-flour-plant': {
    hero: 'p06_01.jpg',
    gallery: [
      'p06_01.jpg', 'p15_01.jpg', 'p15_02.jpg', 'p15_03.jpg', 'p15_04.jpg',
      'p16_01.jpg', 'p16_02.jpg', 'p17_01.jpg', 'p17_02.jpg', 'p17_03.jpg', 'p17_04.jpg',
      'p18_01.jpg',
    ],
  },
};

export const equipmentGallery = {
  // ── Cleaning ──
  'drum-sieve-pre-cleaner': { hero: 'eq-drum-sieve-pre-cleaner.jpg', gallery: ['p19_01.jpg'] },
  'rotary-vibrating-screen': { hero: 'eq-rotary-vibrating-screen.jpg', gallery: ['p19_02.jpg'] },
  'self-balancing-vibrating-screen': {
    hero: 'eq-self-balancing-vibrating-screen.jpg',
    gallery: ['p20_02.jpg'],
  },
  'cycling-air-separator': { hero: 'eq-cycling-air-separator.jpg', gallery: ['p20_01.jpg'] },
  'gravity-destoner': { hero: 'eq-gravity-destoner.jpg', gallery: ['p21_02.jpg', 'p21_01.jpg'] },
  'plane-rotary-sifter': { hero: 'eq-plane-rotary-sifter.jpg', gallery: ['p21_01.jpg'] },
  'horizontal-wheat-scourer': {
    hero: 'eq-horizontal-wheat-scourer.jpg',
    gallery: ['p21_03.jpg'],
  },
  // No standalone product photograph — the brochure crop stays the hero.
  'grain-length-grader': { hero: 'p22_01.jpg', gallery: ['p22_01.jpg'] },
  'wheat-washer-destoner-dryer': {
    hero: 'eq-wheat-washer-destoner-dryer.jpg',
    gallery: ['p22_05.jpg', 'p22_04.jpg'],
  },
  'automatic-dampening-system': {
    hero: 'eq-automatic-dampening-system.jpg',
    gallery: ['p22_02.jpg', 'p22_03.jpg'],
  },
  'aspiration-separator': { hero: 'eq-aspiration-separator.jpg', gallery: ['p23_01.jpg'] },
  'magnetic-separator': { hero: 'eq-magnetic-separator.jpg', gallery: ['p23_02.jpg', 'p23_03.jpg'] },
  // No standalone product photograph — the brochure crop stays the hero.
  'wheat-brush-scourer-combination': { hero: 'p23_04.jpg', gallery: ['p23_04.jpg'] },

  // ── Milling ──
  '6f-single-roller-mill': {
    hero: 'eq-6f-single-roller-mill.jpg',
    gallery: ['p24_01.jpg', 'p24_02.jpg'],
  },
  'fmfq-double-roller-mill': {
    hero: 'eq-fmfq-double-roller-mill.jpg',
    gallery: ['p25_01.jpg', 'p25_02.jpg'],
  },
  'purifier': { hero: 'eq-purifier.jpg', gallery: ['p25_03.jpg'] },
  'single-bin-plansifter': {
    hero: 'eq-single-bin-plansifter.jpg',
    gallery: ['p26_01.jpg', 'p26_04.jpg', 'p26_05.jpg'],
  },
  'double-bin-plansifter': {
    hero: 'eq-double-bin-plansifter.jpg',
    gallery: ['p26_02.jpg'],
  },
  'high-square-plansifter': {
    hero: 'eq-high-square-plansifter.jpg',
    gallery: ['p26_03.jpg'],
  },
  'bran-finisher': { hero: 'eq-bran-finisher.jpg', gallery: ['p27_01.jpg'] },
  'impact-detacher': { hero: 'eq-impact-detacher.jpg', gallery: ['p27_04.jpg'] },
  'automatic-packer': { hero: 'eq-automatic-packer.jpg', gallery: ['p27_02.jpg'] },
  'pulse-jet-dust-collector': {
    hero: 'eq-pulse-jet-dust-collector.jpg',
    gallery: ['p27_03.jpg'],
  },
};

// Workshop photography, grouped by what the brochure caption says they show.
export const workshops = {
  overview: ['p04_01.jpg', 'p04_03.jpg', 'p04_04.jpg', 'p04_05.jpg'],
  rollerMill1: ['p04_06.jpg', 'p04_07.jpg'],
  rollerMill2: ['p04_10.jpg', 'p04_11.jpg'],
  assembly1: ['p04_08.jpg', 'p04_09.jpg'],
  assembly2: ['p04_12.jpg', 'p04_13.jpg'],
  detail: ['p04_02.jpg'],
  cover: ['p01_01.jpg'],
  contents: ['p02_01.jpg'],
  backCover: ['p29_01.jpg'],
};

export const certificates = [
  'p05_02.jpg', 'p05_03.jpg', 'p05_04.jpg', 'p05_05.jpg', 'p05_06.jpg',
  'p05_07.jpg', 'p05_09.jpg', 'p05_10.jpg', 'p05_11.jpg',
];

export const honoursPanel = 'p05_01.jpg';
export const honoursWall = 'p05_08.jpg';
export const companyBanner = 'p03_01.jpg';
export const certificateStrip = 'p03_02.jpg';
export const exportBanner = 'p28_01.jpg';

// Reference plants — keyed to the project cards on /projects/.
export const projectImages = {
  yengisar300: ['p13_01.jpg', 'p13_02.jpg'],
  shufu200: ['p13_03.jpg'],
  beidahuang200: ['p13_04.jpg'],
  yuncheng500: ['p13_06.jpg'],
  capacityTable: ['p13_05.jpg'],
};
