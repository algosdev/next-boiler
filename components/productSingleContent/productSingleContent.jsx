import React, { useState } from 'react'
import style from './productSingleContent.module.scss'
import { Container, Grid, Typography } from '@material-ui/core'
const colorsData = ['Черный', 'Серый', 'Красный', 'Синий']
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
                          style[item.toLowerCase()]
                        }`}
                      ></div>
                      <div className={style.color_name}>{item}</div>
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
              <div className={style.title}>Знают, когда вы слушаете</div>
              Акселерометр и оптические сенсоры, взаимодействуя друг с другом,
              управляют различными аудио‑функциями: активируют микрофоны для
              телефонных звонков и голосовых команд Siri, а также позволяют
              AirPods воспроизводить звук, когда наушники уже в ушах. При этом
              вы можете использовать и оба наушника, и только один. А ещё
              AirPods распознают двойные касания, с помощью которых удобно
              включать и выключать музыку или переключать треки.
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductSingleContent
