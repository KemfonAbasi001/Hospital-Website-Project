// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'

// function NavBar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <header id='nav-header' className={`w-full flex justify-center items-center fixed top-0 z-[3000] transition-all duration-300 ${isScrolled ? 'bg-[#FFFFFF] shadow-md' : 'bg-transparent'}`}>
//       <nav className='mx-auto my-0 w-[93%] py-4.5 lg:py-3.5 px-0 flex flex-row justify-between items-center'>

//         <a href="/" className="">
//           <h1 className={`text-[25px] leading-7 tracking-[.5px] font-playfair font-medium transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Medical Center</h1>
//         </a>

//         <ul className=" gap-7 hidden xl:flex">
//           <li>
//             <a href="/" className={`text-[16px] leading-5 ${isActive('/') ? 'font-semibold' : 'font-light'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Home</a>
//           </li>
//           <li>
//             <a href="/services" className={`text-[16px] leading-5 ${isActive('/services') ? 'font-semibold' : 'font-light'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Services</a>
//           </li>
//           <li>
//             <a href="/doctor" className={`text-[16px] leading-5 ${isActive('/doctor') ? 'font-semibold' : 'font-light'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Our Doctors</a>
//           </li>
//           <li>
//             <a href="/hospital" className={`text-[16px] leading-5 ${isActive('/hospital') ? 'font-semibold' : 'font-light'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Hospital Tour</a>
//           </li>
//           <li>
//             <a href="/emergency" className={`text-[16px] leading-5 ${isActive('/emergency') ? 'font-semibold' : 'font-light'} tracking-[.35px] transition-colors duration-300 ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>Emergency</a>
//           </li>
//         </ul>

//         <div className="flex gap-3 justify-center items-center md:flex">

//           <a href="/emergency" className="hidden md:flex gap justify-center items-center text-[.8rem] py-2.5 px-5 rounded-3xl leading-5 font-medium text-[#151C28] bg-[#DDA23C]">
//             Book a Consultation
//             {/* Fixed: merged into single className */}
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4">
//               <path d="M5 12h14"></path>
//               <path d="m12 5 7 7-7 7"></path>
//             </svg>
//           </a>

//           <a href="/emergency" className={`hidden md:flex gap justify-center items-center text-[.8rem] py-2.5 px-5 rounded-3xl leading-5 font-medium border-[.3px] border-solid transition-colors duration-300 ${isScrolled ? 'text-[#151C28] border-[#151C28]' : 'text-[#FFFFFF] border-[white]'}`}>
//             {/* Fixed: merged into single className */}
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-3 w-4 h-4">
//               <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//             </svg>
//             Emergency Care
//           </a>

//           {/* Fixed: closed template literal properly */}
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={`w-7 h-7 xl:hidden ${isScrolled ? 'fill-[#151C28]' : 'fill-white'}`}>
//             <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
//           </svg>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default NavBar











import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',          path: '/'          },
  { label: 'Services',      path: '/services'  },
  { label: 'Our Doctors',   path: '/doctor'    },
  { label: 'Hospital Tour', path: '/hospital'  },
  { label: 'Emergency',     path: '/emergency' },
]

function NavBar() {
  const [isScrolled, setIsScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]     = useState(false)
  const location = useLocation()

  /* ── scroll detection ── */
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── close menu on route change ── */
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  function isActive(path) { return location.pathname === path }
  function toggleMenu()   { setMenuOpen(prev => !prev) }

  return (
    <>
      <style>{`
        /* ── Hamburger ── */
        .hbg-line {
          display: block;
          width: 22px;
          height: 1.5px;
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      opacity   0.25s ease,
                      width     0.35s cubic-bezier(0.22,1,0.36,1);
          transform-origin: center;
        }

        /* ── Overlay panel ── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 2999;
          background: #0d1117;
          clip-path: circle(0% at calc(100% - 36px) 36px);
          transition: clip-path 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .mobile-overlay.open {
          clip-path: circle(150% at calc(100% - 36px) 36px);
          pointer-events: all;
        }

        /* ── Staggered nav items ── */
        .mobile-nav-item {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .mobile-overlay.open .mobile-nav-item {
          opacity: 1;
          transform: translateX(0);
        }

        /* Stagger delays */
        .mobile-overlay.open .mobile-nav-item:nth-child(1) { transition-delay: 0.18s; }
        .mobile-overlay.open .mobile-nav-item:nth-child(2) { transition-delay: 0.24s; }
        .mobile-overlay.open .mobile-nav-item:nth-child(3) { transition-delay: 0.30s; }
        .mobile-overlay.open .mobile-nav-item:nth-child(4) { transition-delay: 0.36s; }
        .mobile-overlay.open .mobile-nav-item:nth-child(5) { transition-delay: 0.42s; }

        .mobile-cta-group {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.4s ease 0.52s, transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.52s;
        }
        .mobile-overlay.open .mobile-cta-group {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Active link underline ── */
        .mobile-nav-link {
          position: relative;
          display: inline-block;
        }
        .mobile-nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 0; height: 1px;
          background: #DDA23C;
          transition: width 0.3s ease;
        }
        .mobile-nav-link.active-link::after { width: 100%; }
        .mobile-nav-link:hover::after       { width: 100%; }

        @media (prefers-reduced-motion: reduce) {
          .mobile-overlay,
          .mobile-nav-item,
          .mobile-cta-group,
          .hbg-line { transition: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HEADER BAR
      ══════════════════════════════════════ */}
      <header
        className={`w-full flex justify-center items-center fixed top-0 z-[3000] transition-all duration-300
          ${isScrolled || menuOpen ? 'bg-[#FFFFFF] shadow-md' : 'bg-transparent'}`}
      >
        <nav className="mx-auto my-0 w-[93%] py-4.5 lg:py-3.5 flex flex-row justify-between items-center">

          {/* Logo */}
          <a href="/">
            <h1 className={`text-[25px] leading-7 tracking-[.5px] font-playfair font-medium transition-colors duration-300
              ${isScrolled || menuOpen ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}>
              Medical Center
            </h1>
          </a>

          {/* Desktop links */}
          <ul className="gap-7 hidden xl:flex">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <a
                  href={path}
                  className={`text-[16px] leading-5 ${isActive(path) ? 'font-semibold' : 'font-light'}
                    tracking-[.35px] transition-colors duration-300
                    ${isScrolled ? 'text-[#151C28]' : 'text-[#FFFFFF]'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs + hamburger */}
          <div className="flex gap-3 justify-center items-center">
            <a
              href="/emergency"
              className="hidden md:flex gap-0 justify-center items-center text-[.8rem] py-2.5 px-5 rounded-3xl leading-5 font-medium text-[#151C28] bg-[#DDA23C]"
            >
              Book a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>

            <a
              href="/emergency"
              className={`hidden md:flex gap-0 justify-center items-center text-[.8rem] py-2.5 px-5 rounded-3xl leading-5 font-medium border-[.3px] border-solid transition-colors duration-300
                ${isScrolled ? 'text-[#151C28] border-[#151C28]' : 'text-[#FFFFFF] border-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2.5 w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Emergency Care
            </a>

            {/* Hamburger — visible below xl */}
            <button
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="xl:hidden flex flex-col gap-[5px] justify-center items-end w-8 h-8 cursor-pointer"
            >
              <span
                className="hbg-line"
                style={{
                  background: isScrolled || menuOpen ? '#151C28' : '#fff',
                  transform:  menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="hbg-line"
                style={{
                  width:      menuOpen ? '22px' : '14px',   /* short second line */
                  background: isScrolled || menuOpen ? '#151C28' : '#fff',
                  opacity:    menuOpen ? 0 : 1,
                }}
              />
              <span
                className="hbg-line"
                style={{
                  background: isScrolled || menuOpen ? '#151C28' : '#fff',
                  transform:  menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ══════════════════════════════════════
          MOBILE FULL-SCREEN OVERLAY
      ══════════════════════════════════════ */}
      <div className={`mobile-overlay xl:hidden ${menuOpen ? 'open' : ''}`}>
        <div className="flex flex-col justify-between h-full px-8 pt-28 pb-12">

          {/* Nav links */}
          <ul className="flex flex-col gap-8">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path} className="mobile-nav-item">
                <a
                  href={path}
                  className={`mobile-nav-link text-[36px] sm:text-[42px] leading-tight font-playfair font-medium text-white
                    ${isActive(path) ? 'active-link text-[#DDA23C]' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom CTAs + contact */}
          <div className="mobile-cta-group flex flex-col gap-5">
            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-3">
              <a
                href="/emergency"
                className="flex justify-center items-center gap-2 text-sm py-3.5 px-6 rounded-full font-medium text-[#151C28] bg-[#DDA23C] w-full"
              >
                Book a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>

              <a
                href="/emergency"
                className="flex justify-center items-center gap-2 text-sm py-3.5 px-6 rounded-full font-medium text-white border border-white/30 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Emergency Care
              </a>
            </div>

            <p className="text-white/30 text-xs tracking-widest uppercase text-center">
              Medical Center
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar