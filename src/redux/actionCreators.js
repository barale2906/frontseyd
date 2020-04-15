import Axios from "axios"

import { 
  GET_ALL_USUARIOS, 
  GET_ALL_EMPRESAS, 
  GET_USUARIO, 
  GET_EMPRESA, 
  GET_ALL_MODULOS,
  GET_MODULO
} from "./actions"
import { servidor } from "../components/routes/servidor"


//const API_URL = process.env.REACT_APP_API_URL
const API_URL = servidor

export const getAllUsuarios = () => dispatch => {
  Axios.get(`${API_URL}/users`)
  .then(resp=> {
      return dispatch({
        type: GET_ALL_USUARIOS,
        usuarios: resp.data
      })
    }
  )
}

export const getUsuario = id => dispatch => {
  Axios.get(`${API_URL}/users/${id}`)
  .then(resp=> {
      return dispatch({
        type: GET_USUARIO,
        usuario: resp.data
      })
    }
  )
}

export const getAllEmpresas = () => dispatch => {
  Axios.get(`${API_URL}/empresas`)
  .then(resp=> {
      return dispatch({
        type: GET_ALL_EMPRESAS,
        empresas: resp.data
      })
    }
  )
}

export const getEmpresa = id => dispatch => {
  Axios.get(`${API_URL}/empresas/${id}`)
  .then(resp=> {
      return dispatch({
        type: GET_EMPRESA,
        empresa: resp.data
      })
    }
  )
}

export const getAllModulos = () => dispatch => {
  Axios.get(`${API_URL}/modulos`)
  .then(resp=> {
      return dispatch({
        type: GET_ALL_MODULOS,
        modulos: resp.data
      })
    }
  )
}

export const getModulo = id => dispatch => {
  Axios.get(`${API_URL}/modulos/${id}`)
  .then(resp=> {
      return dispatch({
        type: GET_MODULO,
        modulo: resp.data
      })
    }
  )
}

