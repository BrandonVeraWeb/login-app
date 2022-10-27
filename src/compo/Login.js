import React from "react"
import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate, Link } from "react-router-dom"
import Alert from "./Alert"

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const { Login, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("Loading")
        try {
            await Login(user.email, user.password)
            navigate("/")
            setError("Loading")
        } catch (error) {
            setError(error.message)
        }
    }

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle()
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    }
    const resetpss = async () => {
        navigate("/resetpassword")
    }
    // const handleResetPassword = async () => {

    //   if (!user.email) return setError('Please enter your email');

    //   try {
    //   await resetPassword(user.email);
    //   setError('we sent you an email with a link to reset your password');
    //   } catch (error) {
    //     setError(error)
    //   }
    // };

    return (
        <div className=" bg-sky-700 opacity-100 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="bg-gray-100 flex-col justify-center bg-white py-12 px-24 border-4 border-sky-900 rounded-xl">
                    <div className="block text-gray-700 text-lg font-bold my-2 pb-5 mb-5">
                        {error && <Alert message={error} />}

                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
                        >
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm font-bold my-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="youremail@company.ltd"
                                    onChange={handleChange}
                                    className="bg-gray-100 shadow appearance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 text-sm font-bold my-2"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    placeholder="********"
                                    className="bg-gray-100 shadow appearance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus"shadow-outline text-sm'>
                                    {" "}
                                    Login{" "}
                                </button>

                                <a
                                    href=" "
                                    className="inline-block align-basekube fibt-bold text-sm text-blue-500 hover:text-blue-800 font-bold"
                                    onClick={resetpss}
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                        <p className="text-black my-4 text-sm flex justify-between px-3 block text-gray-700 text-sm font-bold mb-5">
                            Don't have an Account?{" "}
                            <Link to="/register">Register </Link>{" "}
                        </p>
                        <button
                            onClick={handleGoogleSignin}
                            className="bg-slate-300 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
                        >
                            Google Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
