SELECT * FROM "storage".wbs w
WHERE
    w.project_id = $1 AND w.id_view = $2 AND
    (SELECT COUNT(*) FROM "storage".link_wbs l
     WHERE l.id_child = w.id) = 0;
