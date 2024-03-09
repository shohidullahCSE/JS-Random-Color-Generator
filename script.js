const colorArray = ["red","green","blue"];
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor= colorArray[randomNumber];
    color.innerHTML=colorArray[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colorArray.length);
}