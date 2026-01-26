import type { DictionaryEntry } from './types';

export const DICTIONARY_VOCABULARY_MOCK: DictionaryEntry[] = [
  {
    id: '1',
    word: 'yield',
    details: [
      {
        id: '1-1',
        definition: 'To produce or provide a result, amount, or crop.',
        partOfSpeech: {
          value: 'verb',
          description: 'past: yielded; past participle: yielded',
        },
        frequency: { value: 3, description: 'neutral, general usage' },
        category: 'active',
        examples: [
          'The investment yielded strong returns.',
          'The soil yields high-quality produce.',
          'The experiment yielded unexpected results.',
          'This method yields better performance.',
        ],
      },
      {
        id: '1-2',
        definition: 'To give way to pressure or force.',
        partOfSpeech: {
          value: 'verb',
          description: 'past: yielded; past participle: yielded',
        },
        frequency: { value: 4, description: 'formal, abstract contexts' },
        category: 'passive',
        examples: [
          'The material began to yield under stress.',
          'She refused to yield to external pressure.',
          'The bridge did not yield despite the load.',
          'He eventually yielded to public opinion.',
        ],
      },
      {
        id: '1-3',
        definition: 'The amount produced or generated.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 4, description: 'technical, economics/agriculture' },
        category: 'passive',
        examples: [
          'The annual yield was lower than expected.',
          'Crop yield depends on climate conditions.',
          'This field has a high wheat yield.',
          'Improved methods increased overall yield.',
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
        partOfSpeech: {
          value: 'adj.',
          description: 'comparative: subtler; superlative: subtlest',
        },
        frequency: { value: 3, description: 'formal, analytical contexts' },
        category: 'active',
        examples: [
          'There was a subtle difference in tone.',
          'The argument relied on subtle distinctions.',
          'She made a subtle point about intent.',
          'The wording carries subtle implications.',
        ],
      },
      {
        id: '2-2',
        definition: 'Difficult to notice or detect.',
        partOfSpeech: {
          value: 'adj.',
          description: 'comparative: subtler; superlative: subtlest',
        },
        frequency: { value: 2, description: 'common but descriptive' },
        category: 'active',
        examples: [
          'A subtle change occurred overnight.',
          'The pattern contains subtle variations.',
          'There was a subtle smell in the room.',
          'Lighting caused subtle shifts in color.',
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
        partOfSpeech: {
          value: 'verb',
          description: 'past: compounded; past participle: compounded',
        },
        frequency: { value: 4, description: 'formal, written usage' },
        category: 'passive',
        examples: [
          'The delay compounded the problem.',
          'Errors were compounded over time.',
          'Stress was compounded by uncertainty.',
          'Poor planning compounded existing issues.',
        ],
      },
      {
        id: '3-2',
        definition: 'A thing consisting of two or more connected parts.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 3, description: 'neutral, concrete usage' },
        category: 'active',
        examples: [
          'The facility is a secured compound.',
          'The compound includes several buildings.',
          'They entered a guarded residential compound.',
          'The military compound was heavily protected.',
        ],
      },
      {
        id: '3-3',
        definition: 'Made up of multiple elements.',
        partOfSpeech: { value: 'adj.' },
        frequency: { value: 4, description: 'technical or descriptive' },
        category: 'passive',
        examples: [
          'A compound structure was identified.',
          'The term has a compound meaning.',
          'Compound sentences join independent clauses.',
          'This is a compound material.',
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
        partOfSpeech: { value: 'noun' },
        frequency: { value: 2, description: 'neutral, narrative usage' },
        category: 'active',
        examples: [
          'She gave a detailed account of the incident.',
          'Conflicting accounts emerged.',
          'His account differed from the official version.',
          'The witness provided a clear account.',
        ],
      },
      {
        id: '4-2',
        definition: 'To consider or explain something in a specified way.',
        partOfSpeech: {
          value: 'verb',
          description: 'past: accounted; past participle: accounted (for)',
        },
        frequency: { value: 3, description: 'formal, fixed expressions' },
        category: 'passive',
        examples: [
          'The delay must be accounted for.',
          'The discrepancy was accounted for by human error.',
          'Costs were accounted for separately.',
          'These factors account for the difference.',
        ],
      },
    ],
  },

  {
    id: '5',
    word: 'margin',
    details: [
      {
        id: '5-1',
        definition: 'The edge or border of something.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 3, description: 'neutral, everyday usage' },
        category: 'active',
        examples: [
          'Notes were written in the margin.',
          'The figure appears in the margin.',
          'She made corrections in the margins.',
          'The text extended beyond the margin.',
        ],
      },
      {
        id: '5-2',
        definition: 'An amount by which something is won or lost.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 4, description: 'business and statistics' },
        category: 'passive',
        examples: [
          'The victory came by a narrow margin.',
          'Profit margins declined significantly.',
          'They lost by a small margin.',
          'Margins improved after restructuring.',
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
        partOfSpeech: {
          value: 'verb',
          description: 'past: strained; past participle: strained',
        },
        frequency: { value: 3, description: 'neutral, physical or mental' },
        category: 'active',
        examples: [
          'The task strained available resources.',
          'He strained to hear the conversation.',
          'The engine strained under heavy load.',
          'She strained her back lifting the box.',
        ],
      },
      {
        id: '6-2',
        definition: 'Pressure or tension resulting from demands.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 3, description: 'formal, abstract contexts' },
        category: 'active',
        examples: [
          'The system is under considerable strain.',
          'Financial strain affected the project.',
          'The relationship showed signs of strain.',
          'Long hours caused mental strain.',
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
        partOfSpeech: {
          value: 'verb',
          description: 'past: retained; past participle: retained',
        },
        frequency: { value: 2, description: 'formal, institutional usage' },
        category: 'active',
        examples: [
          'The company retained its workforce.',
          'She retained control over the process.',
          'He retained ownership of the property.',
          'The policy helps retain employees.',
        ],
      },
      {
        id: '7-2',
        definition: 'To keep something in memory.',
        partOfSpeech: {
          value: 'verb',
          description: 'past: retained; past participle: retained',
        },
        frequency: { value: 4, description: 'academic, cognitive contexts' },
        category: 'passive',
        examples: [
          'Only key details were retained.',
          'Information is better retained through repetition.',
          'Students retain concepts through practice.',
          'Visual aids help retain information.',
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
        partOfSpeech: { value: 'noun' },
        frequency: { value: 3, description: 'academic, theoretical usage' },
        category: 'active',
        examples: [
          'The theory provides a conceptual framework.',
          'A legal framework was established.',
          'The model operates within a defined framework.',
          'Ethical frameworks guide decision-making.',
        ],
      },
      {
        id: '8-2',
        definition: 'A supporting structure.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 4, description: 'technical, engineering contexts' },
        category: 'passive',
        examples: [
          'The building’s framework was reinforced.',
          'Steel formed the main framework.',
          'The framework supports the entire structure.',
          'Damage to the framework caused collapse.',
        ],
      },
    ],
  },

  {
    id: '9',
    word: 'offset',
    details: [
      {
        id: '9-1',
        definition: 'To counterbalance the effect of something.',
        partOfSpeech: {
          value: 'verb',
          description: 'past: offset; past participle: offset',
        },
        frequency: { value: 3, description: 'formal, financial usage' },
        category: 'active',
        examples: [
          'Costs were offset by increased revenue.',
          'Losses were partially offset.',
          'Savings offset rising expenses.',
          'Emissions can be offset by reforestation.',
        ],
      },
      {
        id: '9-2',
        definition: 'A consideration that reduces the impact of another.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 4, description: 'technical, accounting usage' },
        category: 'passive',
        examples: [
          'Tax offsets were applied.',
          'The benefit served as an offset.',
          'Offsets reduced overall liability.',
          'Carbon offsets are widely debated.',
        ],
      },
    ],
  },

  {
    id: '10',
    word: 'scope',
    details: [
      {
        id: '10-1',
        definition: 'The extent or range of something.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 2, description: 'neutral, abstract usage' },
        category: 'active',
        examples: [
          'The project falls within the scope of research.',
          'The scope was clearly defined.',
          'This issue lies outside the scope.',
          'The study expanded its scope.',
        ],
      },
      {
        id: '10-2',
        definition: 'Opportunity or possibility for action.',
        partOfSpeech: { value: 'noun' },
        frequency: { value: 3, description: 'formal, evaluative contexts' },
        category: 'passive',
        examples: [
          'There is limited scope for improvement.',
          'The role offers scope for growth.',
          'The policy leaves little scope for change.',
          'This position provides scope for initiative.',
        ],
      },
    ],
  },
];
