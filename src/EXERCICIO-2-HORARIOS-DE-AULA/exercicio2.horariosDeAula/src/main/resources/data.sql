

TRUNCATE TABLE departments RESTART IDENTITY CASCADE;


INSERT INTO departments (id, name) VALUES
(1, 'Computer Science'),
(2, 'Mathematics'),
(3, 'Physics'),
(4, 'Chemistry'),
(5, 'Biology'),
(6, 'Engineering'),
(7, 'History'),
(8, 'Geography'),
(9, 'Economics'),
(10, 'Philosophy'),
(11, 'Psychology'),
(12, 'Medicine'),
(13, 'Law'),
(14, 'Sociology'),
(15, 'Political Science'),
(16, 'Education'),
(17, 'Architecture'),
(18, 'Linguistics'),
(19, 'Music'),
(20, 'Theater')
ON CONFLICT (id) DO NOTHING;


INSERT INTO titles (id, name) VALUES
(1, 'Assistant Professor'),
(2, 'Associate Professor'),
(3, 'Full Professor'),
(4, 'Lecturer'),
(5, 'Researcher'),
(6, 'Teaching Assistant'),
(7, 'Visiting Professor'),
(8, 'Adjunct Professor'),
(9, 'Emeritus Professor'),
(10, 'Coordinator'),
(11, 'Head of Department'),
(12, 'Dean'),
(13, 'Vice-Dean'),
(14, 'Lab Supervisor'),
(15, 'Postdoc Researcher'),
(16, 'Senior Lecturer'),
(17, 'Junior Lecturer'),
(18, 'Instructor'),
(19, 'Tutor'),
(20, 'Mentor')
ON CONFLICT (id) DO NOTHING;


INSERT INTO professors (id, department_id, title_id) VALUES
(1, 1, 1), (2, 1, 2), (3, 2, 3), (4, 2, 4), (5, 3, 5),
(6, 3, 6), (7, 4, 7), (8, 4, 8), (9, 5, 9), (10, 5, 10),
(11, 6, 11), (12, 6, 12), (13, 7, 13), (14, 7, 14), (15, 8, 15),
(16, 8, 16), (17, 9, 17), (18, 9, 18), (19, 10, 19), (20, 10, 20)
ON CONFLICT (id) DO NOTHING;

INSERT INTO buildings (id, name) VALUES
(1, 'Main Building'), (2, 'Science Hall'), (3, 'Engineering Block'),
(4, 'Medical Center'), (5, 'Law School'), (6, 'Library'),
(7, 'Math Tower'), (8, 'Arts Building'), (9, 'Sports Complex'),
(10, 'Chemistry Lab'), (11, 'Physics Tower'), (12, 'Biology Wing'),
(13, 'History Hall'), (14, 'Philosophy House'), (15, 'Economics Block'),
(16, 'Education Center'), (17, 'Architecture Studio'), (18, 'Music Hall'),
(19, 'Theater Building'), (20, 'Psychology Annex')
ON CONFLICT (id) DO NOTHING;


INSERT INTO rooms (id, building_id) VALUES
(1, 1), (2, 1), (3, 2), (4, 2), (5, 3), (6, 3), (7, 4), (8, 4), (9, 5), (10, 5),
(11, 6), (12, 6), (13, 7), (14, 7), (15, 8), (16, 8), (17, 9), (18, 9), (19, 10), (20, 10)
ON CONFLICT (id) DO NOTHING;


INSERT INTO subjects (id, code, name, department_id) VALUES
(1, 'CS101', 'Intro to Programming', 1),
(2, 'CS102', 'Data Structures', 1),
(3, 'CS103', 'Databases', 1),
(4, 'MATH101', 'Calculus I', 2),
(5, 'MATH102', 'Linear Algebra', 2),
(6, 'PHYS101', 'Mechanics', 3),
(7, 'CHEM101', 'Organic Chemistry', 4),
(8, 'BIO101', 'Cell Biology', 5),
(9, 'ENG101', 'Engineering Basics', 6),
(10, 'HIST101', 'World History', 7),
(11, 'GEOG101', 'Physical Geography', 8),
(12, 'ECON101', 'Microeconomics', 9),
(13, 'PHIL101', 'Ethics', 10),
(14, 'PSY101', 'Introduction to Psychology', 11),
(15, 'MED101', 'Anatomy', 12),
(16, 'LAW101', 'Constitutional Law', 13),
(17, 'SOC101', 'Sociology Basics', 14),
(18, 'POL101', 'Political Systems', 15),
(19, 'EDU101', 'Pedagogy', 16),
(20, 'ARCH101', 'Design Fundamentals', 17)
ON CONFLICT (id) DO NOTHING;

INSERT INTO professor_subject (professor_id, subject_id) VALUES (1, 1);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (1, 2);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (2, 3);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (2, 4);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (3, 5);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (3, 6);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (4, 7);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (4, 8);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (5, 9);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (5, 10);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (6, 11);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (6, 12);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (7, 13);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (7, 14);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (8, 15);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (8, 16);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (9, 17);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (9, 18);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (10, 19);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (10, 20);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (11, 1);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (11, 3);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (12, 2);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (12, 4);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (13, 5);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (13, 6);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (14, 7);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (14, 8);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (15, 9);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (15, 10);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (16, 11);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (16, 12);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (17, 13);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (17, 14);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (18, 15);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (18, 16);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (19, 17);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (19, 18);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (20, 19);
INSERT INTO professor_subject (professor_id, subject_id) VALUES (20, 20);



INSERT INTO subject_prerequisites (id, subject_id, prerequisite_id) VALUES
(1,2,1),(2,3,2),(3,5,4),(4,6,4),(5,7,5),(6,8,7),(7,9,1),(8,12,5),
(9,13,4),(10,14,12),(11,15,8),(12,16,10),(13,17,13),(14,18,17),
(15,19,14),(16,20,9),(17,11,4),(18,10,4),(19,6,2),(20,12,2)
ON CONFLICT (id) DO NOTHING;


INSERT INTO class (id, subject_id, professor_id, year, semester, code) VALUES
(1,1,1,2024,1,'C1'),(2,2,1,2024,1,'C2'),(3,3,2,2024,2,'C3'),(4,4,3,2024,2,'C4'),
(5,5,4,2024,1,'C5'),(6,6,5,2024,1,'C6'),(7,7,6,2024,2,'C7'),(8,8,7,2024,2,'C8'),
(9,9,8,2024,1,'C9'),(10,10,9,2024,1,'C10'),(11,11,10,2024,2,'C11'),(12,12,11,2024,2,'C12'),
(13,13,12,2024,1,'C13'),(14,14,13,2024,1,'C14'),(15,15,14,2024,2,'C15'),(16,16,15,2024,2,'C16'),
(17,17,16,2024,1,'C17'),(18,18,17,2024,1,'C18'),(19,19,18,2024,2,'C19'),(20,20,19,2024,2,'C20')
ON CONFLICT (id) DO NOTHING;


INSERT INTO class_schedule (id, class_id, room_id, day_of_week, start_time, end_time) VALUES
(1,1,1,'Monday','08:00','10:00'),
(2,2,2,'Tuesday','10:00','12:00'),
(3,3,3,'Wednesday','08:00','10:00'),
(4,4,4,'Thursday','10:00','12:00'),
(5,5,5,'Friday','14:00','16:00'),
(6,6,6,'Monday','16:00','18:00'),
(7,7,7,'Tuesday','08:00','10:00'),
(8,8,8,'Wednesday','10:00','12:00'),
(9,9,9,'Thursday','14:00','16:00'),
(10,10,10,'Friday','16:00','18:00'),
(11,11,11,'Monday','08:00','10:00'),
(12,12,12,'Tuesday','10:00','12:00'),
(13,13,13,'Wednesday','14:00','16:00'),
(14,14,14,'Thursday','16:00','18:00'),
(15,15,15,'Friday','08:00','10:00'),
(16,16,16,'Monday','10:00','12:00'),
(17,17,17,'Tuesday','14:00','16:00'),
(18,18,18,'Wednesday','16:00','18:00'),
(19,19,19,'Thursday','08:00','10:00'),
(20,20,20,'Friday','10:00','12:00')
ON CONFLICT (id) DO NOTHING;

