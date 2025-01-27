import { Group } from '@mantine/core';

interface ProjectHeaderProps {
  onNewProject: () => void;
}

export function ProjectHeader({ onNewProject }: ProjectHeaderProps) {
  return (
    <Group justify="flex-end">
      {/* Header content if needed */}
    </Group>
  );
} 