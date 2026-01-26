import { Modal, Group, Stack, Divider, Button, Text } from '@mantine/core';
import { IconAlertTriangle, IconTrash } from '@tabler/icons-react';
import type { FC } from 'react';

type DeleteModalProps = {
  open: boolean;
  deleteItemName: string;
  mode: 'reading' | 'writing';
  onClose: () => void;
  onDelete: () => void;
};

export const DeleteModal: FC<DeleteModalProps> = ({ open, deleteItemName, mode, onClose, onDelete }) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      centered
      size='md'
      radius='md'
      withCloseButton={false}
      title={
        <Group gap='xs'>
          <IconAlertTriangle size={18} color='red' />
          <Text fw={600}>Remove from {mode ? mode.charAt(0).toUpperCase() + mode.slice(1) : 'vocabulary'}</Text>
        </Group>
      }
    >
      <Stack gap='sm'>
        <Text size='sm' c='dimmed'>
          Remove{' '}
          <Text span fw={600} c='dark'>
            {deleteItemName}
          </Text>{' '}
          from your {mode} cards? This only affects <em>this specific definition</em> and its learning history.
        </Text>

        <Divider />

        <Group justify='flex-end' gap='sm'>
          <Button variant='subtle' onClick={onClose}>
            Cancel
          </Button>

          <Button color='red' leftSection={<IconTrash size={16} />} onClick={onDelete}>
            Remove
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
