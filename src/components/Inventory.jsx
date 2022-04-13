import Table from "../containers/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInventario } from "../redux/actions/index";
import { COLUMNS } from "../columns";

const Inventory = () => {

    const dispatch = useDispatch();
    const inventario = useSelector(state => state.data.inventario);

    useEffect(() => {
        dispatch(getInventario());
        console.log(inventario);
    }, []);


    return (
        <div>
            <Table COLUMNS={COLUMNS} info={inventario}/>
            <div>
                <button type="button" className="btn btn-primary">
                    Agregar inventario
                </button>
            </div>
        </div>
    );
}

export default Inventory;