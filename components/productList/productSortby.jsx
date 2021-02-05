import React, { useEffect, useState, useRef } from 'react'
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  makeStyles,
} from '@material-ui/core'
import style from './productList.module.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from '../../i18n'
const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '6px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    width: ' 100%',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    overflow: 'hidden',
    '& .MuiMenuItem-root': {
      padding: 0,
      width: '100%',
      padding: '8px 16px',
    },
    '& .MuiMenuItem-root a': {
      color: '#fff',
      margin: '6px 20px',
      minWidth: '100px',
      justifyContent: 'flex-start !important',
    },
    '& .MuiMenuItem-root a:hover': {
      textDecoration: 'none',
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
    width: '100%',
    top: '16px !important',
    right: '0',
    minWidth: '200px',
  },
}))
const ProductSortBy = ({ data, sortByText, setFilter, filters }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [activeOption, setActiveOption] = useState(data[0].name)
  const anchorRef = useRef(null)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])
  console.log('sort', data)

  return (
    <button
      className={style.btn}
      ref={anchorRef}
      aria-controls={open ? 'menu-list-grow' : undefined}
      aria-haspopup='true'
      onClick={handleToggle}
    >
      <span> {sortByText}: </span> {activeOption}
      <span className={`${style.arrow} ${open ? style.open : ''}`}>
        <ExpandMoreIcon />
      </span>
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
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                >
                  {data &&
                    data.map((item, index) => (
                      <MenuItem
                        key={index}
                        onClick={(e) => {
                          handleClose(e)
                          setActiveOption(item.name)
                          setFilter({ ...filters, sort: `price|${item.sort}` })
                        }}
                        disableRipple
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </button>
  )
}

export default ProductSortBy
