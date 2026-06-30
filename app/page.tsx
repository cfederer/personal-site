const articles = [
  {
    slug: "how-have-talk-your-kids-ai",
    title: "How to Have “The Talk” With Your Kids (About AI)",
    date: "Feb 26, 2026",
    category: "Parenting · AI",
    excerpt:
      "Thoughts on what to teach kids about AI, careers, and how to develop judgment in an AI-powered world.",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-pine font-sans">

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-sand bg-cream/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo-cream.png" alt="" className="h-9 w-9 rounded-full object-cover" />
            <span className="font-serif text-lg tracking-wide text-pine">
              Callie Federer
            </span>
          </a>
          <div className="flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-pine/60">
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
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/mountain1.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/40 to-slate/40" />
        </div>
        <div className="mx-auto max-w-5xl px-6 py-40 md:py-56">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
            AI &amp; Data Science Leader
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-cream max-w-2xl mb-6">
            AI strategy with a <em className="italic text-sand">human</em> perspective.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-cream/80 mb-10">
            Bridging people, technology, and real-world impact.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#writing"
              className="bg-gold text-slate font-semibold px-6 py-3 rounded-full text-sm tracking-wide hover:bg-sand transition-colors"
            >
              Read my writing
            </a>
            <a
              href="#about"
              className="border border-cream/40 text-cream font-semibold px-6 py-3 rounded-full text-sm tracking-wide hover:bg-cream/10 transition-colors"
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
                I've always loved the space where technology meets real-world decision making.
                Today I lead AI and data science teams, building products that help people work smarter,
                make better decisions, and solve problems that aren't obvious at first glance.
              </p>
              <p>
                I've worked on everything from AI fraud detection and pricing engines
                to generative AI assistants and an AI-powered calculus tutor that led
                to Pearson's first NeurIPS paper. What keeps me interested isn't just the latest model,
                although that is usually fun, but it's figuring out where AI actually belongs and building products that people trust.
              </p>
              <p>
                I earned a B.S. in Computer Science, a Ph.D. in Computational Bioscience from the University of Colorado Anschutz Medical Campus,
                and an Executive MBA from Washington University in St. Louis. Along the way I've been fortunate to lead incredible teams,
                speak at industry conferences, and work across healthcare, logistics, education, and SaaS.
              </p>
              <p>
                I also have a reputation for being the 'AI-expert who hates AI'. That's not true,
                I love AI enough to use it to make this website. I'm amazed at the work that can be done.
                I also believe in being clear on limitations and the value of human intuition. Plus,
                I think it's really important to touch grass and get away from technology.
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
              <ul className="space-y-4">
                {[
                  "AI/ML Strategy & Governance",
                  "GenAI Enablement",
                  "Applied ML: LLMs, RAG, NLP, Computer Vision",
                  "MLOps & Production Systems",
                  "Team Building",
                ].map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-4 text-pine font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {area}
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
