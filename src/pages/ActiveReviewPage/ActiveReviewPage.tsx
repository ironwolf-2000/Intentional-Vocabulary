import { type FC, useMemo, useState } from 'react';
import {
  Stack,
  Card,
  Text,
  Group,
  AppShell,
  Center,
  Divider,
  Badge,
  Textarea,
  Button,
  Alert,
  Blockquote,
  Tooltip,
  ActionIcon,
} from '@mantine/core';
import {
  IconCheck,
  IconAlertCircle,
  IconArrowRight,
  IconEye,
  IconInfoCircle,
  IconExclamationCircle,
} from '@tabler/icons-react';
import { getDueCards, parseExampleText, setReviewCard } from '@/helpers';
import { CompletedReviewsCard } from '@/components';

export const ActiveReviewPage: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'warning' | 'error';
    message: string;
  } | null>(null);
  const [wordRevealed, setWordRevealed] = useState(false);

  const dueCards = useMemo(() => Object.values(getDueCards('activeReviewCards')), []);
  const card = dueCards[currentIndex];

  const goNext = () => {
    setCurrentIndex((idx) => idx + 1);
    setUserInput('');
    setFeedback(null);
    setWordRevealed(false);
  };

  const evaluateResponse = () => {
    if (!userInput.trim()) {
      setFeedback({
        type: 'error',
        message: 'Please write a sentence before evaluating your answer.',
      });
      return;
    }

    const input = userInput
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, '');

    const containsWord = card.wordForms.some((word) => input.includes(word));
    const wordCount = input.split(/\s+/).length;

    if (!containsWord) {
      setFeedback({
        type: 'error',
        message: 'Your sentence does not include the target word.',
      });
    } else if (wordCount < 4) {
      setFeedback({
        type: 'warning',
        message: 'Your sentence is quite short. Try adding more context.',
      });
    } else {
      const successResponses = [
        {
          label: 'Excellent!',
          message: 'You did an excellent job. Your sentence clearly demonstrates the meaning.',
          daysToAdd: 21,
        },
        {
          label: 'Good job',
          message: 'You did a good job using the word in context.',
          daysToAdd: 14,
        },
        {
          label: 'Satisfactory',
          message: 'You used the word correctly, but there is some room for improvement.',
          daysToAdd: 7,
        },
      ];

      const randomIndex = Math.floor(Math.random() * successResponses.length);
      const selectedResponse = successResponses[randomIndex];

      setFeedback({
        type: 'success',
        message: selectedResponse.message,
      });

      const dueDate = new Date();
      dueDate.setHours(0, 0, 0, 0);
      dueDate.setDate(dueDate.getDate() + selectedResponse.daysToAdd - (wordRevealed ? 5 : 0));

      setReviewCard('activeReviewCards', card.id, dueDate);
    }
  };

  if (currentIndex === dueCards.length) {
    return <CompletedReviewsCard />;
  }

  return (
    <AppShell.Main>
      <Center h='100%'>
        <Card shadow='lg' radius='lg' withBorder w={720} h='calc(100vh - 160px)'>
          <Stack h='100%' gap={0}>
            <Stack h='50%' justify='center' gap='lg' px='xl'>
              <Text size='xl' fw={600} mb={4}>
                Practice using a word that matches the definition below
              </Text>

              <Stack gap='sm'>
                <Group gap='xs'>
                  <Badge variant='light' color='indigo' size='md'>
                    {card.partOfSpeech.value}
                  </Badge>
                  <Text size='lg' fw={500} style={{ flex: 1 }}>
                    {card.definition}
                  </Text>
                </Group>

                {card.synonyms?.length ? (
                  <>
                    <Divider label='Synonyms' labelPosition='left' />
                    <Group gap='xs' wrap='wrap'>
                      {card.synonyms.map((word, idx) => (
                        <Badge key={idx} variant='light' color='blue' radius='xl'>
                          {word}
                        </Badge>
                      ))}
                    </Group>
                  </>
                ) : null}

                <Divider label='Example' labelPosition='left' />

                <Group align='flex-start' gap='sm'>
                  <Blockquote color='indigo.2' radius='md' p='sm' fz='xs' style={{ flex: 1 }}>
                    <Text fs='italic' fz='sm'>
                      {parseExampleText(card.examples[0], !wordRevealed)}
                    </Text>
                  </Blockquote>

                  <Tooltip
                    label={
                      wordRevealed
                        ? `Target word: ${card.word}`
                        : 'Revealing the word may reduce the learning value of your answer'
                    }
                    withArrow
                    color='indigo'
                    position='bottom'
                  >
                    <ActionIcon
                      variant='subtle'
                      size='xl'
                      color='indigo'
                      onClick={() => setWordRevealed(true)}
                      aria-label='Reveal word'
                    >
                      {wordRevealed ? <IconInfoCircle size={20} /> : <IconEye size={20} />}
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </Stack>
            </Stack>

            <Divider />

            <Stack h='50%' gap='md' p='xl' pos='relative'>
              <Textarea
                placeholder='Write your example sentence here…'
                value={userInput}
                size='md'
                onChange={(e) => setUserInput(e.currentTarget.value)}
                minRows={3}
                maxRows={4}
                autosize
              />

              {feedback?.type === 'success' ? (
                <Button color='indigo' ml='auto' rightSection={<IconArrowRight size={16} />} onClick={goNext}>
                  Next card
                </Button>
              ) : (
                <Group justify='flex-end'>
                  <Tooltip
                    label='The prototype version uses a simplified sentence-checking logic.'
                    withArrow
                    position='bottom'
                    color='dark.5'
                  >
                    <ActionIcon variant='subtle' size='md' color='dark.5' aria-label='Info'>
                      <IconExclamationCircle size={24} />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip
                    openDelay={1500}
                    label='Evaluation focuses on semantic fit, not grammatical perfection.'
                    color='indigo'
                    withArrow
                    position='bottom'
                  >
                    <Button color='indigo' leftSection={<IconCheck size={16} />} onClick={evaluateResponse}>
                      Check
                    </Button>
                  </Tooltip>
                </Group>
              )}

              {feedback && (
                <Alert
                  color={feedback.type === 'success' ? 'green' : feedback.type === 'warning' ? 'yellow' : 'red'}
                  title={
                    feedback.type === 'success'
                      ? 'Nice work!'
                      : feedback.type === 'warning'
                      ? 'Good start'
                      : 'Try again'
                  }
                  icon={feedback.type === 'error' ? <IconAlertCircle size={16} /> : <IconCheck size={16} />}
                  radius='sm'
                >
                  {feedback.message}
                </Alert>
              )}
            </Stack>
          </Stack>
        </Card>
      </Center>
    </AppShell.Main>
  );
};
