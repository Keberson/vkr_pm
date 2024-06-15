SELECT * FROM "storage".activity a
WHERE
    a.project_id = $1 AND
    (SELECT COUNT(*) FROM "storage".link_activity_wbs l
     JOIN "storage".wbs w ON l.id_wbs = w.id
     WHERE l.id_activity = a.id AND w.id_view = $2) = 0;
