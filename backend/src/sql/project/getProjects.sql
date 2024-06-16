SELECT
    projects.id, projects.name, projects.description, d.name as "owner",
    projects.date_start_plan, projects.date_finish_plan,
    projects.date_start_actual, projects.date_finish_actual
FROM (
    SELECT * FROM "project".project p
    WHERE (
        (SELECT COUNT(*) FROM "project".link_project_role lpr
         WHERE lpr.id_role = $2 AND lpr.id_project = p.id)
         +
        (SELECT COUNT(*) FROM "project".link_project_user lpu
         WHERE lpu.id_user = $1 AND lpu.id_project = p.id)
        != 0
    )
) projects
JOIN "users"."data" d ON projects.owner = d.id