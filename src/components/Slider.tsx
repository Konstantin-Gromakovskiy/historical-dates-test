import { FC, HTMLAttributes } from 'react'
import type { HistoricalEvent } from '@/__fixtures__/mockData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Pagination } from 'swiper/modules'
import './slider.module.scss'
import 'swiper/scss/navigation'
import 'swiper/scss'
import 'swiper/scss/pagination'
import styles from './slider.module.scss'
import CircleButton from '@/shared/ui/CircleButton'

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  historicalEvents: HistoricalEvent[]
  activeItemIndex: number
}

const Slider: FC<SliderProps> = ({ historicalEvents, activeItemIndex, className }) => {
  const currentItem = (activeItemIndex + 1).toString().padStart(2, '0')
  // TODO: на данный момент приходит не то количество евентов
  // Нужно сделать, чтобы отображалось количество временных отрезко а не евентов
  const allItems = historicalEvents.length.toString().padStart(2, '0')

  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      <div className={styles.paginationContainer}>
        <div className={styles.pagination}>
          <span>{currentItem}</span>
          /
          <span>{allItems}</span>
        </div>
        <div className={styles.buttonsContainer}>
          <CircleButton onClick={() => {}} />
          <CircleButton disabled onClick={() => {}} />
        </div>
      </div>
      <Swiper
        modules={[Navigation, FreeMode, Pagination]}
        navigation
        initialSlide={activeItemIndex}
        className={styles.swiper}
        slidesPerView="auto"
        freeMode={true}
        pagination={true}
      >
        {historicalEvents.map((event, i) => (
          <SwiperSlide
            key={i}
          >
            <div className={styles.eventContainer}>
              <h4 className={styles.title}>{event.date}</h4>
              <p className={styles.description}>{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
