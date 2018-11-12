function char_count(String, letter) 
{
 var letter_Count = 0;
 for (var i = 0; i < String.length; i++) 
 {
    if (String.charAt(i) ===  letter) 
    {
      letter_Count += 1;
    }
}
    if (letter_Count % 2 != 0)
        console.log('The string doesn’t parse to valid xml at element ' + letter + '. Please check again!');
    
}

function validate(String){
    for (i = 0; i < String.length; i++) {
        if (String[i] == '>') {
        char_count(String, String[i-1]);
        }   
    }
    //console.log('The string parses to valid xml');
}