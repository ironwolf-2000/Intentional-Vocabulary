import { type FC } from 'react';
import { AppShell, Flex, Group, ActionIcon, Menu, Tooltip, Box } from '@mantine/core';
import { IconUserCircle, IconPlus, IconSettings, IconChartBar, IconBook2, IconNotes } from '@tabler/icons-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import englishIcon from '@/assets/english.png';
import germanIcon from '@/assets/german.png';
import italianIcon from '@/assets/italian.png';
import spanishIcon from '@/assets/spanish.png';
import { SearchAutocomplete } from '../SearchAutocomplete';

const LANGUAGE_ICONS: Record<string, string> = {
  en: englishIcon,
  de: germanIcon,
  it: italianIcon,
  es: spanishIcon,
};

export const Header: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  const currentLanguageIcon = LANGUAGE_ICONS[selectedLanguage as keyof typeof LANGUAGE_ICONS];

  return (
    <AppShell.Header>
      <Flex justify='space-between' align='center' w='100%' h='100%' px='md'>
        <Box w={156}>
          <ActionIcon component={Link} to='/' variant='subtle' size='xl' aria-label='Home'>
            <img src={currentLanguageIcon} width={36} height={36} alt='Current Language' />
          </ActionIcon>
        </Box>

        {location.pathname.startsWith('/dictionary') && <SearchAutocomplete w={500} size='md' radius='xl' />}

        <Group gap='sm'>
          <Tooltip label='Add New Word' withArrow color='blue.7'>
            <ActionIcon component={Link} to='/create' variant='subtle' size='xl' aria-label='Add New Word'>
              <IconPlus size={24} />
            </ActionIcon>
          </Tooltip>

          <Tooltip label='Vocabulary List' withArrow color='blue.7'>
            <ActionIcon
              component={Link}
              to='/vocabulary-list'
              variant='subtle'
              size='xl'
              aria-label='Go to vocabulary list'
            >
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
