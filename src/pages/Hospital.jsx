// import bg_image from '../assets/hero-bg-02.png'
// import one from '../assets/parole-01.png'
// import two from '../assets/parole-02.png'
// import three from '../assets/photo-013.png'
// import four from '../assets/photo-014.png'
// import five from '../assets/pharm.png'
// import FooterSection from '../components/Footer'
// import CTASection from '../components/CTA'

// function Card(props) {
//     return(
//         <div className="flex flex-col gap-2 items-stretch justify-center">
//             <p className="text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C]">{props.number}</p>
//             <h1 className="text-[28px] md:text-[32px] lg:text-[38px] leading-tight lg:leading-10 font-semibold text-[#151C28] font-playfair">{props.title}</h1>
//             <p className="text-[15px] lg:text-[17px] leading-6 font-normal italic text-[#B18230]">{props.subtitle}</p>
//             <p className="text-[15px] md:text-[16px] lg:text-[18px] leading-7 lg:leading-7.5 font-normal text-[#676F7E]">{props.details}</p>
//         </div>
//     )
// }


// function HospitalSection() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section
//         style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
//         className='w-full py-20 pt-34 md:py-24 md:pt-28 lg:py-30 lg:pt-32 flex justify-center bg-cover bg-center bg-no-repeat'
//       >
//         <div className="flex flex-col justify-center items-center text-center gap-3 px-5">
//           <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[4.8px] font-medium text-[#DDA23C] uppercase">
//             Virtual Tour
//           </p>
//           <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-tight lg:leading-18 font-semibold text-[#FFFFFF] font-playfair">
//             A Place Like <br/><span className='italic'>No Other</span>
//           </h1>
//           <p className="text-[15px] md:text-[17px] lg:text-[20px] leading-6 lg:leading-7 font-normal text-[#B3B3B3]">
//             Every space at Elysium is designed to inspire calm, confidence, and hope.
//           </p>
//         </div>
//       </section>

//       {/* TOUR SECTIONS */}
//       <section className='w-full py-16 lg:py-30 flex justify-center'>
//         <div className="w-[93%] flex flex-col gap-12 md:gap-16 lg:gap-20">

//           {/* Row 1 — Image Left, Text Right */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
//             <img src={one} alt="The Grand Entrance" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm" />
//             <Card
//               number="01"
//               title="The Grand Entrance"
//               subtitle="First impressions that calm and reassure"
//               details="Arriving at Elysium, guests are welcomed by soaring ceilings, natural light, and an atmosphere more akin to a five-star hotel than a hospital. Our concierge team greets every patient by name."
//             />
//           </div>

//           {/* Row 2 — Text Left, Image Right */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
//             {/* On mobile: card first, then image. On desktop: card left, image right */}
//             <Card
//               number="02"
//               title="Patient Suites"
//               subtitle="Rooms designed for recovery and dignity"
//               details="Each private suite features floor-to-ceiling windows, custom bedding, an in-room kitchen, and a dedicated family lounge area — because healing happens best in comfort."
//             />
//             <img src={two} alt="Patient Suites" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last" />
//           </div>

//           {/* Row 3 — Image Left, Text Right */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
//             <img src={three} alt="The Surgical Center" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm" />
//             <Card
//               number="03"
//               title="The Surgical Center"
//               subtitle="Precision in every procedure"
//               details="Our state-of-the-art surgical suites are equipped with the da Vinci robotic system, integrated imaging, and laminar airflow filtration — the gold standard in operative care."
//             />
//           </div>

//           {/* Row 4 — Text Left, Image Right */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
//             <Card
//               number="04"
//               title="Diagnostic Imaging Center"
//               subtitle="Answers with unprecedented clarity"
//               details="A 3T MRI, 256-slice CT scanner, and AI-assisted diagnostic tools allow our radiologists to detect what others miss — providing faster, more accurate diagnoses."
//             />
//             <img src={four} alt="Diagnostic Imaging" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last" />
//           </div>

//           {/* Row 5 — Image Left, Text Right */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
//             <img src={five} alt="Pharmacy" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm" />
//             <Card
//               number="05"
//               title="Pharmacy & Compounding"
//               subtitle="Precision medicine, dispensed with care"
//               details="Our in-house pharmacy provides personalized compounding, medication counseling, and same-day delivery to your suite — ensuring seamless continuity of care."
//             />
//           </div>

//           {/* Row 6 — Text Left, Image Right */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
//             <Card
//               number="06"
//               title="Wellness & Rehabilitation"
//               subtitle="Where recovery becomes transformation"
//               details="A 10,000 sq ft wellness pavilion featuring hydrotherapy pools, physiotherapy studios, nutritional counseling, and a rooftop meditation garden."
//             />
//             <img src={two} alt="Wellness" className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last" />
//           </div>

//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <CTASection/>

//       <FooterSection/>
//     </>
//   )
// }

// export default HospitalSection







import { useEffect } from 'react'
import bg_image from '../assets/hero-bg-02.png'
import one from '../assets/parole-01.png'
import two from '../assets/parole-02.png'
import three from '../assets/photo-013.png'
import four from '../assets/photo-014.png'
import five from '../assets/pharm.png'
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

function Card(props) {
  return (
    <div className="flex flex-col gap-2 items-stretch justify-center">
      <p className="text-[14px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C]">{props.number}</p>
      <h1 className="text-[28px] md:text-[35px] lg:text-[38px] leading-tight lg:leading-10 font-semibold text-[#151C28] font-playfair">{props.title}</h1>
      <p className="text-[15px] lg:text-[18px] leading-6 font-normal italic text-[#B18230]">{props.subtitle}</p>
      <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-7 lg:leading-7.5 font-normal text-[#676F7E]">{props.details}</p>
    </div>
  )
}


function HospitalSection() {
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

      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
        className='w-full py-20 pt-34 md:py-24 md:pt-28 lg:py-30 lg:pt-32 flex justify-center bg-cover bg-center bg-no-repeat'
      >
        <div className="flex flex-col justify-center items-center text-center gap-3 px-5">
          <p
            data-reveal
            data-delay="0"
            className="text-[12px] md:text-[11px] lg:text-[12px] leading-4 tracking-[4.8px] font-medium text-[#DDA23C] uppercase"
          >
            Virtual Tour
          </p>
          <h1
            data-reveal
            data-delay="80"
            className="text-[46px] md:text-[56px] lg:text-[72px] leading-tight lg:leading-18 font-semibold text-[#FFFFFF] font-playfair"
          >
            A Place Like <br /><span className='italic'>No Other</span>
          </h1>
          <p
            data-reveal
            data-delay="160"
            className="text-[15px] md:text-[17px] lg:text-[20px] leading-6 lg:leading-7 font-normal text-[#B3B3B3]"
          >
            Every space at Elysium is designed to inspire calm, confidence, and hope.
          </p>
        </div>
      </section>

      {/* TOUR SECTIONS */}
      <section className='w-full py-16 lg:py-30 flex justify-center'>
        <div className="w-[93%] flex flex-col gap-12 md:gap-16 lg:gap-20">

          {/* Row 1 — Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <img
              data-reveal
              data-delay="0"
              src={one}
              alt="The Grand Entrance"
              className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm"
            />
            <div data-reveal data-delay="120">
              <Card
                number="01"
                title="The Grand Entrance"
                subtitle="First impressions that calm and reassure"
                details="Arriving at Elysium, guests are welcomed by soaring ceilings, natural light, and an atmosphere more akin to a five-star hotel than a hospital. Our concierge team greets every patient by name."
              />
            </div>
          </div>

          {/* Row 2 — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <div data-reveal data-delay="0">
              <Card
                number="02"
                title="Patient Suites"
                subtitle="Rooms designed for recovery and dignity"
                details="Each private suite features floor-to-ceiling windows, custom bedding, an in-room kitchen, and a dedicated family lounge area — because healing happens best in comfort."
              />
            </div>
            <img
              data-reveal
              data-delay="120"
              src={two}
              alt="Patient Suites"
              className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last"
            />
          </div>

          {/* Row 3 — Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <img
              data-reveal
              data-delay="0"
              src={three}
              alt="The Surgical Center"
              className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm"
            />
            <div data-reveal data-delay="120">
              <Card
                number="03"
                title="The Surgical Center"
                subtitle="Precision in every procedure"
                details="Our state-of-the-art surgical suites are equipped with the da Vinci robotic system, integrated imaging, and laminar airflow filtration — the gold standard in operative care."
              />
            </div>
          </div>

          {/* Row 4 — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <div data-reveal data-delay="0">
              <Card
                number="04"
                title="Diagnostic Imaging Center"
                subtitle="Answers with unprecedented clarity"
                details="A 3T MRI, 256-slice CT scanner, and AI-assisted diagnostic tools allow our radiologists to detect what others miss — providing faster, more accurate diagnoses."
              />
            </div>
            <img
              data-reveal
              data-delay="120"
              src={four}
              alt="Diagnostic Imaging"
              className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last"
            />
          </div>

          {/* Row 5 — Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <img
              data-reveal
              data-delay="0"
              src={five}
              alt="Pharmacy"
              className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm"
            />
            <div data-reveal data-delay="120">
              <Card
                number="05"
                title="Pharmacy & Compounding"
                subtitle="Precision medicine, dispensed with care"
                details="Our in-house pharmacy provides personalized compounding, medication counseling, and same-day delivery to your suite — ensuring seamless continuity of care."
              />
            </div>
          </div>

          {/* Row 6 — Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <div data-reveal data-delay="0">
              <Card
                number="06"
                title="Wellness & Rehabilitation"
                subtitle="Where recovery becomes transformation"
                details="A 10,000 sq ft wellness pavilion featuring hydrotherapy pools, physiotherapy studios, nutritional counseling, and a rooftop meditation garden."
              />
            </div>
            <img
              data-reveal
              data-delay="120"
              src={two}
              alt="Wellness"
              className="w-full h-64 md:h-80 lg:h-auto object-cover rounded-sm order-first lg:order-last"
            />
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

      <FooterSection />
    </>
  )
}

export default HospitalSection