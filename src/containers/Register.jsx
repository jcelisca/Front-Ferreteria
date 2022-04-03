import { useState } from "react";
import firebaseApp from "../firebase/credentials"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);


const Register = () => {
    const firestore = getFirestore(firebaseApp);
    const [isRegistrando, setIsRegistrando] = useState(false);

    async function registrarUsuario(email, password) {
        const infoUsuario = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((usuarioFirebase) => {
            return usuarioFirebase;
        });

        console.log(infoUsuario.user.uid);
        const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
        setDoc(docuRef, { correo: email });
    }

    function submitHandler(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        console.log("submit", email, password);

        if (isRegistrando) {
            // registrar
            registrarUsuario(email, password);
        } else {
            // login
            signInWithEmailAndPassword(auth, email, password);
        }
    }

    return (
        <div className="abs-center">
            <h1>Wellcome</h1>
            <h2>{isRegistrando ? <p>Fill in the form below to create an account.</p> : "Inicia sesión"}</h2>
            <form className="form-login" onSubmit={submitHandler} >
                <div className="col-md-12">
                    <input type="email" className="form-control" id="email" placeholder="Email" required />
                    <div className="invalid-feedback">
                        Please provide a valid email.
                    </div>
                </div>
                <div className="col-md-12">
                    <br />
                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                    <div className="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                <div className="col-12">
                    <br />
                    <button className="btn btn-primary" type="submit"
                        onClick={() => setIsRegistrando(!isRegistrando)}>
                        {isRegistrando ? "Registrar" : "Iniciar sesión"}
                    </button>
                </div>
                <hr></hr>
                <button type="submit" onClick={() => setIsRegistrando(!isRegistrando)}>
                    {isRegistrando ? "Ya tienes cuenta? ¡inicia sesion!" : "Registrarse"}
                </button>
                <p>Already have an account? Login </p>
            </form>
        </div>
    );
}

export default Register;