# emailValidatorAPI
A simple API to validate if a given email address is valid or not. It supports checking for more than 1000 thousands email domains, like gmail.com,outlook.com etc. 
The aforementioned domains are stored in an atlas mongodb database. You can have access to this database from any url, so the project will be working if you install and run 
it in your local machine. The system also supports providing a new email domain for future email validation.

The project is implemented in nodejs. It supports two requests
Type  | url   | description   |
------|-------|---------------|
GET   | /validate/email?address=$(email-address) | Checks if a given email address is valid |
GET   | /validate/newDomain?address=$(domain-address) | Adds a new email domain to the existing ones |

### Setup
You must have nodejs and npm installed. Clone this repo and run
~~~
npm install
npm start
~~~
This will start the nodejs server in http://localhost:3000

### Live version
A live running version of the api can be found in rapid API hub [repo](https://rapidapi.com/pantelisgiankoulidis/api/email-validator37)
