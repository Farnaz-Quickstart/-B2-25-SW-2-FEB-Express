## Step 1: Create Project Folder

mkdir project-express                   # Create a new project folder       
cd project-express                      # Move into the project folder

## Step 2: Configuration React Client 
npx create-react-app client             # Create React app inside 'client' folder
cd client                               # Move into the client directory
npm install react-bootstrap bootstrap   # Install Bootstrap
npm install react-router-dom@latest     # Install React Router


## Step 3: Configuration Server and database
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

## Step 4: Update package.json in server/:
"type": "module",                      # Add to the root level
"start": "nodemon server.js"           # Add this Inside "scripts"

## Process management in mac
lsof -i :5000                          # Check what's running on port 5000
sudo kill -9 <PID>                     # Kill process <PID> in mac

## Process management in windows
netstat -aon | findstr :5000           # Check what's running on port 5000
taskkill /PID 12345 /F.                # Kill process, 12345 should be replaced with the actual PID you got from above command 
# -B2-25-SW-2-FEB-Express
# -B2-25-SW-2-FEB-Express
