import React from "react";

export default function Tarea({ objetoTarea, eliminarTarea, editarTarea, editando }) {
    return (
        <div
            className="inline-flex rounded-md shadow-sm m-2 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            key={objetoTarea.descripcion}
        >
            <div className="mt-2">
                <div
                    id={`txtDescripcion${objetoTarea.id}`}
                    className="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    {" "}
                    {objetoTarea.descripcion}
                </div>
                <p className="text-white bg-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    {objetoTarea.state}
                </p>

                <div className="mt-2 mb-2"></div>
                <div className="inline-flex rounded-md shadow-sm">
                    <button
                        onClick={() => eliminarTarea(objetoTarea.id)}
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        {" "}
                        Eliminar Tarea
                    </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm">
                    {/* {editando && objetoTarea.id === objetoEditando ? () : () } */}
                    <button
                        id={`btnEditar${objetoTarea.id}`}
                        onClick={() => editarTarea(objetoTarea)}
                        className="text-white bg-gray-600 hover:gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus-ring-gray-900 px-5 py-2 mr-2 mb-2"
                    >
                        {" "}
                        Editar
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}