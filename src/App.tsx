import { MantineProvider, Stack } from '@mantine/core';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { EditorPage } from './components/editor/EditorPage';
import { AppHeader } from './components/AppHeader';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<'projects' | 'editor'>('projects');

  return (
    <MantineProvider>
      <Stack gap={0}>
        <AppHeader currentPage={currentPage} />
        {currentPage === 'projects' ? (
          <ProjectsPage onNewProject={() => setCurrentPage('editor')} />
        ) : (
          <EditorPage onBack={() => setCurrentPage('projects')} />
        )}
      </Stack>
    </MantineProvider>
  );
}

export default App;
