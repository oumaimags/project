import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '/Users/DELL/RepAppBuro/src/App.css';

function DemandeReparation() {
  const [dateDepot, setDateDepot] = useState('');
  const [datePrevue, setDatePrevue] = useState('');
  const [etatAppareil, setEtatAppareil] = useState('');
  const [symptomePanne, setSymptomePanne] = useState('');
  const [marque, setMarque] = useState('');
  const [modele, setModele] = useState('');
  const [numSerie, setNumSerie] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      dateDepot,
      datePrevue,
      etatAppareil,
      symptomePanne,
      marque,
      modele,
      numSerie,
    };

    try {
      const response = await axios.post('https://loacalhost:9999/api/DemandeRep', formData);
      setResponseMessage('Form submitted successfully!');
      console.log('Server response:', response.data);
    } catch (error) {
      setResponseMessage('Failed to submit form.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='b'>
      <h1>Demande de réparation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date de dépôt :
          <input type="date" value={dateDepot} onChange={(e) => setDateDepot(e.target.value)} />
        </label>
        <br />
        <label>
          Date prévue de restitution :
          <input type="date" value={datePrevue} onChange={(e) => setDatePrevue(e.target.value)} />
        </label>
        <br />
        <label>
          État de l'appareil :
          <textarea value={etatAppareil} onChange={(e) => setEtatAppareil(e.target.value)} />
        </label>
        <br />
        <label>
          Symptômes de la panne :
          <textarea value={symptomePanne} onChange={(e) => setSymptomePanne(e.target.value)} />
        </label>
        <br />
        <label>
          Marque :
          <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} />
        </label>
        <br />
        <label>
          Modèle :
          <input type="text" value={modele} onChange={(e) => setModele(e.target.value)} />
        </label>
        <br />
        <label>
          Numéro de série :
          <input type="text" value={numSerie} onChange={(e) => setNumSerie(e.target.value)} />
        </label>
        <br />
        <button type='submit'><a href="/Reparation">Ajoute</a></button>
      </form>

      {/* Display response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default DemandeReparation;
