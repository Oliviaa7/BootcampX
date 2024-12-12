SELECT day, count(*) as total_submissions
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;