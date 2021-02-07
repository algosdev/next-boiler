import React from 'react'
import style from './details.module.scss'
const overviewData = [
  {
    title: 'Ноль проводов. Максимум преимуществ',
    details:
      'AirPods настраиваются в одно касание. Автоматически включаются иустанавливают соединение. Пользоваться ими невероятно легко. Они оснащены специальными сенсорами, поэтому когда вы снимаете наушники, воспроизведение останавливается. При этом AirPods великолепно взаимодействуют как с iPhone, так и с Apple Watch, iPad и Mac.',
  },
  {
    title: 'Ваш верный помощник Siri',
    details:
      'Вам что‑то понадобилось? Просто скажите: «Привет, Siri». И ваш помощник решит вопрос — вам даже не придётся брать в руки iPhone. А благодаря функции «Объявление о сообщениях» Siri может автоматически озвучивать входящие сообщения от тех контактов, которые вы выберете сами. При этом Siri не будет мешать, если вы говорите по телефону или включили музыку в режиме совместного прослушивания.',
  },
  {
    title: 'Возможности звучат мощно',
    details:
      'Новый чип H1, разработанный Apple, обеспечивает более стабильное беспроводное соединение с вашими устройствами и более быструю передачу данных: до 2 раз быстрее при переключении между активными устройствами и в 1,5 раза быстрее при телефонных звонках. Благодаря чипу H1 теперь Siri можно активировать с помощью голоса, а ещё задержка сигнала при использовании наушников во время компьютерных игр стала до 30% ниже. Поэтому, чем бы вы ни занимались — играли в игры, слушали музыку или подкасты, — качество звучания всегда будет потрясающим.',
  },
]

function Overview({ product }) {
  console.log('overview', product)
  return (
    <div className={style.overview}>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{
          __html: product.preview_text,
        }}
      >
        {/* {overviewData.map(({ title, details }, index) => (
          <div key={index}>
            <div className={style.title}>{title}</div>
            <p>{details}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Overview
