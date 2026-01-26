import { useState, type FC } from 'react';
import {
  Title,
  Text,
  Stack,
  Badge,
  Group,
  Paper,
  AppShell,
  Divider,
  Container,
  Blockquote,
  Tooltip,
  ActionIcon,
  Button,
  Center,
} from '@mantine/core';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DICTIONARY_VOCABULARY_MOCK } from '@/const';
import { VocabFrequency } from '@/components';
import { IconArrowsShuffle, IconInfoCircle, IconBook, IconPencil } from '@tabler/icons-react';
import { getFrequencyName } from '@/helpers';

const getStoredIds = (key: 'readingCards' | 'writingCards'): string[] => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
};

const setStoredIds = (key: 'readingCards' | 'writingCards', ids: string[]) => {
  localStorage.setItem(key, JSON.stringify(ids));
};

export const DictionaryPage: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const word = searchParams.get('q');
  const entry = DICTIONARY_VOCABULARY_MOCK.find((e) => e.word === word);

  const [currentExampleIndex, setCurrentExampleIndex] = useState<Record<number, number | undefined>>({});

  const [addedByDetail, setAddedByDetail] = useState<Record<number, { reading: boolean; writing: boolean }>>(() => {
    const readingIds = new Set(getStoredIds('readingCards'));
    const writingIds = new Set(getStoredIds('writingCards'));

    const initial: Record<number, { reading: boolean; writing: boolean }> = {};

    entry?.details.forEach((detail, index) => {
      initial[index] = {
        reading: readingIds.has(detail.id),
        writing: writingIds.has(detail.id),
      };
    });

    return initial;
  });

  const toggleAdd = (detailIndex: number, type: 'reading' | 'writing') => {
    const detailId = entry!.details[detailIndex].id;
    const storageKey = type === 'reading' ? 'readingCards' : 'writingCards';

    const currentIds = getStoredIds(storageKey);
    const isAlreadyAdded = currentIds.includes(detailId);

    const nextIds = isAlreadyAdded ? currentIds.filter((id) => id !== detailId) : [...currentIds, detailId];

    setStoredIds(storageKey, nextIds);

    setAddedByDetail((prev) => ({
      ...prev,
      [detailIndex]: {
        reading: prev[detailIndex]?.reading ?? false,
        writing: prev[detailIndex]?.writing ?? false,
        [type]: !isAlreadyAdded,
      },
    }));
  };

  if (!entry) {
    return (
      <AppShell.Main>
        <Container size='sm' py='xl'>
          <Center h='100%'>
            <Stack w={400} gap='xl' align='center'>
              <Stack gap='sm' align='center'>
                <Title order={2} ta='center'>
                  No entry found
                </Title>
                <Text c='dimmed' ta='center'>
                  This prototype only includes entries for words from the search suggestions, but "
                  <strong>{word}</strong>" is not one of them.
                </Text>
              </Stack>
              <Button size='md' radius='md' variant='light' onClick={() => navigate('/')}>
                Back to search
              </Button>
            </Stack>
          </Center>
        </Container>
      </AppShell.Main>
    );
  }

  return (
    <AppShell.Main>
      <Container maw={800} size='xl'>
        <Title order={1} mb='md' ta={{ base: 'center', sm: 'left' }}>
          {entry.word}
        </Title>

        <Stack align='center' gap='lg'>
          {entry.details.map((detail, detailIndex) => (
            <Paper key={detailIndex} w='100%' p='lg' withBorder radius='lg' shadow='sm' pos='relative'>
              <Group gap='xs' pos='absolute' top={20} right={20}>
                <Tooltip label={addedByDetail[detailIndex]?.reading ? 'Added to reading' : 'Add to reading'} withArrow>
                  <ActionIcon
                    size='md'
                    variant={addedByDetail[detailIndex]?.reading ? 'filled' : 'subtle'}
                    color='blue'
                    onClick={() => toggleAdd(detailIndex, 'reading')}
                    aria-label='Reading'
                  >
                    <IconBook size={18} />
                  </ActionIcon>
                </Tooltip>

                <Tooltip label={addedByDetail[detailIndex]?.writing ? 'Added to writing' : 'Add to writing'} withArrow>
                  <ActionIcon
                    size='md'
                    variant={addedByDetail[detailIndex]?.writing ? 'filled' : 'subtle'}
                    color='green'
                    onClick={() => toggleAdd(detailIndex, 'writing')}
                    aria-label='Writing'
                  >
                    <IconPencil size={18} />
                  </ActionIcon>
                </Tooltip>
              </Group>

              <Stack gap='md'>
                <Stack gap='xs'>
                  <Text fz='lg' fw={600} pr={80}>
                    {detail.definition}
                  </Text>

                  <Group gap='md' align='center'>
                    <Badge variant='light' color='indigo' size='sm'>
                      {detail.partOfSpeech.value}
                    </Badge>

                    <Group gap='xs' align='baseline'>
                      <VocabFrequency value={detail.frequency.value} />

                      <Tooltip
                        label={`${getFrequencyName(detail.frequency.value)}; ${detail.frequency.description}`}
                        color='gray.7'
                        withArrow
                        position='bottom'
                      >
                        <ActionIcon size='sm' variant='subtle' aria-label='Frequency details' color='dark'>
                          <IconInfoCircle size={18} />
                        </ActionIcon>
                      </Tooltip>
                    </Group>
                  </Group>
                </Stack>

                {detail.examples.length > 0 && (
                  <div>
                    <Divider label='Example' labelPosition='left' c='dimmed' mb='sm' />
                    <Group gap='xs'>
                      <Blockquote color='indigo.2' radius='md' p='sm' fz='xs' style={{ flex: 1 }}>
                        <Text fs='italic' fz='sm'>
                          {detail.examples[currentExampleIndex[detailIndex] ?? 0]}
                        </Text>
                      </Blockquote>

                      <ActionIcon
                        variant='subtle'
                        size='xl'
                        color='indigo.5'
                        onClick={() => {
                          const nextIndex = ((currentExampleIndex[detailIndex] ?? 0) + 1) % detail.examples.length;
                          setCurrentExampleIndex({ ...currentExampleIndex, [detailIndex]: nextIndex });
                        }}
                        aria-label='Random example'
                      >
                        <IconArrowsShuffle size={20} />
                      </ActionIcon>
                    </Group>
                  </div>
                )}
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </AppShell.Main>
  );
};
