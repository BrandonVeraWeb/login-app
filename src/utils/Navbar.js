import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

export default function Navbar({ fixed }) {
    const { user, logout } = useAuth()
    const navigation = useNavigate()
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    const handlelogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }
    const handleName = () => {
        navigation("/displayName")
    }
    const handleEmail = () => {
        navigation("/changeEmail")
    }
    const handlePassword = () => {
        navigation("/changePassword")
    }

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-900 ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between bg-sky-900">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <p className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                            To Do List
                        </p>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {" "}
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {/* <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                                    <span className="ml-2">Share</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                                    <span className="ml-2">Tweet</span>
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <p className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75">
                                    <i className="fab text-xl leading-lg text-white opacity-75"></i>
                                    <span className="ml-2">
                                        {user.displayName}
                                    </span>
                                </p>
                            </li>
                        </ul>
                        <button className="relative flex justify-center items-center bg-sky-700 hover:bg-sky-700 border focus:outline-none shadow text-white rounded focus:ring ring-sky-600 group pr-2">
                            <p className="px-4">settings</p>
                            <span className="border-l p-2 hover:bg-sky-500">
                                <svg
                                    className=" w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </span>
                            <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-sky-600 shadow-md mt-1 rounded ">
                                <ul className="text-left border rounded ">
                                    <li
                                        className="px-4 py-1 hover:bg-gray-100 border-b"
                                        onClick={handlePassword}
                                    >
                                        {" "}
                                        CHANGE PASSWORD
                                    </li>
                                    <li
                                        onClick={handleEmail}
                                        className="px-4 py-1 hover:bg-gray-100 border-b"
                                    >
                                        {" "}
                                        CHANGE EMAIL
                                    </li>
                                    <li
                                        className="px-4 py-1 hover:bg-gray-100 border-b"
                                        onClick={handleName}
                                    >
                                        {" "}
                                        CHANGE NAME
                                    </li>
                                    <li
                                        className="px-4 py-1 hover:bg-sky-500 border-b"
                                        onClick={handlelogout}
                                    >
                                        {" "}
                                        LOGOUT
                                    </li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
