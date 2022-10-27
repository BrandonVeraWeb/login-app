import { Routes, Route } from "react-router-dom"
import Home from "./compo/Home"
import Login from "./compo/Login"
import { ProtectedRoute } from "./compo/ProtectedRoute"
import Register from "./compo/Register"
import { AuthProvider } from "./context/authContext"
import { ResetPassword } from "./compo/ResetP"
import NavBar from "./utils/Navbar"
import { useState } from "react"
import { DisplayName } from "./compo/DisplayName"
import ChangeEmail from "./compo/NewEmail"
function App() {
    return (
        <div>
            <div className="bg-sky-700 min-h-screen flex-none m-auto">
                <AuthProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <NavBar />
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/resetpassword"
                            element={<ResetPassword />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/displayName"
                            element={
                                <ProtectedRoute>
                                    <DisplayName />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/changeEmail"
                            element={
                                <ProtectedRoute>
                                    <ChangeEmail />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </AuthProvider>
            </div>
        </div>
    )
}

export default App
