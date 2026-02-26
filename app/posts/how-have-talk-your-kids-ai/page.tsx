import React from "react";

export default function PostPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
      <main className="mx-auto max-w-5xl px-6 py-20">
        <article>
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Writing</p>
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">How to Have “The Talk” With Your Kids (About AI)</h1>
          <p className="text-sm text-zinc-500 mb-8">Callie Federer — Director of Data Science | AI Realist | Anxious Adventurer | Lifetime Student</p>
          <p className="text-sm text-zinc-400 mb-8">February 26, 2026</p>

          <img
            src="/images/how-talk-kids-ai-placeholder.png"
            alt="How to Have The Talk With Your Kids (About AI)"
            className="w-full max-w-2xl mb-8 rounded"
            onError={(e) => {
              // fallback to svg placeholder if png not uploaded yet
              (e.target as HTMLImageElement).src = "/images/how-talk-kids-ai-placeholder.svg";
            }}
          />

          <div className="prose max-w-none text-zinc-700">
            <p>I’m over here on maternity leave thinking about AI.</p>

            <p>And now that I have an 8-week-old baby boy, I’m thinking even more about the future of jobs. There’s a new tough conversation in town with your kids, and I’m just finally ready to give unsolicited parenting advice now that I’m in the club.</p>

            <p>In my defense, I actually do get asked this a lot.</p>

            <p>What jobs are safe? What should I tell my kids to study? Should they learn to code?</p>

            <p>And I never find a satisfying answer in podcasts or think pieces that promise one.</p>

            <p>Spoiler alert: you probably won’t get one here either..Because I’m not sure there is one.</p>

            <h3>Yes, There’s Always Hype</h3>
            <p>Per Amara’s Law, “we tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run.”</p>

            <p>We’ve seen this before: the internet, smartphones, cloud computing. Early panic. Overconfidence. Undershoot. Then slow, deep, structural transformation. AI is following that same pattern.</p>

            <h3>But…It’s Not Just Hype</h3>
            <p>There is credible evidence that generative AI will meaningfully reshape knowledge work.</p>

            <p>Goldman Sachs (2023) estimated that AI could automate the equivalent of 300 million full-time jobs globally and affect ~25% of current work tasks. Source: <a href="https://www.goldmansachs.com/insights/articles/generative-ai-could-raise-global-gdp-by-7-percent" target="_blank" rel="noreferrer">Goldman Sachs (2023)</a></p>

            <p>McKinsey (2023) estimated that generative AI could automate work activities that take up 60–70% of employees’ time, particularly in knowledge-based roles. Source: <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank" rel="noreferrer">McKinsey (2023)</a></p>

            <p>It’s important to note that entire professions don’t vanish overnight, but chunks of their work might.</p>

            <p>My best guess? Entire skillsets won’t disappear. But the number of people needed to perform certain functions will shrink. We’re already seeing early signals of this in content, marketing, software prototyping, customer support, and parts of finance and law.</p>

            <h3>So…Should You Push Your Kid Into Coding?</h3>
            <p>Fluffy answer you will roll your eyes at: Only if they actually want to learn it.</p>

            <p>But they should likely learn a specific area of interest and problem to apply their coding to as well. It’s impossible to fully predict what AI will automate. Coding tasks are among the most automated right now. Everyone whose work happens at a computer will need to do more with less.</p>

            <p>So here’s the advice I actually give:</p>
            <p>Let your kids follow their interests. Whether it’s computer science, English, philosophy, biology, marketing, or art. But teach them to deeply understand how AI is being used in their field, not by cheating with AI but understanding how the tool can help them work smarter, understand where it is and is not better at a task then them and think deeply about where humans are still needed.</p>

            <p>Using AI without learning anything may help short term, but it won’t differentiate anyone.</p>

            <h3>What Jobs Are “Safer”?</h3>
            <p>The ‘safest’ jobs are those that require physical presence, dexterity, and in-person trust.</p>

            <p>i.e.</p>
            <ul>
              <li>Electricians</li>
              <li>Physical therapists</li>
              <li>Nurses</li>
              <li>Skilled trades</li>
            </ul>

            <p>Robotics is advancing, but it is materially behind software automation in terms of cost, reliability, and scale.</p>

            <p>Even the World Economic Forum’s Future of Jobs Report 2023 notes that roles in healthcare, education, and trades are projected to grow, while clerical and administrative roles decline. Source: <a href="https://www.weforum.org/reports/the-future-of-jobs-report-2023/" target="_blank" rel="noreferrer">WEF (2023)</a></p>

            <h3>The Advice I Actually Believe</h3>
            <p>Don’t let anti-hype articles soothe you into thinking nothing is changing. Don’t let AI doomers convince you to go live in the wilderness.</p>

            <p>The technical barrier to entry is collapsing. I have a coding background. That definitely lowers my friction when building side projects. But honestly, with 1–2 extra prompts, someone with zero coding experience can now prototype something meaningful. Yes, that does scare me a little. But it’s also fun.</p>

            <p>It’s absurdly empowering to build a small website or app in an afternoon…and then realize someone already built it better and free. And that’s kind of the point.</p>

            <h3>What I’ll Eventually Tell My Son</h3>
            <p>Follow your interests</p>

            <p>AND</p>

            <p>Go deeper than what AI can do by understanding the underlying system, developing judgment and forming opinions. Ask better questions than the average person or LLM.</p>

            <p>AND</p>

            <p>Truly understand the tools and know what AI can and cannot do. Understand what you bring to the table.</p>

            <p>And know this from experience, don’t just listen to bloggers on LinkedIn. Except me.</p>

            <p>Always listen to me!</p>

            <p>Love,</p>

            <p>Mom</p>
          </div>

          <div className="pt-12">
            <a href="/#writing" className="text-sm font-medium text-zinc-600">← Back to Writing</a>
          </div>
        </article>
      </main>
    </div>
  );
}
