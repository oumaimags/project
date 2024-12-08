package org.oumaima.repappburo.service;

import org.oumaima.repappburo.persistance.Client;
import org.oumaima.repappburo.persistance.Client_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private Client_Repository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Optional<Client> getClientById(Long id) {
        return clientRepository.findById(id);
    }

    public void ajouterClient(Client c) {
		clientRepository.save(c);
	}

    public Client updateClient(Long id, Client client) {
        if (clientRepository.existsById(id)) {
            client.setNom(null);
            client.setNumtel(null);
            client.setAdresse(null);
            return clientRepository.save(client);
        }
        return null; 
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    public List<Client> findByNom(String nom) {
        return clientRepository.findByNom(nom);
    }
}

