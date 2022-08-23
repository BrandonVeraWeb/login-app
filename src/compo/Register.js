import React from 'react'
import { useState } from 'react';
import { useAuth } from '../context/authContext'
import { useNavigate,Link } from "react-router-dom";
import Alert from './Alert';


export function Register() {

  const [user,setUser] = useState({

    email: '',
    password: '',
    
  });

  console.log(user.displayName)
  const { signup }= useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({target:{name, value}}) => 
    setUser({...user,[name]: value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('Loading, Ya puedes iniciar sesion')
    alert('Bienvenido')
    try {
      await signup(user.email, user.password );
      navigate('/login');
    } catch (error) {
     setError(error.message);
    }
  };
  return (
  <div className='w-full max-w-xs m-auto'>
    { error && <Alert message={error} /> }


    <form onSubmit ={handleSubmit} className='bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <label htmlFor='email' className='block text-gray-700 text-sm font-bold my-2'>Email</label>

      <div className='mb-4'>

      <input 
      type="email" 
      name='email' 
      placeholder='youremail@company.ltd' 
      onChange={handleChange}
      className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline'
      
      />
      </div>
      {/* <label htmlFor='displayname' className='block text-gray-700 text-sm font-bold my-2'>Nombre De Usuario</label> 

      <div className='mb-4'>

      <input 
      type="texto" 
      name='displayName' 
      placeholder='YourName' 
      onChange={handleChange}
      className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline'
      id='displayname'
      />
      </div> */}

      <div className='mb-4'>
      <label htmlFor='password'className='block text-gray-700 text-sm font-bold my-2'>Password</label>
      <input 
      type="password" 
      name='password' 
      placeholder='password' 
      id='password'
      onChange={handleChange}
      className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tighy focus:outline-none focus:shadow-outline'  
       />
        </div>

      <button className='bg-blue-500 hover:bg-blue-700 text-white shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full' > Register </button>

    </form>
    <p className='my-4 text-sm flex justify-between px-3 text-slate-50'>Already have an Account? <Link to='/Login'> log in </Link> </p>
  </div>
  )
}

export default Register