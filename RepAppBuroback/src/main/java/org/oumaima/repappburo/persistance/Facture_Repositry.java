package org.oumaima.repappburo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Facture_Repositry extends JpaRepository<Facture, Integer> {
    
}
