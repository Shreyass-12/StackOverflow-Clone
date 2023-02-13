import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import AllRoutes from "./AllRoutes"
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import firebase from "./Firebase/index";

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

   const handleClick=() => {
    try {
      const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha')
      const number = '+916393070339'
      firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
        const code = prompt('enter the OTP','');
        if(code == null) return;
        e.confirm(code).then(function(result){
          console.log(result.user,'user')
          document.querySelector('label').textContent = result.user.phoneNumber + ' Number verified '
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        <label></label>
        <button onClick={handleClick}>Generate OTP</button>
      </Router>
    </div>
  );
}

export default App;