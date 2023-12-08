import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import AddRestro from './AddRestro'
import ViewFood from './ViewFood'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    <div>
     {/* <Home/> */}
     <Routes>
    <Route path='/'   element={<Home/>}/>
    <Route path='/login'   element={<Login/>}/>
    <Route path='/signup'   element={<SignUp/>}/>
    <Route path='/partner-with-us'   element={<AddRestro/>}/>
    <Route path='/view-food'   element={<ViewFood/>}/>

    
    </Routes>
    </div>
  )
}

export default App