import GameDesign from './GameDesign'
import VisualDesign from './VisualDesign'

export default function HockeyDesignPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Hockey Game Design</h1>
          <p className="text-blue-200/80 mt-2">Art direction, systems, and modes</p>
        </div>
        <div className="space-y-8">
          <VisualDesign />
          <GameDesign />
        </div>
      </div>
    </div>
  )
}
