import React from 'react'
import elmio from '../../styles/elmio.css'
import logo from '../../img/Logo_SEYD.jpg'
import Axios from 'axios'
import { servidor } from "../routes/servidor"
import { Link } from "react-router-dom"


const authentication = e =>{
    e.preventDefault()
    const form = e.target
   

    const data ={

        "email": form.email.value,
        "password": form.contrasena.value

    }
    console.log(data)

    Axios.post(`${servidor}/login`, data)
    .then(r =>{

        
        sessionStorage.setItem('csab',r.data.token)
        window.location="/"

    })
    .catch(e=>console.log(e))

        


}

const Login = () => (
    <>
        <title>INGRESA</title>
        <div className="container">
            <div className="row justify-content-center pt-5 mt-5 mr-1">
                <div className="col-md-6 col-sm-8 col-xl-4 col-lg-5 formula">
                    <form onSubmit={authentication.bind()}>
                        <div className="form group text-center pt-3 ">
                            <h1 className="text-light">Iniciar Sesión</h1>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="SOMOS ENVIOS Y DILIGENCIAS S.A.S."/>
                        </div>
                        
                        <div className="form-group mx-sm-4 pt-3">
                            <label>Correo Electrónico:</label>
                            <input type="email" name="email" className="form-control" placeholder="Ingrese su correo" required />
                        </div>
                        <div className="form-group mx-sm-4 pb-3">
                            <label>Contraseña:</label>
                            <input type="password" name="contrasena" className="form-control" placeholder="Contraseña" required />
                        </div>
                        <div className="form-group mx-sm-4 pb-2">
                            <input type="submit" className="btn btn-block ingresar" value="INGRESAR" />
                        </div>
                        <div className="form-group mx-sm-4 text-right">
                            <span><a href="#" className="olvide">Olvide mi Contraseña</a></span>
                        </div>
                        <div className="form-group text-center">
                            
                            <Link className="navbar-brand" to="/registro">
                            <span className="olvide1">Registrarse</span>
                            </Link>
                                
                        </div>
                    </form>        
                </div>
            </div>
        </div>
    </>
    
)

export default Login
