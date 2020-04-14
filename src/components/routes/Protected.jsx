import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({ component: Component, ...rest }) => {

  const userLogged = sessionStorage.getItem('csab')

  if( !userLogged ){
    return ( <Redirect to="/login" /> )
  }

  return <Route {...rest} render={Component} />

  
}

export default Protected

