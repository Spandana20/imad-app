console.log('Loaded!');

//Changing the existing string to new value
var element = document.getElementById("mainText");
element.innerHTML = 'New Value';

//Moving the image
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    image.style.marginLeft = marginLeft + 'px';
}
var image = document.getElementById("maddy");
image.onclick = function(){
    var interval = setInterval(moveRight, 100);
}