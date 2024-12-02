import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';  // Remplacez par l'URL de votre backend

// Récupérer tous les utilisateurs
export const getAllUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        throw error;
    }
};

// Récupérer un utilisateur par ID
export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur', error);
        throw error;
    }
};

// Créer un utilisateur
export const createUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur', error);
        throw error;
    }
};

// Mettre à jour un utilisateur
export const updateUser = async (id, user) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, user);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
        throw error;
    }
};

// Supprimer un utilisateur
export const deleteUser = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur', error);
        throw error;
    }
};
