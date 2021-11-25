import { combineReducers } from 'redux'
import loginReducer from '../views/Login/reducer'
import tourReducer from '../views/Tour/reducer'

const rootReducer = combineReducers({
    loginReducer, tourReducer
})

export default rootReducer;