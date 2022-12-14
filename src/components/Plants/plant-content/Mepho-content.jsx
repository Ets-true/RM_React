export const plantContentMepho = {
  Init: {
    title: 'Установка очистки МЭФО-200',
    text: `Установки серии МЭФО является новым поколением маслоочистительного оборудования типа ФОДЖ-200, 
            ранее изготавливавшегося на нашем предприятии, с улучшенными 
            техническими и эксплуатационными характеристиками`,
    points: [
      'Производительность 4 м3/ч',
      'Автоматический режим работы',
      'Габариты 1800x1100x750',
      'Срок службы 20 лет'
    ]
  },
  Property: {
    title: 'Ключевые качества',
    properties: [
      'Высокоэффективный модуль электростатической очистки',
      'Отсутствие сменных фильтров при очистке от механических примесей',
      '80% комплектующих российского производства'
    ]
  },
  Character: {
     title: 'Технические характеристики',
     table1: {
      title: 'Показатели установки',
      columns: [
        '№ п/п',
        'Наименование',
        'Единица измерения',
        'Значение'
      ],
      mainRows: [
        [
          'Метод очистки масел или топлив',
          '—',
          `Электростатический (электрофизический) и вакуумное испарение `
        ],
        [
          'Очищаемые жидкости',
          '—',
          `Трансформаторные масла, турбинные минеральные и синтетические масла, 
            индустриальные масла, огнестойкие жидкости на основе
            триксиленилфосфатов, дизельное топливо`
        ],
        [
          'Производительность МЭФО-200',
          'м3/ч',
          `1; 2; 3; 4
          (Плавная регулировка производительности во всем диапазоне прокачки)
          `
        ],
        [
          'Вид климатического исполнения установки по ГОСТ  15150  ',
          '—',
          `УХЛ4`
        ],
      ],
      subRows: [
        [
          'Максимально допустимое рабочее давление на выходе',
          'МПа',
          `0.3`
        ],
        [
          'Минимальное давление на входе ',
          'МПа',
          `0.03`
        ],
        [
          'Максимально допустимое давление на входе',
          'МПа',
          `0,15`
        ],
      ]

     },
     table2: {
      title: 'Сертификация итогов',
      columns: [
        '№ п/п',
        'Наименование',
        'Единица измерения',
        'Значение'
      ],
      mainRows: [
        [
          'Максимальное влагосодержание жидкости на входе по ГОСТ 24614 (Турбинное масло и дизельное топливо)',
          '%',
          `не более 0,15`
        ],
        [
          'Максимальное влагосодержание жидкости на выходе по ГОСТ 24614 (Турбинное масло и дизельное топливо)',
          '%',
          `не более 0,020`
        ],
        [
          'Максимальное влагосодержание жидкости на входе по ГОСТ 24614 (Трансформаторное масло)',
          '%',
          `не более 0,01`
        ],
        [
          'Максимальное влагосодержание жидкости на выходе по ГОСТ 24614 (Трансформаторное масло)',
          '%',
          `не более 0,001`
        ],
      ],
      subRows: [
        [
          'Класс чистоты после очистки не более за один проход по ГОСТ 17216 (Турбинное масло ТП-22С)',
          'класс',
          `7-9`
        ],
        [
          'Класс чистоты после очистки не более за один проход по ГОСТ 17216 (Гидравлическое масло МГ-7Б)',
          'класс',
          `2-3`
        ],
        [
          'Класс чистоты после очистки не более за один проход по ГОСТ 17216 (Трансформаторное масло ГК)',
          'класс',
          `6-8`
        ],
      ]

     }
  }
}