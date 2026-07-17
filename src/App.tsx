import { useState, useEffect } from 'react'
import drKamranPhoto from '@/imports/image.jpg'

const WHATSAPP_PRIMARY = "https://wa.me/923153921130"
const PHONE_PRIMARY = "tel:+923202390907"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

const SERVICES = [
  { title: "Teeth Whitening", desc: "Professional laser and bleaching teeth whitening treatments to brighten your smile and remove stains effectively." },
  { title: "Fixed & Removable Teeth", desc: "High-quality fixed bridges, crowns, and removable dentures designed to restore your smile with comfort and precision." },
  { title: "Orthodontic Treatments (Braces & Aligners)", desc: "Expert braces and clear aligner treatment to correct misaligned teeth and achieve a perfectly straight smile." },
  { title: "Laser Fillings", desc: "Modern laser-assisted fillings for a more comfortable and precise dental restoration experience with less sensitivity." },
  { title: "Wisdom Tooth Treatment", desc: "Safe and gentle surgical extraction of problematic wisdom teeth with minimal discomfort and fast recovery." },
  { title: "Scaling & Polishing", desc: "Deep professional cleaning to remove hardened tartar and plaque buildup, leaving teeth cleaner and gums healthier." },
  { title: "Tooth Extraction", desc: "Gentle and skilled removal of damaged, decayed, or impacted teeth with minimal discomfort and quick recovery." },
  { title: "Dental Implants", desc: "Permanent, natural-looking replacement tooth roots to restore missing teeth with maximum stability and lasting comfort." },
  { title: "Aesthetic Dentistry", desc: "Complete smile makeovers including veneers, bonding, and cosmetic procedures tailored to enhance your natural beauty." },
  { title: "Filling & Root Canal", desc: "Pain-free endodontic therapy and tooth-colored fillings to save infected or damaged teeth without unnecessary extractions." },
  { title: "Crown & Bridges", desc: "Custom-fitted crowns and bridges that rebuild broken teeth and replace missing ones with lasting strength and aesthetics." },
  { title: "Preventive Dentistry", desc: "Regular checkups, cleanings and preventive care to protect your teeth before problems arise." },
]

const TESTIMONIALS = [
  {
    name: "Bilal Farooq",
    area: "Shalimar Colony, Multan",
    text: "Excellent service and a very professional team. The dentist was clear, gentle, and highly skilled. I felt completely comfortable. Highly recommended.",
    stars: 5,
  },
  {
    name: "Amna Qureshi",
    area: "Multan",
    text: "The dental doctor provided professional and effective treatment. The doctor carefully examined the teeth, explained the procedure clearly, and ensured patient comfort throughout.",
    stars: 5,
  },
  {
    name: "Hassan Malik",
    area: "Shalimar Colony",
    text: "From start to finish, my experience was excellent. The clinic is clean, and the service is top-notch. I had scaling, polishing, and a filling — all done efficiently.",
    stars: 5,
  },
  {
    name: "Sana Zahid",
    area: "Multan",
    text: "Dr. Salaar is an amazing dentist! Very gentle and professional. My teeth whitening results were incredible. Highly recommended for anyone in Multan!",
    stars: 5,
  },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill={i < n ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </span>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm border-b border-slate-100' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-white" width="18" height="18">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
          </div>
          <span className="font-bold text-slate-900 text-sm tracking-tight">Salar Dental</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="px-3.5 py-2 text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all duration-150 font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Menu">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-slate-700" fill="none" strokeWidth="2" strokeLinecap="round">
              {open ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 8h18"/><path d="M3 16h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 pt-2 pb-4">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-slate-700 border-b border-slate-50 last:border-0 font-medium">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-teal-600 text-white text-sm font-semibold py-3 rounded-lg">
            <WhatsAppIcon className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 70% 40%, #f0fdfa 0%, transparent 70%)"
      }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Stars n={5} />
              <span className="text-slate-500 text-sm">5.0 — 49 Google Reviews</span>
            </div>

            <h1 className="section-heading text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.05] text-slate-900 mb-5">
              Salar Dental<br />
              <span className="text-teal-600">&amp; Aesthetics Care</span>
            </h1>

            <p className="text-slate-500 text-lg sm:text-xl mb-3 font-light">Your Smile, Our Passion — Modern Aesthetics &amp; Dental Care</p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Expert dental and aesthetic care by Dr. Salaar Hassan Siddiqui. Offering braces, aligners, teeth whitening, laser fillings and more at Shalimar Colony, Multan.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href={PHONE_PRIMARY}
                className="flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Now
              </a>
              <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md text-sm">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
              <a href="#appointment"
                className="flex items-center gap-2 border border-slate-200 text-slate-700 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm">
                Book Appointment
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-teal-500 shrink-0"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                Shalimar, Street No 4, Colony, Multan
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-teal-500 shrink-0"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                Open till 10 PM daily
              </span>
            </div>
          </div>

          {/* Right — stats panel */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-teal-600"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Dr. Salaar Hassan Siddiqui</p>
                    <p className="text-slate-400 text-xs">Dental &amp; Aesthetics Specialist</p>
                  </div>
                </div>

                {[
                  { label: "Specialty", value: "Dental & Aesthetics Care" },
                  { label: "Status", value: "Certified Dentist" },
                  { label: "Google Rating", value: "5.0 ★" },
                  { label: "Patient Reviews", value: "49" },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between py-1">
                    <span className="text-slate-500 text-sm">{s.label}</span>
                    <span className="font-bold text-slate-900 text-sm">{s.value}</span>
                  </div>
                ))}

                <div className="pt-3 border-t border-slate-100">
                  <div className="bg-teal-600 rounded-2xl p-4 text-white">
                    <p className="font-semibold text-sm mb-1">Book an Appointment</p>
                    <p className="text-teal-200 text-xs">Call 0320-2390907 to reserve your slot today</p>
                  </div>
                </div>
              </div>

              {/* Ambient glow */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-teal-100 rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-slate-200 aspect-[3/4]">
              <img
                src={drKamranPhoto}
                alt="Dr. Salaar Hassan Siddiqui at Salar Dental & Aesthetics Care Multan"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 right-5 bg-white rounded-2xl shadow-lg border border-slate-100 px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <Stars n={5} />
                <span className="font-bold text-slate-900 text-sm">5.0</span>
              </div>
              <p className="text-slate-400 text-xs">49 Google Reviews</p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-2 lg:pt-8">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">About the Doctor</p>
            <h2 className="section-heading text-4xl sm:text-5xl text-slate-900 leading-tight mb-6">
              Dr. Salaar Hassan Siddiqui
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Dr. Salaar Hassan Siddiqui is a highly skilled <strong className="text-slate-800">Dental &amp; Aesthetics Specialist</strong> dedicated to providing gentle, effective, and modern dental care in Multan.
            </p>
            <p className="text-slate-500 leading-relaxed mb-6">
              At Salar Dental &amp; Aesthetics Care, we specialize in teeth whitening, braces &amp; aligners, laser fillings, wisdom tooth treatment, and a full range of aesthetic and restorative dental procedures — located at Shalimar, Street No 4, Colony, Multan.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Whether you need a routine cleaning or a complete smile makeover — Dr. Salaar ensures a comfortable, professional, and pain-free experience every single visit.
            </p>

            <dl className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Doctor", value: "Dr. Salaar Hassan Siddiqui" },
                { label: "Specialty", value: "Dental & Aesthetics Care" },
                { label: "Location", value: "Shalimar Colony, Multan" },
                { label: "Availability", value: "Open till 10 PM daily" },
              ].map(item => (
                <div key={item.label} className="bg-white border border-slate-100 rounded-xl px-4 py-3.5">
                  <dt className="text-slate-400 text-xs uppercase tracking-wider mb-1">{item.label}</dt>
                  <dd className="text-slate-800 font-semibold text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <a href={PHONE_PRIMARY}
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                0320-2390907
              </a>
              <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm">
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
          <h2 className="section-heading text-4xl sm:text-5xl text-slate-900 leading-tight mb-4">
            What We Treat
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From basic dental checkups to advanced dental implants — modern solutions tailored to your unique smile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
          {SERVICES.map((s) => (
            <button
              key={s.title}
              onClick={() => setExpanded(expanded === s.title ? null : s.title)}
              className="bg-white text-left p-5 sm:p-6 hover:bg-teal-50 transition-colors duration-150 group"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-teal-700 transition-colors leading-snug">
                  {s.title}
                </h3>
                <svg viewBox="0 0 20 20" className={`w-4 h-4 fill-slate-300 group-hover:fill-teal-400 shrink-0 mt-0.5 transition-all duration-200 ${expanded === s.title ? 'rotate-45' : ''}`}>
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
              </div>
              {expanded === s.title && (
                <p className="mt-2.5 text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              )}
            </button>
          ))}
        </div>

        <p className="text-slate-400 text-sm mt-5 text-center">Tap any service for details · Call to enquire about pricing</p>
      </div>
    </section>
  )
}

function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Patients Choose Us</p>
          <h2 className="section-heading text-4xl sm:text-5xl text-slate-900 leading-tight mb-6">
            Trusted by Families<br />Across Multan
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg mb-10">
            Salar Dental &amp; Aesthetics Care is equipped with modern tools and focuses on delivering high-quality aesthetic, orthodontic, and restorative procedures alongside comprehensive preventative care.
          </p>

          <div className="space-y-5">
            {[
              {
                title: "Aesthetic & Cosmetic Dentistry",
                body: "Specializing in teeth whitening, veneers, and smile makeovers for a beautiful, confident smile.",
              },
              {
                title: "5.0 rating, 49 reviews",
                body: "Consistent five-star ratings on Google from over 49 highly satisfied patients across Multan.",
              },
              {
                title: "Braces & Clear Aligners",
                body: "Expert orthodontic care including traditional braces and modern clear aligners to straighten your smile.",
              },
              {
                title: "Convenient Hours",
                body: "Clinic is open daily till 10 PM, making it perfectly convenient for professionals, students, and families.",
              },
              {
                title: "Full range under one roof",
                body: "Whitening, implants, laser fillings, wisdom tooth, root canals, scaling, crowns — all at Salar Dental.",
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1 rounded-full bg-teal-200 shrink-0 self-stretch min-h-[48px]" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats block */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { big: "Aesthetics", label: "Specialist Care", sub: "Smile Makeovers" },
            { big: "5.0★", label: "Google Rating", sub: "49 Reviews" },
            { big: "Till 10 PM", label: "Open Daily", sub: "Convenient Hours" },
            { big: "Full", label: "Range of Services", sub: "Under one roof" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`rounded-2xl p-6 ${i === 0 ? 'bg-teal-600 text-white' : 'bg-white border border-slate-100 text-slate-900'}`}
            >
              <p className={`text-3xl font-bold mb-1 ${i === 0 ? 'text-white' : 'text-teal-600'}`}>{s.big}</p>
              <p className={`font-semibold text-sm ${i === 0 ? 'text-teal-100' : 'text-slate-800'}`}>{s.label}</p>
              <p className={`text-xs mt-0.5 ${i === 0 ? 'text-teal-300' : 'text-slate-400'}`}>{s.sub}</p>
            </div>
          ))}
          <div className="col-span-2 bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Stars n={5} />
              </div>
              <div>
                <p className="text-slate-700 text-sm leading-relaxed italic">"Excellent service and a very professional team. The dentist was clear, gentle, and highly skilled. Highly recommended."</p>
                <p className="text-slate-400 text-xs mt-2">— Google Review, Multan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop&auto=format",
      alt: "Modern dental treatment room",
      span: "lg:col-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=600&fit=crop&auto=format",
      alt: "Dentist performing dental exam with mirror and tool",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=500&fit=crop&auto=format",
      alt: "Clean and welcoming dental clinic",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=500&fit=crop&auto=format",
      alt: "Patient smiling after successful dental treatment",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&auto=format",
      alt: "Dental checkup and consultation",
      span: "lg:col-span-2",
    },
  ]

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Gallery</p>
            <h2 className="section-heading text-4xl sm:text-5xl text-slate-900 leading-tight">Our Clinic</h2>
          </div>
          <a href="https://www.instagram.com/novadentalpk/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition-colors border border-slate-200 hover:border-teal-200 rounded-xl px-4 py-2.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @novadentalpk
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl bg-slate-100 group ${p.span}`}>
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-start justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Reviews</p>
            <h2 className="section-heading text-4xl sm:text-5xl text-slate-900 leading-tight">What Patients Say</h2>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl px-5 py-4 text-center shadow-sm">
            <p className="text-4xl font-bold text-slate-900">5.0</p>
            <div className="flex justify-center my-1.5">
              <Stars n={5} />
            </div>
            <p className="text-slate-400 text-xs">49 Google Reviews</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 ${i === 0 ? 'bg-teal-600 text-white sm:row-span-1' : 'bg-white border border-slate-100'}`}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }, (_, k) => (
                  <svg key={k} viewBox="0 0 20 20" className="w-4 h-4" fill={i === 0 ? "#fbbf24" : "#f59e0b"}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className={`text-sm leading-relaxed mb-5 ${i === 0 ? 'text-teal-50' : 'text-slate-600'}`}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-700'}`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className={`font-semibold text-sm ${i === 0 ? 'text-white' : 'text-slate-900'}`}>{t.name}</p>
                  <p className={`text-xs ${i === 0 ? 'text-teal-300' : 'text-slate-400'}`}>{t.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="https://www.google.com/maps/search/Salar+Dental+Multan/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition-colors">
            Leave a review on Google →
          </a>
        </div>
      </div>
    </section>
  )
}

function AppointmentSection() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Assalam o Alaikum! I'd like to book an appointment at Salar Dental & Aesthetics Care.\n\nName: ${form.name}\nPhone: ${form.phone}${form.date ? `\nDate: ${form.date}` : ''}${form.time ? `\nTime: ${form.time}` : ''}${form.message ? `\nNote: ${form.message}` : ''}`
    )
    window.open(`https://wa.me/923153921130?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_440px] gap-12 items-start">
        <div>
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Book Appointment</p>
          <h2 className="section-heading text-4xl sm:text-5xl text-slate-900 leading-tight mb-5">
            Ready to Come In?
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8 text-lg">
            Fill the form and we'll send the details to Dr. Salaar's WhatsApp. We'll confirm your slot. Walk-ins also welcome during clinic hours (open till 10 PM).
          </p>

          <div className="space-y-3">
            {[
              { icon: "phone", label: "Primary Number", val: "0320-2390907", href: "tel:+923202390907" },
              { icon: "wa", label: "WhatsApp", val: "0315-8511118", href: WHATSAPP_PRIMARY },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-100 hover:border-teal-200 rounded-xl transition-colors group">
                <div className="w-9 h-9 bg-teal-50 group-hover:bg-teal-100 rounded-lg flex items-center justify-center transition-colors">
                  {c.icon === 'wa'
                    ? <WhatsAppIcon className="w-4 h-4 text-teal-600" />
                    : <svg viewBox="0 0 24 24" className="w-4 h-4 fill-teal-600"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  }
                </div>
                <div>
                  <p className="text-slate-400 text-xs">{c.label}</p>
                  <p className="text-slate-800 font-semibold text-sm group-hover:text-teal-700 transition-colors">{c.val}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-7">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-green-500"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Opening WhatsApp...</h3>
              <p className="text-slate-500 text-sm">Your appointment request is ready to send to Salar Dental on WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-0.5">Request a Visit</h3>
                <p className="text-slate-400 text-sm">Confirmed via WhatsApp</p>
              </div>

              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'e.g. Ahmed Ali', req: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '03xx-xxxxxxx', req: true },
              ].map(f => (
                <div key={f.name}>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    required={f.req}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                    className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">Date</label>
                  <input type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date}
                    onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                    className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">Time Preference</label>
                  <select value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))}
                    className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all">
                    <option value="">Any time</option>
                    {["Morning (9–12)", "Afternoon (12–4)", "Evening (4–7)", "Night (7–10)"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-medium mb-1.5">Your concern</label>
                <textarea rows={3} placeholder="Briefly describe your dental issue or what you need..."
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-800 placeholder-slate-300 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-50 transition-all resize-none"
                />
              </div>

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm text-sm">
                <WhatsAppIcon className="w-4 h-4" />
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Location & Hours</p>
        <h2 className="section-heading text-4xl sm:text-5xl text-slate-900 mb-10">Find the Clinic</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white border border-slate-100 rounded-2xl p-5">
              <p className="text-slate-800 font-semibold mb-1">Shalimar, Street No 4</p>
              <p className="text-slate-600 text-sm">Colony, Shalimar Colony</p>
              <p className="text-slate-500 text-sm">Multan, 60000</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-100 rounded-2xl p-5">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-medium">Phone</p>
                <a href="tel:+923202390907" className="block text-slate-800 font-semibold text-sm hover:text-teal-600 transition-colors mb-1">0320-2390907</a>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-medium">Hours</p>
                <p className="text-slate-800 font-semibold text-sm">Open Daily</p>
                <p className="text-slate-500 text-sm">Till 10 PM</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-5">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-medium">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/novadentalpk/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
                <span className="text-slate-200">|</span>
                <a href="https://www.facebook.com/profile.php?id=61556943801262" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-100" style={{ minHeight: 380 }}>
            <iframe
              title="Salar Dental & Aesthetics Care location"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Salar%20Dental%20Shalimar%20Colony%20Multan&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <p className="font-bold text-white text-base mb-1">Salar Dental &amp; Aesthetics Care</p>
            <p className="text-teal-400 text-sm mb-4">Your Smile, Our Passion</p>
            <p className="text-sm leading-relaxed max-w-xs">
              Expert dental and aesthetic care by Dr. Salaar Hassan Siddiqui. Shalimar, Street No 4, Colony, Multan.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/novadentalpk/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-slate-300"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556943801262" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-slate-300"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-teal-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>0320-2390907</li>
              <li className="leading-snug">Shalimar, Street No 4, Colony, Multan</li>
              <li className="text-teal-400">Open daily till 10 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Salar Dental &amp; Aesthetics Care. All rights reserved.</p>
          <p className="text-slate-600">Multan, Punjab, Pakistan</p>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_PRIMARY}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
      style={{ width: 52, height: 52 }}
    >
      <WhatsAppIcon className="w-6 h-6 text-white" />
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <ReviewsSection />
      <AppointmentSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
