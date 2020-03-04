let button2 = document.getElementById('btn2')
var numbers = /^[0-9]+$/;



function weather(){
    var zip = document.getElementById('zip').value
        if (zip.length == 5 && zip.match(numbers)){
            console.log(zip);
            w3.hide('body');
        }
        else{
            console.log('The zip code you entered was invalid')
        }

}

button2.onclick = weather;