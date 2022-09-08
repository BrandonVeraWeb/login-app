

import {Routes, Route} from 'react-router-dom';
import  Home  from './compo/Home';
import  Login   from './compo/Login'
import { ProtectedRoute } from './compo/ProtectedRoute';
import  Register  from './compo/Register';
import { AuthProvider,} from './context/authContext';
import { ResetPassword } from "./compo/ResetP";

function App() {
  return (
     <div className='bg-sky-700 min-h-screen flex' >
      <AuthProvider>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
              <Home />
          </ProtectedRoute>
        } />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path= "/login" element= {<Login/>} />
        <Route path= "/register" element= {<Register/>} />
      </Routes>
    </AuthProvider>
    

    </div>


  );
 
}

export default App