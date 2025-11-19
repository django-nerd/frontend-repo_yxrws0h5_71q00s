/* Reusable section wrapper */
export default function Section({ title, subtitle, children }) {
  return (
    <section className="relative mb-10">
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-blue-200/80 mt-1 text-sm md:text-base">{subtitle}</p>
        )}
      </div>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 md:p-6">
        {children}
      </div>
    </section>
  )
}
