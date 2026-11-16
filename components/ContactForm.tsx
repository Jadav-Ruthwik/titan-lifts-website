'use client'
import { FormEvent, useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
export default function ContactForm() {
  const [sent, setSent] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL
    if (!recipient) { alert('Please configure NEXT_PUBLIC_CONTACT_EMAIL in .env.local before receiving enquiries.'); return }
    const subject = encodeURIComponent(`Website enquiry — ${data.get('service')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nLocation: ${data.get('location')}\nRequirement: ${data.get('service')}\nMessage: ${data.get('message')}`)
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    setSent(true)
  }
  return <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-9">
    <div className="mb-7"><p className="eyebrow">Tell us what you need</p><h3 className="mt-3 text-2xl font-bold text-titan-navy">Request a consultation</h3><p className="mt-2 text-sm leading-6 text-slate-500">Share a few details and our team can follow up with the right solution.</p></div>
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Your name" name="name" placeholder="Full name" required/><Field label="Phone number" name="phone" placeholder="+91" required/><Field label="Email address" name="email" type="email" placeholder="you@example.com"/><Field label="Project location" name="location" placeholder="City / area"/>
      <label className="field-label sm:col-span-2">What do you need?<select name="service" className="field-input" required defaultValue=""><option value="" disabled>Select a requirement</option><option>New elevator installation</option><option>Home elevator</option><option>Elevator modernisation</option><option>Annual maintenance (AMC)</option><option>Repair / service support</option><option>Other enquiry</option></select></label>
      <label className="field-label sm:col-span-2">Tell us more<textarea name="message" rows={4} className="field-input resize-y" placeholder="Building type, number of floors, timeline or any other details…"/></label>
    </div>
    <button className="btn-primary mt-6 w-full justify-center sm:w-auto" type="submit">Send enquiry <ArrowUpRight size={17}/></button>
    {sent && <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-700"><CheckCircle2 size={17}/> Your email app should open with the enquiry details.</p>}
    <p className="mt-4 text-xs leading-5 text-slate-400">This starter form opens your email application. Connect a form backend before publishing for direct online submissions.</p>
  </form>
}
function Field({label,name,placeholder,type='text',required=false}:{label:string;name:string;placeholder:string;type?:string;required?:boolean}) { return <label className="field-label">{label}<input className="field-input" name={name} type={type} placeholder={placeholder} required={required}/></label> }
