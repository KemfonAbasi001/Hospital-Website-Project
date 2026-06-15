// function FooterSection() {
//     return(
//         <footer className="w-full py-10 lg:py-13 bg-[#1e293e] flex justify-center items-center">
//             <div className="w-[93%] flex flex-col gap-10 lg:gap-12">

//                 {/* Footer Links Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:flex lg:flex-row lg:justify-between">

//                     {/* Brand */}
//                     <div className="flex flex-col gap-4 lg:w-[23%]">
//                         <a href="/">
//                             <h1 className="text-[30px] leading-9 font-light text-[#FFFFFF] font-playfair">Medical Center</h1>
//                         </a>
//                         <p className="text-[18px] lg:text-[14px] font-normal leading-6 text-[#FFFFFF80]">
//                             Providing world-class healthcare with compassion, innovation, and excellence for over 25 years.
//                         </p>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="flex flex-col gap-4 lg:w-[23%]">
//                         <h4 className="text-[18px] leading-5 tracking-[.35px] text-[#DDDCD6] font-semibold">Quick Links</h4>
//                         <a href="/"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">About Us</p></a>
//                         <a href="/services"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Our Services</p></a>
//                         <a href="/doctor"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Find a Doctor</p></a>
//                         <a href="/hospital"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Hospital Tour</p></a>
//                         <a href="/emergency"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Patient Portal</p></a>
//                     </div>

//                     {/* Departments */}
//                     <div className="flex flex-col gap-4 lg:w-[23%]">
//                         <h4 className="text-[18px] leading-5 tracking-[.35px] text-[#DDDCD6] font-semibold">Departments</h4>
//                         <a href="/services"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Cardiology</p></a>
//                         <a href="/services"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Neurology</p></a>
//                         <a href="/services"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Pediatrics</p></a>
//                         <a href="/services"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Orthopedics</p></a>
//                         <a href="/services"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Oncology</p></a>
//                         <a href="/services"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Surgery</p></a>
//                     </div>

//                     {/* Patient Resources */}
//                     <div className="flex flex-col gap-4 lg:w-[23%]">
//                         <h4 className="text-[18px] leading-5 tracking-[.35px] text-[#DDDCD6] font-semibold">Patient Resources</h4>
//                         <a href="/emergency"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Book Appointment</p></a>
//                         <a href="/emergency"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Emergency Services</p></a>
//                         <a href="/emergency"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Insurance Partners</p></a>
//                         <a href="/emergency"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Medical Records</p></a>
//                         <a href="/emergency"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Visitor Information</p></a>
//                     </div>

//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="w-full border-t border-b-0 border-r-0 border-l-0 border-solid border-[#FFFFFF80] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 py-4">
//                     <p className="text-[16px] lg:text-[14px] font-normal leading-5 text-[#FFFFFF80]">
//                         © {new Date().getFullYear()} Medical Center. All rights reserved.
//                     </p>
//                     <div className="flex gap-5 lg:gap-7">
//                         <a href="/"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Privacy</p></a>
//                         <a href="/"><p className="text-[16px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Terms</p></a>
//                         <a href="/"><p className="text-[15px] lg:text-[14px] font-normal leading-5 tracking-[.35px] text-[#FFFFFF80] hover:text-[#DDA23C] transition-colors duration-500 ease-in-out">Cookies Policy</p></a>
//                     </div>
//                 </div>

//             </div>
//         </footer>
//     )
// }

// export default FooterSection

































function FooterSection() {
  const linkClass =
    'text-sm font-normal leading-5 tracking-wide text-white/50 hover:text-[#DDA23C] transition-colors duration-300 ease-in-out'

  return (
    <footer className="w-full py-12 lg:py-16 bg-[#1e293e] flex justify-center items-center">
      <div className="w-[93%] max-w-7xl flex flex-col gap-10 lg:gap-12">

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div data-reveal className="flex flex-col gap-4 lg:col-span-1">
            <a href="/">
              <h2 className="text-3xl leading-9 font-light text-white font-playfair">
                Medical Center
              </h2>
            </a>
            <p className="text-sm font-normal leading-6 text-white/50 max-w-xs">
              Providing world-class healthcare with compassion, innovation, and
              excellence for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div data-reveal data-delay="80" className="flex flex-col gap-3">
            <h4 className="text-base leading-5 tracking-wide text-[#DDDCD6] font-semibold mb-1">
              Quick Links
            </h4>
            <a href="/"          className={linkClass}>About Us</a>
            <a href="/services"  className={linkClass}>Our Services</a>
            <a href="/doctor"    className={linkClass}>Find a Doctor</a>
            <a href="/hospital"  className={linkClass}>Hospital Tour</a>
            <a href="/emergency" className={linkClass}>Patient Portal</a>
          </div>

          {/* Departments */}
          <div data-reveal data-delay="160" className="flex flex-col gap-3">
            <h4 className="text-base leading-5 tracking-wide text-[#DDDCD6] font-semibold mb-1">
              Departments
            </h4>
            <a href="/services" className={linkClass}>Cardiology</a>
            <a href="/services" className={linkClass}>Neurology</a>
            <a href="/services" className={linkClass}>Pediatrics</a>
            <a href="/services" className={linkClass}>Orthopedics</a>
            <a href="/services" className={linkClass}>Oncology</a>
            <a href="/services" className={linkClass}>Surgery</a>
          </div>

          {/* Patient Resources */}
          <div data-reveal data-delay="240" className="flex flex-col gap-3">
            <h4 className="text-base leading-5 tracking-wide text-[#DDDCD6] font-semibold mb-1">
              Patient Resources
            </h4>
            <a href="/emergency" className={linkClass}>Book Appointment</a>
            <a href="/emergency" className={linkClass}>Emergency Services</a>
            <a href="/emergency" className={linkClass}>Insurance Partners</a>
            <a href="/emergency" className={linkClass}>Medical Records</a>
            <a href="/emergency" className={linkClass}>Visitor Information</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          data-reveal
          className="w-full border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 pt-5"
        >
          <p className="text-sm font-normal leading-5 text-white/50">
            © {new Date().getFullYear()} Medical Center. All rights reserved.
          </p>
          <div className="flex gap-5 lg:gap-6">
            <a href="/" className={linkClass}>Privacy</a>
            <a href="/" className={linkClass}>Terms</a>
            <a href="/" className={linkClass}>Cookies Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default FooterSection