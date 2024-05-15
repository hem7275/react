import { useState } from 'react'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BusViewSeats from './pages/BusViewSeats';
import AdminDashboard from './pages/AdminDashboard';
import BusForm from './components/BusForm';
import BusList from './pages/BusListPage';
// import BusAddingForm from './pages/BusAddingForm';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Routes>
        <Route  path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/home" element={<><NavBar/><HomePage/></>} />
        <Route path="/viewseats" element={<><NavBar/><BusViewSeats/></>} />
        <Route path="/dashboard" element={<><NavBar/><AdminDashboard/></>} />
        <Route path="/dashboard/addbus" element={<><NavBar/><BusForm/></>} />
         <Route path="/dashboard/viewbus" element={<><NavBar/><BusList/></>} />
      </Routes>
      
      
    </>
  )
}

export default App