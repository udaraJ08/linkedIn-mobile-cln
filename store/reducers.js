import { combineReducers } from 'redux'
import loginReducer from '../views/Login/reducer'
import tourReducer from '../views/Tour/reducer'
import postReducer from '../views/Post/reducer'

const rootReducer = combineReducers({
    loginReducer,
    tourReducer,
    postReducer
})

export default rootReducer;