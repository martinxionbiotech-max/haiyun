// Image catalogue — the single source of truth for every brochure image.
// Captions are transcribed from the source brochure page captions so that no
// image is presented as something it is not. `caption` = original text,
// `note` = what the image actually shows (for alt text and layout decisions).

export const imageCatalogue = [
  // ── Front matter ───────────────────────────────────────────────
  { file: 'p01_01.jpg', page: 1, section: 'Cover', caption: 'Cover', note: 'Cover visual, full page', w: 1246, h: 1618 },
  { file: 'p02_01.jpg', page: 2, section: 'Contents', caption: '生产车间', note: 'Contents page with production workshop photo', w: 1498, h: 1008 },

  // ── Company profile ────────────────────────────────────────────
  { file: 'p03_01.jpg', page: 3, section: 'Company profile', caption: '公司简介', note: 'Company profile banner', w: 1600, h: 681 },
  { file: 'p03_02.jpg', page: 3, section: 'Company profile', caption: '已获得进出口产品许可证，并通过了 ISO9001-2015 国际质量体系认证', note: 'Certification strip: import/export licence and ISO 9001:2015', w: 1600, h: 221 },

  // ── Production workshop ────────────────────────────────────────
  { file: 'p04_01.jpg', page: 4, section: 'Production workshop', caption: 'First-class production equipment, strict management systems', note: 'Production workshop overview', w: 1243, h: 533 },
  { file: 'p04_02.jpg', page: 4, section: 'Production workshop', caption: '物尽其用，使我们的产品品质更加完善', note: 'Workshop detail — material utilisation', w: 509, h: 288 },
  { file: 'p04_03.jpg', page: 4, section: 'Production workshop', caption: 'First-class production equipment, strict management systems', note: 'Production workshop overview', w: 477, h: 272 },
  { file: 'p04_04.jpg', page: 4, section: 'Production workshop', caption: 'PRODUCTION WORKSHOP', note: 'General workshop floor', w: 537, h: 301 },
  { file: 'p04_05.jpg', page: 4, section: 'Production workshop', caption: 'PRODUCTION WORKSHOP', note: 'General workshop floor', w: 537, h: 301 },
  { file: 'p04_06.jpg', page: 4, section: 'Production workshop', caption: '磨粉机专用车间 Ⅰ (Workshop Ⅰ for milling machine)', note: 'Roller mill dedicated workshop I', w: 477, h: 318 },
  { file: 'p04_07.jpg', page: 4, section: 'Production workshop', caption: '磨粉机专用车间 Ⅰ (Workshop Ⅰ for milling machine)', note: 'Roller mill dedicated workshop I', w: 537, h: 302 },
  { file: 'p04_08.jpg', page: 4, section: 'Production workshop', caption: '综合组装车间 Ⅰ (Integrated assembly workshop Ⅰ)', note: 'Integrated assembly workshop I', w: 500, h: 279 },
  { file: 'p04_09.jpg', page: 4, section: 'Production workshop', caption: '综合组装车间 Ⅰ (Integrated assembly workshop Ⅰ)', note: 'Integrated assembly workshop I', w: 500, h: 288 },
  { file: 'p04_10.jpg', page: 4, section: 'Production workshop', caption: '磨粉机专用车间 Ⅱ (Workshop Ⅱ for milling machine)', note: 'Roller mill dedicated workshop II', w: 537, h: 302 },
  { file: 'p04_11.jpg', page: 4, section: 'Production workshop', caption: '磨粉机专用车间 Ⅱ (Workshop Ⅱ for milling machine)', note: 'Roller mill dedicated workshop II', w: 515, h: 291 },
  { file: 'p04_12.jpg', page: 4, section: 'Production workshop', caption: '综合组装车间 Ⅱ (Integrated assembly workshop Ⅱ)', note: 'Integrated assembly workshop II', w: 531, h: 293 },
  { file: 'p04_13.jpg', page: 4, section: 'Production workshop', caption: '综合组装车间 Ⅱ (Integrated assembly workshop Ⅱ)', note: 'Integrated assembly workshop II', w: 487, h: 278 },

  // ── Certifications and honours ─────────────────────────────────
  { file: 'p05_01.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Honours panel — full list', w: 724, h: 1292 },
  { file: 'p05_02.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 1', w: 284, h: 401 },
  { file: 'p05_03.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 2', w: 284, h: 401 },
  { file: 'p05_04.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 3', w: 284, h: 401 },
  { file: 'p05_05.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 4', w: 284, h: 401 },
  { file: 'p05_06.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 5', w: 284, h: 401 },
  { file: 'p05_07.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 6', w: 284, h: 401 },
  { file: 'p05_08.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Honours wall — wide shot', w: 1410, h: 772 },
  { file: 'p05_09.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 7', w: 284, h: 401 },
  { file: 'p05_10.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 8', w: 284, h: 401 },
  { file: 'p05_11.jpg', page: 5, section: 'Qualifications', caption: 'QUALIFICATION HONOR', note: 'Certificate 9', w: 284, h: 401 },

  // ── Production line overview ───────────────────────────────────
  { file: 'p06_01.jpg', page: 6, section: 'Plant overview', caption: '6FTDP-100T 面粉生产线', note: '6FTDP-100T flour production line, full view', w: 1600, h: 1563 },
  { file: 'p06_02.jpg', page: 6, section: 'Plant overview', caption: 'Wheat flour production line', note: 'Wheat flour production line', w: 442, h: 564 },
  { file: 'p06_03.jpg', page: 6, section: 'Plant overview', caption: '6FSZ-40(50)B', note: '6FSZ-40B / 6FSZ-50B small mill unit', w: 419, h: 484 },

  // ── Double mill series ─────────────────────────────────────────
  { file: 'p07_01.jpg', page: 7, section: 'Double mill unit', caption: '名称 Name', note: 'Double mill unit — nameplate detail', w: 337, h: 386 },
  { file: 'p07_02.jpg', page: 7, section: 'Double mill unit', caption: '参数 Parameter', note: 'Double mill unit — parameter panel', w: 276, h: 539 },
  { file: 'p07_03.jpg', page: 7, section: 'Double mill unit', caption: '外型尺寸 4000×1500×3100 / 4000×1500×3300', note: 'Double mill unit with dimension callouts', w: 461, h: 400 },
  { file: 'p07_04.jpg', page: 7, section: 'Double mill unit', caption: 'Power (kW)', note: 'Double mill unit motor detail', w: 694, h: 347 },

  // ── Stone mill ─────────────────────────────────────────────────
  { file: 'p08_01.jpg', page: 8, section: 'Stone mill', caption: 'Wheat flour production line', note: 'Stone mill unit', w: 485, h: 456 },
  { file: 'p08_02.jpg', page: 8, section: 'Stone mill', caption: 'Low speed grinding, low temperature processing, does not destroy nutrients in wheat', note: 'Stone mill grinding chamber / stones', w: 364, h: 486 },
  { file: 'p08_03.jpg', page: 8, section: 'Stone mill', caption: '外形尺寸 installation size (L×W×H) meter', note: 'Stone mill unit dimension drawing', w: 619, h: 431 },

  // ── 20–30 t/d ──────────────────────────────────────────────────
  { file: 'p09_01.jpg', page: 9, section: '20–30 t/d plant', caption: '6FTDP-30: 1830/10, 2 组双仓筛, 4B4M, 92 kW, 18×6×6.5 m', note: '6FTDP-30 parameter table and plant layout', w: 839, h: 615 },
  { file: 'p10_01.jpg', page: 10, section: '20–30 t/d plant', caption: '6FTDP-25T 生产线的清理部分由振动筛、比重去石机、两台打麦机、洗麦去石机组成；制粉采用三皮三芯工艺', note: '6FTDP-25T line overview', w: 1000, h: 667 },
  { file: 'p10_02.jpg', page: 10, section: '20–30 t/d plant', caption: '型号及台数 Model & quantity', note: '6FTDP-25T equipment list', w: 428, h: 286 },
  { file: 'p10_03.jpg', page: 10, section: '20–30 t/d plant', caption: '配套动力 (kW)', note: '6FTDP-25T power allocation', w: 428, h: 286 },

  // ── 40 t/d ─────────────────────────────────────────────────────
  { file: 'p11_01.jpg', page: 11, section: '40 t/d plant', caption: '6FTDP-40T: 二筛二打二去石清理，三皮四芯一渣制粉，1 台高方平筛、1 台 83 型单仓筛、1 台刷麸机、1 台清粉机', note: '6FTDP-40T line overview', w: 884, h: 590 },
  { file: 'p11_02.jpg', page: 11, section: '40 t/d plant', caption: '动力 Power', note: '6FTDP-40T power table', w: 620, h: 413 },

  // ── 60 t/d single ──────────────────────────────────────────────
  { file: 'p12_01.jpg', page: 12, section: '60 t/d plant', caption: '6FTDP-60T: 三筛二打二去石清理，四皮五芯一渣一尾工艺（双 1B），2 台高方平筛、1 台打麸机、1 台刷麸机、1 台清粉机', note: '6FTDP-60T single mill line overview', w: 1024, h: 733 },
  { file: 'p12_02.jpg', page: 12, section: '60 t/d plant', caption: '工艺特性 Workmanship', note: '6FTDP-60T process characteristics table', w: 853, h: 370 },

  // ── 60–500 t/d reference plants ────────────────────────────────
  { file: 'p13_01.jpg', page: 13, section: 'Reference plants', caption: '莎车 300 吨面粉厂 (Yengisar 300 t/d)', note: 'Yengisar 300 t/d plant, exterior + interior', w: 1134, h: 373 },
  { file: 'p13_02.jpg', page: 13, section: 'Reference plants', caption: '莎车 300 吨面粉厂 (Yengisar 300 t/d)', note: 'Yengisar 300 t/d plant, interior', w: 481, h: 259 },
  { file: 'p13_03.jpg', page: 13, section: 'Reference plants', caption: '疏附 200 吨面粉厂 (Shufu 200 t/d)', note: 'Shufu 200 t/d plant', w: 470, h: 271 },
  { file: 'p13_04.jpg', page: 13, section: 'Reference plants', caption: '北大荒 200 吨面粉厂 (Beidahuang 200 t/d)', note: 'Beidahuang 200 t/d plant', w: 512, h: 378 },
  { file: 'p13_05.jpg', page: 13, section: 'Reference plants', caption: '80T / 100T / 120T 参数：190–420 kW, 70–74 kWh/t, 30×7×12.5 m', note: 'Capacity / power / building size table', w: 1013, h: 431 },
  { file: 'p13_06.jpg', page: 13, section: 'Reference plants', caption: '郓城 500 吨面粉厂 (Yuncheng 500 t/d)', note: 'Yuncheng 500 t/d plant', w: 500, h: 375 },

  // ── 60 t/d compound ────────────────────────────────────────────
  { file: 'p14_01.jpg', page: 14, section: '60 t/d compound', caption: '6FTDP-60T flour production line (pneumatic compound mill)', note: '6FTDP-60T compound mill line', w: 1009, h: 588 },
  { file: 'p14_02.jpg', page: 14, section: '60 t/d compound', caption: '工艺流程图 Process flow diagram', note: '6FTDP-60T process flow diagram', w: 1032, h: 605 },

  // ── 100 t/d ────────────────────────────────────────────────────
  { file: 'p15_01.jpg', page: 15, section: '100 t/d plant', caption: '6FTDP-100T 面粉生产线', note: '6FTDP-100T line, view 1', w: 561, h: 433 },
  { file: 'p15_02.jpg', page: 15, section: '100 t/d plant', caption: '6FTDP-100T 面粉生产线', note: '6FTDP-100T line, view 2', w: 635, h: 445 },
  { file: 'p15_03.jpg', page: 15, section: '100 t/d plant', caption: '6FTDP-100T 面粉生产线', note: '6FTDP-100T line, view 3', w: 517, h: 391 },
  { file: 'p15_04.jpg', page: 15, section: '100 t/d plant', caption: '制粉工艺流程 Milling process display', note: '6FTDP-100T milling flow diagram', w: 583, h: 400 },

  // ── 200 t/d steel frame ────────────────────────────────────────
  { file: 'p16_01.jpg', page: 16, section: '200 t/d plant', caption: '6FTDP-200T 面粉生产线（钢架式）', note: '6FTDP-200T steel-frame plant', w: 1194, h: 516 },
  { file: 'p16_02.jpg', page: 16, section: '200 t/d plant', caption: '制粉工艺流程 Milling process display', note: '6FTDP-200T milling flow diagram', w: 960, h: 480 },

  // ── 200 t/d ────────────────────────────────────────────────────
  { file: 'p17_01.jpg', page: 17, section: '200 t/d plant', caption: '6FTDP-200T flour production line', note: '6FTDP-200T line, view 1', w: 471, h: 471 },
  { file: 'p17_02.jpg', page: 17, section: '200 t/d plant', caption: '6FTDP-200T 面粉生产线', note: '6FTDP-200T line, view 2', w: 488, h: 499 },
  { file: 'p17_03.jpg', page: 17, section: '200 t/d plant', caption: '6FTDP-200T flour production line', note: '6FTDP-200T line, view 3', w: 471, h: 471 },
  { file: 'p17_04.jpg', page: 17, section: '200 t/d plant', caption: '制粉工艺流程 Milling process display', note: '6FTDP-200T milling flow diagram', w: 488, h: 499 },

  // ── 300 t/d ────────────────────────────────────────────────────
  { file: 'p18_01.jpg', page: 18, section: '300 t/d plant', caption: 'Wheat flour production line', note: '6FTDP-300T plant, tall elevation', w: 1111, h: 1253 },

  // ── Cleaning equipment ─────────────────────────────────────────
  { file: 'p19_01.jpg', page: 19, section: 'Cleaning equipment', caption: 'Cleaning equipment', note: 'Cleaning equipment overview', w: 458, h: 564 },
  { file: 'p19_02.jpg', page: 19, section: 'Cleaning equipment', caption: 'HZXZ200×250', note: 'HZXZ 200×250 rotary vibrating screen', w: 575, h: 412 },
  { file: 'p20_01.jpg', page: 20, section: 'Self-balancing screen', caption: 'Cleaning equipment', note: 'TQLZ self-balancing vibrating screen', w: 464, h: 339 },
  { file: 'p20_02.jpg', page: 20, section: 'Self-balancing screen', caption: 'TQLZ 型自衡式振动筛：用于粮食中大中小及轻杂质筛理分离，用于小麦初清、碾米、饲料、化工等行业', note: 'TQLZ screen with description', w: 507, h: 497 },
  { file: 'p21_01.jpg', page: 21, section: 'Gravity destoner', caption: '重量 (kg) / 动力 (kW) / 外形尺寸 (长×宽×高)', note: 'TQSF destoner parameter table', w: 384, h: 272 },
  { file: 'p21_02.jpg', page: 21, section: 'Gravity destoner', caption: 'TQSF 型比重分级去石机：筛理与气流联合作用分级去石，用于原粮头道清理', note: 'TQSF gravity destoner', w: 693, h: 687 },
  { file: 'p21_03.jpg', page: 21, section: 'Gravity destoner', caption: '重量 (kg) / 动力 (kW) / 外形尺寸 (长×宽×高)', note: 'TQSF destoner parameter table, second view', w: 560, h: 412 },
  { file: 'p22_01.jpg', page: 22, section: 'Washer-destoner', caption: '外形尺寸 / 分离效果：碎中含整 (%) / 整中含碎 (%)', note: 'Washer-destoner performance table', w: 323, h: 326 },
  { file: 'p22_02.jpg', page: 22, section: 'Washer-destoner', caption: 'Computer automatically forward to the water system', note: 'Water system control detail', w: 263, h: 407 },
  { file: 'p22_03.jpg', page: 22, section: 'Washer-destoner', caption: 'Cleaning equipment', note: 'Washer-destoner-dryer unit', w: 379, h: 322 },
  { file: 'p22_04.jpg', page: 22, section: 'Washer-destoner', caption: '外形尺寸 / 分离效果', note: 'Washer-destoner table detail', w: 279, h: 283 },
  { file: 'p22_05.jpg', page: 22, section: 'Washer-destoner', caption: '外形尺寸 / 分离效果', note: 'Washer-destoner table detail', w: 427, h: 367 },
  { file: 'p23_01.jpg', page: 23, section: 'Aspiration separator', caption: '外型尺寸 (mm)', note: 'Aspiration separator dimension table', w: 280, h: 488 },
  { file: 'p23_02.jpg', page: 23, section: 'Aspiration separator', caption: 'Cleaning equipment', note: 'Aspiration separator unit', w: 312, h: 392 },
  { file: 'p23_03.jpg', page: 23, section: 'Aspiration separator', caption: '外型尺寸 (mm)', note: 'Aspiration separator dimension table', w: 342, h: 264 },
  { file: 'p23_04.jpg', page: 23, section: 'Aspiration separator', caption: 'Length (mm)', note: 'Aspiration separator length detail', w: 380, h: 236 },

  // ── Milling equipment ──────────────────────────────────────────
  { file: 'p24_01.jpg', page: 24, section: 'Milling equipment', caption: '同步带式 synchronous belt drive', note: 'Roller mill, synchronous belt drive', w: 484, h: 309 },
  { file: 'p24_02.jpg', page: 24, section: 'Milling equipment', caption: '齿轮式 gear drive', note: 'Roller mill, gear drive', w: 462, h: 336 },
  { file: 'p25_01.jpg', page: 25, section: 'FMFQ(S) double mill', caption: 'FMFQ(S) 型复式磨粉机：广泛用于大中型面粉厂小麦制粉，亦可用于玉米、高粱、辣椒、酿造、饲料行业物料研磨', note: 'FMFQ(S) double roller mill', w: 848, h: 448 },
  { file: 'p25_02.jpg', page: 25, section: 'FMFQ(S) double mill', caption: 'FMFQ(S) 型复式磨粉机', note: 'FMFQ(S) roller mill, second view', w: 433, h: 354 },
  { file: 'p25_03.jpg', page: 25, section: 'FMFQ(S) double mill', caption: 'Flour milling equipment', note: 'Roller mill detail', w: 814, h: 651 },
  { file: 'p26_01.jpg', page: 26, section: 'Single bin plansifter', caption: '普通单仓筛', note: 'Standard single bin plansifter', w: 223, h: 360 },
  { file: 'p26_02.jpg', page: 26, section: 'Single bin plansifter', caption: 'Flour milling equipment', note: 'Plansifter bank', w: 537, h: 553 },
  { file: 'p26_03.jpg', page: 26, section: 'Single bin plansifter', caption: 'Model FSFG plansifter', note: 'FSFG high square plansifter', w: 420, h: 504 },
  { file: 'p26_04.jpg', page: 26, section: 'Single bin plansifter', caption: '普通单仓筛', note: 'Standard single bin plansifter, second view', w: 281, h: 373 },
  { file: 'p26_05.jpg', page: 26, section: 'Single bin plansifter', caption: '密封单仓筛', note: 'Sealed single bin plansifter', w: 438, h: 473 },
  { file: 'p27_01.jpg', page: 27, section: 'Bran finisher', caption: '重量 Weight (kg)', note: 'Bran finisher weight table', w: 427, h: 413 },
  { file: 'p27_02.jpg', page: 27, section: 'Bran finisher', caption: 'Flour milling equipment', note: 'Bran finisher unit', w: 366, h: 419 },
  { file: 'p27_03.jpg', page: 27, section: 'Bran finisher', caption: '气源 Air supply', note: 'Bran finisher air supply detail', w: 292, h: 451 },
  { file: 'p27_04.jpg', page: 27, section: 'Bran finisher', caption: '重量 Weight (kg)', note: 'Bran finisher weight detail', w: 216, h: 240 },

  // ── Closing ────────────────────────────────────────────────────
  { file: 'p28_01.jpg', page: 28, section: 'Closing', caption: '70 载制造经验 — 已获得进出口产品许可证，远销东欧、独联体', note: 'Export and experience banner', w: 1600, h: 1045 },
  { file: 'p29_01.jpg', page: 29, section: 'Back cover', caption: 'Back cover', note: 'Back cover visual', w: 1246, h: 1099 },
];

const byFile = new Map(imageCatalogue.map((i) => [i.file, i]));

/** Look up a catalogue entry by filename, e.g. 'p13_01.jpg'. */
export function img(file) {
  return byFile.get(file) ?? { file, caption: '', note: '', w: 0, h: 0 };
}

/** Build an array of image objects from filenames. */
export function imgs(files) {
  return files.map(img);
}

/** Every file recorded for a brochure page number. */
export function pageImages(page) {
  return imageCatalogue.filter((i) => i.page === page);
}
