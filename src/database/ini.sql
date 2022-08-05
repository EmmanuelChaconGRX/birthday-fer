
CREATE TABLE guests (
	id INT auto_increment NOT NULL,
	family varchar(200) NOT NULL,
	invitations_available varchar(100) NOT NULL,
	invitations_confirmed varchar(100) NULL,
	updated_at DATETIME NULL,
	CONSTRAINT guests_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;


INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(1, 'Familia Chacón Aponte', '5', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(2, 'Familia Unzueta', '4', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(3, 'Familia Chacón ', '1', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(4, 'Familia Bravo', '2', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(5, 'Familia Bermúdez', '3', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(6, 'Familia Peña', '2', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(7, 'Familia Carvajal', '5', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(8, 'Familia Gutierrez', '4', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(9, 'Familia Medina', '5', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(10, 'Familia Muñoz', '3', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(11, 'Familia Garcia', '3', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(12, 'Familia Sanchez', '3', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(13, 'Ivonne Hermández', '1', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(14, 'Familia Jiménez', '4', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(15, 'Jaime Paredes', '1', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(16, 'Familia Maíz', '3', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(17, 'Familia Rincones ', '3', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(18, 'Familia Pereira', '5', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(19, 'Familia Pereira (eduardo)', '2', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(20, 'Familia Urbina Pereira', '4', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(21, 'Angie Ramirez', '1', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(22, 'amigos fernanda + acompañante', '6', NULL, NULL);
INSERT INTO guests
(id, family, invitations_available, invitations_confirmed, updated_at)
VALUES(23, 'Familia Rincones ', '3', NULL, NULL);
