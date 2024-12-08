package org.oumaima.repappburo.controller;

import org.oumaima.repappburo.persistance.Client;
import org.oumaima.repappburo.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    // Récupérer tous les clients
    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    // Récupérer un client par son ID
    @GetMapping(value="/{id}")
    public Optional<Client> getClientById(@PathVariable Long id) {
        return clientService.getClientById(id);
    }

    // Ajouter un nouveau client
    @PostMapping("/ajouter")
    public String ajouteClient(@RequestBody Client c) {
        System.out.println("Données reçues : Nom = " + c.getNom() + ", Adresse = " + c.getAdresse() + ", numtel = " + c.getNumtel());
        clientService.ajouterClient(c);
        return "Client ajouté avec succès !";
    }

    // Mettre à jour un client
    @PutMapping(value="/{id}")
    public Client updateClient(@PathVariable Long id, @RequestBody Client client) {
        return clientService.updateClient(id, client);
    }

    // Supprimer un client
    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
    }

    // Recherche par nom
    @GetMapping(value="/search")
    public List<Client> findByNom(@RequestParam String nom) {
        return clientService.findByNom(nom);
    }
}

