const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach( (button) => {
    console.log(button);

    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);

        if(e.target.id == 'grey') {
            body.style.backgroundColor = 'grey';
            body.style.color = 'white';

        } 
        else if(e.target.id == 'white') {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
        } else if(e.target.id == 'blue') {
            body.style.backgroundColor = 'blue';
            body.style.color = 'black';
        } else if(body.style.backgroundColor = 'yellow') {
            body.style.backgroundColor = 'yellow';
            body.style.color = 'black';
        }
    })
});