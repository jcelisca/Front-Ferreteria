import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducerInventario from "./reducerInventario";
import reducerCliente from "./reducerCliente";
import reducerProveedor from "./reducerProveedor";

const mainReducer = combineReducers({
    data: reducerInventario,
    client: reducerCliente,
    prov: reducerProveedor
});

export default createStore(
    mainReducer,
    applyMiddleware(thunk)
);