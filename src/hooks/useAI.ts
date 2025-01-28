import { useState, useCallback } from 'react'

export const useAI = () => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const getSuggestions = useCallback(async (prompt: string) => {
    setLoading(true)
    try {
      // TODO: 实现 AI 建议获取逻辑
    } catch (error) {
      console.error('AI error:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    suggestions,
    loading,
    getSuggestions
  }
}

export default useAI 