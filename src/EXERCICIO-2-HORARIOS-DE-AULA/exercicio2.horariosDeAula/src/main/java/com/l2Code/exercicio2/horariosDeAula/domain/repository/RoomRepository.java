package com.l2Code.exercicio2.horariosDeAula.domain.repository;

import com.l2Code.exercicio2.horariosDeAula.api.dtos.RoomStatusDto;
import com.l2Code.exercicio2.horariosDeAula.domain.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long>
{

    @Query(value = """
        SELECT r.id AS roomId,
               r.building_id AS buildingId,
               cs.day_of_week AS dayOfWeek,
               cs.start_time AS startTime,
               cs.end_time AS endTime,
               CASE 
                   WHEN cs.id IS NOT NULL THEN 'Ocupada'
                   ELSE 'Livre'
               END AS status
        FROM rooms r
        LEFT JOIN class_schedule cs ON r.id = cs.room_id
        ORDER BY r.id, cs.day_of_week, cs.start_time
        """, nativeQuery = true)
    List<RoomStatusDto> getRoomSchedules();
}
