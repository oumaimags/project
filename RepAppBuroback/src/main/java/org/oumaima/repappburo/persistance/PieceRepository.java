package org.oumaima.repappburo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PieceRepository extends JpaRepository<pieceRechange, Integer> {
    // Recherche par nom
    List<pieceRechange> findByNomP(String nomP);
}

