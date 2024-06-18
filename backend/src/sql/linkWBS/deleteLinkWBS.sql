DELETE FROM "storage".link_wbs
WHERE id_parent=$1 AND id_child=$2;