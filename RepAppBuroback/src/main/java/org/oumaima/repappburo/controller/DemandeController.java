package org.oumaima.repappburo.controller;

import org.oumaima.repappburo.persistance.DemandeRep;
import org.oumaima.repappburo.persistance.Demande_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/demande")
public class DemandeController {

    @Autowired
    private Demande_Repository demandeRepRepository;

    // Récupérer toutes les demandes
    @GetMapping
    public List<DemandeRep> getAllDemandes() {
        return demandeRepRepository.findAll();
    }

    // Récupérer une demande par son code
    @GetMapping("/{codeRep}")
    public ResponseEntity<DemandeRep> getDemandeByCode(@PathVariable int codeRep) {
        Optional<DemandeRep> demandeRep = demandeRepRepository.findById(codeRep);
        if (demandeRep.isPresent()) {
            return new ResponseEntity<>(demandeRep.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Créer une nouvelle demande
    @PostMapping
    public ResponseEntity<DemandeRep> createDemande(@RequestBody DemandeRep demandeRep) {
        DemandeRep createdDemande = demandeRepRepository.save(demandeRep);
        return new ResponseEntity<>(createdDemande, HttpStatus.CREATED);
    }

    // Mettre à jour une demande existante
    @PutMapping("/{codeRep}")
    public ResponseEntity<DemandeRep> updateDemande(@PathVariable int codeRep, @RequestBody DemandeRep updatedDemandeRep) {
        if (!demandeRepRepository.existsById(codeRep)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        updatedDemandeRep.setCodeRep(codeRep);
        DemandeRep updatedDemande = demandeRepRepository.save(updatedDemandeRep);
        return new ResponseEntity<>(updatedDemande, HttpStatus.OK);
    }

    // Supprimer une demande
    @DeleteMapping("/{codeRep}")
    public ResponseEntity<Void> deleteDemande(@PathVariable int codeRep) {
        if (!demandeRepRepository.existsById(codeRep)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        demandeRepRepository.deleteById(codeRep);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Recherche des demandes par état
    @GetMapping("/etat/{etat}")
    public List<DemandeRep> getDemandesByEtat(@PathVariable String etat) {
        return demandeRepRepository.findByEtat(etat);
    }
}

