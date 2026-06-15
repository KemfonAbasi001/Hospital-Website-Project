import bg_image from '../assets/hero-bg-02.webp'

function CTASection() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.70), rgba(0,0,0,0.70)), url(${bg_image})`,
      }}
      className="w-full py-20 lg:py-32 flex justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col justify-center items-center text-center gap-4 lg:gap-5 px-5 w-full max-w-3xl">

        <p
          data-reveal
          className="text-xs leading-4 tracking-[5.3px] font-medium text-[#DDA23C] uppercase"
        >
          Begin Your Journey
        </p>

        <h2
          data-reveal
          data-delay="80"
          className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-white font-playfair"
        >
          Your Health Deserves{' '}
          <span className="italic text-[#DDA23C]">
            Nothing Less
          </span>{' '}
          Than the Best
        </h2>

        <p
          data-reveal
          data-delay="160"
          className="text-sm md:text-base lg:text-lg leading-7 font-normal text-[#AEACA9] max-w-xl"
        >
          Whether you need a second opinion, a specialized consultation, or
          emergency care — our doors are always open.
        </p>

        <div
          data-reveal
          data-delay="240"
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto mt-1"
        >
          <a
            href="/emergency"
            className="bg-[#DDA23C] hover:bg-[#c8912e] text-black py-3.5 px-8 lg:px-10 text-sm leading-5 font-medium tracking-wide rounded-full flex gap-1.5 items-center justify-center transition-colors duration-200"
          >
            Schedule a Consultation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a
            href="/emergency"
            className="flex gap-1.5 bg-white/15 hover:bg-white/20 border border-white/40 text-[#F8F6F2] py-3.5 px-8 lg:px-10 text-sm leading-5 font-medium tracking-wide rounded-full items-center justify-center transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call 1-800-UUTH
          </a>
        </div>

      </div>
    </section>
  )
}

export default CTASection