package com.l2Code.exercicio2.horariosDeAula.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "professors")
@NoArgsConstructor
@AllArgsConstructor
public class Professor{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @ManyToOne
    @JoinColumn(name = "title_id")
    private Title title;

    @ManyToMany
    @JoinTable(
            name = "professor_subject",
            joinColumns = @JoinColumn(name = "professor_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id"),
            uniqueConstraints = {
                    @UniqueConstraint(columnNames = {"professor_id", "subject_id"})
            }
    )
    private List<Subject> subjects = new ArrayList<>();

    @OneToMany(mappedBy = "professor")
    private List<ClassEntity> classes = new ArrayList<>();
}
