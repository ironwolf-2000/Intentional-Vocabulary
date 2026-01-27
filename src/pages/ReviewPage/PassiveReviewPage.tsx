import { type FC, useEffect, useMemo, useState } from 'react';
import {
  Stack,
  Card,
  Text,
  Group,
  Button,
  AppShell,
  Kbd,
  Center,
  Divider,
  Paper,
  Badge,
  Tooltip,
  ActionIcon,
} from '@mantine/core';
import { getDueCards, parseExampleText, setReviewCard } from '@/helpers';
import { CompletedReviewsCard } from '@/components';
import { IconVolume } from '@tabler/icons-react';

export const PassiveReviewPage: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerShown, setAnswerShown] = useState(false);

  const dueCards = useMemo(() => Object.values(getDueCards('passiveReviewCards')), []);
  const card = dueCards[currentIndex];

  const exampleSentence = useMemo(
    // eslint-disable-next-line react-hooks/purity
    () => card?.reviewExamples[Math.floor(Math.random() * card.reviewExamples.length)],
    [card?.reviewExamples],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setAnswerShown(true);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleResponse = (responseType: 'not-at-all' | 'somewhat' | 'completely') => {
    const dueDate = new Date();
    dueDate.setHours(0, 0, 0, 0);

    switch (responseType) {
      case 'not-at-all':
        dueDate.setDate(dueDate.getDate() + 1);
        break;
      case 'somewhat':
        dueDate.setDate(dueDate.getDate() + 7);
        break;
      case 'completely':
        dueDate.setMonth(dueDate.getMonth() + 1);
        break;
    }

    setReviewCard('passiveReviewCards', card.id, dueDate);
    goNext();
  };

  const goNext = () => {
    setAnswerShown(false);

    if (currentIndex < dueCards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (currentIndex === dueCards.length) {
    return <CompletedReviewsCard />;
  }

  return (
    <AppShell.Main>
      <Center h='100%'>
        <Card shadow='xl' radius='lg' withBorder w={720} h={'calc(100vh - 160px)'}>
          <Stack h='100%' gap={0}>
            <Stack h='50%' justify='center' align='center' px='xl' gap='xl'>
              <Text size='xl' fw={600} c='dark.8' ta='center'>
                How well do you understand the highlighted word?
              </Text>

              <Paper
                p='xl'
                radius='lg'
                shadow='sm'
                withBorder
                style={{
                  background: 'var(--mantine-color-blue-0)',
                  backdropFilter: 'blur(20px)',
                  borderColor: 'var(--mantine-color-blue-4)',
                  maxWidth: 600,
                }}
              >
                <Text size='lg' lh={1.6} ta='center' c='dark.9' fz={{ base: 'md', sm: 'lg' }}>
                  {parseExampleText(exampleSentence)}
                </Text>
              </Paper>
            </Stack>

            <Divider px={32} />

            <Stack
              h='50%'
              justify='center'
              align='center'
              px='xl'
              pos='relative'
              gap={0}
              style={{ cursor: answerShown ? 'default' : 'pointer' }}
              onClick={() => !answerShown && setAnswerShown(true)}
            >
              {!answerShown ? (
                <Text size='lg' c='dimmed'>
                  Press <Kbd>Space</Kbd> to reveal the answer
                </Text>
              ) : (
                <>
                  <Group gap={4} mb='md' pos='absolute' top={20} left={20}>
                    <Text fz={24} fw={700} ta={{ base: 'center', sm: 'left' }}>
                      {card.word}
                    </Text>

                    <Tooltip label="Audio isn't available in prototype version" withArrow color='dark'>
                      <ActionIcon variant='subtle' color='dark' size='md' mt={4} aria-label='Audio (coming soon)'>
                        <IconVolume size={24} stroke={1.5} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>

                  <Stack gap='xs' mb={40}>
                    <Group gap='xs'>
                      <Badge variant='light' color='indigo' size='md'>
                        {card.partOfSpeech.value}
                      </Badge>
                      <Text size='lg' ta='center'>
                        {card.definition}
                      </Text>
                    </Group>
                    {card.synonyms?.length ? (
                      <>
                        <Divider label='Synonyms' labelPosition='left' c='dimmed' />
                        <Group gap='xs' wrap='wrap'>
                          {card.synonyms?.map((word, idx) => (
                            <Badge key={`syn-${idx}`} variant='light' color='blue' size='sm' radius='xl'>
                              {word}
                            </Badge>
                          ))}
                        </Group>
                      </>
                    ) : null}
                  </Stack>

                  <Group justify='center' pos='absolute' bottom={20} gap='lg' w='100%'>
                    <Button color='red' variant='outline' size='md' onClick={() => handleResponse('not-at-all')}>
                      <Group gap={6}>
                        <Text span>Not at all</Text>
                      </Group>
                    </Button>

                    <Button color='yellow' variant='outline' size='md' onClick={() => handleResponse('somewhat')}>
                      <Group gap={6}>
                        <Text span>Somewhat</Text>
                      </Group>
                    </Button>

                    <Button color='green' variant='outline' size='md' onClick={() => handleResponse('completely')}>
                      <Group gap={6}>
                        <Text span>Completely</Text>
                      </Group>
                    </Button>
                  </Group>
                </>
              )}
            </Stack>
          </Stack>
        </Card>
      </Center>
    </AppShell.Main>
  );
};
