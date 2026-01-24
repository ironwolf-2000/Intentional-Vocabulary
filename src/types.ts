export type VocabularyCategory = 'passive' | 'active';

export type VocabularyItem = {
  id: string;
  word: string;
  category: VocabularyCategory;
  timestamp: string;
  dueDate: string;
  definition: string;
  frequency: number;
};
