CREATE SCHEMA IF NOT EXISTS auth;

--- Типы данных ---
DO $$
BEGIN
	IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'role_type') then
		CREATE TYPE users.role_type AS ENUM (
	        'Руководитель',
	        'Исполнитель');
	END IF;
END $$;

--- Функции ---

--- Таблицы ---
CREATE TABLE IF NOT EXISTS users."data" (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"name" varchar NOT NULL,
	"role" users.role_type NOT NULL,
	CONSTRAINT data_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users.auth (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	login varchar NOT NULL,
	"password" varchar NOT NULL,
	id_user int4 NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

--- Внешние ключи ---
ALTER TABLE users.auth DROP CONSTRAINT IF EXISTS auth_fk;
ALTER TABLE users.auth ADD CONSTRAINT auth_fk FOREIGN KEY (id_user) REFERENCES users."data"(id);

--- Триггеры ---
