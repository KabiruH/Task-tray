# Todo Application Backend

This is a backend application for a Todo application built with Ruby on Rails.
Features

    User authentication (sign up and login)
    Create, read, update, and delete Todo items
    API endpoints for retrieving all Todo items and a specific Todo item

The frontend of this application is also deployed on this repository here: 

        https://task-tray.vercel.app/

## Getting Started

Clone the repository to your local machine:


        git clone git@github.com:KabiruH/Task-tray.

Install dependencies:

            bundle install

## Set up the database:



rails db:migrate
rails db:seed

    Run the server:

rails s

You should now be able to access the backend at    

         http://localhost:3000.

or use the deployed link

        https://task-tray.onrender.com

## API Endpoints
        Users
        todos

### POST /users

Create a new user.

Example request body:

        {
        "username": "johndoe",
        "email": "johndoe@example.com",
        "password": "password123"
        }

Login

        POST /users/login

Authenticate a user and retrieve an access token.

Example request body:

        {
        "email": "johndoe@example.com",
        "password": "password123"
        }

### Todo Items

Create Todo Item

        POST /todos

Create a new Todo item for the authenticated user.

Example request body:

json

        {
        "title": "Buy groceries",
        "description": "Milk, eggs, bread",
        "completed": false
        }

Update Todo Item

PATCH /todos/:id

Update a Todo item with the specified id.

Example request body:


        {
        "title": "Buy groceries",
        "description": "Milk, eggs, bread",
        "completed": true
        }

Delete Todo Item

DELETE /todos/:id

Delete a Todo item with the specified id.
Get All Todo Items

GET /todos

Retrieve all Todo items for the authenticated user.
Get a Specific Todo Item

GET /todos/:id

Retrieve a Todo item with the specified id for the authenticated user.


## Technologies Used

    Ruby on Rails
    PostgreSQL

## Authors

    KabiruH

    https://github.com/KabiruH

## License

This project is licensed under the MIT License. See the LICENSE file for details.
