UPDATE "storage".link_activity_wbs
SET id_wbs=$3
WHERE id_activity=$1 AND id_wbs=$2;