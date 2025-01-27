import React from 'react';
import { Stack, Text, Button, ActionIcon, Group, Box } from '@mantine/core';
import { IconFile, IconFolderPlus, IconSearch } from '@tabler/icons-react';

interface FileItem {
  name: string;
  type: string;
  active?: boolean;
}

interface FileTreeProps {
  files: FileItem[];
  onFileSelect?: (file: FileItem) => void;
}

export function FileTree({ files, onFileSelect }: FileTreeProps) {
  return (
    <Box w={250} h="100%" style={{ backgroundColor: '#2A303C', overflowY: 'auto' }}>
      <Stack gap="xs" p="md">
        <Group justify="space-between">
          <Text c="white" fw={500}>Files</Text>
          <Group gap="xs">
            <ActionIcon variant="subtle" color="gray" size="sm">
              <IconFile size={18} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" size="sm">
              <IconFolderPlus size={18} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" size="sm">
              <IconSearch size={18} />
            </ActionIcon>
          </Group>
        </Group>
        
        <Stack gap="xs">
          {files.map(file => (
            <Button
              key={file.name}
              variant="subtle"
              color="gray"
              fullWidth
              justify="start"
              fw={400}
              c={file.active ? 'white' : 'dimmed'}
              leftSection={<IconFile size={16} />}
              onClick={() => onFileSelect?.(file)}
            >
              {file.name}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
} 