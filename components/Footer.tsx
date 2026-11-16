import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="bg-[#06172f] text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr_.8fr_.9fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
            Thoughtful vertical mobility solutions for homes, businesses and
            buildings. Built around safety, dependable service and lasting
            performance.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-blue-400 underline-offset-8"
          >
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
        <div>
          <h3 className="footer-heading">Explore</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            {[
              ["Home", "/"],
              ["About us", "/about"],
              ["Services", "/services"],
              ["Products", "/products"],
              ["Contact", "/contact"],
            ].map(([n, u]) => (
              <Link key={u} href={u} className="hover:text-white">
                {n}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Our solutions</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            {[
              "Passenger lifts",
              "Home elevators",
              "Hospital lifts",
              "Freight lifts",
              "Modernisation",
              "Annual maintenance",
            ].map((x) => (
              <Link key={x} href="/products" className="hover:text-white">
                {x}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Get in touch</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex gap-3">
              <Phone size={17} className="shrink-0 text-blue-300" /> +91
              8074712198
            </p>
            <p className="flex gap-3">
              <Mail size={17} className="shrink-0 text-blue-300" />{" "}
              titanlifts.india@gmail.com
            </p>
            <p className="flex gap-3">
              <MapPin size={17} className="shrink-0 text-blue-300" />{" "}
              Sangareddy, Telangana, India
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Titan Lifts. All rights reserved.
          </span>
          <span>Designed for a higher standard of vertical mobility.</span>
        </div>
      </div>
    </footer>
  );
}
