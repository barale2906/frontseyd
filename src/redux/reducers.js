import { GET_ALL_USUARIOS, GET_USUARIO, GET_ALL_EMPRESAS, GET_EMPRESA } from "./actions"

export const usuarioReducer = (state = {}, action) => {
  if(action.type === GET_ALL_USUARIOS){
    return {
      ...state,
      usuarios: action.usuarios
    }
  }

  if(action.type === GET_USUARIO){
    return{
      ...state,
      usuario: action.usuario
    }
  }
  
  return state
}

export const empresaReducer = (state = {}, action) => {
  if(action.type === GET_ALL_EMPRESAS){

    return{
      ...state,
      empresas: action.empresas
    }

  }

  if(action.type === GET_EMPRESA){
    return{
      ...state,
      empresa: action.empresa
    }
  }
  
  return state
}
