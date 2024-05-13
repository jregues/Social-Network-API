# Social Network API

This application was created for my Module 18 Challenge assignment for the UNCC Coding Bootcamp. It is run using nodemon and insomnia. It was created in accordance to the following User Story and Acceptance Criteria.

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## How to Use
After cloning the repository, run 'npm i' to install the necessary packages. Then run 'npm start' or if you have nodemon globally installed, run 'nodemon server.js' to start the server. Then navigate to Insomnia and use the routes '/api/users' and '/api/thoughts' with the base url 'http://localhost:3001'. Use these routes with GET, POST, PUT, and DELETE methods. When making a post call to users, make sure to include a username field followed by a valid email field. For thought posts, include a thoughtText field, a username field, and a reaction field with an object inside. Inside the reaction field include reactionBody and username.

## Links

https://github.com/jregues/Social-Network-API
