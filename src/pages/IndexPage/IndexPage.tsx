import { type FC } from 'react';
import { Button, AppShell, Group, Card, Text, Image, Stack, Tooltip, Box } from '@mantine/core';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import englishIcon from '@/assets/english.png';
import { SearchAutocomplete } from '@/components';
import { Link } from 'react-router-dom';
import { getDueCards } from '@/helpers';

export const IndexPage: FC = () => {
  const passiveDueCards = getDueCards('passiveReviewCards');
  const activeDueCards = getDueCards('activeReviewCards');

  const passiveCardsCount = Object.keys(passiveDueCards).length;
  const activeCardsCount = Object.keys(activeDueCards).length;

  const hasPassiveCards = passiveCardsCount > 0;
  const hasActiveCards = activeCardsCount > 0;

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
                label={!hasPassiveCards ? 'No cards are due today' : undefined}
                color='blue'
                withArrow
                disabled={hasPassiveCards}
                position='bottom'
              >
                <Box>
                  <Button
                    leftSection={<IconPlayerPlayFilled size={14} />}
                    component={Link}
                    to='/passive-review'
                    radius='md'
                    color='blue'
                    size='md'
                    variant='light'
                    aria-disabled={!hasPassiveCards}
                    styles={{
                      root: !hasPassiveCards
                        ? {
                            opacity: 0.5,
                            cursor: 'default',
                            pointerEvents: 'none',
                          }
                        : undefined,
                    }}
                  >
                    Passive{hasPassiveCards && ` (${passiveCardsCount})`}
                  </Button>
                </Box>
              </Tooltip>

              <Tooltip
                label={!hasActiveCards ? 'No cards are due today' : undefined}
                color='green'
                withArrow
                disabled={hasActiveCards}
                position='bottom'
              >
                <Box>
                  <Button
                    leftSection={<IconPlayerPlayFilled size={14} />}
                    component={Link}
                    to='/active-review'
                    radius='md'
                    color='green'
                    size='md'
                    variant='light'
                    aria-disabled={!hasActiveCards}
                    styles={{
                      root: !hasActiveCards
                        ? {
                            opacity: 0.5,
                            cursor: 'default',
                            pointerEvents: 'none',
                          }
                        : undefined,
                    }}
                  >
                    Active{hasActiveCards && ` (${activeCardsCount})`}
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
