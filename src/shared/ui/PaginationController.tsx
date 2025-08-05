import { FC, HTMLAttributes } from 'react'
import CircleButton from '@/shared/ui/CircleButton'
import styles from './paginationController.module.scss'

interface PaginationControllerProps extends HTMLAttributes<HTMLDivElement> {
  onNextClick: () => void
  onPrevClick: () => void
  currentItem: number
  allItems: number
}

const PaginationController: FC<PaginationControllerProps> = ({ onNextClick, onPrevClick, currentItem, allItems, className }) => {
  const currentItemFormattedItem = currentItem.toString().padStart(2, '0')
  const allItemsFormattedItem = allItems.toString().padStart(2, '0')

  return (
    <div className={`${styles.paginationController} ${className ? className : ''}`}>
      <div className={styles.pagination}>
        <span>{currentItemFormattedItem}</span>
        /
        <span>{allItemsFormattedItem}</span>
      </div>
      <div className={styles.buttonsContainer}>
        <CircleButton onClick={onPrevClick} />
        <CircleButton disabled onClick={onNextClick} />
      </div>
    </div>
  )
}

export default PaginationController
