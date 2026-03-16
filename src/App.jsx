import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import './App.css'
import { BrowserRouter,Router,Route } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Task } from './Pages/Task'
import { TaskDetail } from './Pages/TaskDetail'
import { Error } from './Pages/Error'





function App() {
  
  
  

  return (
    <>
    <BrowserRouter>
    <Route>
      <Route path='/'element={<Login/>}>
      <Route path='/'Task element={<Task/>}/>
      <Route path='/' dashboard element={<Login/>}>
      <Route path='/Task/:id' element={<TaskDetail/>}/>
      </Route>
    </Route>
    </BrowserRouter>
    















    

    </>
  









export default defineConfig({
	plugins: [tailwindcss()],
});

