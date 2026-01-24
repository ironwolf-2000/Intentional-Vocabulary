import type { FC } from 'react';
import { AppShell, Flex, Group, ActionIcon, Menu, Tooltip } from '@mantine/core';
import {
  IconUserCircle,
  IconPlus,
  IconSettings,
  IconChartBar,
  IconSearch,
  IconBook2,
  IconNotes,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import languageIcon from '@/assets/united-kingdom.png';

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <AppShell.Header>
      <Flex justify='space-between' align='center' w='100%' h='100%' px='md'>
        <Group gap='sm'>
          <ActionIcon variant='subtle' size='xl'>
            <img src={languageIcon} width={32} height={32} alt='Current Language' />
          </ActionIcon>

          <Tooltip label='Dictionary' withArrow color='blue.7'>
            <ActionIcon variant='subtle' size='xl' component='a' href='/' aria-label='Dictionary'>
              <IconSearch size={24} />
            </ActionIcon>
          </Tooltip>
        </Group>

        <Group gap='sm'>
          <Tooltip label='Add New Word' withArrow color='blue.7'>
            <ActionIcon variant='subtle' size='xl' aria-label='Add New Word' onClick={() => navigate('/create')}>
              <IconPlus size={24} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label='Word List' withArrow color='blue.7'>
            <ActionIcon variant='subtle' size='xl' aria-label='Word List' onClick={() => navigate('/vocabulary-list')}>
              <IconBook2 size={24} />
            </ActionIcon>
          </Tooltip>

          <Menu position='bottom-end' width={200}>
            <Menu.Target>
              <ActionIcon variant='subtle' size='xl' aria-label='Profile'>
                <IconUserCircle size={24} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconNotes size={16} />} onClick={() => navigate('/user-drafts')}>
                Drafts
              </Menu.Item>
              <Menu.Item leftSection={<IconSettings size={16} />} disabled>
                Settings
              </Menu.Item>
              <Menu.Item leftSection={<IconChartBar size={16} />} disabled>
                Stats
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
    </AppShell.Header>
  );
};
