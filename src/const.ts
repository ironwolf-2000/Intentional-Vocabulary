import type { DictionaryEntry } from '@/types';

export const LocalStorageKeys = {
  LAYOUT_WARNING_SEEN: 'layoutWarningSeen',
  DICTIONARY_BUTTONS_SEEN: 'dictionaryButtonsSeen',
  ACTIVE_REVIEW_CARDS: 'activeReviewCards',
  PASSIVE_REVIEW_CARDS: 'passiveReviewCards',
} as const;

export type LocalStorageKey = (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys];
export type ReviewCardStorageKey =
  | typeof LocalStorageKeys.ACTIVE_REVIEW_CARDS
  | typeof LocalStorageKeys.PASSIVE_REVIEW_CARDS;

export const DICTIONARY_VOCABULARY_MOCK: DictionaryEntry[] = [
  {
    id: '1',
    word: 'abstract',
    details: [
      {
        id: '1-1',
        definition: 'existing as an idea, feeling, or quality rather than a physical object',
        partOfSpeech: { value: 'adj.' },
        wordForms: ['abstract'],
        register: 'formal',
        synonyms: ['theoretical', 'conceptual', 'intangible'],
        antonyms: ['concrete', 'tangible', 'physical'],
        examples: [
          'Freedom is an <word>abstract</word> concept.',
          'The artist prefers <word>abstract</word> themes over realistic ones.',
          'Justice can be difficult to define because it is <word>abstract</word>.',
        ],
        reviewExamples: [
          'Philosophy often deals with <word>abstract</word> ideas.',
          'Students sometimes struggle with <word>abstract</word> reasoning.',
          'Love is an <word>abstract</word> notion that means different things to different people.',
        ],
      },
      {
        id: '1-2',
        definition: 'to remove or take something away from a larger whole',
        partOfSpeech: { value: 'verb' },
        wordForms: ['abstract', 'abstracted', 'abstracting'],
        register: 'formal',
        synonyms: ['extract', 'remove', 'derive'],
        antonyms: ['insert', 'add', 'include'],
        examples: [
          'The scientist <word>abstracted</word> key data from the report.',
          'Important details were <word>abstracted</word> from the original text.',
          'The summary <word>abstracts</word> the main arguments of the paper.',
        ],
        reviewExamples: [
          'Researchers <word>abstract</word> patterns from large data sets.',
          'The editor <word>abstracted</word> unnecessary details.',
          'We need to <word>abstract</word> the core principles from the discussion.',
        ],
      },
      {
        id: '1-3',
        definition: 'a brief summary of a document, article, or research paper',
        partOfSpeech: { value: 'noun' },
        wordForms: ['abstract', 'abstracts'],
        register: 'formal/academic',
        synonyms: ['summary', 'overview', 'synopsis'],
        antonyms: ['full text', 'expansion'],
        examples: [
          'The paper includes an <word>abstract</word> at the beginning.',
          'Please read the <word>abstract</word> before reviewing the full article.',
          'Her thesis <word>abstract</word> clearly states the main findings.',
        ],
        reviewExamples: [
          'Each submission must contain an <word>abstract</word> of no more than 200 words.',
          'The conference requires an <word>abstract</word> for all presentations.',
          'He rewrote the <word>abstract</word> to better reflect the results.',
        ],
      },
    ],
  },

  {
    id: '2',
    word: 'account',
    details: [
      {
        id: '2-1',
        definition: 'a report or description of an event',
        partOfSpeech: { value: 'noun', description: 'Plural: accounts' },
        wordForms: ['account', 'accounts'],
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
      },
      {
        id: '2-2',
        definition: 'to consider or explain something in a specified way',
        partOfSpeech: { value: 'verb', description: 'Other forms: accounted for' },
        wordForms: ['account for', 'accounts for', 'accounting for', 'accounted for'],
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
      },
    ],
  },

  {
    id: '3',
    word: 'break the ice',
    details: [
      {
        id: '3-1',
        definition: 'to initiate conversation or interaction in order to reduce tension or awkwardness',
        partOfSpeech: { value: 'idiom' },
        wordForms: ['break the ice', 'breaks the ice', 'breaking the ice', 'broke the ice', 'broken the ice'],
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
      },
    ],
  },

  {
    id: '4',
    word: 'bring up',
    details: [
      {
        id: '4-1',
        definition: 'to mention or introduce a topic in conversation',
        partOfSpeech: { value: 'verb', description: 'Other forms: brought up' },
        wordForms: ['bring up', 'brought up', 'bringing up'],
        register: 'neutral',
        synonyms: ['raise', 'introduce'],
        antonyms: ['ignore', 'avoid', 'suppress'],
        examples: [
          'She <word>brought up</word> an interesting point during the meeting.',
          'He <word>brought up</word> the issue of overtime with his manager.',
          'They <word>brought up</word> the topic of climate change at dinner.',
        ],
        reviewExamples: [
          'During the debate, she <word>brought up</word> several relevant facts.',
          'He <word>brought up</word> a difficult question that no one expected.',
          'They <word>brought up</word> the matter of funding at the last minute.',
        ],
      },
      {
        id: '4-2',
        definition: 'to care for a child until they are an adult',
        partOfSpeech: { value: 'verb', description: 'Other forms: brought up' },
        wordForms: ['bring up', 'brought up', 'bringing up'],
        register: 'neutral',
        synonyms: ['raise', 'nurture', 'rear'],
        antonyms: ['neglect', 'abandon'],
        examples: [
          'They <word>brought up</word> three children on a small farm.',
          'She was <word>brought up</word> by her grandparents.',
          'He <word>brought up</word> his kids with a lot of discipline and love.',
        ],
        reviewExamples: [
          'The parents <word>brought up</word> their children to be independent.',
          'She <word>brought up</word> her son after her husband passed away.',
          'They <word>brought up</word> their family in a rural town.',
        ],
      },
      {
        id: '4-3',
        definition: 'to vomit',
        partOfSpeech: { value: 'verb', description: 'Other forms: brought up' },
        wordForms: ['bring up', 'brought up', 'bringing up'],
        register: 'informal',
        synonyms: ['vomit', 'throw up', 'regurgitate'],
        antonyms: ['swallow', 'ingest'],
        examples: [
          'The child <word>brought up</word> his lunch after feeling sick.',
          'He <word>brought up</word> everything he ate on the roller coaster.',
          'She felt dizzy and <word>brought up</word> her breakfast.',
        ],
        reviewExamples: [
          'After the spicy food, he <word>brought up</word> his dinner.',
          'The dog <word>brought up</word> its food on the carpet.',
          'She <word>brought up</word> a bitter drink that made her gag.',
        ],
      },
    ],
  },

  {
    id: '5',
    word: 'compound',
    details: [
      {
        id: '5-1',
        definition: 'to make a situation worse by adding to it',
        partOfSpeech: { value: 'verb', description: 'Other forms: compounded' },
        wordForms: ['compound', 'compounds', 'compounding', 'compounded'],
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
      },
      {
        id: '5-2',
        definition: 'a thing consisting of two or more connected parts',
        partOfSpeech: { value: 'noun', description: 'Plural: compounds' },
        wordForms: ['compound', 'compounds'],
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
      },
      {
        id: '5-3',
        definition: 'made up of multiple elements',
        partOfSpeech: { value: 'adj.' },
        wordForms: ['compound'],
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
      },
    ],
  },

  {
    id: '6',
    word: 'no-brainer',
    details: [
      {
        id: '6-1',
        definition: 'something that requires little or no mental effort to decide',
        partOfSpeech: { value: 'idiom' },
        wordForms: ['no-brainer'],
        register: 'informal',
        synonyms: ['obvious choice', 'easy decision'],
        antonyms: ['difficult choice', 'conundrum'],
        examples: [
          'Choosing the cheaper plan was a <word>no-brainer</word>.',
          'For her, accepting the job offer was a <word>no-brainer</word>.',
          'Picking the blue shirt over the green one was a <word>no-brainer</word>.',
        ],
        reviewExamples: [
          'Deciding to stay home in the storm was a total <word>no-brainer</word>.',
          'Buying this laptop with the discount is a <word>no-brainer</word>.',
          'Using the shortcut was a <word>no-brainer</word> for saving time.',
        ],
      },
    ],
  },

  {
    id: '7',
    word: 'run out',
    details: [
      {
        id: '7-1',
        definition: 'to have no more of something left',
        partOfSpeech: { value: 'verb', description: 'Other forms: ran out' },
        wordForms: ['run out', 'ran out', 'running out'],
        register: 'neutral',
        synonyms: ['exhaust', 'deplete', 'finish'],
        antonyms: ['stock', 'accumulate', 'replenish'],
        examples: [
          'We <word>ran out of</word> sugar while baking.',
          'They <word>ran out of</word> gas on the highway.',
          'The store <word>ran out of</word> tickets quickly.',
        ],
        reviewExamples: [
          'I <word>ran out of</word> patience after waiting for an hour.',
          'She <word>ran out of</word> ideas for the project.',
          'The office <word>ran out of</word> printer paper again.',
        ],
      },
      {
        id: '7-2',
        definition: 'to leave a place quickly, often due to urgency',
        partOfSpeech: { value: 'verb', description: 'Other forms: ran out' },
        wordForms: ['run out', 'ran out', 'running out'],
        register: 'neutral',
        synonyms: ['dash', 'bolt', 'rush'],
        antonyms: ['linger', 'stay', 'wait'],
        examples: [
          'She <word>ran out</word> of the house when she heard the news.',
          'The kids <word>ran out</word> of the classroom as soon as the bell rang.',
          'He <word>ran out</word> of the building to catch the bus.',
        ],
        reviewExamples: [
          'They <word>ran out</word> of the theater when the fire alarm went off.',
          'He <word>ran out</word> to answer the phone.',
          'She <word>ran out</word> of the store without paying by accident.',
        ],
      },
    ],
  },

  {
    id: '8',
    word: 'subtle',
    details: [
      {
        id: '8-1',
        definition: 'delicate or precise in meaning or expression',
        partOfSpeech: { value: 'adj.', description: 'Other forms: subtler, subtlest' },
        wordForms: ['subtle', 'subtler', 'subtlest'],
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
      },
      {
        id: '8-2',
        definition: 'difficult to notice or detect',
        partOfSpeech: { value: 'adj.', description: 'Other forms: subtler, subtlest' },
        wordForms: ['subtle', 'subtler', 'subtlest'],
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
      },
    ],
  },

  {
    id: '9',
    word: 'volatile',
    details: [
      {
        id: '9-1',
        definition: 'liable to change rapidly and unpredictably, especially for the worse',
        partOfSpeech: { value: 'adj.' },
        wordForms: ['volatile'],
        register: 'formal',
        synonyms: ['unstable', 'erratic', 'unpredictable'],
        antonyms: ['stable', 'constant', 'predictable'],
        examples: [
          'The stock market is extremely <word>volatile</word> this week.',
          'His <word>volatile</word> temperament made him difficult to work with.',
          'Political situations in the region are <word>volatile</word>.',
        ],
        reviewExamples: [
          'Oil prices remain highly <word>volatile</word>.',
          'Her <word>volatile</word> mood can change from happy to angry quickly.',
          'The relationship between the countries is <word>volatile</word>.',
        ],
      },
      {
        id: '9-2',
        definition: 'easily evaporated at normal temperatures',
        partOfSpeech: { value: 'adj.' },
        wordForms: ['volatile'],
        register: 'scientific',
        synonyms: ['evaporative', 'vaporous'],
        antonyms: ['stable', 'nonvolatile', 'solid'],
        examples: [
          'Mercury is a <word>volatile</word> metal at room temperature.',
          'Some solvents are highly <word>volatile</word> and require careful handling.',
          '<word>Volatile</word> compounds can escape into the air easily.',
        ],
        reviewExamples: [
          'The chemical is <word>volatile</word> and must be stored in a sealed container.',
          'Essential oils are <word>volatile</word> and evaporate quickly.',
          'The laboratory monitors <word>volatile</word> substances closely for safety.',
        ],
      },
    ],
  },

  {
    id: '10',
    word: 'yield',
    details: [
      {
        id: '10-1',
        definition: 'to produce or provide a result, amount, or crop',
        partOfSpeech: { value: 'verb', description: 'Other forms: yielded' },
        wordForms: ['yield', 'yields', 'yielding', 'yielded'],
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
      },
      {
        id: '10-2',
        definition: 'to give way to pressure or force',
        partOfSpeech: { value: 'verb', description: 'Other forms: yielded' },
        wordForms: ['yield', 'yields', 'yielding', 'yielded'],
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
      },
      {
        id: '10-3',
        definition: 'the amount produced or generated',
        partOfSpeech: { value: 'noun', description: 'Plural: yields' },
        wordForms: ['yield', 'yields'],
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
      },
    ],
  },
];
