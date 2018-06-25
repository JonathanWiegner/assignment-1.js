//Challenge 1

console.log("#")
console.log("##")
console.log("###")
console.log("####")
console.log("#####")
console.log("######")
console.log("#######")

for (var i = 1; i <= 7; i++) {
     var i = '#'
     console.log (i);
}
/* By writing this code I was hoping to use a for loop to create the
7 lines of hashes. I know that the loop runs with numbers 1 through 7,
so then if I made i = "#" then instead of numbers it would output "#"'s
in place of numbers.*/

//I also tried this Array:

var hashtag = ['#', '##','###', '####', '#####', '######', '#######']
console.log (hashtag);

/* Through much trial and error this my best attenpt to get these "#"'s
outputted and in order.*/


//Challenge 2

function isEven(number) {
    if (number == "0" || number == "2" || number == "4" || number == "6" || number == "8") {
        console.log("the number is even")
    }
    else if (number == "1" || number == "3" || number == "5" || number == "7" || number == "9") {
        console.log("the number is odd")
    }
    else {
        console.log("this is not a number")
    }
    
};

isEven("6");
isEven("9")
isEven("word")

//???
isEven("31")
//???

/* 
- I created a 'if' function for even numbers
- I then wrote an 'else if' function for odd numbers
- Then if it is anything 'else' it would be not a number

I see a hole in my function because if I were to input the number 31 it
would output "this is not a number" because it is not included in my if or 
else if function. I can't seem to find the information for using a modulo 
operator %, I understand this operator means remainder but I would like to 
learn how I can apply it in this situation.
*/















