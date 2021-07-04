# Overview

This is a node.js app I wrote so that I could learn firestore cloud database and node.js.

This program is a chess game app that lets the players move the pieces around freely just like
a physical chess board. It isn't complete yet and still needs a lot of work before I am satisfied with it.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running, a walkthrough of the code, and a view of the cloud database.}

[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database

It is a Google Firestore database. It is a NoSQL database with key/value pairs.

The database that I made has one collection with several documents representing spaces on a chess board.
Each document has a name (the chess piece name) and space (the varibale in the jade template file).

# Development Environment

JavaScript is the main language I used
Node.js for building the app
Jade for the app template
Github for version control and sharing
VS Code for the IDE

# Useful Websites

* [tech-cookbook.com](https://tech-cookbook.com/2019/10/26/how-to-access-to-firebase-cloud-firestore-database-using-python/)
* [firebase.google.com](https://firebase.google.com/docs/firestore/manage-data/data-types)
* [tutorialsteacher.com](https://www.tutorialsteacher.com/nodejs/jade-template-engine)
* [www.geeksforgeeks.org](https://www.geeksforgeeks.org/how-http-post-request-work-in-node-js/)
* [webapplog.com](https://webapplog.com/jade/)
* [www.freecodecamp.org](https://www.freecodecamp.org/news/node-js-async-await-tutorial-with-asynchronous-javascript-examples/)

# Future Work

* Undo button
* Last move displayed
* replace the text of the piece's names with pictures
* Have the program refreash when changes are made to the database
