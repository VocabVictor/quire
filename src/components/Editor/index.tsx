import React from 'react'
import Toolbar from './Toolbar'
import StatusBar from './StatusBar'

const Editor: React.FC = () => {
  return (
    <div className="editor">
      <Toolbar />
      <div className="editor-content">
        {/* 编辑器内容区域 */}
      </div>
      <StatusBar />
    </div>
  )
}

export default Editor 