import axios from 'axios';

const API_URL = 'http://localhost:9999/api/pieces'; 

// Récupérer toutes les pièces
export const getAllPieces = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des pièces', error);
        throw error;
    }
};

// Récupérer une pièce par ID
export const getPieceById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la pièce', error);
        throw error;
    }
};

// Créer une pièce
export const createPiece = async (pieceRechange) => {
    try {
        const response = await axios.post(API_URL, pieceRechange);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création de la pièce', error);
        throw error;
    }
};

// Mettre à jour une pièce
export const updatePiece = async (id, pieceRechange) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, pieceRechange);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la pièce', error);
        throw error;
    }
};

// Supprimer une pièce
export const deletePiece = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Erreur lors de la suppression de la pièce', error);
        throw error;
    }
};
