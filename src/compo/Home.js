 
import React,{useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { AgregarTarea } from "./AgregarTarea";
import { ListadoTareas } from "./ListadoTareas";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { app, auth } from '../firebase';



export function Home() {
  
  const { user, logout, loading, } = useAuth();
  const [ editando, setEditando ] = useState(false);
  const [ tareaEditar, setTareaEditar ] = useState("");

  
  const firestore = getFirestore(app);
  
  const [ arrayTareas , setArrayTareas] = useState ([]);
  const fakeData =[
    { id:1 ,descripcion:'Crea todas tus tareas aqui',url:'https://picsum.photos/420' },
    



    ];
    async function buscarDocumentOrCrearDocumento(idDocumento) {
      const docuRef = doc(firestore, `usuarios/${idDocumento}`);
      const consulta = await getDoc(docuRef);
      if (consulta.exists()) {
        const infoDocu = consulta.data();
        return infoDocu.tareas;
      } else {
        await setDoc(docuRef, { tareas: [...fakeData] });
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        return infoDocu.tareas;
      }
    }

    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(
        user.email
      );
      setArrayTareas(tareasFetchadas);
    }
  
    useEffect(() => {
      fetchTareas();
    }, []);
     
   const handlelogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
    
  };
  
  if (loading) return <h1>loading</h1>  
  // mt-0 ml-4 py-4
  return (
     <div className=' text-center w-full max-xs mt-20 ml-20 mr-20 text-black'>
      <div className=' bg-slate-100 rounded shadow-md px-8 pt-6 pb-8 mb-4 mr-0' >
      <h1 className='text-xl mb-4 text-center'> Welcome {user.displayName || user.email} </h1>
    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2 mt-2' onClick={handlelogout}>
      logout
    </button>
    
      <hr />
      <AgregarTarea
        arrayTareas ={arrayTareas} 
        setArrayTareas={setArrayTareas} 
        correoUsuario={user.email}
        editando={editando} setEditando={setEditando} tareaEditar={tareaEditar} setTareaEditar={setTareaEditar}
      />
      {arrayTareas ?<ListadoTareas arrayTareas ={arrayTareas} setArrayTareas={setArrayTareas} correoUsuario={user.email}
                     editando={editando} setEditando={setEditando} tareaEditar={tareaEditar} setTareaEditar={setTareaEditar}
                    />:null}
    
    </div>
  </div>
  );
};
 
export default Home;