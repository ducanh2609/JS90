import { combineReducers } from 'redux'
import { counter } from '../reducers/countReducers'
import { computerList } from '../reducers/computerReducers'

export default combineReducers({
    counter, computerList
})