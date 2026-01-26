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
      },
    ],
  },

  // Four new words
  {
    id: '5',
    word: 'margin',
    details: [
      {
        id: '5-1',
        definition: 'The edge or border of something.',
        partOfSpeech: { value: 'noun', description: 'Plural: margins' },
        register: 'neutral',
        synonyms: ['edge', 'border', 'periphery'],
        antonyms: ['center', 'middle'],
        examples: [
          'Notes were written in the <word>margin</word>.',
          'The figure appears in the <word>margin</word>.',
          'She made corrections in the <word>margins</word>.',
          'The text extended beyond the <word>margin</word>.',
        ],
      },
      {
        id: '5-2',
        definition: 'An amount by which something is won or lost.',
        partOfSpeech: { value: 'noun', description: 'Plural: margins' },
        register: 'formal',
        synonyms: ['difference', 'leeway', 'buffer'],
        antonyms: ['deficit', 'shortfall'],
        examples: [
          'The victory came by a narrow <word>margin</word>.',
          'Profit <word>margins</word> declined significantly.',
          'They lost by a small <word>margin</word>.',
          '<word>Margins</word> improved after restructuring.',
        ],
      },
    ],
  },

  {
    id: '6',
    word: 'strain',
    details: [
      {
        id: '6-1',
        definition: 'To exert or stretch beyond normal limits.',
        partOfSpeech: { value: 'verb', description: 'Other forms: strained' },
        register: 'neutral',
        synonyms: ['stretch', 'overextend', 'tax'],
        antonyms: ['relax', 'ease'],
        examples: [
          'The task <word>strained</word> available resources.',
          'He <word>strained</word> to hear the conversation.',
          'The engine <word>strained</word> under heavy load.',
          'She <word>strained</word> her back lifting the box.',
        ],
      },
      {
        id: '6-2',
        definition: 'Pressure or tension resulting from demands.',
        partOfSpeech: { value: 'noun', description: 'Plural: strains' },
        register: 'formal',
        synonyms: ['pressure', 'tension', 'stress'],
        antonyms: ['relief', 'ease'],
        examples: [
          'The system is under considerable <word>strain</word>.',
          'Financial <word>strain</word> affected the project.',
          'The relationship showed signs of <word>strain</word>.',
          'Long hours caused mental <word>strain</word>.',
        ],
      },
    ],
  },

  {
    id: '7',
    word: 'retain',
    details: [
      {
        id: '7-1',
        definition: 'To continue to have or keep possession of something.',
        partOfSpeech: { value: 'verb', description: 'Other forms: retained' },
        register: 'formal',
        synonyms: ['keep', 'maintain', 'hold'],
        antonyms: ['lose', 'discard', 'release'],
        examples: [
          'The company <word>retained</word> its workforce.',
          'She <word>retained</word> control over the process.',
          'He <word>retained</word> ownership of the property.',
          'The policy helps <word>retain</word> employees.',
        ],
      },
      {
        id: '7-2',
        definition: 'To keep something in memory.',
        partOfSpeech: { value: 'verb', description: 'Other forms: retained' },
        register: 'formal',
        synonyms: ['remember', 'memorize', 'preserve'],
        antonyms: ['forget', 'lose'],
        examples: [
          'Only key details were <word>retained</word>.',
          'Information is better <word>retained</word> through repetition.',
          'Students <word>retain</word> concepts through practice.',
          'Visual aids help <word>retain</word> information.',
        ],
      },
    ],
  },

  {
    id: '8',
    word: 'framework',
    details: [
      {
        id: '8-1',
        definition: 'A basic structure underlying a system or concept.',
        partOfSpeech: { value: 'noun', description: 'Plural: frameworks' },
        register: 'formal',
        synonyms: ['structure', 'system', 'skeleton'],
        antonyms: ['chaos', 'disorder'],
        examples: [
          'The theory provides a conceptual <word>framework</word>.',
          'A legal <word>framework</word> was established.',
          'The model operates within a defined <word>framework</word>.',
          'Ethical <word>frameworks</word> guide decision-making.',
        ],
      },
      {
        id: '8-2',
        definition: 'A supporting structure.',
        partOfSpeech: { value: 'noun', description: 'Plural: frameworks' },
        register: 'technical',
        synonyms: ['support', 'skeleton', 'structure'],
        antonyms: ['void', 'gap'],
        examples: [
          'The building’s <word>framework</word> was reinforced.',
          'Steel formed the main <word>framework</word>.',
          'The <word>framework</word> supports the entire structure.',
          'Damage to the <word>framework</word> caused collapse.',
        ],
      },
    ],
  },
];
