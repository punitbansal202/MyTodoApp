# MyTodoApp

This application provides the feature to create and maintain task list. It is in starting phase of development irrespective of authentication and authorization for current version.

## Getting Started

To execute and run the client and api server - Under the project directory "MyTodoApp". Run the following command

> `npm run dev`

It will start both the server with the single command.

### Prerequisites

you need to install following softwares in your system before execution

nodejs
mysql db

### Installing

execute under MyTodoApp > `npm install`
execute under MyTodoApp/client > `npm install`
mysql server should be running
mysql database creadential needs to provide under `/MyTodoApp/db_connection.js`

### Database and Schema Setup

CREATE DATABASE todosDB;

CREATE TABLE todos (
`id` int NOT NULL,
todo varchar(200) NOT NULL,
status varchar(200) NOT NULL
);

## Built With

- [Node.js v12.16.1](https://nodejs.org/dist/latest-v12.x/docs/api/) - An asynchronous event-driven JavaScript runtime
- [Reactjs](https://reactjs.org/docs/getting-started.html) - Client Management
- [MySQL](https://dev.mysql.com/doc/) - Database Management

## Contributing

(https://github.com/punitbansal202/MyTodoApp) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [github](http://github.com/) for versioning.

## Authors

- **Punit Bansal**

## License

This project is licensed under the MIT License

## Acknowledgments

- Inspiration
- Articals
- etc
