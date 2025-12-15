let rendomnum = (parseInt(Math.random()*10 +1));
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessesslot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []
let numguess = 1

let playgame = true


if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        // console.log(guess);
        validateguess(guess);
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert("pleace enter valid number");
    }else if(guess < 1){
        alert("pleace enter more than 1");
    }else if(guess > 10){
        alert("pleace enter less than 10");
    }else{
        prevguess.push(guess);
        if(numguess === 11){
            guessdiplsy(guess)
            desplaymess(`Game over. random number was ${rendomnum}`)
            endgame();
        }else{
            guessdiplsy(guess);
            checkguess(guess);
        }
    }
}
function checkguess(guess){
    if(guess === rendomnum){
        desplaymess(`Number is currect`)
        endgame();
    }else if (guess < rendomnum){
        desplaymess(`Number is too low`)
    }else if (guess > rendomnum){
        desplaymess(`Number is too high`)
    }
}

function desplaymess(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function guessdiplsy(guess){
    userinput.value = ''
    guessesslot.innerHTML += `${guess}, `
    numguess++;
    lastResult.innerHTML = `${11 - numguess}` 
}


function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame1"> Start new game</h2>`;
    resultParas.appendChild(p)
    playgame = false;
    newgame();
}

function newgame(){
    const newgamebutton = document.querySelector('#newgame1')
    newgamebutton.addEventListener('click' ,function(e){
        rendomnum = parseInt(Math.random()*10 +1);
        prevguess = []
        numguess = 1
        guessesslot.innerHTML = ''
        lastResult.innerHTML = `${11 - numguess}` 
        userinput.removeAttribute('disabled')
        resultParas.removeChild(p);
        playgame = true
    })
}