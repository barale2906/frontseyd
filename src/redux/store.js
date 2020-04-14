import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { 
  empresaReducer, 
  usuarioReducer 
} from "./reducers"


export default createStore(

  combineReducers({

    usuarioReducer,
    empresaReducer
    

}),
  composeWithDevTools(applyMiddleware(thunk))
  
)
