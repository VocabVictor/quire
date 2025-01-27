import React from 'react';
import { Box } from '@mantine/core';
import { Editor } from "@monaco-editor/react";

interface CodeEditorProps {
  content: string;
  onChange: (value: string) => void;
}

export function CodeEditor({ content, onChange }: CodeEditorProps) {
  return (
    <Box style={{ flex: 1, height: '100%' }}>
      <Editor
        height="100%"
        defaultLanguage="latex"
        value={content}
        onChange={(value) => onChange(value || "")}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          wordWrap: 'on',
          automaticLayout: true,
          rulers: [80],
        }}
      />
    </Box>
  );
} 