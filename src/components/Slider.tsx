import { FC, HTMLAttributes } from 'react'
import type { HistoricalEvent } from '@/__fixtures__/mockData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Pagination } from 'swiper/modules'
import './slider.module.scss'
import 'swiper/scss/navigation'
import 'swiper/scss'
import 'swiper/scss/pagination'
import styles from './slider.module.scss'

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  historicalEvents: HistoricalEvent[]
}

const Slider: FC<SliderProps> = ({ historicalEvents, className }) => {
  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      <Swiper
        modules={[Navigation, FreeMode, Pagination]}
        navigation
        initialSlide={1}
        className={styles.swiper}
        slidesPerView="auto"
        freeMode={true}
        pagination={true}
      >
        {historicalEvents.map((event, i) => (
          <SwiperSlide key={i}>
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
