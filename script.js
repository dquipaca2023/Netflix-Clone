let btnSound = document.querySelector(".btn-sound")
let video = document.querySelector(".video")

let btnInfo = document.querySelector (".btn-info")
let modal = document.querySelector(".modal")




// Play the Sound
btnSound.addEventListener ("click", startSound)



function startSound(){
    video.muted = false     
}




//Show/Hide Modal
btnInfo.addEventListener ("click", showModal)
//Remove below comment to activate Automatic Hide Modal 1

// modal.addEventListener("click", hideModal)

function showModal(){               //This function Shows Modal
    modal.style.display = "block"    
}

//This function Hides Modal

//Remove below comment to activate Automatic Hide Modal 2

// function hideModal(){               
//     modal.style="none"
// }


//Send Rate
let btnSend = document.querySelector(".btn-send")
let textBtn = document.querySelector ("text-btn")

btnSend.addEventListener("click", showThanks)
function showThanks(){
    alert ("Thank you for your Comment!!")
    alert ("Please, refresh the page to Continue")
}
