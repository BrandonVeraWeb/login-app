import React, { useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { Alert } from "./Alert"
export function DisplayName() {
    const navigate = useNavigate()
    const [newDisplayName, setNewDisplayName] = useState()
    const auth = getAuth()
    const handleChange = (e) => {
        setNewDisplayName(e.target.value)
    }
    const [error, setError] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(`WELCOME ${newDisplayName}`)
        setTimeout(4000)
        try {
            await updateProfile(auth.currentUser, {
                displayName: newDisplayName,
            })
                .then(() => {
                    setError(`WELCOME ${newDisplayName}`)
                })
                .catch((error) => {
                    console.log(error)
                })
            navigate("/")
        } catch (error) {
            setError("Intente nuevamente ingresar Su nombre")
            console.log(error)
        }
    }
    const handleCancelClick = () => {
        navigate("/")
    }

    return (
        <>
            <div className=" bg-sky-700 opacity-100 fixed inset-0 z-50">
                <div className="flex h-screen justify-center items-center">
                    <div className="bg-gray-100 flex-col justify-center bg-white py-12 px-24 border-4 border-sky-900 rounded-xl">
                        <div className="block text-gray-700 text-lg font-bold my-2 pb-5 mb-5 ">
                            {error && <Alert message={error} />}
                            <form
                                onSubmit={handleSubmit}
                                className="bg-gray-100 border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            >
                                <label className="block text-gray-700 font-bold">
                                    YOUR NEW NAME
                                    <div className="mb-4">
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={newDisplayName}
                                            onChange={handleChange}
                                            required
                                        ></input>
                                    </div>
                                </label>

                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
                                    type="submit"
                                >
                                    Continuar
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
                                    onClick={handleCancelClick}
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
export default DisplayName
