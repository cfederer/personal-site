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
          <h1 className="font-serif text-4xl text-pine mb-4">I Built an End to End Meal Prep App & I Hated It </h1>
          <p className="text-sm text-dusty mb-8">June 30, 2026</p>

          <div className="max-w-none text-pine/80 leading-relaxed space-y-5 [&_h3]:font-serif [&_h3]:text-pine [&_h3]:text-2xl [&_h3]:pt-4 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">

            <p>I've been doing basically the same meal-planning routine for at least the last decade. Every week I'd open a spreadsheet full of recipes I'd collected over the years and stare at it for far longer than I'd like to admit.</p>

            <p>I had about four recipes I knew I'd actually make because they were my go-to meals. Then there were another twenty that sounded good at some point, so I added them to the spreadsheet...and never cooked them once.</p>

            <p>So I'd inevitably end up searching recipe sites looking for something different. The problem was that "different" usually wasn't what I wanted. I've accepted that I have a type. I like meals that are high protein, simple enough for a weeknight, and don't require buying five specialty ingredients I'll never use again.</p>

            <h3>My first attempt automated the wrong thing</h3>

            <p>My first version made the same mistake I see a lot of AI products making today. I tried to automate the entire workflow before I really understood which parts I actually wanted help with.</p>

            <p>So I built an app that planned my week, generated a grocery list, pushed everything to Instacart, and left me with one button: "Place Order."</p>

            <p>It worked.</p>

            <p>I just didn't enjoy using it.</p>

            <p>I didn't always want to eat what the app picked for me. Maybe we'd gone out for tacos the night before. Maybe I was craving pasta. Maybe it was ninety-five degrees outside and soup suddenly sounded terrible. Those are little decisions that are surprisingly important, and they're hard for software to get right.</p>

            <p>I also discovered something much less philosophical: every recipe needs salt.</p>

            <p>Which meant every grocery order contained...another container of salt.</p>

            <p>The app had no idea there was already one sitting in my pantry.</p>

            <h3>Finding the right boundary</h3>

            <p>That forced me to ask a better question:</p>

            <p><strong>What part of meal planning actually feels like work, and what part do I enjoy?</strong></p>

            <p>What I really needed was a better set of options to choose from.</p>

            <p>So every week the app now does two things:</p>

            <ul>
              <li>It selects a portion of the options from recipes I already know I love.</li>
              <li>It searches for new recipes that match my preferences: high protein, no red meat, simple weeknight meals, and generally the same style of cooking I already enjoy.</li>
            </ul>

            <img
              src="/images/meal-prep-app/03-breakfast-options.png"
              alt="Breakfast options grid showing egg muffin and scramble variations with protein counts"
              className="w-full max-w-2xl mb-8 rounded"
            />

            <p>Every week I end up with a mix of recipes I already trust and recipes that feel like something I probably would have found myself if I'd spent an hour searching.</p>

            <p>That's a much better starting point than staring at a spreadsheet or endlessly scrolling recipe websites.</p>

            <p>When I find something I love, I can save it back into my permanent recipe library. Over time, the app gradually gets better because <strong>I'm</strong> the one deciding what belongs in my collection.</p>

            <img
              src="/images/meal-prep-app/04-full-weekly-plan.png"
              alt="Full weekly plan view with breakfast, lunch, and dinner sections all populated"
              className="w-full max-w-2xl mb-8 rounded"
            />

            <h3>The grocery list was almost an afterthought</h3>

            <p>Interestingly, this was already enough to make the app useful. Once I'd picked my meals, generating a grocery list was easy.</p>

            <p>Part of that was practical. We've been trying to go to the grocery store more instead of defaulting to Instacart (even though we both genuinely hate grocery shopping).</p>

            <img
              src="/images/meal-prep-app/05-dinner-selections.png"
              alt="Selected dinner recipes showing checkmarks, servings adjuster, and remove option"
              className="w-full max-w-2xl mb-8 rounded"
            />

            <p>Once the planning experience felt right, I went back and added the Instacart integration. It turned out that wasn't the part that made the app valuable in the first place.</p>

            <img
              src="/images/meal-prep-app/01-settings-screen.png"
              alt="Settings screen with Claude API key field, Instacart key field, and Google Drive OAuth connect button"
              className="w-full max-w-2xl mb-8 rounded"
            />

            <p>I also don't think I'll ever let it complete the process without me.</p>

            <p>Recipes don't know what's already in my pantry. They don't know I bought soy sauce yesterday or that I still have half a bag of spinach sitting in the fridge. Having one final review before checkout still matters.</p>

            <h3>What building this reminded me</h3>

            <p>This little side project ended up reminding me of something I think applies to AI products far beyond meal planning.</p>

            <p>Good AI products aren't necessarily the ones that automate the most.</p>

            <p>They're the ones that automate the parts people don't enjoy while leaving the decisions that benefit from context, taste, and judgment to the person using them.</p>

            <p>For this app, AI is great at:</p>

            <ul>
              <li>Searching thousands of recipes.</li>
              <li>Finding new ideas that fit my taste.</li>
              <li>Organizing grocery lists.</li>
              <li>Remembering recipes I've approved.</li>
            </ul>

            <p>It can search thousands of recipes in seconds.</p>

            <p>It can organize a grocery list better than I can.</p>

            <p>It can even build an Instacart cart.</p>

            <p>But it still doesn't know that after a long Tuesday I just really want pasta.</p>

            <p>Code here: <a href="https://github.com/cfederer/mealprep" target="_blank" rel="noreferrer">github.com/cfederer/mealprep</a></p>

          </div>

          <div className="pt-12">
            <a href="/#writing" className="text-sm font-medium text-pine hover:text-gold transition-colors">← Back to Writing</a>
          </div>
        </article>
      </main>
    </div>
  );
}
