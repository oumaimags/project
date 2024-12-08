import React from "react";
import '/Users/DELL/RepAppBuro/src/App.css';
const Accueil = () => {
  return (
    <div className="x">
      <nav className="navbar">
        <div className="navbar-brand">RepAppBuro</div>
        <div className="navbar-buttons">
        <button type='submit'><a href="/Login">login</a></button>
          <button className="btn signup-btn">S'inscrire</button>
        </div>
      </nav>
      <main className="main-content">
        <h1>Bienvenue sur RepAppBuro</h1>
        <p>
          Simplifiez la gestion de vos appareils de bureautique grâce à notre solution innovante.
        </p>
      </main>
    </div>
  );
};

export default Accueil;
