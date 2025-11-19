import Section from './Section'
import { Sparkles, Users, Palette, Trophy, Star, Wand2, Music, PartyPopper, Flame, Crown, Gauge, TimerReset, Megaphone, Shield, Swords, Flag, Paintbrush, Radar, Circle, TrophyIcon, SwordsIcon } from 'lucide-react'

function Bullet({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-3 text-blue-100/90">
      <Icon className="mt-0.5 h-4 w-4 text-blue-400/90" />
      <span>{children}</span>
    </li>
  )
}

function Card({ title, icon: Icon, children, badge }) {
  return (
    <div className="p-4 rounded-xl border border-blue-500/20 bg-slate-900/40">
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

function HudMockups() {
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
      {/* Card hand */}
      <div className="p-3 rounded-lg bg-slate-800/70 border border-blue-500/20 sm:col-span-2">
        <p className="text-blue-200/80 mb-2 text-sm">Card Hand</p>
        <div className="flex gap-3 justify-center">
          {['Common','Rare','Epic','Legendary'].map((rar, i) => (
            <div key={i} className="w-24 h-36 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 40%)' }} />
              <div className="absolute top-2 left-2 text-xs text-white/90 font-semibold">{rar}</div>
              <div className="absolute bottom-2 right-2 text-[10px] text-white/80">2 elixir</div>
            </div>
          ))}
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
