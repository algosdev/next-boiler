import React, { useState } from 'react'
import style from './productSingleCarousel.module.scss'
import { Container } from '@material-ui/core'
import Lightbox from 'react-image-lightbox'
const carouselData = [
  '/images/airpods_max.jpg',
  '/images/case.jpeg',
  '/images/homepod_mini.jpeg',
]
function ProductSingleCarousel() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)
  console.log(photoIndex)
  return (
    <>
      <div className={style.wrapper}>
        <Container>
          <div className={style.carousel}>
            <div className={style.main_slide}>
              <div
                className={style.img_cont}
                onClick={() => {
                  // setPhotoIndex(photoIndex)
                  setIsLightBoxOpen(true)
                }}
              >
                <img src={carouselData[photoIndex]} alt='AirPods Max' />
              </div>
            </div>
            <div className={style.thumb_slide}>
              {carouselData.map((el, ind) => (
                <div
                  key={ind}
                  className={`${style.img_cont} ${
                    photoIndex === ind ? style.active : ''
                  }`}
                  onClick={() => {
                    setPhotoIndex(ind)
                  }}
                >
                  <img src={el} alt='AirPods Max' />
                </div>
              ))}
              {/* <div
                className={style.img_cont}
                onClick={() => {
                  setPhotoIndex(photoIndex)
                  setIsLightBoxOpen(true)
                }}
              >
                <img src={carouselData[photoIndex]} alt='AirPods Max' />
              </div> */}
            </div>
          </div>
        </Container>
      </div>
      {isLightBoxOpen && (
        <Lightbox
          mainSrc={carouselData[photoIndex]}
          nextSrc={carouselData[(photoIndex + 1) % carouselData.length]}
          prevSrc={
            carouselData[
              (photoIndex + carouselData.length - 1) % carouselData.length
            ]
          }
          onCloseRequest={() => setIsLightBoxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex) =>
                (photoIndex + carouselData.length - 1) % carouselData.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              (photoIndex) => (photoIndex + 1) % carouselData.length
            )
          }
        />
      )}
    </>
  )
}

export default ProductSingleCarousel
