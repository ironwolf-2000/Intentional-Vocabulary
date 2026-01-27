import { AppShell, Center, Stack, Alert, Button, Text } from '@mantine/core';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const CompletedReviewsCard: FC = () => {
  return (
    <AppShell.Main>
      <Center h='100%'>
        <Stack w={600} gap='xl'>
          <Alert
            variant='light'
            color='green'
            radius='lg'
            title='All caught up!'
            styles={{
              root: {
                padding: '2rem',
              },
              title: {
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
              },
              message: {
                fontSize: '1.125rem',
              },
            }}
          >
            <Stack gap='xl' align='center'>
              <Text size='lg' c='dark.7'>
                You’ve reviewed every vocabulary card scheduled for today.
              </Text>
              <Button size='lg' radius='md' variant='filled' color='green' w={200} component={Link} to='/'>
                Home page
              </Button>
            </Stack>
          </Alert>
        </Stack>
      </Center>
    </AppShell.Main>
  );
};
