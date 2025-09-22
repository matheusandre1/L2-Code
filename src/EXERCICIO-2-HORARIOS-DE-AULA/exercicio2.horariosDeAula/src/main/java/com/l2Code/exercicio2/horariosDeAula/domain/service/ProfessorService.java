package com.l2Code.exercicio2.horariosDeAula.domain.service;

import com.l2Code.exercicio2.horariosDeAula.api.dtos.ProfessorWorkloadDto;
import com.l2Code.exercicio2.horariosDeAula.domain.repository.ProfessorRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessorService {

    private final ProfessorRepository professorRepository;
    public ProfessorService(ProfessorRepository professorRepository)
    {
        this.professorRepository = professorRepository;
    }


    @Transactional
    public List<ProfessorWorkloadDto> getTotalHours()
    {
        return professorRepository.getProfessorsWorkload();
    }
}
