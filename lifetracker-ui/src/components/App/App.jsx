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
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";

export default function App() {

  const [loginFormContent, setLoginFormContent] = useState({email: "", password: ""})
  const [registrationFormContent, setRegistrationFormContent] = useState({username: "", email: "", first_name: "", last_name: "", password: "", passwordConfirm: ""})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isFetching, setisFetching] = useState(false)
  const [error, setError] = useState("")
  const [user, setUser] = useState({})

  console.log("App isloggedin: " + isLoggedIn)

   async function fetchingUser() {
    setisFetching(true)
    const {data, error} = await apiClient.fetchUserFromToken()
    if (data) {
      setUser(data.user)
    }
    if (error) {
      setError(error)
      setisFetching(false)
    }
  } 

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      apiClient.setToken(token)
      fetchingUser()
    }
  }, []) 

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage loginFormContent={loginFormContent} setLoginFormContent={setLoginFormContent} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser}/> }/>
          <Route path="/register" element={<RegistrationPage registrationFormContent={registrationFormContent} setRegistrationFormContent={setRegistrationFormContent} user={user} setUser={setUser}/>} />
          <Route path="/activity" element={user.email ? <ActivityPage /> : <AccessForbidden/>} />
          <Route path="exercise" element={user.email ? <h>Exercise Page</h> : <AccessForbidden/>} />
          <Route path="sleep" element={user.email ? <h>Sleep Page</h> : <AccessForbidden/>} />
          <Route path="/nutrition/*" element={user.email ? <NutritionPage /> : <AccessForbidden/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
