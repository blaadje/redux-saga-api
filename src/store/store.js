import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '../saga/saga'
import reducer from './reducers/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
  
)

sagaMiddleware.run(sagas)

export default store