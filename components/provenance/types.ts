export type Origin = 'human' | 'ai' | 'ai_edited';
export type ReadingMode = 'Read' | 'Provenance' | 'History';
export type AnnotationType = 'revision' | 'intervention' | 'source';

export interface DiffPart {
  t: 'eq' | 'del' | 'ins';
  text: string;
}

export interface VersionInfo {
  id: string; // "v0", "v1", ...
  label: string; // "Prompt", "AI draft", "Voice pass", "Final"
  ts?: string; // display timestamp, e.g. "Jul 8, 09:14"
  author: 'human' | 'ai';
  note?: string;
  prompt?: string; // v0 only: the full prompt text
  paras?: Record<string, string>; // paragraph snapshots keyed by stable id
  order?: string[]; // paragraph id order for this version
}

export interface SourceEntry {
  origin: string;
  status: 'verified' | 'needs-check';
}

export interface Span {
  text: string;
  origin: Origin;
  src?: string; // sources-ledger id, e.g. "S1"
  ann?: string; // annotation body
  annType?: AnnotationType;
  annV?: string; // version the annotation was recorded with
}

export interface Block {
  id: string;
  spans: Span[];
}

export interface ProvenanceDoc {
  meta: { title: string; author: string; published: string; readingMinutes: number };
  receipt: {
    versions: number;
    humanPct: number;
    interventions: number;
    /** Attribution share of final words, in percent. */
    share: { human: number; aiEdited: number; ai: number };
  };
  sources: Record<string, SourceEntry>;
  versions: VersionInfo[];
  blocks: Block[];
}
