import { type FC, useState } from 'react';
import {
  ActionIcon,
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
} from '@mantine/core';
import { IconTrash, IconSearch, IconAlertTriangle } from '@tabler/icons-react';
import { ACTIVE_VOCAB_MOCK, PASSIVE_VOCAB_MOCK } from '@/const';
import { Header, VocabFrequency } from '@/components';
import type { VocabularyItem } from '@/types';

export const VocabularyListPage: FC = () => {
  const [mode, setMode] = useState<'passive' | 'active'>('passive');
  const [search, setSearch] = useState('');
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<VocabularyItem | null>(null);

  const vocab = mode === 'passive' ? PASSIVE_VOCAB_MOCK : ACTIVE_VOCAB_MOCK;
  const filteredVocab = vocab
    .filter((item) => item.word.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const tableColor = mode === 'passive' ? 'blue' : 'green';

  const handleDeleteClick = (item: VocabularyItem) => {
    setItemToDelete(item);
    setDeleteModalOpened(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      alert('Deleting item: ' + itemToDelete?.word);
      setDeleteModalOpened(false);
      setItemToDelete(null);
    }
  };

  return (
    <AppShell padding='md' header={{ height: 60 }}>
      <Header />

      <AppShell.Main>
        <Center h='100%' w='100%'>
          <Stack gap='md' w='100%' style={{ maxWidth: 1200 }}>
            <Flex justify='space-between' align='baseline'>
              <TextInput
                placeholder='Filter vocabulary...'
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                leftSection={<IconSearch size={16} />}
                size='md'
                w={400}
              />

              <SegmentedControl
                value={mode}
                onChange={(value: string) => setMode(value as 'passive' | 'active')}
                data={[
                  { label: 'Passive', value: 'passive' },
                  { label: 'Active', value: 'active' },
                ]}
                color={tableColor}
                size='md'
              />
            </Flex>

            <Paper withBorder radius='md' p='sm'>
              <Table.ScrollContainer h='calc(100vh - 200px)' minWidth={900} w='100%'>
                <Table striped highlightOnHover verticalSpacing='sm' horizontalSpacing='lg'>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th style={{ width: 200 }}>Vocabulary</Table.Th>
                      <Table.Th style={{ width: 240 }}>Frequency</Table.Th>
                      <Table.Th>Definition</Table.Th>
                      <Table.Th style={{ width: 140 }}>Due Date</Table.Th>
                      <Table.Th style={{ width: 60 }}>
                        <span style={{ visibility: 'hidden' }}>Actions</span>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {filteredVocab.map((item) => {
                      return (
                        <Table.Tr key={item.id}>
                          <Table.Td fw={600}>{item.word}</Table.Td>
                          <Table.Td>
                            <VocabFrequency value={item.frequency} />
                          </Table.Td>
                          <Table.Td c='gray.7'>{item.definition}</Table.Td>
                          <Table.Td>
                            {item.dueDate
                              ? new Date(item.dueDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })
                              : '-'}
                          </Table.Td>
                          <Table.Td>
                            <ActionIcon color='dark' variant='subtle' onClick={() => handleDeleteClick(item)}>
                              <IconTrash size={16} />
                            </ActionIcon>
                          </Table.Td>
                        </Table.Tr>
                      );
                    })}
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
                    “{itemToDelete?.word}”
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
    </AppShell>
  );
};
