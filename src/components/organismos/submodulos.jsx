import React from 'react'
import { NavLink } from "react-router-dom"


const Submodulos = () => {
    return (
        <>    
            <li class="nav-item">
                <NavLink class="nav-link text-uppercase" to="/" >
                    Nombre del modulo actual
                </NavLink>
                
            </li>
            <div class="btn-group btn-group-sm">
                <button type="button" className="btn btn-info">Apple</button>
                
            </div>
         </>   
    )
}

export default Submodulos
