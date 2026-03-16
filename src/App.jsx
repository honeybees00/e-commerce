
import './App.css'
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Task } from './Pages/Task'
import { TaskDetail } from './Pages/TaskDetail'
import { Error } from './Pages/Error'
import { Products } from './Pages/Products'
import { CheckOut } from './Pages/CheckOut'
import {Home} from './Pages/Home'
import {Nav} from './Components/Nav'






function App() {
  
  
  

  return (
    <>
    <Nav/>
    <BrowserRouter>
    <Routes>
      <Routes path='/'element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/checkout'  element={<CheckOut/>}/>
      <Route path='/Task/:id' element={<TaskDetail/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
)}














    

  
  









export default App;
