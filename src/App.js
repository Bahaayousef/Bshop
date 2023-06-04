import logo from './logo.svg';
import './App.css';
import {BrowserRouter, RouterProps, Router, Routes, Route} from "react-router-dom";
import Login from './AppPages/Login';
import Signup  from './AppPages/Signup';
import Report from './AppPages/Report'; 
import Navbar  from './AppPages/Navbar';
import Shop from './AppPages/Shop-Home'; 
import cart from './AppPages/cart'; 
import User_Profile from './AppPages/User-profile'
 
function App() { 
  return ( 
      
   <BrowserRouter>
    <Routes>
      <Route  path= "/Shop-Home" element={<Shop/>}  />
      <Route  path= "/Navbar" element={<Navbar/>}  />
      <Route  path= "/Report" element={<Report/>}  />
      <Route  path= "/Login" element={<Login/>}  /> 
      <Route  path= "/Signup" element={<Signup/>}  />
      <Route  path= "/cart" element={<cart/>} />
      \\<Route  path= "/User_profile" element={<User_Profile/>}  />
    </Routes>  
    
   </BrowserRouter>
  );
}  

export default App;
 