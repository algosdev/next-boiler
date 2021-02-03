import { combineReducers } from 'redux'
import cartReducers from './cartReducers'
import authReducer from './authReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  cart: cartReducers,
  auth: persistReducer(authPersistConfig, authReducer),
})

export default persistReducer(rootPersistConfig, rootReducer)
