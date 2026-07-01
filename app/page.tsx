"use client";

import { useState } from "react";

const focusAreas = [
  {
    title: "Product Strategy",
    description:
      "From identifying opportunities to shipping products that deliver measurable business value.",
  },
  {
    title: "Enterprise AI Adoption",
    description:
      "Helping organizations move from AI experimentation to everyday use.",
  },
  {
    title: "Applied Machine Learning",
    description:
      "Building production systems across LLMs, forecasting, NLP, computer vision, and predictive modeling.",
  },
  {
    title: "Responsible AI",
    description:
      "Governance, evaluation, and practical approaches that make AI reliable and trustworthy.",
  },
  {
    title: "Leadership & Team Building",
    description:
      "Growing high-performing AI organizations and mentoring the next generation of technical leaders.",
  },
];

const articles = [
  {
    slug: "meal-prep-app",
    title: "I Built an End to End Meal Prep App & I Hated It",
    date: "Jun 30, 2026",
    category: "Side Projects",
    excerpt:
      "Building a meal-planning app reminded me how to start small and automate the actual grunt work, not the fun parts.",
  },
  {
    slug: "signalstack",
    title: "Use AI to Teach You AI (Don't Outsource Your Brain)",
    date: "Mar 28, 2026",
    category: "Side Projects",
    excerpt:
      "Why I built a feed that aggregates my newsletters and podcasts instead of asking just AI to summarize them for me.",
  },
  {
    slug: "how-have-talk-your-kids-ai",
    title: "How to Have “The Talk” With Your Kids (About AI)",
    date: "Feb 26, 2026",
    category: "Parenting",
    excerpt:
      "Thoughts on what to teach kids about AI and careers from a sleep-deprived mom on maternity leave.",
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-pine font-sans">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-sand bg-cream/95 backdrop-blur-sm">
        <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 min-w-0">
            <img src="/images/logo-transparent.png" alt="" className="h-8 w-8 md:h-9 md:w-9 object-contain flex-shrink-0" />
            <span className="font-serif text-base md:text-lg tracking-wide text-pine whitespace-nowrap">
              Callie Federer
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-pine/60">
            <a href="#writing" className="hover:text-gold transition-colors">
              Writing
            </a>
            <a href="#about" className="hover:text-gold transition-colors">
              About
            </a>
            <a
              href="https://github.com/cfederer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/callie-federer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex-shrink-0 p-2 -mr-2 text-pine"
          >
            <span className="block w-5 h-px bg-pine mb-1.5" />
            <span className="block w-5 h-px bg-pine mb-1.5" />
            <span className="block w-5 h-px bg-pine" />
          </button>
          {menuOpen && (
            <div className="md:hidden absolute right-6 top-full mt-2 w-44 rounded-lg border border-sand bg-cream shadow-lg px-5 py-4 flex flex-col gap-4 text-xs font-semibold tracking-widest uppercase text-pine/60">
              <a href="#writing" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">
                Writing
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">
                About
              </a>
              <a
                href="https://github.com/cfederer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/callie-federer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <img src="/images/logo-transparent.png" alt="" className="h-32 w-32 object-contain mb-8" />
          <h1 className="font-serif text-5xl md:text-6xl tracking-wide text-pine mb-8">
            CALLIE FEDERER
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-24 h-px bg-gold" />
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="w-24 h-px bg-gold" />
          </div>
          <p className="font-serif text-xl md:text-2xl tracking-wide text-pine/80 mb-8">
            AI/ML &amp; Data Science Leader
          </p>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-16 h-px bg-gold" />
            <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-gold">
              Strategy Grounded in Real Impact
            </p>
            <span className="w-16 h-px bg-gold" />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#writing"
              className="bg-pine text-cream font-semibold px-6 py-3 rounded-full text-sm tracking-wide hover:bg-dusty transition-colors"
            >
              Read my writing
            </a>
            <a
              href="#about"
              className="border border-pine/30 text-pine font-semibold px-6 py-3 rounded-full text-sm tracking-wide hover:bg-pine/5 transition-colors"
            >
              More about me
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6">

        {/* Writing */}
        <section id="writing" className="py-24 border-b border-sand">
          <p className="font-serif text-3xl text-pine mb-3">Writing</p>
          <div className="w-12 h-px bg-gold mb-12" />
          <div className="divide-y divide-sand">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`/posts/${article.slug}`}
                className="group block py-8 flex items-start justify-between gap-8"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-gold">
                      {article.category}
                    </span>
                    <span className="text-sage">·</span>
                    <span className="text-xs text-dusty">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-pine mb-2 group-hover:text-dusty transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pine/60 max-w-2xl">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex-shrink-0 pt-2">
                  <span className="text-sm font-medium text-sage group-hover:text-gold transition-colors">
                    Read →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24">
          <p className="font-serif text-3xl text-pine mb-3">About</p>
          <div className="w-12 h-px bg-gold mb-12" />
          <img
            src="/images/hike-photo.jpeg"
            alt="Callie hiking in the Rockies with her husband and dogs"
            className="w-full max-w-2xl mb-12 rounded"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-5 text-pine/70 leading-relaxed">
              <p>
                Hi, I'm Callie.
              </p>
              <p>
                I lead AI/ML and data science teams that build products solving real business problems (and making real money).
              </p>
              <p>
                Over the past decade I've taken machine learning from research labs into production,
                 shipping everything from fraud detection systems and pricing engines to enterprise 
                 GenAI platforms and AI-powered education tools. My favorite problems sit somewhere 
                 between technical possibility and business reality. I love figuring out where AI creates
                  real value, where it doesn't, and how to earn the trust needed for people to actually use it.
              </p>
              <p>
                My path into data science wasn't exactly planned. I started in computer science because I loved building software, 
                but I kept finding myself drawn towards biology and the complexity of living systems. That curiosity led me to a Ph.D. 
                in Computational Bioscience, a decision that unexpectedly took me 
                from the Midwest to Denver and changed the direction of my career from what I thought would be more about writing software 
                to building intelligent systems instead.
              </p>
              <p>
                After nearly a decade in Colorado, I recently returned home to St. Louis to complete my Executive MBA at Washington University 
                and made the questionable choice to start a family at the same time. So far so good. 
                The EMBA pushed me to think beyond algorithms and models and spend more time asking the bigger questions: 
                What problems are actually worth solving? How do you build organizations that embrace AI instead of fearing it? 
                And how do you make technical decisions that hold up long after the excitement around a new model fades?
              </p>

              <p>
                I have earned a rep for being an AI expert who hates AI. That's not totally unfair. 
                I'm amazed and appreciative of the advancements I've gotten to see in AI in my career.
                I'm also skeptical of the hype and tendency to over-apply and over-engineer solutions.
                I alsothink a lot about the human impact of technology and AI. AI has a lot of potential 
                to make our lives better. And worse. 

              </p>

              <p>
                Becoming a parent has also changed how I think about technology. 
                I spend a lot more time wondering what kind of world we're building and what role AI should play in it. 
                I don't want a future where technology replaces curiosity, creativity, or human connection.
                I want one where it helps us make better decisions, frees us to do more meaningful work, and leaves us with more time for the people (and pets) we care about.

              </p>
              <div className="flex items-center gap-5 pt-2">
                <a
                  href="https://github.com/cfederer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-pine border-b border-pine hover:text-gold hover:border-gold transition-colors pb-0.5"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/callie-federer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-pine border-b border-pine hover:text-gold hover:border-gold transition-colors pb-0.5"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-dusty mb-6">
                Focus Areas
              </p>
              <ul className="space-y-6">
                {focusAreas.map((area) => (
                  <li key={area.title} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-pine font-semibold mb-1">{area.title}</p>
                      <p className="text-sm text-pine/60 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate text-cream">
        <div className="mx-auto max-w-5xl px-6 py-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo-green.png" alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-sm text-cream/60">© 2026 Callie Federer</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-cream/70">
            <a
              href="https://github.com/cfederer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/callie-federer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
