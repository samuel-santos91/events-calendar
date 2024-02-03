# events-calendar

## Description
This application is a conjuction of input fields in a calendar, allowing users to select a date and add an event to it.
The frontend uses React.js with Typescritpt, while the backend consists of Java Spring. All the data is saved in a MySQL database.
### Purpose
* The purpose of this project was:
    * to build a full-stack application to apply my knowledges in Spring and React.js
    * to practise RESTfull API
    * to practse React Hook Form
### Tech Stack
#### FRONTEND
* React.js
* TypeScript
* Tailwind CSS
#### BACKEND
* Spring Boot
#### DATABASE
* MySQL

## Preview
### Calendar <br>
<img width="500" alt="Screenshot 2024-02-02 at 16 17 22" src="https://github.com/samuel-santos91/events-calendar/assets/107240729/97810004-01b7-4a9e-bdbe-5f8915d4c552">

### Selecting a cell(with and without an event) <br>
<img width="300" alt="Screenshot 2024-02-01 at 18 25 55" src="https://github.com/samuel-santos91/events-calendar/assets/107240729/72631a9a-6a9a-4e2f-97f5-ddaaaf0d344b"> <img width="310" alt="Screenshot 2024-02-01 at 18 26 09" src="https://github.com/samuel-santos91/events-calendar/assets/107240729/4a339028-63d0-4081-bf69-bbd115598d16">

### Event info <br>
<img width="500" alt="Screenshot 2024-02-01 at 21 27 27" src="https://github.com/samuel-santos91/events-calendar/assets/107240729/0ad8c322-cf3e-457b-919f-a9e1c589cb50">

### Deleting an event <br>
<img width="500" alt="Screenshot 2024-02-01 at 18 26 18" src="https://github.com/samuel-santos91/events-calendar/assets/107240729/6396f212-bc74-4375-84e9-0837cb42b82c">


## Features
* A red circle marks the current day of the month
* All days with events will be highlighted in light red
* By clicking in a day cell the user will have the option to:
  * Add an event
  * Edit an existing event
  * Remove an existing event
* When editing an event, the form will be pre-filled with the event's information
* When deleting an event, a modal will pop up so the user confirm the deletion
* All the events are saved in a <strong>MySQL</strong> database

## React-Hook-Form
This application uses <strong>react-hook-form</strong>
* All data from the form fields are saved and sent to the server via <strong>react-hook-form</strong>
* It also uses <strong>Yup</strong> to handle all the form's validation
  
## Backend repository
Refer to https://github.com/samuel-santos91/events-calendar-backend

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/

### Install MySQL
Refer to https://dev.mysql.com/downloads/installer/

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm run dev
```

The frontend runs on **localhost:5173** <br>
The backend runs on **localhost:8080** 

## Change Logs
### 16/01/2024 to 18/01/2024 - {Creation of the backend with Spring Boot}
* Creates service, repository and controller layers
* Creates entity and DTO

### 22/01/2024 to 24/01/2024 - {Creation of the frontend with React.js}
* Adds service file with all the API functions
* Creates Calendar and other components to list events
* Creates context provider

### 25/11/2024 to 28/11/2024 - {Implementing functionalities and updating backend}
* Changes Date data type to LocalDate in the backend
* Creates new method in the backend (getByMonthAndYear)
* Adds react hook form and Yup validation

### 29/01/2024 to 01/02/2024 - {Styling implementation and code organization}

## Future Goals
* Write tests 
* Deploy the application 

