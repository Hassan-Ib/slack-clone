import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateProvider } from "./StateProvider";

const Login = () => {
  const { setUser } = useStateProvider();
  const signIn = function () {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <section className="login">
      <div className="login__container">
        <img
          src="https://www.sketchappsources.com/resources/source-image/new-slack-logo-nicolas-ciotti.jpg"
          alt=""
        />
        <h1>Sign in to Silva HQ</h1>
        <p>Silva.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </section>
  );
};
export default Login;
