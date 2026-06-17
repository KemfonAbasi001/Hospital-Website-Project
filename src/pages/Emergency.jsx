import { useEffect } from 'react'
import bg_image from '../assets/hero-bg-03.webp'
import FooterSection from '../components/Footer'
import CTASection from '../components/CTA'

/* ─── Scroll-reveal hook ──────────────────────────────────────────── */
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

/* ─── Main Component ──────────────────────────────────────────────── */
function EmergencySection() {
  useScrollReveal()

  return (
    <>
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
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
        className="w-full pt-35 py-30 md:pt-35 md:pt-24 lg:py-30 lg:pt-32 flex pl-5 md:pl-10 lg:pl-14 bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col gap-3 lg:gap-4 w-[90%] md:w-[75%] lg:w-auto">
          <p
            data-reveal
            data-delay="0"
            className="text-[12px] leading-4 tracking-[3.6px] font-medium text-[#F87171] uppercase flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-400">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            Emergency Services
          </p>

          <h1
            data-reveal
            data-delay="80"
            className="text-[41px] md:text-[54px] lg:text-[72px] leading-tight lg:leading-18 font-semibold text-white font-playfair"
          >
            When Every <br /><span className="italic text-[#FCA5A5]">Second</span> Counts
          </h1>

          <p
            data-reveal
            data-delay="160"
            className="text-[16px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-7.5 font-normal text-[#B3B3B3]"
          >
            Our Level I Trauma Center is staffed around the clock with the<br className='hidden md:block'/> region's most experienced emergency physicians, surgeons, and<br className='hidden md:block'/> critical care specialists.
          </p>

          <div data-reveal data-delay="240">
            <a
              href=""
              className="flex gap-0 mt-2 lg:mt-3 items-center text-[15px] lg:text-[18px] py-3 px-10 lg:px-12 rounded-3xl w-fit leading-7 font-medium text-white tracking-[.45px] bg-[#DC2626]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Emergency
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HELP OPTIONS SECTION
      ════════════════════════════════════════ */}
      <section className="w-full py-16 lg:py-30 flex justify-center items-center">
        <div className="w-[93%] max-w-330 flex gap-8 lg:gap-10 flex-col">

          {/* Section Header */}
          <div className="flex flex-col gap-3 lg:gap-5 text-center w-full">
            <p
              data-reveal
              className="text-[12px] md:text-[11px] lg:text-[12px] leading-4 font-medium tracking-[3.6px] text-[#DDA23C] uppercase"
            >
              Get Help Now
            </p>
            <h2
              data-reveal
              data-delay="80"
              className="text-[31px] md:text-[34px] lg:text-[40px] leading-tight lg:leading-10 text-[#151C28] font-semibold font-playfair"
            >
              Choose How We Help You
            </h2>
          </div>

          {/* Cards */}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">

            {/* Card 1 — Dark */}
            <div data-reveal data-delay="0" className="flex flex-col gap-4 py-13 px-6 lg:py-9 lg:px-8 box-border bg-[#1c2b4a]">
              <div className="bg-[#dda23c33] text-[#d19f47] w-fit flex justify-center items-center p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h2 className="text-[22px] leading-9 font-semibold text-[#F8F6F2] font-playfair">Call Us Immediately</h2>
                <p className="text-[14.5px] leading-5 font-normal text-[#DDA23C]">Under 10 seconds to connect</p>
              </div>
              <p className="text-[15px] lg:text-[14px] leading-5.75 font-normal text-[#AEACA9]">
                Our emergency triage line is staffed 24/7 by senior nurses and ER physicians who can guide you through every step.
              </p>
              <a href="" className="text-[13px] lg:text-[14px] leading-5 font-medium text-[#151C28] bg-[#DDA23C] py-3 flex items-center justify-center rounded-4xl">
                Call 1-800-UUTH
              </a>
            </div>

            {/* Card 2 — Light */}
            <div data-reveal data-delay="80" className="flex flex-col gap-4 py-13 px-6 lg:py-9 lg:px-8 box-border border border-solid border-[#dcdfe5]">
              <div className="bg-[#dda23c33] text-[#d19f47] w-fit flex justify-center items-center p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <div>
                <h2 className="text-[22px] leading-9 font-semibold text-[#151C28] font-playfair">Emergency Transport</h2>
                <p className="text-[14.5px] leading-5 font-normal text-[#DDA23C]">Advanced Life Support ambulance</p>
              </div>
              <p className="text-[15px] lg:text-[14px] leading-5.75 font-normal text-[#676F7E]">
                Our fleet of ALS-equipped ambulances can be dispatched to your location with paramedics and physician support in minutes.
              </p>
              <a href="" className="text-[13px] lg:text-[14px] leading-5 font-medium text-white bg-[#1c2b4a] py-3 flex items-center justify-center rounded-4xl">
                Request Ambulance
              </a>
            </div>

            {/* Card 3 — Light */}
            <div data-reveal data-delay="160" className="flex flex-col gap-4 py-13 px-6 lg:py-9 lg:px-8 box-border border border-solid border-[#dcdfe5] md:col-span-2 lg:col-span-1">
              <div className="bg-[#dda23c33] text-[#d19f47] w-fit flex justify-center items-center p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
              </div>
              <div>
                <h2 className="text-[22px] leading-9 font-semibold text-[#151C28] font-playfair">Immediate Video Consult</h2>
                <p className="text-[14.5px] leading-5 font-normal text-[#DDA23C]">Board-certified physician in 3 min</p>
              </div>
              <p className="text-[15px] lg:text-[14px] leading-5.75 font-normal text-[#676F7E]">
                Connect via secure video with an ER-trained physician for immediate assessment, medication guidance, and referral if needed.
              </p>
              <a href="" className="text-[13px] lg:text-[14px] leading-5 font-medium text-white bg-[#1c2b4a] py-3 flex items-center justify-center rounded-4xl">
                Start Video Consult
              </a>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
      <FooterSection />
    </>
  )
}

export default EmergencySection