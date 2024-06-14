SELECT * FROM "storage".wbs w
WHERE
    w.project_id = $1 AND
    (SELECT COUNT(*) FROM "storage".link_wbs l
     WHERE l.id_child = w.id) = 0;
