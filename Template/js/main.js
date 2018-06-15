var testOne = "What kind of variable am I?" ;
// assignment opperator

var testTwo = 256;
// Number

var testThree = false;
// 0

var testFour = 'true' ;
// 1

var testFive = '128' ;
// 128

var testSix = "";
// 

var testOne = "hello" + "there";

var testTwo = '100' + 28;

var testThree = true + 3;

var testFour = 'false' + 5;

var testFive = '128' - 3;

var testSix = "" * 9;

var testSeven = 'zero' - 1;

var testEight = 'five'.length;

var testNine = 'number'.length < 7;

var testTen = 'a' > 'b';

var testEleven = 'number'.length < 7;

var testTwelve = '12' == 12;

var testThirteen = 'twelve' ==12;

var testFourteen = '14' == 14;

var testFifteen = 'Hi there'[0] + 'open sesame'[2] + 'alohamora'[1]
'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] +'BATMAN!'[6];

var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagiorgio.";

var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings);
// Hello. my name is Kingsley Pappagiorgio.

var num1 = 8;

var num2 = 52;

var num3 = 60;

var combinedNumbers = num1 + num2 +num3;

console.log(combinedNumbers);
// Answer is 128

var mixedNum1 = 10;

var mixedString1 = "ten";

var mixedNum2 = "10";

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatenation);
// Answer is 1010ten

var num4 = 5;

var num5 = 0;

if(num4 > 1) {
	console.log("Num4 is greater than1");
} else {
	console.log("Num4 is NOT greater than 1");
};
// Answer Num4 is greater than1

var num4 = 5;

var num5 = 0;

if(num4 < num5 || num4 === num5) {

	console.log("If statement ran!");

} else if (num5 === "0" || true) {

	console.log("Else if statement ran");

} else {

	console.log("Else statement ran");

};
// Answer Else if statement ran

var num4 = 5;

var num5 = 0;

if(num4 > num5 && num4 === num5) {

	console.log("If statement ran!");

} else if (num5 === "0" || true) {

	console.log("Else if statement ran");

} else {

	console.log("Else statement ran");

};
// Answer is Else statement ran

var string1 = "this is a string";

for(var i = 0; i < string1.length; i = i + 1) {

	console.log(i, string1[i]);

};
// Answer is a string of letters vertical over 15 lines.

var string2 = "coding";

var total = 0;


for(var i = 0; i < string2.length; i++) {

	total = total + i;

};

console.log(total);
// Answer is blank with line number 15

var string3 = "onomatopoeia";

for(var i = 0; i < string3.length; i++) {

	if(string3[i] == "o") {

		console.log(i, string3[i]);

	};

};
// Only shows the letter O in vertical string with even values.

var string4 = "You're gonna need a bigger boat.";

for(var i = 0; i < string4.length; i++) {

	if(string4[i] == "a" || string4[i] == "e" ||
		string4[i] == "i" || string4[i] == "o" ||
		string4[i] =="u") {

		console.log(string4[i]);

	};

};
// Answer is it only shows the vowels of the sentence in a vertical string.

function testStuff(a, b) {

	if(a > 25 && b < 100) {

		console.log(a + " is greater than 25 and " +
			b + " is less than 100");

	} else {

		console.log(a + " is NOT greater than 25 or "
			+ b + " is NOT less than 100");

	};

};

testStuff(10, 101);

testStuff(26, 99);

testStuff(100, 25);
// Answer is text stating how numbers are greater than x 
// and how it cannot be greater than x

function testStuff2(c, d) {

	if(c == 25) {

		return c + " is equal to 25";

	} else if (d <= 100) {

		return d + " is less than or equal to 100";

	} else {

		return "Neither if nor else if statement ran";

	};

};

testStuff2(26, 101);

testStuff2(25, 99);

testStuff2(102, 24);

// Answer undefined

function countVowels(someString) {

	var vowels = 0;

	for(var i = 0; i < someString.length; i++) {

		if(someString[i] == "a" || someString[i] == "e"

			|| someString[i] == "i" || someString[i] == "o"

			|| someString[i] == "u") {

			vowels++;

		};
	};

	return vowels;
};

//  Answer is that the console message will count all of the vowels.