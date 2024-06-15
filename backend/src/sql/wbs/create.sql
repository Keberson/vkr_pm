INSERT INTO "storage".wbs
("name", date_start_plan, date_finish_plan, date_start_actual, date_finish_actual, status, project_id, id_view)
VALUES($1, $2, $3, $4, $5, $6, $7, $8);