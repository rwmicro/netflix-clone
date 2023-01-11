import React, { useState } from "react";
import Header from '../components/Header'

const Signup = () => {

  return (
    <>
    <section className="loginsection">
    <Header/>
    <div className="mainlogin">
    <div className="container">
      <h1>Connexion</h1>
      <br />
      <label>Pseudo</label>
      <br />
      <input type="text"/>
      <br />
      <label>Mot de passe</label>
      <br />
      <input type="password"/>
      <br />
      <button>Connexion</button>
    </div>
    </div>
    </section>
    </>
  );
};

export default Signup;
