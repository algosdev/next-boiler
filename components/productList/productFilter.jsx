import { useState } from 'react';
import {
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import style from './productList.module.scss';
import { Link, useTranslation } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
function ProductFilter({ showFilter, properties, brands }) {
  const [value, setValue] = useState([2000000, 9990000]);
  const handlePriceChange = (e, newValue) => {
    console.log(newValue);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { t } = useTranslation();
  console.log('>>>', brands);
  return (
    <div className={`${style.filterWrapper} ${!showFilter ? style.hide : ''}`}>
      <div
        className={`${style.filterContent} ${!showFilter ? style.hide : ''}`}
      >
        <div className={style.price}>
          <Typography variant='h6'>{t('price')}</Typography>
          <p>
            {numberToPrice(value[0])} &ndash; {numberToPrice(value[1])}
          </p>

          <Slider
            value={value}
            onChangeCommitted={handlePriceChange}
            onChange={handleChange}
            max={9990000}
            track={false}
            min={2000000}
            aria-labelledby='range-slider'
          />
        </div>
        <div className={style.brand}>
          <Typography variant='h6'>{t('brand')}</Typography>
          {brands?.brands.map((brand, index) => (
            <div className={style.filter_item} key={index}>
              <FormControlLabel
                control={<Checkbox name={brand.slug} />}
                label={brand.name}
              />
            </div>
          ))}
          {/* <div className={style.filter_item}>
            <FormControlLabel
              control={<Checkbox name='gilad' />}
              label='Apple'
            />
          </div>
          <div className={style.filter_item}>
            <FormControlLabel
              control={<Checkbox name='gilad' />}
              label='Samsung'
            />
          </div> */}
          {/* <div className={style.filter_item}>
            <FormControlLabel control={<Checkbox />} label='Xiaomi' />
          </div> */}
        </div>
        <div className={style.color}>
          <Typography variant='h6'>Цвет</Typography>
          <div className={style.filter_item}>
            <FormControlLabel control={<Checkbox />} label='Черный' />
          </div>
          <div className={style.filter_item}>
            <FormControlLabel control={<Checkbox />} label='Синий' />
          </div>
          <div className={style.filter_item}>
            <FormControlLabel control={<Checkbox />} label='Красный' />
          </div>
          <div className={style.filter_item}>
            <FormControlLabel control={<Checkbox />} label='Серый' />
          </div>
          <div className={style.filter_item}>
            <FormControlLabel control={<Checkbox />} label='Коричневый' />
          </div>
          <div className={style.filter_item}>
            <FormControlLabel control={<Checkbox />} label='Белый' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
