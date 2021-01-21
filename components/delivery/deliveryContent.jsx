import React from 'react';
import style from './delivery.module.scss';
import { Container } from '@material-ui/core';
import DeliveryCard from './deliveryCard';
import { OnTimeDeliveryIcon, FastDeliveryIcon, SettingsIcon } from '../svg';
function DeliveryContent() {
  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.inner_container}>
          <h1>
            Интернет-магазин MacBro предлагает разнообразные услуги доставки с
            высоким качеством.
          </h1>
          <div className={style.card_container}>
            <DeliveryCard title='Продажа в рассрочку'>
              <OnTimeDeliveryIcon />
            </DeliveryCard>
            <DeliveryCard title='Своевременная доставка'>
              <FastDeliveryIcon />
            </DeliveryCard>
            <DeliveryCard title='Служба поддержки'>
              <SettingsIcon />
            </DeliveryCard>
          </div>
          <h3>Самовывоз</h3>
          <ul>
            <li>Доставка в течение 48 рабочих часов в черте города Ташкент</li>
            <li>Доставка мелкой бытовой техники и электроники – 25 000 сум</li>
            <li>
              Доставка крупной бытовой техники в черте города до подъезда –
              Бесплатно
            </li>
            <li>
              Доставка аксессуаров (чехлы, наушники, клавиатуры, мышки и т.д.) –
              25 000 сум
            </li>
          </ul>
          <h3>Срочность доставки</h3>
          <ul>
            <li>
              Ускоренная доставка осуществляется в течение 4 часов с момента
              подтверждения заказа.
            </li>
            <li>
              Стоимость ускоренной доставки в черте города Ташкент – 30 000 сум
              за мелко бытовую технику и 50 000 сум за крупно бытовую технику.
            </li>
            <li>
              Бесплатная доставка осуществляется только в черте города Ташкент.
            </li>
            <li>Подъем крупной бытовой техники</li>
            <li>
              Подъем крупной бытовой техники выше первого этажа осуществляется
              за дополнительную плату.
            </li>
            <li>
              Получить более подробную информацию можно, позвонив по номеру
              call-центра интернет-магазина GOODZONE.UZ: +998 71 207 03 07.
            </li>
          </ul>
          <h3>Доставка в течение дня</h3>
          <ul>
            <li>Доставка в течение 24 рабочих часов в черте города Ташкент</li>
            <li>Доставка мелкой бытовой техники и электроники – 5 000 сум</li>
            <li>
              Доставка крупной бытовой техники в черте города до подъезда –
              Бесплатно
            </li>
            <li>
              Доставка аксессуаров (чехлы, наушники, клавиатуры, мышки и т.д.) –
              25 000 сум
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default DeliveryContent;
