import { useState } from 'react'
import style from './productList.module.scss'
import { Link, useTranslation } from '../../i18n'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { ClickAwayListener } from '@material-ui/core'
function ProductHeader({ showFilter, setShowFilter }) {
  const { t } = useTranslation()
  const sortByData = [
    t('sort_recommended'),
    t('sort_new'),
    t('sort_price_low'),
    t('sort_price_high'),
  ]
  const [activeSortBy, setActiveSortBy] = useState(0)
  //   const [showFilter, setShowFilter] = useState(true)
  const [sortByOpen, setSortByOpen] = useState(false)
  return (
    <div className={style.navBar}>
      <div className={style.wrapper}>
        <div>
          <button
            className={style.btn}
            onClick={() => setShowFilter(!showFilter)}
          >
            <List />
            {t('filter')}
          </button>
        </div>

        <div className={style.sort_cont}>
          <button
            className={style.btn}
            onClick={() => setSortByOpen(!sortByOpen)}
          >
            <span>{t('sort_by')}: </span> {sortByData[activeSortBy]}
            <span className={`${style.arrow} ${sortByOpen ? style.open : ''}`}>
              <KeyboardArrowDown />
            </span>
          </button>
          <AnimatePresence>
            {sortByOpen ? (
              <ClickAwayListener onClickAway={() => setSortByOpen(false)}>
                <motion.div
                  className={style.popup}
                  variants={{
                    visible: {
                      y: 0,
                      position: 'absolute',
                      x: '-50%',
                      opacity: 1,
                      top: '200%',
                      left: 'calc(50% - 13px)',
                    },
                    stable: {
                      position: 'absolute',
                      y: -20,
                      opacity: 0,
                      x: '-50%',
                      top: '200%',
                      left: 'calc(50% - 13px)',
                    },
                  }}
                  animate={'visible'}
                  initial={'stable'}
                  exit={'stable'}
                >
                  <ul>
                    {sortByData.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            setActiveSortBy(index)
                            setSortByOpen(false)
                          }}
                          disabled={index === activeSortBy ? true : false}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ClickAwayListener>
            ) : (
              ''
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ProductHeader
