import axios from 'axios';

// Récupérer toutes les demandes
export const getAllDemandes = async () => {
    try {
        const response = await axios.get('http://localhost:9999/api/demande');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des demandes', error);
        throw error;
    }
};

// Récupérer une demande par ID
export const getDemandeByCode = async (id) => {
    try {
        const response = await axios.get(`${'http://localhost:9999/api/demande'}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la demande', error);
        throw error;
    }
};

// Créer une demande
export const createDemande = async (demandeRep) => {
    try {
        const response = await axios.post('http://localhost:9999/api/demande', demandeRep);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de la demande', error);
        throw error;
    }
};

// Mettre à jour une demande
export const updateDemande = async (id, demandeRep) => {
    try {
        const response = await axios.put(`${'http://localhost:9999/api/demande'}/${id}`, demandeRep);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la demande', error);
        throw error;
    }
};

// Supprimer une demande
export const deleteDemande = async (id) => {
    try {
        await axios.delete(`${'http://localhost:9999/api/demande'}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression de la demande', error);
        throw error;
    }
};
