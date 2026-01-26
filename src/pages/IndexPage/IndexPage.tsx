import { type FC } from 'react';
import { Button, AppShell, Group, Card, Text, Image, Stack, Tooltip, Box } from '@mantine/core';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import englishIcon from '@/assets/english.png';
import { SearchAutocomplete } from '@/components';

const getStoredCount = (key: string): number => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
};

export const IndexPage: FC = () => {
  const readingCount = getStoredCount('readingCards');
  const writingCount = getStoredCount('writingCards');

  const hasReading = readingCount > 0;
  const hasWriting = writingCount > 0;

  return (
    <AppShell.Main>
      <Stack justify='center' align='center' w='100%' h='calc(100vh - 340px)' gap={64}>
        <Card
          shadow='sm'
          padding='xl'
          radius='lg'
          withBorder
          style={{
            maxWidth: 480,
            width: '100%',
          }}
        >
          <Stack gap='lg' h='100%' align='center' justify='center'>
            <Stack gap='sm' align='center'>
              <Image
                src={englishIcon}
                w={64}
                h={64}
                fit='contain'
                alt='English'
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
              />
              <Text size='xl' fw={700} ta='center'>
                English
              </Text>
            </Stack>

            <Group gap='lg' justify='center'>
              <Tooltip
                label={!hasReading ? 'No reading cards are due' : undefined}
                color='blue'
                withArrow
                disabled={hasReading}
                position='bottom'
              >
                <Box>
                  <Button
                    leftSection={<IconPlayerPlayFilled size={14} />}
                    radius='md'
                    color='blue'
                    size='md'
                    variant='light'
                    aria-disabled={!hasReading}
                    styles={{
                      root: !hasReading
                        ? {
                            opacity: 0.5,
                            cursor: 'default',
                            pointerEvents: 'none',
                          }
                        : undefined,
                    }}
                  >
                    Reading{hasReading && ` (${readingCount})`}
                  </Button>
                </Box>
              </Tooltip>

              <Tooltip
                label={!hasWriting ? 'No writing cards are due' : undefined}
                color='green'
                withArrow
                disabled={hasWriting}
                position='bottom'
              >
                <Box>
                  <Button
                    leftSection={<IconPlayerPlayFilled size={14} />}
                    radius='md'
                    color='green'
                    size='md'
                    variant='light'
                    aria-disabled={!hasWriting}
                    styles={{
                      root: !hasWriting
                        ? {
                            opacity: 0.5,
                            cursor: 'default',
                            pointerEvents: 'none',
                          }
                        : undefined,
                    }}
                  >
                    Writing{hasWriting && ` (${writingCount})`}
                  </Button>
                </Box>
              </Tooltip>
            </Group>
          </Stack>
        </Card>

        <SearchAutocomplete w={720} size='lg' radius='lg' />
      </Stack>
    </AppShell.Main>
  );
};
