import React, { useRef, useState } from "react";
import styles from "./LoginPage.module.css";
import loginImg from "../../assets/images/illustration-sign-up-desktop.svg";
import listIcon from "../../assets/images/icon-list.svg";

const LoginPage = (props) => {
  const [invalid, setInvalid] = useState(false);
  const [valid, setvalid] = useState(`${styles.valid}`);
  const inputValue = useRef("");

  const onChangeHandler = (e) => {
    const email = e.target.value;
    // console.log(email.trim());
    if (email.includes("@company.com")) {
      setInvalid(false);
      setvalid(`${styles.valid}`);
    }

  }

  const enteredEmailHandler = () => {
    if (!inputValue.current.value.includes('@company.com')) {
      setInvalid(true);
      setvalid(`${styles.Invalid}`);
    }

  }

  const onClickHandler = () => {
    if (!inputValue.current.value.includes('@company.com')) {
      setInvalid(true);
      setvalid(`${styles.Invalid}`);
    } else {
      props.setIsLoginHandler(true);
      props.enteredEmailHandler(inputValue.current.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.Contianer}>
      <div className={styles.ImageContainer}>
        <img src={loginImg} alt="loginImg" />
      </div>
      <div className={styles.FormContainer}>
        <h1>Stay updated!</h1>
        <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
        <ul>
          <div className={styles.ListItem}>
            <img src={listIcon} alt="listIcon" />
            <li>Product discovery and building what matters</li>
          </div>
          <div className={styles.ListItem}>
            <img src={listIcon} alt="listIcon" />
            <li>Measuring to ensure updates are a success</li>
          </div>
          <div className={styles.ListItem}>
            <img src={listIcon} alt="listIcon" />
            <li>And much more!</li>
          </div>
        </ul>
        <div className={styles.FormElement}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.labelContainer}>
              <label className={styles.validLable}>Email address</label>
              {invalid ? (
                <label className={styles.invalidLable}>Invalid email required</label>
              ) : (
                <></>
              )}
            </div>
            <input ref={inputValue}
              className={valid}
              placeholder="email@company.com"
              onChange={onChangeHandler}
              onBlur={enteredEmailHandler} />
            <button type="button" onClick={onClickHandler}>
              Subscribe to monthly newslatter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
