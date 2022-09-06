const texta = document.querySelector("#txt-area");
const btn = document.querySelector("#btn-primary");
const output = document.querySelector("#output");
  
var url= "https://api.funtranslations.com/translate/pirate.json";

function getTranslated(input){
    return url + "?" +"text=" + input
}

function errorHandler(error){
console.log("some error occored"+ error);
alert("somthing went wrong with server please check again after some time");
}

function clickHandler(){
    var newText = texta.value;
    fetch(getTranslated(newText))
    .then(response=> response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        output.innerHTML = translatedText;
    }).catch(errorHandler)
}

btn.addEventListener("click",clickHandler);