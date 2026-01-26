import { type FC } from 'react';
import { AppShell, Flex, Group, Image, ActionIcon, Menu, Tooltip, Text } from '@mantine/core';
import { IconUserCircle, IconSettings, IconChartBar, IconBook2, IconNotes, IconCards } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import englishIcon from '@/assets/english.png';
import germanIcon from '@/assets/german.png';
import italianIcon from '@/assets/italian.png';
import spanishIcon from '@/assets/spanish.png';
import { SearchAutocomplete } from '../SearchAutocomplete';

const LANGUAGE_ITEMS = [
  { label: 'Spanish', icon: spanishIcon },
  { label: 'Italian', icon: italianIcon },
  { label: 'German', icon: germanIcon },
];

const PROFILE_ITEMS = [
  { label: 'Drafts', icon: IconNotes },
  { label: 'Stats', icon: IconChartBar },
  { label: 'Settings', icon: IconSettings },
];

export const Header: FC = () => {
  const location = useLocation();

  return (
    <AppShell.Header>
      <Flex justify='space-between' align='center' w='100%' h='100%' px='md'>
        <Group gap='md'>
          <Menu position='bottom-end' width={240}>
            <Group gap='xs' w={104}>
              <Menu.Target>
                <Tooltip label='Current Language' withArrow color='blue.7'>
                  <ActionIcon variant='subtle' size='xl'>
                    <Image src={englishIcon} fit='contain' w={36} h={36} alt='Current Language' />
                  </ActionIcon>
                </Tooltip>
              </Menu.Target>
              <Tooltip label='Vocabulary Review' withArrow color='blue.7'>
                <ActionIcon component={Link} to='/' variant='subtle' size='xl'>
                  <IconCards size={28} />
                </ActionIcon>
              </Tooltip>
            </Group>

            <Menu.Dropdown>
              {LANGUAGE_ITEMS.map(({ label, icon }) => (
                <Tooltip
                  key={label}
                  label='The prototype version only supports English language'
                  color='dark.5'
                  withArrow
                >
                  <Menu.Item h={60}>
                    <Group gap='md'>
                      <img src={icon} width={28} height={28} alt={label} />
                      <Text>{label}</Text>
                    </Group>
                  </Menu.Item>
                </Tooltip>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>

        {location.pathname.startsWith('/dictionary') && <SearchAutocomplete w={500} size='md' radius='xl' />}

        <Group gap='md'>
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
              <ActionIcon variant='subtle' size='xl' aria-label='Profile'>
                <IconUserCircle size={28} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              {PROFILE_ITEMS.map(({ label, icon: Icon }) => (
                <Tooltip key={label} label="The prototype version doesn't have this page" color='dark.5' withArrow>
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
