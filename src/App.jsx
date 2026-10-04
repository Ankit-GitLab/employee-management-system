import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdimDashboard from './components/Dashboard/AdimDashboard'
import { useContext, useState} from 'react'
import { AuthContext } from './context/AuthProvider'
// import { useEffect } from 'react'
// import { setLocalStorage } from './utils/LocalStorage'


const App = () =>{
  

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)
  
    

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }

  //   }

  // },[authData])
  



const handleLogin = (email,password) =>{
  if(email == 'ankit@gmail.com' && password == "1234"){
    setUser({role:'admin'});
    localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}));
  }else if(authData){
    const employee = authData.employees.find((e)=>email == e.email && password == e.password);
    if(employee){
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
    }

  }
  else{
    alert("Invalid Credentials");
  }
}


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:''}
    {user == 'admin' ? <AdimDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    
    </>
  )
}

export default App