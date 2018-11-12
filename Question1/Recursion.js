var text = new String("  ");
var recursion = function(Array){
    if(Array.length > 0){
        if(Array[0] < Array[1]||(Array.length<=1 && Array[0]==6)){
            console.log(text.repeat(Array[0]) + "<"+ Array[0] +">" );
        }else{
            console.log(text.repeat(Array[0]) + "</"+ Array[0] +">" );
        }
        recursion(Array.slice(1))
    }
}
