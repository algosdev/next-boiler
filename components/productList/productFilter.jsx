import { useEffect, useState } from 'react'
import {
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import style from './productList.module.scss'
import { useTranslation } from '../../i18n'
import { numberToPrice } from '../../lib/numberToPrice'

function ProductFilter({
  showFilter,
  properties,
  brands,
  setFilter,
  filters,
  value,
}) {
  const [val, setVal] = useState(value)

  useEffect(() => {
    setVal(value)
  }, [value])

  const handlePriceChange = (e, newValue) => {
    setFilter({ ...filters, priceRange: newValue })
  }

  const handleChange = (event, newValue) => {
    setVal(newValue)
  }

  const { t } = useTranslation()

  const hadleChangeBrand = (e) => {
    const isEmpty = filters.brand.includes(e.target.value)
    if (isEmpty) {
      const newFilter = filters.brand.filter((item) => item !== e.target.value)
      setFilter({ ...filters, brand: [...newFilter] })
    } else {
      setFilter({ ...filters, brand: [...filters.brand, e.target.value] })
    }
  }

  const handleChangePropery = (id, val) => {
    const addNewProp = []

    const newProperties = filters.properties.find(
      (item) => item.property_id === id
    )

    if (newProperties) {
      const values = newProperties.value.split(',')
      if (values.includes(val)) {
        if (values.length < 2) {
          filters.properties.map((item) => {
            if (item.property_id !== id) {
              addNewProp.push(item)
            }
          })
          setFilter({
            ...filters,
            properties: addNewProp,
          })
        } else {
          filters.properties.map((item) => {
            if (item.property_id === id) {
              const items = item.value.split(',').filter((item) => item !== val)
              item.value = items.join(',')
              addNewProp.push(item)
            } else {
              addNewProp.push(item)
            }
          })
          setFilter({
            ...filters,
            properties: addNewProp,
          })
        }
      } else {
        filters.properties.map((item) => {
          if (item.property_id === id) {
            item.value = `${item.value},${val}`
            addNewProp.push(item)
          } else {
            addNewProp.push(item)
          }
        })
        setFilter({
          ...filters,
          properties: addNewProp,
        })
      }
    } else {
      setFilter({
        ...filters,
        properties: [...filters.properties, { property_id: id, value: val }],
      })
    }
  }

  return (
    <div className={`${style.filterWrapper} ${!showFilter ? style.hide : ''}`}>
      <div
        className={`${style.filterContent} ${!showFilter ? style.hide : ''}`}
      >
        {value.length > 0 ? (
          <div className={style.price}>
            <Typography variant='h6'>{t('price')}</Typography>
            {val.length > 0 ? (
              <p>
                {numberToPrice(val[0]) + ' ' + t('soum')} &ndash;
                {numberToPrice(val[1]) + ' ' + t('soum')}
              </p>
            ) : (
              ''
            )}
            <Slider
              value={val}
              onChangeCommitted={handlePriceChange}
              onChange={handleChange}
              max={value[1]}
              track={false}
              min={value[0]}
              aria-labelledby='range-slider'
            />
          </div>
        ) : (
          ''
        )}
        <div className={style.brand}>
          <Typography variant='h6'>{t('brand')}</Typography>
          {brands?.brands?.map((brand, index) => (
            <div className={style.filter_item} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={brand.slug}
                    value={brand.id}
                    onChange={hadleChangeBrand}
                    checked={filters.brand.includes(brand.id)}
                  />
                }
                label={brand.name}
              />
            </div>
          ))}
        </div>
        {properties?.product_properties?.map((property, index) => (
          <div className={style.color} key={index}>
            <Typography variant='h6'>{property.name}</Typography>
            {property.options.map((opt, ind) => (
              <div className={style.filter_item} key={ind}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        handleChangePropery(property.id, e.target.value)
                      }}
                      value={opt.value}
                    />
                  }
                  label={opt.name}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductFilter
