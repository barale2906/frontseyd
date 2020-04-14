import React from 'react'
import elmio from '../../styles/elmio.css'
import logo from '../../img/Logo_SEYD.jpg'
import { servidor } from "../routes/servidor"
import Axios from 'axios'
import { Link } from "react-router-dom"

const registration = e =>{

    e.preventDefault()

    const form = e.target

    const data ={
     

        //"nit": form.nit.value,
        "usu_usuario": form.usuario.value,
        "name": form.nombre.value,
        "email": form.correo.value,
        "password": form.contrasena.value
    }

    Axios.post(`${servidor}/register`, data)
    .then(r =>{

      alert("Usuario Creado Satisfactoriamente")  
      sessionStorage.setItem('csab',r.data.token)
      window.location="/"

    })
    .catch(()=>alert("Error al crear usuario"))
    window.location="/register"

}

const Registro = () => (
    <>
        <title>CREAR CUENTA</title>
        <div className="container">
            <div className="row justify-content-center pt-5 mt-5 mr-1">
                <div className="col-md-4 col-sm-6 col-xl-4 col-lg-4 formula">
                    <form onSubmit={registration.bind()}>
                        <div className="form group text-center pt-3 ">
                            <h1 className="text-light text-uppercase">Crea tu Cuenta</h1>
                        </div>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="SOMOS ENVIOS Y DILIGENCIAS S.A.S."/>
                        </div>
                        <div className="form-group mx-sm-4 pt-3">
                            <label>Usuario: <small className="text-warning">(Número de documento)</small></label>
                            <input type="number" className="form-control" name="usuario" placeholder="Ingrese su documento" required />
                        </div>
                        <div className="form-group mx-sm-4 pt-3">
                            
                            <input type="text" className="form-control" name="nombre" placeholder="Ingrese su nombre" required />
                        </div>
                        <div className="form-group mx-sm-4 pt-3">
                            <label>Correo Electrónico: <small className="text-warning">(Con el que ingresará al sistema)</small></label>
                            <input type="email" className="form-control" name="correo" placeholder="Ingrese correo electronico" required />
                        </div>
                        <div className="form-group mx-sm-4 pt-3">
                            <input type="password" className="form-control" name="contrasena" placeholder="Contraseña" required />
                        </div>
                        <div className="form-group mx-sm-4 pt-3">
                            <label>NIT Empresa: <small className="text-warning">(sin puntos, ni comas y sin DV)</small></label>
                            <input type="number" className="form-control" name="nit" placeholder="Ingrese nit de su empresa sin DV" required />
                        </div>
                        <div className="form-group mx-sm-4 pb-2">
                            <input type="submit" className="btn btn-block ingresar" value="INGRESAR" />
                        </div>
                        <div className="form-group text-center">
                            
                            <Link className="navbar-brand" to="/login">
                            <span className="olvide1">Ir a Login</span>
                            </Link>
                                
                        </div>
                        
                    </form>        
                </div>
            </div>
        </div>
    </>
    
)

export default Registro
