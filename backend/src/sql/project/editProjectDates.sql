UPDATE "project".project
SET
    date_start_plan=$2,
    date_finish_plan=$3,
    date_start_actual=$4,
    date_finish_actual=$5
WHERE id=$1;
