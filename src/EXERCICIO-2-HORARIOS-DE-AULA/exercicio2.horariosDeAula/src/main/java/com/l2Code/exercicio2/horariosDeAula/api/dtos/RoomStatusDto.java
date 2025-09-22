package com.l2Code.exercicio2.horariosDeAula.api.dtos;

public interface RoomStatusDto {

    Long getRoomId();
    Long getBuildingId();
    String getDayOfWeek();
    String getStartTime();
    String getEndTime();
    String getStatus();
}
