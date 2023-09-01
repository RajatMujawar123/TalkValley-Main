import { combineReducers,legacy_createStore,compose,
    applyMiddleware } from "redux";
import {reducer as authReducer} from "./AuthRedux/reducer"
import thunk from "redux-thunk";


let rootReducer = combineReducers({authReducer})

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = legacy_createStore(
    rootReducer,
    composerEnhancer(applyMiddleware(thunk))
    )