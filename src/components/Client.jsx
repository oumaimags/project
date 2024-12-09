import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Client.css';

const Client = () => {
  const [client, setClient] = useState({
    nom: '',
    adresse: '',
    numtel: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnregistrer = async () => {
    const { nom, adresse, numtel } = client;
    if (!nom || !adresse || !numtel) {
      alert('Tous les champs sont obligatoires !');
      return;
    }

    try {
      await axios.post('http://localhost:9999/api/clients/ajouter', client, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Client enregistré avec succès !');
      navigate('/DemandeReparation');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
      alert('Erreur lors de l\'enregistrement !');
    }
  };

  return (
    <div className="container">
      <h2>Enregistrer un Client</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Entrez le nom"
            value={client.nom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="adresse">Adresse :</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            placeholder="Entrez l'adresse"
            value={client.adresse}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="numtel">Téléphone :</label>
          <input
            type="text"
            id="numtel"
            name="numtel"
            placeholder="Entrez le numéro de téléphone"
            value={client.numtel}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleEnregistrer}>
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default Client;

