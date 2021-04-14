// 1.	Write a js program to convert lowercase string to uppercase.

// let inputValue = prompt("Enter lowercase string", "hello world")

// console.log("input value before uppercase=>",inputValue );

// let uppercaseValue = inputValue.toUpperCase()
// console.log("input value in uppercase=>", uppercaseValue );

// 2.	Write a js program to convert uppercase string to lowercase.

// let inputValue = prompt("Enter Uppercase string", "HELLO WORLD")

// console.log("input value before lowercase=>",inputValue );

// let lowercaseValue = inputValue.toLowerCase()
// console.log("input value in lowercase=>", lowercaseValue);

// 3.	Write a js program to toggle case of each character of a string.

// let inputString = "hello world! this is Js program"

// let splitString = inputString.split(" ")
// console.log(splitString)

// console.log(splitString[0].charAt(0).toUpperCase());
// console.log(splitString[0])

// 5.	Write a js program to count total number of vowels and consonants in a string.

// let vowels = 0
// let consonants = 0

// let str = "This is a Js Program"
// let lowerStr = str.toLowerCase()
// console.log(typeof(lowerStr))
// console.log(lowerStr)
// for(let i=0; i<lowerStr.length; i++){

//     if((lowerStr.charAt(i) === "a" || lowerStr.charAt(i) === "e" ||lowerStr.charAt(i) === "i" ||lowerStr.charAt(i) === "o" ||lowerStr.charAt(i) === "u" ) && (lowerStr.charAt(i) !== " ") ) {
//         vowels++
//     }else if ((lowerStr.charAt(i) !== "a" || lowerStr.charAt(i) !== "e" ||lowerStr.charAt(i) !== "i" ||lowerStr.charAt(i) !== "o" ||lowerStr.charAt(i) !== "u" ) && (lowerStr.charAt(i) !== " ")){

//         consonants++
//     }

// }
// console.log("Vowels are in this string =>", vowels)

// console.log("consonants are in this string =>", consonants);

// 6.	Write a js program to count total number of words in a string.

// let str = "Hello my name is Nauman Hassan"

// let splitStr = str.split(" ")

// let wordsInString = splitStr.length
// console.log("Orignal string => "+"Hello my name is Nauman Hassan");

// console.log("Total numbers in this string are =>", wordsInString)

// 7.	Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };

// for(let prop in student){
//     console.log(student[prop])
// }

// 8.	 Write a JavaScript program to delete the rollno property from the following object.
//       Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };

// console.log("Object before deleting rollno property", student)

// delete student.rollno;

// console.log("Object after deleting rollno property", student)





//9. Write a JavaScript program to get the length of a JavaScript object.
// 	Sample object :
//            var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };

// let objLength = 0

// for(let prop in student){
//     objLength++
// }
// console.log("Length of object is => ", objLength)





// 10.	 Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//      author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//   readingStatus: false
//    }];




// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//     readingStatus: false
//     }
// ];

// library.map((library)=>{

//     console.log(library.author)
//     console.log(library.title)
//     console.log(library.readingStatus)
// })




// 12. Write a js program to print all odd number between 1 to 100.


// for(let i=1; i<100; i++){
//     if( i % 2 !==0){
//         console.log(i, "is an add number between 1 to 100")
//     }
// }




// 13.	 Write a js program to find sum of all natural numbers between 1 to n.

// let n= prompt("Enter the value of n ")
// let sum = 0
// for(let i=1; i<=n ; i++){
//     sum= sum+i;
// }
// console.log("sum of all natural numbers between 1 to n is => ", sum);



// 14.	 Write a js program to find sum of all even numbers between 1 to n.

// let n= prompt("Enter the value of n ")

// let sum = 0

// for(let i=1 ; i<= n; i++){
//     if(i % 2 === 0){
//         sum = sum+i
//     }
// }

// console.log("sum of all even numbers between 1 to n", sum);


// 15.	 Write a js program to find sum of all odd numbers between 1 to n.


// let n= prompt("Enter the value of n ")

// let sum = 0

// for(let i=1 ; i<= n; i++){
//     if(i % 2 !== 0){
//         sum = sum+i
//     }
// }
// console.log("sum of all odd numbers between 1 to n", sum);



// 16.	 Write a js program to print multiplication table of any number.


// for(let i=1 ; i<=10; i++){
//     console.log("2 x ", i ,"=", 2*i)
// }


// 17.	 Write a js program to count number of digits in a number.

// let number = 12345678910
// console.log(typeof(number))
// number.toString()
// console.log(number.toString().length);
// console.log(number)
// console.log(typeof(number))



// 19. Write a js program to find maximum between two numbers.

// let num1 = prompt("Enter first number","1234..")
// let num2 = prompt("Enter second number","1234..")


// if(num1 > num2){
//     console.log(num1, "is greater number, which is ", num1)
// }else{
//     console.log(num2, "is greater number, which is ", num2)

// }




// 20.	 Write a js program to find maximum between three numbers.

// let num1 = prompt("Enter first number","1234..")
// let num2 = prompt("Enter second number","1234..")
// let num3 = prompt("Enter sthird number","1234..")


// if(num1 > (num2 && num3)){
//     console.log("the greater number is ", num1)
// }else if (num2 > (num1 && num3)) {
//     console.log("the greater number is ", num2);
// } else {
//     console.log("the greater num is ", num3);
// }



// 21.	 Write a js program to check whether a number is negative, positive or zero.

// let num = prompt("Enter a number for checking +ve/ equal to 0/ -ve")

// if (num > 0){
//     console.log("Number is positive")
// }else if (num ===0){
//     console.log("Number is equal to zero")
// }else if (num <0 ){
//     console.log("Number is negtive")
// }else{
//     console.log("Number is invalid")
// }


// 22.	 Write a js program to check whether a number is divisible by 5 and 11 or not.



// let num = prompt("Enter a number is divisible by 5 and 11 or not")

// if(num % 5 ===0 || num % 11 === 0){
//     console.log(num, "is divisible by 5 and 11 ");
// }else{
//     console.log(num, "is not divisible by 5 and 11 ");

// }


// 23. Write a js program to check whether a number is even or odd.


// let num = prompt("Enter a number to check whether a number is even or odd"


// if(num % 2 ===0){
//     console.log("Number is positive")
// }else{
//  console.log("Number is negtive");   
// }



// 25.	 Write a js program to check whether a character is alphabet or not.


// let alphabet = prompt("Enter a value to check whether a character is alphabet or not")
// let convertAlphabet = alphabet.toString()

// if(alphabet === convertAlphabet){
//     console.log("Yes it is an alphabet")
// }else{
//     console.log("No it is not an alphabet")

// }



// 26.	 Write a js program to input any alphabet and check whether it is vowel or consonant.


// let alphbet = prompt("Enter any alphabet and check whether it is vowel or consonant")
// let convertAlphbet = alphbet.toLowerCase()

// // console.log(convertAlphbet)

// if(convertAlphbet === "a" || convertAlphbet === "e" || convertAlphbet === "i" || convertAlphbet === "o" || convertAlphbet === "u" ){
//     console.log("The alphbet is vowel")
// }else{
//     console.log("The alphbet is consonant")

// }



// 28.	 Write a js program to find cube of any number using function.



// let cubeOfAnyFun = (num) => {
//     console.log("cube of a given number is ", Math.pow(num, 3));
// }
// cubeOfAnyFun(5)




// 30.	 Write a js program to find maximum and minimum between two numbers using functions.

// let maxNum = (num1, num2)=>{
//     if(num1 > num2){
//         console.log("Number", num1, "is maximum than", num2)
//     }else {
//         console.log("Number", num2, "is maximum than", num1)
//     }
// }

// maxNum(10,2)