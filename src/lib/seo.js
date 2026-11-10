// Meta description and title fitting.
//
// Detail pages compose descriptions from translated fields; the result lands
// anywhere between 100 and 220 characters depending on the language. Search
// engines truncate above ~155 and thin descriptions below ~140 do less work,
// so both templates pass their composed string through here.

const MIN = 140;
const MAX = 155;

function tidy(s) {
  return s.replace(/\s+/g, ' ').replace(/\s+([.,;:])/g, '$1').trim();
}

function cutAt(s, limit) {
  const slice = s.slice(0, limit);
  const boundary = Math.max(
    slice.lastIndexOf('. '),
    slice.lastIndexOf('; '),
    slice.lastIndexOf(', '),
    slice.lastIndexOf(' — '),
    slice.lastIndexOf(' ')
  );
  const at = boundary > MIN ? boundary : limit;
  return tidy(s.slice(0, at)).replace(/[,;:—-]$/, '').trim();
}

export function fitDescription(text, suffix = '') {
  let s = tidy(text ?? '');
  if (!s) return s;
  if (s.length < MIN && suffix) {
    s = tidy(`${s} ${suffix}`);
  }
  if (s.length > MAX) {
    s = cutAt(s, MAX);
    if (!/[.!?]$/.test(s)) s += '.';
  }
  if (s.length < MIN && suffix) {
    const room = MAX - s.length - 1;
    if (room > 10) {
      s = tidy(`${s} ${suffix}`.slice(0, MAX));
      if (!/[.!?]$/.test(s)) s = cutAt(s, MAX) + '.';
    }
  }
  return s;
}

export function fitTitle(title, max = 60) {
  const t = tidy(title ?? '');
  if (t.length <= max) return t;
  const parts = t.split(' — ');
  if (parts.length > 1 && parts[0].length <= max) return parts[0];
  return cutAt(t, max);
}
