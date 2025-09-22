package com.l2Code.exercicio2.horariosDeAula.domain.repository;

import com.l2Code.exercicio2.horariosDeAula.api.dtos.ProfessorWorkloadDto;
import com.l2Code.exercicio2.horariosDeAula.domain.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Long> {

    @Query(value = """
            SELECT p.id AS professorId,
                               CONCAT(p.id, ' - Professor') AS professorName,
                               ROUND(SUM(EXTRACT(EPOCH FROM (cs.end_time::time - cs.start_time::time)) / 3600), 2) AS totalHours
                        FROM professors p
                        JOIN class c ON c.professor_id = p.id
                        JOIN class_schedule cs ON cs.class_id = c.id
                        GROUP BY p.id
                        ORDER BY totalHours DESC
    """, nativeQuery = true)
    List<ProfessorWorkloadDto> getProfessorsWorkload();
}
