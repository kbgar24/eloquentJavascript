/*  Eloquent JavaScript
    Chapter 3
    Kendrick Gardner


/--------------- Minimum ------------------/

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a function min
that takes two arguments and returns their minimum.

*/

//Original Task
function min(a,b){
    if (a < b){
        return a;
    } else {return b;}
}

/*--------------- isEven ------------------/

We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to check whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even
or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N 􀀀 2.

Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -􀀀1. Why? Can you think
of a way to fix this?

*/

//Original Task
function isEven(num){
    if (num === 0){
        return true;
    } else if (num === 1){
        return false;
    } else {
        return isEven(num - 1);
    }
}

//Above function fails on negative numbers as they are, or course, less than 0 or 1 and recursive call will overflow call stack. 
//Solution - make any negative inputs positive at function start.
function isEvenBetter(num){
    if (num < 0){
        num = -num;
    }
    if (num === 0){
        return true;
    } else if (num === 1){
        return false;
    } else {
        return isEvenBetter(num - 1);
    }
}

/*--------------- Bean Counting ------------------/

You can get the Nth character, or letter, from a string by writing "string"
.charAt(N), similar to how you get its length with "s".length. The returned
value will be a string containing only one character (for example, "b"). The
first character has position zero, which causes the last one to be found at po-
sition string.length - 1. In other words, a two-character string has length 2,
and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and re-
turns a number that indicates how many uppercase “B” characters are in the
string.

Bonus: Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.

*/

//Original Task
function countBs(str){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === 'B'){
            count ++;
        }
    }
    return count;
}

//Bonus Task
function countChar(str, char){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === char){
            count ++;
        }
    }
    return count;
}

function countBs(str){
    return countChar(str, 'B');
}