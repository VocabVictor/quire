import { useState, useCallback } from 'react'

export const useTypst = () => {
  const [content, setContent] = useState('')
  const [compiling, setCompiling] = useState(false)

  const compile = useCallback(async (source: string) => {
    setCompiling(true)
    try {
      // TODO: 实现编译逻辑
    } catch (error) {
      console.error('Compilation error:', error)
    } finally {
      setCompiling(false)
    }
  }, [])

  return {
    content,
    compiling,
    compile
  }
}

export default useTypst 