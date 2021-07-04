function setBoardLoop(){
    const spaces = ['a1', 'b1', 'c1','d1','e1','f1','g1','h1',
                    'a2', 'b2', 'c2','d2','e2','f2','g2','h2',
                    'a3', 'b3', 'c3','d3','e3','f3','g3','h3',
                    'a4', 'b4', 'c4','d4','e4','f4','g4','h4',
                    'a5', 'b5', 'c5','d5','e5','f5','g5','h5',
                    'a6', 'b6', 'c6','d6','e6','f6','g6','h6',
                    'a7', 'b7', 'c7','d7','e7','f7','g7','h7',
                    'a8', 'b8', 'c8','d8','e8','f8','g8','h8'];
                    
    const pieces = ['Rook', 'Knight', 'Bishop','King','Queen','Bishop','Knight','Rook',
                    'Pawn', 'Pawn', 'Pawn','Pawn','Pawn','Pawn','Pawn','Pawn',
                    '', '', '','','','','','',
                    '', '', '','','','','','',
                    '', '', '','','','','','',
                    '', '', '','','','','','',
                    'Pawn', 'Pawn', 'Pawn','Pawn','Pawn','Pawn','Pawn','Pawn',
                    'Rook', 'Knight', 'Bishop','King','Queen','Bishop','Knight','Rook',];
    var y = 0;
    spaces.forEach(x => {
        document.getElementById(x).innerHTML = pieces[y++];
    });
}

function updateBoard(board){
    const spaces = ['a1', 'b1', 'c1','d1','e1','f1','g1','h1',
                    'a2', 'b2', 'c2','d2','e2','f2','g2','h2',
                    'a3', 'b3', 'c3','d3','e3','f3','g3','h3',
                    'a4', 'b4', 'c4','d4','e4','f4','g4','h4',
                    'a5', 'b5', 'c5','d5','e5','f5','g5','h5',
                    'a6', 'b6', 'c6','d6','e6','f6','g6','h6',
                    'a7', 'b7', 'c7','d7','e7','f7','g7','h7',
                    'a8', 'b8', 'c8','d8','e8','f8','g8','h8'];
    var y = 0;
    spaces.forEach(x => {
        document.getElementById(x).innerHTML = board[y++];
    });
}


function setBoard(){
    document.getElementById('a8').innerHTML = 'Rook'
    document.getElementById('b8').innerHTML = 'Knight'
    document.getElementById('c8').innerHTML = 'Bishop'
    document.getElementById('d8').innerHTML = 'King'
    document.getElementById('e8').innerHTML = 'Queen'
    document.getElementById('f8').innerHTML = 'Bishop'
    document.getElementById('g8').innerHTML = 'Knight'
    document.getElementById('h8').innerHTML = 'Rook'

    document.getElementById('a7').innerHTML = 'Pawn'
    document.getElementById('b7').innerHTML = 'Pawn'
    document.getElementById('c7').innerHTML = 'Pawn'
    document.getElementById('d7').innerHTML = 'Pawn'
    document.getElementById('e7').innerHTML = 'Pawn'
    document.getElementById('f7').innerHTML = 'Pawn'
    document.getElementById('g7').innerHTML = 'Pawn'
    document.getElementById('h7').innerHTML = 'Pawn'

    document.getElementById('a6').innerHTML = ''
    document.getElementById('b6').innerHTML = ''
    document.getElementById('c6').innerHTML = ''
    document.getElementById('d6').innerHTML = ''
    document.getElementById('e6').innerHTML = ''
    document.getElementById('f6').innerHTML = ''
    document.getElementById('g6').innerHTML = ''
    document.getElementById('h6').innerHTML = ''

    document.getElementById('a5').innerHTML = ''
    document.getElementById('b5').innerHTML = ''
    document.getElementById('c5').innerHTML = ''
    document.getElementById('d5').innerHTML = ''
    document.getElementById('e5').innerHTML = ''
    document.getElementById('f5').innerHTML = ''
    document.getElementById('g5').innerHTML = ''
    document.getElementById('h5').innerHTML = ''
    
    document.getElementById('a4').innerHTML = ''
    document.getElementById('b4').innerHTML = ''
    document.getElementById('c4').innerHTML = ''
    document.getElementById('d4').innerHTML = ''
    document.getElementById('e4').innerHTML = ''
    document.getElementById('f4').innerHTML = ''
    document.getElementById('g4').innerHTML = ''
    document.getElementById('h4').innerHTML = ''

    document.getElementById('a3').innerHTML = ''
    document.getElementById('b3').innerHTML = ''
    document.getElementById('c3').innerHTML = ''
    document.getElementById('d3').innerHTML = ''
    document.getElementById('e3').innerHTML = ''
    document.getElementById('f3').innerHTML = ''
    document.getElementById('g3').innerHTML = ''
    document.getElementById('h3').innerHTML = ''
    
    document.getElementById('a2').innerHTML = 'Pawn'
    document.getElementById('b2').innerHTML = 'Pawn'
    document.getElementById('c2').innerHTML = 'Pawn'
    document.getElementById('d2').innerHTML = 'Pawn'
    document.getElementById('e2').innerHTML = 'Pawn'
    document.getElementById('f2').innerHTML = 'Pawn'
    document.getElementById('g2').innerHTML = 'Pawn'
    document.getElementById('h2').innerHTML = 'Pawn'

    document.getElementById('a1').innerHTML = 'Rook'
    document.getElementById('b1').innerHTML = 'Knight'
    document.getElementById('c1').innerHTML = 'Bishop'
    document.getElementById('d1').innerHTML = 'King'
    document.getElementById('e1').innerHTML = 'Queen'
    document.getElementById('f1').innerHTML = 'Bishop'
    document.getElementById('g1').innerHTML = 'Knight'
    document.getElementById('h1').innerHTML = 'Rook'
}
setBoardLoop()

