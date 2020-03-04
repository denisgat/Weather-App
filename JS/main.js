let button2 = document.getElementById('btn2')
var numbers = /^[0-9]+$/;
var key = '03c33881e2e5600f85fd019355ff5915';




function weather(){
    var zip = document.getElementById('zip').value
        if (zip.length == 5 && zip.match(numbers)){
            console.log(zip);
        }
        else{
            console.log('The zip code you entered is invalid')
        }

}

button2.onclick = weather;