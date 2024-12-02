import React, { useState } from 'react';
import axios from 'axios'; // Import axios
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
      const response = await axios.post('https://loacalhost:5000/api/client', clientData);
      setResponseMessage('Client data submitted successfully!');
      console.log('Server response:', response.data);
    } catch (error) {
      setResponseMessage('Failed to submit client data.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='a'>
      <h1>bienvenu</h1>
      <form onSubmit={handleConnexion}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Adresse:
          <textarea value={adresse} onChange={(e) => setAdresse(e.target.value)} />
        </label>
        <br />
        <label>
          Numéro de téléphone:
          <input type="tel" value={numeroTel} onChange={(e) => setNumeroTel(e.target.value)} />
        </label>
        <br />
        <button type='submit'><a href="/DemandeReparation">Ajoute</a></button>
      </form>

      {/* Display response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Client;
