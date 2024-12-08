package org.oumaima.repappburo.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface Client_Repository extends JpaRepository<Client, Long> {
List<Client>findByNom(String nom);
}
