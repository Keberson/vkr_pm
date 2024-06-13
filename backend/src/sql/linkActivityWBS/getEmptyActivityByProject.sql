SELECT * FROM "storage".activity a
WHERE
    a.project_id = $1 AND
    (SELECT COUNT(*) FROM "storage".link_activity_wbs l
     WHERE l.id_activity = a.id) = 0;
