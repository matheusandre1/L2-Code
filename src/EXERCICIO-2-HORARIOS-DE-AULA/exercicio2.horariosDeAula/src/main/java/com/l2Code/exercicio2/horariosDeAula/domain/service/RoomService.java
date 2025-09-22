package com.l2Code.exercicio2.horariosDeAula.domain.service;

import com.l2Code.exercicio2.horariosDeAula.api.dtos.RoomStatusDto;
import com.l2Code.exercicio2.horariosDeAula.domain.repository.RoomRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;
    public RoomService(RoomRepository roomRepository)
    {
        this.roomRepository = roomRepository;
    }

    @Transactional
    public List<RoomStatusDto> getRoomSchedules() {
        return roomRepository.getRoomSchedules();
    }
}
