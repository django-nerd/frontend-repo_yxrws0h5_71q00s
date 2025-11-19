import Section from './Section'
import { Sparkles, Users, Palette, Trophy, Star, Wand2, Music, PartyPopper, Flame, Crown, Gauge, TimerReset, Megaphone, Shield, Swords } from 'lucide-react'

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

export default function VisualDesign() {
  return (
    <div>
      <Section title="Visual Design & UI/UX" subtitle="Art direction, character identity, and game interface">
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
              <Bullet icon={Crown}>National Teams: Canada, USA, Russia, Sweden, Finland, Czech, Switzerland</Bullet>
              <Bullet icon={Swords}>Archetypes: Enforcer, Sniper, Grinder, Rookie</Bullet>
              <Bullet icon={Flame}>Unique animations: skating, checks, cellys, ref-argues</Bullet>
              <Bullet icon={Trophy}>Equipment skins: vintage, modern, futuristic</Bullet>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="UI Elements" subtitle="Navigation, combat HUD, and celebration moments">
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
