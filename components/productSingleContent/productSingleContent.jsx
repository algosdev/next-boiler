import React, { useState, useEffect } from 'react'
import style from './productSingleContent.module.scss'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { i18n, useTranslation, Link } from '../../i18n'
import { asyncAddToCartAction } from '../../redux/actions/cartActions/cartActions'
import {
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  CircularProgress,
  Box,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { motion, AnimatePresence } from 'framer-motion'
const colorsData = [
  { ru: 'Черный', en: 'Black', uz: 'Qora' },
  { ru: 'Серый', en: 'Grey', uz: 'Kulrang' },
  { ru: 'Красный', en: 'Red', uz: 'Qizil' },
  { ru: 'Синий', en: 'Blue', kok: "Ko'k" },
]
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
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '28px',
    lineHeight: '1.5',
    fontWeight: 'bold',
  },
  details: {
    fontSize: '16px',
  },
  summary: {
    padding: '0',
  },
}))

function ProductSingleContent({ data }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  )
  const [isLoading, setIsLoading] = useState(false)
  const check = productsInCart.filter((el) => el.id === data.id)?.length
    ? true
    : false
  const [addedToCart, setAddedToCart] = useState(
    productsInCart.some((el) => el.id === data.id)?.length ? true : false
  )
  const { language } = i18n
  const { t } = useTranslation()
  const [activeColorIndex, setActiveColorIndex] = useState(0)
  const addToCart = () => {
    if (!addedToCart) {
      dispatch(asyncAddToCartAction(data))
      setIsLoading(true)
      setTimeout(() => {
        setAddedToCart(true)
        setIsLoading(false)
      }, 1000)
    }
  }
  useEffect(() => {
    const check = productsInCart.filter((el) => el.id === data.id)?.length
      ? true
      : false
    setAddedToCart(check)
  }, [data])

  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.inner}>
          <div className={style.type}>{t('new')}</div>
          <div className={style.name}>{data.name}</div>
          <div className={style.desc}>
            Требуются AirPods Max с последней версией программного обеспечения и
            модели iPhone и iPod touch с последней версией iOS; модели iPad с
            последней версией iPadOS; Модели Apple Watch с последней версией
            watchOS;
          </div>
          <div className={style.colors_cont}>
            <div className={style.colors_title}>{t('colors')}</div>
            <Grid container spacing={2}>
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
                      <div className={style.color_name}>{item[language]}</div>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={style.price}>
            {data.price} {t('soum')}
          </div>
          <div className={style.add}>
            <button
              className={`input ${isLoading ? style.disabled : ''}`}
              onClick={addToCart}
              disabled={isLoading}
            >
              <AnimatePresence>
                {addedToCart && (
                  <Link href='/cart'>
                    <motion.a
                      animate={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      {t('added_to_cart')}
                    </motion.a>
                  </Link>
                )}
              </AnimatePresence>
              {!addedToCart &&
                (isLoading ? (
                  <CircularProgress color='inherit' />
                ) : (
                  t('add_to_cart')
                ))}
            </button>
          </div>
          <div className={style.overview}>
            <div className={classes.root}>
              <Accordion>
                <AccordionSummary
                  className={classes.summary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography className={classes.heading}>
                    {t('overview')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.summary}>
                  <div className={style.content}>
                    {overviewData.map(({ title, details }, index) => (
                      <div key={index}>
                        <div className={style.title}>{title}</div>
                        {details}
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                  className={classes.summary}
                >
                  <Typography className={classes.heading}>
                    {t('techspecs')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.summary}>
                  <div className={style.tech_specs}>
                    {techSpecsData.map((el, index) => (
                      <React.Fragment key={index}>
                        <div className={style.title}>{el.title}</div>
                        <ul>
                          {el.details.map((item, ind) => (
                            <li key={ind}>
                              <div className={style.specs_name}>
                                {item.name}
                              </div>
                              <p></p>
                              <div className={style.specs_value}>
                                {item.value}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </React.Fragment>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductSingleContent
