# Intentional Vocabulary Prototype

A vocabulary learning prototype that matches the _type_ of practice to what a learner actually wants to do with a word — recognize it, or use it.

---

## Motivation

Most vocabulary tools treat every word the same way: look it up, add it to a deck, review it on a schedule. But second-language acquisition research draws a consistent line between two distinct skills:

- **Receptive vocabulary** — words a learner understands when encountered
- **Productive vocabulary** — words a learner can use spontaneously in new contexts

These require fundamentally different kinds of practice (Nation, 2001). Standard flashcard apps apply a uniform interaction model to both, which tends to produce shallow familiarity rather than flexible use. Dictionary interfaces go the other way — prioritizing completeness over focus, presenting everything at once in a way that adds cognitive load (Sweller, 1988) without helping words stick.

Neither design asks learners what they want to do with a word.

**Research question:** Can we design a vocabulary learning interface that supports both recognition and production — by matching the type of interaction to what the learner says they need?

---

## Interaction Model

The prototype is structured around a four-stage learning loop:

```
Encounter → Commit → Review → Re-encounter
```

| Stage            | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| **Encounter**    | Look up a word during real-world reading or writing                 |
| **Commit**       | Save a specific meaning and explicitly label it — passive or active |
| **Review**       | Mode-specific practice targeting recognition or production          |
| **Re-encounter** | Words resurface on a schedule with randomized examples              |

The **Commit** step is structurally central. Unlike standard apps where saving a word is passive, here it requires a deliberate choice — a moment of metacognitive reflection that may itself improve encoding (Kornell et al., 2009).

---

## Review Modes

### Passive Review — Recognition Across Contexts

The learner sees a sentence with the target word highlighted, but unexplained. After attempting to make sense of it, they reveal the definition and rate their understanding.

Showing the word in context _before_ explaining it is intentional. Attempting to retrieve or interpret a word — even unsuccessfully — tends to produce better retention than reading a definition directly (Roediger & Karpicke, 2006). Examples are randomized across sessions to prevent over-reliance on a single familiar context.

### Active Review — Controlled Production

The learner sees a short definition and a cloze sentence (the target word removed), then writes an original sentence using the word.

Responses are evaluated for **contextual appropriateness, not grammatical correctness** — minor errors are ignored. This keeps the focus on meaningful use rather than performance anxiety. Production tasks demand deeper semantic engagement than recognition, which tends to produce more durable retention (Craik & Lockhart, 1972).

---

## Dictionary Redesign

The lookup interface departs from the completeness-first model of tools like Oxford and Cambridge dictionaries:

- **Grouped definitions** — related meanings within the same part of speech are combined into a single card, enabling quicker semantic comparison
- **Randomized examples** — one contextual example shown at a time, refreshable on demand, to prevent over-familiarity
- **Progressive disclosure** — word forms, register, and usage notes revealed via tooltip rather than displayed upfront
- **Inline synonyms and antonyms** — differentiated by color rather than label, supporting exploratory navigation without visual noise

Each definition card doubles as an entry point to the learning flow — users save a specific meaning and choose their intent directly from the lookup view.

---

## Tech Stack

| Layer      | Technology                                 |
| ---------- | ------------------------------------------ |
| Framework  | React + TypeScript                         |
| UI Library | Mantine                                    |
| Storage    | Browser local memory (lightweight testing) |
| Platform   | Desktop web only                           |

---

## Prototype Scope

This is an interaction design prototype, not a production system. Some features are represented at the interface level but not fully implemented:

- **Spaced repetition scheduling** — present in the vocabulary overview, not algorithmically complete
- **AI-based sentence evaluation** — active review uses a placeholder; contextual scoring is not live

Accessibility foundations are in place: keyboard navigation is supported, focus states are visible, and color contrast meets readability standards.

---

## Limitations

- Small vocabulary dataset — scheduling and review systems untested at scale
- Desktop-only — vocabulary lookup most naturally happens on mobile, during reading
- The passive/active distinction has not yet been validated with users
- AI sentence evaluation remains a placeholder

---

## Future Directions

- **Longitudinal study** comparing the system against a spaced repetition baseline, measuring recall and transfer to new contexts
- **Listening-based passive review** — recognizing words without visual cues
- **Speaking-based active review** — pronunciation feedback combined with contextual production
- **Grammar lookup** applying the same interaction model to usage rules rather than definitions

The key open question: do learners correctly internalize the passive/active distinction — and does making that choice explicitly improve both retention and metacognitive awareness over time?
