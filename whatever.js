

function rand_text(str_length){
 
  var randText = "";
  var strLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < str_length; i++)
    randText += strLetters.charAt(Math.floor(Math.random() * strLetters.length));

  return randText;
  
}

window.alert(rand_text(7));

//console.log(rand_text(5));
//document.getElementById("demo").innerHTML = rand_text(7);

