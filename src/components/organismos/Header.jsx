import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoenc, imausu } from '../Rutaima'
import Submodulos from './submodulos'
import { servidor } from '../routes/servidor'
import Axios from 'axios'

const cerrarSesion = () =>{
  Axios.get(`${servidor}/logout`)
  .then(r =>{

      
      sessionStorage.removeItem('csab')
      window.location="/login"

  })
  .catch(e=>console.log(e))
}

const Header = ({home}) => {

  if(home){
    return(
      <>
              <div class="jumbotron jumbotron-fluid alert-info">
                  <div class="container text-center">
                      <h1>Bienvenido(a) XXXX a nuestra plataforma</h1>
                      <p>Por favor seleccione el modulo que requiera.</p>
                  </div>
              </div>
  
            
                  <div className ="card-columns">
  
                    
                  </div>
      </>   
    )
  
  }
  return(
    <>

           
       
            <header>
            
            
                
                    <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src={logoenc}
                            alt="SOMOS ENVIOS Y DILIGENCIAS S.A.S."
                            className="card-img-top img-fluid menu-bar rounded"

                        />
                    </NavLink> 
                    
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            
                            <li class="nav-item dropdown">
                                <NavLink class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" to="/" >
                                    <span class="navbar-toggler-icon"></span>
                                </NavLink>
                                
                                

                                <div class="dropdown-menu">

                                    
                                    
                                </div>
                            </li>
                            <Submodulos />
                            
                            </ul>
                            <ul className="navbar-nav ">
                                <li class="nav-item dropdown">
                                    <NavLink to="/" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img   
                                        src={imausu} 
                                        className="rounded-circle" 
                                        alt="Foto del usuario"
                                    /> CUENTA
                                    </NavLink>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        
                                    <NavLink className="dropdown-item" to="/">Notificaciones</NavLink>
                                    <NavLink className="dropdown-item" to="/">Mi Cuenta</NavLink>
                                    <NavLink className="dropdown-item" to="/">Cambio Empresa</NavLink>
                                    <NavLink className="dropdown-item" to="/"><span onClick={()=>cerrarSesion()}>Cerrar Sesión</span></NavLink>   
                                    
                                    </div>
                                </li>
                                
                            </ul>
                            
                        </div>
                    
                        </nav>
                
            </header> 
            
        </>
  )
  
}

  



export default Header
