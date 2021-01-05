import { cartActionTypes } from '../actions/cartActions/cartActionTypes'

const initialCartState = {
  cartItems: [],
  data: [
    {
      id: '1',
      availableQuantity: 5,
      price: '5490000',
      name: 'AirPods Max',
      img: '/images/airpods_max.jpg',
      colors: ['green', 'yellow', 'black'],
      slug: 'airpods-max',
      carouselData: [
        '/images/airpods_max.jpg',
        '/images/case.jpeg',
        '/images/homepod_mini.jpeg',
      ],
    },
    {
      id: '2',
      availableQuantity: 6,
      price: '990000',
      name: 'HomePod mini',
      img: '/images/homepod_mini.jpeg',
      colors: ['yellow', 'black'],
      slug: 'homepod',
      carouselData: [
        '/images/homepod_mini.jpeg',
        '/images/airpods_max.jpg',
        '/images/case.jpeg',
      ],
    },
    {
      id: '3',
      availableQuantity: 9,
      price: '490000',
      name: 'iPhone 12 Pro Max simple case',
      img: '/images/case.jpeg',
      colors: ['orange'],
      slug: 'iphone12-case',
      carouselData: [
        '/images/case.jpeg',
        '/images/homepod_mini.jpeg',
        '/images/airpods_max.jpg',
      ],
    },
    {
      id: '4',
      availableQuantity: 13,
      price: '850000',
      name: 'iPhone 12 mini Silicone case',
      img: '/images/silicone_case.jpeg',
      colors: ['plum'],
      slug: 'iphone12-silicone-case',
      carouselData: [
        '/images/silicone_case.jpeg',
        '/images/homepod_mini.jpeg',
        '/images/airpods_max.jpg',
      ],
    },
    {
      id: '5',
      availableQuantity: 25,
      price: '590000',
      name: 'iPhone Leather Wallet',
      img: '/images/wallet.jpeg',
      colors: ['brown'],
      slug: 'iphone-leather-waller',
      carouselData: [
        '/images/wallet.jpeg',
        '/images/homepod_mini.jpeg',
        '/images/airpods_max.jpg',
      ],
    },
  ],
}

const cartReducers = (state = initialCartState, action) => {
  const { payload } = action
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addNewProductToCart(state.cartItems, payload),
      }
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      }
    case cartActionTypes.REDUCE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}

function addNewProductToCart(cartItems, cartToAdd) {
  const isInCart = !!cartItems.find((cartItem) => cartItem.id === cartToAdd.id)
  if (isInCart) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartToAdd.id
        ? { ...cartToAdd, quantity: cartItem.quantity + 1 }
        : cartItem
    })
  }
  return [...cartItems, { ...cartToAdd, quantity: 1 }]
}

export default cartReducers
