import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Login from './paginas/Login'
import Register from './paginas/Register'
import Usuarios from './paginas/Usuarios'
import Usuario from './paginas/Usuario'
import Empresas from'./paginas/Empresas'
import Empresa from'./paginas/Empresa'
import Protected from './routes/Protected'
import Public from './routes/Public'
import Page404 from './paginas/Page404'
import Header from './organismos/Header'
  

const App = () => (

  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/usus" exact component={Usuarios} />
      <Protected path="/usu/:id"  component={Usuario} />
      <Protected path="/emps" exact component={Empresas} />
      <Protected path="/emp/:id"  component={Empresa} />

      <Public path="/login" exact component={Login} />
      <Public path="/registro" exact component={Register} />

      <Route component={Page404} />


    </Switch>
  </Router>

)

export default App;
