let button2 = document.getElementById('btn2')
var numbers = /^[0-9]+$/;
var key = '03c33881e2e5600f85fd019355ff5915';
var alert = document.getElementById('alert')




function weather(){
    var zip = document.getElementById('zip').value
        if (zip.length == 0){
            alert.innerHTML = 'Please enter your zipcode'
        }
        else if (zip.length == 5 && zip.match(numbers)){
            alert.innerHTML = zip
        }
        else{
            alert.innerHTML = ('The zip code you entered is invalid')
        }

}

button2.onclick = weather;