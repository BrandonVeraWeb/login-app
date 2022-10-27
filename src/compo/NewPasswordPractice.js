import React from "react"
import { useState } from "react"
export default function NewPasswordPractice() {
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(
            `Hola usuario su contrase;a es ${password} y la confirmacion es ${passwordConfirm}`,
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    {" "}
                    Password
                    <input
                        onChange={handlePassword}
                        type="password"
                        value={password}
                    />
                </label>
                <label>
                    Password Confirm
                    <input
                        onChange={handlePasswordConfirm}
                        type="password"
                        value={passwordConfirm}
                    />
                </label>
                <button
                    type="submit"
                    className="bg-slate-300 hover:bg-slate-200 font-bold py-2 px-4 rounded focus:outline-none focus shadow-outline text-sm"
                >
                    {" "}
                    ENVIAR DATOS{" "}
                </button>
            </form>
        </div>
    )
}
