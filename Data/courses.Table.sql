CREATE TABLE courses
(
	id INT NOT NULL PRIMARY KEY,
	code VARCHAR(20),
	title VARCHAR(50),
	courseType VARCHAR(3),
	instructor VARCHAR(30),
	startDate DATE,
	endDate DATE,
	weekdays VARCHAR(5),
	startTime TIME,
	endTIME TIME,
	location VARCHAR(15),
	roomType VARCHAR(20),
	enrolled INT NOT NULL,
	credits FLOAT NOT NULL,
	department VARCHAR(30),
	buildingName VARCHAR(50),
	roomName VARCHAR(50)
)
