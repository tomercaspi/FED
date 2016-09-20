

// prog1 will print to the console if a number is divided by 3 - fizz, if divided by 5 - buzz, and if in both - FizzBuzz
function printFizzBuzz(num1, num2){

    if (num1 > num2){
        var temp = num2;
        num2=num1;
        num1=temp;
    }
    for( ; num1<=num2; num1++){
        if (num1%3 == 0) {
            if (num1 % 5 == 0) {
                //console.log("FizzBuzz");
                num1="FizzBuzz";
            } else {
                //console.log("Fizz");
                num1="Fizz";
            }
        }
        else if (num1%5==0) {
                //console.log("Buzz");
                num1="Buzz";
            }
        //else
            //console.log(num1);
            document.write(num1);
    }
}

// Your code here.

function countBs(str){
    return countChar(str, 'b');
}

function countChar(str, chr){
    str = str.toLowerCase();
    var count = 0;
    console.log("size of str is: " + str.length);
    for (var i=0; i<str.length; i++){
        if (str[i] === chr){
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


printFizzBuzz(1, 31);
printFizzBuzz(40, 3);
