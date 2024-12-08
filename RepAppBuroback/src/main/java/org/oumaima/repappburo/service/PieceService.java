package org.oumaima.repappburo.service;
import org.oumaima.repappburo.persistance.PieceRepository;
import org.oumaima.repappburo.persistance.pieceRechange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PieceService {

    @Autowired
    private PieceRepository pieceRechangeRepository;

    /**
     * Récupère toutes les pièces disponibles.
     * @return Liste de toutes les pièces.
     */
    public List<pieceRechange> getAllPieces() {
        return pieceRechangeRepository.findAll();
    }

    /**
     * Récupère une pièce par son ID.
     * @param id Identifiant de la pièce.
     * @return Une option contenant la pièce si trouvée.
     */
    public Optional<pieceRechange> getPieceById(int id) {
        return pieceRechangeRepository.findById(id);
    }

    /**
     * Ajoute une nouvelle pièce.
     * @param piece La pièce à ajouter.
     * @return La pièce créée.
     */
    public pieceRechange createPiece(pieceRechange piece) {
        return pieceRechangeRepository.save(piece);
    }

    /**
     * Met à jour une pièce existante.
     * @param id Identifiant de la pièce.
     * @param piece Les nouvelles informations de la pièce.
     * @return La pièce mise à jour, ou null si elle n'existe pas.
     */
    public pieceRechange updatePiece(int id, pieceRechange piece) {
        if (pieceRechangeRepository.existsById(id)) {
            piece.setCode(id); // Assure que l'ID est correctement défini
            return pieceRechangeRepository.save(piece);
        }
        return null;
    }

    /**
     * Supprime une pièce par son ID.
     * @param id Identifiant de la pièce.
     */
    public void deletePiece(int id) {
        pieceRechangeRepository.deleteById(id);
    }

    /**
     * Recherche des pièces par nom.
     * @param nomP Nom de la pièce à rechercher.
     * @return Liste des pièces correspondant au nom.
     */
    public List<pieceRechange> findPiecesByName(String nomP) {
        return pieceRechangeRepository.findByNomP(nomP);
    }
}


