let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "0";
input.value = string;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (input.value === "0" && !isNaN(parseInt(e.target.innerHTML))) {
            string = e.target.innerHTML;
            input.value = string;
        } else if (e.target.innerHTML == '=') {
            string = eval(string === "" ? "0" : string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "0";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
