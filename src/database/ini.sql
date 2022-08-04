
CREATE TABLE birthday_fer.guests (
	id INT auto_increment NOT NULL,
	family varchar(200) NOT NULL,
	invitations_available varchar(100) NOT NULL,
	invitations_confirmed varchar(100) NULL,
	created DATETIME NULL,
	CONSTRAINT guests_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;


INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(1, 'Familia Chacón Aponte', '5', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(2, 'Familia Unzueta', '4', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(3, 'Familia Chacón ', '1', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(4, 'Familia Bravo', '2', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(5, 'Familia Bermúdez', '3', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(6, 'Familia Peña', '2', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(7, 'Familia Carvajal', '5', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(8, 'Familia Gutierrez', '4', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(9, 'Familia Medina', '5', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(10, 'Familia Muñoz', '3', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(11, 'Familia Garcia', '3', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(12, 'Familia Sanchez', '3', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(13, 'Ivonne Hermández', '1', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(14, 'Familia Jiménez', '4', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(15, 'Jaime Paredes', '1', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(16, 'Familia Maíz', '3', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(17, 'Familia Rincones ', '3', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(18, 'Familia Pereira', '5', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(19, 'Familia Pereira (eduardo)', '2', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(20, 'Familia Urbina Pereira', '4', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(21, 'Angie Ramirez', '1', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(22, 'amigos fernanda + acompañante', '6', NULL, NULL);
INSERT INTO birthday_fer.guests
(id, family, invitations_available, invitations_confirmed, created)
VALUES(23, 'Familia Rincones ', '3', NULL, NULL);
