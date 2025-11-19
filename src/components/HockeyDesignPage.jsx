import GameDesign from './GameDesign'
import VisualDesign from './VisualDesign'
import { ArrowUp, Compass, Palette, Layers, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

function TopNav() {
  const items = [
    { id: 'visual', label: 'Visual Design', icon: Palette },
    { id: 'systems', label: 'Systems', icon: Layers },
    { id: 'ui', label: 'UI / HUD', icon: Compass },
  ]
  const [active, setActive] = useState('visual')

  useEffect(() => {
    const handler = () => {
      const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean)
      const inView = sections.find((el) => el.getBoundingClientRect().top <= 120 && el.getBoundingClientRect().bottom >= 120)
      if (inView) setActive(inView.id)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="sticky top-0 z-20 -mx-4 mb-6 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/80 border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto">
        {items.map(({ id, label, icon: Icon }) => (
          <a key={id} href={`#${id}`} className={`inline-flex items-center gap-2 text-blue-100/90 px-3 py-1.5 rounded-full border transition ${active === id ? 'bg-blue-600/20 border-blue-400/40' : 'bg-slate-800/50 border-blue-500/20 hover:bg-slate-800/70'}`}>
            <Icon className={`w-4 h-4 ${active === id ? 'text-blue-300' : 'text-blue-300/80'}`} />
            <span className="text-sm">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-blue-500/20 text-blue-200/70">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">Hockey Game Design — concept showcase</p>
        <div className="flex items-center gap-2">
          <a href="#visual" className="text-sm px-3 py-1.5 rounded-full border border-blue-500/20 bg-slate-800/40 hover:bg-slate-800/60">Visual</a>
          <a href="#ui" className="text-sm px-3 py-1.5 rounded-full border border-blue-500/20 bg-slate-800/40 hover:bg-slate-800/60">UI/HUD</a>
          <a href="#systems" className="text-sm px-3 py-1.5 rounded-full border border-blue-500/20 bg-slate-800/40 hover:bg-slate-800/60">Systems</a>
        </div>
      </div>
    </footer>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a href="#top" aria-label="Back to top" className={`fixed right-4 bottom-4 rounded-full p-3 border transition shadow-lg backdrop-blur ${show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-slate-900/70 border-blue-500/30 hover:bg-slate-800/80`}> 
      <ArrowUp className="w-5 h-5 text-blue-200" />
    </a>
  )
}

export default function HockeyDesignPage() {
  return (
    <div id="top" className="relative min-h-screen">
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
        <Footer />
      </div>
      <BackToTop />
    </div>
  )
}
