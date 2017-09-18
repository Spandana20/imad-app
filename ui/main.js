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
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
         }
        }
    };
    
    //Make the request
    request.open('GET', 'http://spandanapidishetty.imad.hasura-app.io/counter',true);
    request.send(null);
};
//onclick Submit code
var inputName = document.getElementById('name');
var name = inputName.value;
var submit = document.getElementById('submitButton');
submit.onclick = function(){
    //make request and send the name 
    //capture the name and add it to the list
    var names = ['name1','name2','name3'];
    var list='';
    for(var i = 0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>'
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML = list
};

