import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock heavy/animated components to keep tests fast and deterministic
jest.mock('@/components/BackgroundCircle', () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <div data-testid="bg-circle-title">{title}</div>,
}))

jest.mock('@/components/Slider', () => ({
  __esModule: true,
  default: ({ historicalEvents }: { historicalEvents: { date: string, description: string }[] }) => (
    <ul data-testid="slider-events">
      {historicalEvents.map((e, i) => (
        <li key={i}>{e.description}</li>
      ))}
    </ul>
  ),
}))

// Avoid requestAnimationFrame logic in Animated number
jest.mock('@/shared/ui/HistoricalDate', () => ({
  __esModule: true,
  default: ({ value }: { value: number }) => <span>{value}</span>,
}))

import HistoricalDates from '@/pages/HistoricalDates'
import { mockTimeSegments } from '@/__fixtures__/mockData'

describe('HistoricalDates page', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('renders title and initial years and subtitle', () => {
    render(<HistoricalDates />)

    // Title
    expect(screen.getByRole('heading', { level: 1, name: /исторические\s*даты/i })).toBeInTheDocument()

    const first = mockTimeSegments[0]

    // Years
    expect(screen.getByText(String(first.startYear))).toBeInTheDocument()
    expect(screen.getByText(String(first.endYear))).toBeInTheDocument()

    // Subtitle (bottom h2)
    // It should be visible immediately with the first segment title
    expect(screen.getAllByRole('heading', { level: 2 })).toEqual(
      expect.arrayContaining([expect.any(HTMLElement)]),
    )
    // Use role to target the bottom h2 subtitle specifically (avoid duplicate text from BackgroundCircle mock)
    expect(screen.getByRole('heading', { level: 2, name: first.title })).toBeInTheDocument()

    // Slider mock shows events
    expect(screen.getByTestId('slider-events')).toBeInTheDocument()
    expect(screen.getByText(first.events[0].description)).toBeInTheDocument()
  })

  it('navigates to next and previous segments using pagination buttons', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<HistoricalDates />)

    const first = mockTimeSegments[0]
    const second = mockTimeSegments[1]

    // There are exactly two pagination buttons (prev, next) after mocks
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
    const [prevBtn, nextBtn] = buttons

    // Initial disabled states
    expect(prevBtn).toBeDisabled()
    expect(nextBtn).not.toBeDisabled()

    // Go to next
    await user.click(nextBtn)

    // Years updated immediately
    expect(screen.getByText(String(second.startYear))).toBeInTheDocument()
    expect(screen.getByText(String(second.endYear))).toBeInTheDocument()

    // Subtitle uses fade transition (1s). Advance timers to allow text update
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByRole('heading', { level: 2, name: second.title })).toBeInTheDocument()

    // Now prev should be enabled
    expect(prevBtn).not.toBeDisabled()

    // Go back to previous
    await user.click(prevBtn)

    expect(screen.getByText(String(first.startYear))).toBeInTheDocument()
    expect(screen.getByText(String(first.endYear))).toBeInTheDocument()
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByRole('heading', { level: 2, name: first.title })).toBeInTheDocument()
  })

  it('disables next button on the last segment', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    render(<HistoricalDates />)

    const total = mockTimeSegments.length
    const [prevBtn, nextBtn] = screen.getAllByRole('button')

    // Click next until the end
    for (let i = 1; i < total; i++) {
      await user.click(nextBtn)
    }

    // On the last segment next is disabled, prev is enabled
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(nextBtn).toBeDisabled()
    expect(prevBtn).not.toBeDisabled()
  })
})
