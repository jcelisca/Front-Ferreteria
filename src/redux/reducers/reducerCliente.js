import { actionTypes } from "../constants/actionTypes";

const initialState = {
    clientes: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CLIENTES:
            return { ...state, clientes: action.payload };
        default:
            return state;
    }
}