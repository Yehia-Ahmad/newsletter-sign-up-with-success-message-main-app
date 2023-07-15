import React from "react";
import styles from "./Subscribe.module.css"
import checkIcon from "../../assets/images/icon-list.svg";

const Subscribe = (props) => {

    const onClickHandler = () => {
        props.setIsLoginHandler(false);
    }
    return (
        <div className={styles.subscribeContainer}>
            <img src={checkIcon} alt="checkIcon" />
            <h1>Thanks for Subscribing!</h1>
            <h5>A conformation email has been sent to<br />
                <span> {`${props.enteredEmail}`} </span>please open it and and click <br />
                the button inside to confirm your Subscription.</h5>
            <button onClick={onClickHandler}>Dismiss message</button>
        </div>
    )
}

export default Subscribe;