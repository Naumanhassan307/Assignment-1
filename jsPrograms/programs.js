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
