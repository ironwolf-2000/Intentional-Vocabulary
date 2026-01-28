import type { DictionaryEntry } from '@/types';

export const DICTIONARY_VOCABULARY_MOCK: DictionaryEntry[] = [
  {
    id: '1',
    word: 'yield',
    details: [
      {
        id: '1-1',
        definition: 'To produce or provide a result, amount, or crop',
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
          'After several months of testing and adjustment, the new production process finally <word>yielded</word> reliable results that the team could confidently present to management.',
          'Although the initial investment was high, the strategy eventually <word>yielded</word> consistent profits and proved to be more sustainable than short-term alternatives.',
        ],
        wordForms: ['yield', 'yields', 'yielding', 'yielded'],
      },
      {
        id: '1-2',
        definition: 'To give way to pressure or force',
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
          'Even under intense political and public pressure, she refused to <word>yield</word>, choosing instead to defend her decision until clear evidence forced a change.',
          'The metal frame resisted at first, but after years of exposure to heat and weight, it slowly began to <word>yield</word>, showing visible signs of structural weakness.',
        ],
        wordForms: ['yield', 'yields', 'yielding', 'yielded'],
      },
      {
        id: '1-3',
        definition: 'The amount produced or generated',
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
          'Farmers noticed that the <word>yield</word> per hectare had dropped significantly, despite using the same techniques that had worked well in previous years.',
          'By improving irrigation and soil quality, the company managed to increase overall <word>yield</word> without expanding the cultivated area.',
        ],
        wordForms: ['yield', 'yields'],
      },
    ],
  },

  {
    id: '2',
    word: 'subtle',
    details: [
      {
        id: '2-1',
        definition: 'Delicate or precise in meaning or expression',
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
          'His response was <word>subtle</word>, carefully phrased so that it acknowledged the problem without openly assigning blame to anyone involved.',
          'The article makes a <word>subtle</word> argument about responsibility, one that becomes clear only after reading several sections closely.',
        ],
        wordForms: ['subtle', 'subtler', 'subtlest'],
      },
      {
        id: '2-2',
        definition: 'Difficult to notice or detect',
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
          'There was a <word>subtle</word> shift in her attitude during the discussion, small enough to ignore at first but noticeable once the conversation ended.',
          'The software update introduced <word>subtle</word> changes to performance that users felt before they could clearly identify what had improved.',
        ],
        wordForms: ['subtle', 'subtler', 'subtlest'],
      },
    ],
  },

  {
    id: '3',
    word: 'compound',
    details: [
      {
        id: '3-1',
        definition: 'To make a situation worse by adding to it',
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
          'The lack of clear communication continued to <word>compound</word> the problem, turning a minor misunderstanding into a serious conflict.',
          'Financial losses were <word>compounded</word> by poor timing, as market conditions worsened just when the company needed stability.',
        ],
        wordForms: ['compound', 'compounds', 'compounding', 'compounded'],
      },
      {
        id: '3-2',
        definition: 'A thing consisting of two or more connected parts',
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
          'The journalist was taken into a secure <word>compound</word> containing offices, residences, and checkpoints, all tightly controlled by armed guards.',
          'Inside the <word>compound</word>, daily life followed strict rules designed to limit access and maintain security.',
        ],
        wordForms: ['compound', 'compounds'],
      },
      {
        id: '3-3',
        definition: 'Made up of multiple elements',
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
          'The issue is <word>compound</word>, involving economic pressure, social expectations, and psychological stress that cannot be separated easily.',
          'Researchers described the failure as <word>compound</word>, caused by a combination of technical errors and human decision-making.',
        ],
        wordForms: ['compound'],
      },
    ],
  },

  {
    id: '4',
    word: 'account',
    details: [
      {
        id: '4-1',
        definition: 'A report or description of an event',
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
          'His <word>account</word> of the accident included precise details about timing, location, and sequence of events.',
          'Several eyewitnesses gave different <word>accounts</word>, making it difficult to reconstruct exactly what had happened.',
        ],
        wordForms: ['account', 'accounts'],
      },
      {
        id: '4-2',
        definition: 'To consider or explain something in a specified way',
        partOfSpeech: { value: 'verb', description: 'Other forms: accounted for' },
        register: 'formal',
        synonyms: ['consider', 'explain', 'justify'],
        antonyms: ['ignore', 'disregard'],
        examples: [
          'The delay must be <word>accounted for</word> immediately.',
          'The discrepancy was <word>accounted for</word> by human error.',
          'Costs were <word>accounted for</word> separately.',
          'These factors <word>account for</word> the difference.',
        ],
        reviewExamples: [
          'Any realistic model must <word>account</word> for unexpected variables, such as human behavior and environmental change.',
          'The delay can be fully <word>accounted</word> for once transportation issues and staffing shortages are taken into consideration.',
        ],
        wordForms: ['account for', 'accounts for', 'accounting for', 'accounted for'],
      },
    ],
  },

  {
    id: '5',
    word: 'break the ice',
    details: [
      {
        id: '5-1',
        definition: 'To initiate conversation or interaction in order to reduce tension or awkwardness',
        partOfSpeech: { value: 'idiom' },
        register: 'neutral',
        synonyms: ['start a conversation', 'initiate interaction', 'ease tension'],
        antonyms: ['avoid interaction', 'remain silent'],
        examples: [
          'He told a funny story to <word>break the ice</word> at the meeting.',
          'Asking about hobbies can help <word>break the ice</word> with new colleagues.',
          'A few light jokes at the party helped <word>break the ice</word> among strangers.',
          'The teacher used a game to <word>break the ice</word> on the first day of class.',
        ],
        reviewExamples: [
          'At the networking event, she cleverly asked about favorite books to <word>break the ice</word>, which led to a lively discussion and several new contacts.',
          'Before starting the workshop, the facilitator shared a humorous anecdote to <word>break the ice</word>, helping the participants feel more relaxed and engaged.',
        ],
        wordForms: ['break the ice', 'breaks the ice', 'breaking the ice', 'broke the ice', 'broken the ice'],
      },
    ],
  },
];
