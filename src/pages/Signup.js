import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"

const Signup = ({setIsUserLoggedIn}) => {
  return (
   <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1 = "Build Skills for today ,tomorrow and beyond."
    desc2="Education to future - proof your career"
    image={signupImg}
    formtype="signup"
    setIsUserLoggedIn={ setIsUserLoggedIn}
   />
  )
}

export default Signup
