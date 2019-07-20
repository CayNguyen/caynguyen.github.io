let myImage = document.querySelector('img');
myImage.onclick=function () {
    const mySrc = myImage.getAttribute('src');
    if(mySrc==="images/firefox-icon.png"){
        myImage.setAttribute('src','images/firefox2.png.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
};
let myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool,' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    const storeName = localStorage.getItem('name');
    myHeading.textContent= 'Mozilla is cool,'+ storeName;
}
myButton.onclick= function () {
    setUserName();
};