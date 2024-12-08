package org.oumaima.repappburo.controller;

import org.oumaima.repappburo.persistance.Facture;
import org.oumaima.repappburo.persistance.Facture_Repositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/facture")
public class FactureController {

    @Autowired
    private Facture_Repositry factureRepository;

    // Récupérer toutes les factures
    @GetMapping
    public List<Facture> getAllFactures() {
        return factureRepository.findAll();
    }

    // Récupérer une facture par son code
    @GetMapping("/{codeF}")
    public ResponseEntity<Facture> getFactureByCode(@PathVariable int codeF) {
        Optional<Facture> facture = factureRepository.findById(codeF);
        if (facture.isPresent()) {
            return new ResponseEntity<>(facture.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Créer une nouvelle facture
    @PostMapping
    public ResponseEntity<Facture> createFacture(@RequestBody Facture facture) {
        Facture createdFacture = factureRepository.save(facture);
        return new ResponseEntity<>(createdFacture, HttpStatus.CREATED);
    }

    // Mettre à jour une facture existante
    @PutMapping("/{codeF}")
    public ResponseEntity<Facture> updateFacture(@PathVariable int codeF, @RequestBody Facture updatedFacture) {
        if (!factureRepository.existsById(codeF)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        updatedFacture.setCodeF(codeF);
        Facture updated = factureRepository.save(updatedFacture);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    // Supprimer une facture
    @DeleteMapping("/{codeF}")
    public ResponseEntity<Void> deleteFacture(@PathVariable int codeF) {
        if (!factureRepository.existsById(codeF)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        factureRepository.deleteById(codeF);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

