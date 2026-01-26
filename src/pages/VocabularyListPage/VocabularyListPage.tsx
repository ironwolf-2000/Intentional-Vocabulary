import { type FC, useState } from 'react';
import {
  Table,
  SegmentedControl,
  TextInput,
  AppShell,
  Center,
  Paper,
  Stack,
  Flex,
  Button,
  Modal,
  Text,
  Divider,
  Group,
  Badge,
} from '@mantine/core';
import { IconTrash, IconSearch, IconAlertTriangle } from '@tabler/icons-react';
import { DICTIONARY_VOCABULARY_MOCK } from '@/const';
import { VocabFrequency } from '@/components';
import type { DictionaryEntryDetails } from '@/types';
import { useNavigate } from 'react-router-dom';

type VocabularyCard = DictionaryEntryDetails & {
  id: string;
  word: string;
};

const getCardsByIds = (ids: string[]): VocabularyCard[] => {
  const idSet = new Set(ids);

  const result: VocabularyCard[] = [];

  DICTIONARY_VOCABULARY_MOCK.forEach((entry) => {
    entry.details.forEach((detail) => {
      if (idSet.has(detail.id)) {
        result.push({ word: entry.word, ...detail });
      }
    });
  });

  return result;
};

export const VocabularyListPage: FC = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState<'reading' | 'writing'>('reading');
  const [search, setSearch] = useState('');
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<VocabularyCard | null>(null);

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

  const cards =
    mode === 'reading' ? getCardsByIds(getStoredIds('readingCards')) : getCardsByIds(getStoredIds('writingCards'));

  const filteredCards = cards.filter((card) => card.word.toLowerCase().includes(search.toLowerCase()));

  const handleDeleteClick = (item: VocabularyCard) => {
    setItemToDelete(item);
    setDeleteModalOpened(true);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;

    const key = mode === 'reading' ? 'readingCards' : 'writingCards';
    const currentIds = getStoredIds(key);
    const nextIds = currentIds.filter((id) => id !== itemToDelete.id);
    setStoredIds(key, nextIds);

    setDeleteModalOpened(false);
    setItemToDelete(null);
  };

  return (
    <AppShell.Main>
      <Center h='100%' w='100%'>
        <Stack gap='md' w='100%' style={{ maxWidth: 1400 }}>
          <Flex justify='space-between' align='baseline'>
            <TextInput
              placeholder={`Filter vocabulary...${cards.length > 0 ? ` (${cards.length} cards)` : ''}`}
              value={search}
              radius='md'
              onChange={(event) => setSearch(event.currentTarget.value)}
              leftSection={<IconSearch size={16} />}
              size='sm'
              w={400}
            />

            <SegmentedControl
              value={mode}
              onChange={(value) => setMode(value as 'reading' | 'writing')}
              data={[
                { label: 'Reading', value: 'reading' },
                { label: 'Writing', value: 'writing' },
              ]}
              size='md'
            />
          </Flex>

          <Paper withBorder radius='md' p='sm'>
            <Table.ScrollContainer h='calc(100vh - 210px)' minWidth={900} w='100%'>
              <Table striped highlightOnHover verticalSpacing='sm' horizontalSpacing='lg'>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th style={{ width: 180 }}>Vocabulary</Table.Th>
                    <Table.Th style={{ width: 160 }}>Frequency</Table.Th>
                    <Table.Th>Definition</Table.Th>
                    <Table.Th>Example</Table.Th>
                    <Table.Th style={{ width: 60 }}>
                      <span style={{ visibility: 'hidden' }}>Actions</span>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                  {filteredCards.map((item) => (
                    <Table.Tr
                      key={item.id}
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate(`/dictionary?q=${item.word}`)}
                    >
                      <Table.Td>
                        <Group gap='xs' align='center'>
                          <Text fw={600}>{item.word}</Text>
                          <Badge variant='light' color='indigo' size='xs'>
                            {item.partOfSpeech.value}
                          </Badge>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <VocabFrequency value={item.frequency.value} />
                      </Table.Td>
                      <Table.Td c='gray.7'>{item.definition}</Table.Td>
                      <Table.Td c='dimmed'>{item.examples[0]}</Table.Td>
                      <Table.Td>
                        <Button
                          variant='subtle'
                          color='red'
                          size='sm'
                          leftSection={<IconTrash size={14} />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(item);
                          }}
                        >
                          Remove
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </Paper>

          <Modal
            opened={deleteModalOpened}
            onClose={() => setDeleteModalOpened(false)}
            centered
            size='sm'
            radius='md'
            withCloseButton={false}
            title={
              <Group gap='xs'>
                <IconAlertTriangle size={18} color='red' />
                <Text fw={600}>Delete vocabulary</Text>
              </Group>
            }
          >
            <Stack gap='sm'>
              <Text size='sm' c='dimmed'>
                Are you sure you want to delete{' '}
                <Text span fw={600} c='dark'>
                  {itemToDelete?.word}
                </Text>
                ? This action cannot be undone.
              </Text>

              <Divider />

              <Group justify='flex-end' gap='sm'>
                <Button variant='subtle' onClick={() => setDeleteModalOpened(false)}>
                  Cancel
                </Button>

                <Button color='red' leftSection={<IconTrash size={16} />} onClick={confirmDelete}>
                  Delete
                </Button>
              </Group>
            </Stack>
          </Modal>
        </Stack>
      </Center>
    </AppShell.Main>
  );
};
