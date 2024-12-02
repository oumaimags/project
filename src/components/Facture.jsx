import React, { useState } from 'react';
import axios from 'axios';
import '/Users/DELL/RepAppBuro/src/App.css';
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
    axios.post('http://localhost:3306/api/facture', factureData) 
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
    <div>
      <h1>Facture</h1>
      <p>Date : {dateFacture}</p>
      <p>Numéro : {numeroFacture}</p>
      <p>Montant total : {montantTotal} DT</p>
      <button onClick={handleConfirmer}>Confirmer</button>
      {}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Facture;

