import { FC, useState } from 'react'
import styles from './historicalDates.module.scss'
import BackgroundCircle from '@/components/BackgroundCircle'
import { mockTimeSegments } from '@/__fixtures__/mockData'
import HistoricalDate from '@/shared/ui/HistoricalDate'
import Slider from '@/components/Slider'
import PaginationController from '@/shared/ui/PaginationController'

const HistoricalDates: FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Исторические
        <br />
        даты
      </h1>
      <div className={styles.dates}>
        <HistoricalDate value={mockTimeSegments[activeItemIndex].startYear} />
        <HistoricalDate value={mockTimeSegments[activeItemIndex].endYear} />
      </div>
      <BackgroundCircle
        className={styles.circle}
        count={mockTimeSegments.length}
        width={530}
        activeItemIndex={activeItemIndex}
        title={mockTimeSegments[activeItemIndex].title}
        setActiveItemIndex={setActiveItemIndex}
      />

      <PaginationController
        className={styles.pagination}
        currentItem={activeItemIndex + 1}
        allItems={mockTimeSegments.length}
        onPrevClick={() => setActiveItemIndex(activeItemIndex - 1)}
        onNextClick={() => setActiveItemIndex(activeItemIndex + 1)}
        prevDisabled={activeItemIndex === 0}
        nextDisabled={activeItemIndex === mockTimeSegments.length - 1}
      />
      <Slider
        className={styles.slider}
        historicalEvents={mockTimeSegments[activeItemIndex].events}
      />
      <h2 className={styles.subtitle}>
        {mockTimeSegments[activeItemIndex].title}
      </h2>
    </main>
  )
}

export default HistoricalDates
