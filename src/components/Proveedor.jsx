import Table from "../containers/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProveedores } from "../redux/actions/index";
import { COLUMNSP } from "../columns";

const Proveedor = () => {

    const dispatch = useDispatch();
    const proveedor = useSelector(state => state.prov.proveedores);

    useEffect(() => {
        dispatch(getProveedores());
        console.log(proveedor);
    }, []);

    return (
        <div>
            <Table COLUMNS={COLUMNSP} info={proveedor}/>
            <div>
                <button type="button" className="btn btn-primary">
                    Agregar proveedor
                </button>
            </div>
        </div>
     );
}

export default Proveedor;