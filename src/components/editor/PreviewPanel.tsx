import React from 'react';
import { Box } from '@mantine/core';

interface PreviewPanelProps {
  previewUrl?: string;
}

export function PreviewPanel({ previewUrl = 'about:blank' }: PreviewPanelProps) {
  return (
    <Box w={650} h="100%" style={{ backgroundColor: 'white', overflowY: 'auto' }}>
      <Box p="md">
        <iframe
          src={previewUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            backgroundColor: 'white'
          }}
        />
      </Box>
    </Box>
  );
} 