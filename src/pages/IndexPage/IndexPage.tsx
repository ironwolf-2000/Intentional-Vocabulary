import { type FC } from 'react';
import { Button, Group, AppShell, Flex, TextInput, ActionIcon, Title, Center, Indicator } from '@mantine/core';
import { IconSearch, IconPlayerPlayFilled, IconBook2, IconUserCircle } from '@tabler/icons-react'; // Updated imports
import languageIcon from '@/assets/united-kingdom.png';

export const IndexPage: FC = () => {
  return (
    <AppShell padding='xl' header={{ height: 60 }}>
      <AppShell.Header>
        <Flex justify='space-between' align='center' w='100%' h='100%' px='md'>
          <img src={languageIcon} width={32} height={32} alt='Language' />
          <Group gap='sm'>
            <ActionIcon variant='subtle' size='xl' aria-label='Vocab list'>
              <IconBook2 />
            </ActionIcon>
            <ActionIcon variant='subtle' size='xl' aria-label='Profile'>
              <IconUserCircle />
            </ActionIcon>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <Center h='100%' w='100%' style={{ minHeight: 'calc(100vh - 240px)' }}>
          <Flex direction='column' align='center' gap='xl' w='100%' style={{ maxWidth: 800, height: '100%' }}>
            <Title ta='center' order={1} c='blue.9' size={44} fw={800} tt='capitalize'>
              Intentional Vocabulary
            </Title>

            <TextInput
              size='lg'
              placeholder='Search for vocabulary, phrases, idioms...'
              w='100%'
              style={{ maxWidth: 600 }}
              leftSection={<IconSearch size={20} />}
            />

            {/* Push buttons to bottom */}
            <Flex direction='column' justify='end' flex={1} w='100%' style={{ marginTop: 20 }}>
              <Group gap='xl' justify='center'>
                <Indicator inline label='16' size={18} color='blue' position='top-end' offset={8}>
                  <Button
                    variant='light'
                    leftSection={<IconPlayerPlayFilled size={16} />}
                    radius={8}
                    color='blue'
                    size='lg'
                  >
                    Review passive
                  </Button>
                </Indicator>
                <Indicator inline label='23' size={18} color='green' position='top-end' offset={8}>
                  <Button
                    variant='light'
                    leftSection={<IconPlayerPlayFilled size={16} />}
                    radius={8}
                    color='green'
                    size='lg'
                  >
                    Review active
                  </Button>
                </Indicator>
              </Group>
            </Flex>
          </Flex>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
};
