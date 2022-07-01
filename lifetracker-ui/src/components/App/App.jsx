import * as React from "react"
import "./App.css"
import Navbar from "components/Navbar/Navbar"
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "components/LandingPage/LandingPage"
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import { useState } from "react";

export default function App() {

  const [loginFormContent, setLoginFormContent] = useState({email: "", password: ""})
  const [registrationFormContent, setRegistrationFormContent] = useState({username: "", password: "", passwordConfirm: "", first_name: "", last_name: "", email: ""})

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar>Navbar</Navbar>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage loginFormContent={loginFormContent} setLoginFormContent={setLoginFormContent}/>} />
          <Route path="/register" element={<RegistrationPage registrationFormContent={registrationFormContent} setRegistrationFormContent={setRegistrationFormContent}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
