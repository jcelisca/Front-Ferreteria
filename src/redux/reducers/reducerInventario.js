import { actionTypes } from "../constants/actionTypes";

const initialState = {
    inventario: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INVENTARIO:
            return { ...state, inventario: action.payload };
        default:
            return state;
    }
}