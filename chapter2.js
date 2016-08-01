/*  Eloquent JavaScript
    Chapter 2
    Kendrick Gardner


/---------------Looping a Triangle ------------------/

Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

*/

//Original Task
var count = 1;
var answer = '';
while(count < 8){
    answer += '#';
    count++;
    console.log(answer);
}





/*---------------FizzBuzz ------------------/

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
Bonus: When you have that working, modify your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5.

*/

//Original Task
var count = 1;
while (count <= 100){
    if(count % 3 === 0){
        console.log('Fizz');
    } else if (count % 5 === 0){
        console.log('Buzz');
    } else {console.log(count);}
    count++;
}

//Bonus Task
var count = 1;
while (count <= 100){
    if(count % 15 === 0){
        console.log('FizzBuzz');
    } else if(count % 3 === 0){
        console.log('Fizz');
    } else if (count % 5 === 0){
        console.log('Buzz');
    } else {console.log(count);}
    count++;
}


/*---------------ChessBoard ------------------/

Write a program that creates a string that represents an 8-by-8 grid, using new-
line characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:

# # # # 
 # # # #
# # # #
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #


Bonus: When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting a
grid of the given width and height.

*/

//Original Task
var count = 1;
var square = '';
while(count <= 64){
    if (count % 2 !== 0){
        square += ' ';
    } else {
        square += '#';
    }
    if (count % 16 === 0){
      square += '\n';  
    } else if (count % 8 === 0) {
        square += '\n ';  
    }
    count++;
}
console.log(square)

//Bonus Task
var size = 8;
var count = 1;
var square = '';
while(count <= Math.pow(size,2)){
    if (count % 2 !== 0){
        square += ' ';
    } else {
        square += '#';
    }
    if (count % (size * 2) === 0){
      square += '\n';  
    } else if (count % size === 0) {
        square += '\n ';  
    }
    count++;
}
console.log(square)







