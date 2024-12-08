package org.oumaima.repappburo.service;

import java.util.List;

import org.oumaima.repappburo.persistance.Reparation;
import org.oumaima.repappburo.persistance.ReparationRep;
import org.springframework.stereotype.Service;
@Service
public class ReparationService {
	

	    private final ReparationRep ficheReparationRepository;

	    public ReparationService(ReparationRep ficheReparationRepository) {
	        this.ficheReparationRepository = ficheReparationRepository;
	    }
	    public List<Reparation> getAllFiches() {
	        return ficheReparationRepository.findAll();
	    }

	    public Reparation getFicheById(Long id) {
	        return ficheReparationRepository.findById(id)
	                .orElseThrow();
	    }

	    // Créer une nouvelle fiche de réparation
	    public Reparation createFiche(Reparation ficheReparation) {
	        return ficheReparationRepository.save(ficheReparation);
	    }

	    // Modifier une fiche de réparation
	    public Reparation updateFiche(Long id, Reparation ficheDetails) {
	        Reparation fiche = getFicheById(id);

	        fiche.setSymptomesPanne(ficheDetails.getSymptomesPanne());
	        fiche.setDatePrevueRemise(ficheDetails.getDatePrevueRemise());
	        fiche.setDateFinReparation(ficheDetails.getDateFinReparation());
	        fiche.setDetailsReparation(ficheDetails.getDetailsReparation());
	        fiche.setStatut(ficheDetails.getStatut());

	        return ficheReparationRepository.save(fiche);
	    }
	    public void deleteFiche(Long id) {
	        Reparation fiche = getFicheById(id);
	        ficheReparationRepository.delete(fiche);
	    }
	}

