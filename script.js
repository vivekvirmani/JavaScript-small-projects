let colorCode = document.querySelector("#color-code");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");

const hexColorCode = "1233456789abcdef"

let hexCode = "#"

const getColor = ()=>{
    for(let i = 0; i <=5; i++){
        const randomNumber = Math.floor(Math.random()*16)
         hexCode += hexColorCode[randomNumber]
    }
    body.style.backgroundColor = hexCode
    colorCode.innerText = hexCode
    hexCode = "#"
}

btn.addEventListener("click",()=>{
    getColor() 
})

getColor() 