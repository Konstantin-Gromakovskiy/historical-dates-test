import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PaginationController from '@/shared/ui/PaginationController'

// CircleButton renders a button element; no need to mock

describe('PaginationController', () => {
  it('renders formatted counters and passes disabled states', () => {
    const onPrev = jest.fn()
    const onNext = jest.fn()

    render(
      <PaginationController
        currentItem={1}
        allItems={6}
        onPrevClick={onPrev}
        onNextClick={onNext}
        prevDisabled
        nextDisabled={false}
      />,
    )

    // Counter formatted with leading zeros
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('06')).toBeInTheDocument()

    const [prevBtn, nextBtn] = screen.getAllByRole('button')
    expect(prevBtn).toBeDisabled()
    expect(nextBtn).not.toBeDisabled()
  })

  it('calls callbacks on click', async () => {
    const user = userEvent.setup()
    const onPrev = jest.fn()
    const onNext = jest.fn()

    render(
      <PaginationController
        currentItem={2}
        allItems={6}
        onPrevClick={onPrev}
        onNextClick={onNext}
      />,
    )

    const [prevBtn, nextBtn] = screen.getAllByRole('button')
    await user.click(prevBtn)
    await user.click(nextBtn)

    expect(onPrev).toHaveBeenCalledTimes(1)
    expect(onNext).toHaveBeenCalledTimes(1)
  })
})
