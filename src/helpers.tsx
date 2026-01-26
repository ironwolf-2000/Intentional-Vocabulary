import { Text } from '@mantine/core';

export const parseExampleText = (text: string): React.ReactNode => {
  const wordRegex = /<word>(.*?)<\/word>/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = wordRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <Text key={parts.length} span fw={700} style={{ fontSize: 'inherit' }}>
        {match[1]}
      </Text>,
    );

    lastIndex = wordRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};
