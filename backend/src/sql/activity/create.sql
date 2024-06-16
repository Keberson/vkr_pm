INSERT INTO "storage".activity
("name", description, date_start_plan, date_finish_plan, date_start_actual, date_finish_actual, project_id, status)
VALUES($1, $2, $3, $4, $5, $6, $7, $8);