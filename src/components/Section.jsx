/* Reusable section wrapper with subtle in-view motion */
import { motion } from 'framer-motion'

export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="relative mb-10 scroll-mt-24">
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-blue-200/80 mt-1 text-sm md:text-base">{subtitle}</p>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 md:p-6"
      >
        {children}
      </motion.div>
    </section>
  )
}
