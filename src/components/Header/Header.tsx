import { type FC } from 'react';
import { AppShell, Flex, Group, ActionIcon, Menu, Tooltip, Text } from '@mantine/core';
import {
  IconUserCircle,
  IconSettings,
  IconChartBar,
  IconBook2,
  IconHome,
  IconWorld,
  IconLogout,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import englishIcon from '@/assets/english.png';
import germanIcon from '@/assets/german.png';
import italianIcon from '@/assets/italian.png';
import spanishIcon from '@/assets/spanish.png';
import { SearchAutocomplete } from '../SearchAutocomplete';

const LANGUAGE_ITEMS = [
  { label: 'English', icon: englishIcon },
  { label: 'Spanish', icon: spanishIcon },
  { label: 'Italian', icon: italianIcon },
  { label: 'German', icon: germanIcon },
];

const PROFILE_ITEMS = [
  { label: 'Stats', icon: IconChartBar },
  { label: 'Settings', icon: IconSettings },
  { label: 'Log out', icon: IconLogout },
];

export const Header: FC = () => {
  const location = useLocation();
  const searchShown = location.pathname.startsWith('/dictionary') || location.pathname.startsWith('/vocabulary-list');

  const renderLanguageItem = (label: string, icon: string) => {
    const active = label === 'English';

    return (
      <Menu.Item h={60} bg={active ? 'blue.0' : undefined} c={active ? 'blue.7' : undefined} fw={active ? 600 : 400}>
        <Group gap='md'>
          <img src={icon} width={28} height={28} alt={label} />
          <Text>{label}</Text>
        </Group>
      </Menu.Item>
    );
  };

  return (
    <AppShell.Header>
      <Flex justify='space-between' align='center' w='100%' h='100%' px='md'>
        <Group gap='md'>
          <Menu position='bottom-end' width={240}>
            <Group gap='sm'>
              <Tooltip label='Home page' withArrow color='blue.7'>
                <ActionIcon component={Link} to='/' variant='subtle' size='xl'>
                  <IconHome size={28} />
                </ActionIcon>
              </Tooltip>
              <Menu.Target>
                <Tooltip label='Practice Language' withArrow color='blue.7'>
                  <ActionIcon variant='subtle' size='xl'>
                    <IconWorld size={28} />
                  </ActionIcon>
                </Tooltip>
              </Menu.Target>
            </Group>

            <Menu.Dropdown>
              {LANGUAGE_ITEMS.map(({ label, icon }) =>
                label === 'English' ? (
                  renderLanguageItem(label, icon)
                ) : (
                  <Tooltip
                    key={label}
                    label='The prototype version only supports English language'
                    color='dark.5'
                    withArrow
                  >
                    {renderLanguageItem(label, icon)}
                  </Tooltip>
                ),
              )}
            </Menu.Dropdown>
          </Menu>
        </Group>

        {searchShown && <SearchAutocomplete w={500} size='md' radius='xl' />}

        <Group gap='sm'>
          <Tooltip label='Saved Vocabulary' withArrow color='blue.7'>
            <ActionIcon
              component={Link}
              to='/vocabulary-list'
              variant='subtle'
              size='xl'
              aria-label='Go to vocabulary list'
            >
              <IconBook2 size={28} />
            </ActionIcon>
          </Tooltip>

          <Menu position='bottom-end' width={200}>
            <Menu.Target>
              <Tooltip label='Profile' withArrow color='blue.7'>
                <ActionIcon variant='subtle' size='xl' aria-label='Profile'>
                  <IconUserCircle size={28} />
                </ActionIcon>
              </Tooltip>
            </Menu.Target>
            <Menu.Dropdown>
              {PROFILE_ITEMS.map(({ label, icon: Icon }) => (
                <Tooltip
                  key={label}
                  label={`The prototype version doesn't have this ${label === 'Log out' ? 'function' : 'page'}`}
                  color='dark.5'
                  withArrow
                >
                  <Menu.Item h={50}>
                    <Group gap='md'>
                      <Icon size={24} />
                      <Text>{label}</Text>
                    </Group>
                  </Menu.Item>
                </Tooltip>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex>
    </AppShell.Header>
  );
};
