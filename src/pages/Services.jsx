// import { useState } from 'react'

// import bg_image from '../assets/photo-013.png'
// import bg_image_two from '../assets/hero-bg-02.png'

// import one from '../assets/photo-01.png'
// import two from '../assets/photo-02.png'
// import three from '../assets/photo-03.png'
// import four from '../assets/photo-04.png'
// import five from '../assets/photo-05.png'
// import six from '../assets/photo-06.png'
// import seven from '../assets/photo-07.png'
// import eight from '../assets/photo-08.png'
// import nine from '../assets/photo-09.png'
// import ten from '../assets/photo-010.png'
// import eleven from '../assets/photo-011.png'
// import twelve from '../assets/photo-012.png'
// import thirteen from '../assets/photo-013.png'
// import fourteen from '../assets/photo-014.png'
// import fifteen from '../assets/photo-015.png'
// import sixteen from '../assets/photo-016.png'
// import seventeen from '../assets/photo-017.png'
// import eighteen from '../assets/photo-018.png'
// import ninteen from '../assets/photo-019.png'
// import FooterSection from '../components/Footer'

// import CTASection from '../components/CTA'

// function Card(props) {
//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     return(
//         <div onClick={scrollToTop} className="w-full relative h-95 overflow-hidden group rounded-2xl md:h-80 lg:h-92.5 cursor-pointer">
//             <img src={props.imgSrc} alt="" className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
//             <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40"></div>
//             <div className="absolute bottom-8 left-6 right-6 lg:bottom-7 lg:left-5 flex flex-col gap-0">
//                 <h1 className="text-[28px] md:text-[24px] lg:text-[28px] font-normal text-[#FFFFFF] font-playfair">{props.title}</h1>
//                 <p className="text-[15px] md:text-[13px] lg:text-[14px] leading-5 tracking-[.35px] font-normal text-[#FFFFFF] font-inter">{props.details}</p>
//                 <a href="" className="text-[15px] lg:text-[14px] font-medium mt-2 text-[#D19F47] flex gap-1 items-center">
//                     Learn More
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="#D19F47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform">
//                         <path d="M5 12h14"></path>
//                         <path d="m12 5 7 7-7 7"></path>
//                     </svg>
//                 </a>
//             </div>
//         </div>   
//     )
// }


// function ServiceSection() {
//   return (
//     <>
//       <section
//         style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
//         className='relative w-full py-65 pt-40 lg:py-50 lg:pt-32 bg-cover bg-center bg-no-repeat'
//       >
//         <div className="flex flex-col bottom-8 left-4 md:bottom-10 md:left-6 lg:bottom-13 lg:left-8 gap-2 lg:gap-3 absolute">
//           <p className="text-[12px] md:text-[12px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase">
//             Centers of Excellence
//           </p>
//           <h1 className="text-[50px] md:text-[44px] lg:text-[60px] leading-tight lg:leading-15 font-semibold text-[#FFFFFF] font-playfair">
//             <span className='italic'>25+ Specialties, </span> One Standard
//           </h1>
//           <p className="text-[17px] md:text-[16px] lg:text-[20px] leading-87lg:leading-7 font-normal text-[#B3B3B3]">
//             Every department at Elysium operates at the highest level of clinical excellence.
//           </p>
//         </div>
//       </section>


//       <section className='w-full py-16 lg:py-30 flex justify-center'>
//         <div className="w-[93%] flex flex-col gap-10 lg:gap-15">


//           <div className="text-center flex flex-col gap-2 lg:gap-3">
//             <p className="text-[12px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase">
//               200+ Physicians
//             </p>
//             <h1 className="text-[36px] md:text-[38px] lg:text-[48px] leading-tight lg:leading-12 font-semibold text-[#151C28] font-playfair">
//               Experts Who Define Excellence
//             </h1>
//             <p className="text-[18px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-6.5 font-normal text-[#676F7E]">
//               Each physician at Elysium is a leader in their specialty — trained at the world's most prestigious institutions.
//             </p>
//           </div>


//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
//             <Card imgSrc={one}      title='Cardiology'                details='Advanced cardiac diagnostics, interventional procedures, and heart surgery.' />
//             <Card imgSrc={two}      title='Neurology & Neurosurgery'  details='Comprehensive brain and nervous system care with cutting-edge imaging.' />
//             <Card imgSrc={three}    title='Pediatrics & Neonatology'  details='Gentle, expert care for your little ones from birth through adolescence.' />
//             <Card imgSrc={four}     title='Womens Health & Gynecology' details='Compassionate maternity care and womens health services.' />
//             <Card imgSrc={five}     title='Orthopedics'               details='Joint replacement, sports medicine, and musculoskeletal expertise.' />
//             <Card imgSrc={six}      title='Emergency & Trauma'        details='24/7 emergency response with rapid triage and life-saving protocols.' />
//             <Card imgSrc={seven}    title='Oncology & Cancer Center'  details='Personalized cancer treatment with chemotherapy, immunotherapy, and support.' />
//             <Card imgSrc={eight}    title='General & Robotic surgery' details='State-of-the-art surgical suites with robotic-assisted procedures for faster recovery.' />
//             <Card imgSrc={nine}     title='Ophthalmology'             details='From laser vision correction to retinal surgery — advanced care for your eyes.' />
//             <Card imgSrc={ten}      title='ENT & Head / Neck Surgery' details='Expert ear, nose, and throat care with advanced endoscopic and microsurgical techniques.' />
//             <Card imgSrc={eleven}   title='Dermatology & Aesthetics'  details='Medical and cosmetic dermatology with cutting-edge laser and skincare treatments.' />
//             <Card imgSrc={twelve}   title='Physical Rehabilitation'   details='Comprehensive recovery programs with advanced physiotherapy and wellness coaching.' />
//             <Card imgSrc={thirteen} title='Physiotherapy'             details='Rehabilitation programs to restore movement, strength, and independence.' />
//             <Card imgSrc={fourteen} title='Radiology'                 details='State-of-the-art MRI, CT, and diagnostic imaging services.' />
//             <Card imgSrc={fifteen}  title='Pathology & Lab Medicine'  details='CAPS-accredited laboratory with molecular diagnostics and genomic testing.' />
//             <Card imgSrc={sixteen}  title='Anesthesiology & Pain'     details='Expert anesthesia and pain management for safe, comfortable surgical experiences.' />
//             <Card imgSrc={seventeen} title='Nephrology'               details='Kidney care from diagnostics to dialysis and transplant preparation.' />
//             <Card imgSrc={eighteen} title='Endocrinology'             details='Diabetes management, thyroid care, and hormonal disorder treatment by specialists.' />
//           </div>

//         </div>
//       </section>

//     <CTASection/>

//       <FooterSection/>
//     </>
//   )
// }

// export default ServiceSection





























import { useEffect, useState } from 'react'

import bg_image from '../assets/photo-013.png'

import one from '../assets/photo-01.png'
import two from '../assets/photo-02.png'
import three from '../assets/photo-03.png'
import four from '../assets/photo-04.png'
import five from '../assets/photo-05.png'
import six from '../assets/photo-06.png'
import seven from '../assets/photo-07.png'
import eight from '../assets/photo-08.png'
import nine from '../assets/photo-09.png'
import ten from '../assets/photo-010.png'
import eleven from '../assets/photo-011.png'
import twelve from '../assets/photo-012.png'
import thirteen from '../assets/photo-013.png'
import fourteen from '../assets/photo-014.png'
import fifteen from '../assets/photo-015.png'
import sixteen from '../assets/photo-016.png'
import seventeen from '../assets/photo-017.png'
import eighteen from '../assets/photo-018.png'
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