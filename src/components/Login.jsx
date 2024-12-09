
import '/Users/DELL/RepAppBuro/src/App.css';

import React, { useState } from 'react';
import axios from 'axios'; // Importer axios
import { useNavigate } from 'react-router-dom'; // Pour la navigation

const LoginForm = () => {
  const [email, setEmail] = useState(''); // État pour l'email
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const navigate = useNavigate(); // Hook pour la navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données au backend
      const response = await axios.post("http://localhost:9999/login", { email, password });
      const user = response.data; // Récupérer les données utilisateur du backend
      if (user){
      // Vérifier le rôle de l'utilisateur et rediriger
      if (user.role === 10) {
        navigate("/Accueill"); // Redirige vers la page réceptionnaire
      } else if (user.role === 20) {
        navigate("/Client"); // Redirige vers la page technicien
      } else {
        alert("Rôle non reconnu !");
      }
    }else {
        alert("user non trouvable !");
      }
    } catch (error) {
      // Gestion des erreurs
      if (error.response && error.response.status === 401) {
        alert("Email ou mot de passe incorrect !");
      } else {
        console.error("Erreur d'authentification :", error);
        alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email" // Changer "login" en "email" pour correspondre à votre backend
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Connexion</button>
      </form>
    </div>
  );
};

export default LoginForm;


