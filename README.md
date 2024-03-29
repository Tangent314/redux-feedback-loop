# Redux Feedback Loop

The Redux Feedback Loop is an application that allows user's to submit feedback through a multi-part form. After the user has navigated through the form and submitted their feedback, they are routed to a `Thank You Page` and are able to restart the feedback loop by clicking the `Leave New Feedback` button.

### Prerequisites

Before you get started, make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Create database

1. Create a new database called `prime_feedback`
2. Then create a table called `feedback`

```SQL
CREATE DATABASE "prime_feedback";

CREATE TABLE "feedback" (
  "id" SERIAL PRIMARY KEY,
  "feeling" VARCHAR(20) NOT NULL,
  "understanding" VARCHAR(20) NOT NULL,
  "support" VARCHAR(20) NOT NULL,
  "comments" VARCHAR(200) NOT NULL,
  "flagged" BOOLEAN DEFAULT FALSE,
  "date" DATE DEFAULT CURRENT_DATE
); 
```

### Installing

Steps to get the development environment running.

1. Download this project.
2. Run `npm install`
3. Start PostgreSQL if not running already by using `brew services start postgresql`
4. Run `npm server`
5. `cmd + t` to open a new terminal window and Run `npm run client`
6. Navigate to `localhost:3000`

## Built With

* Javascript
* React
* Redux
* Node.js
* Material UI