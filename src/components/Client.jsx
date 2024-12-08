import React, { useState } from 'react';
import axios from 'axios'; 
import '/Users/DELL/RepAppBuro/src/App.css';

function Client() {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numeroTel, setNumeroTel] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleConnexion = async (event) => {
    event.preventDefault();
    
    const clientData = {
      nom,
      adresse,
      mail,
    };

    try {
      const response = await axios.post('https://loacalhost:9999/api/client', clientData);
      setResponseMessage('Client data submitted successfully!');
      console.log('Server response:', response.data);
    } catch (error) {
      setResponseMessage('Failed to submit client data.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='a'>
      <h1>Client</h1>
  <form onSubmit={handleConnexion} className="form">
    <div className="form-group">
      <label htmlFor="nom">Nom:</label>
      <input 
        id="nom" 
        type="text" 
        value={nom} 
        onChange={(e) => setNom(e.target.value)} 
        className="form-input"
      />
    </div>

    <div className="form-group">
      <label htmlFor="adresse">Adresse:</label>
      <textarea 
        id="adresse"
        value={adresse} 
        onChange={(e) => setAdresse(e.target.value)} 
        className="form-input"
      />
    </div>

    <div className="form-group">
      <label htmlFor="numeroTel">Numéro de téléphone:</label>
      <input 
        id="numeroTel" 
        type="tel" 
        value={numeroTel} 
        onChange={(e) => setNumeroTel(e.target.value)} 
        className="form-input"
      />
    </div>

        <button type='submit'><a href="/DemandeReparation">Ajoute</a></button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Client;
