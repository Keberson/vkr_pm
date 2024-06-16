UPDATE "storage".activity
SET "name"=$1, date_start_plan=$2, date_finish_plan=$3, date_start_actual=$4, date_finish_actual=$5, status=$6, description=$7
WHERE id=$8;