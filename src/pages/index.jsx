import { useEffect, useRef } from 'react'
import bg_image from '../assets/hero-bg.webp'
import bg_image_two from '../assets/hero-bg-02.webp'

import one from '../assets/img-01.webp'
import two from '../assets/img-02.webp'

import seven from '../assets/photo-01.webp'
import eight from '../assets/photo-02.webp'
import three from '../assets/photo-03.webp'
import four from '../assets/photo-04.webp'
import five from '../assets/photo-05.webp'
import six from '../assets/photo-06.webp'
import FooterSection from '../components/Footer'
import CTASection from '../components/CTA'

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


function Card({ imgSrc, title, details }) {
  return (
    <a
      href="/services"
      className="w-full relative overflow-hidden group rounded-2xl h-72 block md:h-80 lg:h-96"
    >
      <img
        src={imgSrc}
        alt={title}
        loading="lazy"
        className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50" />
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
    </a>
  )
}


function HomeSection() {
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


      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(${bg_image})`,
        }}
        className="w-full min-h-[90vh] flex items-center py-24 pt-36 lg:py-36 lg:pt-40 px-5 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col gap-4 lg:gap-5 w-full">
          <p
            data-reveal
            data-delay="0"
            className="text-[10px] md:text-xs lg:text-xs leading-4 tracking-[4.8px] font-medium text-[#DDA23C] uppercase"
          >
            World-Class Private Healthcare
          </p>

          <h1
            data-reveal
            data-delay="80"
            className="text-5xl leading-13 sm:text-6xl sm:leading-15 lg:text-7xl lg:leading-18 font-semibold text-white font-playfair"
          >
            Where Healing{' '}
            <span className="italic text-[#DDA23C]"><br className='block'/>Becomes</span> an Art
          </h1>

          <p
            data-reveal
            data-delay="160"
            className="text-lg lg:text-lg leading-7 font-normal text-white/90"
          >
            Experience medicine reimagined — where cutting-edge technology, <br className='hidden md:block'/>
            world-renowned physicians, and unparalleled comfort converge to <br className='hidden md:block'/>
            create a sanctuary of healing.
          </p>

          <div
            data-reveal
            data-delay="240"
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-2 lg:mt-3 w-full"
          >
            <a
              href="/emergency"
              className="flex gap-0 items-center justify-center text-sm py-3.5 px-8 lg:px-12 rounded-full w-full sm:w-auto leading-5 font-medium text-[#151C28] tracking-wide bg-[#DDA23C] hover:bg-[#c8912e] transition-colors duration-200"
            >
              Book a Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="/emergency"
              className="flex gap-0 items-center justify-center text-sm py-3.5 px-8 lg:px-12 rounded-full w-full sm:w-auto leading-5 font-medium text-white border border-white/60 hover:bg-white/10 transition-colors duration-200 tracking-wide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2.5 w-4 h-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Emergency Care
            </a>
          </div>
        </div>
      </section>


      <section className="w-full py-16 lg:py-28 flex justify-center items-center">
        <div className="w-[93%] max-w-330 flex flex-col gap-10 lg:gap-14">


          <div className="flex flex-col gap-3 lg:gap-4 w-full">
            <p
              data-reveal
              className="text-xs leading-5 font-normal tracking-[4.2px] text-[#DDA23C] uppercase"
            >
              Our Story
            </p>
            <h2
              data-reveal
              data-delay="80"
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#151C28] font-medium font-playfair"
            >
              A Legacy of{' '}
              <span className="italic text-[#DDA23C]">Compassion</span>,<br className='block'/> a
              Future of Innovation
            </h2>
            <p
              data-reveal
              data-delay="160"
              className="text-base lg:text-lg leading-7 font-normal text-[#676F7E] max-w-3xl"
            >
              For over two decades, Meridian Medical Center has been a beacon of
              hope — where every patient is family, every treatment is a
              promise, and every outcome is a testament to our unwavering
              commitment to excellence.
            </p>
          </div>


          <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
            <div
              data-reveal
              data-delay="0"
              className="w-full relative rounded-2xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96"
            >
              <img
              loading="lazy"
                src={one}
                alt="Compassionate patient care"
                className="h-full w-full block object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30" />
              <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8">
                <h3 className="text-xl md:text-xl lg:text-2xl leading-7 font-medium italic text-white font-playfair">
                  "Every patient deserves to be heard."
                </h3>
              </div>
            </div>

            <div
              data-reveal
              data-delay="120"
              className="w-full relative rounded-2xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96"
            >
              <img
                src={two}
                loading="lazy"
                alt="Healing and innovation"
                className="h-full w-full block object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30" />
              <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8">
                <h3 className="text-xl md:text-xl lg:text-2xl leading-7 font-medium italic text-white font-playfair">
                  "Healing begins the moment you walk in."
                </h3>
              </div>
            </div>
          </div>


          <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
            {[
              {
                delay: '0',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-3" viewBox="0 0 24 24" fill="none" stroke="#d19f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                ),
                stat: '50,000+',
                label: 'Lives Touched Annually',
              },
              {
                delay: '100',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-3" viewBox="0 0 24 24" fill="none" stroke="#d19f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                ),
                stat: '25+',
                label: 'Years of Excellence',
              },
              {
                delay: '200',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-3" viewBox="0 0 24 24" fill="none" stroke="#d19f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                stat: '200+',
                label: 'World-Class Specialists',
              },
            ].map(({ delay, icon, stat, label }) => (
              <div
                key={label}
                data-reveal
                data-delay={delay}
                className="flex items-center justify-center text-center py-8 lg:py-10 bg-[#f7f4ef] gap-0 rounded-3xl px-5 flex-col"
              >
                {icon}
                <div className="flex flex-col gap-1.5">
                  <p className="text-4xl lg:text-5xl leading-none font-semibold text-[#151C28] font-playfair">
                    {stat}
                  </p>
                  <p className="text-sm leading-5 text-[#676F7E] font-normal tracking-wide">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="w-full pt-0 pb-16 lg:pb-24 flex justify-center">
        <div className="w-[93%] max-w-330 flex flex-col gap-10 lg:gap-14">

          {/* Header */}
          <div className="text-center flex flex-col gap-2 lg:gap-3">
            <p
              data-reveal
              className="text-xs leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase"
            >
              Our Service
            </p>
            <h2
              data-reveal
              data-delay="80"
              className="text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-[1.15] font-semibold text-[#151C28] font-playfair"
            >
              Comprehensive Care, Exceptional Results
            </h2>
            <p
              data-reveal
              data-delay="160"
              className="text-base lg:text-lg leading-6 lg:leading-7 font-normal text-[#676F7E] max-w-2xl mx-auto"
            >
              From preventive care to complex surgeries, our 20+ specialized
              departments deliver world-class treatment.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {[
              { imgSrc: seven, title: 'Cardiology',               details: 'Advanced cardiac diagnostics, interventional procedures, and heart surgery.',              delay: '0'   },
              { imgSrc: eight, title: 'Neurology & Neurosurgery', details: 'Comprehensive brain and nervous system care with cutting-edge imaging.',                  delay: '80'  },
              { imgSrc: three, title: 'Pediatrics & Neonatology', details: 'Gentle, expert care for your little ones from birth through adolescence.',                delay: '160' },
              { imgSrc: four,  title: 'Women\'s Health & Gynecology', details: 'Compassionate maternity care and women\'s health services.',                          delay: '0'   },
              { imgSrc: five,  title: 'Orthopedics',              details: 'Joint replacement, sports medicine, and musculoskeletal expertise.',                      delay: '80'  },
              { imgSrc: six,   title: 'Emergency & Trauma',       details: '24/7 emergency response with rapid triage and life-saving protocols.',                    delay: '160' },
            ].map(({ imgSrc, title, details, delay }) => (
              <div key={title} data-reveal data-delay={delay}>
                <Card imgSrc={imgSrc} title={title} details={details} />
              </div>
            ))}
          </div>

          <div data-reveal>
            <a
              href="/services"
              className="block w-full sm:w-fit py-3 mx-auto px-10 lg:px-16 rounded-full border border-[#151c2833] text-sm lg:text-base text-black font-medium text-center hover:bg-[#f7f4ef] transition-colors duration-200"
            >
              View all Specialties
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <FooterSection />
    </>
  )
}

export default HomeSection