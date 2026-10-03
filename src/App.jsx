import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdimDashboard from './components/Dashboard/AdimDashboard'
import { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () =>{

const [user, setUser] = useState(null)

const handleLogin = (email,password) =>{
  if(email == 'admin123@gmail.com' && password == "1234"){
    setUser('admin');
    
  }else if(email == 'amit123@gmail.com' && password == "1234"){
    setUser('employee');
  }
  else{
    alert("Invalid Credentials");
  }
}

const data = useContext(AuthContext)
console.log(data);



  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:''}
    {user == 'admin' ? <AdimDashboard /> : <EmployeeDashboard />}
    
    </>
  )
}

export default App