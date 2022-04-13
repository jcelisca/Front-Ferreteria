import { actionTypes } from "../constants/actionTypes";

const initialState = {
    proveedores: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROVEEDOR:
            return { ...state, proveedores: action.payload };
        default:
            return state;
    }
}