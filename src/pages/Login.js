import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({ setIsUserLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1 = "Build Skills for today ,tomorrow and beyond."
      desc2="Education to future - proof your career"
      image={loginImg}
      formtype="Login"
      setIsUserLoggedIn={ setIsUserLoggedIn}
    />
  )
}

export default Login
