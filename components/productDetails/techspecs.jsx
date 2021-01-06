import React from 'react'
import style from './details.module.scss'

const techSpecsData = [
  {
    title: 'Основные параметры',
    details: [
      { name: 'Тип устройства:', value: 'беспроводные наушники' },
      { name: 'Микрофон:', value: 'есть' },
      { name: 'Тип:', value: 'вкладыши' },
      { name: 'Технология:', value: 'динамические' },
    ],
  },
  {
    title: 'Беспроводная связь',
    details: [
      { name: 'Тип беспроводного соединения:', value: 'Bluetooth' },
      { name: 'Версия Bluetooth:', value: '5.0' },
      {
        name: 'Поддержка профилей работы:',
        value: 'Handsfree, A2DP, Headset, AVRCP',
      },
    ],
  },
  {
    title: 'Особенности',
    details: [
      { name: 'Чехол/футляр в комплекте:', value: 'есть' },
      { name: 'Поддержка iPhone:', value: 'есть' },
      {
        name: 'Дополнительная информация',
        value:
          'беспроводная зарядка кейса; голосовое управление; 15 минут зарядки хватает на 3 часа работы или 2 часа в режиме разговора; кейс - 44.3*53.5*21.3 мм, 398 мАч, 40 г; вес одного наушника - 4г; функция «Совместный доступ к аудио» позволяет слушать песни, подкасты и любое другое аудио через две пары наушников AirPods',
      },
    ],
  },
]
function TechSpecs() {
  return (
    <div className={style.wrapper}>
      <div className={style.tech_specs}>
        {techSpecsData.map((el, index) => (
          <React.Fragment key={index}>
            <div className={style.title}>{el.title}</div>
            <ul>
              {el.details.map((item, ind) => (
                <li key={ind}>
                  <div className={style.specs_name}>{item.name}</div>
                  <p></p>
                  <div className={style.specs_value}>{item.value}</div>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default TechSpecs
