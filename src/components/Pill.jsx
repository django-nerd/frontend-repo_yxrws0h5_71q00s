export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-700/60 text-blue-200 border border-slate-600/50">
      {children}
    </span>
  )
}
