const articles = [
  {
    slug: "how-have-talk-your-kids-ai",
    title: "How to Have “The Talk” With Your Kids (About AI)",
    date: "Feb 26, 2026",
    category: "Parenting · AI",
    excerpt:
      "Thoughts on what to teach kids about AI, careers, and how to develop judgment in an AI-powered world.",
  },
  {
    slug: "getting-started-with-llms",
    title: "Getting Started with Large Language Models",
    date: "Feb 10, 2026",
    category: "AI / LLMs",
    excerpt:
      "An accessible introduction to LLMs — how they work, when to use them, and practical tips for getting started in your own projects.",
  },
  {
    slug: "eda-patterns",
    title: "Exploratory Data Analysis Patterns I Keep Coming Back To",
    date: "Jan 28, 2026",
    category: "Data Science",
    excerpt:
      "A collection of Pandas and visualization patterns that have saved me hours during the early stages of every data project.",
  },
  {
    slug: "mlops-in-practice",
    title: "MLOps in Practice: From Notebook to Production",
    date: "Jan 14, 2026",
    category: "Machine Learning",
    excerpt:
      "What actually happens when you try to deploy a model at scale — the infrastructure, the gotchas, and the lessons learned.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>

      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-widest uppercase">
            Callie Federer
          </span>
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#writing" className="hover:text-zinc-900 transition-colors">
              Writing
            </a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">
              About
            </a>
            <a
              href="https://github.com/calliefederer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/calliefederer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">

        {/* Hero */}
        <section className="py-24 border-b border-zinc-200">
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-8">
            Data Science · AI · Machine Learning
          </p>
          <h1 className="text-7xl font-bold tracking-tight leading-[1] text-zinc-900 mb-10">
            Callie<br />Federer.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-zinc-500">
            I work at the intersection of data, AI, and real-world systems.
            Here I share what I&apos;m learning, building, and thinking about.
          </p>
        </section>

        {/* Writing */}
        <section id="writing" className="py-20 border-b border-zinc-200">
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-12">
            Writing
          </p>
          <div className="divide-y divide-zinc-100">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group py-8 flex items-start justify-between gap-8 cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">
                      {article.category}
                    </span>
                    <span className="text-zinc-300">·</span>
                    <span className="text-xs text-zinc-400">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500 max-w-2xl">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex-shrink-0 pt-2">
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-900 transition-colors">
                    Read →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-12">
            About
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-5 text-zinc-600 leading-relaxed">
              <p>
                Hi, I&apos;m Callie — a data scientist and ML practitioner with a passion
                for turning complex data into clear, actionable insights.
              </p>
              <p>
                I&apos;m particularly interested in large language models, applied machine
                learning, and building systems that are both technically sound and
                genuinely useful.
              </p>
              <p>
                This site is where I think out loud — sharing articles, project writeups,
                and notes on what I&apos;m learning.
              </p>
              <div className="flex items-center gap-5 pt-2">
                <a
                  href="https://github.com/calliefederer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 border-b border-zinc-900 hover:text-zinc-500 hover:border-zinc-500 transition-colors pb-0.5"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/calliefederer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 border-b border-zinc-900 hover:text-zinc-500 hover:border-zinc-500 transition-colors pb-0.5"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">
                Focus Areas
              </p>
              <ul className="space-y-4">
                {[
                  "Large Language Models & GenAI",
                  "Applied Machine Learning",
                  "Data Science & EDA",
                  "MLOps & Production Systems",
                  "Personal Projects",
                ].map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-4 text-zinc-800 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
          <span className="text-sm text-zinc-400">© 2026 Callie Federer</span>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a
              href="https://github.com/calliefederer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/calliefederer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
