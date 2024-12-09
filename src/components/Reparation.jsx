import React, { useState } from 'react';
import axios from 'axios';
import './Reparation.css';

const Reparation = () => {
  const [formData, setFormData] = useState({
    daterep: '',
    description: '',
    tarifhmo: '',
    tempsmo: '',
    demandeReparationId: '', // ID lié à la demande de réparation
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs
    for (let key in formData) {
      if (!formData[key]) {
        alert(`Le champ ${key} est requis.`);
        return;
      }
    }

    try {
      const response = await axios.post('http://localhost:9999/api/reparations', formData);
      console.log('Réparation soumise :', response.data);
      alert('Réparation soumise avec succès !');
    } catch (error) {
      console.error('Erreur lors de la soumission :', error);
      alert('Une erreur s\'est produite lors de la soumission.');
    }
  };

  return (
    <div className="reparation-container">
      <form onSubmit={handleSubmit} className="reparation-form">
        <h2>Formulaire de Réparation</h2>

        <div className="form-group">
          <label htmlFor="daterep">Date de réparation :</label>
          <input
            type="date"
            id="daterep"
            name="daterep"
            value={formData.daterep}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description de la réparation :</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tarifhmo">Tarif horaire main d'œuvre :</label>
          <input
            type="number"
            id="tarifhmo"
            name="tarifhmo"
            value={formData.tarifhmo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tempsmo">Temps main d'œuvre (en heures) :</label>
          <input
            type="text"
            id="tempsmo"
            name="tempsmo"
            value={formData.tempsmo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="demandeReparationId">ID Demande de réparation :</label>
          <input
            type="number"
            id="demandeReparationId"
            name="demandeReparationId"
            value={formData.demandeReparationId}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">
          <a href="/PieceRechange">Ajouter</a>
        </button>
      </form>
    </div>
  );
};

export default Reparation;

        
      
