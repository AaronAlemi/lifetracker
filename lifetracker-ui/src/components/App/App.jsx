import * as React from "react"
import "./App.css"
import Navbar from "components/Navbar/Navbar"
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "components/LandingPage/LandingPage"
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import ActivityPage from "components/ActivityPage/ActivityPage"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"
import NotFound from "components/NotFound/NotFound";
import NutritionPage from "components/NutritionPage/NutritionPage";
import { useState } from "react";

export default function App() {

  const [loginFormContent, setLoginFormContent] = useState({email: "", password: ""})
  const [registrationFormContent, setRegistrationFormContent] = useState({username: "", password: "", passwordConfirm: "", first_name: "", last_name: "", email: ""})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log("App isloggedin: " + isLoggedIn)

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage loginFormContent={loginFormContent} setLoginFormContent={setLoginFormContent} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }/>
          <Route path="/register" element={<RegistrationPage registrationFormContent={registrationFormContent} setRegistrationFormContent={setRegistrationFormContent}/>} />
          <Route path="/activity" element={isLoggedIn ? <ActivityPage /> : <AccessForbidden/>} />
          <Route path="exercise" element={isLoggedIn ? <h>Exercise Page</h> : <AccessForbidden/>} />
          <Route path="sleep" element={isLoggedIn ? <h>Sleep Page</h> : <AccessForbidden/>} />
          <Route path="/nutrition/*" element={isLoggedIn ? <NutritionPage /> : <AccessForbidden/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
