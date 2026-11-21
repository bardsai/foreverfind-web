import { Link } from 'react-router-dom'

type HomeConceptProps = {
  variant: 'editorial' | 'warm'
}

const services = [
  {
    number: '01',
    title: 'Wedding hosting',
    description: 'A confident, caring presence to guide every moment of your celebration.',
  },
  {
    number: '02',
    title: 'Traditional chanting',
    description: 'Meaningful words and blessings that bring your family’s traditions to life.',
  },
  {
    number: '03',
    title: 'Celebrations',
    description: 'Thoughtful hosting for birthdays and the milestones worth remembering.',
  },
  {
    number: '04',
    title: 'Matchmaking',
    description: 'A more personal path to a lasting partnership, guided by your values.',
  },
]

const galleryImages = [
  { src: '/wedding-01.webp', alt: 'A joyful moment at a wedding celebration' },
  { src: '/wedding-02.webp', alt: 'A couple celebrating with their guests' },
  { src: '/wedding-03.webp', alt: 'A vibrant traditional wedding celebration' },
]

export default function HomeConcept({ variant }: HomeConceptProps) {
  const isEditorial = variant === 'editorial'
  const conceptName = isEditorial ? 'Editorial' : 'Warm & welcoming'

  return (
    <main className={isEditorial ? 'bg-[#F7F4EE] text-[#29241F]' : 'bg-[#FFF8F1] text-[#482F2B]'}>
      <header className={`relative z-10 ${isEditorial ? 'border-b border-[#29241F]/10 bg-[#F7F4EE]' : 'bg-[#FFF8F1]'}`}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <Link to="/" className="leading-none" aria-label="Forever Find home">
            <span className={`block text-xl tracking-[0.12em] ${isEditorial ? 'font-display' : 'font-semibold'}`}>FOREVER FIND</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] opacity-60">Love, culture, celebration</span>
          </Link>

          <nav aria-label="Design concept navigation" className="flex items-center gap-2 text-xs">
            <span className="mr-1 hidden uppercase tracking-[0.16em] opacity-50 sm:inline">Preview</span>
            <Link
              to="/concept/editorial"
              aria-current={isEditorial ? 'page' : undefined}
              className={`rounded-full px-3 py-2 transition-colors ${isEditorial ? 'bg-[#29241F] text-white' : 'hover:bg-[#29241F]/10'}`}
            >
              Editorial
            </Link>
            <Link
              to="/concept/warm"
              aria-current={!isEditorial ? 'page' : undefined}
              className={`rounded-full px-3 py-2 transition-colors ${!isEditorial ? 'bg-[#B84F3A] text-white' : 'hover:bg-[#B84F3A]/10'}`}
            >
              Warm
            </Link>
          </nav>

          <Link
            to="/#booking"
            className={`hidden rounded-full px-5 py-3 text-[11px] font-medium uppercase tracking-[0.13em] sm:inline-flex ${isEditorial ? 'bg-[#29241F] text-white hover:bg-[#8C6C4B]' : 'bg-[#B84F3A] text-white hover:bg-[#8E3B30]'}`}
          >
            Book a consultation
          </Link>
        </div>
      </header>

      <section className={`mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 lg:px-12 lg:pt-12 ${isEditorial ? '' : 'pb-10 sm:pb-14'}`}>
        <div className={`relative isolate overflow-hidden ${isEditorial ? 'grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16' : 'min-h-155 rounded-4xl bg-[#482F2B] px-6 py-20 text-center text-[#FFF8F1] sm:px-12 lg:flex lg:items-center lg:justify-center'}`}>
          {isEditorial ? (
            <>
              <div className="relative z-10 py-8 lg:py-16">
                <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8C6C4B]">
                  <span className="h-px w-8 bg-current" />
                  Yoruba wedding host & celebration specialist
                </p>
                <h1 className="max-w-2xl font-display text-6xl font-light leading-[0.96] tracking-[-0.035em] sm:text-7xl lg:text-[5.5rem]">
                  A beautiful day,
                  <br />
                  <em className="text-[#8C6C4B]">beautifully</em>
                  <br />
                  remembered.
                </h1>
                <p className="mt-7 max-w-lg text-sm leading-7 text-[#29241F]/70 sm:text-base">
                  From the ìdúnàádúrà to the last dance, we bring families together with care, culture, and a little magic.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link to="/#booking" className="rounded-full bg-[#29241F] px-6 py-4 text-[11px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#8C6C4B]">
                    Plan your celebration <span aria-hidden="true">↗</span>
                  </Link>
                  <a href="#services" className="px-3 py-3 text-xs underline decoration-[#8C6C4B]/50 underline-offset-4">
                    Explore what we do
                  </a>
                </div>
                <div className="mt-12 flex gap-8 border-t border-[#29241F]/15 pt-5">
                  <div><p className="font-display text-3xl">250+</p><p className="mt-1 text-[9px] uppercase tracking-[0.18em] opacity-60">Weddings hosted</p></div>
                  <div><p className="font-display text-3xl">8+</p><p className="mt-1 text-[9px] uppercase tracking-[0.18em] opacity-60">Years experienced</p></div>
                  <div><p className="font-display text-3xl">100%</p><p className="mt-1 text-[9px] uppercase tracking-[0.18em] opacity-60">Happy couples</p></div>
                </div>
              </div>
              <div className="relative min-h-105 overflow-hidden rounded-t-[12rem] rounded-b-sm sm:min-h-140">
                <img src="/wedding-01.webp" alt="A couple surrounded by family at their wedding" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#29241F]/45 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 font-display text-xl italic text-white">Honouring every family, every story.</p>
              </div>
            </>
          ) : (
            <>
              <img src="/wedding-02.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" />
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#482F2B]/75 via-[#482F2B]/80 to-[#8E3B30]/90" />
              <div className="absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full border border-[#F4C9A8]/20 sm:-right-20 sm:-top-32" />
              <div className="absolute -right-8 -top-20 -z-10 h-72 w-72 rounded-full border border-[#F4C9A8]/20 sm:-right-8 sm:-top-20" />
              <div className="max-w-3xl">
                <p className="mx-auto mb-6 inline-flex rounded-full border border-[#F4C9A8]/40 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#F4C9A8]">
                  Yoruba wedding host · making memories since 2018
                </p>
                <h1 className="font-display text-6xl font-medium leading-[0.98] tracking-[-0.025em] sm:text-7xl lg:text-8xl">
                  Your people.
                  <br />
                  Your traditions.
                  <br />
                  <em className="text-[#F4C9A8]">Your kind of magic.</em>
                </h1>
                <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#FFF8F1]/80 sm:text-base">
                  We’ll help your families feel at home, keep every tradition close, and make room for the kind of joy everyone talks about.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Link to="/#booking" className="rounded-full bg-[#F4C9A8] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#482F2B] transition-transform hover:-translate-y-0.5">
                    Let’s make it special <span aria-hidden="true">♡</span>
                  </Link>
                  <a href="#services" className="rounded-full border border-white/40 px-7 py-4 text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10">
                    Get to know us
                  </a>
                </div>
                <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-[#FFF8F1]/75">
                  <span>♡ 250+ weddings hosted</span><span>✦ Yoruba tradition, joyfully shared</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 hidden w-48 translate-y-8 rotate-3 overflow-hidden rounded-3xl border-4 border-[#FFF8F1] shadow-2xl md:block lg:w-56">
                <img src="/wedding-03.webp" alt="Guests enjoying a lively wedding celebration" className="aspect-4/5 w-full object-cover" />
              </div>
            </>
          )}
        </div>
      </section>

      <section className={`px-5 py-16 sm:px-8 lg:px-12 ${isEditorial ? 'bg-white' : 'bg-[#F7E9DE]'}`}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className={`text-[10px] uppercase tracking-[0.2em] ${isEditorial ? 'text-[#8C6C4B]' : 'text-[#B84F3A]'}`}>More than a moment</p>
            <h2 className={`mt-4 max-w-md text-4xl leading-tight sm:text-5xl ${isEditorial ? 'font-display font-light' : 'font-display font-medium'}`}>
              Rooted in tradition. <em>Made for you.</em>
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 opacity-70 sm:text-base">
            Every family has its own rhythm. We listen first, then bring all the details together—from heartfelt introductions to a dance floor that keeps calling you back.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className={`text-[10px] uppercase tracking-[0.2em] ${isEditorial ? 'text-[#8C6C4B]' : 'text-[#B84F3A]'}`}>How we can help</p>
            <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">Good things, <em>together.</em></h2>
          </div>
          <Link to="/#booking" className="text-xs underline underline-offset-4 opacity-70 hover:opacity-100">Tell us what you’re planning ↗</Link>
        </div>
        <div className={`grid gap-4 sm:grid-cols-2 ${isEditorial ? 'lg:grid-cols-4' : 'lg:grid-cols-4'}`}>
          {services.map((service) => (
            <article key={service.number} className={`p-6 sm:p-7 ${isEditorial ? 'border-t border-[#29241F]/20 bg-white' : 'rounded-3xl bg-white shadow-[0_8px_30px_rgba(72,47,43,0.06)]'}`}>
              <p className={`text-xs tracking-[0.15em] ${isEditorial ? 'text-[#8C6C4B]' : 'text-[#B84F3A]'}`}>{service.number}</p>
              <h3 className="mt-8 font-display text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 opacity-65">{service.description}</p>
              <Link to="/#booking" className={`mt-7 inline-block text-xs ${isEditorial ? 'underline underline-offset-4' : 'font-medium'}`}>
                Let’s talk <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${isEditorial ? 'bg-[#EAE4D9]' : 'bg-[#F7E9DE]'}`}>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className={`text-[10px] uppercase tracking-[0.2em] ${isEditorial ? 'text-[#8C6C4B]' : 'text-[#B84F3A]'}`}>The moments we keep</p>
              <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">Love looks like <em>this.</em></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 opacity-65">A few glimpses of the joy, colour, and connection we’re lucky to be part of.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {galleryImages.map((image, index) => (
              <figure key={image.src} className={`overflow-hidden ${isEditorial ? 'aspect-4/5' : `aspect-4/5 ${index === 1 ? 'sm:mt-10' : ''} rounded-4xl`}`}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className={`text-[10px] uppercase tracking-[0.2em] ${isEditorial ? 'text-[#8C6C4B]' : 'text-[#B84F3A]'}`}>A note from one of our couples</p>
        <blockquote className={`mx-auto mt-6 max-w-4xl text-3xl leading-tight sm:text-5xl ${isEditorial ? 'font-display font-light' : 'font-display font-medium'}`}>
          “Sophisticated Alaga managed the balance between my English family and James’s Yoruba roots with such humor and grace.”
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.15em] opacity-55">Chloe &amp; James · London Wedding, UK</p>
      </section>

      <section id="booking" className={`px-5 py-20 text-center sm:px-8 sm:py-24 ${isEditorial ? 'bg-[#29241F] text-[#F7F4EE]' : 'bg-[#B84F3A] text-white'}`}>
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-65">Your celebration starts here</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-light leading-tight sm:text-6xl">Tell us what you’re dreaming of.</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-6 opacity-75">We’d love to hear about your people, your plans, and the moments that matter most.</p>
        <Link to="/#booking" className={`mt-8 inline-flex rounded-full px-7 py-4 text-[11px] font-medium uppercase tracking-[0.14em] ${isEditorial ? 'bg-[#F7F4EE] text-[#29241F] hover:bg-[#EAE4D9]' : 'bg-[#FFF8F1] text-[#482F2B] hover:bg-[#F4C9A8]'}`}>
          Book a consultation <span className="ml-2" aria-hidden="true">↗</span>
        </Link>
      </section>

      <footer className={`flex flex-wrap items-center justify-between gap-4 px-5 py-7 text-xs sm:px-8 lg:px-12 ${isEditorial ? 'bg-[#211E1B] text-white/70' : 'bg-[#482F2B] text-white/75'}`}>
        <span className="tracking-[0.15em]">FOREVER FIND · LOVE, CULTURE, CELEBRATION</span>
        <span>Design direction: {conceptName}</span>
        <Link to="/" className="underline underline-offset-4">Back to current site</Link>
      </footer>
    </main>
  )
}
