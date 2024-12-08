import axios from 'axios';

// Base URL de l'API Spring Boot
const API_URL = "http://localhost:9999/api/Reparation";

const ficheReparationApi = {
  // Récupérer toutes les fiches de réparation
  getAll: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des fiches :", error);
      throw error;
    }
  },

  // Récupérer une fiche de réparation par ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la fiche avec ID ${id}:`, error);
      throw error;
    }
  },

  // Créer une nouvelle fiche de réparation
  create: async (ficheData) => {
    try {
      const response = await axios.post(API_URL, ficheData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création d'une fiche :", error);
      throw error;
    }
  },

  // Mettre à jour une fiche de réparation par ID
  update: async (id, ficheData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, ficheData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la fiche avec ID ${id}:`, error);
      throw error;
    }
  },

  // Supprimer une fiche de réparation par ID
  delete: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de la fiche avec ID ${id}:`, error);
      throw error;
    }
  },
};

export default ficheReparationApi;
