import {applyMiddleware, legacy_createStore } from "redux" 
import thunk from "redux-thunk"
import {UserReducer} from "./reducer"
 


const store = legacy_createStore(UserReducer ,applyMiddleware(thunk))

export {store}
