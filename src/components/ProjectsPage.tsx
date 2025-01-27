import React from 'react';
import { Button, Container, Table, Title, Group, TextInput, ActionIcon, Stack } from '@mantine/core';
import { IconPlus, IconSearch, IconDownload, IconCopy, IconTrash } from '@tabler/icons-react';

interface Project {
  id: string;
  title: string;
  lastModified: string;
  owner: string;
}

interface ProjectsPageProps {
  onNewProject: () => void;
}

export function ProjectsPage({ onNewProject }: ProjectsPageProps) {
  const projects: Project[] = [
    { id: '1', title: 'My First Paper', lastModified: '2 days ago', owner: 'You' },
    { id: '2', title: 'Research Proposal', lastModified: '5 days ago', owner: 'You' },
  ];

  return (
    <Container size="xl" py="xl">
      <Stack gap="lg">
        <Group justify="space-between">
          <Title order={2}>All Projects</Title>
          <Button leftSection={<IconPlus size={14} />} color="green" onClick={onNewProject}>
            New Project
          </Button>
        </Group>

        <Group>
          <TextInput
            placeholder="Search in all projects..."
            leftSection={<IconSearch size={16} />}
            style={{ flex: 1 }}
          />
        </Group>

        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>Owner</Table.Th>
              <Table.Th>Last Modified</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {projects.map((project) => (
              <Table.Tr key={project.id}>
                <Table.Td>{project.title}</Table.Td>
                <Table.Td>{project.owner}</Table.Td>
                <Table.Td>{project.lastModified}</Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <ActionIcon variant="subtle" color="blue" size="sm">
                      <IconDownload size={16} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="blue" size="sm">
                      <IconCopy size={16} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red" size="sm">
                      <IconTrash size={16} />
                    </ActionIcon>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Stack>
    </Container>
  );
} 