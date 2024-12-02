import axios from 'axios';

const API_URL = 'http://localhost:8080/api/clients';  // Remplacez par l'URL de votre backend

// Récupérer tous les clients
export const getAllClients = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des clients', error);
        throw error;
    }
};

// Récupérer un client par ID
export const getClientById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du client', error);
        throw error;
    }
};

// Créer un client
export const createClient = async (client) => {
    try {
        const response = await axios.post(API_URL, client);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du client', error);
        throw error;
    }
};

// Mettre à jour un client
export const updateClient = async (id, client) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, client);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du client', error);
        throw error;
    }
};

// Supprimer un client
export const deleteClient = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression du client', error);
        throw error;
    }
};
