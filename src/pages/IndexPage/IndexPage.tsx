import { type FC } from 'react';
import { Button, AppShell, Flex, Group, Card, Text, Image, Stack, Grid, Tooltip } from '@mantine/core';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import englishIcon from '@/assets/english.png';
import germanIcon from '@/assets/german.png';
import italianIcon from '@/assets/italian.png';
import spanishIcon from '@/assets/spanish.png';
import { SearchAutocomplete } from '@/components';

type LanguageItem = {
  id: string;
  name: string;
  flag: string;
  passiveDue: number;
  activeDue: number;
};

const LANGUAGES: LanguageItem[] = [
  {
    id: 'en',
    name: 'English',
    flag: englishIcon,
    passiveDue: 16,
    activeDue: 19,
  },
  {
    id: 'de',
    name: 'German',
    flag: germanIcon,
    passiveDue: 8,
    activeDue: 5,
  },
  {
    id: 'it',
    name: 'Italian',
    flag: italianIcon,
    passiveDue: 3,
    activeDue: 7,
  },
  {
    id: 'es',
    name: 'Spanish',
    flag: spanishIcon,
    passiveDue: 22,
    activeDue: 9,
  },
];

export const IndexPage: FC = () => {
  const renderLanguageCard = (lang: LanguageItem, isSelected: boolean) => {
    return (
      <Card
        shadow={isSelected ? 'xl' : 'sm'}
        padding='sm'
        radius='md'
        withBorder
        h={140}
        bg={isSelected ? 'blue.0' : undefined}
        style={{
          borderColor: isSelected ? '#1976d2' : undefined,
          borderWidth: isSelected ? '2px' : '1px',
          transition: 'all 0.3s ease',
          cursor: isSelected ? 'default' : 'pointer',
          opacity: isSelected ? 1 : 0.5,
        }}
      >
        <Stack gap='xs' h='100%' align='center' justify={isSelected ? 'space-between' : 'center'}>
          <Stack gap='xs' align='center'>
            <Image
              src={lang.flag}
              h={36}
              w={36}
              fit='contain'
              alt={lang.name}
              style={{
                filter: isSelected ? 'drop-shadow(0 0 4px rgba(25, 118, 210, 0.5))' : 'none',
              }}
            />
            <Text size='md' fw={700} ta='center'>
              {lang.name}
            </Text>
          </Stack>

          {isSelected && (
            <Group gap='xs' justify='center'>
              <Button leftSection={<IconPlayerPlayFilled size={10} />} radius={6} color='blue.5' size='xs'>
                Passive (16)
              </Button>
              <Button leftSection={<IconPlayerPlayFilled size={10} />} radius={6} color='green.5' size='xs'>
                Active (19)
              </Button>
            </Group>
          )}
        </Stack>
      </Card>
    );
  };

  return (
    <AppShell.Main
      style={{
        minHeight: 'calc(100vh - 124px)',
        display: 'flex',
      }}
    >
      <Flex direction='column' align='center' w='100%' style={{ flex: 1 }}>
        <Flex direction='column' align='center' gap={64} w='100%' h='100%' style={{ maxWidth: 700 }}>
          <Grid gutter='lg' w='100%'>
            {LANGUAGES.map((lang) => {
              const isSelected = lang.id === 'en';

              return (
                <Grid.Col span={6} key={lang.id}>
                  {isSelected ? (
                    renderLanguageCard(lang, isSelected)
                  ) : (
                    <Tooltip
                      label='The prototype version only supports English language'
                      color='dark.4'
                      position='bottom'
                      withArrow
                      openDelay={500}
                    >
                      {renderLanguageCard(lang, isSelected)}
                    </Tooltip>
                  )}
                </Grid.Col>
              );
            })}
          </Grid>
          <SearchAutocomplete w={720} size='lg' radius='lg' />
        </Flex>
      </Flex>
    </AppShell.Main>
  );
};
