package org.oumaima.repappburo.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Demande_Repository extends JpaRepository<DemandeRep, Integer> {
    List<DemandeRep> findByEtat(String etat);
    List<DemandeRep> findByNumS(int numS);
}

