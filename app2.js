const outputext = document.querySelector(".output")
const inputt = document.querySelector(".inputt")
const button = document.querySelector(".button")
const number = Math.floor(Math.random() * 100 )
const trya = document.querySelector("#again")



var sayaç = 5;
button.addEventListener("click" , play)

function play(){
    

    if(sayaç == 0){
        const limit = document.getElementById("limit")
        limit.innerHTML = `Sorry, game over:(`
        inputt.value = " "
        
}

    else if(inputt.value == number){
       outputext.innerHTML = `Congrats guess right, lucky number ${number} `
       inputt.value = " "
         
       
}
    else if(inputt.value < number ){
        outputext.innerHTML = `You guessed too low!`
        limit.innerHTML = `You have ${sayaç} left`
        inputt.value = " "

        sayaç--;
    }
    else if(inputt.value > number){
        outputext.innerHTML = `You guessed too high!`
        limit.innerHTML = `You have ${sayaç} left`
        inputt.value = " "
        sayaç--;
    }
    else if(isNaN(number) == false){
        outputext.innerHTML = `Please enter a number onyl!! `
        limit.innerHTML = `You have ${sayaç} left`
        inputt.value = " "
        sayaç--;
    }
    
}

trya.addEventListener("click" , again);
function again(){
     location.reload();
}


