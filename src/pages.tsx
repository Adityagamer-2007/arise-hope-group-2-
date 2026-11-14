import { useState, FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MessageCircle, Leaf, Zap, Recycle, GraduationCap } from 'lucide-react'
import { sectors, synergies, roadmap, advantages, values, contact } from './data'
import { Reveal, Photo, Ring, PageHead, useSEO, Tilt, Orb, icons } from './components'

const CTA = () => <section className="dark cta"><Ring /><div className="wrap"><Reveal><h2>LET'S BUILD A BETTER FUTURE, TOGETHER.</h2><Link to="/contact" className="btn orange">Start a Conversation <ArrowRight size={16} /></Link></Reveal></div></section>

export function Home() {
  useSEO('South African Holding Company', 'Arise Hope Group: a diversified South African holding company across engineering, resources, agriculture, property, automotive, petroleum, finance and technology.')
  return <>
    <section className="hero dark"><Photo name="hero" className="bg" /><div className="shade" /><div className="grid-lines" /><Ring /><Orb />
      <div className="wrap"><p className="kicker">Arise Hope Group</p><h1>BUILDING OPPORTUNITIES. POWERING PROGRESS.</h1>
        <p className="lead">An integrated group of specialised businesses driving sustainable growth, innovation and long-term value across Southern Africa.</p>
        <div className="row"><Link to="/industries" className="btn orange">Explore Our Group</Link><Link to="/contact" className="btn ghost">Partner With Us</Link></div></div></section>
    <section className="sec"><div className="wrap two"><Reveal><p className="kicker">Introduction</p><h2>A GROUP UNITED BY PURPOSE. POWERED BY POSSIBILITIES.</h2></Reveal>
      <Reveal><p>Arise Hope Group is a diversified holding company, founded in 2020, that brings specialised businesses together through unified governance, strategic investment and operational excellence.</p><p>Its portfolio spans engineering, resources, agriculture, real estate, automotive services, petroleum distribution, finance and technology.</p></Reveal></div></section>
    <section className="sec soft"><div className="wrap"><Reveal><p className="kicker">Group Overview</p><h2>Nine sectors. One group.</h2></Reveal>
      <div className="grid3">{sectors.map((s, i) => <Reveal key={s.slug}><Tilt><Link to={`/industries/${s.slug}`} className="card">{(() => { const I = icons[s.slug]; return <I className="ico" size={30} /> })()}<span className="num">{String(i + 1).padStart(2, '0')}</span><h3>{s.name}</h3><p>{s.desc}</p></Link></Tilt></Reveal>)}</div></div></section>
    <section className="sec"><div className="wrap"><Reveal><p className="kicker">Our Philosophy</p><h2>Three pillars</h2></Reveal>
      <div className="grid3">{[['Strategic Integration', 'Specialised businesses aligned under unified governance and strategic investment.'], ['Operational Excellence', 'Deep sector expertise supported by central finance, legal, compliance and HR functions.'], ['Sustainable Growth', 'Resilience, scalability and responsible practice across every operation.']].map(([t, d]) => <Reveal key={t}><Tilt><div className="pillar"><h3>{t}</h3><p>{d}</p></div></Tilt></Reveal>)}</div></div></section>
    <section className="sec dark"><div className="wrap"><Reveal><p className="kicker">Our Industries</p><h2>Across the value chain</h2></Reveal>
      <div className="grid3">{sectors.slice(0, 6).map(s => <Link key={s.slug} to={`/industries/${s.slug}`} className="tile"><Photo name={s.slug} /><div className="shade" /><h3>{s.name}</h3></Link>)}</div>
      <Link to="/industries" className="btn ghost">View all nine sectors</Link></div></section>
    <section className="sec"><div className="wrap"><Reveal><p className="kicker">Strategic Synergies</p><h2>Capabilities that compound</h2></Reveal><Synergies /><Link to="/business-model" className="btn navy">Our business model</Link></div></section>
    <section className="sec soft"><div className="wrap two"><Reveal><p className="kicker">Sustainability</p><h2>Targets we are working towards</h2></Reveal><Reveal><p>Our ambition is to supply 40% of group electricity needs from renewable energy by 2027, and to pursue zero waste in manufacturing and agricultural operations by 2030.</p><Link to="/sustainability" className="btn navy">Our commitments</Link></Reveal></div></section>
    <section className="sec"><div className="wrap two"><Reveal><p className="kicker">Future Vision</p><h2>A globally recognised ecosystem</h2></Reveal><Reveal><p>We aim to transform industries and uplift economies by integrating expertise, innovation and responsible business practices.</p><Link to="/roadmap" className="btn navy">Future roadmap</Link></Reveal></div></section>
    <CTA /></>
}
function Synergies() {
  const [a, setA] = useState(0)
  return <div className="syn"><div className="hub"><Ring /><span>Arise Hope Group</span></div>
    <div className="synlist">{synergies.map(([t, d], i) => <button key={t} className={i === a ? 'on' : ''} onClick={() => setA(i)} onMouseEnter={() => setA(i)}><b>{t}</b>{i === a && <span>{d}</span>}</button>)}</div></div>
}
export function About() {
  useSEO('About Us', 'About Arise Hope Group: mission, vision, values and executive summary.')
  return <><PageHead kicker="About Us" title="One strategic umbrella. Nine specialised businesses." text="Founded in 2020, Arise Hope Group unites specialised businesses to deliver comprehensive solutions and lasting value for stakeholders." />
    <section className="sec"><div className="wrap two"><Reveal><h2>Executive summary</h2></Reveal><Reveal><p>Arise Hope Group oversees nine industry-leading subsidiaries, each with dedicated leadership and P&L accountability.</p><p>By combining deep sector expertise with centralised support functions in finance, legal, compliance and human resources, the group aims to achieve resilience, scalability and continuous innovation.</p></Reveal></div></section>
    <section className="sec soft"><div className="wrap two"><Reveal><p className="kicker">Mission</p><p className="big">To empower specialised businesses through unified governance, operational excellence, and strategic investment, delivering sustainable value to clients, communities, and investors.</p></Reveal>
      <Reveal><p className="kicker">Vision</p><p className="big">To be a globally recognised ecosystem that transforms industries and uplifts economies by integrating expertise, innovation, and responsible business practices.</p></Reveal></div></section>
    <section className="sec"><div className="wrap"><Reveal><h2>Core values</h2></Reveal><div className="grid2">{values.map((v, i) => <Reveal key={v}><div className="pillar"><span className="num">0{i + 1}</span><p>{v}</p></div></Reveal>)}</div></div></section><CTA /></>
}
export function Industries() {
  useSEO('Our Industries', 'Construction, civil engineering, mining and energy, agriculture, property, automotive, petroleum, financial services and IT.')
  return <><PageHead kicker="Our Industries" title="Nine sectors, one integrated group" />
    <section className="sec"><div className="wrap grid3">{sectors.map(s => <Reveal key={s.slug}><Link to={`/industries/${s.slug}`} className="tile tall"><Photo name={s.slug} /><div className="shade" /><div><h3>{s.name}</h3><p>{s.desc}</p></div></Link></Reveal>)}</div></section><CTA /></>
}
export function Industry() {
  const { slug } = useParams(); const s = sectors.find(x => x.slug === slug)
  useSEO(s?.name ?? 'Industry', s?.desc ?? '')
  if (!s) return <NotFound />
  return <><PageHead kicker="Our Industries" title={s.name} text={s.desc} />
    <section className="sec"><div className="wrap two"><Photo name={s.slug} className="big" /><Reveal><h2>Part of an integrated group</h2><p>{s.name} operates within Arise Hope Group's unified governance framework, with dedicated leadership, P&L accountability and access to central finance, legal, compliance and human resources support.</p><p>To discuss opportunities in this sector, please get in touch.</p><Link to="/contact" className="btn orange">Partner With Us</Link></Reveal></div></section>
    <section className="sec soft"><div className="wrap"><h2>Other sectors</h2><div className="chips">{sectors.filter(x => x.slug !== s.slug).map(x => <Link key={x.slug} to={`/industries/${x.slug}`}>{x.name}</Link>)}</div></div></section></>
}
export function Model() {
  useSEO('Our Business Model', 'How Arise Hope Group integrates its sectors through strategic synergies.')
  return <><PageHead kicker="Our Business Model" title="Integration creates advantage" text="Nine subsidiaries with dedicated leadership, supported by centralised group functions." />
    <section className="sec"><div className="wrap"><Reveal><h2>Strategic synergies</h2></Reveal><Synergies /></div></section>
    <section className="sec soft"><div className="wrap"><Reveal><h2>Market presence & competitive advantage</h2><p>The group has a significant presence in Southern Africa, serving government entities, multinational corporations and local enterprises.</p></Reveal>
      <div className="grid3">{advantages.map(a => <Reveal key={a}><div className="pillar"><p>{a}</p></div></Reveal>)}</div></div></section><CTA /></>
}
export function Sustainability() {
  useSEO('Sustainability', 'Arise Hope Group ESG targets: renewable energy by 2027, zero-waste ambition by 2030.')
  return <><PageHead kicker="Sustainability" title="Responsible growth" text="Our ESG initiatives are aligned with the United Nations Sustainable Development Goals." />
    <section className="sec dark"><div className="wrap grid2"><Reveal><div className="stat"><b>40%</b><span>Target: group electricity needs from renewable energy by 2027</span></div></Reveal><Reveal><div className="stat"><b>2030</b><span>Ambition: zero waste in manufacturing and agricultural operations</span></div></Reveal></div>
      <p className="wrap note">These are targets and ambitions, not achieved results.</p></section>
    <section className="sec"><div className="wrap"><div className="grid3">{[[Zap, 'Renewable energy', 'Working towards 40% renewable supply by 2027.'], [GraduationCap, 'Community development', 'Programmes in education, healthcare and vocational training.'], [Recycle, 'Zero-waste ambition', 'Manufacturing and agricultural operations by 2030.'], [Leaf, 'Transparent reporting', 'Annual sustainability reporting.']].map(([I, t, d]: any) => <Reveal key={t}><div className="pillar"><I /><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div></section><CTA /></>
}
export function Roadmap() {
  useSEO('Future Roadmap', 'Strategic priorities of Arise Hope Group.')
  return <><PageHead kicker="Future Roadmap" title="Strategic priorities" text="Priorities guiding the group's next phase of growth." />
    <section className="sec"><div className="wrap tl">{roadmap.map((r, i) => <Reveal key={r}><div className="tli"><span className="dot">{i + 1}</span><p>{r}</p></div></Reveal>)}</div></section><CTA /></>
}
export function Governance() {
  useSEO('Corporate Governance', 'Board, committees and executive leadership structure.')
  const exec = ['Chief Executive Officer', 'Chief Operating Officer', 'Chief Financial Officer', 'Group Head of Strategy & M&A', 'Group Head of Sustainability & ESG']
  return <><PageHead kicker="Corporate Governance" title="Clear governance. Clear accountability." />
    <section className="sec"><div className="wrap org">
      <div className="node top">Independent Board<small>Chaired by the founder</small></div><div className="vl" />
      <div className="row c">{['Audit Committee', 'Risk Committee', 'Remuneration Committee'].map(c => <div key={c} className="node">{c}</div>)}</div><div className="vl" />
      <div className="row c wrapr">{exec.map(c => <div key={c} className="node lt">{c}</div>)}</div><div className="vl" />
      <div className="node top">Managing Directors<small>One for each of the nine subsidiaries</small></div></div></section><CTA /></>
}
const EP = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
export function Contact() {
  useSEO('Contact Us', 'Contact Arise Hope Group, Cosmo City, Johannesburg.')
  const [st, setSt] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle'); const [errs, setErrs] = useState<Record<string, string>>({}); const [msg, setMsg] = useState('')
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = e.currentTarget; const d = Object.fromEntries(new FormData(f)) as Record<string, string>; const er: Record<string, string> = {}
    if (!d.name?.trim()) er.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(d.email || '')) er.email = 'Please enter a valid email address.'
    if (!d.subject?.trim()) er.subject = 'Please enter a subject.'
    if ((d.message || '').trim().length < 10) er.message = 'Please enter a message of at least 10 characters.'
    setErrs(er); if (Object.keys(er).length) return
    if (!EP) { setSt('err'); setMsg(`The online form is not yet connected. Please email ${contact.info} directly.`); return }
    setSt('sending')
    try { const r = await fetch(EP, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
      if (!r.ok) throw new Error(); setSt('ok'); f.reset() } catch { setSt('err'); setMsg(`Your enquiry could not be sent. Please email ${contact.info} or call ${contact.tel}.`) }
  }
  const F = (n: string, l: string, t = 'text') => <label>{l}<input name={n} type={t} aria-invalid={!!errs[n]} />{errs[n] && <em>{errs[n]}</em>}</label>
  return <><PageHead kicker="Contact Us" title="Start a conversation" />
    <section className="sec"><div className="wrap two">
      <form onSubmit={submit} noValidate>{F('name', 'Name')}{F('email', 'Email', 'email')}{F('phone', 'Phone', 'tel')}{F('company', 'Company')}{F('subject', 'Subject')}
        <label>Message<textarea name="message" rows={5} aria-invalid={!!errs.message} />{errs.message && <em>{errs.message}</em>}</label>
        <button className="btn orange" disabled={st === 'sending'}>{st === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
        {st === 'ok' && <p role="status" className="okmsg">Thank you. Your enquiry has been received.</p>}{st === 'err' && <p role="alert" className="errmsg">{msg}</p>}</form>
      <div className="info"><h3>Headquarters</h3><p>Arise Hope Group<br />{contact.addr.map(a => <span key={a}>{a}<br /></span>)}</p>
        <a href={`tel:${contact.tel.replace(/\s/g, '')}`}><Phone size={16} /> {contact.tel}</a><a href={`tel:${contact.cell.replace(/\s/g, '')}`}><Phone size={16} /> {contact.cell}</a>
        <a href={`mailto:${contact.info}`}><Mail size={16} /> {contact.info}</a><a href={`mailto:${contact.corp}`}><Mail size={16} /> {contact.corp}</a>
        <a className="btn orange" target="_blank" rel="noreferrer" href={`https://wa.me/${contact.wa}`}><MessageCircle size={16} /> WhatsApp enquiry</a></div></div>
      <div className="wrap"><iframe title="Map" className="map" loading="lazy" src="https://www.google.com/maps?q=59+Kentucky+Crescent,+Cosmo+City,+Johannesburg&output=embed" /></div></section></>
}
export function NotFound() { useSEO('Page not found', 'Page not found.'); return <PageHead kicker="404" title="Page not found" text="The page you requested does not exist." /> }
