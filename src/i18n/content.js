// Content resolution for detail pages.
//
// English lives in src/data/{plants,equipment}.js. Translations live in
// src/data/i18n/{plants,equipment}.<lang>.js and only carry prose fields — model
// tables, spec tables and drawings stay in one place so a translation can never
// drift from the engineering data.
//
// Merging is field-by-field with English as the fallback, so a half-finished
// translation degrades to English instead of rendering empty cells.

import { getPlant } from '../data/plants.js';
import { getEquipment } from '../data/equipment.js';

import plantsRu from '../data/i18n/plants.ru.js';
import plantsEs from '../data/i18n/plants.es.js';
import plantsAr from '../data/i18n/plants.ar.js';

import selectionRu from '../data/i18n/selection.ru.js';
import selectionEs from '../data/i18n/selection.es.js';
import selectionAr from '../data/i18n/selection.ar.js';

const plantTranslations = { ru: plantsRu, es: plantsEs, ar: plantsAr };
const selectionTranslations = { ru: selectionRu, es: selectionEs, ar: selectionAr };

// Equipment dictionaries are produced independently and may be absent while
// being written; resolve them lazily so a missing file cannot break the build.
async function equipmentDict(lang) {
  if (lang === 'en') return null;
  try {
    const mod = await import(`../data/i18n/equipment.${lang}.js`);
    return mod.default;
  } catch {
    return null;
  }
}

function mergeModelNotes(models, notes) {
  if (!notes) return models;
  return models.map((m) => ({ ...m, note: notes[m.model] ?? m.note }));
}

export function getPlantContent(lang, slug) {
  const base = getPlant(slug);
  if (!base) return null;
  if (lang === 'en') return base;

  const tr = plantTranslations[lang]?.[slug];
  if (!tr) return base;

  return {
    ...base,
    name: tr.name ?? base.name,
    scale: tr.scale ?? base.scale,
    tagline: tr.tagline ?? base.tagline,
    intro: tr.intro ?? base.intro,
    highlights: tr.highlights ?? base.highlights,
    flow: tr.flow ?? base.flow,
    applications: tr.applications ?? base.applications,
    selection: tr.selection ?? base.selection,
    faq: tr.faq ?? base.faq,
    models: mergeModelNotes(base.models, tr.models),
  };
}

export async function getEquipmentContent(lang, slug) {
  const base = getEquipment(slug);
  if (!base) return null;
  if (lang === 'en') return base;

  const dict = await equipmentDict(lang);
  const tr = dict?.[slug];
  if (!tr) return base;

  return {
    ...base,
    name: tr.name ?? base.name,
    stage: tr.stage ?? base.stage,
    tagline: tr.tagline ?? base.tagline,
    intro: tr.intro ?? base.intro,
    selection: tr.selection ?? base.selection,
    maintenance: tr.maintenance ?? base.maintenance,
    faq: tr.faq ?? base.faq,
    // Spec table headers stay English: they are dimensional metrology, and a
    // mistranslated column header is worse than an English one.
  };
}

export function plantTranslationCoverage(lang) {
  if (lang === 'en') return 1;
  return Object.keys(plantTranslations[lang] ?? {}).length;
}

// Selection matrices: the group prose and per-option text, merged onto the
// English structure so option slugs and model codes always come from one place.
export function getSelectionContent(lang, group) {
  if (!group || lang === 'en') return group;

  const tr = selectionTranslations[lang]?.[group.id];
  if (!tr) return group;

  return {
    ...group,
    title: tr.title ?? group.title,
    intro: tr.intro ?? group.intro,
    rule: tr.rule ?? group.rule,
    options: group.options.map((o) => {
      const ot = tr.options?.[o.slug];
      return ot ? { ...o, choose: ot.choose ?? o.choose, mind: ot.mind ?? o.mind } : o;
    }),
  };
}
