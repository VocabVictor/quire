import React, { useState } from 'react';
import { AppShell, Group } from '@mantine/core';
import { EditorHeader } from './EditorHeader';
import { FileTree } from './FileTree';
import { CodeEditor } from './CodeEditor';
import { PreviewPanel } from './PreviewPanel';

interface EditorPageProps {
  onBack: () => void;
}

const DEFAULT_CONTENT = `\\documentclass{article}
\\pdfpagewidth=8.5in
\\pdfpageheight=11in

% These are the instructions for authors for IJCAI-25.
\\usepackage{ijcai25}
\\usepackage{times}
\\usepackage{soul}
\\usepackage{url}
\\usepackage[hidelinks]{hyperref}
\\usepackage[utf8]{inputenc}
\\usepackage[small]{caption}

\\title{Multi-Stage Filtering Mechanism for Enhanced Retrieval-Augmented Generation}

\\author{Author Name\\\\
  Affiliation\\\\
  email@example.com}

\\begin{document}
\\maketitle

\\begin{abstract}
Your abstract goes here.
\\end{abstract}

\\section{Introduction}
Start writing your paper here...

\\end{document}`;

export function EditorPage({ onBack }: EditorPageProps) {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [files] = useState([
    { name: 'ijcai25.bib', type: 'file' },
    { name: 'ijcai25.pdf', type: 'file' },
    { name: 'ijcai25.sty', type: 'file' },
    { name: 'ijcai25.tex', type: 'file', active: true },
    { name: 'named.bst', type: 'file' },
  ]);

  return (
    <AppShell
      header={{ height: 60 }}
      padding={0}
    >
      <AppShell.Header>
        <EditorHeader 
          title="Multi-Stage Filtering Mechanism for Enhanced Retrieval-Augmented Generation"
          onBack={onBack}
        />
      </AppShell.Header>

      <Group align="flex-start" h="calc(100vh - 60px)" gap={0} wrap="nowrap">
        <FileTree files={files} />
        <CodeEditor content={content} onChange={setContent} />
        <PreviewPanel />
      </Group>
    </AppShell>
  );
} 