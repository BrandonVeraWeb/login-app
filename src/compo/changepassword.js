import { updatePassword, getAuth, signOut } from "firebase/auth"
import React, { useState } from "react"
import { customForm } from "../utils"
import { auth } from "../firebase"

// function customForm(event) {
//     event.preventDefault();

// }

function PasswordChange() {
    const logout = () => signOut(auth)
    const handleSubmit = (event) => {
        const auth = getAuth()
        const user = auth.currentUser
        const updatePasswordForm = customForm(event)
        const newPasswordCurrent = updatePasswordForm.get("newPasswordCurrent")
        const newPasswordConfirm = updatePasswordForm.get("newPasswordConfirm")
        // const oldPassword = updatePasswordForm.get("oldPassword") // Verificar que las dos newPassword sean iguales sino error

        // if (x !== oldPassword) {
        //     return alert("tu password no es igual a la actual")
        // }

        if (newPasswordCurrent !== newPasswordConfirm) {
            return alert("Las password no son iguales")
        }
        // if (oldPassword === newPasswordCurrent) {
        //     return alert("Tu password no puede ser igual a la anterior")
        // }
        // Verificar que la old password y new password sean diferente sino error

        updatePassword(user, newPasswordCurrent)
            .then(() => {
                alert("Password Was Change")
                try {
                    logout()
                } catch (error) {
                    console.error(error)
                }
            })
            .catch((error) => {
                try {
                    alert("Debes iniciar sesion para cambiar tu password")
                    logout()
                } catch (error) {}
                console.log(error)
                console.log("Hay un problema")
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <>
                <div className="w-full max-w-xs m-auto">
                    <label className="block text-gray-700 text-sm font-bold my-2"></label>
                    {/* <input
                        className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
                        type="password"
                        placeholder="Old-Password"
                        name="oldPassword"
                        required
                    /> */}
                    <label className="block text-gray-700 text-sm font-bold my-2"></label>
                    <input
                        className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
                        type="password"
                        placeholder="New-Password"
                        required
                        name="newPasswordCurrent"
                    />
                    <label className="block text-gray-700 text-sm font-bold my-2"></label>
                    <input
                        id="txtNewPasswordCurrent"
                        className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
                        type="password"
                        placeholder="New-Password-Confirm"
                        required
                        name="newPasswordConfirm"
                    />
                    <label className="block text-gray-700 text-sm font-bold my-2"></label>
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

// export function PasswordChange() {
//     const { setLoading, setModal, modal, Login } = useAuth()
//     const auth = getAuth()
//     const cred = auth.currentUser
//     const [newPassword, setNewPassword] = useState({
//         newPassword: "",
//     })
//     const [oldPassword, setOldPassword] = useState({
//         oldPassword: "",
//     })

//     const handleChangePassword = ({ target: { name, value } }) =>
//         setOldPassword({ ...oldPassword, [name]: value })

//     const handleChange = ({ target: { name, value } }) =>
//         setNewPassword({ ...newPassword, [name]: value })

//     console.log(oldPassword)
//     console.log(newPassword)
//     const handleUpdate = async (e) => {
//         updatePassword(cred, newPassword)
//             .then(() => {
//                 console.log("Password actualizada para el usuario: ")
//             })
//             .catch((error) => {
//                 console.log(error)
//                 console.log("no funciono esa monda")
//             })
//     }

//     return (
//         <form onSubmit={handleUpdate}>
//             <>
//                 <div className="w-full max-w-xs m-auto">
//                     <label className="block text-gray-700 text-sm font-bold my-2"></label>
//                     <input
//                         id="txtOldPassword"
//                         className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
//                         type="password"
//                         placeholder="Old Password"
//                         name="oldPassword"
//                         required
//                         onChange={handleChangePassword}
//                     />
//                     <label className="block text-gray-700 text-sm font-bold my-2"></label>
//                     <input
//                         id="txtNewPassword"
//                         className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
//                         type="password"
//                         name="newPassword"
//                         placeholder="New Password"
//                         onChange={handleChange}
//                         required
//                     />
//                     <label className="block text-gray-700 text-sm font-bold my-2"></label>

//                     <button
//                         type="submit"
//                         className=" mt-5 rounded px-4 py-2 ml-0 text-white bg-blue-500"
//                     >
//                         Guardar Cambios
//                     </button>
//                 </div>
//             </>
//         </form><form onSubmit={handleUpdate}>
//             <>
//                 <div className="w-full max-w-xs m-auto">
//                     <label className="block text-gray-700 text-sm font-bold my-2"></label>
//                     <input
//                         id="txtOldPassword"
//                         className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
//                         type="password"
//                         placeholder="Old Password"
//                         name="oldPassword"
//                         required
//                         onChange={handleChangePassword}
//                     />
//                     <label className="block text-gray-700 text-sm font-bold my-2"></label>
//                     <input
//                         id="txtNewPassword"
//                         className="display:block;shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline mt-5"
//                         type="password"
//                         name="newPassword"
//                         placeholder="New Password"
//                         onChange={handleChange}
//                         required
//                     />
//                     <label className="block text-gray-700 text-sm font-bold my-2"></label>

//                     <button
//                         type="submit"
//                         className=" mt-5 rounded px-4 py-2 ml-0 text-white bg-blue-500"
//                     >
//                         Guardar Cambios
//                     </button>
//                 </div>
//             </>
//         </form>
//     )
// }

export default PasswordChange
