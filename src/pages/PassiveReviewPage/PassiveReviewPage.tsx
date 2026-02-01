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
  Badge,
  Tooltip,
  ActionIcon,
  Blockquote,
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
            <Stack h='50%' justify='center' gap='xl' px='xl'>
              <Text size='xl' fw={600} c='dark.8'>
                Do you understand the highlighted phrase?
              </Text>

              <Blockquote color='indigo.2' radius='md' p='lg' fz='xs'>
                <Text size='lg' lh={1.6} fs='italic' ta='left' c='dark.9'>
                  {parseExampleText(exampleSentence)}
                </Text>
              </Blockquote>
            </Stack>

            <Divider px={32} />

            <Stack
              h='50%'
              px='xl'
              gap='lg'
              py='lg'
              pos='relative'
              style={{ cursor: answerShown ? 'default' : 'pointer' }}
              onClick={() => !answerShown && setAnswerShown(true)}
            >
              {!answerShown ? (
                <Stack h='100%' justify='center'>
                  <Text size='lg' c='dimmed' ta='center'>
                    Press <Kbd>Space</Kbd> to reveal the answer
                  </Text>
                </Stack>
              ) : (
                <Stack gap='sm' w='100%'>
                  <Group gap={4} align='center'>
                    <Text fz={28} fw={600} mb={4}>
                      {card.word}
                    </Text>
                    <Tooltip label="Audio isn't available in prototype version" withArrow color='dark'>
                      <ActionIcon variant='subtle' color='dark' size='lg' aria-label='Audio'>
                        <IconVolume size={24} stroke={1.5} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>

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

                  <Group justify='center' gap='md' pos='absolute' bottom={12} w='calc(100% - 64px)'>
                    <Tooltip
                      openDelay={1500}
                      withArrow
                      position='bottom'
                      label='I would not recognize this in new contexts'
                      color='red'
                    >
                      <Button color='red' variant='outline' size='md' onClick={() => handleResponse('not-at-all')}>
                        Not at all
                      </Button>
                    </Tooltip>
                    <Tooltip
                      openDelay={1500}
                      withArrow
                      position='bottom'
                      label='I recognize it here, but not reliably'
                      color='yellow'
                    >
                      <Button color='yellow' variant='outline' size='md' onClick={() => handleResponse('somewhat')}>
                        Somewhat
                      </Button>
                    </Tooltip>
                    <Tooltip
                      openDelay={1500}
                      withArrow
                      position='bottom'
                      label="I'm confident across contexts"
                      color='green'
                    >
                      <Button color='green' variant='outline' size='md' onClick={() => handleResponse('completely')}>
                        Completely
                      </Button>
                    </Tooltip>
                  </Group>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Card>
      </Center>
    </AppShell.Main>
  );
};
