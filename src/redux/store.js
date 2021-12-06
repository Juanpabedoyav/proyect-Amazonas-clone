import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {loginReducer} from '../redux/reducers/loginReducer'
import {registroReducer} from '../redux/reducers/registroReducer'
import thunk from 'redux-thunk';
import { getDataReducer } from './reducers/getDataReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers= combineReducers({
login: loginReducer,
data: getDataReducer
})



export const store = createStore(
   reducers,
   composeEnhancers(
   applyMiddleware(thunk)
   )
)




