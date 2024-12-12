SELECT day, count(*) as total_submissions
FROM assignments
GROUP BY day
ORDER BY day;