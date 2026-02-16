import type { FC } from 'react';
import { Modal, Stack, Button, Text, Group, ThemeIcon } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

type LayoutWarningModalProps = {
  open: boolean;
  onClose: () => void;
};

export const LayoutWarningModal: FC<LayoutWarningModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      centered
      closeOnClickOutside={false}
      closeOnEscape={false}
      title={
        <Group gap='sm'>
          <ThemeIcon color='yellow' variant='light' radius='xl'>
            <IconAlertTriangle size={16} />
          </ThemeIcon>
          <Text fw={600}>Desktop Only App</Text>
        </Group>
      }
    >
      <Stack>
        <Text>This application is designed for desktop use only.</Text>
        <Text size='sm' c='dimmed'>
          The layout may not look properly on mobile or tablet devices.
        </Text>
        <Button onClick={onClose} mt='md'>
          I understand
        </Button>
      </Stack>
    </Modal>
  );
};
