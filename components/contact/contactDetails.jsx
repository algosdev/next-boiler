import React from 'react';
import style from './contact.module.scss';
import {
  TelegramIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
  PhoneNumIcon,
  LocationIcon,
  EmailIcon,
} from '../svg';
function ContactDetails() {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Контактная информация</div>
      <p>
        <PhoneNumIcon />
        <span>+998712220505</span>
      </p>
      <p>
        <EmailIcon />
        <span>support@macbro.uz</span>
      </p>
      <p>
        <LocationIcon />
        <span>45, Istiqbol ko'chasi, Mirobod tumani, Toshkent</span>
      </p>
      <div className={style.socials}>
        <div className={style.item}>
          <TelegramIcon />
        </div>
        <div className={style.item}>
          <YoutubeIcon />
        </div>
        <div className={style.item}>
          <FacebookIcon />
        </div>
        <div className={style.item}>
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
