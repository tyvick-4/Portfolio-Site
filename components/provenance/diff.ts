import type { DiffPart } from './types';

/** Word count. */
export const wc = (t: string): number => (t.trim().match(/\S+/g) || []).length;

/** Word-level LCS diff. Inputs are single paragraphs, so O(n*m) is fine. */
export function diffWords(a: string, b: string): DiffPart[] {
  const ta = a.split(/(\s+)/).filter(x => x.length);
  const tb = b.split(/(\s+)/).filter(x => x.length);
  const n = ta.length, m = tb.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = ta[i] === tb[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out: DiffPart[] = [];
  const push = (t: DiffPart['t'], text: string) => {
    if (out.length && out[out.length - 1].t === t) out[out.length - 1].text += text;
    else out.push({ t, text });
  };
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (ta[i] === tb[j]) { push('eq', ta[i]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { push('del', ta[i]); i++; }
    else { push('ins', tb[j]); j++; }
  }
  while (i < n) { push('del', ta[i]); i++; }
  while (j < m) { push('ins', tb[j]); j++; }
  return out;
}
