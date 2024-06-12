CREATE SCHEMA IF NOT EXISTS project;

--- Типы данных ---

--- Функции ---

--- Таблицы ---
CREATE TABLE IF NOT EXISTS project.project (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"name" varchar NOT NULL,
	"owner" int4 NOT NULL,
	description text NOT NULL DEFAULT ''::text,
	date_start_plan date NOT NULL,
	date_finish_plan date NOT NULL,
	date_start_actual date NOT NULL,
	date_finish_actuak date NOT NULL,
	CONSTRAINT project_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS project.link_project_user (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	id_user int4 NOT NULL,
	id_project int4 NOT NULL,
	CONSTRAINT members_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS project.link_project_role (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	id_project int4 NOT NULL,
	id_role int4 NOT NULL,
	CONSTRAINT link_project_role_pk PRIMARY KEY (id)
);

--- Внешние ключи ---
ALTER TABLE project.project DROP CONSTRAINT IF EXISTS project_fk;
ALTER TABLE project.project ADD CONSTRAINT project_fk FOREIGN KEY ("owner") REFERENCES users."data"(id);

ALTER TABLE project.link_project_user DROP CONSTRAINT IF EXISTS link_project_user_fk_project;
ALTER TABLE project.link_project_user DROP CONSTRAINT IF EXISTS link_project_user_fk_user;
ALTER TABLE project.link_project_user ADD CONSTRAINT link_project_user_fk_project FOREIGN KEY (id_project) REFERENCES project.project(id);
ALTER TABLE project.link_project_user ADD CONSTRAINT link_project_user_fk_user FOREIGN KEY (id_user) REFERENCES users."data"(id);

ALTER TABLE project.link_project_role DROP CONSTRAINT IF EXISTS link_project_role_fk_project;
ALTER TABLE project.link_project_role DROP CONSTRAINT IF EXISTS link_project_role_fk_role;
ALTER TABLE project.link_project_role ADD CONSTRAINT link_project_role_fk_project FOREIGN KEY (id_project) REFERENCES project.project(id);
ALTER TABLE project.link_project_role ADD CONSTRAINT link_project_role_fk_role FOREIGN KEY (id_role) REFERENCES users.roles(id);

--- Триггеры ---

--- Изменения других таблиц ---
ALTER TABLE "storage".wbs ADD IF NOT EXISTS project_id int NOT NULL;
ALTER TABLE "storage".wbs DROP CONSTRAINT IF EXISTS wbs_fk;
ALTER TABLE "storage".wbs ADD CONSTRAINT wbs_fk FOREIGN KEY (project_id) REFERENCES project.project(id);

ALTER TABLE "storage".activity ADD IF NOT EXISTS project_id int NOT NULL;
ALTER TABLE "storage".activity DROP CONSTRAINT IF EXISTS activity_fk;
ALTER TABLE "storage".activity ADD CONSTRAINT activity_fk FOREIGN KEY (project_id) REFERENCES project.project(id);


