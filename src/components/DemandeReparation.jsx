import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DemandeReparation.css';

const DemandeReparation = () => {
  const [demandeReparation, setDemandeReparation] = useState({
    dateDepot: '',
    datePrevueRemise: '',
    etat: '',
    symptom: '',
    clientId: '',
    appareilId: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDemandeReparation((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnregistrer = async () => {
    const { dateDepot, datePrevueRemise, etat, symptom, clientId, appareilId } = demandeReparation;
    if (!dateDepot || !datePrevueRemise || !etat || !symptom || !clientId || !appareilId) {
      alert('Tous les champs sont obligatoires !');
      return;
    }

    try {
      await axios.post('http://localhost:9999/api/demandes', demandeReparation, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Demande de réparation enregistrée avec succès !');
      navigate('/Reparation');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
      alert('Erreur lors de l\'enregistrement !');
    }
  };

  const handleRechercherParID = async () => {
    try {
      const id = prompt("Entrez l'ID de la demande de réparation à rechercher :");
      if (!id) {
        alert("ID invalide !");
        return;
      }
      const response = await axios.get(`http://localhost:9999/api/demandes/${id}`);
      const { dateDepot, datePrevueRemise, etat, symptom, clientId, appareilId } = response.data;
      alert(
        `Demande trouvée :\n- Date de dépôt : ${dateDepot}\n- Date prévue remise : ${datePrevueRemise}\n- État : ${etat}\n- Symptôme : ${symptom}\n- ID Client : ${clientId}\n- ID Appareil : ${appareilId}`
      );
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
      alert('Demande introuvable ou erreur côté serveur !');
    }
  };

  return (
    <div className="container">
      <h2>Enregistrer une Demande de Réparation</h2>
      <form>
        <div className="form-group">
          <label htmlFor="dateDepot">Date de dépôt :</label>
          <input
            type="date"
            id="dateDepot"
            name="dateDepot"
            value={demandeReparation.dateDepot}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="datePrevueRemise">Date prévue remise :</label>
          <input
            type="date"
            id="datePrevueRemise"
            name="datePrevueRemise"
            value={demandeReparation.datePrevueRemise}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="etat">État :</label>
          <input
            type="text"
            id="etat"
            name="etat"
            placeholder="État de la réparation"
            value={demandeReparation.etat}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="symptom">Symptômes :</label>
          <input
            type="text"
            id="symptom"
            name="symptom"
            placeholder="Symptômes signalés"
            value={demandeReparation.symptom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="clientId">ID Client :</label>
          <input
            type="number"
            id="clientId"
            name="clientId"
            placeholder="ID du client"
            value={demandeReparation.clientId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="appareilId">ID Appareil :</label>
          <input
            type="number"
            id="appareilId"
            name="appareilId"
            placeholder="ID de l'appareil"
            value={demandeReparation.appareilId}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={handleEnregistrer}>
            Enregistrer
          </button>
          <button type="button" onClick={handleRechercherParID}>
            Rechercher par ID
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemandeReparation;
