import HockeyDesignPage from './components/HockeyDesignPage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-4">
              <img
                src="/flame-icon.svg"
                alt="Flames"
                className="w-16 h-16 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hockey Arena Clash — Design Overview
            </h1>
            <p className="text-blue-200/80 mt-2">
              Arenas, currencies, rarity, chests, and game modes at a glance
            </p>
          </div>

          <HockeyDesignPage />
        </div>
      </div>
    </div>
  )
}

export default App
