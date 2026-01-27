import { useEffect, useState, type FC } from 'react';
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
import { notifications } from '@mantine/notifications';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { DICTIONARY_VOCABULARY_MOCK } from '@/const';
import { DeleteModal } from '@/components';
import { IconArrowsShuffle, IconBook, IconPencil, IconVolume } from '@tabler/icons-react';
import type { DictionaryEntryDetails, PartOfSpeech } from '@/types';
import { parseExampleText, getReviewCards, setReviewCard, deleteReviewCard } from '@/helpers';

export const DictionaryPage: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const word = searchParams.get('q');
  const entry = DICTIONARY_VOCABULARY_MOCK.find((e) => e.word === word);

  const [currentExampleIndex, setCurrentExampleIndex] = useState<Record<number, number | undefined>>({});
  const [deleteModalData, setDeleteModalData] = useState<{ detailIndex: number; type: 'passive' | 'active' } | null>(
    null,
  );

  const [addedByDetail, setAddedByDetail] = useState<Record<number, { passive: boolean; active: boolean }>>({});

  useEffect(() => {
    if (!entry) return;

    const passiveReviewCards = getReviewCards('passiveReviewCards');
    const activeReviewCards = getReviewCards('activeReviewCards');
    const initial: Record<number, { passive: boolean; active: boolean }> = {};

    entry.details.forEach((detail, index) => {
      initial[index] = {
        passive: detail.id in passiveReviewCards,
        active: detail.id in activeReviewCards,
      };
    });

    queueMicrotask(() => setAddedByDetail(initial));
  }, [entry]);

  const toggleAdd = (detailIndex: number, type: 'passive' | 'active') => {
    const detailId = entry!.details[detailIndex].id;
    const storageKey = type === 'passive' ? 'passiveReviewCards' : 'activeReviewCards';
    const reviewCards = getReviewCards(storageKey);
    const isAlreadyAdded = detailId in reviewCards;

    if (isAlreadyAdded) {
      setDeleteModalData({ detailIndex, type });
    } else {
      const dueDate = new Date();
      dueDate.setHours(0, 0, 0, 0);

      setReviewCard(storageKey, detailId, dueDate);
      setAddedByDetail((prev) => ({
        ...prev,
        [detailIndex]: {
          passive: prev[detailIndex]?.passive ?? false,
          active: prev[detailIndex]?.active ?? false,
          [type]: !isAlreadyAdded,
        },
      }));

      if (entry) {
        notifications.show({
          title: (
            <>
              <strong>"{entry.word}"</strong> {isAlreadyAdded ? 'removed from' : 'added to'} {type} practice.
            </>
          ),
          message: '',
          radius: 'sm',
          color: isAlreadyAdded ? 'red' : 'green',
          position: 'bottom-center',
          withCloseButton: false,
          autoClose: 3000,
        });
      }
    }
  };

  const confirmDelete = () => {
    if (!deleteModalData) return;

    const { detailIndex, type } = deleteModalData;
    const detailId = entry!.details[detailIndex].id;
    const storageKey = type === 'passive' ? 'passiveReviewCards' : 'activeReviewCards';

    deleteReviewCard(storageKey, detailId);
    setAddedByDetail((prev) => ({
      ...prev,
      [detailIndex]: {
        passive: prev[detailIndex]?.passive ?? false,
        active: prev[detailIndex]?.active ?? false,
        [type]: false,
      },
    }));

    setDeleteModalData(null);

    if (entry) {
      notifications.show({
        title: (
          <>
            <strong>"{entry.word}"</strong> removed from {deleteModalData.type} practice.
          </>
        ),
        message: '',
        radius: 'sm',
        color: 'red',
        position: 'bottom-center',
        withCloseButton: false,
        autoClose: 3000,
      });
    }
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
              <Button size='lg' radius='md' variant='light' color='blue' w={200} component={Link} to='/'>
                Home page
              </Button>
            </Stack>
          </Center>
        </Container>
      </AppShell.Main>
    );
  }

  const renderBadge = (partOfSpeech: PartOfSpeech) => {
    const { value, description } = partOfSpeech;

    return (
      <Badge variant='light' color='indigo' size='md' style={{ cursor: description ? 'pointer' : 'default' }}>
        {value}
      </Badge>
    );
  };

  const renderDetail = (detail: DictionaryEntryDetails, index: number) => {
    const { id, partOfSpeech, definition, synonyms, antonyms, examples } = detail;

    return (
      <Paper key={id} w='100%' p='lg' withBorder radius='lg' shadow='sm' pos='relative'>
        <Group gap='xs' pos='absolute' top={20} right={20}>
          <Tooltip
            label={addedByDetail[index]?.passive ? 'Remove from passive practice' : 'Add to passive practice'}
            withArrow
            color='indigo'
          >
            <ActionIcon
              size='md'
              variant={addedByDetail[index]?.passive ? 'filled' : 'subtle'}
              color='indigo'
              onClick={() => toggleAdd(index, 'passive')}
              aria-label='Passive'
            >
              <IconBook size={18} />
            </ActionIcon>
          </Tooltip>

          <Tooltip
            label={addedByDetail[index]?.active ? 'Remove from active practice' : 'Add to active practice'}
            withArrow
            color='indigo'
          >
            <ActionIcon
              size='md'
              variant={addedByDetail[index]?.active ? 'filled' : 'subtle'}
              color='indigo'
              onClick={() => toggleAdd(index, 'active')}
              aria-label='Active'
            >
              <IconPencil size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>

        <Stack gap='md'>
          <Stack gap='sm'>
            <Group gap='xs'>
              {partOfSpeech.description ? (
                <Tooltip label={partOfSpeech.description} withArrow position='bottom' color='indigo'>
                  {renderBadge(partOfSpeech)}
                </Tooltip>
              ) : (
                renderBadge(partOfSpeech)
              )}
              <Text fz='lg' fw={600} pr={80} style={{ flex: 1 }}>
                {definition}
              </Text>
            </Group>

            {(synonyms?.length || antonyms?.length) && (
              <div>
                <Divider label='Synonyms & Antonyms' labelPosition='left' c='dimmed' mb='sm' />
                <Group gap='xs' wrap='wrap'>
                  {synonyms?.map((word, idx) => (
                    <Badge
                      key={`syn-${idx}`}
                      variant='light'
                      color='blue'
                      size='sm'
                      radius='xl'
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate(`/dictionary?q=${word}`)}
                    >
                      {word}
                    </Badge>
                  ))}

                  {antonyms?.map((word, idx) => (
                    <Badge
                      key={`ant-${idx}`}
                      variant='light'
                      color='orange'
                      size='sm'
                      radius='xl'
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate(`/dictionary?q=${word}`)}
                    >
                      {word}
                    </Badge>
                  ))}
                </Group>
              </div>
            )}
          </Stack>

          {examples.length > 0 && (
            <div>
              <Divider label='Example' labelPosition='left' c='dimmed' mb='sm' />
              <Group gap='xs'>
                <Blockquote color='indigo.2' radius='md' p='sm' fz='xs' style={{ flex: 1 }}>
                  <Text fs='italic' fz='sm'>
                    {parseExampleText(examples[currentExampleIndex[index] ?? 0])}
                  </Text>
                </Blockquote>

                <Tooltip label='Random example' withArrow color='indigo'>
                  <ActionIcon
                    variant='subtle'
                    size='xl'
                    color='indigo'
                    onClick={() => {
                      const nextIndex = ((currentExampleIndex[index] ?? 0) + 1) % examples.length;
                      setCurrentExampleIndex({ ...currentExampleIndex, [index]: nextIndex });
                    }}
                    aria-label='Random example'
                  >
                    <IconArrowsShuffle size={20} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </div>
          )}
        </Stack>
      </Paper>
    );
  };

  return (
    <AppShell.Main>
      <Container maw={800} size='xl'>
        <Group gap='xs' mb='md'>
          <Title order={1} ta={{ base: 'center', sm: 'left' }}>
            {entry.word}
          </Title>

          <Tooltip label="Audio isn't available in prototype version" withArrow color='dark'>
            <ActionIcon variant='subtle' color='dark' size='lg' mt={4} aria-label='Audio (coming soon)'>
              <IconVolume size={28} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>

        <Stack align='center' gap='lg'>
          {entry.details.map((detail, detailIndex) => renderDetail(detail, detailIndex))}
        </Stack>
      </Container>
      <DeleteModal
        open={deleteModalData !== null}
        deleteItemName={entry.word}
        mode={deleteModalData?.type ?? 'passive'}
        onClose={() => setDeleteModalData(null)}
        onDelete={confirmDelete}
      />
    </AppShell.Main>
  );
};
