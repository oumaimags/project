import React, { useState } from 'react';
import axios from 'axios';
import './Facture.css';  // Importation du fichier CSS pour styliser la page

function Facture() {
  const [dateFacture, setDateFacture] = useState(new Date().toLocaleDateString());
  const [numeroFacture, setNumeroFacture] = useState('FACT-001');
  const [montantTotal, setMontantTotal] = useState(0);
  const [message, setMessage] = useState('');

  const handleConfirmer = () => {
    const factureData = {
      dateF: dateFacture,
      numeroF: numeroFacture,
      montant: montantTotal,
    };

    // Correction de l'URL (localhost au lieu de loacalhost)
    axios.post('http://localhost:9999/api/facture', factureData)
      .then(response => {
        setMessage('Facture enregistrée avec succès!');
        console.log('Facture créée:', response.data);
      })
      .catch(error => {
        setMessage('Erreur lors de l\'enregistrement de la facture.');
        console.error('Erreur lors de la création de la facture:', error);
      });
  };

  return (
    <div className="facture-container">
      <h1>Génération de Facture</h1>
      <div className="facture-details">
        <p><strong>Date :</strong> {dateFacture}</p>
        <p><strong>Numéro de facture :</strong> {numeroFacture}</p>
        <div className="form-group">
          <label htmlFor="montantTotal">Montant total :</label>
          <input
            type="number"
            id="montantTotal"
            value={montantTotal}
            onChange={(e) => setMontantTotal(e.target.value)}
            placeholder="Entrez le montant total"
            required
          />
        </div>
        <button onClick={handleConfirmer} className="confirm-button">Confirmer</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Facture;


