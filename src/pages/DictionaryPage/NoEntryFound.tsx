import { AppShell, Container, Center, Stack, Title, Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

type NoEntryFoundProps = {
  word: string | null;
};

export const NoEntryFound: FC<NoEntryFoundProps> = ({ word }) => {
  return (
    <AppShell.Main>
      <Container size='sm' py='xl'>
        <Center h='100%'>
          <Stack w={400} gap='xl' align='center'>
            <Stack gap='sm' align='center'>
              <Title order={2} ta='center'>
                No entry found
              </Title>
              <Text c='dimmed' ta='center'>
                This prototype only includes entries for words from the search suggestions
                {word ? (
                  <>
                    , but "<strong>{word}</strong>" is not one of them.
                  </>
                ) : (
                  '.'
                )}
              </Text>
            </Stack>
            <Button size='lg' radius='md' variant='light' color='blue' w={200} component={Link} to='/'>
              Home page
            </Button>
          </Stack>
        </Center>
      </Container>
    </AppShell.Main>
  );
};
