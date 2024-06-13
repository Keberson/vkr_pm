SELECT * FROM "storage".wbs w
WHERE
    w.project_id = $1 AND
    (SELECT COUNT(*) FROM "storage".wbs_dependency wd
     WHERE wd.id_wbs_child = w.id) = 0;
