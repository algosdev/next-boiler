import React, { useState } from 'react';
import style from './feedback.module.scss';
import { Box, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useTranslation } from '../../i18n';
function Feedback() {
  const { t } = useTranslation();
  const [ratingValue, setRatingValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.wrapper}>
      <div className={style.feedback_container}>
        <form onSubmit={handleSubmit}>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <Rating
              name='simple-controlled'
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
            />
          </Box>
          <textarea
            className='input'
            placeholder={`${t('feedback')}...`}
            rows='4'
          ></textarea>
          <div className={style.btn_cont}>
            <Button>{t('leave_feedback')}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
