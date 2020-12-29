import React, { useState } from 'react'
import style from './productSingleContent.module.scss'
import { Container, Grid, Typography } from '@material-ui/core'
const colorsData = [
  { ru: 'Черный', en: 'Black' },
  { ru: 'Серый', en: 'Grey' },
  { ru: 'Красный', en: 'Red' },
  { ru: 'Синий', en: 'Blue' },
]
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
function ProductSingleContent() {
  const [activeColorIndex, setActiveColorIndex] = useState(0)
  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.inner}>
          <div className={style.type}>Бесплатная гравировка</div>
          <div className={style.name}>
            Беспроводные наушники Apple AirPods 2
          </div>
          <div className={style.desc}>
            Требуются AirPods Max с последней версией программного обеспечения и
            модели iPhone и iPod touch с последней версией iOS; модели iPad с
            последней версией iPadOS; Модели Apple Watch с последней версией
            watchOS;
          </div>
          <div className={style.colors_cont}>
            <div className={style.colors_title}>Цвета</div>
            <Grid container xs={12} spacing={2}>
              {colorsData.map((item, index) => (
                <Grid
                  item
                  xs={6}
                  key={index}
                  onClick={() => setActiveColorIndex(index)}
                >
                  <div
                    className={`${style.color_cont} ${
                      activeColorIndex === index ? style.active : ''
                    }`}
                  >
                    <div className={style.inner}>
                      <div
                        className={`${style.color_ball} ${
                          style[item.en.toLowerCase()]
                        }`}
                      ></div>
                      <div className={style.color_name}>{item.ru}</div>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={style.price}>$549.00</div>
          <div className={style.add}>
            <button className='input'>Добавить в корзину</button>
          </div>
          <div className={style.overview}>
            <div className={style.main_title}>Обзор</div>
            <div className={style.content}>
              <div className={style.title}>
                Ноль проводов. Максимум преимуществ
              </div>
              AirPods настраиваются в одно касание. Автоматически включаются и
              устанавливают соединение. Пользоваться ими невероятно легко. Они
              оснащены специальными сенсорами, поэтому когда вы снимаете
              наушники, воспроизведение останавливается. При этом AirPods
              великолепно взаимодействуют как с iPhone, так и с Apple Watch,
              iPad и Mac.
              <div className={style.title}>Ваш верный помощник Siri</div>
              Вам что‑то понадобилось? Просто скажите: «Привет, Siri». И ваш
              помощник решит вопрос — вам даже не придётся брать в руки iPhone.
              А благодаря функции «Объявление о сообщениях» Siri может
              автоматически озвучивать входящие сообщения от тех контактов,
              которые вы выберете сами. При этом Siri не будет мешать, если вы
              говорите по телефону или включили музыку в режиме совместного
              прослушивания.
              <div className={style.title}>Возможности звучат мощно</div>
              Новый чип H1, разработанный Apple, обеспечивает более стабильное
              беспроводное соединение с вашими устройствами и более быструю
              передачу данных: до 2 раз быстрее при переключении между активными
              устройствами и в 1,5 раза быстрее при телефонных звонках.
              Благодаря чипу H1 теперь Siri можно активировать с помощью голоса,
              а ещё задержка сигнала при использовании наушников во время
              компьютерных игр стала до 30% ниже. Поэтому, чем бы вы ни
              занимались — играли в игры, слушали музыку или подкасты, —
              качество звучания всегда будет потрясающим.
            </div>
            <div className={style.main_title}>Характеристики</div>
            <div className={style.tech_specs}>
              {techSpecsData.map((el, index) => (
                <>
                  <div className={style.title}>{el.title}</div>
                  <ul>
                    {el.details.map((item, index) => (
                      <li>
                        <div className={style.specs_name}>{item.name}</div>
                        <p></p>
                        <div className={style.specs_value}>{item.value}</div>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductSingleContent
