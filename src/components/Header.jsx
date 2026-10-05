/**
 * FILE: src/components/Header.jsx
 * WHAT IT DOES
 *   The top bar: your name/photo (click = back to all tiles), small accent icons, and the Resume button.
 */
import { profile } from '../data/profile';
import Doodle from './doodles/Doodle';
import ResumeDownload from './ui/ResumeDownload';

// Small accent icons shown between the name and the resume button (wide screens only).
const SCRIBBLES = [
  { icon: 'chart', size: 26, rot: 0 },
  { icon: 'diamond', size: 22, rot: 0 },
  { icon: 'bank', size: 26, rot: 0 },
];

export default function Header({ onHome }) {
  return (
    <header className="topbar">
      <button type="button" className="topbar__brand" onClick={onHome} aria-label="Back to all tiles">
        <img src={profile.avatar} alt="" width="36" height="36" />
        <span>{profile.name}</span>
      </button>
      <div className="topbar__scribbles" aria-hidden="true">
        {SCRIBBLES.map((s) => (
          <Doodle key={s.icon} name={s.icon} size={s.size} style={{ transform: `rotate(${s.rot}deg)` }} />
        ))}
      </div>
      <ResumeDownload variant="dark">Resume ↓</ResumeDownload>
    </header>
  );
}
