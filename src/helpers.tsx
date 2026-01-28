import { Text } from '@mantine/core';
import type { VocabularyCard } from './types';
import { DICTIONARY_VOCABULARY_MOCK } from './const';

export const parseExampleText = (text: string, useClozeDeletion = false): React.ReactNode => {
  const wordRegex = /<word>(.*?)<\/word>/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = wordRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <Text key={parts.length} span fw={700} style={{ fontSize: 'inherit' }}>
        {useClozeDeletion ? '...' : match[1]}
      </Text>,
    );

    lastIndex = wordRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

export const getReviewCards = (key: 'passiveReviewCards' | 'activeReviewCards'): Record<string, VocabularyCard> => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : {};
};

export const deleteReviewCard = (key: 'passiveReviewCards' | 'activeReviewCards', cardId: string) => {
  const reviewCards = getReviewCards(key);
  delete reviewCards[cardId];
  localStorage.setItem(key, JSON.stringify(reviewCards));
};

export const setReviewCard = (key: 'passiveReviewCards' | 'activeReviewCards', cardId: string, dueDate: Date) => {
  const reviewCards = getReviewCards(key);

  if (cardId in reviewCards) {
    reviewCards[cardId].dueDate = dueDate.toISOString();
  } else {
    const entryId = cardId.split('-')[0];
    const entry = DICTIONARY_VOCABULARY_MOCK.find(({ id }) => entryId === id);

    if (entry) {
      const detail = entry.details.find(({ id }) => cardId === id);

      if (detail) {
        const card = { word: entry.word, dueDate: dueDate.toISOString(), ...detail };
        reviewCards[cardId] = card;
      }
    }
  }

  localStorage.setItem(key, JSON.stringify(reviewCards));
};

export const getDueCards = (key: 'passiveReviewCards' | 'activeReviewCards'): Record<string, VocabularyCard> => {
  const reviewCards = getReviewCards(key);
  const filteredCards = [];

  for (const [cardId, card] of Object.entries(reviewCards)) {
    if (new Date(card.dueDate) <= new Date()) {
      filteredCards.push([cardId, card]);
    }
  }

  return Object.fromEntries(filteredCards);
};
