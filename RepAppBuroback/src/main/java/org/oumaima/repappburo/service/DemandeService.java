package org.oumaima.repappburo.service;

import org.oumaima.repappburo.persistance.DemandeRep;
import org.oumaima.repappburo.persistance.Demande_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DemandeService {

    @Autowired
    private Demande_Repository demandeRepRepository;

    // Récupérer toutes les demandes de réparation
    public List<DemandeRep> getAllDemandesRep() {
        return demandeRepRepository.findAll();
    }

    // Récupérer une demande par son code de réparation
    public Optional<DemandeRep> getDemandeRepByCode(int codeRep) {
        return demandeRepRepository.findById(codeRep);
    }

    // Créer une nouvelle demande de réparation
    public DemandeRep createDemandeRep(DemandeRep demandeRep) {
        return demandeRepRepository.save(demandeRep);
    }

    // Mettre à jour une demande de réparation
    public DemandeRep updateDemandeRep(int codeRep, DemandeRep demandeRep) {
        if (demandeRepRepository.existsById(codeRep)) {
            demandeRep.setCodeRep(codeRep);
            return demandeRepRepository.save(demandeRep);
        }
        return null;
    }

    // Supprimer une demande de réparation
    public void deleteDemandeRep(int codeRep) {
        demandeRepRepository.deleteById(codeRep);
    }

    // Trouver les demandes par état
    public List<DemandeRep> findByEtat(String etat) {
        return demandeRepRepository.findByEtat(etat);
    }

    // Trouver les demandes par numéro de série
    public List<DemandeRep> findByNumS(int numS) {
        return demandeRepRepository.findByNumS(numS);
    }
}

