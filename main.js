let startSelector = document.querySelector("button");
let guessSelector = document.querySelector("input").value;
let phraseSelector = document.querySelector("p")


startSelector.addEventListener("click", function(event){
        window.num = Math.floor(Math.random() * 1000);
        startSelector.innerText = "Guess";
        phraseSelector.innerText = "Le jeu a commencé, entrez un nombre";
        console.log(num)
        console.log(numImput)
        guessing();
})

function guessing(){
    if(numInput == null){
        guessing()
    } else if (numInput>num) {
        phraseSelector.innerText = "C'est plus bas! Réessayez" 
        guessing()
    } else if (numInput<num) {
        phraseSelector.innerText = "C'est plus haut! Réessayez"
    } else if (numInput === num) {
        phraseSelector.innerText = `Bravo, vous avez trouvé, c'etait bel et bien ${num}`
        input("voulez vous recommencer?")
    }
}
