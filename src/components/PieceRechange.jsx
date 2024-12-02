import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '/Users/DELL/RepAppBuro/src/App.css';

const PieceRechange = () => {
  const [formData, setFormData] = useState({
    codePiece: '',
    nom: '',
    prixAchat: '',
    prixHT: '',
    prixTTC: '',
    tarif: '',
    type: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-backend-endpoint.com/api/piece', formData);
      setResponseMessage('Pièce de rechange ajoutée avec succès !');
      console.log('Server response:', response.data);
    } catch (error) {
      setResponseMessage('Échec de l’ajout de la pièce de rechange.');
      console.error('Erreur lors de l’envoi du formulaire:', error);
    }
  };

  return (
    <div className='c'>
      <h1>Ajouter une pièce de rechange</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Code pièce :
            <input
              type="text"
              name="codePiece"
              value={formData.codePiece}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Nom :
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Prix d'achat :
            <input
              type="number"
              name="prixAchat"
              value={formData.prixAchat}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Prix hors taxe :
            <input
              type="number"
              name="prixHT"
              value={formData.prixHT}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Prix TTC :
            <input
              type="number"
              name="prixTTC"
              value={formData.prixTTC}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tarif :
            <input
              type="text"
              name="tarif"
              value={formData.tarif}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Type :
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type='submit'><a href="/Facture">Ajoute</a></button>
      </form>

      {/* Display response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default PieceRechange;
