var number = 5; // in-line commnet

/* this
is
a 
multi-line
comment
*/

number = 9;

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/
var myName = "Buny"; //can be used throughout all program
myName = 8;
let ourName = "BERD"; //can be used only in the scope where it was declared
const pi = 3.14; //variable that can't be changed

//console.log() is used to show values in the console

//STORING VALUES WITH ASSIGNMENT OPERATOR
var a; //declaring a variable
var b = 2; //declaring and assigning variable ("=" is the assignment operator)
console.log("a is: " + a); //will be "NULL" or "undefined" because a was only declared but nothing was assigned
a = 7; //Assigned 7 to a
b = a;
console.log("now a is: " + a); //will be 7, just like b


//INITIALIZING VARIABLES W/ ASSIGNMENT OPERATOR
var a = 9;


//UNINITIALIZED VARIABLES
//      Initialize these three variables:
var a = 5;
var b = 10;
var c = "I am a";
//      Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";


//CASE SENSITIVITY IN VARIABLES (useCamelCase)
/* None of these will work.
//      Declarations:
            var StUdLyCapVaR;
            var properCamelCase;
            var TitleCaseOver;
//      Assignments
            STUDLYCAPVAR = 10;
            PRoperCAmelCAse = "A String";
            tITLEcASEoVER = 9000;
  But these will */
//      Declarations:
            var studlyCapVar;
            var properCamelCase;
            var titleCaseOver;
//      Assignments
            studlyCapVar = 10;
            properCamelCase = "A String";
            titleCaseOver = 9000;
            

//BASIC MATH
//      adding numbers:
            var sum = 10 + 10;
            console.log("sum = " + sum);
//      subtracting numbers:
            var diff = 43 - 1;
            console.log("diff = " + diff);
//      multiplying numbers:
            var mlt = 23 * 3;
            console.log("mlt = " + mlt);
//      dividing numbers:
            var quot = 100 / 3;
            console.log("quot = " + quot);
//      incrementing numbers:
            var incr = 1;
            incr = incr + 1;
            console.log("incr = " + incr)
            // OR:
            var incr2 = 1;
            incr2 ++;
            console.log("incr2 = " + incr2)
//      decrementing numbers:
            var decr = 10;
            decr = decr - 1;
            console.log("decr = " + decr);
            // OR:
            var decr2 = 10;
            decr2 --;
            console.log("decr2 = " + decr2);
//      decimal numbers:
            var decimal = 5.7;
            var decimal = 0.009;
            // Multiply decimals
                var prod = 2.0 * 2.5;
                console.log("prod = " + prod);
            //Divide decimals
                var quo = 4.4 / 2.0;
                console.log("quo = " + quo)
            //Finding a remainder
                var remainder;
                remainder = 11 % 3;
                console.log("remainder = " + remainder)
//      Compound Assignment with augmented addition/subtraction/multiplication/division
            var a = 3;
            var b = 20;
            var c = 12;
            var d = 50;
            //operations:
            a = a + 12;
            b = 9 - b;
            c = c * 7;
            d = d / 2;
            // OR:
            a += 12;
            b -= 9;
            c *= 7;
            d /= 2;
            console.log("a, b , c and d are respectively: " +  a , b, c, d);
            

//DECLARE STRING VARIABLES
    var firstName = "João";
    var lastName = "Alves";
    //Escaping Literal Quotes in Strings
        var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
        console.log("myStr = " + myStr);
    //Quoting Strings with Single Quotes
        var myNewStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
        var myNewStr = '<a href="http://www.example.com" target="_blank">Link</a>';
        console.log("myNewStr = " + myNewStr);
    //Escape Sequences in Strings
        /*
        CODE OUTPUT
        \' single quote  
        \" double quote
        \\ backslash
        \n newline
        \r carriage return
        \t tab
        \b backspace
        \f form feed
        */
        var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
        console.log("myStr = " + myStr)
    //Concatenating Strings with Plus Operator
        var concStr = "I come first. " + "I come second. ";
        console.log("Concatenated str1 = " + concStr)
        //OR
        var anotherConcStr = "I come third";
        console.log("Concatenated str2 = " + concStr + anotherConcStr)
        //OR
        var newConcStr = concStr + anotherConcStr;
        console.log("Concatenated str3 = " + newConcStr);
    //Concatenating Strings with Plus Equals Operator
        var newStr = "I come first. ";
        newStr += "I come second.";
        console.log("Concatenated str4 = " + newStr)
    //Constructing Strings with Varibles
        var myName = "Buny";
        var myStr = "Hello, my name is " + myName + ", how are you?";
        console.log("constructed str = " + myStr);
    //Appending Variables to Strings
        var num = 2001;
        var str = "Eu nasci em ";
        str += num;
        console.log("Appended variable str = " + str)
    //Find Length of String
        var str = "pneumoultramicroscopicossilicovulcanoconiose";
        var strLength = 0;
        strLength = str.length;
        console.log("The string is " + str + " and it's lenght is: " + strLength);
        
          