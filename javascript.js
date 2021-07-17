
const choicepedra = document.getElementById('pedra')
choicepedra.addEventListener('click', function clickp(){
    
    restartchoice();
    restartcomput();
    pedra();
    getRandomInt();
    choicecomput();

})



const choicetesoura = document.getElementById('tesoura')
choicetesoura.addEventListener('click', function clickt(){
    restartchoice();
    restartcomput();
    tesoura();  
    getRandomInt();
    choicecomput();

});

const choicepapel = document.getElementById('papel')
choicepapel.addEventListener('click', function clickpa(){
    restartchoice();
    restartcomput();
    papel();
    getRandomInt();
    choicecomput();
   
});


function pedra() {
    const conteudo = document.getElementById('choice-text');
    const textchoice = document.createElement('div');
    textchoice.setAttribute("id","content-pedra");
    conteudo.appendChild(textchoice);
    textchoice.innerText = 'Voce escolheu pedra!';
    

}



function tesoura() {
    const conteudo = document.getElementById('choice-text');
    const textchoice = document.createElement('div');
    textchoice.setAttribute("id","content-tesoura");
    conteudo.appendChild(textchoice);
    textchoice.innerText = 'Voce escolheu tesoura!';
    

}



function papel() {
    const conteudo = document.getElementById('choice-text');
    const textchoice = document.createElement('div');
    textchoice.setAttribute("id","content-papel");
    conteudo.appendChild(textchoice);
    textchoice.innerText = 'Voce escolheu papel!';
    

}


//colocar depois que escolher um texto aguarde......

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function choicecomput() {
    const valor = getRandomInt(1,3);
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


const restart = document.getElementById('rstbutton')
restart.addEventListener('click', function(){
    restartgame();

})


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

function restartgame() {
    restartchoice();
    restartcomput();
}
    

