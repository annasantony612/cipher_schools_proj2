import React, {useState} from "react";
// import { Redirect } from "react-router-dom";
import { app, auth } from "./firebaseConfig"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <input value={email} onChange={setEmail(e.target.value)}></input>
    </div>
  )
}

export default SignUp;