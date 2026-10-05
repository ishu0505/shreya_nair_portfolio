/**
 * FILE: src/sections/ProfileSection.jsx
 * WHAT IT DOES
 *   The About tile: a front-page preview (Preview) and the opened view (Full). Content: src/content/profile.json.
 */
import Card from '../components/ui/Card';
import Tags from '../components/ui/Tags';
import Button from '../components/ui/Button';
import ResumeDownload from '../components/ui/ResumeDownload';
import { profile } from '../data/profile';
import { stickers as allStickers } from '../data/stickers';

function Preview() {
  return (
    <div className="profile-preview">
      <img className="avatar" src={profile.avatar} alt={profile.name} width="88" height="88" />
      <p className="eyebrow">Portfolio of</p>
      <h1>{profile.name}</h1>
      <p className="lead">{profile.role}</p>
      <div className="chips">
        <span className="chip">{profile.location}</span>
        <span className="chip">{profile.school}</span>
        <span className="chip">{profile.status}</span>
      </div>
    </div>
  );
}

function Full() {
  return (
    <div className="stack">
      <div className="intro">
        <img className="avatar" src={profile.avatar} alt={profile.name} width="88" height="88" />
        <div>
          <h3 className="intro__name">{profile.name}</h3>
          <p className="lead">{profile.role}. {profile.lead}.</p>
          <div className="actions">
            <ResumeDownload />
            <Button href={`mailto:${profile.email}`} variant="light">Email me</Button>
          </div>
        </div>
      </div>

      <div className="card-grid">
        <Card tone="blue" label="Currently" title={profile.current.title} icons={['cap']}>
          <p className="muted">{profile.current.text}</p>
        </Card>
        <Card tone="peach" label="Most recent role" title={profile.startup.title} icons={['briefcase']}>
          <p className="muted">{profile.startup.text}</p>
        </Card>
        <Card tone="mint" label="Focus areas">
          <Tags items={profile.focus} />
        </Card>
        <Card tone="pink" label="Tools &amp; platforms">
          <Tags items={profile.toolkit} />
        </Card>
        <Card tone="lilac" label="Certified" title={profile.certificate.title} href={profile.certificate.url || undefined}>
          {profile.certificate.url && <p className="muted small">View certificate ↗</p>}
        </Card>
        <Card tone="white" label="Connect">
          <div className="pill-links">
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
            {profile.links.github && <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {profile.links.medium && <a href={profile.links.medium} target="_blank" rel="noopener noreferrer">Medium</a>}
          </div>
        </Card>
      </div>
    </div>
  );
}

const stickers = allStickers.profile;

export default { id: 'profile', title: 'About', icon: 'diamond', tone: 'cream', stickers, Preview, Full };
