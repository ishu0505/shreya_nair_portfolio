/**
 * FILE: src/sections/ContactSection.jsx
 * WHAT IT DOES
 *   The Contact tile: a front-page preview (Preview) and the opened view (Full).
 */
import Card from '../components/ui/Card';
import { profile } from '../data/profile';
import { stickers as allStickers } from '../data/stickers';

function Preview() {
  return (
    <div className="teaser">
      <p className="label">Contact</p>
      <h2>Get in touch</h2>
      <p className="muted small">{profile.email}</p>
    </div>
  );
}

function Full() {
  const { links } = profile;
  return (
    <div className="card-grid">
      <Card tone="yellow" label="Email" title={`${profile.email} ↗`} href={`mailto:${profile.email}`} icons={['speech']} />
      {profile.phone && <Card tone="blue" label="Phone" title={`${profile.phone} ↗`} href={`tel:${profile.phone.replace(/\s/g, '')}`} />}
      <Card tone="lilac" label="LinkedIn" title="Shreya Nair ↗" href={links.linkedin} />
      {links.form && <Card tone="white" label="Contact form" title="Send a message ↗" href={links.form} />}
      {links.github && <Card tone="white" label="GitHub" title="GitHub ↗" href={links.github} />}
      {links.medium && <Card tone="mint" label="Medium" title="Medium ↗" href={links.medium} />}
    </div>
  );
}

const stickers = allStickers.contact;

export default { id: 'contact', title: 'Contact', icon: 'speech', tone: 'pink', stickers, Preview, Full };
