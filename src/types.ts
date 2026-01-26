export type PartOfSpeech = {
  value: 'noun' | 'verb' | 'adj.' | 'adv.' | 'pron.' | 'prep.' | 'conj.';
  description?: string;
};

export type FrequencyItem = {
  value: number; // 1–5
  description: string;
};

export type DictionaryEntryDetails = {
  id: string;
  definition: string;
  partOfSpeech: PartOfSpeech;
  frequency: FrequencyItem;
  category: 'passive' | 'active';
  examples: string[];
};

export type DictionaryEntry = {
  id: string;
  word: string;
  details: DictionaryEntryDetails[];
};
