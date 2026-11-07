// Gallery mapping — which brochure images belong to which page, and in what role.
// Every file here is catalogued in src/data/images.js with its original caption.

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
  'drum-sieve-pre-cleaner': { hero: null, gallery: [] },
  'rotary-vibrating-screen': { hero: 'p19_02.jpg', gallery: ['p19_02.jpg'] },
  'self-balancing-vibrating-screen': { hero: 'p20_01.jpg', gallery: ['p20_01.jpg', 'p20_02.jpg'] },
  'cycling-air-separator': { hero: null, gallery: [] },
  'gravity-destoner': { hero: 'p21_02.jpg', gallery: ['p21_02.jpg', 'p21_01.jpg', 'p21_03.jpg'] },
  'plane-rotary-sifter': { hero: null, gallery: [] },
  'horizontal-wheat-scourer': { hero: null, gallery: [] },
  'grain-length-grader': { hero: null, gallery: [] },
  'wheat-washer-destoner-dryer': { hero: 'p22_03.jpg', gallery: ['p22_03.jpg', 'p22_02.jpg', 'p22_01.jpg', 'p22_04.jpg', 'p22_05.jpg'] },
  'automatic-dampening-system': { hero: null, gallery: [] },
  'aspiration-separator': { hero: 'p23_02.jpg', gallery: ['p23_02.jpg', 'p23_01.jpg', 'p23_03.jpg', 'p23_04.jpg'] },
  'magnetic-separator': { hero: null, gallery: [] },
  'wheat-brush-scourer-combination': { hero: null, gallery: [] },
  '6f-single-roller-mill': { hero: 'p24_01.jpg', gallery: ['p24_01.jpg', 'p24_02.jpg'] },
  'fmfq-double-roller-mill': { hero: 'p25_01.jpg', gallery: ['p25_01.jpg', 'p25_02.jpg', 'p25_03.jpg'] },
  'purifier': { hero: null, gallery: [] },
  'single-bin-plansifter': { hero: 'p26_02.jpg', gallery: ['p26_02.jpg', 'p26_01.jpg', 'p26_04.jpg', 'p26_05.jpg'] },
  'double-bin-plansifter': { hero: null, gallery: [] },
  'high-square-plansifter': { hero: 'p26_03.jpg', gallery: ['p26_03.jpg', 'p26_02.jpg'] },
  'bran-finisher': { hero: 'p27_02.jpg', gallery: ['p27_02.jpg', 'p27_03.jpg', 'p27_01.jpg', 'p27_04.jpg'] },
  'impact-detacher': { hero: null, gallery: [] },
  'automatic-packer': { hero: null, gallery: [] },
  'pulse-jet-dust-collector': { hero: null, gallery: [] },
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
