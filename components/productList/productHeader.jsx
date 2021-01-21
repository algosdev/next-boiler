import React, { useState } from 'react';
import style from './productList.module.scss';
import { Link, useTranslation } from '../../i18n';
import { List, KeyboardArrowDown } from '@material-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { ClickAwayListener, makeStyles, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ProductFilter from './productFilter';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    padding: '6px 0',
    background: 'var(--secondary-color)',
    color: 'var(--black)',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 10px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.05)',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btn: {
    color: '#fff',
    fontSize: '16px',

    background: 'var(--primary-color)',
  },
  container: {
    padding: '32px 16px',
    maxWidth: '400px',
    marginLeft: '0',
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function ProductHeader({ showFilter, setShowFilter }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const sortByData = [
    t('sort_recommended'),
    t('sort_new'),
    t('sort_price_low'),
    t('sort_price_high'),
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [activeSortBy, setActiveSortBy] = useState(0);
  //   const [showFilter, setShowFilter] = useState(true)
  const [sortByOpen, setSortByOpen] = useState(false);
  return (
    <>
      <div className={style.navBar}>
        <div className={style.wrapper}>
          <div>
            <button
              className={style.btn}
              onClick={() => {
                setShowFilter(!showFilter);
                if (window) {
                  if (window.innerWidth < 576) {
                    handleClickOpen();
                  }
                }
              }}
            >
              <List />
              {t('filter')}
            </button>
          </div>

          <div className={style.sort_cont}>
            <button
              // id=""
              className={style.btn}
              onClick={() => setSortByOpen(!sortByOpen)}
            >
              <span>{t('sort_by')}: </span> {sortByData[activeSortBy]}
              <span
                className={`${style.arrow} ${sortByOpen ? style.open : ''}`}
              >
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
                        x: '0',
                        opacity: 1,
                        top: '200%',
                        right: '0',
                      },
                      stable: {
                        position: 'absolute',
                        y: -20,
                        opacity: 0,
                        x: '0',
                        top: '200%',
                        right: '0',
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
                              setActiveSortBy(index);
                              setSortByOpen(false);
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
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              {t('filter')}
            </Typography>
            <Button
              color='inherit'
              className={classes.btn}
              onClick={handleClose}
            >
              {t('apply')}
            </Button>
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
          <ProductFilter />
        </Container>

        {/* <List>
          <ListItem button>
            <ListItemText primary='Phone ringtone' secondary='Titania' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary='Default notification ringtone'
              secondary='Tethys'
            />
          </ListItem>
        </List> */}
      </Dialog>
    </>
  );
}

export default ProductHeader;
