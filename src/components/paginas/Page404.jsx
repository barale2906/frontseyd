import React from 'react'
import elmio from '../../styles/elmio.css'
import logogif from '../../img/gift404.gif'
import { Link } from "react-router-dom"


const Page404 = () => (

    <>
        <link rel="icon" href="../../img/logi.ico" />
        <div className="container">
            <div className="row justify-content-center pt-5 mt-5 mr-1 formula404">
                <div class="card card404" >
                    <img src={logogif} class="card-img-top" alt="Figura de transición"/>
                    <div class="card-body text-center cardbody404">
                        <h5 class="card-title text-black">¡Upps, lo sentimos!</h5>
                        <p class="card-text">Eso que buscas no esta disponible, pero podemos ver el mundo de posibilidades con el que contamos.</p>
                        <Link className="navbar-brand" to="/">
                            <span className="olvide404">¡¡Vamos!!</span>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </div> 

    </>
    
)
   


export default Page404
