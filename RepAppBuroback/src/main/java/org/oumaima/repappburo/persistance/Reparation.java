package org.oumaima.repappburo.persistance;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
public class Reparation {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String symptomesPanne;
	    private Date dateDepot;
	    private Date datePrevueRemise;
	    private Date dateFinReparation;
	    private String detailsReparation;
	    private String statut;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getSymptomesPanne() {
			return symptomesPanne;
		}
		public void setSymptomesPanne(String symptomesPanne) {
			this.symptomesPanne = symptomesPanne;
		}
		public Date getDateDepot() {
			return dateDepot;
		}
		public void setDateDepot(Date dateDepot) {
			this.dateDepot = dateDepot;
		}
		public Date getDatePrevueRemise() {
			return datePrevueRemise;
		}
		public void setDatePrevueRemise(Date datePrevueRemise) {
			this.datePrevueRemise = datePrevueRemise;
		}
		public Date getDateFinReparation() {
			return dateFinReparation;
		}
		public void setDateFinReparation(Date dateFinReparation) {
			this.dateFinReparation = dateFinReparation;
		}
		public String getDetailsReparation() {
			return detailsReparation;
		}
		public void setDetailsReparation(String detailsReparation) {
			this.detailsReparation = detailsReparation;
		}
		public String getStatut() {
			return statut;
		}
		public void setStatut(String statut) {
			this.statut = statut;
		} 

	
	}


