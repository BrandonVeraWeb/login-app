import { useAuth } from "../context/authContext"
import { updatePassword, getAuth, EmailAuthCredential } from "firebase/auth"
// import { getAuth, updatePassword } from "firebase/auth";

// const auth = getAuth();

// const user = auth.currentUser;
// const newPassword = getASecureRandomPassword();

// updatePassword(user, newPassword).then(() => {
//   // Update successful.
// }).catch((error) => {
//   // An error ocurred
//   // ...
// });

export function PasswordChange() {
    const { user, setLoading, setModal, modal, Login } = useAuth()
    const currentUser = useAuth()

    const handleUpdate = (newPassword) => {
        console.log(currentUser)

        updatePassword(currentUser, newPassword)
            .then(() => {
                console.log(
                    "Password actualizada para el usuario: ",
                    currentUser,
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let passDescripcion = document.querySelector("#txtOldPassword")
        passDescripcion.value = ""
        let passDescripcionN = document.querySelector("#txtNewPassword")
        passDescripcionN.value = ""
        let passeDescripcion = document.querySelector("#txtNewPasswordConfirm")
        passeDescripcion.value = ""

        await Login(user.email, user.password).then(() => {
            // If textfields (inputs) valid
            handleUpdate(passDescripcionN)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <>
                <div className="w-full max-w-xs m-auto">
                    <label className="block text-gray-700 text-sm font-bold my-2"></label>
                    <input
                        id="txtOldPassword"
                        className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
                        type="password"
                        placeholder="Old Password"
                    />
                    <label className="block text-gray-700 text-sm font-bold my-2"></label>
                    <input
                        id="txtNewPassword"
                        className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
                        type="password"
                        placeholder="New Password"
                    />
                    <label className="block text-gray-700 text-sm font-bold my-2"></label>
                    <input
                        id="txtNewPasswordConfirm"
                        className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
                        type="password"
                        placeholder="Confirm new Password"
                    />
                    <button
                        type="submit"
                        className=" mt-5 rounded px-4 py-2 ml-0 text-white bg-blue-500"
                    >
                        Guardar Cambios
                    </button>
                </div>
            </>
        </form>
    )
}

export default PasswordChange
