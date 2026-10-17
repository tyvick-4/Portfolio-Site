import type { ProvenanceDoc } from '../components/provenance/types';

/* Essays for the /writing section. Every number in every receipt is computed
   from the actual revision history (snapshots in the doc-changes-idea repo),
   never invented. */

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
export const ESSAYS: ProvenanceDoc[] = [PROVENANCE];
