import React, { useEffect, useState, useRef } from 'react';
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  makeStyles,
} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
import style from './header.module.scss';
import { useSelector, shallowEqual } from 'react-redux';
import { useTranslation } from '../../i18n';
const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '6px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    background: '#1d1d1d',
    color: '#fff',
    overflow: 'hidden',

    '& .MuiMenuItem-root': {
      padding: 0,
    },
    '& .MuiMenuItem-root a': {
      color: '#fff',
      justifyContent: 'flex-start !important',
      padding: '6px 20px',
      display: 'block',
      width: '100%',
    },
    '& .MuiMenuItem-root a:hover': {
      textDecoration: 'none',
    },
    '& .MuiMenuItem-root p': {
      color: '#fff',
      maxWidth: '100%',
      wordBreak: 'break-word',
    },
    '& .MuiList-root': {
      padding: '0',
    },
    '& .MuiListItem-root:hover': {
      background: 'rgba(255,255,255,0.2)',
    },
  },
  popper: {
    zIndex: '999',
    top: '0 !important',
    paddingTop: '10px',
  },
}));
const CartDropdown = ({ mobile }) => {
  const { t } = useTranslation();
  const [isBagVisible, setIsBagVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const classes = useStyles();
  const calculateTotalQuantity = (data) => {
    let sum = 0;
    data.forEach((el) => {
      sum += el.quantity;
    });
    return sum;
  };
  const productsInCart = useSelector(
    (state) => state?.cart?.cartItems,
    shallowEqual
  );
  const [badgeCount, setBadgeCount] = useState(
    calculateTotalQuantity(productsInCart)
  );
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  useEffect(() => {
    setBadgeCount(calculateTotalQuantity(productsInCart));

    if (productsInCart?.length) {
      animateInPeriod();
    }
  }, [productsInCart]);
  const animateInPeriod = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1500);
  };
  return (
    <>
      <li
        className={`${style.listItem} ${style.cartIcon}`}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link href='/cart'>
          <a aria-label='Cart'>
            <div className={`${style.icon} ${animate ? style.animate : ''}`}>
              <ShoppingCartOutlinedIcon />
            </div>

            {calculateTotalQuantity(productsInCart) !== 0 ? (
              <div className={style.badge_cont}>
                <div
                  className={`${style.badge} ${animate ? style.animate : ''} ${
                    badgeCount > 99 ? 'badge_fix' : ''
                  }`}
                >
                  <span>{badgeCount > 99 ? '99+' : badgeCount}</span>
                </div>
              </div>
            ) : (
              ''
            )}
          </a>
        </Link>
        {!mobile ? (
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            className={classes.popper}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    {productsInCart?.length ? (
                      <Link href='/cart'>
                        <li
                          className={style.cart_items}
                          onClick={handleClose}
                          diableRipple
                        >
                          {productsInCart.map((el, ind) => (
                            <div className={style.item} key={ind}>
                              <div className={style.img}>
                                <img src={el.img} alt={el.name} />
                              </div>

                              <div className={style.details}>
                                <div className={style.title}>{el.name}</div>
                                <div className={style.desc}>
                                  <p>
                                    {t('price')}: {numberToPrice(el.price)}{' '}
                                    {t('soum')}
                                  </p>
                                  <p>
                                    {t('quantity')}: {el.quantity}{' '}
                                    {el.quantity > 1 ? t('pc2') : t('pc1')}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </li>
                      </Link>
                    ) : (
                      <div className={style.no_item}>{t('empty_cart')}</div>
                    )}
                    {/* <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/cart'>
                        <a>{t('cart')}</a>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/orders'>
                        <a>{t('orders')}</a>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/account'>
                        <a>{t('profile')}</a>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/signin'>
                        <a>{t('signin')}</a>
                      </Link>
                    </MenuItem>*/}
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        ) : (
          ''
        )}
      </li>
    </>
  );
};

export default CartDropdown;
