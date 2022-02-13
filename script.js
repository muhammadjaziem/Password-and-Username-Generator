const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const generateUsr = document.getElementById("generateusr");
const usrEl = document.getElementById("usr");
const usrwEl = document.getElementById("usrw");


//define all the character including symbols and numbers
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
   
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]; //math floor returns the largest integer
}

function getUppercase() {
 
    return upperLetters.charAt(Math.floor(Math.random() * upperLetters.length));
   
}

function getNumber() {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function getSymbol() {
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

function generatePassword() {
    const len = lenEl.value; //takes the length value from user

    let password = "";

    //check which one is checked and which one is not
    if (upperEl.checked) {
        password += getUppercase();
        
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
        console.log(password);
        
    }

    pwEl.innerText = password; //display password in the front page
}

function generateUsername()
{
    const usr = usrEl.value; //takes the length value from user

    let username = "";

    

    for (let j = username.length; j < usr; j++) {
        const xusr = generatexusr();
        username += xusr;
        console.log(username);
    }

    usrwEl.innerText = username;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

function generatexusr()
{
    const xsusr = [];
    if (upperEl.checked) {
        xsusr.push(getUppercase());
    }

    if (lowerEl.checked) {
        xsusr.push(getLowercase());
    }

    if (numberEl.checked) {
        xsusr.push(getNumber());
    }

    if (symbolEl.checked) {
        xsusr.push(getSymbol());
    }


    if (xsusr.length === 0) return "";

    return xsusr[Math.floor(Math.random() * xsusr.length)];
}

generateEl.addEventListener("click", generatePassword); //goes to generatePassword function
generateUsr.addEventListener("click", generateUsername); 

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
