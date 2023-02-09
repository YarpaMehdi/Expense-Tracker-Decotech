import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DataDashboard from "./components/DataDashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/dashboard' element={<DataDashboard />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
