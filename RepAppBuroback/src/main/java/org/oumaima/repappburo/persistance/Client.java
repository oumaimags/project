package org.oumaima.repappburo.persistance;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
@Entity

public class Client {
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private Long id;
		private String adresse;
		private String nom;
		private String numtel;
		public Client( String adresse, String nom, String numtel) {
			super();
			
			this.adresse = adresse;
			this.nom = nom;
			this.numtel = numtel;
		}
		public Client() {
			super();
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		
		public String getAdresse() {
			return adresse;
		}
		public void setAdresse(String adresse) {
			this.adresse = adresse;
		}
		public String getNom() {
			return nom;
		}
		public void setNom(String nom) {
			this.nom = nom;
		}
		public String getNumtel() {
			return numtel;
		}
		public void setNumtel(String numtel) {
			this.numtel = numtel;
		}
		@Override
		public int hashCode() {
			return Objects.hash( id);
		}
		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Client other = (Client) obj;
			return Objects.equals(adresse, other.adresse) 
					&& Objects.equals(id, other.id) && Objects.equals(nom, other.nom)
					&& Objects.equals(numtel, other.numtel);
		}
		

		
}
