import { combineReducers } from 'redux'
import datas from './getDatas'
import submit from './submitDatas'

const rootReducer = combineReducers({datas, submit})
export default rootReducer