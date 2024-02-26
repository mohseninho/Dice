let dice = document.querySelectorAll(".diceImg");
let rollDice = document.querySelector(".rollDiceBtn");
let saveBtn = document.querySelector(".saveBtn");
let restartBtn = document.querySelector(".restartBtn");
let currentScoreUser1 = document.querySelector(".currentUser1Score");
let currentScoreUser2 = document.querySelector(".currentUser2Score");
let user1Board = document.querySelector(".user1");
let user2Board = document.querySelector(".user2");
let user1Score = document.querySelector(".user1Score");
let user2Score = document.querySelector(".user2Score");
let nobat = true;
let score = 0;
user1Board.classList.add("select");

rollDice.addEventListener('click' , ()=>{
    hiddenAll();
    let rand = Math.floor((Math.random() * 6)+1);
    showDice(rand-1);
    if(rand == 1){
        if(nobat){
            currentScoreUser1.textContent = 0;
        }else{
            currentScoreUser2.textContent = 0;
        }
        nobat = !nobat;
        score = 0;
    }else{
        score += rand;
        Play(nobat , score);
    }

})



saveBtn.addEventListener('click' , ()=>{
    save(nobat); 
})

restartBtn.addEventListener('click', ()=>{
    restart();
})


function showDice(num){
    dice[num].classList.remove("hidden");
}

function hiddenAll(){
    for(let i = 0 ; i < dice.length ; i++){
        dice[i].classList.add("hidden");
    }
}

function Play(n , s){
    if(n){
        currentScoreUser1.textContent = s;
        user1Board.classList.add("select");
        user2Board.classList.remove("select");
    }else{
        currentScoreUser2.textContent = s;
        user2Board.classList.add("select");
        user1Board.classList.remove("select");

    }

}

function save(n){
    let sc;
    if(n){
        sc = Number(currentScoreUser1.textContent);
        currentScoreUser1.textContent = 0;
        user1Score.textContent = Number(user1Score.textContent) + sc;
        user2Board.classList.add("select");
        user1Board.classList.remove("select");
    }else{
        sc = Number(currentScoreUser2.textContent);
        currentScoreUser2.textContent = 0;
        user2Score.textContent = Number(user2Score.textContent) + sc;
        user1Board.classList.add("select");
        user2Board.classList.remove("select");
    }
    nobat = !nobat;
    score = 0;
}


function restart(){
    score = 0;
    nobat = true;
    user1Score.textContent = 0;
    user2Score.textContent = 0;
    currentScoreUser1.textContent = 0;
    currentScoreUser2.textContent = 0;
    hiddenAll();
    user1Board.classList.add("select");
    user2Board.classList.remove("select");
}