UPDATE "storage".link_wbs
SET id_parent=$3
WHERE id_child=$2 AND id_parent=$1;