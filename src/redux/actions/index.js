import { actionTypes } from '../constants/actionTypes';
const url = 'https://app-ferreteria-raul-v2.herokuapp.com';

export const getInventario = () => async (dispatch, getState) => {
    try {
        const response = await fetch(url+'/inventario');
        const data = await response.json();
        dispatch({
            type: actionTypes.GET_INVENTARIO,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getClientes = () => async (dispatch, getState) => {
    try {
        const response = await fetch(url+'/cliente');
        const data = await response.json();
        dispatch({
            type: actionTypes.GET_CLIENTES,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getProveedores = () => async (dispatch, getState) => {
    try {
        const response = await fetch(url+'/proveedor');
        const data = await response.json();
        dispatch({
            type: actionTypes.GET_PROVEEDOR,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}