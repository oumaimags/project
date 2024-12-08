package org.oumaima.repappburo.persistance;

import java.time.LocalDate;
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
@Getter
@Setter
@NonNull
@NoArgsConstructor
@EqualsAndHashCode
public class Facture {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int codeF;
	private LocalDate dateF;
	private double montant;

}
