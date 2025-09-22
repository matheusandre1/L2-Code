package com.l2Code.exercicio2.horariosDeAula.api.controller;

import com.l2Code.exercicio2.horariosDeAula.api.dtos.ProfessorWorkloadDto;
import com.l2Code.exercicio2.horariosDeAula.domain.service.ProfessorService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/professor")
public class ProfessorController {

    private final ProfessorService professorService;
    public ProfessorController(ProfessorService schoolService)
    {
        this.professorService = schoolService;
    }


    @GetMapping("/workload")
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Busca a Carga de Trabalho em Horas")
    public List<ProfessorWorkloadDto> getWorkloadProfessors()
    {
        return professorService.getTotalHours();
    }
}
