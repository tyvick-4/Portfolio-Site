import type { ProvenanceDoc } from '../components/provenance/types';

/* Essays for the /writing section. Every number in every receipt is computed
   from the actual revision history (snapshots in the doc-changes-idea repo),
   never invented. */

/* "Written With, Not By" — the first essay; source files in claude/demo/. */
export const WRITTEN_WITH_NOT_BY: ProvenanceDoc = {
  meta: { title: 'Written With, Not By', author: 'Ty Vickers', published: 'July 9, 2026', readingMinutes: 2 },
  receipt: { versions: 4, humanPct: 83, interventions: 12, share: { human: 33, aiEdited: 50, ai: 17 } },
  sources: {
    S1: { origin: 'Pew Research Center, Aug 2023', status: 'verified' },
    S2: { origin: 'Reuters Institute DNR 2024', status: 'needs-check' },
  },
  versions: [
    {
      id: 'v0', label: 'Prompt', ts: 'Jul 8, 09:12', author: 'human',
      note: 'The ideation that seeded the piece. Ships with the work.',
      prompt: 'I want a short essay, around 600 words, for my blog. Working title: something like “Written With, Not By.”\n\nCore argument: readers deserve to see where the human was in the loop. AI-assisted writing is not the problem. Invisible AI-assisted writing is. The revision history is the proof of authorship, the way redlines and corrections are proof of process in journalism.',
    },
    {
      id: 'v1', label: 'AI draft', ts: 'Jul 8, 09:14', author: 'ai',
      note: 'Claude’s first draft. Competent, generic, six paragraphs.',
      paras: {
        p1: 'In an era where artificial intelligence can produce fluent prose in seconds, the question of authorship has become significantly more complicated. When we read an essay today, we can no longer be entirely certain who — or what — actually wrote it. This uncertainty arguably erodes something fundamental about the relationship between writers and readers.',
        p2: 'The problem is not that AI writes badly. In many ways, the problem is that it writes well — competently, smoothly, and in a voice that belongs to no one in particular. Readers have begun to notice, and their trust is eroding. Surveys suggest that a majority of Americans feel more concerned than excited about AI in daily life. When it comes to news specifically, comfort with AI-generated content appears to be quite low.',
        p3: 'Perhaps the answer lies not in hiding the machine’s involvement, but in revealing the human’s. Voice, it could be argued, lives in revision — in the choices a writer makes when they push back against the draft. What the human changes is the signature. Journalism has long understood this principle: corrections, editor’s notes, and tracked changes are all mechanisms that build trust by exposing process rather than concealing it.',
        p4: 'This suggests a practical possibility — publishing the provenance of a piece alongside the piece itself. Imagine an article that carries its own history: the original prompt that seeded it, each successive draft, redlines showing what changed between versions, and annotations explaining where and why a human intervened. It would function almost like a nutrition label for authorship.',
        p5: 'Of course, there are potential objections to consider. Some might argue that exposing drafts is embarrassing, or that readers simply do not care about process. Others may worry that provenance data could be fabricated. These are valid concerns that would need to be addressed as such systems mature.',
        p6: 'Ultimately, the goal is not confession but honesty. Writers who show their seams — who let readers see where the machine ended and the human began — may find that transparency builds significantly more trust than concealment ever could. In the end, what readers want is not writing untouched by AI, but writing that someone stands behind.',
      },
      order: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
    },
    {
      id: 'v2', label: 'Voice pass', ts: 'Jul 8, 10:05', author: 'human',
      note: 'Human rewrite per the style guide. New lede. 9 em dashes and 11 hedge words cut.',
      paras: {
        p1: 'Last spring a coworker replied to a memo I had spent two days on with one line: “Did you even write this?” I had. Every word. But I could not prove it, and that stung more than the question.',
        p2: 'The problem is not that AI writes badly. The problem is that it writes well: competently, smoothly, and in a voice that belongs to no one in particular. Readers notice, and their trust is falling. A majority of Americans feel more concerned than excited about AI in daily life. Comfort with AI-generated news is lower still.',
        p3: 'The answer is not to hide the machine’s involvement. It is to reveal the human’s. Voice lives in revision, in the choices a writer makes when they push back against the draft. What the human changes is the signature. Journalism learned this long ago: corrections, editor’s notes, and tracked changes build trust by exposing process instead of concealing it.',
        p4: 'So publish the provenance with the piece. Imagine an article that carries its own history: the prompt that seeded it, each draft, redlines showing what changed between versions, and notes explaining where and why a human intervened. It is a nutrition label for authorship.',
        p5: 'There are objections. Exposing drafts can feel embarrassing. Readers may not care about process. Provenance data can be fabricated. These concerns are real, and the systems that address them do not exist yet.',
        p6: 'The goal is honesty, not confession. Writers who show their seams will find that transparency builds more trust than concealment. What readers want is not writing untouched by AI, but writing that someone stands behind.',
      },
      order: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
    },
    {
      id: 'v3', label: 'Final', ts: 'Jul 9, 08:40', author: 'human',
      note: 'Sources wired in from the ledger. Objections paragraph cut.',
      paras: {
        p1: 'Last spring a coworker replied to a memo I had spent two days on with one line: “Did you even write this?” I had. Every word. But I could not prove it, and that stung more than the question.',
        p2: 'The problem is not that AI writes badly. The problem is that it writes well: competently, smoothly, and in a voice that belongs to no one in particular. Readers notice, and their trust is falling. 52% of Americans say they are more concerned than excited about AI in daily life. In the United States, only about one in four readers say they are comfortable with news made mostly by AI.',
        p3: 'The answer is not to hide the machine’s involvement. It is to reveal the human’s. Voice lives in revision, in the choices a writer makes when they push back against the draft. What the human changes is the signature. Journalism learned this long ago: corrections, editor’s notes, and tracked changes build trust by exposing process instead of concealing it.',
        p4: 'So publish the provenance with the piece. Imagine an article that carries its own history: the prompt that seeded it, each draft, redlines showing what changed between versions, and notes explaining where and why a human intervened. It is a nutrition label for authorship.',
        p6: 'The goal is honesty, not confession. Writers who show their seams will find that transparency builds more trust than concealment. What readers want is not writing untouched by AI, but writing that someone stands behind.',
      },
      order: ['p1', 'p2', 'p3', 'p4', 'p6'],
    },
  ],
  blocks: [
    {
      id: 'p1', spans: [
        { text: 'Last spring a coworker replied to a memo I had spent two days on with one line: “Did you even write this?” I had. Every word. But I could not prove it, and that stung more than the question.', origin: 'human', ann: 'Rewrote the lede from scratch. The AI opened with “In an era where...” and buried the point. The memo story is mine; AI cannot know it.', annType: 'intervention', annV: 'v2' },
      ],
    },
    {
      id: 'p2', spans: [
        { text: 'The problem is not that AI writes badly. ', origin: 'ai' },
        { text: 'The problem is that it writes well: ', origin: 'ai_edited', ann: 'Style pass: cut “In many ways”, an em dash, and “arguably”. Same idea, half the words.', annType: 'revision', annV: 'v2' },
        { text: 'competently, smoothly, and in a voice that belongs to no one in particular. ', origin: 'ai' },
        { text: 'Readers notice, and their trust is falling. ', origin: 'ai_edited' },
        { text: '52% of Americans say they are more concerned than excited about AI in daily life. ', origin: 'human', src: 'S1', ann: 'Replaced the AI’s vague “surveys suggest a majority” with the number. Ledger S1: verified.', annType: 'source', annV: 'v3' },
        { text: 'In the United States, only about one in four readers say they are comfortable with news made mostly by AI.', origin: 'human', src: 'S2', ann: 'Ledger S2 is marked needs-check, so the phrasing stays soft until the figure is confirmed.', annType: 'source', annV: 'v3' },
      ],
    },
    {
      id: 'p3', spans: [
        { text: 'The answer is not to hide the machine’s involvement. It is to reveal the human’s. ', origin: 'ai_edited', ann: 'The AI hedged: “Perhaps the answer lies...”. I do not think “perhaps”. Split it into two declarative sentences.', annType: 'revision', annV: 'v2' },
        { text: 'Voice lives in revision, in the choices a writer makes when they push back against the draft. ', origin: 'ai_edited' },
        { text: 'What the human changes is the signature. ', origin: 'ai', ann: 'Kept this AI sentence verbatim. It was already the thesis. Keeping it is a choice too, and the record shows it.', annType: 'intervention', annV: 'v2' },
        { text: 'Journalism learned this long ago: corrections, editor’s notes, and tracked changes build trust by exposing process instead of concealing it.', origin: 'ai_edited' },
      ],
    },
    {
      id: 'p4', spans: [
        { text: 'So publish the provenance with the piece. ', origin: 'human', ann: 'The AI wrote “This suggests a practical possibility”. Six words to ask permission. Replaced with an imperative.', annType: 'revision', annV: 'v2' },
        { text: 'Imagine an article that carries its own history: the prompt that seeded it, each draft, redlines showing what changed between versions, and notes explaining where and why a human intervened. ', origin: 'ai_edited' },
        { text: 'It is a nutrition label for authorship.', origin: 'ai_edited', ann: 'Was “It would function almost like a nutrition label for authorship.” Cut “would function almost like”. It IS one.', annType: 'revision', annV: 'v2' },
      ],
    },
    {
      id: 'p6', spans: [
        { text: 'The goal is honesty, not confession. ', origin: 'ai_edited' },
        { text: 'Writers who show their seams will find that transparency builds more trust than concealment. ', origin: 'ai_edited' },
        { text: 'What readers want is not writing untouched by AI, but writing that someone stands behind.', origin: 'ai', ann: 'Kept the AI’s closer word for word. It earned it. Honesty cuts both ways.', annType: 'intervention', annV: 'v2' },
      ],
    },
  ],
};

/* "Provenance" — essay two, the first through the /essay capture flow.
   Human-first draft with one deliberately delegated AI paragraph.
   Source files: doc-changes-idea/claude/essays/provenance/. */
export const PROVENANCE: ProvenanceDoc = {
  meta: { title: 'Provenance', author: 'Ty Vickers', published: 'July 15, 2026', readingMinutes: 3 },
  receipt: { versions: 4, humanPct: 77, interventions: 3, share: { human: 75, aiEdited: 1, ai: 23 } },
  sources: {
    S1: { origin: 'MIT Media Lab, arXiv:2506.08872, Jun 2025', status: 'verified' },
    S2: { origin: 'Doshi & Hauser, Science Advances 10(28), 2024', status: 'verified' },
    S3: { origin: 'Trusting News, 2024 survey of 6,000+ readers', status: 'verified' },
    S4: { origin: 'Toff & Simon, Int’l Journal of Press/Politics, 2025', status: 'verified' },
  },
  versions: [
    {
      id: 'v0', label: 'Prompt', ts: 'Jul 15, 09:05', author: 'human',
      note: 'The ideation that seeded the piece. Ships with the work.',
      prompt: 'Essay two for the Writing section, working title “Provenance.” I wrote the opening myself and want to keep it as the spine of the piece.\n\nThe structure I want: my draft stays human. One paragraph is deliberately delegated: where I wrote “[Insert AI writing and sensibility research here.]”, Claude should research and write a passage pulling in relevant data about AI writing and what it does to writing skill and reader trust. Claude is better suited to source and write that part than me, and saying so is part of the essay’s point.',
    },
    {
      id: 'v1', label: 'Human draft', ts: 'Jul 15, 09:05', author: 'human',
      note: 'Ty’s opening draft, saved verbatim, typos and all. One paragraph is a delegation marker for the AI pass.',
      paras: {
        p1: 'Writing is one of the first things that I remember enjoying in school. I felt like I was pretty good at it, and as time went on in school, creative writing is something I enjoyed every time that I got a chance to do it. Writing stories, usually based on ones that I already saw on TV or in other books, activated my mind. I even loved really florid, descriptive prose that attempted to describe the lush, expanding vision or images that I could see. Over time, I started to learn that there was a lot of things about storytelling and depth of feeling that I felt less adept at doing. I enjoyed writing from time to time, but it started to recede in the background amidst other hobbies and responsibilities. This story is not unique in the least.',
        p2: 'Neither is the fact that I now feel pretty conflicted about AI writing. There are a lot of incentives in my day-to-day work that are better suited for speed and efficiency to just build out with AI. The usual fear of automation strikes at our lily white collar hearts, but overall, as a coworker said to me today, “I’m not getting paid to write a novel in Notion.” There is a lot of incentive to let Claude write a PRD as long as it is effective at conveying the ideas we want to build. But am I also losing whatever was left of my wriiting touch as I cede it to the bot? To hover over the “Make this more concise” button for another second before clicking?',
        p3: 'Those kinds of feelings prompted me to write out this idea for Provenance. Some parts of writing can and should always be written human-only. Other parts probably don’t need to be. I’m going to insert a part in the next paragraph that pulls in a bunch of relevant data that Claude is much better suited to source and write than me.',
        p4: '[Insert AI writing and sensibility research here.]',
        p5: 'If you had the opportunity and transparency to see where the stuff was sourced and how Claude did it, would you care that much? Would you want to see the receipt of me clacking my keys? Or dictating? Is dictating into my Wispr Flow cheating? I don’t know, but I do like the idea of having a little filter that encourages me to actually keep writing and at least have a little fun with these tools. You can see the edits, you can see the tool working. Let’s keep trying it out together.',
      },
      order: ['p1', 'p2', 'p3', 'p4', 'p5'],
    },
    {
      id: 'v2', label: 'AI research pass', ts: 'Jul 15, 09:32', author: 'ai',
      note: 'One change only: the delegation marker became a researched paragraph, written by Claude, all four claims in the ledger.',
      paras: {
        p1: 'Writing is one of the first things that I remember enjoying in school. I felt like I was pretty good at it, and as time went on in school, creative writing is something I enjoyed every time that I got a chance to do it. Writing stories, usually based on ones that I already saw on TV or in other books, activated my mind. I even loved really florid, descriptive prose that attempted to describe the lush, expanding vision or images that I could see. Over time, I started to learn that there was a lot of things about storytelling and depth of feeling that I felt less adept at doing. I enjoyed writing from time to time, but it started to recede in the background amidst other hobbies and responsibilities. This story is not unique in the least.',
        p2: 'Neither is the fact that I now feel pretty conflicted about AI writing. There are a lot of incentives in my day-to-day work that are better suited for speed and efficiency to just build out with AI. The usual fear of automation strikes at our lily white collar hearts, but overall, as a coworker said to me today, “I’m not getting paid to write a novel in Notion.” There is a lot of incentive to let Claude write a PRD as long as it is effective at conveying the ideas we want to build. But am I also losing whatever was left of my wriiting touch as I cede it to the bot? To hover over the “Make this more concise” button for another second before clicking?',
        p3: 'Those kinds of feelings prompted me to write out this idea for Provenance. Some parts of writing can and should always be written human-only. Other parts probably don’t need to be. I’m going to insert a part in the next paragraph that pulls in a bunch of relevant data that Claude is much better suited to source and write than me.',
        p4: 'The worry is not hypothetical. In a 2025 MIT Media Lab study, researchers put EEG caps on 54 people writing essays and found that the group writing with an LLM showed the weakest brain connectivity of the three conditions, reported the lowest sense of ownership over their essays, and frequently could not quote their own sentences minutes after writing them [S1]. A 2024 experiment in Science Advances found the same trade at the level of craft: writers given AI-generated story ideas produced individually better-rated stories, and those stories were measurably more similar to one another [S2]. Readers hold two conflicting positions about all of this at once. When Trusting News surveyed more than 6,000 news readers, 93.8 percent said they want journalists to disclose AI use [S3]. Yet controlled studies keep finding that a bare AI label lowers perceived trustworthiness even when readers judge the labeled text to be just as accurate [S4]. People want the receipt and punish the label. A label is a confession without evidence; a receipt shows the work. That gap is the space this page is built for.',
        p5: 'If you had the opportunity and transparency to see where the stuff was sourced and how Claude did it, would you care that much? Would you want to see the receipt of me clacking my keys? Or dictating? Is dictating into my Wispr Flow cheating? I don’t know, but I do like the idea of having a little filter that encourages me to actually keep writing and at least have a little fun with these tools. You can see the edits, you can see the tool working. Let’s keep trying it out together.',
      },
      order: ['p1', 'p2', 'p3', 'p4', 'p5'],
    },
    {
      id: 'v3', label: 'Voice pass', ts: 'Jul 15, 10:05', author: 'human',
      note: 'Tightened one AI sentence, cut Claude’s three-sentence closer, ended the paragraph in Ty’s own words. Human paragraphs kept raw by choice.',
      paras: {
        p1: 'Writing is one of the first things that I remember enjoying in school. I felt like I was pretty good at it, and as time went on in school, creative writing is something I enjoyed every time that I got a chance to do it. Writing stories, usually based on ones that I already saw on TV or in other books, activated my mind. I even loved really florid, descriptive prose that attempted to describe the lush, expanding vision or images that I could see. Over time, I started to learn that there was a lot of things about storytelling and depth of feeling that I felt less adept at doing. I enjoyed writing from time to time, but it started to recede in the background amidst other hobbies and responsibilities. This story is not unique in the least.',
        p2: 'Neither is the fact that I now feel pretty conflicted about AI writing. There are a lot of incentives in my day-to-day work that are better suited for speed and efficiency to just build out with AI. The usual fear of automation strikes at our lily white collar hearts, but overall, as a coworker said to me today, “I’m not getting paid to write a novel in Notion.” There is a lot of incentive to let Claude write a PRD as long as it is effective at conveying the ideas we want to build. But am I also losing whatever was left of my wriiting touch as I cede it to the bot? To hover over the “Make this more concise” button for another second before clicking?',
        p3: 'Those kinds of feelings prompted me to write out this idea for Provenance. Some parts of writing can and should always be written human-only. Other parts probably don’t need to be. I’m going to insert a part in the next paragraph that pulls in a bunch of relevant data that Claude is much better suited to source and write than me.',
        p4: 'The worry is not hypothetical. In a 2025 MIT Media Lab study, researchers put EEG caps on 54 people writing essays and found that the group writing with an LLM showed the weakest brain connectivity of the three conditions, reported the lowest sense of ownership over their essays, and frequently could not quote their own sentences minutes after writing them [S1]. A 2024 experiment in Science Advances found the same trade at the level of craft: writers given AI-generated story ideas produced individually better-rated stories, and those stories were measurably more similar to one another [S2]. Readers hold conflicting opinions about all of this. When Trusting News surveyed more than 6,000 news readers, 93.8 percent said they want journalists to disclose AI use [S3]. Yet controlled studies keep finding that a bare AI label lowers perceived trustworthiness even when readers judge the labeled text to be just as accurate [S4]. Like a lot of things on the internet, we say we want one thing and then complain about the mechanism that delivers it.',
        p5: 'If you had the opportunity and transparency to see where the stuff was sourced and how Claude did it, would you care that much? Would you want to see the receipt of me clacking my keys? Or dictating? Is dictating into my Wispr Flow cheating? I don’t know, but I do like the idea of having a little filter that encourages me to actually keep writing and at least have a little fun with these tools. You can see the edits, you can see the tool working. Let’s keep trying it out together.',
      },
      order: ['p1', 'p2', 'p3', 'p4', 'p5'],
    },
  ],
  blocks: [
    {
      id: 'p1', spans: [
        { text: 'Writing is one of the first things that I remember enjoying in school. I felt like I was pretty good at it, and as time went on in school, creative writing is something I enjoyed every time that I got a chance to do it. Writing stories, usually based on ones that I already saw on TV or in other books, activated my mind. I even loved really florid, descriptive prose that attempted to describe the lush, expanding vision or images that I could see. Over time, I started to learn that there was a lot of things about storytelling and depth of feeling that I felt less adept at doing. I enjoyed writing from time to time, but it started to recede in the background amidst other hobbies and responsibilities. This story is not unique in the least.', origin: 'human' },
      ],
    },
    {
      id: 'p2', spans: [
        { text: 'Neither is the fact that I now feel pretty conflicted about AI writing. There are a lot of incentives in my day-to-day work that are better suited for speed and efficiency to just build out with AI. The usual fear of automation strikes at our lily white collar hearts, but overall, as a coworker said to me today, “I’m not getting paid to write a novel in Notion.” There is a lot of incentive to let Claude write a PRD as long as it is effective at conveying the ideas we want to build. But am I also losing whatever was left of my wriiting touch as I cede it to the bot? To hover over the “Make this more concise” button for another second before clicking?', origin: 'human' },
      ],
    },
    {
      id: 'p3', spans: [
        { text: 'Those kinds of feelings prompted me to write out this idea for Provenance. Some parts of writing can and should always be written human-only. Other parts probably don’t need to be. ', origin: 'human' },
        { text: 'I’m going to insert a part in the next paragraph that pulls in a bunch of relevant data that Claude is much better suited to source and write than me.', origin: 'human', ann: 'The delegation, announced in the text itself. The next paragraph is Claude’s, on purpose, and saying so is part of the point.', annType: 'intervention', annV: 'v1' },
      ],
    },
    {
      id: 'p4', spans: [
        { text: 'The worry is not hypothetical. ', origin: 'ai' },
        { text: 'In a 2025 MIT Media Lab study, researchers put EEG caps on 54 people writing essays and found that the group writing with an LLM showed the weakest brain connectivity of the three conditions, reported the lowest sense of ownership over their essays, and frequently could not quote their own sentences minutes after writing them. ', origin: 'ai', src: 'S1', ann: 'Ledger S1: Kosmyna et al., MIT Media Lab, June 2025 (arXiv:2506.08872). 54 participants, EEG, three writing conditions. Verified.', annType: 'source', annV: 'v2' },
        { text: 'A 2024 experiment in Science Advances found the same trade at the level of craft: writers given AI-generated story ideas produced individually better-rated stories, and those stories were measurably more similar to one another. ', origin: 'ai', src: 'S2', ann: 'Ledger S2: Doshi & Hauser, Science Advances 10(28), July 2024. Verified.', annType: 'source', annV: 'v2' },
        { text: 'Readers hold conflicting opinions about all of this. ', origin: 'ai_edited', ann: 'Claude wrote “Readers hold two conflicting positions about all of this at once.” A little clunky. Tightened it.', annType: 'revision', annV: 'v3' },
        { text: 'When Trusting News surveyed more than 6,000 news readers, 93.8 percent said they want journalists to disclose AI use. ', origin: 'ai', src: 'S3', ann: 'Ledger S3: Trusting News reader research on AI disclosure, 2024, 6,000+ respondents. Verified.', annType: 'source', annV: 'v2' },
        { text: 'Yet controlled studies keep finding that a bare AI label lowers perceived trustworthiness even when readers judge the labeled text to be just as accurate. ', origin: 'ai', src: 'S4', ann: 'Ledger S4: Toff & Simon, The International Journal of Press/Politics, 2025. Corroborated by Altay et al. (arXiv:2506.16202). Verified.', annType: 'source', annV: 'v2' },
        { text: 'Like a lot of things on the internet, we say we want one thing and then complain about the mechanism that delivers it.', origin: 'human', ann: 'Cut Claude’s whole last part about “people want the receipt and punish the label” and ended it my way instead.', annType: 'revision', annV: 'v3' },
      ],
    },
    {
      id: 'p5', spans: [
        { text: 'If you had the opportunity and transparency to see where the stuff was sourced and how Claude did it, would you care that much? Would you want to see the receipt of me clacking my keys? Or dictating? Is dictating into my Wispr Flow cheating? I don’t know, but I do like the idea of having a little filter that encourages me to actually keep writing and at least have a little fun with these tools. You can see the edits, you can see the tool working. Let’s keep trying it out together.', origin: 'human' },
      ],
    },
  ],
};

/** All essays, newest first. The /writing page renders this collection. */
export const ESSAYS: ProvenanceDoc[] = [PROVENANCE, WRITTEN_WITH_NOT_BY];
