import React, { useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"

export function DisplayName() {
    const [newDisplayName, setNewDisplayName] = useState()
    const auth = getAuth()
    const handleChange = (e) => {
        setNewDisplayName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateProfile(auth.currentUser, {
            displayName: newDisplayName,
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                // An error occurred
                // ...
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
                                className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            >
                                <label className="block text-gray-700 font-bold">
                                    DisplayName
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DisplayName
