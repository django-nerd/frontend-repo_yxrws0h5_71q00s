import Section from './Section'
import Tag from './Tag'
import Pill from './Pill'

const tiers = [
  { range: '1000-1600', name: 'Minor League', desc: 'AHL-style arena' },
  { range: '1600-2300', name: 'NHL Debut', desc: 'Entry-level NHL arena' },
  { range: '2300-3000', name: 'Original Six', desc: 'Classic historic arena' },
  { range: '3000-4000', name: 'Modern Marvel', desc: 'State-of-the-art facility' },
  { range: '4000-5500', name: 'All-Star Game', desc: 'Exhibition showcase' },
  { range: '5500+', name: 'Stanley Cup Finals', desc: 'Legendary championship venue' },
]

const currencies = [
  { name: 'Pucks', note: 'Common currency' },
  { name: 'Hockey Cards', note: 'Chest rewards with cards/resources' },
  { name: 'Stanley Coins', note: 'Premium IAP currency' },
  { name: 'Trade Tokens', note: 'For clan trading' },
  { name: 'Championship Season', note: 'Season Pass premium track' },
]

const rarity = [
  { name: 'Common', color: 'text-white', levels: '1-13' },
  { name: 'Rare', color: 'text-blue-300', levels: '3-11' },
  { name: 'Epic', color: 'text-purple-300', levels: '6-8' },
  { name: 'Legendary', color: 'text-amber-300', levels: '9-5' },
  { name: 'Champion', color: 'text-slate-100', levels: 'Special max variants' },
]

const chests = [
  { name: 'Wooden Stick Chest', note: 'Common • 3h unlock' },
  { name: 'Silver Puck Chest', note: 'Rare • 8h unlock' },
  { name: 'Golden Goal Chest', note: 'Epic • 12h unlock' },
  { name: 'Stanley Cup Chest', note: 'Legendary • 24h unlock' },
  { name: 'Overtime Victory Chest', note: 'Special • Instant after clutch wins' },
]

const modes = [
  { title: '1v1 Regulation', desc: '3-min, Best of 1 period, trophies based on outcome' },
  { title: '2v2 Line Brawl', desc: 'Coordinate with partner, shared stamina, double the chaos' },
  { title: 'Tournament Mode: Playoff Bracket', desc: '8-player single elimination, free/premium entry, top prizes' },
  { title: 'Special Events', desc: 'Hat Trick Challenge, PK Survival, All-Star Skills, Draft Mode' },
  { title: 'Clans: Hockey Clubs', desc: 'Club Wars, scrimmages, donations, chat' },
]

function Grid({ items, render }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(render)}
    </div>
  )
}

export default function GameDesign() {
  return (
    <div>
      <Section title="Arena Progression" subtitle="Trophy ranges and arenas">
        <Grid
          items={tiers}
          render={(t) => (
            <div key={t.name} className="p-4 rounded-xl border border-blue-500/20 bg-slate-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <p className="text-blue-200/70 text-sm">{t.desc}</p>
                </div>
                <Pill>{t.range} Trophies</Pill>
              </div>
            </div>
          )}
        />
      </Section>

      <Section title="Currency System" subtitle="Soft, premium, and progression"> 
        <Grid
          items={currencies}
          render={(c) => (
            <div key={c.name} className="p-4 rounded-xl border border-blue-500/20 bg-slate-900/40 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{c.name}</h3>
                <p className="text-blue-200/70 text-sm">{c.note}</p>
              </div>
              <Tag label="Economy" />
            </div>
          )}
        />
      </Section>

      <Section title="Card Rarity & Upgrades" subtitle="Level bands and color identity">
        <Grid
          items={rarity}
          render={(r) => (
            <div key={r.name} className="p-4 rounded-xl border border-blue-500/20 bg-slate-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`font-semibold ${r.color}`}>{r.name}</h3>
                  <p className="text-blue-200/70 text-sm">Levels: {r.levels}</p>
                </div>
                <Tag label="Rarity" />
              </div>
            </div>
          )}
        />
      </Section>

      <Section title="Chest Types" subtitle="Unlock timers and rewards">
        <Grid
          items={chests}
          render={(ch) => (
            <div key={ch.name} className="p-4 rounded-xl border border-blue-500/20 bg-slate-900/40">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{ch.name}</h3>
                  <p className="text-blue-200/70 text-sm">{ch.note}</p>
                </div>
                <Tag label="Chest" />
              </div>
            </div>
          )}
        />
      </Section>

      <Section title="Game Modes" subtitle="Core, team, tournaments, events, and clans">
        <div className="space-y-3">
          {modes.map((m) => (
            <div key={m.title} className="p-4 rounded-xl border border-blue-500/20 bg-slate-900/40">
              <h3 className="text-white font-semibold">{m.title}</h3>
              <p className="text-blue-200/70 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
