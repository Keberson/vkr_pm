SELECT
    id,
    "name",
    date_start_plan + interval '3 hours' as date_start_plan,
    date_finish_plan + interval '3 hours' as date_finish_plan,
    date_start_actual + interval '3 hours' as date_start_actual,
    date_finish_actual + interval '3 hours' as date_finish_actual,
    status,
    project_id,
    description
FROM "storage".activity
WHERE id = $1;