import React from "react";

export default function PostPage() {
  return (
    <div className="min-h-screen bg-cream text-pine font-sans">
      <header className="sticky top-0 z-10 border-b border-sand bg-cream/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-cream.png" alt="" className="h-9 w-9 rounded-full object-cover" />
            <span className="font-serif text-lg tracking-wide text-pine">
              Callie Federer
            </span>
          </a>
          <a href="/#writing" className="text-xs font-semibold tracking-widest uppercase text-pine/60 hover:text-gold transition-colors">
            Writing
          </a>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-20">
        <article>
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Writing</p>
          <h1 className="font-serif text-4xl text-pine mb-4">Use AI to Teach You AI (Don't Outsource Your Brain)</h1>
          <p className="text-sm text-dusty mb-8">March 28th, 2026</p>

          <img
            src="/images/signalstack.jpeg"
            alt="Signalstack"
            className="w-full max-w-2xl mb-8 rounded"
          />

          <div className="max-w-none text-pine/80 leading-relaxed space-y-5 [&_h3]:font-serif [&_h3]:text-pine [&_h3]:text-2xl [&_h3]:pt-4 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">

            <p>If you're like me, you're subscribed to 27 newsletters, 14 Substacks, 6 podcasts, and you still feel behind.</p>

            <p>And also like me, you're probably asking yourself: how do I use AI to save time without turning my brain off?</p>

            <p>Here's the answer I landed on: use AI to teach you AI (and other stuff of course).</p>

            <h3>The Problem With Passive Consumption</h3>

            <p>More sources doesn't mean more insight. If anything, the opposite is true. When you're bouncing between newsletters, Substacks, and podcasts, you're skimming the surface of a lot of things instead of going deep on any of them. You get the illusion of being informed without the actual understanding.</p>

            <p>AI can help! But not by doing your reading for you. That just makes the problem worse.</p>

            <h3>What I Built Instead</h3>

            <p>I used Claude Code to build a lightweight site SignalStack that aggregates everything I read into one feed. It flags what's worth going deeper on and pulls out common threads across sources. Instead of drowning in content, I can actually see the signal (cute, right?).</p>

            <p>The point isn't automation for its own sake. The point is that when AI surfaces a pattern across three different sources, I notice it, sit with it, and decide whether I agree. That's the opposite of outsourcing your thinking. That's using a tool to think better.</p>

            <h3>The Actual Lesson</h3>

            <p>The best way to learn how AI works isn't just to read a blog post about it (except mine, obviously). It's to read deeply AND to actually build something with it and see where it breaks, where it surprises you, and where it forces you to make a decision.</p>

            <p>Code is here: <a href="https://github.com/cfederer/signalstack" target="_blank" rel="noreferrer">github.com/cfederer/signalstack</a></p>
            <p> ButI mean we both know you're just going to vibe code it. Which you should, because then you can make it your own. </p>

          </div>

          <div className="pt-12">
            <a href="/#writing" className="text-sm font-medium text-pine hover:text-gold transition-colors">← Back to Writing</a>
          </div>
        </article>
      </main>
    </div>
  );
}
