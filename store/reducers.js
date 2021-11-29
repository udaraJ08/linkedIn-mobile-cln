import { combineReducers } from 'redux'
import loginReducer from '../views/Login/reducer'
import tourReducer from '../views/Tour/reducer'
import postReducer from '../views/Post/reducer'
import feedReducer from '../views/Feed/reducer'

const rootReducer = combineReducers({
    loginReducer,
    tourReducer,
    postReducer,
    feedReducer
})

export default rootReducer;