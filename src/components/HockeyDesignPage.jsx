import GameDesign from './GameDesign'
import VisualDesign from './VisualDesign'
import { Link as LinkIcon, Compass, Palette, Layers } from 'lucide-react'

function TopNav() {
  const items = [
    { id: 'visual', label: 'Visual Design', icon: Palette },
    { id: 'systems', label: 'Systems', icon: Layers },
    { id: 'ui', label: 'UI / HUD', icon: Compass },
  ]
  return (
    <nav className="sticky top-0 z-20 -mx-4 mb-6 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/80 border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto">
        {items.map(({ id, label, icon: Icon }) => (
          <a key={id} href={`#${id}`} className="inline-flex items-center gap-2 text-blue-100/90 px-3 py-1.5 rounded-full border border-blue-500/20 bg-slate-800/50 hover:bg-slate-800/70 transition">
            <Icon className="w-4 h-4 text-blue-300" />
            <span className="text-sm">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default function HockeyDesignPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Hockey Game Design</h1>
          <p className="text-blue-200/80 mt-2">Art direction, systems, and modes</p>
        </div>
        <TopNav />
        <div className="space-y-8">
          <VisualDesign />
          <div id="systems">
            <GameDesign />
          </div>
        </div>
      </div>
    </div>
  )
}
