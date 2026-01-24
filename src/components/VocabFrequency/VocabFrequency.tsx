import { type FC } from 'react';
import { Group, Progress } from '@mantine/core';

type VocabFrequencyProps = {
  value: number;
};

const progressProps = {
  size: 'xs',
  color: 'gray.7',
  transitionDuration: 0,
} as const;

export const VocabFrequency: FC<VocabFrequencyProps> = ({ value }) => {
  return (
    <Group grow gap={5} mt='xs' w={100}>
      <Progress {...progressProps} value={100} />
      <Progress {...progressProps} value={value < 2 ? 0 : 100} />
      <Progress {...progressProps} value={value < 3 ? 0 : 100} />
      <Progress {...progressProps} value={value < 4 ? 0 : 100} />
      <Progress {...progressProps} value={value < 5 ? 0 : 100} />
    </Group>
  );
};
