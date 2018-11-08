var number = new Array (1,2,3,4,5,6);
var text = new String("  ");
var recursion = function(array){
    if(array.length > 0){
        if(array[0] < array[1]){
            console.log(text.repeat(array[0]) + "<"+ array[0] +">" );
        }else{
            console.log(text.repeat(array[0]) + "</"+ array[0] +">" );
        }
        recursion(array.slice(1))
    }
}
console.log("```html");
recursion(number);
recursion(number.reverse());
console.log("```");