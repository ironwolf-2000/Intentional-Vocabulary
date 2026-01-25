import { type FC, useEffect } from 'react';
import { Accordion, Title, Text, Stack, Badge, Group, Paper, AppShell } from '@mantine/core';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const DictionaryPage: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const word = searchParams.get('q') || 'hello world';

  const definitions = [
    {
      definition: 'used as a greeting or to begin a telephone conversation',
      synonyms: ['hi', 'hey', 'howdy'],
      examples: ['Hello there! How are you today?', 'She said hello as she walked in', 'Hello, this is John speaking.'],
    },
    {
      definition: 'used to express surprise',
      synonyms: ['wow', 'oh', 'surprise'],
      examples: ["Hello! I didn't expect to see you here!", 'Hello? Is that really you after all these years?'],
    },
  ];

  useEffect(() => {
    if (!word) {
      navigate('/');
    }
  }, [word, navigate]);

  return (
    <AppShell.Main>
      <Stack gap='lg'>
        <Title order={1} ml='md'>
          {word}
        </Title>

        <Accordion defaultValue={definitions[0]?.definition.slice(0, 50) || ''} w='100%'>
          {definitions.map((item, index) => (
            <Accordion.Item key={index} value={item.definition.slice(0, 50)}>
              <Accordion.Control>
                <Text fw={500} size='lg'>
                  {item.definition}
                </Text>
                {item.synonyms.length > 0 && (
                  <Group gap='xs' mt={4}>
                    {item.synonyms.map((synonym) => (
                      <Badge key={synonym} variant='light' color='blue' size='sm'>
                        {synonym}
                      </Badge>
                    ))}
                  </Group>
                )}
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap='sm'>
                  {item.examples.map((example, exIndex) => (
                    <Paper key={exIndex} p='md' withBorder bg='gray.0' radius='md'>
                      <Text c='dimmed' fz='sm'>
                        "{example}"
                      </Text>
                    </Paper>
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </AppShell.Main>
  );
};
