SELECT * FROM "project".project p
WHERE (
    (SELECT COUNT(*) FROM "project".link_project_role lpr
     WHERE lpr.id_role = $2 AND lpr.id_project = p.id)
     +
    (SELECT COUNT(*) FROM "project".link_project_user lpu
     WHERE lpu.id_user = $1 AND lpu.id_project = p.id)
    != 0
)