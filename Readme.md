## Step 1: Create Project Folder
```
mkdir project-express                   # Create a new project folder       
cd project-express                      # Move into the project folder
```

## Step 2: Configuration React Client 
npx create-react-app client             # Create React app inside 'client' folder
cd client                               # Move into the client directory
npm install react-bootstrap bootstrap   # Install Bootstrap
npm install react-router-dom@latest     # Install React Router
npm install axios                       # Install Axios


## Step 3: Configuration Server and database
```
cd ..                                   # Go back to the root project directory
mkdir server                            # Create and enter the server folder
cd server
npm init -y                             # Initialize Node.js project
npm install express                     # Install required packages
npm install mysql2
npm install cors
npm install express-list-endpoints
npm install -g nodemon                  # Install nodemon globally
npm install nodemon --save-dev
```

## Step 4: Update package.json in server/:
```
"type": "module",                      # Add to the root level
"start": "nodemon server.js"           # Add this Inside "scripts"
```

## Process management in mac
```
lsof -i :5000                          # Check what's running on port 5000
sudo kill -9 <PID>                     # Kill process <PID> in mac
```

## Process management in windows
```
netstat -aon | findstr :5000           # Check what's running on port 5000
taskkill /PID 12345 /F.                # Kill process, 12345 should be replaced with the actual PID you got

```

## Database Script
```
CREATE DATABASE `student_project_db` ;
USE `student_project_db`;
CREATE TABLE `students` (
  `student_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `student_name` varchar(80) NOT NULL,
  `student_email` varchar(80) DEFAULT NULL
);

CREATE TABLE `courses` (
  `course_ID` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `course_name` varchar(100) NOT NULL,
  `instructoer` varchar(70) DEFAULT NULL
);

CREATE TABLE enrollments (
  enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  enrollment_date VARCHAR(45),
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO courses (course_name, instructoer) VALUES
("Introduction to Programming", "Dr. Smith"),
("Web Development Basics", "Prof. Johnson"),
("Database Systems", "Dr. Lee"),
("Software Engineering", "Prof. Adams");


INSERT INTO students (name, email) VALUES
("Sebastian Londono Hurtado", "sebastianlondonohurtado@gmail.com"),
("Joshua Pierson", "joshuapierson@gmail.com"),
("Allie Efferson", "allieefferson@gmail.com"),
("Chandler Grajeda", "chandlergrajeda@gmail.com"),
("Tanner Day", "tannerday@gmail.com"),
("Chase Worthington", "chaseworthington@gmail.com"),
("Jessica Hall", "jessicahall@gmail.com"),
("John Dellagnese", "johndellagnese@gmail.com"),
("Erica Valentine", "ericavalentine@gmail.com"),
("Kameron Handy", "kameronhandy@gmail.com"),
("Bryan Garcia", "bryangarcia@gmail.com"),
("Robert Taylor", "roberttaylor@gmail.com"),
("Mebin Beharry", "mebinbeharry@gmail.com"),
("Roberto Huerta", "robertohuerta@gmail.com"),
("Michael McCombs", "michaelmccombs@gmail.com"),
("Jalesia Shelby", "jalesiashelby@gmail.com"),
("Affan Haq", "affanhaq@gmail.com"),
("Jeremiah Monroe", "jeremiahmonroe@gmail.com"),
("Manuel Musquiz", "manuelmusquiz@gmail.com");

INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES
(1, 1, "2025-06-17"),
(2, 1, "2025-06-17"),
(3, 1, "2025-06-17"),
(4, 1, "2025-06-17"),
(5, 1, "2025-06-17"),
(6, 1, "2025-06-17"),
(7, 1, "2025-06-17"),
(8, 1, "2025-06-17"),
(9, 1, "2025-06-17"),
(10, 1, "2025-06-17"),
(11, 2, "2025-06-17"),
(12, 2, "2025-06-17"),
(13, 2, "2025-06-17"),
(14, 2, "2025-06-17"),
(15, 2, "2025-06-17"),
(16, 2, "2025-06-17"),
(17, 2, "2025-06-17"),
(18, 3, "2025-06-17"),
(19, 3, "2025-06-17");
```