import type { DictionaryEntry } from '@/types';

export const DICTIONARY_VOCABULARY_MOCK: DictionaryEntry[] = [
  {
    id: '1',
    word: 'yield',
    details: [
      {
        id: '1-1',
        definition: 'To produce or provide a result, amount, or crop.',
        partOfSpeech: { value: 'verb', description: 'Other forms: yielded' },
        register: 'neutral',
        synonyms: ['produce', 'generate', 'give'],
        antonyms: ['waste', 'withhold'],
        examples: [
          'The investment <word>yielded</word> strong returns.',
          'The soil <word>yields</word> high-quality produce.',
          'The experiment <word>yielded</word> unexpected results.',
          'This method <word>yields</word> better performance.',
        ],
        reviewExamples: [
          'Years of careful planning and incremental improvements finally <word>yielded</word> results, though not in the dramatic fashion investors had once imagined.',
          'Despite initial skepticism, the long-term strategy <word>yielded</word> a steady stream of benefits that reshaped the organization’s future.',
        ],
      },
      {
        id: '1-2',
        definition: 'To give way to pressure or force.',
        partOfSpeech: { value: 'verb', description: 'Other forms: yielded' },
        register: 'formal',
        synonyms: ['surrender', 'submit', 'concede'],
        antonyms: ['resist', 'withstand'],
        examples: [
          'The material began to <word>yield</word> under stress.',
          'She refused to <word>yield</word> to external pressure.',
          'The bridge did not <word>yield</word> despite the load.',
          'He eventually <word>yielded</word> to public opinion.',
        ],
        reviewExamples: [
          'Though battered by criticism and political opposition, he refused to <word>yield</word>, maintaining his position long after compromise would have been easier.',
          'The ancient walls appeared immovable, yet under centuries of erosion they slowly <word>yielded</word> to forces no architect could command.',
        ],
      },
      {
        id: '1-3',
        definition: 'The amount produced or generated.',
        partOfSpeech: { value: 'noun', description: 'Plural: yields' },
        register: 'technical',
        synonyms: ['output', 'harvest', 'production'],
        antonyms: ['loss', 'deficit'],
        examples: [
          'The annual <word>yield</word> was lower than expected.',
          'Crop <word>yield</word> depends on climate conditions.',
          'This field has a high wheat <word>yield</word>.',
          'Improved methods increased overall <word>yield</word>.',
        ],
        reviewExamples: [
          'After years of intensive cultivation, the land’s <word>yield</word> began to decline, revealing the hidden cost of short-term abundance.',
          'Scientists warned that maximizing immediate <word>yield</word> often undermines sustainability over successive generations.',
        ],
      },
    ],
  },

  {
    id: '2',
    word: 'subtle',
    details: [
      {
        id: '2-1',
        definition: 'Delicate or precise in meaning or expression.',
        partOfSpeech: { value: 'adj.', description: 'Other forms: subtler, subtlest' },
        register: 'formal',
        synonyms: ['fine', 'delicate', 'nuanced'],
        antonyms: ['obvious', 'blatant', 'coarse'],
        examples: [
          'There was a <word>subtle</word> difference in tone.',
          'The argument relied on <word>subtle</word> distinctions.',
          'She made a <word>subtle</word> point about intent.',
          'The wording carries <word>subtle</word> implications.',
        ],
        reviewExamples: [
          'His critique was <word>subtle</word>, layered with implication rather than accusation, and required careful reading to be fully understood.',
          'The author’s <word>subtle</word> manipulation of language transformed an ordinary observation into a profound insight.',
        ],
      },
      {
        id: '2-2',
        definition: 'Difficult to notice or detect.',
        partOfSpeech: { value: 'adj.', description: 'Other forms: subtler, subtlest' },
        register: 'common',
        synonyms: ['slight', 'faint', 'elusive'],
        antonyms: ['clear', 'obvious', 'apparent'],
        examples: [
          'A <word>subtle</word> change occurred overnight.',
          'The pattern contains <word>subtle</word> variations.',
          'There was a <word>subtle</word> smell in the room.',
          'Lighting caused <word>subtle</word> shifts in color.',
        ],
        reviewExamples: [
          'Only a <word>subtle</word> shift in her expression betrayed the disappointment she otherwise concealed.',
          'The warning signs were <word>subtle</word>, easily dismissed until their cumulative effect became impossible to ignore.',
        ],
      },
    ],
  },

  {
    id: '3',
    word: 'compound',
    details: [
      {
        id: '3-1',
        definition: 'To make a situation worse by adding to it.',
        partOfSpeech: { value: 'verb', description: 'Other forms: compounded' },
        register: 'formal',
        synonyms: ['aggravate', 'worsen', 'exacerbate'],
        antonyms: ['alleviate', 'reduce'],
        examples: [
          'The delay <word>compounded</word> the problem.',
          'Errors were <word>compounded</word> over time.',
          'Stress was <word>compounded</word> by uncertainty.',
          'Poor planning <word>compounded</word> existing issues.',
        ],
        reviewExamples: [
          'Each misguided decision served only to <word>compound</word> the crisis, transforming a manageable setback into a systemic failure.',
          'His silence <word>compounded</word> the misunderstanding, allowing resentment to harden into something irreversible.',
        ],
      },
      {
        id: '3-2',
        definition: 'A thing consisting of two or more connected parts.',
        partOfSpeech: { value: 'noun', description: 'Plural: compounds' },
        register: 'neutral',
        synonyms: ['complex', 'mixture', 'structure'],
        antonyms: ['simple', 'single'],
        examples: [
          'The facility is a secured <word>compound</word>.',
          'The <word>compound</word> includes several buildings.',
          'They entered a guarded residential <word>compound</word>.',
          'The military <word>compound</word> was heavily protected.',
        ],
        reviewExamples: [
          'Hidden beyond the tree line stood a fortified <word>compound</word>, its high walls signaling both authority and isolation.',
          'The diplomat was escorted through the sprawling <word>compound</word>, where power was exercised quietly behind guarded gates.',
        ],
      },
      {
        id: '3-3',
        definition: 'Made up of multiple elements.',
        partOfSpeech: { value: 'adj.', description: '' },
        register: 'technical',
        synonyms: ['combined', 'mixed', 'composite'],
        antonyms: ['simple', 'single'],
        examples: [
          'A <word>compound</word> structure was identified.',
          'The term has a <word>compound</word> meaning.',
          '<word>Compound</word> sentences join independent clauses.',
          'This is a <word>compound</word> material.',
        ],
        reviewExamples: [
          'The researcher focused on the <word>compound</word> nature of the problem, where economic, social, and psychological factors intertwined.',
          'Language itself is often <word>compound</word>, shaped by layers of history that resist simple interpretation.',
        ],
      },
    ],
  },

  {
    id: '4',
    word: 'account',
    details: [
      {
        id: '4-1',
        definition: 'A report or description of an event.',
        partOfSpeech: { value: 'noun', description: 'Plural: accounts' },
        register: 'neutral',
        synonyms: ['report', 'narrative', 'story'],
        antonyms: ['silence', 'concealment'],
        examples: [
          'She gave a detailed <word>account</word> of the incident.',
          'Conflicting <word>accounts</word> emerged.',
          'His <word>account</word> differed from the official version.',
          'The witness provided a clear <word>account</word>.',
        ],
        reviewExamples: [
          'Her written <word>account</word> of the expedition blended factual precision with moments of quiet reflection.',
          'The historian pieced together an <word>account</word> from letters, journals, and fragments long overlooked.',
        ],
      },
      {
        id: '4-2',
        definition: 'To consider or explain something in a specified way.',
        partOfSpeech: { value: 'verb', description: 'Other forms: accounted' },
        register: 'formal',
        synonyms: ['consider', 'explain', 'justify'],
        antonyms: ['ignore', 'disregard'],
        examples: [
          'The delay must be <word>accounted</word> for.',
          'The discrepancy was <word>accounted</word> for by human error.',
          'Costs were <word>accounted</word> for separately.',
          'These factors <word>account</word> for the difference.',
        ],
        reviewExamples: [
          'Any serious analysis must <word>account</word> for the social consequences that statistics alone cannot capture.',
          'The theory fails precisely because it cannot <word>account</word> for human behavior under extreme conditions.',
        ],
      },
    ],
  },
];
