import React from "react";

export default function PostPage() {
  return (
    <div className="min-h-screen bg-cream text-pine font-sans">
      <header className="sticky top-0 z-10 border-b border-sand bg-cream/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo-transparent.png" alt="" className="h-9 w-9 object-contain" />
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
          <h1 className="font-serif text-4xl text-pine mb-4">Building an AI Study Assistant for My Executive MBA</h1>
          <p className="text-sm text-dusty mb-8">July 3, 2026</p>

          <img
            src="/images/mba.jpeg"
            alt="Callie at Olin Business School"
            className="w-full max-w-2xl mb-8 rounded"
          />

          <div className="max-w-none text-pine/80 leading-relaxed space-y-5 [&_h2]:font-serif [&_h2]:text-pine [&_h2]:text-3xl [&_h2]:pt-6 [&_h3]:font-serif [&_h3]:text-pine [&_h3]:text-2xl [&_h3]:pt-4 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-3 [&_strong]:text-pine [&_strong]:font-semibold [&_hr]:border-sand [&_hr]:my-10 [&_blockquote]:border-l-2 [&_blockquote]:border-gold [&_blockquote]:pl-4 [&_blockquote]:text-pine/70 [&_blockquote]:italic [&_pre]:bg-pine/5 [&_pre]:rounded [&_pre]:p-4 [&_pre]:text-sm [&_pre]:font-mono [&_pre]:whitespace-pre-wrap [&_pre]:text-pine/80 [&_pre]:overflow-x-auto [&_code]:bg-pine/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[0.85em] [&_code]:font-mono">

            <h2>About the Program</h2>

            <p>
              The <a href="https://olin.wustl.edu/EN-US/Academic-Programs/MBA/executive/Pages/default.aspx" target="_blank" rel="noreferrer">Olin Business School Executive MBA</a> at
              Washington University in St. Louis is a 21-month cohort-based program designed for working professionals.
              It covers the full range of business disciplines (strategy, finance, operations, marketing, economics,
              accounting, leadership, and more) across roughly 25 courses. Students come in with deep professional
              experience and go through the program together as a cohort, which makes the peer learning component just
              as valuable as the curriculum itself.
            </p>

            <p>I&apos;m part of <strong>EMBA 60</strong>, the 60th cohort to go through the program who graduated in April 2026. </p>

            <hr />

            <h2>How I Used AI as a Study Tool & A Reference Tool Post-Graduation </h2>

            <p>
              I read ALMOST everything assigned for class. I want to be upfront about that, because I think the reading
              and case prep is where most of the actual learning happens, you can&apos;t shortcut your way to
              understanding a framework by skipping the source material that teaches you when and why to use it.
            </p>

            <p>
              That said, AI is genuinely excellent at one specific thing: <strong>making a quick reference back to
              something you already know</strong>. If you&apos;ve done the work, having a well-organized summary you
              can query conversationally is a massive time-saver before exams, during case prep, or when you&apos;re
              trying to connect ideas across courses. Obviously, this same approach can be applied to any other courses 
              or training where you have a lot of material to synthesize and recall.
            </p>

            <p>Here&apos;s the workflow I used:</p>

            <ol>
              <li><strong>Stored everything in organized folders</strong> — lecture slides (<code>.pptx</code>), PDFs, readings, and my own personal notes and case prep write-ups, organized by course.</li>
              <li><strong>Had Claude systematically go through each folder</strong> and generate a consolidated readout per course: key frameworks, cases studied, required readings, analytical reminders, and course themes. These weren&apos;t replacements for the source material; they were structured summaries built <em>from</em> it.</li>
              <li><strong>Combined all course readouts into a single master document</strong> and shared it with my cohort as a study resource.</li>
              <li><strong>Set up a Claude Project</strong> that references the master readout and uses a custom system prompt to behave as a study assistant — so I (and my classmates) can ask questions across all coursework in plain language and get cited, synthesized answers.</li>
            </ol>

            <p>
              The result is something like a smart index to everything we covered, useful for quick review,
              cross-course synthesis, but not a substitute for having done the reading in the first place.
            </p>

            <hr />

            <h2>Set Up Your Own Study Assistant (10 minutes)</h2>

            <p>
              If you&apos;re in EMBA 60, here&apos;s how to get this working for yourself.
            </p>

            <h3>Step 1: Get the Readout Document</h3>

            <p>You need a single Word document that consolidates frameworks, cases, readings, and reminders across all courses.</p>

            <p><strong>Option A — Use the EMBA 60 Shared Readout from me </strong> <em>(fastest)</em></p>
            <p>File: <code>EMBA_60_Complete_Readout.docx</code> — covers all courses, ready to upload.</p>

            <p><strong>Option B — Build Your Own</strong> <em>(more personal, ~2–4 hours)</em></p>
            <p>
              If you want a version that includes your own notes, reflections, and case prep, you can build individual
              course readouts using Claude and then combine them. See the appendix below for instructions.
            </p>

            <hr />

            <h3>Step 2: Create a Claude Project</h3>

            <ol>
              <li>Go to <a href="https://claude.ai/projects" target="_blank" rel="noreferrer">claude.ai/projects</a> and click <strong>New Project</strong></li>
              <li>Name it something like <code>EMBA 60 Knowledge Base</code></li>
              <li>Click <strong>Add content → Upload files</strong> and upload <code>EMBA_60_Complete_Readout.docx</code></li>
              <li>Click <strong>Set project instructions</strong> and paste in the system prompt from Step 3</li>
              <li>Click <strong>Save</strong> — done. Start a new conversation inside the Project to begin.</li>
            </ol>

            <blockquote>
              <strong>Tip:</strong> You can add files to the Project at any time — individual course readouts, your own
              notes, case prep docs. Claude will reference all of them together.
            </blockquote>

            <hr />

            <h3>Step 3 — Paste This System Prompt</h3>

            <p>Copy everything below into the &quot;Project instructions&quot; field:</p>

            <pre>{`You are a study assistant for an Olin Business School Executive MBA student.
You have access to consolidated readouts covering all courses in the program.

Your knowledge base includes: key frameworks and models, cases studied,
required readings, analytical reminders, and course overviews.

How to help:
- When asked about a concept or framework, explain it clearly and cite which
  course(s) it came from using labels like [Strategic Management]
- When asked to compare frameworks across courses, draw connections
- When asked 'what did we learn about X,' search across all courses and synthesize
- When asked to help study for an exam, pull the most relevant material
- When asked about a case, summarize the core questions and analytical angles
- Suggest related frameworks from other courses when relevant
- Lead with the direct answer, then add supporting detail
- Keep answers concise unless the user asks for depth

You do not have full source texts of cases or readings, only synthesized readouts.
If asked for something very specific, say so and offer the closest summary.`}</pre>

            <hr />

            <h2>Example Questions to Try</h2>

            <p>Once your project is set up, here are some queries to get started:</p>

            <p><strong>Concept Review</strong></p>
            <ul>
              <li>Explain the VRIO framework and give me an example of how to apply it.</li>
              <li>What is the difference between operational effectiveness and strategy according to Porter?</li>
              <li>Walk me through how to do a Five Forces analysis. What are the common mistakes?</li>
              <li>Explain WACC — what is it, how is it calculated, and when do I use it?</li>
            </ul>

            <p><strong>Cross-Course Synthesis</strong></p>
            <ul>
              <li>Which courses covered competitive advantage? How did each approach it differently?</li>
              <li>How does game theory show up across our coursework?</li>
              <li>Connect what we learned about cost in Strategic Cost Accounting to pricing strategy in Managerial Economics.</li>
              <li>What frameworks did we learn for analyzing an acquisition?</li>
            </ul>

            <p><strong>Case Recall</strong></p>
            <ul>
              <li>What was the Wal-Mart case about and what were the discussion questions?</li>
              <li>Remind me what we learned from the Cola Wars case.</li>
              <li>What was the Littlefield simulation and what were the key operations takeaways?</li>
            </ul>

            <hr />

            <h2>Tips for Better Results</h2>

            <ul>
              <li><strong>Be specific</strong> about which course or topic you&apos;re asking about when you know it — Claude will give a more targeted answer.</li>
              <li><strong>Ask follow-up questions</strong> in the same conversation. Claude remembers context within a session.</li>
              <li><strong>Ask for cross-course connections</strong> — the assistant is especially good at synthesis across the full program.</li>
              <li>If an answer seems too brief, say &quot;go deeper&quot; or &quot;give me more detail on X.&quot; The default is concise.</li>
              <li>To start fresh on a new topic, start a new conversation inside the Project.</li>
            </ul>

            <hr />

            <h2>Appendix — Building Your Own Readouts</h2>

            <p>If you want personalized readouts that include your own notes and reflections, here&apos;s how to build them.</p>

            <p><strong>What you need:</strong></p>
            <ul>
              <li><a href="https://claude.ai/download" target="_blank" rel="noreferrer">Claude for Desktop</a> (Cowork mode)</li>
              <li>Your EMBA course folders — slides, PDFs, personal notes, case write-ups</li>
              <li>About 2–4 hours for a full 25-course set (or do it course by course)</li>
            </ul>

            <p><strong>The process:</strong></p>
            <ol>
              <li>Connect your EMBA folder to Claude (File → Select Folder)</li>
              <li>For each course, say: <em>&quot;For the [Course Name] folder, read all the files and create a consolidated class readout with key themes, frameworks, cases studied, required readings, and key reminders. Save it as a Word doc in that folder.&quot;</em></li>
              <li>Repeat for each course, or ask Claude to process all folders at once</li>
              <li>Ask Claude to build a master doc: <em>&quot;Create one Word doc with a 2-page overview of all courses with hyperlinks to each full readout below&quot;</em></li>
              <li>Upload the master doc to a Claude Project and add the system prompt from Step 3</li>
            </ol>

            <p><strong>Sharing with classmates:</strong> If you want to share your readouts, ask Claude to <em>&quot;make a clean copy of each readout with personal assignments and reflections removed.&quot;</em> It will strip personal content while keeping all the course frameworks, cases, and readings intact.</p>

            <p><strong>What Claude can read:</strong> PowerPoint slides (<code>.pptx</code>), PDFs, Word documents (<code>.docx</code>), and plain text files. It works best when your course materials include lecture slides and a course packet PDF.</p>

          </div>

          <div className="pt-12">
            <a href="/#writing" className="text-sm font-medium text-pine hover:text-gold transition-colors">← Back to Writing</a>
          </div>
        </article>
      </main>
    </div>
  );
}
