import React, { useState } from 'react';
import { Group, Box, Title } from '@mantine/core';
import { ProjectHeader } from './ProjectHeader';
import { ProjectSearch } from './ProjectSearch';
import { ProjectList, Project } from './ProjectList';
import { ProjectSidebar } from './ProjectSidebar';
import { save } from '@tauri-apps/plugin-dialog';
import { writeFile } from '@tauri-apps/plugin-fs';

interface ProjectsPageProps {
  onNewProject: () => void;
}

const SECTION_TITLES: Record<string, string> = {
  all: 'All Projects',
  your: 'Your Projects',
  shared: 'Shared with you',
  archived: 'Archived Projects',
  trashed: 'Trashed Projects'
};

export function ProjectsPage({ onNewProject }: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSection, setCurrentSection] = useState('all');
  const [projects] = useState<Project[]>([
    { id: '1', title: 'My First Paper', lastModified: '2 days ago', owner: 'You' },
    { id: '2', title: 'Research Proposal', lastModified: '5 days ago', owner: 'You' },
    { id: '3', title: 'Team Project', lastModified: '1 week ago', owner: 'John Doe' },
    { id: '4', title: 'Archived Report', lastModified: '1 month ago', owner: 'You' },
    { id: '5', title: 'Old Draft', lastModified: '2 months ago', owner: 'You' },
  ]);

  const getFilteredProjects = () => {
    let filtered = projects;
    
    // First apply section filter
    switch (currentSection) {
      case 'your':
        filtered = filtered.filter(p => p.owner === 'You');
        break;
      case 'shared':
        filtered = filtered.filter(p => p.owner !== 'You');
        break;
      case 'archived':
        filtered = filtered.filter(p => p.title.includes('Archived'));
        break;
      case 'trashed':
        filtered = filtered.filter(p => p.title.includes('Old'));
        break;
      // 'all' shows everything
      default:
        break;
    }

    // Then apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const handleDownload = async (id: string) => {
    try {
      // 找到对应的项目
      const project = projects.find(p => p.id === id);
      if (!project) return;

      // 打开保存文件对话框
      const filePath = await save({
        filters: [{
          name: 'PDF Document',
          extensions: ['pdf']
        }],
        defaultPath: project.title + '.pdf'
      });

      if (filePath) {
        // 创建一个简单的 PDF 文件内容（仅用于演示）
        const pdfContent = new Uint8Array([
          0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34, 0x0A,  // %PDF-1.4
          0x25, 0xE2, 0xE3, 0xCF, 0xD3, 0x0A,                    // Binary comment
          // ... 更多 PDF 内容 ...
          0x25, 0x25, 0x45, 0x4F, 0x46                           // %%EOF
        ]);
        
        // 保存文件
        await writeFile(filePath, pdfContent);
      }
    } catch (error) {
      console.error('Failed to download file:', error);
    }
  };

  const handleCopy = (id: string) => {
    console.log('Copy project:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete project:', id);
  };

  const handleEdit = (id: string) => {
    onNewProject();
  };

  const filteredProjects = getFilteredProjects();

  return (
    <Group align="flex-start" gap={0} h="calc(100vh - 66px)">
      <ProjectSidebar 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      <Box style={{ flex: 1, backgroundColor: '#F8F9FA', padding: '2rem', height: '100%' }}>
        <Title order={2} mb="md">{SECTION_TITLES[currentSection]}</Title>
        <ProjectHeader onNewProject={onNewProject} />
        <Box mt="md">
          <ProjectSearch onSearch={setSearchQuery} />
        </Box>
        <Box mt="lg">
          <ProjectList 
            projects={filteredProjects}
            onDownload={handleDownload}
            onCopy={handleCopy}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Box>
      </Box>
    </Group>
  );
} 