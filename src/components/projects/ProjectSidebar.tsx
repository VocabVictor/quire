import { Stack, Button, Text, Box } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface ProjectSidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function ProjectSidebar({ currentSection, onSectionChange }: ProjectSidebarProps) {
  const sections = [
    { id: 'all', label: 'All Projects' },
    { id: 'your', label: 'Your Projects' },
    { id: 'shared', label: 'Shared with you' },
    { id: 'archived', label: 'Archived Projects' },
    { id: 'trashed', label: 'Trashed Projects' },
  ];

  return (
    <Box w={250} style={{ backgroundColor: '#2A303C', height: 'calc(100vh - 66px)' }}>
      <Stack gap="xs" p="md">
        <Button 
          fullWidth 
          color="green"
          size="md"
          leftSection={<IconPlus size={16} />}
        >
          New Project
        </Button>

        <Stack gap="xs" mt="md">
          {sections.map(section => (
            <Button
              key={section.id}
              variant="subtle"
              color="gray"
              fullWidth
              justify="start"
              fw={400}
              c={currentSection === section.id ? 'white' : 'dimmed'}
              onClick={() => onSectionChange(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </Stack>

        <Text c="dimmed" size="sm" mt="xl" fw={500}>
          ORGANIZE PROJECTS
        </Text>
        <Button
          variant="subtle"
          color="gray"
          fullWidth
          justify="start"
          leftSection={<IconPlus size={16} />}
          fw={400}
          c="dimmed"
        >
          New Tag
        </Button>
      </Stack>
    </Box>
  );
} 