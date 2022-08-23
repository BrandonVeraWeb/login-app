import { useAuth } from '../context/authContext'

const Texto = () => {
    const { user } = useAuth();
    console.log("User desde textoL: ", user);
    return (
        <>
            <p>Hola Bienvenido Usuario {user.email}</p>
        </>
    );
}

export default Texto;