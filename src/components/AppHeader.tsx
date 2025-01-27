import React from 'react';
import { Group, Button, Text, Box } from '@mantine/core';

interface AppHeaderProps {
  currentPage: 'projects' | 'editor';
}

export function AppHeader({ currentPage }: AppHeaderProps) {
  return (
    <Box 
      style={{ 
        backgroundColor: '#2D3748',
        color: 'white',
        padding: '0.5rem 1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Group justify="space-between" h={50}>
        <Group>
          <Text size="xl" fw={700} c="white">
            Quire
          </Text>
        </Group>
        <Group>
          <Button variant="subtle" color="gray" c="white">
            Templates
          </Button>
          <Button variant="subtle" color="gray" c="white">
            Help
          </Button>
          <Button variant="filled" color="dark">
            Projects
          </Button>
          <Button variant="subtle" color="gray" c="white">
            Account
          </Button>
        </Group>
      </Group>
    </Box>
  );
} 