/**
 * FILE: src/sections/HobbiesSection.jsx
 * WHAT IT DOES
 *   The Beyond-work tile (interests, sport, volunteering): a front-page preview (Preview) and the opened view (Full). Content: src/content/hobbies.json.
 */
import Card from '../components/ui/Card';
import Doodle from '../components/doodles/Doodle';
import { hobbies } from '../data/hobbies';
import { stickers as allStickers } from '../data/stickers';

function Preview() {
  const row = ['mountain', 'trophy', 'book', 'globe', 'heart'];
  return (
    <div className="teaser">
      <div className="doodle-row" aria-hidden="true">
        {row.map((name, i) => (
          <Doodle key={name} name={name} size={40} />
        ))}
      </div>
      <p className="label">Beyond work</p>
      <h2>Interests &amp; achievements</h2>
    </div>
  );
}

function Full() {
  return (
    <div className="card-grid">
      {hobbies.map((h) => (
        <Card key={h.id} tone={h.tone} icons={h.icons} iconSize={58}>
          <h3 className="card__title">{h.title}</h3>
          <p className="muted small">{h.text}</p>
        </Card>
      ))}
    </div>
  );
}

const stickers = allStickers.hobbies;

export default { id: 'hobbies', title: 'Beyond work', icon: 'mountain', tone: 'mint', stickers, Preview, Full };
