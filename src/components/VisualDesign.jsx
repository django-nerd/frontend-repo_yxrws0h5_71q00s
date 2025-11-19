import Section from './Section'
import { Sparkles, Users, Palette, Trophy, Star, Wand2, Music, PartyPopper, Flame, Crown, Gauge, TimerReset, Megaphone, Shield, Swords, Paintbrush, SwordsIcon } from 'lucide-react'

function Bullet({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-3 text-blue-100/90">
      <Icon className="mt-0.5 h-4 w-4 text-blue-400/90" />
      <span>{children}</span>
    </li>
  )
}

function Chip({ label, className }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${className}`}>{label}</span>
  )
}

function Card({ title, icon: Icon, children, badge, accent }) {
  const accentBorder = accent ? `border-${accent}` : 'border-blue-500/20'
  return (
    <div className={`p-4 rounded-xl border ${accentBorder} bg-slate-900/40`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-blue-300" />}
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        {badge && (
          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20">
            {badge}
          </span>
        )}
      </div>
      <div className="text-sm">
        {children}
      </div>
    </div>
  )
}

function RaritySwatch({ name, className, glow }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-5 w-5 rounded-full border border-white/20 ${className}`} style={{ boxShadow: glow }} />
      <span className="text-blue-100/90">{name}</span>
    </div>
  )
}

const rarityColors = {
  Common: {
    ring: 'ring-slate-300/60',
    border: 'border-slate-300/60',
    glow: '0 0 18px rgba(203,213,225,0.35)'
  },
  Rare: {
    ring: 'ring-sky-400/70',
    border: 'border-sky-400/60',
    glow: '0 0 20px rgba(56,189,248,0.45)'
  },
  Epic: {
    ring: 'ring-violet-500/70',
    border: 'border-violet-500/60',
    glow: '0 0 22px rgba(139,92,246,0.5)'
  },
  Legendary: {
    ring: 'ring-amber-400/70',
    border: 'border-amber-400/60',
    glow: '0 0 22px rgba(251,191,36,0.55)'
  },
  Champion: {
    ring: 'ring-teal-400/70',
    border: 'border-teal-400/60',
    glow: '0 0 24px rgba(45,212,191,0.55)'
  }
}

const teamPalettes = [
  { code: 'CAN', name: 'Canada', colors: ['#D32F2F', '#FFFFFF'] },
  { code: 'USA', name: 'USA', colors: ['#1E3A8A', '#DC2626'] },
  { code: 'SWE', name: 'Sweden', colors: ['#F59E0B', '#2563EB'] },
  { code: 'FIN', name: 'Finland', colors: ['#2563EB', '#FFFFFF'] },
  { code: 'RUS', name: 'Russia', colors: ['#EF4444', '#FFFFFF', '#2563EB'] },
  { code: 'CZE', name: 'Czechia', colors: ['#EF4444', '#FFFFFF', '#2563EB'] },
  { code: 'SUI', name: 'Switzerland', colors: ['#EF4444', '#FFFFFF'] },
]

function TeamPaletteGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {teamPalettes.map((t) => (
        <div key={t.code} className="p-3 rounded-lg border border-blue-500/20 bg-slate-900/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold text-sm">{t.code}</span>
            <Chip label={t.name} className="bg-slate-800/60 text-blue-100 border-blue-500/30" />
          </div>
          <div className="flex items-center gap-2">
            {t.colors.map((c, i) => (
              <span key={i} className="h-5 w-5 rounded-full border border-white/20" style={{ backgroundColor: c }} />
            ))}
            <div className="flex-1 h-2 rounded-full ml-2" style={{
              background: `linear-gradient(90deg, ${t.colors.join(', ')})`
            }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function HudMockups() {
  const cardData = ['Common','Rare','Epic','Legendary']
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Stick-shaped stamina bar */}
      <div className="p-3 rounded-lg bg-slate-800/70 border border-blue-500/20">
        <p className="text-blue-200/80 mb-2 text-sm">Stamina Gauge</p>
        <div className="relative h-6">
          <div className="absolute inset-y-0 left-0 w-10 bg-amber-700/80 rounded-l-full border border-black/20" />
          <div className="absolute inset-y-0 left-8 right-0 rounded-r-full overflow-hidden border border-blue-400/20">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
      {/* Scoreboard */}
      <div className="p-3 rounded-lg bg-slate-800/70 border border-blue-500/20">
        <p className="text-blue-200/80 mb-2 text-sm">Scoreboard</p>
        <div className="flex items-center justify-between rounded-md bg-slate-900/60 border border-white/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="text-white font-semibold">CAN</span>
          </div>
          <div className="text-white text-xl font-bold">2 — 1</div>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">USA</span>
            <span className="h-3 w-3 rounded-full bg-blue-500" />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-blue-200/80">
          <span>PERIOD 3</span>
          <span>01:12</span>
          <span className="inline-flex items-center gap-1"><Shield className="w-3 h-3" /> PP</span>
        </div>
      </div>
      {/* Card hand with rarity frames */}
      <div className="p-3 rounded-lg bg-slate-800/70 border border-blue-500/20 sm:col-span-2">
        <p className="text-blue-200/80 mb-2 text-sm">Card Hand</p>
        <div className="flex gap-3 justify-center">
          {cardData.map((rar, i) => {
            const rc = rarityColors[rar]
            return (
              <div key={i} className={`w-24 h-36 rounded-xl relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 ring-2 ${rc?.ring || ''} border ${rc?.border || 'border-white/10'}`} style={{ boxShadow: rc?.glow }}>
                <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 40%)' }} />
                <div className="absolute top-2 left-2 text-xs text-white/90 font-semibold">{rar}</div>
                <div className="absolute bottom-2 right-2 text-[10px] text-white/80">2 elixir</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function VisualDesign() {
  return (
    <div>
      <Section id="visual" title="Visual Design & UI/UX" subtitle="Art direction, character identity, and game interface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Art Style" icon={Palette} badge="Look & Feel">
            <ul className="space-y-2">
              <Bullet icon={Sparkles}>Vibrant, cartoonish 3D look inspired by arena clash games</Bullet>
              <Bullet icon={Users}>Exaggerated proportions: big helmets, expressive faces</Bullet>
              <Bullet icon={Wand2}>Dynamic ice FX: spray, scratches, puck trails with motion blur</Bullet>
              <Bullet icon={Star}>Particles for goals, checks, and special plays</Bullet>
              <Bullet icon={Music}>Stadium atmosphere: animated crowd, jumbotron, spotlights</Bullet>
            </ul>
          </Card>

          <Card title="Character Design" icon={Users} badge="Roster Identity">
            <ul className="space-y-2">
              <Bullet icon={Crown}>National Teams mapped to palettes: CAN red/white, USA blue/red, SWE yellow/blue, FIN blue/white, RUS red/white/blue, CZE red/white/blue, SUI red/white</Bullet>
              <Bullet icon={Swords}>Archetypes: Enforcer (checks), Sniper (shots), Grinder (stamina), Rookie (wildcard)</Bullet>
              <Bullet icon={Flame}>Unique animations: skating, checks, cellys, ref-argues</Bullet>
              <Bullet icon={Trophy}>Equipment skins: vintage, modern, futuristic</Bullet>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip label="CAN" className="bg-red-600/20 text-red-200 border-red-400/30" />
              <Chip label="USA" className="bg-blue-600/20 text-blue-200 border-blue-400/30" />
              <Chip label="SWE" className="bg-yellow-500/20 text-yellow-200 border-yellow-400/30" />
              <Chip label="FIN" className="bg-blue-500/20 text-blue-200 border-blue-300/40" />
              <Chip label="RUS" className="bg-red-600/20 text-red-200 border-red-400/30" />
              <Chip label="CZE" className="bg-red-600/20 text-red-200 border-red-400/30" />
              <Chip label="SUI" className="bg-red-600/20 text-red-200 border-red-400/30" />
            </div>
          </Card>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Archetype Abilities" icon={SwordsIcon} badge="Gameplay">
            <ul className="space-y-2">
              <Bullet icon={Shield}><b>Enforcer</b>: Body Check (stun), Board Smash (AOE slow), Enrage (damage buff)</Bullet>
              <Bullet icon={Sparkles}><b>Sniper</b>: Slapshot (pierce), One-Timer (burst), Snipe Zone (crit window)</Bullet>
              <Bullet icon={Gauge}><b>Grinder</b>: Hustle (stamina regen), Puck Shield (damage resist), Forecheck (pressure debuff)</Bullet>
              <Bullet icon={Star}><b>Rookie</b>: Lucky Bounce (random buff), Fresh Legs (speed boost), Hype Crowd (team buff)</Bullet>
            </ul>
          </Card>

          <Card title="Rarity System" icon={Paintbrush} badge="Color Identity">
            <div className="grid grid-cols-2 gap-3">
              <RaritySwatch name="Common" className="bg-slate-300" glow="0 0 10px rgba(203,213,225,0.4)" />
              <RaritySwatch name="Rare" className="bg-sky-400" glow="0 0 12px rgba(56,189,248,0.6)" />
              <RaritySwatch name="Epic" className="bg-violet-500" glow="0 0 14px rgba(139,92,246,0.6)" />
              <RaritySwatch name="Legendary" className="bg-amber-400" glow="0 0 14px rgba(251,191,36,0.7)" />
              <RaritySwatch name="Champion" className="bg-teal-400" glow="0 0 16px rgba(45,212,191,0.7)" />
            </div>
          </Card>
        </div>

        <div className="mt-4">
          <Card title="Team Themes" icon={Palette} badge="Palettes">
            <TeamPaletteGrid />
          </Card>
        </div>
      </Section>

      <Section id="ui" title="UI Elements" subtitle="Navigation, combat HUD, and celebration moments">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card title="Main Menu" icon={Trophy}>
            <ul className="space-y-2">
              <Bullet icon={Trophy}>Arena selection progression (replaces trophy road)</Bullet>
              <Bullet icon={Sparkles}>Card collection with foil/holographic effects</Bullet>
              <Bullet icon={Palette}>Pro Shop themed as equipment store</Bullet>
              <Bullet icon={Users}>Locker Room for team management & deck building</Bullet>
              <Bullet icon={Crown}>Trophy Case for achievements and rewards</Bullet>
            </ul>
          </Card>

          <Card title="In-Battle HUD" icon={Gauge}>
            <ul className="space-y-2">
              <Bullet icon={Swords}>Stamina bar shaped like a hockey stick at bottom</Bullet>
              <Bullet icon={Trophy}>Scoreboard at top with period-style layout</Bullet>
              <Bullet icon={Sparkles}>Card hand of 4 with hockey card frames</Bullet>
              <Bullet icon={Megaphone}>Goal horn animation on score</Bullet>
              <Bullet icon={Shield}>Power play indicator when opponent disadvantaged</Bullet>
              <Bullet icon={TimerReset}>Game clock: 3:00 regulation + OT</Bullet>
            </ul>
            <div className="mt-3">
              <HudMockups />
            </div>
          </Card>

          <Card title="Celebrations" icon={PartyPopper}>
            <ul className="space-y-2">
              <Bullet icon={Star}>Goal celebrations with team choreography</Bullet>
              <Bullet icon={Trophy}>Victory scenes: Cup hoist, champagne spray</Bullet>
              <Bullet icon={Users}>Emotes: stick taps, helmet pats, fist bumps</Bullet>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  )
}
