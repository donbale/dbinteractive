# dbInteractive

A simple front end to a JSON database prodviding searchability and sortability 

## Getting Started

Clone the repository and run npm install

### Prerequisites

nodejs
npm
mongodb

### Installing

Install nodejs (normally comes with npm otherwise install separately.

Clone the repository on your local machine and enter the created directory.

```
npm install
```
Install mongodb and import your json database

```
mongoimport -d networks -c active --jsonArray < {file_path}
```
Go to the .env file in your local directory and the variable DATABASE pinting to your imported database:

```
DATABASE=mongodb://localhost:27017/{name of database}
```
Change the models/Network.js file to reflect the schema of your json data and change the views/index.pug file to relect the table date you want to show


## Running the App

All things according just go to this URL to see your database in all its glory

```
http://localhost:3000/
```

## Built With

* [nodejs](https://nodejs.org/) - JavaScript runtime used
* [express](https://expressjs.com/) - Web framework used
* [mongodb](https://www.mongodb.com/) - Database used
* [mongoose](http://mongoosejs.com/) - Mongodb Client
* [datatables](https://datatables.net/) - Interactive tables jquery plugin

## Authors

* **d0nBale** - [github](https://https://github.com/donbale/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


