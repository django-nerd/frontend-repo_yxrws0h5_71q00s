import { useEffect, useMemo, useState } from 'react'
import Section from './Section'
import { Sparkles, PlusCircle, Image as ImageIcon, Tag, Users, PackageOpen } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

const rarities = ['Common','Rare','Epic','Legendary','Champion']

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs text-blue-200/80">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )
}

function Input(props) {
  return <input {...props} className={`w-full rounded-md bg-slate-900/70 border border-blue-500/20 px-3 py-2 text-sm text-blue-50 placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${props.className||''}`} />
}

function Textarea(props) {
  return <textarea {...props} className={`w-full rounded-md bg-slate-900/70 border border-blue-500/20 px-3 py-2 text-sm text-blue-50 placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${props.className||''}`} />
}

function Select({ options, ...props }) {
  return (
    <select {...props} className="w-full rounded-md bg-slate-900/70 border border-blue-500/20 px-3 py-2 text-sm text-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
      <option value="" className="bg-slate-900">Select…</option>
      {options.map((o) => (
        <option key={o} value={o} className="bg-slate-900">{o}</option>
      ))}
    </select>
  )
}

function Badge({ children }) {
  return <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border border-blue-500/20 bg-slate-800/60 text-blue-100">{children}</span>
}

function RarityBadge({ rarity }) {
  const colors = {
    Common: 'bg-slate-700/60 border-slate-400/30 text-slate-200',
    Rare: 'bg-sky-600/20 border-sky-400/40 text-sky-200',
    Epic: 'bg-violet-600/20 border-violet-400/40 text-violet-200',
    Legendary: 'bg-amber-600/20 border-amber-400/40 text-amber-200',
    Champion: 'bg-teal-600/20 border-teal-400/40 text-teal-200',
  }
  return <span className={`text-[11px] px-2 py-0.5 rounded-full border ${colors[rarity]||'border-blue-500/20 text-blue-100 bg-slate-800/60'}`}>{rarity}</span>
}

function useApiList(path) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const load = async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch(`${API_BASE}${path}`)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setError('Failed to load')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [path])
  return { items, loading, error, reload: load }
}

function CharacterForm({ onCreated }) {
  const [form, setForm] = useState({ name: '', rarity: '', nation_code: '', role: '', bio: '', image_url: '', tags: '', palette_home: '', palette_away: '', speed: '', strength: '', aim: '' })
  const [submitting, setSubmitting] = useState(false)
  const canSubmit = useMemo(() => form.name && form.rarity, [form])

  const submit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    const payload = {
      name: form.name,
      rarity: form.rarity,
      nation_code: form.nation_code || undefined,
      role: form.role || undefined,
      bio: form.bio || undefined,
      image_url: form.image_url || undefined,
      tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
      palette: (form.palette_home || form.palette_away) ? { home: form.palette_home || '', away: form.palette_away || '' } : undefined,
      stats: (form.speed || form.strength || form.aim) ? { speed: Number(form.speed||0), strength: Number(form.strength||0), aim: Number(form.aim||0) } : undefined,
    }
    try {
      const res = await fetch(`${API_BASE}/api/characters`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('bad')
      setForm({ name: '', rarity: '', nation_code: '', role: '', bio: '', image_url: '', tags: '', palette_home: '', palette_away: '', speed: '', strength: '', aim: '' })
      onCreated && onCreated()
    } catch (e) {
      // noop basic
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Field label="Name"><Input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="e.g., Enforcer Kane" /></Field>
      <Field label="Rarity"><Select options={rarities} value={form.rarity} onChange={e=>setForm(f=>({...f,rarity:e.target.value}))} /></Field>
      <Field label="Nation Code"><Input value={form.nation_code} onChange={e=>setForm(f=>({...f,nation_code:e.target.value.toUpperCase()}))} placeholder="CAN, USA, SWE..." /></Field>
      <Field label="Role"><Input value={form.role} onChange={e=>setForm(f=>({...f,role:e.target.value}))} placeholder="Enforcer, Sniper..." /></Field>
      <Field label="Image URL"><Input value={form.image_url} onChange={e=>setForm(f=>({...f,image_url:e.target.value}))} placeholder="https://..." /></Field>
      <Field label="Tags (comma)"><Input value={form.tags} onChange={e=>setForm(f=>({...f,tags:e.target.value}))} placeholder="power, captain, retro" /></Field>
      <Field label="Palette Home (hex)"><Input value={form.palette_home} onChange={e=>setForm(f=>({...f,palette_home:e.target.value}))} placeholder="#D32F2F" /></Field>
      <Field label="Palette Away (hex)"><Input value={form.palette_away} onChange={e=>setForm(f=>({...f,palette_away:e.target.value}))} placeholder="#FFFFFF" /></Field>
      <div className="md:col-span-2 grid grid-cols-3 gap-3">
        <Field label="Speed"><Input type="number" min="0" max="100" value={form.speed} onChange={e=>setForm(f=>({...f,speed:e.target.value}))} placeholder="0-100" /></Field>
        <Field label="Strength"><Input type="number" min="0" max="100" value={form.strength} onChange={e=>setForm(f=>({...f,strength:e.target.value}))} placeholder="0-100" /></Field>
        <Field label="Aim"><Input type="number" min="0" max="100" value={form.aim} onChange={e=>setForm(f=>({...f,aim:e.target.value}))} placeholder="0-100" /></Field>
      </div>
      <Field label="Bio" className="md:col-span-2"><Textarea rows={3} value={form.bio} onChange={e=>setForm(f=>({...f,bio:e.target.value}))} placeholder="Short character lore..." /></Field>

      <div className="md:col-span-2 flex items-center gap-3">
        <button disabled={!canSubmit||submitting} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600/80 hover:bg-blue-600 text-white text-sm disabled:opacity-50"><PlusCircle className="w-4 h-4"/>Create Character</button>
        <Badge><Users className="w-3 h-3"/> Character</Badge>
      </div>
    </form>
  )
}

function ItemForm({ onCreated }) {
  const [form, setForm] = useState({ name: '', type: '', rarity: '', effect: '', image_url: '', tags: '' })
  const [submitting, setSubmitting] = useState(false)
  const canSubmit = form.name && form.type && form.rarity

  const submit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    const payload = {
      name: form.name,
      type: form.type,
      rarity: form.rarity,
      effect: form.effect || undefined,
      image_url: form.image_url || undefined,
      tags: form.tags ? form.tags.split(',').map(t=>t.trim()).filter(Boolean) : [],
    }
    try {
      const res = await fetch(`${API_BASE}/api/items`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('bad')
      setForm({ name: '', type: '', rarity: '', effect: '', image_url: '', tags: '' })
      onCreated && onCreated()
    } catch (e) {
      // noop
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Field label="Name"><Input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="e.g., Carbon Stick" /></Field>
      <Field label="Type"><Input value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))} placeholder="Stick, Helmet, Boost..." /></Field>
      <Field label="Rarity"><Select options={rarities} value={form.rarity} onChange={e=>setForm(f=>({...f,rarity:e.target.value}))} /></Field>
      <Field label="Image URL"><Input value={form.image_url} onChange={e=>setForm(f=>({...f,image_url:e.target.value}))} placeholder="https://..." /></Field>
      <Field label="Tags (comma)"><Input value={form.tags} onChange={e=>setForm(f=>({...f,tags:e.target.value}))} placeholder="speed, retro, foil" /></Field>
      <Field label="Effect" className="md:col-span-2"><Textarea rows={3} value={form.effect} onChange={e=>setForm(f=>({...f,effect:e.target.value}))} placeholder="What does this item do?" /></Field>

      <div className="md:col-span-2 flex items-center gap-3">
        <button disabled={!canSubmit||submitting} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-teal-600/80 hover:bg-teal-600 text-white text-sm disabled:opacity-50"><PlusCircle className="w-4 h-4"/>Create Item</button>
        <Badge><PackageOpen className="w-3 h-3"/> Item</Badge>
      </div>
    </form>
  )
}

function Grid({ items, type }) {
  if (!items?.length) return <p className="text-blue-200/70 text-sm">No {type} yet — add some using the form above.</p>
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((it) => (
        <div key={it.id} className="p-3 rounded-lg bg-slate-900/50 border border-blue-500/20">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {(type==='characters') ? <Users className="w-4 h-4 text-blue-300"/> : <PackageOpen className="w-4 h-4 text-teal-300"/>}
              <h4 className="text-white font-semibold text-sm truncate max-w-[10rem]" title={it.name}>{it.name}</h4>
            </div>
            <RarityBadge rarity={it.rarity} />
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-200/70">
            {it.image_url ? <ImageIcon className="w-3.5 h-3.5"/> : null}
            {it.nation_code ? <Badge>{it.nation_code}</Badge> : null}
            {it.type ? <Badge>{it.type}</Badge> : null}
            {Array.isArray(it.tags) && it.tags.slice(0,2).map((t,idx)=>(<span key={idx} className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-slate-800/60 border border-blue-500/20"><Tag className="w-3 h-3"/>{t}</span>))}
          </div>
          {it.bio && <p className="mt-2 text-xs text-blue-200/80 line-clamp-3">{it.bio}</p>}
        </div>
      ))}
    </div>
  )
}

export default function ArtLibrary() {
  const [tab, setTab] = useState('characters')
  const chars = useApiList('/api/characters')
  const items = useApiList('/api/items')

  const reload = async () => {
    if (tab==='characters') await chars.reload(); else await items.reload()
  }

  return (
    <Section id="library" title="Art Library" subtitle="Create and curate characters and items">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={()=>setTab('characters')} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${tab==='characters' ? 'bg-blue-600/20 border-blue-400/40 text-blue-100' : 'bg-slate-800/60 border-blue-500/20 text-blue-200/90'}`}>
          <Users className="w-4 h-4"/> Characters
        </button>
        <button onClick={()=>setTab('items')} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${tab==='items' ? 'bg-teal-600/20 border-teal-400/40 text-blue-100' : 'bg-slate-800/60 border-blue-500/20 text-blue-200/90'}`}>
          <PackageOpen className="w-4 h-4"/> Items
        </button>
      </div>

      {tab==='characters' ? (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-300"/>
              <h3 className="text-white font-semibold">New Character</h3>
            </div>
            <CharacterForm onCreated={chars.reload} />
          </div>
          <Grid items={chars.items} type="characters" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-teal-300"/>
              <h3 className="text-white font-semibold">New Item</h3>
            </div>
            <ItemForm onCreated={items.reload} />
          </div>
          <Grid items={items.items} type="items" />
        </div>
      )}
    </Section>
  )
}
