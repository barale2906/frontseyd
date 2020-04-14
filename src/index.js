import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './includes/bootstrap'
import { Provider } from 'react-redux'
import store from './redux/store'
import { getAllUsuarios } from './redux/actionCreators'

store.dispatch(getAllUsuarios())

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>
  , document.getElementById('root')
);
