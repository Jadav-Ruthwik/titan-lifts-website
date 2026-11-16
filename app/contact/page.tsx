import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let's talk about your next move."
        description="Planning a new installation, exploring modernisation or looking for maintenance support? Tell us a little about your requirement."
      />
      <section className="bg-titan-mist py-20">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Contact Titan Lifts</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-titan-navy">
              Start a conversation.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Share your details using the enquiry form. Add your official
              contact information here before publishing the website.
            </p>
            <div className="mt-9 space-y-5">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "+91 8074712198",
                },
                {
                  icon: Mail,
                  title: "Email",
                  detail: "titanlifts.india@gmail.com",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  detail: "Sangareddy, Telangana, India",
                },
                {
                  icon: Clock3,
                  title: "Business hours",
                  detail:
                    "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
                },
              ].map((x) => (
                <div key={x.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-titan-blue shadow-sm">
                    <x.icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-titan-navy">
                      {x.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{x.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-9 rounded-2xl bg-titan-navy p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
                Have a project in mind?
              </p>
              <p className="mt-3 text-lg font-bold">
                Tell us about your building and the lift you need.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
