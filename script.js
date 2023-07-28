console.log("Tic Tac Toe")
let AudioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn  = "X"
let isgameover =false;

const changeTurn = ()=>{
    return turn === "X"? "0":"X"
}

const CheckWin = ()=>{
    let text = document.getElementsByClassName('text');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText!=="")){
            document.querySelector('.gameinfo').innerText = text[e[0]].innerText + "Won"
            isgameover = true;
            gameover.play();
        }
     })
}

// Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let text = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(text.innerText === ''){
            text.innerText =turn;
            turn = changeTurn();
            AudioTurn.play();
            CheckWin();
            if(!isgameover){
                document.getElementsByClassName('gameinfo')[0].innerText = "Turn for" + turn;
             }
        }
})
})

reset.addEventListener('click', ()=>{
    let texts = document.querySelectorAll('.text');
    Array.from(texts).forEach(element =>{
        element.innerText =  ""
    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName('gameinfo')[0].innerText = "Turn for" + turn;
}) 
