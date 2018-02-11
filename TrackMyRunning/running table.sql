create table distance(
	ID INT NOT NULL PRIMARY KEY auto_increment,
    CDATE DATE,
    DISTANCE int
);

#INSERT INTO distance (CDATE, DISTANCE) VALUES (curdate()-1, 10);
#INSERT INTO distance (CDATE, DISTANCE) VALUES (CURDATE()-1, 34);
SELECT * FROM distance;