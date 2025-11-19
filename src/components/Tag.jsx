export default function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-500/30">
      {label}
    </span>
  )
}
