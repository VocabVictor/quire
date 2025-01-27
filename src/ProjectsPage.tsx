import * as dialog from '@tauri-apps/plugin-dialog';
import * as fs from '@tauri-apps/plugin-fs';
// ... existing code ... 

// 使用示例：
const filePath = await dialog.save({
  filters: [{
    name: 'Text',
    extensions: ['txt']
  }]
});

if (filePath) {
  await fs.writeFile(filePath, new TextEncoder().encode('Hello World'));
} 