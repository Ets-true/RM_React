export const economicContent = {
  helmet: 'Экономика | РМ',
  benefit: {
    title: 'Экономическая выгода',
    textTop: `На данной странице отображена модель расчета экономической выгоды при выборе услуг компании ООО
          "Регенерация масел" по сверхглубокой очистке и восстановлению физико-химических свойств
          отработанного масла.`,
    textLeft1: `Имеется два предприятия А и Б, на которых находится по 20 тонн отработанного
              трансформаторного масла.`,
    textLeft2: `Для его замены Предприятию А требуется оборудовать места хранения, вызвать службу
              по утилизации отходов и закупить новое масло у поставщика. Предприятие Б  решает 
              восстановить отработанное масло и обращается в ООО "Регенерация масел".`,
    textLeft3: `Ниже приведено детальное сравнение расходов обеих организаций.`,
    initData: {
      title: 'Исходные данные:',
      tezisGroup: [
        'Два промышленных предприятия',
        `20 тонн трансформаторного масла 
        на каждом из предприятий`,
        `Диапазон стоимости нового трансформаторного масла
             110 тыс. - 140 тыс. рублей/тонну`
      ]
    },
  },
  compare: {
    title: 'Условия расчетов',
    columnNames: [
      'Действие',
      'Рабочее время',
      'Затраты'
    ],
    companies: [
      {
        table: {
          title: 'Предприятие А',
          rows: [
            [
              `Оснащение помещений для хранения 
              отработанного масла`,
              '3 дня',
              'от 80 тыс. р'
            ],
            [
              `Проверка отработанного масла
              перед утилизацией`,
              '1 день',
              'Входит в сумму утилизации'
            ],
            [
              `Утилизация отработанного масла`,
              '2 дня',
              `Сумма утилизации составляет 
              от 200 тыс. до 400 тыс`
            ],
            [
              `Закупка нового трансформаторного масла`,
              'Минимум 7 дней',
              `Сумма закупки составляет
              от 1.5 млн до 3 млн рублей`
            ],
          ]
        },
        conclusion: {
          title: 'Вывод по действиям предприятия A',
          text: `Просуммировав средние значения из полученных диапазонов делаем вывод, что
                для продолжения работы своего объекта Предприятию А
                необходимо израсходовать около 3 млн рублей за 13 дней, заключая договоры с тремя
                юридическими лицами: поставщик масла, подрядчик 
                по обустройству места хранения и сборщик отработанного масла.`
        }
      },
      {
        table: {
          title: 'Предприятие Б',
          rows: [
            [
              `Обращение в ООО "Регенерация масел"`,
            ],
            [
              `Анализ проб масла`,
              '1 день',
              'Входит в сумму работ'
            ],
            [
              `Очистка масла (фильтрация, осушка, дегазация)`,
              '2 дня',
              `До 750 тыс. рублей`
            ],
            [
              `Регенерация и стабилизация присадками`,
              '2 дня',
              `До 600 тыс. рублей`
            ],
          ]
        },
        conclusion: {
          title: 'Вывод по действиям предприятия Б',
          text: `Предприятие Б при восстановлении 20 тонн трансформаторного масла в
                среднем тратит около 1,3 млн рублей, что составляет около 50% от
                средней суммы покупки нового масла у поставщика. Временной диапазон составит полных 5
                рабочих дней при круглосуточной работе без
                учета расстояний.`
        }
      },
    ]
  },
  final: {
    title: `Сравнительный вывод:`,
    text: `Анализируя вышеуказанные данные видим, что Предприятие Б по сравнению с
          Предприятием А экономит порядка 1,5 млн рублей. Также
          важно заметить, что Предприятие Б заключило договор только с одним юридическим лицом, что
          существенно сэкономило временные
          затраты руководителей организации.`,
    docs: {
      title: `Документы с расчетами
            для соответствующих объемов`,
      list: [
        {
          name: '20 тонн',
          url: 'Энерго-временные_затраты_20_тонн.pdf'
        },
        {
          name: '40 тонн',
          url: 'Энерго-временные_затраты_40_тонн.pdf'
        },
        {
          name: '50 тонн',
          url: 'Энерго-временные_затраты_50_тонн.pdf'
        },
      ]
    }
  }
  
}