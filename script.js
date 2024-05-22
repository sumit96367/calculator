let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            string = String(eval(string))
            inputBox.value = string;
        }
        else if (e.target.innerText == 'AC') {
            string = ''
            inputBox.value = string;
        }
        else if (e.target.innerText == 'DEL') {
            string = string.slice(0, -1)
            inputBox.value = string;
        }
        else if (e.target.innerText == 'plusMinus') {
            string = String(-eval(string))
            inputBox.value = string;
        }
        else {
            string = string + e.target.innerText
            inputBox.value = string;
        }
    })
})