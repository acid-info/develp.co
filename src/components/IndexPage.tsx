import React, { useEffect } from 'react'
import { useLocation } from '@docusaurus/router'

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return null
}

export default function IndexPage() {
  return (
    <div className="index-page">
      <ScrollToHash />
      <section
        className="relative min-h-[819px] flex items-center px-8 lg:px-24 stark-grid border-b border-surface-container-highest"
        id="commitment"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="bg-surface-container-highest text-primary px-4 py-1 font-label text-[0.6875rem] tracking-[0.1em] uppercase">
              Securing Ethereum since Block 1 of Proof of Stake.
            </span>
            <h1 className="text-[3.5rem] lg:text-[5rem] font-bold leading-[0.9] tracking-tight font-headline text-white uppercase">
              Our <br /> Mission
            </h1>
            <p className="text-on-surface text-xl max-w-md font-body leading-relaxed border-l-4 border-white pl-6">
              We support Ethereum staking with core infrastructure and operational
              services. We strive to provide high-quality, reliable services to
              partnering protocols operating Ethereum nodes.
            </p>
          </div>
          <div className="relative">
            <img
              alt="Abstract 3D wireframe mesh of geometric shapes"
              className="w-full grayscale brightness-125 contrast-125 mix-blend-lighten"
              src="/img/hero-wireframe.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      <section
        className="py-32 px-8 lg:px-24 bg-surface-container-lowest"
        id="focus"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[2.5rem] font-bold font-headline uppercase tracking-tighter text-white">
              Our Key Focus
            </h2>
            <div className="h-1 w-24 bg-surface-container-highest mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-container-highest">
            <div className="bg-surface p-10 group hover:bg-surface-container transition-colors duration-300">
              <span
                className="material-symbols-outlined text-4xl mb-6 text-white"
                data-icon="dns"
              >
                dns
              </span>
              <h3 className="text-xl font-bold font-headline uppercase mb-4 text-white">
                Institutional Uptime
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Our battle-tested tech stack ensuring the highest availability and
                participation.
              </p>
            </div>
            <div className="bg-surface p-10 group hover:bg-surface-container transition-colors duration-300">
              <span
                className="material-symbols-outlined text-4xl mb-6 text-white"
                data-icon="shield"
              >
                shield
              </span>
              <h3 className="text-xl font-bold font-headline uppercase mb-4 text-white">
                Hardened Defense
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Close relationship with the Nimbus team to ensure best support and
                knowledge.
              </p>
            </div>
            <div className="bg-surface p-10 group hover:bg-surface-container transition-colors duration-300">
              <span
                className="material-symbols-outlined text-4xl mb-6 text-white"
                data-icon="monitoring"
              >
                monitoring
              </span>
              <h3 className="text-xl font-bold font-headline uppercase mb-4 text-white">
                Real-time Telemetry
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                State of the art monitoring stack providing high visibility and
                alerting into node health and performance.
              </p>
            </div>
            <div className="bg-surface p-10 group hover:bg-surface-container transition-colors duration-300">
              <span
                className="material-symbols-outlined text-4xl mb-6 text-white"
                data-icon="hub"
              >
                hub
              </span>
              <h3 className="text-xl font-bold font-headline uppercase mb-4 text-white">
                Client Diversity
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Supporting minority clients to ensure network resilience and prevent
                single-point failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 px-8 lg:px-24 bg-surface border-y border-surface-container-highest"
        id="results"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black font-headline uppercase tracking-tighter text-white mb-6">
                Our Current <br /> Results
              </h2>
              <p className="text-on-surface-variant font-body mb-8">
                Performance metrics audited and verified in real-time across all
                supported networks.
              </p>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest p-6 border-l-4 border-white">
                  <span className="text-[0.6875rem] font-label uppercase tracking-widest block mb-1">
                    Total ETH Staked
                  </span>
                  <span className="text-3xl font-bold font-headline text-white">
                    446 797
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-6">
                  <span className="text-[0.6875rem] font-label uppercase tracking-widest block mb-1">
                    Total Validators
                  </span>
                  <span className="text-3xl font-bold font-headline text-white">
                    6974
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 bg-surface-container-lowest p-8 lg:p-12 border border-surface-container-highest relative">
              <div className="flex justify-between items-end h-64 gap-4 mb-8">
                <div className="w-full bg-surface-container-highest h-[40%] transition-all hover:bg-white"></div>
                <div className="w-full bg-surface-container-highest h-[65%] transition-all hover:bg-white"></div>
                <div className="w-full bg-surface-container-highest h-[85%] transition-all hover:bg-white"></div>
                <div className="w-full bg-surface-container-highest h-[75%] transition-all hover:bg-white"></div>
                <div className="w-full bg-surface-container-highest h-[95%] transition-all hover:bg-white"></div>
                <div className="w-full bg-white h-[100%]"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <span className="text-4xl font-bold font-headline text-white block">
                    99.94%
                  </span>
                  <span className="text-[0.625rem] font-label uppercase tracking-widest text-on-surface-variant">
                    Inclusion Rate
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-bold font-headline text-white block">
                    6974
                  </span>
                  <span className="text-[0.625rem] font-label uppercase tracking-widest text-on-surface-variant">
                    Active Validators
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-bold font-headline text-white block">
                    0.00%
                  </span>
                  <span className="text-[0.625rem] font-label uppercase tracking-widest text-on-surface-variant">
                    Slashing Record
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-bold font-headline text-white block">
                    24/7
                  </span>
                  <span className="text-[0.625rem] font-label uppercase tracking-widest text-on-surface-variant">
                    Ops Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 px-8 lg:px-24 bg-surface-container-low stark-grid"
        id="solutions"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black font-headline uppercase tracking-tighter text-white">
              The Solution We Propose
            </h2>
            <p className="mt-4 text-on-surface-variant tracking-[0.2em] uppercase text-xs">
              Architectural Excellence for Every Stakeholder
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-surface border border-surface-container-highest p-12 flex flex-col justify-between group">
              <div>
                <span className="text-white text-6xl font-bold opacity-10 font-headline mb-4 block">
                  01
                </span>
                <h3 className="text-3xl font-bold font-headline uppercase text-white mb-6">
                  Proven Setup
                </h3>
                <p className="text-on-surface-variant font-body leading-relaxed mb-8">
                  Maximize the Reward with MEV Boost. High uptime while reducing the
                  risks with a multi layer setup. A battle-tested architecture.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-sm text-on-surface">
                    <span
                      className="material-symbols-outlined text-primary text-lg"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    Resilient
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface">
                    <span
                      className="material-symbols-outlined text-primary text-lg"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    Secure
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface">
                    <span
                      className="material-symbols-outlined text-primary text-lg"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    MEV Rewards
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-12 flex flex-col justify-between">
              <div>
                <span className="text-black text-6xl font-bold opacity-10 font-headline mb-4 block">
                  02
                </span>
                <h3 className="text-3xl font-bold font-headline uppercase text-black mb-6">
                  State Of the Art
                </h3>
                <p className="text-on-secondary font-body leading-relaxed mb-8">
                  Maximum security and uptime with the latest technology available.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-sm text-on-secondary">
                    <span
                      className="material-symbols-outlined text-black text-lg"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    Distributed Validator Technology
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-secondary">
                    <span
                      className="material-symbols-outlined text-black text-lg"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    Secure
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-secondary">
                    <span
                      className="material-symbols-outlined text-black text-lg"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    PBS rewards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 px-8 lg:px-24 bg-surface border-t border-surface-container-highest"
        id="contact"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div>
            <h2 className="text-5xl font-black font-headline uppercase text-white mb-8">
              Contact Develp
            </h2>
            <p className="text-xl text-on-surface-variant mb-12 font-body max-w-md">
              Our engineers are standing by to assist with institutional onboarding
              and custom deployment queries.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-white"
                    data-icon="mail"
                  >
                    mail
                  </span>
                </div>
                <div>
                  <span className="text-[0.625rem] font-label uppercase tracking-widest text-on-surface-variant block">
                    Email
                  </span>
                  <a
                    className="text-lg font-headline text-white hover:underline"
                    href="mailto:staking@develp.co"
                  >
                    staking@develp.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
