import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PieceRechange.css';

const PieceRechange = () => {
  const [piece, setPiece] = useState({
    nom: '',
    code: '',
    prixAchat: 0,
    prixHT: 0,
    prixTTC: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPiece((prev) => ({
      ...prev,
      [name]: name.startsWith('prix') ? parseFloat(value) || 0 : value,
    }));
  };

  const handleEnregistrer = async () => {
    const { nom, code, prixAchat, prixHT, prixTTC } = piece;

    if (!nom || !code || prixAchat <= 0 || prixHT <= 0 || prixTTC <= 0) {
      alert('Tous les champs sont obligatoires et doivent être valides !');
      return;
    }

    try {
      await axios.post('http://localhost:9999/api/pieces', piece, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Pièce ajoutée avec succès !');
      navigate('/Facture');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
      alert('Erreur lors de l\'enregistrement !');
    }
  };

  const handleRechercherParID = async () => {
    try {
      const id = prompt("Entrez l'ID de la pièce à rechercher :");
      if (!id) {
        alert("ID invalide !");
        return;
      }
      const response = await axios.get(`http://localhost:9999/api/pieces/${id}`);
      const { nom, code, prixAchat, prixHT, prixTTC } = response.data;
      alert(
        `Pièce trouvée :\n- Nom : ${nom}\n- Code : ${code}\n- Prix Achat : ${prixAchat}\n- Prix HT : ${prixHT}\n- Prix TTC : ${prixTTC}`
      );
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
      alert('Pièce introuvable ou erreur côté serveur !');
    }
  };

  return (
    <div className="container">
      <h2>Ajouter une Pièce de Rechange</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Nom de la pièce"
            value={piece.nom}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="code">Code :</label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Code de la pièce"
            value={piece.code}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prixAchat">Prix Achat :</label>
          <input
            type="number"
            id="prixAchat"
            name="prixAchat"
            placeholder="Prix d'achat"
            value={piece.prixAchat}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prixHT">Prix HT :</label>
          <input
            type="number"
            id="prixHT"
            name="prixHT"
            placeholder="Prix Hors Taxes"
            value={piece.prixHT}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prixTTC">Prix TTC :</label>
          <input
            type="number"
            id="prixTTC"
            name="prixTTC"
            placeholder="Prix Toutes Taxes Comprises"
            value={piece.prixTTC}
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

export default PieceRechange;

