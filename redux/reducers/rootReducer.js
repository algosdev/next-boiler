import { combineReducers } from 'redux'
import cartReducers from './cartReducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['user'],
// }

const rootReducer = combineReducers({
  cart: cartReducers,
})

export default persistReducer(rootPersistConfig, rootReducer)
