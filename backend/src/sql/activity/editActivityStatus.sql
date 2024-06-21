UPDATE "storage".activity
SET status = $2, date_start_actual = $3, date_finish_actual = $4
WHERE id = $1;