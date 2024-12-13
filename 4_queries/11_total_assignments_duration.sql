SELECT assignments.day as day, count(assignments.*) as number_of_assignments, sum(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;