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



// 4.	Write a js program to find total number of alphabets, digits or special character in a string.



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


// 11.	 Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// let r = 2

// let h = 2

// let v = (Math.PI * r * 2 *h)


// console.log("Volume of a cylinder is", v)




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


// 24.	 Write a js program to check whether a year is leap year or not.

// let get = prompt("Enter year", "2001, 2002, 2003...")
// let getYear = parseInt(get)

// if ((getYear % 4 === 0) && (getYear % 100 !== 0) && (getYear % 400 === 0)){
//     console.log(getYear," is a leap year")
// }else {
//     console.log(getYear," is not a  leap year")

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



// 29.	 Write a js program to find diameter, circumference and area of circle using functions.




// let diameter = (r) =>{
//     let d = 2* r
//     console.log("Diameter of cirlcle is ", d, "with radius ", r)
// }
// diameter(2)

// let circumference = (r) =>{
//     let c = (2* Math.PI *r)
//     console.log("circumference of cirlcle is ", c, "with radius ", r);
// }

// circumference(3)


// let area = (r)=>{
//     let a = (Math.PI * (Math.pow(r, 2)))
//     console.log("Area of cirlcle is ", a, "with radius ", r);
// }
// area(5)






// 30.	 Write a js program to find maximum and minimum between two numbers using functions.

// let maxNum = (num1, num2)=>{
//     if(num1 > num2){
//         console.log("Number", num1, "is maximum than", num2)
//     }else {
//         console.log("Number", num2, "is maximum than", num1)
//     }
// }

// maxNum(10,2)



// 31.	Write a js program to check whether a number is even or odd using functions.


// let evenOddNum = (num1) =>{
//     if(num1 % 2 === 0){
//         console.log(num1, "is an even number")
//     }else{
//         console.log(num1, "is an odd number")
//     }
// }
// evenOddNum(101)


// 33.	Write a js program to find maximum between two numbers using conditional operator.




// let maximum = (num1, num2) =>{
//     num1 > num2
//         ? console.log(num1, "number  is maximum than ", num2)
//         : console.log(num2, "number  is maximum than ", num1);
// }

// maximum(100, 20)




// 34.	Write a js program to find maximum between three numbers using conditional operator.


// let maximum = (n1, n2, n3) =>{
//     ((n1 > n2) && (n1 > n3)) 
//         ? console.log(n1, "is maximum number")
//         : ((n2 > n1) && (n2 > n3))
//         ? console.log(n2, "is maximum number")
//         : console.log(n3, "is maximum number")
// }

// maximum(10, 40, 50)



// 35.	 Write a js program to check whether a number is even or odd using conditional operator.

// let evenOdd = (n1) =>{
//     (n1 % 2 === 0)
//         ? console.log(n1, "is an Even number")
//         : console.log(n1, "is an odd number")
// }

// let number = prompt("Enter any number to check Even or Odd")
// let n = parseInt(number)

// evenOdd(n)


// 38.	Write a js program to print day of week name using switch case.


// let day = new Date().getDay()
// console.log(day);
// switch(day){
//     case 1:{
//         console.log("Monday")
//         break
//     }
//     case 2:{
//         console.log("Tuesday")
//         break
//     }
//     case 3:{
//         console.log("Wednesday")
//         break
//     }
//     case 4:{
//         console.log("Thursday")
//         break
//     }
//     case 5:{
//         console.log("Friday")
//         break
//     }
//     case 6:{
//         console.log("Saturday")
//         break
//     }
//     case 7:{
//         console.log("Sunday")
//         break
//     }
//     default:{
//         console.log("invalid day Name!")
//     }
// }




// 39.	 Write a js program print total number of days in a month using switch case.

// let m = prompt("Enter month number ", "1/2/3/...")
// let month = parseInt(m)


// switch (month) {
//     case 1:
//         console.log("31 days");
//         break;
//     case 2:
//         console.log("28/29 days");
//         break;
//     case 3:
//         console.log("31 days");
//         break;
//     case 4:
//         console.log("30 days");
//         break;
//     case 5:
//         console.log("31 days");
//         break;
//     case 6:
//         console.log("30 days");
//         break;
//     case 7:
//         console.log("31 days");
//         break;
//     case 8:
//         console.log("31 days");
//         break;
//     case 9:
//         console.log("30 days");
//         break;
//     case 10:
//         console.log("31 days");
//         break;
//     case 11:
//         console.log("30 days");
//         break;
//     case 12:
//         console.log("31 days");
//         break;
//     default:
//         console.log("Invalid");
// }


// 40.	 Write a js program to check whether an alphabet is vowel or consonant using switch case

// let inp = prompt("Enter an alphabet to check whether an alphabet is vowel or consonant")

// let convertInp = inp.toLowerCase()

// switch (convertInp) {
//     case "a" :{
//         console.log("Alphabet is vowel")
//         break
//     }
//     case "e" :{
//         console.log("Alphabet is vowel")
//         break
//     }
//     case "i" :{
//         console.log("Alphabet is vowel")
//         break
//     }
//     case "o" :{
//         console.log("Alphabet is vowel")
//         break
//     }
//     case "u" :{
//         console.log("Alphabet is vowel")
//         break
//     }
//     default:{
//         console.log("Alphabet is consonents");
//     }
// }



// 41.	 Write a js program to find maximum between two numbers using switch case.


// let num1 = 10
// let num2 = 30

// switch(num1 > num2){
//     case true:{
//         console.log(num1, "is maximum than", num2)
//         break
//     }
//     case false:{
//         console.log(num2, "is maximum than", num1)
//         break
//     }
//     default:{
//         console.log("invalid ")
//     }
// }


// 42.	 Write a js program to check whether a number is even or odd using switch case.


// let num = 99

// switch(num % 2 === 0 ){
//     case true:{
//         console.log("Number is Even")
//         break
//     }
//     case false:{
//         console.log("Number is odd")
//         break
//     }
//     default:{
//         console.log("invalid ");
//     }
// }

// 43.	 Write a js program to check whether a number is positive, negative or zero using switch case.


// let num = 0

// switch(num > 0){
//     case true:{
//         console.log(num ,"is a positive number")
//         break
//     }
//     case false:{
//         console.log(num ,"is a negtive number")
//         break
//     }
//     default:{
//         console.log(num, "is zero")
//     }
// }


// 45.	 Write a js program to create Simple Calculator using switch case.


// let num11 = prompt("Enter first number", "1,2,3...")
// let num22 = prompt("Enter second number", "1,2,3...");


// let num1 = parseInt(num11)
// let num2 = parseInt(num22)
// let oper = prompt("Enter operator", "+, -, *, /");

// switch(oper){
//     case "+":{
//         console.log("The sum of two numbers is ", num1 +num2)
//         break
//     }
//     case "-":{
//         console.log("The subtraction of two numbers is ", num1 - num2)
//         break
//     }
//     case "*":{
//         console.log("The multiplication of two numbers is ", num1 * num2)
//         break
//     }
//     case "/":{
//         console.log("The division of two numbers is ", num1 / num2)
//         break
//     }
//     default:{
//         console.log("invalid")
//     }
// }


// 46.	Write a js program to count total number of negative elements in an array.


// let arr = [1, -2, -4, -4, 5,  2, 3, -9, -56, -98]


// let negtiveNumber = 0
// arr.map((item, index)=>{
//     if(arr[index] < 0){
//         console.log(item, "at index", index, "is negtive")
//         negtiveNumber++
//     }
// })
// console.log("Orignal Array is ", arr)
// console.log("Negtive numbers are ", negtiveNumber)




// 47.	 Write a js program to copy all elements from an array to another array.


// let arr1 = [1, -2, -4, -4, 5, 2, 3, -9, -56, -98];

// console.log("The orignal Array", arr1)

// let arr2 = arr1.slice(0, 10)

// console.log("The copy Array", arr2)


//48.   Write a js program to insert an element in an array.


// let arr1 = [1, -2, -4, -4, 5, 2, 3, -9, -56, -98];

// console.log("The orignal Array", arr1);

// // insert 8 at start

// arr1.unshift(8)


// console.log("The Array after inserting at start of Array", arr1);



// 49.	 Write a js program to delete an element from an array at specified position.


// let arr1 = [1, -2, -4, -4, 5, 2, 3, -9, -56, -98];

// // delete element 5 from index 4.
// console.log("The orignal Array", arr1);

// arr1.splice(4, 1)

// console.log("The Array after delete element 5 from index 4", arr1);


