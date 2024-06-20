SELECT law.id_wbs FROM "storage".link_activity_wbs law
JOIN "storage".wbs w ON law.id_wbs = w.id
WHERE law.id_activity = $1
AND w.id_view = $2