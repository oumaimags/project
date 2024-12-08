import axios from 'axios';

// Récupérer tous les clients
export const getAllClients = async () => {
    try {
         await axios.get('http://localhost:9999/api/client');
    } catch (error) {
        console.error('Erreur lors de la récupération des clients', error);
        throw error;
    }
};

// Récupérer un client par ID
export const getClientById = async (id) => {
    try {
        await axios.get(`${'http://localhost:9999/api/client'}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la récupération du client', error);
        throw error;
    }
};

// Créer un client
export const createClient = async (client) => {
    try {
       await axios.post('http://localhost:9999/api/Client/ajouter', client);
    } catch (error) {
        console.error('Erreur lors de la création du client', error);
        throw error;
    }
};

// Mettre à jour un client
export const updateClient = async (id, client) => {
    try {
         await axios.put(`${'http://localhost:9999/api/client'}/${id}`, client);
    } catch (error) {
        console.error('Erreur lors de la mise à jour du client', error);
        throw error;
    }
};

// Supprimer un client
export const deleteClient = async (id) => {
    try {
        await axios.delete(`${'http://localhost:9999/api/client'}/${id}`,client);
    } catch (error) {
        console.error('Erreur lors de la suppression du client', error);
        throw error;
    }
};
