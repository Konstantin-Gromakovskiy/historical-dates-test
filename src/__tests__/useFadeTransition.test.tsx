import { renderHook, act } from '@testing-library/react'
import { useFadeTransition } from '@/shared/hooks/useFadeTransition'

describe('useFadeTransition', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('returns visible=true and currentData initially', () => {
    const { result } = renderHook(() => useFadeTransition('A', 500))
    expect(result.current.visible).toBe(true)
    expect(result.current.currentData).toBe('A')
  })

  it('fades out then updates data and fades in after duration', () => {
    const { result, rerender } = renderHook(({ data, duration }) => useFadeTransition(data, duration), {
      initialProps: { data: 'A', duration: 500 },
    })

    // Update data -> should become invisible immediately
    rerender({ data: 'B', duration: 500 })
    expect(result.current.visible).toBe(false)
    // Before timeout expired, data should still be old
    expect(result.current.currentData).toBe('A')

    // Advance timers to duration
    act(() => {
      jest.advanceTimersByTime(500)
    })

    // After timer, data is updated and becomes visible again
    expect(result.current.currentData).toBe('B')
    expect(result.current.visible).toBe(true)
  })
})
