/**
 * FILE: src/components/doodles/Doodle.jsx
 * WHAT IT DOES
 *   Draws one icon:  <Doodle name='coffee' size={48} />
 *   Built-in icons come from icons.jsx (clean line SVG). Any other name is looked up in the custom icons.
 */
import { ICONS } from './icons';
import { useCustomIcons } from './CustomIcons';

/**
 * One line icon. It takes the colour of the text around it, with a pink accent.
 * Decorative by default.
 * Names that are not built in are looked up in the custom icons (uploaded in the admin).
 */
export default function Doodle({ name, size = 48, className = '', style }) {
  const custom = useCustomIcons();
  const art = ICONS[name];

  if (!art) {
    const src = custom[name];
    if (!src) return null;
    return <img className={`doodle-svg doodle-img ${className}`} style={style} src={src} width={size} height={size} alt="" aria-hidden="true" />;
  }

  return (
    <svg
      className={`doodle-svg ${className}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <g>{art}</g>
    </svg>
  );
}
