function append(val) {
    const textElement = document.getElementsByClassName("text")[0];
    if (textElement.textContent === '0') {
        textElement.textContent = val;
    } else {
        textElement.textContent += val;
    }
}

function myFunction(event) {
    if (event.key.match(/[0-9+*/-]/)) {
        const textElement = document.getElementsByClassName("text")[0];
        textElement.textContent += event.key;
    }
    else if(event.key == "Enter") solve();
    else if(event.key == "Backspace") del();
}

function solve() {
    let x = document.getElementsByClassName("text")[0].textContent;
    x = x.replaceAll("x", '*');
    let y = eval(x); 
    document.getElementsByClassName("text")[0].textContent = y;
}

function clearDisplay() {
    document.getElementsByClassName("text")[0].textContent = '0';
}

function del() {
    let x = document.getElementsByClassName("text")[0].textContent;
    let y = x.substring(0, x.length - 1);
    if (y === '') {
        document.getElementsByClassName("text")[0].textContent = '0';
    } else {
        document.getElementsByClassName("text")[0].textContent = y;
    }
}