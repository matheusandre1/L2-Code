package com.l2Code.exercicio2.horariosDeAula.domain.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "subject_prerequisites")
@NoArgsConstructor
@AllArgsConstructor
public class SubJectPreRequisite{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "prerequisite_id", nullable = false)
    private Subject prerequisite;
}
