import { combineReducers, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cart from './reducers/cart';
import delivery from './reducers/delivery';
import payment from './reducers/payment';

const reducers = combineReducers({
  cart,
  delivery,
  payment,
});
const persistConfig = {
  key: 'jakmall-frontend-test',
  storage,
  whitelist: ['delivery', 'payment'],
};

const composeEnhancer =
  // eslint-disable-next-line no-undef
  (process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
  compose;

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeEnhancer());
const persistor = persistStore(store);

export { reducers, persistedReducer, persistor };

export default store;
