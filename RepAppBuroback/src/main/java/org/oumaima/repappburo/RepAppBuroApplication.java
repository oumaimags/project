package org.oumaima.repappburo;

import org.oumaima.repappburo.persistance.Client;
import org.oumaima.repappburo.service.ClientService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class RepAppBuroApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(RepAppBuroApplication.class, args);
        ClientService clientService = context.getBean(ClientService.class);

        // Define client details you want to delete
        String nom = "oumaima";
        String adresse = "guesmi address";
        String numtel = "22";

        // Find client by nom, adresse, and numtel (make sure it's unique)
        List<Client> clients = clientService.findByNom(nom);

        // Find the client with the matching adresse and numtel
        Client clientToDelete = null;
        for (Client client : clients) {
            if (client.getAdresse().equals(adresse) && client.getNumtel().equals(numtel)) {
                clientToDelete = client;
                break;
            }
        }

        // Delete the client if found
        if (clientToDelete != null) {
            clientService.deleteClient(clientToDelete.getId());
            System.out.println("Client with nom " + nom + " and adresse " + adresse + " has been deleted.");
        } else {
            System.out.println("Client not found.");
        }
    }
}



