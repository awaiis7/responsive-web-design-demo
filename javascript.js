

let input1 = document.querySelector('#inputbox1');
let input2 = document.querySelector('#inputbox2');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string).toString();
            input1.value = string;
            input2.value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input1.value = "";
            input2.value = "";
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input1.value = string;
            input2.value = string;
        } else {
            string += e.target.innerHTML;
            input1.value = string;
            input2.value = string;
        }
    });
});


// inputs update in stings

function updateInputs() {
    input1.value = string;
    input2.value = string;
}

// Listen for changes in the string and update inputs accordingly

arr.forEach(button => {
    button.addEventListener('click', updateInputs);
});
