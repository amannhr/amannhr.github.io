let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/angular-icon.png'){
        myImage.setAttribute('src','images/eat-sleep-code-repeat.png');
    }
    else{
        myImage.setAttribute('src','images/angular-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function(){
    setUserName();
}

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Go for Angular '+myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Go for Angular '+storedName;   
}