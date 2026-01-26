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
  Text,
  Group,
  Badge,
  ActionIcon,
} from '@mantine/core';
import { IconTrash, IconSearch } from '@tabler/icons-react';
import { DICTIONARY_VOCABULARY_MOCK } from '@/const';
import { DeleteModal } from '@/components';
import type { DictionaryEntryDetails } from '@/types';
import { useNavigate } from 'react-router-dom';
import { parseExampleText } from '@/helpers';

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

  const confirmDelete = () => {
    if (!itemToDelete) {
      return;
    }

    const key = mode === 'reading' ? 'readingCards' : 'writingCards';
    const currentIds = getStoredIds(key);
    const nextIds = currentIds.filter((id) => id !== itemToDelete.id);
    setStoredIds(key, nextIds);
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
              color={mode === 'reading' ? 'blue' : 'green'}
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
                    <Table.Th style={{ width: 240 }}>Vocabulary</Table.Th>
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
                      <Table.Td c='gray.7'>{item.definition}</Table.Td>
                      <Table.Td c='dimmed'>{parseExampleText(item.examples[0])}</Table.Td>
                      <Table.Td>
                        <ActionIcon
                          variant='subtle'
                          color='red'
                          size='lg'
                          onClick={(e) => {
                            e.stopPropagation();
                            setItemToDelete(item);
                          }}
                        >
                          <IconTrash size={16} />
                        </ActionIcon>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </Paper>
        </Stack>
      </Center>
      <DeleteModal
        open={itemToDelete !== null}
        deleteItemName={itemToDelete?.word ?? ''}
        mode={mode}
        onClose={() => setItemToDelete(null)}
        onDelete={confirmDelete}
      />
    </AppShell.Main>
  );
};
