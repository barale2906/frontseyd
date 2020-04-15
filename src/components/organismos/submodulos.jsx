import React from 'react'
import { NavLink } from "react-router-dom"


const Submodulos = () => {
    return (
        <>    
            <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/" >
                    Nombre del modulo actual
                </NavLink>
                
            </li>
            <div className="btn-group btn-group-sm">
                <button type="button" className="btn btn-info">Apple</button>
                
            </div>
         </>   
    )
}

export default Submodulos
