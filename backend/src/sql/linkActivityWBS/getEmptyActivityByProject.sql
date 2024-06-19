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
FROM "storage".activity a
WHERE
    a.project_id = $1 AND
    (SELECT COUNT(*) FROM "storage".link_activity_wbs l
     JOIN "storage".wbs w ON l.id_wbs = w.id
     WHERE l.id_activity = a.id AND w.id_view = $2) = 0;
