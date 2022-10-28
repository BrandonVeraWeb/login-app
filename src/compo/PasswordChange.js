import React, { useState } from "react"
import { getAuth, updatePassword, signOut } from "firebase/auth"
import { Navigate, useNavigate } from "react-router-dom"
export function PasswordChange() {
    const navigate = useNavigate()
    const logout = () => signOut(auth)
    const [passwordNew, setPasswordNew] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const handleChange = (e) => {
        setPasswordNew(e.target.value)
    }
    const handleChangeConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }
    const auth = getAuth()

    const user = auth.currentUser
    const newPassword = passwordNew
    const handleBack = () => {
        navigate("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newPassword !== passwordConfirm) {
            return alert("TUS PASSWORD NO SON IGUALES")
        }
        updatePassword(user, newPassword)
            .then(() => {
                alert("passwordChange")
                try {
                    logout()
                } catch (error) {
                    console.log(error)
                }
            })
            .catch((error) => {
                alert("no funciona")
                console.log(error)
            })
    }

    return (
        <>
            <div className=" bg-sky-700 opacity-100 fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="bg-gray-100 flex-col justify-center bg-white py-12 px-24 border-4 border-sky-900 rounded-xl">
                        <div className="block text-gray-700 text-lg font-bold my-2 pb-5 mb-5 ">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-gray-100 border-2 shadow-md rounded px-8 pt-6 pb-8mb-4"
                            >
                                <label className="block text-gray-700 font-bold">
                                    <div className="mb-4">
                                        {" "}
                                        NEW PASSWORD
                                        <input
                                            type="password"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={passwordNew}
                                            onChange={handleChange}
                                            required
                                        ></input>
                                    </div>
                                </label>
                                <label className="block text-gray-700 font-bold">
                                    {" "}
                                    NEW PASSWORD CONFIRM
                                    <input
                                        type="password"
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                                        value={passwordConfirm}
                                        onChange={handleChangeConfirm}
                                    ></input>
                                </label>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
                                    type="submit"
                                >
                                    Guardar Cambios
                                </button>
                                <button
                                    onClick={handleBack}
                                    className="bg-red-500 hover:bg-red-700 text-white shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full mb-4 mt-1"
                                >
                                    Back
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordChange
