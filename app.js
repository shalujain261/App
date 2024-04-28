
let btn = document.querySelector(".btn");
let txtInput = document.querySelector(".text-area");
let outputClass = document.querySelector(".output");


let ServerUrl = "https://api.funtranslations.com/translate/minion.json?text=Hello%2C%20I%20am%20hungry%21";

function getTranslateUrl(text){
    return ServerUrl + "?" + "text=" + text;
}


btn.addEventListener("click",()=>{
    fetch(getTranslateUrl(txtInput.value))
    .then((response) => (response.json()))
    .then((json) =>{
        let translatedText = json.contents.translated;
        outputClass.innerText = translatedText;

    })
    .catch((err) => {
        console.log(err);
        alert("Something Wrong with server! please try again after some time");
    })
});

