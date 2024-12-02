import axios from 'axios';

const API_URL = 'http://localhost:8080/api/demandes';  // Remplacez par l'URL de votre backend

// Récupérer toutes les demandes
export const getAllDemandes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des demandes', error);
        throw error;
    }
};

// Récupérer une demande par ID
export const getDemandeByCode = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la demande', error);
        throw error;
    }
};

// Créer une demande
export const createDemande = async (demandeRep) => {
    try {
        const response = await axios.post(API_URL, demandeRep);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de la demande', error);
        throw error;
    }
};

// Mettre à jour une demande
export const updateDemande = async (id, demandeRep) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, demandeRep);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la demande', error);
        throw error;
    }
};

// Supprimer une demande
export const deleteDemande = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression de la demande', error);
        throw error;
    }
};
