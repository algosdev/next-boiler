import React, { useEffect, useState } from 'react'
import style from './feedback.module.scss'
import { Box, Button, CircularProgress } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { Router, useTranslation } from '../../i18n'
import { get, useForm } from 'react-hook-form'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { createFormData } from '../../lib/createFormData'
import { Alert } from '@material-ui/lab'
import UserAvatar from 'react-user-avatar'
import { getLocaleDate } from '../../lib/getLocaleDate'

function Feedback({ slug }) {
  const { t } = useTranslation()
  const [ratingValue, setRatingValue] = useState(0)
  const [error, setError] = useState('')
  const [review, setReview] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const [limit, setLimit] = useState(0)
  const user = useSelector((state) => state.auth.user)
  const getReviews = async () => {
    try {
      const response = await axios.get(
        `${process.env.FEEDBACK_API_URL}?product=${slug}&limit=${limit}&active=true`
      )
      if (response.status === 200) {
        setData(response.data.feedbacks)
      }
      console.log('rev', response)
    } catch (err) {
      setError('Error')
    }
  }

  console.log('slug', slug)

  useEffect(() => {
    console.log('review')
    getReviews()
  }, [limit, review])

  const sendView = async (data) => {
    if (ratingValue === 0) {
      setError(t('comment-condition'))
      //Router.push(`/product/${slug}#rate`)
    } else {
      setLoading(true)
      try {
        const response = await axios.post(
          `http://46.101.122.150:1235/v1/feedback/${slug}`,
          createFormData({
            active: true,
            comment: data.view || '',
            customer_name: user ? `${user.name} ${user.lastname}` : data.name,
            customer_id: user ? user.id : '',
            rate: ratingValue,
          })
        )
        if (response.status === 200) {
          setReview(t('comment-add'))
          setRatingValue(0)
          setError('')
        }
      } catch (err) {
        setError('Error')
      } finally {
        setLoading(false)
      }
    }
  }
  return (
    <div id='rate' className={style.wrapper}>
      <div className={style.feedback_container}>
        <form onSubmit={handleSubmit(sendView)}>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <Rating
              name='simple-controlled'
              value={ratingValue}
              id='feedback_rating_field'
              onChange={(event, newValue) => {
                setRatingValue(newValue)
              }}
            />
          </Box>

          {user ? (
            ''
          ) : (
            <input
              id='feedback_textarea'
              className={`input ${style.input}`}
              placeholder={`${t('name')}`}
              name='name'
              required
              ref={register}
            />
          )}
          <textarea
            id='feedback_textarea'
            className='input'
            placeholder={`${t('feedback')}...`}
            rows='4'
            name='view'
            ref={register}
          />

          {review ? (
            <Alert
              variant='filled'
              severity='success'
              onClose={() => {
                setReview('')
              }}
            >
              {review}
            </Alert>
          ) : (
            ''
          )}
          {error ? (
            <Alert
              variant='filled'
              severity='error'
              onClose={() => {
                setError('')
              }}
            >
              {error}
            </Alert>
          ) : (
            ''
          )}

          <div className={style.btn_cont}>
            <Button type='submit' id='feedback_submit_btn'>
              {loading ? (
                <CircularProgress className={style.progress} color='inherit' />
              ) : (
                t('leave_feedback')
              )}
            </Button>
          </div>
        </form>
      </div>
      <div className={style.view_list}>
        {data &&
          data.map((item) => (
            <div className={style.view_card}>
              <div className={style.review_header}>
                <UserAvatar
                  size='50'
                  name={`${item.customer_name.split(' ')[0].toUpperCase()} ${
                    item.customer_name.split(' ')[1]?.toUpperCase() || ''
                  }`}
                />
                <div className={style.head_review}>
                  <div className={style.head_content}>
                    <p>{item.customer_name}</p>
                    <Rating
                      name='simple-controlled'
                      value={item.rate}
                      readOnly
                      id='feedback_rating_field'
                    />
                  </div>
                  <div className={style.date}>
                    {getLocaleDate(item.created_at)}
                  </div>
                </div>
              </div>
              <div className={style.review_text}>
                <p>{item.comment}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Feedback
