// This method runs automatically when the webpage loads
function init(){

// Loops through and adds the click event listener to every button
for (let i = 0; i < 7; i++) {

    // Gets the key associated with the button, this helps with the make sound function
    let choice = document.getElementsByClassName('pokemon-btn')[i].innerText.toLowerCase();

    // Adds the click event listener to each button
    document.getElementsByClassName('pokemon-btn')[i].addEventListener('click', function () {

        buttonAnimation(i);
        makeSound(choice);

    });
}

// Adds keypress event listener to the buttons
document.addEventListener('keydown', (event) => {

    // Performs the pressed button animation for the correct button
    switch (event.key.toLowerCase()) {
        case 'p':
            buttonAnimation(0);
            break;
        case 'c':
            buttonAnimation(1);
            break;
        case 'k':
            buttonAnimation(2);
            break;
        case 'g':
            buttonAnimation(3);
            break;
        case 'v':
            buttonAnimation(4);
            break;
        case 'm':
            buttonAnimation(5);
            break;
        case 's':
            buttonAnimation(6);
            break;

        default:
            console.log('Improper selection');
    }

    makeSound(event.key.toLowerCase());

});

}

// Adds and removes the pressed class to showcase a pressed key effect 
function buttonAnimation(number) {

    let activeButton = document.getElementsByClassName('pokemon-btn')[number]

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}

// Plays the audio file that corresponds to the correct keypress or click event
function makeSound(choice) {

    switch (choice) {
        case 'p':
            let pikachuSound = new Audio('sounds/pikachu-sound.mp3');
            pikachuSound.play();
            break;
        case 'c':
            let charmanderSound = new Audio('sounds/charmander-sound.mp3');
            charmanderSound.play();
            break;
        case 'k':
            let koffingSound = new Audio('sounds/koffing-sound.mp3');
            koffingSound.play();
            break;
        case 'g':
            let grimerSound = new Audio('sounds/grimer-sound.mp3');
            grimerSound.play();
            break;
        case 'v':
            let voltorbSound = new Audio('sounds/voltorb-sound.mp3');
            voltorbSound.play();
            break;
        case 'm':
            let magnemiteSound = new Audio('sounds/magnemite-sound.mp3');
            magnemiteSound.play();
            break;
        case 's':
            let psyduckSound = new Audio('sounds/psyduck-sound.mp3');
            psyduckSound.play();
            break;

        default:
            console.log('Improper selection');
    }
}

//  Runs the init function upon loading.
window.addEventListener('load', init)