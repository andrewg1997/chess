const admin = require('firebase-admin');

const serviceAccount = require('./serviceKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const pieces = ['WRook', 'WKnight', 'WBishop','WKing','WQueen','WBishop','WKnight','WRook',
                'WPawn', 'WPawn', 'WPawn','WPawn','WPawn','WPawn','WPawn','WPawn',
                '', '', '','','','','','',
                '', '', '','','','','','',
                '', '', '','','','','','',
                '', '', '','','','','','',
                'BPawn', 'BPawn', 'BPawn','BPawn','BPawn','BPawn','BPawn','BPawn',
                'BRook', 'BKnight', 'BBishop','BKing','BQueen','BBishop','BKnight','BRook',];


const spaces = ['a1', 'b1', 'c1','d1','e1','f1','g1','h1',
                    'a2', 'b2', 'c2','d2','e2','f2','g2','h2',
                    'a3', 'b3', 'c3','d3','e3','f3','g3','h3',
                    'a4', 'b4', 'c4','d4','e4','f4','g4','h4',
                    'a5', 'b5', 'c5','d5','e5','f5','g5','h5',
                    'a6', 'b6', 'c6','d6','e6','f6','g6','h6',
                    'a7', 'b7', 'c7','d7','e7','f7','g7','h7',
                    'a8', 'b8', 'c8','d8','e8','f8','g8','h8'];


var pieces_dict = new Object();
spaces.forEach(e =>{
    const docRef2 = db.collection('chess_board').doc(e);
    const doc = docRef2.get().then(function(doc){
        if(!doc.exists){
            console.log("No document found");
        }else{
            //console.log(doc.data().name);
            pieces_dict[e]=doc.data().name;
        }
    })
});

// Reset the board
function reset_board()
{
    //var pieces_dict = new Object();
    var p = 0;
    spaces.forEach(x => {
        //pieces_dict[x] = pieces[p++];
        const docref = db.collection('chess_board').doc(x);
        docref.set({
            space: x,
            name: pieces[p++]
        });
    });
}




// Make server and send dictionary to template and display generated html
var express=require('express');

//added
const bodyParser = require("body-parser")

var app=express();
//app.use(bodyParser.urlencoded({extended:true}));
var urlendodedParser = bodyParser.urlencoded({extended:false});
app.set('view engine','jade');
app.get('/',function(req,res)
{
res.render('index2',
pieces_dict)
});

app.post("/", urlendodedParser, function(req, res){
    var initial = req.body.ispace;
    var final = req.body.fspace;
    console.log(initial);
    console.log(final);
    send_DB_data(initial, final)
});

app.post("/reset", urlendodedParser, function(req, res){
    reset_board();
});
//reset_board();

var server=app.listen(3000,function() {});

async function send_DB_data(ispace, fspace)
{

    var piece_name;
    const doc = await db.collection('chess_board').doc(ispace).get().then(
        function(doc){
            piece_name = doc.data().name;
        }
    );

    const docRef1 = db.collection('chess_board').doc(ispace);
    docRef1.set({
        space: ispace,
        name: ""
    });
    
    const docRef = db.collection('chess_board').doc(fspace);
    docRef.set({
        space: fspace,
        name: piece_name
    });
}

