## Reservify: A restaurant booking application

## Installation Guide

### Prerequisites
Operating System:
- Our app is designed to run on Windows or macOS.

Software Dependencies:
- Python (version 3.11.5) and Node.js (version 20.10.0 or 18.18.0) are 2 dependencies that our project includes,you can download them with the following links:
  - https://nodejs.org/en/download/
  - https://www.python.org/downloads/

### Repository Installation
Clone the Repository:
- Run the git clone command in the terminal or command prompt on your local machine. This command is used to make a copy of the GitHub repository onto your local system. This command should be executed in the directory where you want the project folder to be created. 
- git clone  https://github.com/AnthonyOlijnyk/reservify.git

### Backend Installation
Navigate to Backend Directory:
- cd your-repo/backend

Install Python Dependencies:
- Set up the Python environment and install the required packages.
- pip install -r requirements.txt

Apply Migrations:
- Run database migrations to set up the database schema.
- python manage.py migrate

If the following error occurs:
- Python was not found; run without arguments to install from the Microsoft Store, or disable this shortcut from Settings > Manage App Execution Aliases.
  - Download Python, and then retry the previous step.

Run the Backend Server:
- Start the backend server.
- python manage.py runserver

### Frontend Installation
Navigate to Frontend Directory in a new terminal:
- Navigate to the directory containing the frontend code.
- cd your-repo/frontend

Install Node.js Dependencies:
- Set up the Node.js environment and install the required packages.
- npm install

Run the Frontend Server:
- Start the frontend development server
- npm start

### Application Startup
If the previous steps are completed correctly, the following two terminals should be open as shown below in Fig 14.1. The application should open up in your browser as shown in Fig. 14.2
![image](https://github.com/AnthonyOlijnyk/reservify/assets/77172929/a70a3c4a-e834-487a-8c10-2cd5fc408965)
![image](https://github.com/AnthonyOlijnyk/reservify/assets/77172929/788ef8eb-8002-466d-85ec-b76fc17d8a4a)


## Demo
![image](https://github.com/AnthonyOlijnyk/reservify/assets/77172929/7a1ae3f0-9512-4607-9d2e-c5c21c139386)
![image](https://github.com/AnthonyOlijnyk/reservify/assets/77172929/b4c0a6b8-e372-4326-8df1-7b5d4dabc1af)
![image](https://github.com/AnthonyOlijnyk/reservify/assets/77172929/deb45cd4-8923-4ecb-b3e4-6b8b1330384a)
![image](https://github.com/AnthonyOlijnyk/reservify/assets/77172929/e1994243-4624-4d57-90fd-7aef5c9ee97a)


