// connect to cloud set up <works>
const http = require('http');
var fs = require('fs');


const admin = require('firebase-admin');

const serviceAccount = require('./serviceKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Need to pull data from cloud and make an array
// board_from_cloud = []

const spaces = ['a1', 'b1', 'c1','d1','e1','f1','g1','h1',
                    'a2', 'b2', 'c2','d2','e2','f2','g2','h2',
                    'a3', 'b3', 'c3','d3','e3','f3','g3','h3',
                    'a4', 'b4', 'c4','d4','e4','f4','g4','h4',
                    'a5', 'b5', 'c5','d5','e5','f5','g5','h5',
                    'a6', 'b6', 'c6','d6','e6','f6','g6','h6',
                    'a7', 'b7', 'c7','d7','e7','f7','g7','h7',
                    'a8', 'b8', 'c8','d8','e8','f8','g8','h8'];
                    
    const pieces = ['Roo', 'Knigh', 'Bisho','Kin','Quee','Bisho','Knigh','Roo',
                    'Pawn', 'Pawn', 'Pawn','Pawn','Pawn','Pawn','Pawn','Pawn',
                    '', '', '','','','','','',
                    '', '', '','','','','','',
                    '', '', '','','','','','',
                    '', '', '','','','','','',
                    'Pawn', 'Pawn', 'Pawn','Pawn','Pawn','Pawn','Pawn','Pawn',
                    'Rook', 'Knight', 'Bishop','King','Queen','Bishop','Knight','Roo',];


// Get the array to the script in the html file ???
stuff_js = fs.readFileSync('./chess.js').toString();
stuff_html = fs.readFileSync('./webpage.html').toString();


my_html =  stuff_html + "<script>\n" + stuff_js + "</script>\n";
console.log(my_html)

http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"})
    response.write(my_html)
    response.end()
}).listen(8080);

// Add stuff to cloud <works>
/*const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Drew',
  last: 's',
  born: 2021
});
*/

/*
// connect to cloud set up <works>
const admin = require('firebase-admin');

const serviceAccount = require('./serviceKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


function setData(spot_name, piece_name){
    // Add stuff to cloud <works>
    const docRef = db.collection('board').doc(spot_name);

    docRef.set({
        piece: piece_name
    });
}
*/