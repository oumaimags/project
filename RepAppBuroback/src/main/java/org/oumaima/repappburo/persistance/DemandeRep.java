package org.oumaima.repappburo.persistance;

import java.time.LocalDate;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DemandeRep {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int codeRep;
	private LocalDate datedep;
	private LocalDate dateprev;
	private String etat;
	private int numS;
	public DemandeRep(int codeRep, LocalDate datedep, LocalDate dateprev, String etat, int numS) {
		super();
		this.codeRep = codeRep;
		this.datedep = datedep;
		this.dateprev = dateprev;
		this.etat = etat;
		this.numS = numS;
	}
	public int getCodeRep() {
		return codeRep;
	}
	public void setCodeRep(int codeRep) {
		this.codeRep = codeRep;
	}
	public LocalDate getDatedep() {
		return datedep;
	}
	public void setDatedep(LocalDate datedep) {
		this.datedep = datedep;
	}
	public LocalDate getDateprev() {
		return dateprev;
	}
	public void setDateprev(LocalDate dateprev) {
		this.dateprev = dateprev;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	public int getNumS() {
		return numS;
	}
	public void setNumS(int numS) {
		this.numS = numS;
	}
	@Override
	public int hashCode() {
		return Objects.hash(codeRep);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DemandeRep other = (DemandeRep) obj;
		return codeRep == other.codeRep && Objects.equals(datedep, other.datedep)
				&& Objects.equals(dateprev, other.dateprev) && Objects.equals(etat, other.etat) && numS == other.numS;
	}
	@Override
	public String toString() {
		return "DemandeRep [codeRep=" + codeRep + ", datedep=" + datedep + ", dateprev=" + dateprev + ", etat=" + etat
				+ ", numS=" + numS + "]";
	}
	

}
