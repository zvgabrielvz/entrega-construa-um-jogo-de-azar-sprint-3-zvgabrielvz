
const choicepedra = document.getElementById('pedra')
choicepedra.addEventListener('click', function clickp(){
    
    restartchoice();
    restartcomput();
    restarwinner();
    pedra();
    getRandomInt();
    choicecomput();
    resultgame();

})


const choicetesoura = document.getElementById('tesoura')
choicetesoura.addEventListener('click', function clickt(){
    restartchoice();
    restartcomput();
    restarwinner();
    tesoura();  
    getRandomInt();
    choicecomput();
    resultgame();

});

const choicepapel = document.getElementById('papel')
choicepapel.addEventListener('click', function clickpa(){
    restartchoice();
    restartcomput();
    restarwinner();
    papel();
    getRandomInt();
    choicecomput();
    resultgame();
   
});

const restart = document.getElementById('rstbutton')
restart.addEventListener('click', function(){
    restartgame();

})


function pedra() {
    const conteudo = document.getElementById('choice-text');
    const textchoice = document.createElement('div');
    textchoice.setAttribute("id","content-pedra");
    conteudo.appendChild(textchoice);
    textchoice.innerText = 'Voce escolheu pedra!';
    a = 1;
    

}



function tesoura() {
    const conteudo = document.getElementById('choice-text');
    const textchoice = document.createElement('div');
    textchoice.setAttribute("id","content-tesoura");
    conteudo.appendChild(textchoice);
    textchoice.innerText = 'Voce escolheu tesoura!';
    a = 2;
    

}



function papel() {
    const conteudo = document.getElementById('choice-text');
    const textchoice = document.createElement('div');
    textchoice.setAttribute("id","content-papel");
    conteudo.appendChild(textchoice);
    textchoice.innerText = 'Voce escolheu papel!';
    a = 3;
    

}


//colocar depois que escolher um texto aguarde......

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function choicecomput() {
    valor = getRandomInt(1,3);
    console.log(valor);
    if(valor === 1){
        
        const computer = document.getElementById('random-computer');
        const compchoice = document.createElement('div');
        compchoice.classList.add('choice-comput');
        computer.appendChild(compchoice);
        compchoice.innerText = 'O computador escolheu Pedra!';
    
    } if (valor === 2) {
        const computer = document.getElementById('random-computer');
        const compchoice = document.createElement('div');
        compchoice.classList.add('choice-comput');
        computer.appendChild(compchoice);
        compchoice.innerText = 'O computador escolheu Tesoura!';
        
    } if (valor === 3) {
        const computer = document.getElementById('random-computer');
        const compchoice = document.createElement('div');
        compchoice.classList.add('choice-comput');
        computer.appendChild(compchoice);
        compchoice.innerText = 'O computador escolheu Papel!';
     }
     
      
}

function removetesoura() {
    const removetesoura = document.getElementById('content-tesoura');
    removetesoura.innerHTML = "";

}

function removepapel() {
    const removepapel = document.getElementById('content-papel');
    removepapel.innerHTML = "";

}


function restartchoice() {
    const conteudo = document.getElementById('choice-text');
    
    conteudo.innerHTML = "";
}

function restartcomput() {
    const conteudo = document.getElementById('random-computer');
    
    conteudo.innerHTML = "";
}

function restarwinner() {
    const conteudo = document.getElementById('vencedor');
    
    conteudo.innerHTML = "";
}

function restartgame() {
    restartchoice();
    restartcomput();
    restarwinner();
}

//  a = pedra
//  b = tesoura
//  c = papel 

function resultgame(){

if((a === 1 && valor ===1) || (a === 2 && valor === 2) ||(a === 3 && valor===3) ){
    const winner = document.getElementById('vencedor');
    const winnerr = document.createElement('div');
    winnerr.setAttribute("id","content-winner");
    winner.appendChild(winnerr);
    winnerr.innerText = 'EMPATE!!';

} if((a === 1 && valor ===2) || (a === 2 && valor === 3) ||(a === 3 && valor===1)){
    const winner = document.getElementById('vencedor');
    const winnerr = document.createElement('div');
    winnerr.setAttribute("id","content-winner");
    winner.appendChild(winnerr);
    winnerr.innerText = 'VOCE GANHOU!!';
} if((a === 1 && valor ===3) || (a === 2 && valor === 1) ||(a === 3 && valor===2)){
    const winner = document.getElementById('vencedor');
    const winnerr = document.createElement('div');
    winnerr.setAttribute("id","content-winner");
    winner.appendChild(winnerr);
    winnerr.innerText = 'VOCE PERDEU!!';

}

}
    

