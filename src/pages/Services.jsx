import { useEffect, useState } from 'react'

import bg_image from '../assets/photo-013.webp'

import one from '../assets/photo-01.webp'
import two from '../assets/photo-02.webp'
import three from '../assets/photo-03.webp'
import four from '../assets/photo-04.webp'
import five from '../assets/photo-05.webp'
import six from '../assets/photo-06.webp'
import seven from '../assets/photo-07.webp'
import eight from '../assets/photo-08.webp'
import nine from '../assets/photo-09.webp'
import ten from '../assets/photo-010.webp'
import eleven from '../assets/photo-011.webp'
import twelve from '../assets/photo-012.webp'
import thirteen from '../assets/photo-013.webp'
import fourteen from '../assets/photo-014.webp'
import fifteen from '../assets/photo-015.webp'
import sixteen from '../assets/photo-016.webp'
import seventeen from '../assets/photo-017.webp'
import eighteen from '../assets/photo-018.webp'
import FooterSection from '../components/Footer'
import CTASection from '../components/CTA'

/* ─── Scroll-reveal hook (same as HomeSection) ────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.dataset.delay || '0'
            setTimeout(() => {
              el.classList.add('revealed')
            }, Number(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Service Card ────────────────────────────────────────────────── */
function Card({ imgSrc, title, details }) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="w-full relative h-80 overflow-hidden group rounded-2xl md:h-80 lg:h-96 cursor-pointer isolate block"
    >
      <img
        src={imgSrc}
        alt={title}
        loading="lazy"
        className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute bottom-7 left-5 right-5 flex flex-col gap-1">
        <h3 className="text-2xl md:text-xl lg:text-2xl font-normal text-white font-playfair leading-tight">
          {title}
        </h3>
        <p className="text-sm leading-5 tracking-wide font-normal text-white/90 font-inter">
          {details}
        </p>
        <span className="text-sm font-medium mt-1 text-[#D19F47] flex gap-1 items-center">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D19F47"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  )
}

/* ─── Main Component ──────────────────────────────────────────────── */
function ServiceSection() {
  useScrollReveal()

  const cards = [
    { imgSrc: one,       title: 'Cardiology',                  details: 'Advanced cardiac diagnostics, interventional procedures, and heart surgery.' },
    { imgSrc: two,       title: 'Neurology & Neurosurgery',    details: 'Comprehensive brain and nervous system care with cutting-edge imaging.' },
    { imgSrc: three,     title: 'Pediatrics & Neonatology',    details: 'Gentle, expert care for your little ones from birth through adolescence.' },
    { imgSrc: four,      title: "Women's Health & Gynecology", details: "Compassionate maternity care and women's health services." },
    { imgSrc: five,      title: 'Orthopedics',                 details: 'Joint replacement, sports medicine, and musculoskeletal expertise.' },
    { imgSrc: six,       title: 'Emergency & Trauma',          details: '24/7 emergency response with rapid triage and life-saving protocols.' },
    { imgSrc: seven,     title: 'Oncology & Cancer Center',    details: 'Personalized cancer treatment with chemotherapy, immunotherapy, and support.' },
    { imgSrc: eight,     title: 'General & Robotic Surgery',   details: 'State-of-the-art surgical suites with robotic-assisted procedures for faster recovery.' },
    { imgSrc: nine,      title: 'Ophthalmology',               details: 'From laser vision correction to retinal surgery — advanced care for your eyes.' },
    { imgSrc: ten,       title: 'ENT & Head / Neck Surgery',   details: 'Expert ear, nose, and throat care with advanced endoscopic and microsurgical techniques.' },
    { imgSrc: eleven,    title: 'Dermatology & Aesthetics',    details: 'Medical and cosmetic dermatology with cutting-edge laser and skincare treatments.' },
    { imgSrc: twelve,    title: 'Physical Rehabilitation',     details: 'Comprehensive recovery programs with advanced physiotherapy and wellness coaching.' },
    { imgSrc: thirteen,  title: 'Physiotherapy',               details: 'Rehabilitation programs to restore movement, strength, and independence.' },
    { imgSrc: fourteen,  title: 'Radiology',                   details: 'State-of-the-art MRI, CT, and diagnostic imaging services.' },
    { imgSrc: fifteen,   title: 'Pathology & Lab Medicine',    details: 'CAPS-accredited laboratory with molecular diagnostics and genomic testing.' },
    { imgSrc: sixteen,   title: 'Anesthesiology & Pain',       details: 'Expert anesthesia and pain management for safe, comfortable surgical experiences.' },
    { imgSrc: seventeen, title: 'Nephrology',                  details: 'Kidney care from diagnostics to dialysis and transplant preparation.' },
    { imgSrc: eighteen,  title: 'Endocrinology',               details: 'Diabetes management, thyroid care, and hormonal disorder treatment by specialists.' },
  ]

  /* Stagger delays cycle across 3 columns: 0 / 80 / 160 */
  const delays = ['0', '80', '160']

  return (
    <>
      {/* ── Reveal animation styles ── */}
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* ════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════ */}
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg_image})`,
        }}
        className="relative w-full py-65 pt-40 lg:py-50 lg:pt-32 bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col bottom-8 left-4 md:bottom-10 md:left-6 lg:bottom-13 lg:left-8 gap-2 lg:gap-3 absolute">
          <p
            data-reveal
            data-delay="0"
            className="text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase"
          >
            Centers of Excellence
          </p>
          <h1
            data-reveal
            data-delay="80"
            className="text-[40px] md:text-[44px] lg:text-[60px] leading-tight lg:leading-15 font-semibold text-white font-playfair"
          >
            <span className="italic">25+ Specialties,</span> One Standard
          </h1>
          <p
            data-reveal
            data-delay="160"
            className="text-[17px] md:text-[16px] lg:text-[20px] leading-7 font-normal text-[#B3B3B3]"
          >
            Every department at Elysium operates at the highest level of clinical excellence.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CARDS SECTION
      ════════════════════════════════════════ */}
      <section className="w-full py-16 lg:py-30 flex justify-center">
        <div className="w-[93%] max-w-7xl flex flex-col gap-10 lg:gap-15">

          {/* Section header */}
          <div className="text-center flex flex-col gap-2 lg:gap-3">
            <p
              data-reveal
              className="text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase"
            >
              200+ Physicians
            </p>
            <h2
              data-reveal
              data-delay="80"
              className="text-[34px] md:text-[38px] lg:text-[48px] leading-tight lg:leading-12 font-semibold text-[#151C28] font-playfair"
            >
              Experts Who Define Excellence
            </h2>
            <p
              data-reveal
              data-delay="160"
              className="text-[17px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-6.5 font-normal text-[#676F7E] max-w-2xl mx-auto"
            >
              Each physician at Elysium is a leader in their specialty — trained at the world's most prestigious institutions.
            </p>
          </div>

          {/* Cards grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
            {cards.map(({ imgSrc, title, details }, index) => (
              <div
                key={title}
                data-reveal
                data-delay={delays[index % 3]}
                className="h-80 md:h-80 lg:h-96"
              >
                <Card imgSrc={imgSrc} title={title} details={details} />
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
      <FooterSection />
    </>
  )
}

export default ServiceSection