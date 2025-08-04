interface EventItem {
  year: string
  description: string
}

export interface HistoricalDates {
  title: string
  startAt: number
  endAt: number
  events: EventItem[]
}

export const mockData: HistoricalDates[] = [
  {
    title: 'Философия',
    startAt: 1700,
    endAt: 1750,
    events: [
      { year: '1711', description: 'Дэвид Юм начал формировать эмпиризм.' },
      {
        year: '1748',
        description: 'Издан труд Юма "Исследование о человеке".',
      },
      {
        year: '1724',
        description: 'Родился Иммануил Кант — будущий основатель критицизма.',
      },
      {
        year: '1739',
        description:
          'Опубликовано первое философское сочинение Юма — "Трактат о человеческой природе".',
      },
    ],
  },
  {
    title: 'Наука',
    startAt: 1750,
    endAt: 1800,
    events: [
      {
        year: '1776',
        description: 'Адам Смит опубликовал "Богатство народов".',
      },
      {
        year: '1791',
        description: 'Вольта создал первый химический источник тока.',
      },
      {
        year: '1758',
        description:
          'Галлей предсказал возвращение кометы, названной его именем.',
      },
      { year: '1781', description: 'Гершель открыл планету Уран.' },
    ],
  },
  {
    title: 'Искусство',
    startAt: 1800,
    endAt: 1850,
    events: [
      {
        year: '1810',
        description: 'Расцвет романтизма в европейской живописи.',
      },
      {
        year: '1840',
        description: 'Работы Тернера определили стиль импрессионизма.',
      },
      { year: '1824', description: 'Открыта Национальная галерея в Лондоне.' },
      {
        year: '1830',
        description: 'Делакруа написал "Свобода, ведущая народ".',
      },
    ],
  },
  {
    title: 'Литература',
    startAt: 1850,
    endAt: 1900,
    events: [
      { year: '1869', description: 'Толстой опубликовал "Войну и мир".' },
      {
        year: '1890',
        description: 'Оскар Уайльд написал "Портрет Дориана Грея".',
      },
      { year: '1851', description: 'Герман Мелвилл издал роман "Моби Дик".' },
      {
        year: '1884',
        description: 'Марк Твен опубликовал "Приключения Гекльберри Финна".',
      },
    ],
  },
  {
    title: 'Технологии',
    startAt: 1900,
    endAt: 1950,
    events: [
      { year: '1927', description: 'Изобретено телевидение Джоном Бердом.' },
      {
        year: '1946',
        description: 'Создан ENIAC — один из первых компьютеров.',
      },
      {
        year: '1903',
        description: 'Братья Райт совершили первый полёт на самолёте.',
      },
      {
        year: '1928',
        description: 'Флеминг открыл пенициллин — начало эры антибиотиков.',
      },
    ],
  },
  {
    title: 'Космос',
    startAt: 1950,
    endAt: 2000,
    events: [
      { year: '1961', description: 'Гагарин стал первым человеком в космосе.' },
      { year: '1998', description: 'Начато строительство МКС.' },
      { year: '1969', description: 'Нил Армстронг первым ступил на Луну.' },
      {
        year: '1971',
        description: 'Запущена первая орбитальная станция "Салют-1".',
      },
    ],
  },
]
