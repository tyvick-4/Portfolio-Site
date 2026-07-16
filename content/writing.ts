import type { ProvenanceDoc } from '../components/provenance/types';

/* "Written With, Not By" — real provenance data from the doc-changes-idea
   project (claude/demo/). Every number in the receipt is computed from the
   actual revision history, never invented. */
export const WRITTEN_WITH_NOT_BY: ProvenanceDoc = {
  meta: { title: 'Written With, Not By', author: 'Ty Vickers', published: 'July 9, 2026', readingMinutes: 2 },
  receipt: { versions: 4, humanPct: 83, interventions: 12 },
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
