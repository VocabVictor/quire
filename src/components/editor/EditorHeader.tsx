import React from 'react';
import { Group, Text, Button, ActionIcon, Menu } from '@mantine/core';
import { 
  IconHome,
  IconEye,
  IconShare,
  IconUpload,
  IconHistory,
  IconLayoutSidebar,
  IconMessage,
  IconLeaf,
} from '@tabler/icons-react';

interface EditorHeaderProps {
  title: string;
  onBack: () => void;
}

export function EditorHeader({ title, onBack }: EditorHeaderProps) {
  return (
    <Group h="100%" px="md" justify="space-between" wrap="nowrap">
      <Group gap="xs">
        <Menu>
          <Menu.Target>
            <Button 
              variant="subtle" 
              leftSection={<IconLeaf size={20} color="#40C057" />}
              fw={500}
            >
              Menu
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>New File</Menu.Item>
            <Menu.Item>Open</Menu.Item>
            <Menu.Item>Save</Menu.Item>
            <Menu.Divider />
            <Menu.Item>Settings</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <ActionIcon variant="subtle" size="md" onClick={onBack}>
          <IconHome size={20} />
        </ActionIcon>
        <Text size="md" style={{ flex: 1, textAlign: 'center' }}>
          {title}
        </Text>
      </Group>

      <Group gap="xs">
        <Button variant="light" leftSection={<IconEye size={16} />}>
          Review
        </Button>
        <Button variant="light" leftSection={<IconShare size={16} />}>
          Share
        </Button>
        <Button variant="light" leftSection={<IconUpload size={16} />}>
          Submit
        </Button>
        <Button variant="light" leftSection={<IconHistory size={16} />}>
          History
        </Button>
        <Menu position="bottom-end">
          <Menu.Target>
            <Button variant="light" leftSection={<IconLayoutSidebar size={16} />}>
              Layout
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Side by Side</Menu.Item>
            <Menu.Item>Editor Only</Menu.Item>
            <Menu.Item>Preview Only</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <ActionIcon variant="light" size="md">
          <IconMessage size={20} />
        </ActionIcon>
      </Group>
    </Group>
  );
} 