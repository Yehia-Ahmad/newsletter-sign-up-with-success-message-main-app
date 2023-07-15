import React, { useState } from "react";
import LoginPage from "./Component/LoginPage/LoginPage";
import Subscribe from "./Component/SubscribePage/Subscribe";

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("")

  const isLoginHandler = (val) => {
    setIsLogin(val);
  }

  const changeEnteredEmail = (value) => {
    setEnteredEmail(value);
    console.log(enteredEmail);
  }
  return (
    <div className="App">
      {isLogin ? <Subscribe setIsLoginHandler={isLoginHandler} enteredEmail={enteredEmail} /> : <LoginPage setIsLoginHandler={isLoginHandler} enteredEmailHandler={changeEnteredEmail} />}
    </div>
  );
}

export default App;
