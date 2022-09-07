import  React  from "react";
import { doc, getFirestore, updateDoc} from "firebase/firestore";
import { app } from "../firebase";



const firestore = getFirestore(app) ;

export async function editar(descripcion,correoUsuario,setArrayTareas, nvoArrayTareas) {
    
    
    document.getElementById('formDescripcion').value = (descripcion);


    const boton = document.getElementById("boton")

    boton.innerHTML= "EDITAR";
    


    boton.onclick = function () {
     const washingtonRef = doc(firestore,"tareas",);
        
     const descripcion = document.getElementById('formDescripcion').value;
       
         updateDoc(washingtonRef, {
          descripcion: descripcion
        });  
    
}
};




export default editar