'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react'
import Logo from './Logo'

const links = [ ['Home','/'], ['About','/about'], ['Services','/services'], ['Products','/products'], ['Contact','/contact'] ]
export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
    <div className="container-shell flex h-[82px] items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} className="nav-link">{label}</Link>)}
      </nav>
      <div className="hidden items-center gap-5 lg:flex">
        <Link href="/contact" className="flex items-center gap-2 text-sm font-semibold text-slate-600"><Phone size={15}/> Contact</Link>
        <Link href="/contact" className="btn-primary">Get a Quote <ArrowUpRight size={16}/></Link>
      </div>
      <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 text-titan-navy lg:hidden">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden" aria-label="Mobile navigation">
      <div className="container-shell flex flex-col gap-1">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-lg px-3 py-3 font-semibold text-titan-navy hover:bg-slate-50">{label}</Link>)}<Link onClick={() => setOpen(false)} href="/contact" className="btn-primary mt-3 justify-center">Get a Quote <ArrowUpRight size={16}/></Link></div>
    </nav>}
  </header>
}
