SELECT * FROM "storage".activity a
WHERE
    a.project_id = $1 AND
    (SELECT COUNT(*) FROM "storage".activity_dependency ad
     WHERE ad.id_successor = a.id) = 0;
