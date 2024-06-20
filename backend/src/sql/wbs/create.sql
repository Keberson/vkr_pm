INSERT INTO "storage".wbs
("name", date_start_plan, date_finish_plan, date_start_actual, date_finish_actual, status, project_id, id_view)
VALUES($1, '-infinity', '+infinity', '-infinity', '+infinity', 'Не начата', $2, $3)
RETURNING id;
