SELECT name, id, email, cohort_id
FROM students
WHERE NOT email = '%@gmail.com'
AND phone IS NULL;