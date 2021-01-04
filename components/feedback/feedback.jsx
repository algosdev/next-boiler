import React, { useState } from 'react'
import style from './feedback.module.scss'
import { Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
function Feedback() {
  const [ratingValue, setRatingValue] = useState(0)

  return (
    <div className={style.wrapper}>
      <div className={style.feedback_container}>
        <div className={style.main_title}>Отзывы</div>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating
            name='simple-controlled'
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue)
            }}
          />
        </Box>
        <textarea
          className='input'
          placeholder='Комментировать'
          rows='4'
        ></textarea>
      </div>
    </div>
  )
}

export default Feedback
