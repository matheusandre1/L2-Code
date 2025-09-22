package com.l2Code.exercicio2.horariosDeAula.api.controller;

import com.l2Code.exercicio2.horariosDeAula.api.dtos.RoomStatusDto;
import com.l2Code.exercicio2.horariosDeAula.domain.service.RoomService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService)
    {
        this.roomService = roomService;
    }

    @GetMapping("/schedules")
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Faz a Busca e Verifica se Sala está ocupado ou livre")
    public List<RoomStatusDto> getRoomSchedules()
    {
        return roomService.getRoomSchedules();
    }
}
