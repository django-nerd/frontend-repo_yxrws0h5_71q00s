import GameDesign from './GameDesign'
import Section from './Section'

export default function HockeyDesignPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Hockey Game Design</h1>
          <p className="text-blue-200/80 mt-2">A concise overview of arenas, currencies, rarity, chests, and modes</p>
        </div>
        <GameDesign />
      </div>
    </div>
  )
}
