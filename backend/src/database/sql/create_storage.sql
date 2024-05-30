CREATE SCHEMA IF NOT EXISTS "storage";

--- Типы данных ---
DO $$
BEGIN
	IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'activity_status') then
		CREATE type "storage".activity_status AS ENUM (
		'Не начата',
		'Выполняется',
		'Завершена') ;
	END IF;
	IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'dependency_type') then
		CREATE TYPE "storage".dependency_type AS ENUM (
        'КК',
        'НН',
        'НК',
        'КН');
	END IF;
	IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'resource_type') then
		CREATE TYPE "storage".resource_type AS ENUM (
        'Трудовые',
        'Материальные',
        'Затратные');
	END IF;
END $$;

--- Функции ---
CREATE OR REPLACE FUNCTION storage.fnc_trg_resource_link()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
	update resource
	set quantity = (select quantity from resource where id = new.id_resource) - new.quantity
	where id = new.id_resource;
    RETURN NEW;
END;
$function$
;

--- Таблицы ---
CREATE TABLE IF NOT EXISTS "storage".activity (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"name" varchar NOT NULL,
	date_start_plan date NOT NULL,
	date_finish_plan date NOT NULL,
	date_start_actual date NOT NULL,
	date_finish_actual date NOT NULL,
	status "storage".activity_status NOT NULL DEFAULT 'Не начата'::storage.activity_status,
	"others" json NOT NULL DEFAULT '{}'::json,
	project_id int4 NOT NULL,
	description text NOT NULL DEFAULT ''::text,
	CONSTRAINT activity_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "storage".resource (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"type" "storage".resource_type NOT NULL,
	quantity int4 NOT NULL,
	CONSTRAINT resource_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "storage"."view" (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"name" varchar NOT NULL,
	CONSTRAINT view_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "storage".wbs (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	"name" varchar NOT NULL,
	date_start_plan date NOT NULL,
	date_start_finish date NOT NULL,
	date_start_actual date NOT NULL,
	date_finish_actual date NOT NULL,
	status "storage".activity_status NOT NULL DEFAULT 'Не начата'::storage.activity_status,
	CONSTRAINT wbs_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "storage".activity_dependency (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	id_predecessor int4 NOT NULL,
	id_successor int4 NOT NULL,
	"type" "storage".dependency_type NOT NULL DEFAULT 'КН'::storage.dependency_type,
	CONSTRAINT activity_dependency_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "storage".link_activity_resource (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	id_activity int4 NOT NULL,
	id_resource int4 NOT NULL,
	quantity int4 NOT NULL,
	CONSTRAINT link_activity_resource_pk PRIMARY KEY (id),
	CONSTRAINT resource_quantity_positive CHECK ((quantity > 0))
);

CREATE TABLE IF NOT EXISTS "storage".link_activity_wbs (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	id_activity int4 NOT NULL,
	id_wbs int4 NOT NULL,
	CONSTRAINT link_activity_wbs_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "storage".link_view_activity (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	id_view int4 NOT NULL,
	id_activity int4 NOT NULL,
	CONSTRAINT link_view_activity_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "storage".link_view_wbs (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	id_view int4 NOT NULL,
	id_wbs int4 NOT NULL,
	CONSTRAINT link_view_wbs_pk PRIMARY KEY (id)
);

--- Внешние ключи ---
ALTER TABLE "storage".activity_dependency DROP CONSTRAINT IF EXISTS activity_dependency_fk_predecessor;
ALTER TABLE "storage".activity_dependency DROP CONSTRAINT IF EXISTS activity_dependency_fk_successor;
ALTER TABLE "storage".activity_dependency ADD CONSTRAINT activity_dependency_fk_predecessor FOREIGN KEY (id_predecessor) REFERENCES "storage".activity(id);
ALTER TABLE "storage".activity_dependency ADD CONSTRAINT activity_dependency_fk_successor FOREIGN KEY (id_successor) REFERENCES "storage".activity(id);

ALTER TABLE "storage".link_activity_resource DROP CONSTRAINT IF EXISTS link_activity_resource_fk_activity;
ALTER TABLE "storage".link_activity_resource DROP CONSTRAINT IF EXISTS link_activity_resource_fk_resource;
ALTER TABLE "storage".link_activity_resource ADD CONSTRAINT link_activity_resource_fk_activity FOREIGN KEY (id_activity) REFERENCES "storage".activity(id);
ALTER TABLE "storage".link_activity_resource ADD CONSTRAINT link_activity_resource_fk_resource FOREIGN KEY (id_resource) REFERENCES "storage".resource(id);

ALTER TABLE "storage".link_activity_wbs DROP CONSTRAINT IF EXISTS link_activity_wbs_fk_activity;
ALTER TABLE "storage".link_activity_wbs DROP CONSTRAINT IF EXISTS link_activity_wbs_fk_wbs;
ALTER TABLE "storage".link_activity_wbs ADD CONSTRAINT link_activity_wbs_fk_activity FOREIGN KEY (id_activity) REFERENCES "storage".activity(id);
ALTER TABLE "storage".link_activity_wbs ADD CONSTRAINT link_activity_wbs_fk_wbs FOREIGN KEY (id_wbs) REFERENCES "storage".wbs(id);

ALTER TABLE "storage".link_view_activity DROP CONSTRAINT IF EXISTS link_view_activity_fk_activity;
ALTER TABLE "storage".link_view_activity DROP CONSTRAINT IF EXISTS link_view_activity_fk_view;
ALTER TABLE "storage".link_view_activity ADD CONSTRAINT link_view_activity_fk_activity FOREIGN KEY (id_activity) REFERENCES "storage".activity(id);
ALTER TABLE "storage".link_view_activity ADD CONSTRAINT link_view_activity_fk_view FOREIGN KEY (id_view) REFERENCES "storage"."view"(id);

ALTER TABLE "storage".link_view_wbs DROP CONSTRAINT IF EXISTS link_view_wbs_fk_view;
ALTER TABLE "storage".link_view_wbs DROP CONSTRAINT IF EXISTS link_view_wbs_fk_wbs;
ALTER TABLE "storage".link_view_wbs ADD CONSTRAINT link_view_wbs_fk_view FOREIGN KEY (id_view) REFERENCES "storage"."view"(id);
ALTER TABLE "storage".link_view_wbs ADD CONSTRAINT link_view_wbs_fk_wbs FOREIGN KEY (id_wbs) REFERENCES "storage".wbs(id);

--- Триггеры ---
DROP TRIGGER IF EXISTS trg_person_resource_link ON "storage".link_activity_resource;

create trigger trg_person_resource_link
BEFORE INSERT ON "storage".link_activity_resource
FOR EACH ROW EXECUTE FUNCTION "storage".fnc_trg_resource_link();