/**
 * FILE: src/components/doodles/icons.jsx
 * WHAT IT DOES
 *   All the built-in icons, drawn as clean line SVG in a 64x64 box (no icon packs, no logos).
 *   Lines use the current text colour; the pink accent is ACCENT below.
 *   To add one: add a new  name: (<>...</>),  entry below. It then appears in the admin pickers.
 *   ICON_NAMES (bottom) is the list of names; scripts/validate-content.mjs reads this file too.
 */
// colours come from CSS so icons stay visible on pink tiles too (see .tone-pink in styles/bento.css)
const ACCENT = 'var(--icon-accent, #ff4d94)';
const SOFT = 'var(--icon-soft, rgba(255, 77, 148, .22))';

export const ICONS = {
  // rising chart (markets, growth)
  chart: (
    <>
      <path d="M8 8 V56 H58" />
      <path d="M16 44 L28 30 L38 38 L56 14" stroke={ACCENT} />
      <path d="M46 14 H56 V24" stroke={ACCENT} />
      <path d="M16 56 V50 M28 56 V44 M40 56 V46 M52 56 V34" opacity=".55" />
    </>
  ),
  // coin
  coin: (
    <>
      <circle cx="32" cy="32" r="24" fill={SOFT} />
      <circle cx="32" cy="32" r="17" />
      <path d="M37 24 Q31 20 27 24 Q24 28 32 32 Q40 36 37 40 Q33 44 27 40 M32 17 V21 M32 43 V47" stroke={ACCENT} />
    </>
  ),
  // bank building
  bank: (
    <>
      <path d="M6 24 L32 8 L58 24 Z" fill={SOFT} />
      <path d="M12 28 V46 M24 28 V46 M40 28 V46 M52 28 V46" />
      <path d="M8 50 H56 M4 56 H60" stroke={ACCENT} />
    </>
  ),
  // briefcase
  briefcase: (
    <>
      <rect x="6" y="18" width="52" height="36" rx="5" fill={SOFT} />
      <path d="M22 18 V12 Q22 8 26 8 H38 Q42 8 42 12 V18" />
      <path d="M6 33 H58" />
      <rect x="28" y="30" width="8" height="8" rx="1.5" fill="var(--icon-lock, #0b0b0d)" stroke={ACCENT} />
    </>
  ),
  // graduation cap
  cap: (
    <>
      <path d="M32 10 L60 24 L32 38 L4 24 Z" fill={SOFT} />
      <path d="M14 31 V44 Q32 56 50 44 V31" />
      <path d="M58 26 V42" stroke={ACCENT} />
    </>
  ),
  // globe (languages, macro)
  globe: (
    <>
      <circle cx="32" cy="32" r="24" />
      <ellipse cx="32" cy="32" rx="10" ry="24" stroke={ACCENT} />
      <path d="M8 32 H56 M12 20 H52 M12 44 H52" opacity=".6" />
    </>
  ),
  // shield (risk, compliance)
  shield: (
    <>
      <path d="M32 6 L54 14 V32 Q54 48 32 58 Q10 48 10 32 V14 Z" fill={SOFT} />
      <path d="M22 32 L29 39 L43 24" stroke={ACCENT} />
    </>
  ),
  // balance scale (risk vs. return)
  scale: (
    <>
      <path d="M32 8 V54 M20 56 H44 M12 16 H52" />
      <path d="M12 16 L4 34 H20 Z M52 16 L44 34 H60 Z" fill={SOFT} stroke={ACCENT} />
      <circle cx="32" cy="10" r="3" fill={ACCENT} stroke="none" />
    </>
  ),
  // calculator
  calc: (
    <>
      <rect x="12" y="6" width="40" height="52" rx="6" fill={SOFT} />
      <rect x="18" y="12" width="28" height="12" rx="2" stroke={ACCENT} />
      <path d="M20 34 H24 M30 34 H34 M40 34 H44 M20 43 H24 M30 43 H34 M40 43 H44 M20 51 H24 M30 51 H34" />
    </>
  ),
  // pie chart
  pie: (
    <>
      <path d="M30 10 A24 24 0 1 0 54 34 H30 Z" fill={SOFT} />
      <path d="M38 6 A22 22 0 0 1 58 26 H38 Z" stroke={ACCENT} />
    </>
  ),
  // diamond (wealth)
  diamond: (
    <>
      <path d="M16 10 H48 L60 24 L32 58 L4 24 Z" fill={SOFT} />
      <path d="M4 24 H60 M24 10 L20 24 L32 58 L44 24 L40 10" stroke={ACCENT} />
    </>
  ),
  // mountain (mountaineering)
  mountain: (
    <>
      <path d="M2 54 L24 16 L36 36 L44 26 L62 54 Z" fill={SOFT} />
      <path d="M17 29 L24 16 L31 28" stroke={ACCENT} />
      <path d="M44 6 V16 M40 11 H48" opacity=".6" />
    </>
  ),
  // trophy
  trophy: (
    <>
      <path d="M18 8 H46 V26 Q46 40 32 40 Q18 40 18 26 Z" fill={SOFT} />
      <path d="M18 14 H8 Q8 28 20 30 M46 14 H56 Q56 28 44 30" />
      <path d="M32 40 V50 M20 56 H44 M24 50 H40" stroke={ACCENT} />
    </>
  ),
  // medal
  medal: (
    <>
      <path d="M18 6 L30 28 M46 6 L34 28" />
      <circle cx="32" cy="42" r="15" fill={SOFT} />
      <path d="M32 34 l2.8 5.6 6.2 .9 -4.5 4.4 1.1 6.2 -5.6-2.9 -5.6 2.9 1.1-6.2 -4.5-4.4 6.2-.9z" stroke={ACCENT} />
    </>
  ),
  // open book (olympiads, study)
  book: (
    <>
      <path d="M32 14 Q20 8 6 12 V50 Q20 46 32 52 Q44 46 58 50 V12 Q44 8 32 14 Z" fill={SOFT} />
      <path d="M32 14 V52" stroke={ACCENT} />
    </>
  ),
  // target
  target: (
    <>
      <circle cx="30" cy="34" r="22" />
      <circle cx="30" cy="34" r="13" opacity=".7" />
      <circle cx="30" cy="34" r="4" fill={ACCENT} stroke="none" />
      <path d="M30 34 L54 10 M48 8 L56 8 L56 16" stroke={ACCENT} />
    </>
  ),
  // code window
  code: (
    <>
      <rect x="4" y="9" width="56" height="46" rx="6" fill={SOFT} />
      <path d="M4 21 H60" />
      <path d="M24 30 L16 38 L24 46 M40 30 L48 38 L40 46 M35 28 L29 48" stroke={ACCENT} />
    </>
  ),
  // heart
  heart: (
    <>
      <path d="M32 54 Q6 36 6 20 Q6 8 18 8 Q27 8 32 17 Q37 8 46 8 Q58 8 58 20 Q58 36 32 54 Z" fill={SOFT} />
      <path d="M16 20 Q16 16 20 16" stroke={ACCENT} />
    </>
  ),
  // git branch (generic "connections")
  branch: (
    <>
      <path d="M18 18 V46" />
      <path d="M46 30 Q46 42 18 42" />
      <circle cx="18" cy="13" r="6" fill={SOFT} />
      <circle cx="18" cy="51" r="6" fill={SOFT} />
      <circle cx="46" cy="24" r="6" fill={ACCENT} stroke="none" />
    </>
  ),
  // pencil
  pencil: (
    <>
      <path d="M10 54 L14 40 L42 12 Q46 8 50 12 L52 14 Q56 18 52 22 L24 50 Z" fill={SOFT} />
      <path d="M14 40 L24 50 M38 16 L48 26" stroke={ACCENT} />
    </>
  ),
  // speech bubble
  speech: (
    <>
      <path d="M8 10 H56 Q60 10 60 14 V38 Q60 42 56 42 H32 L19 55 V42 H8 Q4 42 4 38 V14 Q4 10 8 10 Z" fill={SOFT} />
      <path d="M16 20 H48 M16 30 H36" stroke={ACCENT} />
    </>
  ),
  // filler shapes
  star: <path d="M32 5 L39 24 L59 25 L43 38 L49 57 L32 46 L15 57 L21 38 L5 25 L25 24 Z" fill={SOFT} />,
  sparkle: <path d="M32 4 Q35 28 60 32 Q35 36 32 60 Q29 36 4 32 Q29 28 32 4 Z" fill={SOFT} stroke={ACCENT} />,
  bolt: <path d="M36 4 L14 36 H28 L24 60 L50 24 H34 Z" fill={SOFT} stroke={ACCENT} />,
  squiggle: <path d="M4 40 Q12 20 20 40 T36 40 T52 40 T62 36" fill="none" />,
};

export const ICON_NAMES = Object.keys(ICONS);
