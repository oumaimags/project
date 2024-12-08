package org.oumaima.repappburo.persistance;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Identifiant unique de l'utilisateur

    @Column(nullable = false, unique = true)
    private String username; // Nom d'utilisateur unique

    @Column(nullable = false)
    private String password; // Mot de passe de l'utilisateur

    @Column(nullable = false)
    private String role; // Rôle de l'utilisateur (ex. ADMIN, CLIENT_SERVICE)

    @Column(nullable = false)
    private boolean active = true; // Statut actif/inactif
}

