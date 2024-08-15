import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import NotFound from './Pages/NotFound'
import SignUpPage from './Pages/SignUpPage'
import mainFirebaseData from './firebase.config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<SignUpPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
