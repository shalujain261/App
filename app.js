// let username = prompt("Enter your name");
// alert("My name is " + username);

let btn = document.querySelector(".btn");
let txtInput = document.querySelector(".text-area");
let outputClass = document.querySelector(".output");

btn.addEventListener("click",()=>{
    outputClass.innerText = "Translate it in Banana Language " + txtInput.value;
})


