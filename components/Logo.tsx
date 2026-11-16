import Link from 'next/link'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Titan Lifts home" className={`inline-flex items-center gap-3 ${light ? 'text-white' : 'text-titan-navy'}`}>
      <svg width="43" height="43" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M5 9h38M11 9v30M37 9v30" stroke="currentColor" strokeWidth="4.2" strokeLinecap="square" />
        <path d="M19 19l5-5 5 5M19 29l5 5 5-5" stroke="#9CA9B8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="leading-none">
        <span className="block text-[22px] font-black tracking-[.12em]">TITAN</span>
        <span className={`mt-1 block text-[9px] font-semibold tracking-[.48em] ${light ? 'text-slate-300' : 'text-slate-500'}`}>LIFTS</span>
      </span>
    </Link>
  )
}
