import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock fade transition to avoid timers
jest.mock('@/shared/hooks/useFadeTransition', () => ({
  __esModule: true,
  useFadeTransition: <T,>(data: T) => ({ visible: true, currentData: data }),
}))

// Mock dot position calculation for determinism
jest.mock('@/shared/utils/calcDotPosition', () => ({
  __esModule: true,
  default: () => ({ x: 10, y: 20 }),
}))

import BackgroundCircle from '@/components/BackgroundCircle'

describe('BackgroundCircle', () => {
  it('renders title and dots with active state and handles click', async () => {
    const user = userEvent.setup()
    const setActive = jest.fn()
    const title = 'Test Title'

    render(
      <BackgroundCircle
        width={100}
        count={4}
        activeItemIndex={1}
        setActiveItemIndex={setActive}
        title={title}
      />,
    )

    // Title
    expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument()

    const dots = screen.getAllByRole('button')
    expect(dots).toHaveLength(4)

    // Active state via data-active attribute
    expect(dots[1]).toHaveAttribute('data-active', 'true')
    expect(dots[0]).toHaveAttribute('data-active', 'false')

    // Click a dot and ensure handler is called with index
    await user.click(dots[3])
    expect(setActive).toHaveBeenCalledWith(3)
  })
})
