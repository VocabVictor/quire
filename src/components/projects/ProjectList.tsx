import React, { useState } from 'react';
import { Table, Checkbox, Group, Button, Box } from '@mantine/core';
import { IconFileText, IconDownload, IconCopy, IconMessage, IconTrash } from '@tabler/icons-react';

export interface Project {
  id: string;
  title: string;
  lastModified: string;
  owner: string;
}

interface ProjectListProps {
  projects: Project[];
  onDownload: (id: string) => void;
  onCopy: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function ProjectList({ projects, onDownload, onCopy, onDelete, onEdit }: ProjectListProps) {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const isAllSelected = selectedProjects.length === projects.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(projects.map(project => project.id));
    }
  };

  const handleSelectProject = (id: string) => {
    if (selectedProjects.includes(id)) {
      setSelectedProjects(selectedProjects.filter(projectId => projectId !== id));
    } else {
      setSelectedProjects([...selectedProjects, id]);
    }
  };

  return (
    <Box>
      {isAllSelected && (
        <Group 
          style={{ 
            borderBottom: '1px solid #E9ECEF',
            padding: '12px 0',
            marginBottom: '12px'
          }}
        >
          <Button.Group>
            <Button variant="default" leftSection={<IconFileText size={16} />}>
              Download
            </Button>
            <Button variant="default" leftSection={<IconCopy size={16} />}>
              Share
            </Button>
            <Button variant="default" color="red" leftSection={<IconTrash size={16} />}>
              Delete
            </Button>
          </Button.Group>
        </Group>
      )}
      <Table style={{ backgroundColor: 'white' }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: '40px' }}>
              <Checkbox 
                checked={isAllSelected}
                onChange={handleSelectAll}
                aria-label="Select all projects"
              />
            </Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Last Modified</Table.Th>
            <Table.Th>Owner</Table.Th>
            <Table.Th style={{ width: '180px' }}>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {projects.map((project) => (
            <Table.Tr 
              key={project.id}
              style={{
                backgroundColor: selectedProjects.includes(project.id) ? '#E8F5E9' : 'white'
              }}
            >
              <Table.Td>
                <Checkbox
                  checked={selectedProjects.includes(project.id)}
                  onChange={() => handleSelectProject(project.id)}
                  aria-label={`Select ${project.title}`}
                />
              </Table.Td>
              <Table.Td>
                <Group gap="sm">
                  <IconFileText size={16} />
                  {project.title}
                </Group>
              </Table.Td>
              <Table.Td>{project.lastModified}</Table.Td>
              <Table.Td>{project.owner}</Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <Button 
                    variant="subtle" 
                    size="sm" 
                    p={0} 
                    onClick={() => onEdit(project.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <IconFileText size={16} />
                  </Button>
                  <Button 
                    variant="subtle" 
                    size="sm" 
                    p={0} 
                    onClick={() => onDownload(project.id)}
                  >
                    <IconDownload size={16} />
                  </Button>
                  <Button 
                    variant="subtle" 
                    size="sm" 
                    p={0} 
                    onClick={() => onCopy(project.id)}
                  >
                    <IconCopy size={16} />
                  </Button>
                  <Button 
                    variant="subtle" 
                    size="sm" 
                    p={0}
                  >
                    <IconMessage size={16} />
                  </Button>
                  <Button 
                    variant="subtle" 
                    size="sm" 
                    p={0} 
                    color="red"
                    onClick={() => onDelete(project.id)}
                  >
                    <IconTrash size={16} />
                  </Button>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  );
} 