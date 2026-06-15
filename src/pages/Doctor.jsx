// import bg_image from '../assets/team-01.png'
// import one from '../assets/doc-01.png'
// import two from '../assets/doc-02.png'
// import three from '../assets/doc-03.png'
// import four from '../assets/doc-04.png'
// import five from '../assets/doc-05.png'
// import six from '../assets/doc-06.png'
// import bg_image_two from '../assets/hero-bg-02.png'
// import FooterSection from '../components/Footer'
// import CTASection from '../components/CTA'

// function Card(props) {
//     return(
//         <div className="flex flex-col border border-solid border-[#dcdfe5]">
//             <div className="w-full h-93 md:h-80 lg:h-90 overflow-hidden">
//                 <img src={props.hisimg} alt="" className="block w-full h-full object-cover" />
//             </div>
//             <div className="flex flex-col gap-1.75 py-5 px-4">
//                 <h2 className="text-[18px] md:text-[19px] lg:text-[20px] leading-7 font-semibold text-[#151C28] font-playfair">{props.doctorname}</h2>
//                 <p className="text-[13px] lg:text-[14px] leading-5 font-normal text-[#DDA23C] font-inter">{props.specialty}</p>
//                 <p className="text-[12px] leading-4 font-normal text-[#676F7E] flex gap-2 items-center font-inter">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-4 h-4 text-muted-foreground mt-0.5 shrink-0">
//                         <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
//                         <path d="M22 10v6"></path>
//                         <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
//                     </svg>
//                     {props.doctorcollege}
//                 </p>
//                 <p className="text-[13px] lg:text-[14px] leading-5.75 font-normal text-[#676F7E] font-inter">{props.doctordetails}</p>
//                 <div className="flex flex-col gap-2">
//                     <div className="flex gap-2 items-center">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" color='#DDA23C' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-3 h-3 text-accent shrink-0">
//                             <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
//                             <circle cx="12" cy="8" r="6"></circle>
//                         </svg>
//                         <p className="text-[12px] leading-4 font-normal text-[#151C28] font-inter">{props.doctorg}</p>
//                     </div>
//                     <div className="flex gap-2 items-center">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" color='#DDA23C' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-3 h-3 text-accent shrink-0">
//                             <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
//                             <circle cx="12" cy="8" r="6"></circle>
//                         </svg>
//                         <p className="text-[12px] leading-4 font-normal text-[#151C28] font-inter">{props.docaward}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// function DoctorSection() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section
//         style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.6)), url(${bg_image})` }}
//         className='relative w-full py-37 pt-20 lg:py-50 lg:pt-32 bg-cover bg-top bg-no-repeat'
//       >
//         <div className="flex flex-col bottom-8 left-4 md:bottom-10 md:left-6 lg:bottom-13 lg:left-8 gap-2 lg:gap-3 absolute">
//           <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase">
//             Our Physicians
//           </p>
//           <h1 className="text-[30px] md:text-[44px] lg:text-[60px] leading-tight lg:leading-15 font-semibold text-[#FFFFFF] font-playfair">
//             The World's Best <span className='italic'>Minds</span> in Medicine
//           </h1>
//         </div>
//       </section>

//       {/* DOCTORS GRID SECTION */}
//       <section className='w-full py-16 lg:py-30 flex justify-center'>
//         <div className="w-[93%] flex flex-col gap-10 lg:gap-15">

//           {/* Section Header */}
//           <div className="text-center flex flex-col gap-2 lg:gap-3">
//             <p className="text-[10px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase">
//               200+ Physicians
//             </p>
//             <h1 className="text-[30px] md:text-[38px] lg:text-[48px] leading-tight lg:leading-12 font-semibold text-[#151C28] font-playfair">
//               Experts Who Define Excellence
//             </h1>
//             <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-6.5 font-normal text-[#676F7E]">
//               Each physician at Elysium is a leader in their specialty — trained at the world's most prestigious institutions.
//             </p>
//           </div>

//           {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
//             <Card
//               hisimg={one}
//               doctorname='Dr. Alexandra Mercer'
//               specialty='Chief of Cardiothoracic Surgery'
//               doctorcollege='MD, PhD — Johns Hopkins University'
//               doctordetails='With over 2,800 open-heart surgeries performed, Dr. Mercer is internationally recognized for pioneering less-invasive cardiac repair'
//               doctorg='American Heart Association Fellow'
//               docaward='Top Cardiac Surgeon 2023'
//             />
//             <Card
//               hisimg={two}
//               doctorname='Dr. Kenji Watanabe'
//               specialty='Director of Neurosciences'
//               doctorcollege='MD — University of Tokyo, Fellowship Harvard'
//               doctordetails='A pioneer in awake craniotomy and deep brain stimulation, Dr. Watanabe has restored function to patients worldwide.'
//               doctorg='Global Neurology Award 2022'
//               docaward='Best Doctor — Forbes Health'
//             />
//             <Card
//               hisimg={three}
//               doctorname='Dr. Priya Sharma'
//               specialty='Head of Oncology'
//               doctorcollege='MD, FACS — Oxford University'
//               doctordetails='Dr. Sharma leads Elysiums Comprehensive Cancer Center, specializing in precision immunotherapy and targeted treatment protocols.'
//               doctorg='ASCO Outstanding Researcher'
//               docaward='Cancer Care Excellence 2024'
//             />
//             <Card
//               hisimg={four}
//               doctorname='Dr. Samuel Osei'
//               specialty='Chief of Orthopedic Surgery'
//               doctorcollege='MD — Mayo Clinic College of Medicine'
//               doctordetails='Dr. Osei performs over 600 joint replacements annually using robotic-assisted navigation for unparalleled precision.'
//               doctorg='AAOS Innovator Award'
//               docaward='Joint Reconstruction Pioneer'
//             />
//             <Card
//               hisimg={five}
//               doctorname='Dr. Elena Vasquez'
//               specialty='Director of Maternal-Fetal Medicine'
//               doctorcollege='MD, MPH — Stanford University'
//               doctordetails='Specializing in high-risk pregnancies, Dr. Vasquez has guided over 5,000 families through complex maternity journeys.'
//               doctorg='ACOG Distinguished Fellow'
//               docaward='Maternal Health Champion'
//             />
//             <Card
//               hisimg={six}
//               doctorname='Dr. Marcus Webb'
//               specialty='Head of Pediatric Services'
//               doctorcollege='MD, PhD — Columbia University'
//               doctordetails='Dr. Webb created the family-centered care model at Elysium, ensuring children receive compassionate and world-class treatment.'
//               doctorg='AAP Fellow of Distinction'
//               docaward='Best Pediatrician 2023'
//             />
//           </div>

//         </div>
//       </section>

//      <CTASection/>

//       <FooterSection/>
//     </>
//   )
// }

// export default DoctorSection








import { useEffect } from 'react'
import bg_image from '../assets/team-01.png'
import one from '../assets/doc-01.png'
import two from '../assets/doc-02.png'
import three from '../assets/doc-03.png'
import four from '../assets/doc-04.png'
import five from '../assets/doc-05.png'
import six from '../assets/doc-06.png'
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

/* ─── Doctor Card ─────────────────────────────────────────────────── */
function Card({ hisimg, doctorname, specialty, doctorcollege, doctordetails, doctorg, docaward }) {
  return (
    <div className="flex flex-col border border-solid border-[#dcdfe5]">
      <div className="w-full h-93 md:h-80 lg:h-90 overflow-hidden">
        <img src={hisimg} alt={doctorname} className="block w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-1.75 py-5 px-4">
        <h2 className="text-[20px] md:text-[19px] lg:text-[20px] leading-7 font-semibold text-[#151C28] font-playfair">
          {doctorname}
        </h2>
        <p className="text-[14px] lg:text-[14px] leading-5 font-normal text-[#DDA23C] font-inter">{specialty}</p>
        <p className="text-[13px] leading-4 font-normal text-[#676F7E] flex gap-2 items-center font-inter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0">
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
          {doctorcollege}
        </p>
        <p className="text-[14px] lg:text-[14px] leading-5.75 font-normal text-[#676F7E] font-inter">{doctordetails}</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" color="#DDA23C" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
            <p className="text-[14px] leading-4 font-normal text-[#151C28] font-inter">{doctorg}</p>
          </div>
          <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" color="#DDA23C" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
            <p className="text-[14px] leading-4 font-normal text-[#151C28] font-inter">{docaward}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const doctors = [
  {
    hisimg: one,
    doctorname: 'Dr. Alexandra Mercer',
    specialty: 'Chief of Cardiothoracic Surgery',
    doctorcollege: 'MD, PhD — Johns Hopkins University',
    doctordetails: 'With over 2,800 open-heart surgeries performed, Dr. Mercer is internationally recognized for pioneering less-invasive cardiac repair',
    doctorg: 'American Heart Association Fellow',
    docaward: 'Top Cardiac Surgeon 2023',
  },
  {
    hisimg: two,
    doctorname: 'Dr. Kenji Watanabe',
    specialty: 'Director of Neurosciences',
    doctorcollege: 'MD — University of Tokyo, Fellowship Harvard',
    doctordetails: 'A pioneer in awake craniotomy and deep brain stimulation, Dr. Watanabe has restored function to patients worldwide.',
    doctorg: 'Global Neurology Award 2022',
    docaward: 'Best Doctor — Forbes Health',
  },
  {
    hisimg: three,
    doctorname: 'Dr. Priya Sharma',
    specialty: 'Head of Oncology',
    doctorcollege: 'MD, FACS — Oxford University',
    doctordetails: 'Dr. Sharma leads Elysiums Comprehensive Cancer Center, specializing in precision immunotherapy and targeted treatment protocols.',
    doctorg: 'ASCO Outstanding Researcher',
    docaward: 'Cancer Care Excellence 2024',
  },
  {
    hisimg: four,
    doctorname: 'Dr. Samuel Osei',
    specialty: 'Chief of Orthopedic Surgery',
    doctorcollege: 'MD — Mayo Clinic College of Medicine',
    doctordetails: 'Dr. Osei performs over 600 joint replacements annually using robotic-assisted navigation for unparalleled precision.',
    doctorg: 'AAOS Innovator Award',
    docaward: 'Joint Reconstruction Pioneer',
  },
  {
    hisimg: five,
    doctorname: 'Dr. Elena Vasquez',
    specialty: 'Director of Maternal-Fetal Medicine',
    doctorcollege: 'MD, MPH — Stanford University',
    doctordetails: 'Specializing in high-risk pregnancies, Dr. Vasquez has guided over 5,000 families through complex maternity journeys.',
    doctorg: 'ACOG Distinguished Fellow',
    docaward: 'Maternal Health Champion',
  },
  {
    hisimg: six,
    doctorname: 'Dr. Marcus Webb',
    specialty: 'Head of Pediatric Services',
    doctorcollege: 'MD, PhD — Columbia University',
    doctordetails: 'Dr. Webb created the family-centered care model at Elysium, ensuring children receive compassionate and world-class treatment.',
    doctorg: 'AAP Fellow of Distinction',
    docaward: 'Best Pediatrician 2023',
  },
]

const delays = ['0', '80', '160']

/* ─── Main Component ──────────────────────────────────────────────── */
function DoctorSection() {
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
        className="relative w-full py-37 pt-35 lg:py-50 lg:pt-32 bg-cover bg-top bg-no-repeat"
      >
        <div className="flex flex-col bottom-8 left-4 md:bottom-10 md:left-6 lg:bottom-13 lg:left-8 gap-2 lg:gap-3 absolute">
          <p
            data-reveal
            data-delay="0"
            className="text-[12px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase"
          >
            Our Physicians
          </p>
          <h1
            data-reveal
            data-delay="80"
            className="text-[33px] md:text-[44px] lg:text-[60px] leading-tight lg:leading-15 font-semibold text-white font-playfair"
          >
            The World's Best <span className="italic">Minds</span> in Medicine
          </h1>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DOCTORS GRID SECTION
      ════════════════════════════════════════ */}
      <section className="w-full py-16 lg:py-30 flex justify-center">
        <div className="w-[93%] max-w-7xl flex flex-col gap-10 lg:gap-15">

          {/* Section Header */}
          <div className="text-center flex flex-col gap-2 lg:gap-3">
            <p
              data-reveal
              className="text-[12px] md:text-[11px] lg:text-[12px] leading-4 tracking-[3.6px] font-medium text-[#DDA23C] uppercase"
            >
              200+ Physicians
            </p>
            <h2
              data-reveal
              data-delay="80"
              className="text-[29px] md:text-[38px] lg:text-[48px] leading-tight lg:leading-12 font-semibold text-[#151C28] font-playfair"
            >
              Experts Who Define Excellence
            </h2>
            <p
              data-reveal
              data-delay="160"
              className="text-[15px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-6.5 font-normal text-[#676F7E] max-w-2xl mx-auto"
            >
              Each physician at Elysium is a leader in their specialty — trained at the world's most prestigious institutions.
            </p>
          </div>

          {/* Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13 md:gap-8 lg:gap-10">
            {doctors.map((doc, index) => (
              <div
                key={doc.doctorname}
                data-reveal
                data-delay={delays[index % 3]}
              >
                <Card {...doc} />
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

export default DoctorSection