import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Clock3,
  Building2,
  MoveUpRight,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";
const products = [
  {
    name: "Passenger Elevators",
    desc: "Comfortable, dependable movement for residential and commercial buildings.",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Home & Villa Elevators",
    desc: "Space-conscious solutions designed to complement your home.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Hospital Elevators",
    desc: "Practical, spacious vertical transport for healthcare environments.",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Freight Elevators",
    desc: "Robust lifting solutions for goods, equipment and industrial use.",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
  },
];
const services = [
  {
    icon: Building2,
    title: "Installation",
    desc: "Careful planning, coordination and professional installation for your project.",
  },
  {
    icon: Wrench,
    title: "Modernisation",
    desc: "Upgrade lift performance, appearance and key systems in existing buildings.",
  },
  {
    icon: ShieldCheck,
    title: "Annual Maintenance",
    desc: "Planned maintenance support to help keep equipment operating reliably.",
  },
  {
    icon: Clock3,
    title: "Service Support",
    desc: "Responsive assistance for service issues and urgent lift requirements.",
  },
];
export default function Home() {
  return (
    <>
      <section className="relative min-h-[650px] overflow-hidden bg-[#071d3b] text-white md:min-h-[690px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-shell relative flex min-h-[650px] items-center py-20 md:min-h-[690px]">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-blue-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-300" /> Vertical
              mobility. Thoughtfully delivered.
            </div>
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Elevating
              <br />
              <span className="text-blue-200">every journey.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Reliable elevator solutions for the spaces where life and business
              move. From installation to ongoing care, move with confidence with
              Titan Lifts.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary !bg-white !text-[#0B2D50] hover:!bg-black hover:!text-white transition-colors duration-300"
              >
                Get a Quote <ArrowUpRight size={17} />
              </Link>
              <Link href="/products" className="btn-outline">
                Explore solutions <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-white/20 pt-6">
              <div>
                <p className="text-2xl font-black">01</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-300">
                  Safety-led
                </p>
              </div>
              <div>
                <p className="text-2xl font-black">02</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-300">
                  Built around you
                </p>
              </div>
              <div>
                <p className="text-2xl font-black">03</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-300">
                  Long-term care
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden h-28 w-[38%] border-l border-t border-white/10 bg-white/5 backdrop-blur-sm lg:block">
          <div className="flex h-full items-center justify-around text-xs font-semibold uppercase tracking-widest text-white/75">
            <span>Design</span>
            <span className="text-blue-300">/</span>
            <span>Install</span>
            <span className="text-blue-300">/</span>
            <span>Maintain</span>
          </div>
        </div>
      </section>
      <section className="border-b border-slate-100 bg-white py-8">
        <div className="container-shell grid gap-5 text-center sm:grid-cols-3 sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <ShieldCheck className="text-titan-blue" />
            <div>
              <p className="text-sm font-bold text-titan-navy">Safety first</p>
              <p className="text-xs text-slate-500">
                A considered approach at every stage
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Wrench className="text-titan-blue" />
            <div>
              <p className="text-sm font-bold text-titan-navy">
                End-to-end support
              </p>
              <p className="text-xs text-slate-500">
                From installation to maintenance
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Building2 className="text-titan-blue" />
            <div>
              <p className="text-sm font-bold text-titan-navy">
                Solutions that fit
              </p>
              <p className="text-xs text-slate-500">
                For a range of building requirements
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative">
            <div
              className="h-[480px] overflow-hidden rounded-[28px] bg-slate-200 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="absolute -bottom-7 -right-5 max-w-[230px] rounded-2xl bg-titan-navy p-6 text-white shadow-soft">
              <p className="text-3xl font-black">TITAN</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[.3em] text-blue-200">
                Lifts
              </p>
              <p className="mt-4 text-xs leading-5 text-slate-300">
                A higher standard of vertical mobility.
              </p>
            </div>
          </div>
          <div>
            <SectionTitle
              eyebrow="Your elevator partner"
              title="The right lift makes every level feel closer."
              text="Every building has its own rhythm, purpose and people. Titan Lifts brings together product knowledge, installation and ongoing service to help make vertical movement simpler and more dependable."
            />
            <div className="mt-8 space-y-4">
              {[
                "Solutions for residential, commercial and specialised spaces",
                "A considered approach to installation and modernisation",
                "Maintenance support focused on dependable operation",
              ].map((x) => (
                <p
                  key={x}
                  className="flex gap-3 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-titan-blue"
                  />
                  {x}
                </p>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 text-sm font-extrabold text-titan-navy"
            >
              Discover Titan Lifts <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-titan-mist py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Explore our range"
              title="Elevator options for different spaces."
              text="From everyday passenger movement to specialised applications, explore a range of lift categories for different building needs."
            />
            <Link
              href="/products"
              className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-titan-navy"
            >
              View all products <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Link
                href="/products"
                key={p.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="h-56 overflow-hidden bg-slate-200">
                  <div
                    className="h-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${p.img}')` }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[.2em] text-blue-600">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-extrabold text-titan-navy">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {p.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-titan-blue">
                    Explore <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-shell">
          <SectionTitle
            eyebrow="What we do"
            title="Support through every stage of the lift lifecycle."
            text="A good elevator solution is more than equipment. It is the planning, installation and care that help it serve your building over time."
            center
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 p-7 transition hover:border-blue-200 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-titan-blue">
                  <s.icon size={22} />
                </div>
                <p className="mt-7 text-xs font-bold tracking-widest text-slate-400">
                  0{i + 1}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-titan-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {s.desc}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-titan-blue"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-[28px] bg-[#e9eef4] md:grid-cols-2">
            <div
              className="min-h-[350px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="flex flex-col justify-center p-9 sm:p-14">
              <p className="eyebrow">Built around your building</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-titan-navy">
                A solution should fit the space — and the people using it.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Tell us about your building, usage and priorities. We’ll help
                you understand the options worth considering.
              </p>
              <Link href="/contact" className="btn-primary mt-8 w-fit">
                Discuss your project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
