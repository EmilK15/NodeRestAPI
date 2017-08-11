# NodeRestAPI

Steps to follow:
Make sure you have mongodb installed

Make sure to have a C:\data directory before running mongodb

then run on a fresh terminal:
mongodb

go to NodeRestAPI's main directory and run:

npm install

node index.js

Notes:
change the config.js in the config directory to change the name of the database you want, and the secret you want to use.

use CURL to test endpoints:

POST:

curl -X POST -d "data1=example1&data2=example2" localhost:3000/api/user/{yourVariable here}

DELETE:

curl -X DELETE -d "username=xxx&password=yyy" localhost:3000/api/user/{username}

GET:

curl -X GET localhost:3000/api/user/{username}
curl -X GET -d "data1=example1&data2=example2" localhost:3000/api/user/{username}

PUT:

curl -X PUT -d "data1=newEx&data2=newEx" localhost:3000/api/user/{username}


To build on this:

A typical restAPI won't return a password and other sensitive information!!
So a next step is to only return information that you want users to see.