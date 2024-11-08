CREATE SCHEMA IF NOT EXISTS auth;

--- Типы данных ---

--- Функции ---

--- Таблицы ---
CREATE TABLE IF NOT EXISTS users."data" (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"name" varchar NOT NULL,
	id_role int4 NOT NULL,
	CONSTRAINT data_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users.auth (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	login varchar NOT NULL,
	"password" varchar NOT NULL,
	id_user int4 NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users.roles (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"name" varchar NOT NULL,
	CONSTRAINT roles_pk PRIMARY KEY (id)
);

--- Внешние ключи ---
ALTER TABLE users.auth DROP CONSTRAINT IF EXISTS auth_fk;
ALTER TABLE users.auth ADD CONSTRAINT auth_fk FOREIGN KEY (id_user) REFERENCES users."data"(id);

ALTER TABLE users."data" DROP CONSTRAINT IF EXISTS data_fk;
ALTER TABLE users."data" ADD CONSTRAINT data_fk FOREIGN KEY (id_role) REFERENCES users.roles(id);

--- Триггеры ---
