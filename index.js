const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("character-el");
let remainingCount = document.getElementById("remainingCharacter-el");
charVal.addEventListener("keyup",()=> updateCounter());

let char = 0;



function updateCounter(){

    userChar = charVal.value.length;
    totalCount.innerText = userChar;
    remainingCount.innerText = 250-userChar;
   
}


// copy text code

function copyText()
{
    charVal.select();
    charVal.setSelectionRange(0, 9999); //for mobile 
    navigator.clipboard.writeText(charVal.value);
}
