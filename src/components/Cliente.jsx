import Table from "../containers/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientes } from "../redux/actions/index";
import { COLUMNSU } from "../columns";

const Cliente = () => {

    const dispatch = useDispatch();
    const cliente = useSelector(state => state.client.clientes);

    useEffect(() => {
        dispatch(getClientes());
        console.log(cliente);
    }, []);

    return (
        <div>
            <Table COLUMNS={COLUMNSU} info={cliente}/>
            <div>
                <button type="button" className="btn btn-primary">
                    Agregar cliente
                </button>
            </div>
        </div>
     );
}

export default Cliente;