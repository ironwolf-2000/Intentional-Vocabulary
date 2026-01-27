export type PartOfSpeech = {
  value: 'noun' | 'verb' | 'adj.' | 'adv.' | 'pron.' | 'prep.' | 'conj.';
  description?: string; // verb forms; adjective comparative/superlative forms, etc.
};

export type DictionaryEntryDetails = {
  id: string;
  definition: string;
  partOfSpeech: PartOfSpeech;
  register: string;
  synonyms?: string[];
  antonyms?: string[];
  examples: string[];
  reviewExamples: string[]; // longer examples for review practice
};

export type DictionaryEntry = {
  id: string;
  word: string;
  details: DictionaryEntryDetails[];
};

export type VocabularyCard = DictionaryEntryDetails & {
  id: string;
  word: string;
  dueDate: string;
};
