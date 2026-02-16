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
  Tooltip,
} from '@mantine/core';
import { IconTrash, IconSearch, IconInfoCircle } from '@tabler/icons-react';
import { DeleteVocabularyModal } from '@/components';
import { deleteReviewCard, getReviewCards, parseExampleText } from '@/helpers';
import type { VocabularyCard } from '@/types';
import { LocalStorageKeys } from '@/const';

const getDueDateColor = (dueDate: string): string => {
  const date = new Date(dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffTime = date.getTime() - today.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  if (diffDays < 0) return 'red';
  if (diffDays == 0) return 'yellow';

  return 'cyan';
};

export const VocabularyListPage: FC = () => {
  const [mode, setMode] = useState<'passive' | 'active'>('passive');
  const [search, setSearch] = useState('');
  const [itemToDelete, setItemToDelete] = useState<VocabularyCard | null>(null);

  const cards = Object.values(
    getReviewCards(mode === 'passive' ? LocalStorageKeys.PASSIVE_REVIEW_CARDS : LocalStorageKeys.ACTIVE_REVIEW_CARDS),
  );
  const filteredCards = cards.filter((card) => card.word.toLowerCase().includes(search.toLowerCase()));

  const confirmDelete = () => {
    if (!itemToDelete) {
      return;
    }

    deleteReviewCard(
      mode === 'passive' ? LocalStorageKeys.PASSIVE_REVIEW_CARDS : LocalStorageKeys.ACTIVE_REVIEW_CARDS,
      itemToDelete.id,
    );
    setItemToDelete(null);
  };

  return (
    <AppShell.Main>
      <Center h='100%' w='100%'>
        <Stack gap='xs' w='100%' style={{ maxWidth: 1400 }}>
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
              onChange={(value) => setMode(value as 'passive' | 'active')}
              color={mode === 'passive' ? 'blue' : 'green'}
              data={[
                { label: 'Passive', value: 'passive' },
                { label: 'Active', value: 'active' },
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
                    <Table.Th style={{ width: 160 }}>
                      <Group gap={4} align='center'>
                        <Text fw={700} fz={14}>
                          Due Date
                        </Text>
                        <Tooltip
                          label='Due dates are approximate in this prototype'
                          withArrow
                          color='dark.5'
                          position='top'
                        >
                          <ActionIcon variant='subtle' size='xs' color='dark.5' aria-label='Info'>
                            <IconInfoCircle size={16} />
                          </ActionIcon>
                        </Tooltip>
                      </Group>
                    </Table.Th>

                    <Table.Th style={{ width: 60 }}>
                      <span style={{ visibility: 'hidden' }}>Actions</span>
                    </Table.Th>
                  </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                  {filteredCards.map((item) => (
                    <Table.Tr key={item.id}>
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
                        <Badge variant='light' color={getDueDateColor(item.dueDate)} size='md'>
                          {new Date(item.dueDate).toLocaleDateString()}
                        </Badge>
                      </Table.Td>
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
      <DeleteVocabularyModal
        open={itemToDelete !== null}
        deleteItemName={itemToDelete?.word ?? ''}
        mode={mode}
        onClose={() => setItemToDelete(null)}
        onDelete={confirmDelete}
      />
    </AppShell.Main>
  );
};
