/*console.log('Loaded!');

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
}*/


//Counter code to increment
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    //Make a request
    var request = new XMLHttpRequest();

    //Capture the request
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
         }
        }
    };
    
    //Make the request
    request.open('GET', 'http://spandanapidishetty.imad.hasura-app.io/',true);
    request.send(null);
};


