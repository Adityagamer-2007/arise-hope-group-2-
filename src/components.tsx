import { useEffect, useRef, useState, ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, HardHat, Landmark, Pickaxe, Wheat, Building2, Car, Fuel, Banknote, Cpu } from 'lucide-react'
import { sectors, contact } from './data'

export function useSEO(title: string, desc: string) {
  useEffect(() => {
    document.title = `${title} | Arise Hope Group`
    document.querySelector('meta[name=description]')?.setAttribute('content', desc)
    window.scrollTo(0, 0)
  }, [title, desc])
}
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null); const [on, setOn] = useState(false)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); o.disconnect() } }, { threshold: .12 }); if (r.current) o.observe(r.current); return () => o.disconnect() }, [])
  return <div ref={r} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>
}
export function Photo({ name, className = '' }: { name: string; className?: string }) {
  const [ok, setOk] = useState(true)
  return <div className={`photo ${className}`}>{ok && <img src={`/images/${name}.jpg`} alt="" loading="lazy" onError={() => setOk(false)} />}</div>
}
export function Ring() { return <svg className="ring" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="90" /><circle cx="100" cy="100" r="68" className="c" /></svg> }
export function PageHead({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return <section className="pagehead dark"><Ring /><div className="wrap"><p className="kicker">{kicker}</p><h1>{title}</h1>{text && <p className="lead">{text}</p>}</div></section>
}
export function Header() {
  const [open, setOpen] = useState(false); const [sc, setSc] = useState(false); const [prog, setProg] = useState(0)
  const { pathname } = useLocation(); const home = pathname === '/'
  useEffect(() => { const f = () => { setSc(scrollY > 40); setProg(scrollY / Math.max(1, document.body.scrollHeight - innerHeight)) }; f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => setOpen(false), [pathname])
  return <header className={`hdr ${sc || !home ? 'solid' : ''}`}>
    <div className="bar" style={{ transform: `scaleX(${prog})` }} />
    <div className="wrap nav">
      <Link to="/" aria-label="Arise Hope Group home"><img className="logo" src="/logo.jpeg" alt="Arise Hope Group" /></Link>
      <nav className={open ? 'open' : ''} aria-label="Main">
        <NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink>
        <div className="dd"><NavLink to="/industries">Industries <ChevronDown size={14} /></NavLink>
          <div className="menu">{sectors.map(s => <Link key={s.slug} to={`/industries/${s.slug}`}>{s.name}</Link>)}</div></div>
        <NavLink to="/business-model">Business Model</NavLink><NavLink to="/sustainability">Sustainability</NavLink>
        <NavLink to="/roadmap">Roadmap</NavLink><NavLink to="/governance">Corporate Governance</NavLink><NavLink to="/contact">Contact</NavLink>
        <Link to="/contact" className="btn orange sm">Partner With Us</Link>
      </nav>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div></header>
}
export function Footer() {
  return <footer className="dark foot"><div className="wrap fgrid">
    <div><img className="logo" src="/logo.jpeg" alt="Arise Hope Group" /><p className="muted">A light that shines above Everything.</p></div>
    <div><h4>Company</h4>{[['About','/about'],['Business Model','/business-model'],['Sustainability','/sustainability'],['Roadmap','/roadmap'],['Corporate Governance','/governance'],['Contact','/contact']].map(([n, t]) => <Link key={t} to={t}>{n}</Link>)}</div>
    <div><h4>Business Sectors</h4>{sectors.map(s => <Link key={s.slug} to={`/industries/${s.slug}`}>{s.name}</Link>)}</div>
    <div><h4>Contact</h4><p className="muted">{contact.addr.map(a => <span key={a}>{a}<br /></span>)}</p>
      <a href={`tel:${contact.tel.replace(/\s/g, '')}`}>{contact.tel}</a><a href={`mailto:${contact.info}`}>{contact.info}</a><a href={`mailto:${contact.corp}`}>{contact.corp}</a></div>
  </div><p className="copy wrap">© {new Date().getFullYear()} Arise Hope Group. All rights reserved.</p></footer>
}

export const icons: Record<string, any> = {'construction-engineering':HardHat,'civil-engineering':Landmark,'mining-energy-resources':Pickaxe,'agriculture':Wheat,'property-investment':Building2,'automotive-services':Car,'wholesale-petroleum-products':Fuel,'banking-financial-services':Banknote,'information-technology':Cpu}
export function Tilt({ children }: { children: ReactNode }) {
  const r = useRef<HTMLDivElement>(null)
  const mv = (e: React.PointerEvent) => { const b = r.current!.getBoundingClientRect(); const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; r.current!.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 12}deg) translateZ(0)` }
  return <div ref={r} className="tilt" onPointerMove={mv} onPointerLeave={() => { if (r.current) r.current.style.transform = '' }}>{children}</div>
}
export function Orb() { return <div className="orb" aria-hidden="true"><i /><i /><i /><b /></div> }
