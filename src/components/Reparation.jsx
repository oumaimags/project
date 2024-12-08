import React, { useState } from 'react';
import axios from 'axios';
import '/Users/DELL/RepAppBuro/src/App.css';

const Reparation = () => {
  const [formData, setFormData] = useState({
    dateReparation: '',
    description: '',
    tarifHMO: '',
    tempsMO: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://loacalhost:9999/api/Reparation', formData);
      setResponseMessage('Réparation ajoutée avec succès !');
      console.log('Server response:', response.data);
      // Optionally, redirect to the next page here if needed
    } catch (error) {
      setResponseMessage("Erreur lors de l'ajout de la réparation.");
      console.error('Erreur:', error);
    }
  };

  return (
    <div className='d'>
      <h1>Ajouter une réparation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Date de réparation :
            <input
              type="date"
              name="dateReparation"
              value={formData.dateReparation}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description :
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tarif HMO :
            <input
              type="number"
              name="tarifHMO"
              value={formData.tarifHMO}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Temps MO (en heures) :
            <input
              type="number"
              name="tempsMO"
              value={formData.tempsMO}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type='submit'><a href="/PieceRechange">Ajoute</a></button>
      </form>

      {/* Display response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Reparation;
