import { type FC } from 'react';
import { Button, Group, AppShell, Flex, TextInput, Center, ActionIcon } from '@mantine/core';
import { IconPlus, IconList, IconUserCircle } from '@tabler/icons-react';
import languageIcon from '@/assets/united-kingdom.png';

export const IndexPage: FC = () => {
  return (
    <AppShell padding='xl' header={{ height: 60 }}>
      <AppShell.Header>
        <Flex justify='space-between' align='center' w='100%' h='100%' px='md'>
          <img src={languageIcon} width={32} height={32} alt='Language' />
          <Flex gap='md'>
            <ActionIcon variant='subtle' size='lg' aria-label='Vocab list'>
              <IconList />
            </ActionIcon>
            <ActionIcon variant='subtle' size='lg' aria-label='Profile'>
              <IconUserCircle />
            </ActionIcon>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <Center h='100%' w='100%' style={{ minHeight: 'calc(100vh - 60px)' }}>
          <Flex direction='column' align='center' gap='xl' w='100%' style={{ maxWidth: 600 }}>
            {/* Optional title if needed, but Google-style keeps it minimal */}
            {/* <Title ta="center" order={1}>Intentional Vocabulary</Title> */}

            {/* Big search bar */}
            <TextInput
              size='lg'
              placeholder='Search for vocabulary, phrases, idioms...'
              w='100%'
              style={{ maxWidth: 500 }}
              leftSection={<IconList size={20} />}
            />

            {/* Two buttons below */}
            <Group gap='md' justify='center'>
              <Button variant='light' leftSection={<IconPlus size={16} />} color='blue' size='md'>
                Review passive
              </Button>
              <Button variant='light' leftSection={<IconPlus size={16} />} color='green' size='md'>
                Review active
              </Button>
            </Group>
          </Flex>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
};
