import React from "react"
import { useState } from "react"

export function Contador() {
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    return (
        <div className="bg-red-200">
            <h2>Contador</h2>
            <div>
                <button
                    onClick={sumar}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus shadow-outline text-sm"
                >
                    +
                </button>
                <button
                    onClick={restar}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus shadow-outline text-sm ml-5"
                >
                    -
                </button>
            </div>
            <div className="inline-flex rounded-md shadow-sm m2 block p-6 max-w-sm bg-white rounded-lg botder birder-gray-200 shadow-md hover:bg-gray-100 mt-5 mb-5">
                {contador}
            </div>
        </div>
    )
}
export default Contador
