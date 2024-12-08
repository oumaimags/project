package org.oumaima.repappburo.controller;

import java.util.List;

import org.oumaima.repappburo.persistance.Reparation;
import org.oumaima.repappburo.service.ReparationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Reparation")
public class reparationController {
	private final ReparationService ficheReparationService;

    public reparationController(ReparationService ficheReparationService) {
        this.ficheReparationService = ficheReparationService;
    }
    @GetMapping
    public List<Reparation> getAllFiches() {
        return ficheReparationService.getAllFiches();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Reparation> getFicheById(@PathVariable Long id) {
        return ResponseEntity.ok(ficheReparationService.getFicheById(id));
    }
 // creer une fiche rep
    @PostMapping
    public ResponseEntity<Reparation> createFiche(@RequestBody Reparation ficheReparation) {
        return ResponseEntity.ok(ficheReparationService.createFiche(ficheReparation));
    }

    //  Modifier une fiche
    @PutMapping("/{id}")
    public ResponseEntity<Reparation> updateFiche(@PathVariable Long id, @RequestBody Reparation ficheDetails) {
        return ResponseEntity.ok(ficheReparationService.updateFiche(id, ficheDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFiche(@PathVariable Long id) {
        ficheReparationService.deleteFiche(id);
        return ResponseEntity.noContent().build();
    }

}
