import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { 
  empresaReducer, 
  usuarioReducer,
  moduloReducer 
} from "./reducers"


export default createStore(

  combineReducers({

    usuarioReducer,
    empresaReducer,
    moduloReducer
    

}),
  composeWithDevTools(applyMiddleware(thunk))
  
)
