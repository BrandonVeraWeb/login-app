import React, { useState } from "react"
import { useAuth } from "../context/authContext"

export default function Navbar({ fixed }) {
    const { user, logout } = useAuth()
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between bg-indigo-500">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#pablo"
                        >
                            To Do List
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
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
                            <li className="nav-item">
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
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                                    <span className="ml-2">Pin</span>
                                </a>
                            </li>
                        </ul>
                        <button className="relative flex justify-venter items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
                            <p className="px-4">{user.displayName}</p>
                            <span className="border-l p-2 hover:bg-gray-100">
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
                            <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded ">
                                <ul className="text-left border rounded">
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b">
                                        {" "}
                                        MENU LIST
                                    </li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b">
                                        {" "}
                                        MENU LIST
                                    </li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b">
                                        {" "}
                                        MENU LIST
                                    </li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b">
                                        {" "}
                                        MENU LIST
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
