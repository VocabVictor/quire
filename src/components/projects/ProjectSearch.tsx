import React from 'react';
import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface ProjectSearchProps {
  onSearch: (query: string) => void;
}

export function ProjectSearch({ onSearch }: ProjectSearchProps) {
  return (
    <Group>
      <TextInput
        placeholder="Search in all projects..."
        leftSection={<IconSearch size={16} />}
        style={{ flex: 1 }}
        onChange={(e) => onSearch(e.currentTarget.value)}
      />
    </Group>
  );
} 