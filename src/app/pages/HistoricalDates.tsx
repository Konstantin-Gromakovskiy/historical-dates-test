import { FC, useState } from 'react'
import styles from './historicalDates.module.scss'
import BackgroundCircle from '@/components/BackgroundCircle'
import { mockData } from '@/__fixtures__/mockData'
import HistoricalDate from '@/components/HistoricalDate'

const HistoricalDates: FC = () => {
  const count = 6
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Исторические
        <br />
        даты
      </h1>
      <div className={styles.dates}>
        <HistoricalDate value={mockData[activeItemIndex].startAt} />
        <HistoricalDate value={mockData[activeItemIndex].endAt} />
      </div>
      <BackgroundCircle className={styles.circle} count={count} width={530} activeItemIndex={activeItemIndex} setActiveElem={setActiveItemIndex} />
    </main>
  )
}

export default HistoricalDates
