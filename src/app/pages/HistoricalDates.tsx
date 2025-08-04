import { FC, useState } from 'react'
import styles from './historicalDates.module.scss'
import BackgroundCircle from '@/components/BackgroundCircle'

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
      {/* TODO: Вынести это в отдельный компонент */}
      <div className={styles.dates}>
        <span>2015</span>
        <span>2022</span>
      </div>
      <BackgroundCircle className={styles.circle} count={count} width={530} activeItemIndex={activeItemIndex} setActiveElem={setActiveItemIndex} />
    </main>
  )
}

export default HistoricalDates
