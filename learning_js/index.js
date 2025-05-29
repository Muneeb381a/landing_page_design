// // let number = 10

// // console.log(number + undefined) ;

// // here example of falsy values

// // fales
// // null
// // undefined
// // 0
// // -0
// // NaN
// // '', "", ``, (emty qoutes)

// // challenge

// // 1. Craete Variable name (is JS programming  language) & store treu as value

// //  let isJsProgrammingLanguage = true

// //  console.log(isJsProgrammingLanguage);

// // 2/ Create variable name (isJsHard)  a& store false as a value

// //  let isJsHard = false

// //  console.log(isJsHard);

// // 3. craete variable name (favNum) &store your favourite number

// // let favNum = 8;

// // console.log(favNum);

// // 4 Now add favNum with the value of undefined

// // let favNum = undefined

// // console.log(favNum);

// // comparison Operators

// // -> Relational Operators
// // 1. > Greater Then
// // 2. < Less Then
// // 3. >= Greater Then or Equal to
// // 4. <= less then  or equal to

// // -> Equality Operators

// // === strict equality (type+ value)
// // !=== strint non-equality operators
// // == lose equality operators
// // !== not equality operator

// // challenges

// // 1. Create variable name (firstfavNum) and store your fvrt number

// // let firstFavNum = 27;

// // 2. Create variable name (Second Fav Num ) and store second fav number

// // let secondFavNum = 20;

// // 3. Check (firstfavNum is greater then second favnum)

// // console.log(firstFavNum > secondFavNum);

// // 4. Check first num is less then second num

// // console.log(firstFavNum < secondFavNum);

// // 5. Check (firstNum is gretaer then & eual to second fav num)

// // console.log(firstFavNum >= secondFavNum);

// // 6. Check (first fav num is less then & equal to second fav num)

// // console.log(firstFavNum <= secondFavNum);

// // 7. Check ( first fav num is equal to second fsv num) using strict equality operator

// // console.log(firstFavNum === secondFavNum);

// // 8. Check (first fav num is not euqal to second fav num) using strict non-equality operator

// // console.log(firstFavNum !== secondFavNum);

// // 9. check (firstfavnum is not equal to second fav num) using equality operator

// // console.log(firstFavNum == secondFavNum);

// // 10. check if (firstfav number is not equal to second fav num ) using loose non-equality operator

// // console.log(firstFavNum != secondFavNum);

// // strings
// // 1. Create a variable name(favActorLastName) & store the the last name

// // let favActorLastName = "Afzal"

// // 2. Create a variable name (full name) & concatenate (favActorFirstName, favActotlastName)
// //
// // let favActorfirstName = "Muneeb "

// // let fullName = favActorfirstName + favActorLastName

// // 4. create  a variable name and capitilize the fv actor name

// // let uppercaseName = fullName.toUpperCase()

// // 5. Create a variable name (message) & store some text

// // let message = `My favorite actor is ${uppercaseName} & say something about your fvt actor`

// // 6.

// // message += `his best show is silicon valley`

// // console.log(message);

// // Type conversion

// // challege for control flow

// // 1. Craete variable name (password) store nothing

// // let password = 5;

// // 1. if password is equal to 8 print "welcome"
// // 3. if password is less tehn or equal to 8 print " password is too short"
// // 4. if password is greater then or equal to 8 print "Too long" & password should e 8 character
// // 5. if all fails paint "Please provide a password"

// // if (password === 8) {
// //     console.log("Welcome");
// // }else if (password <= 8) {
// //     console.log("Password is too short");
// // } else if (password >= 8) {
// //     console.log("Too long Password shoud be 8 characters");

// // }else {
// //     console.log("please provide a password");
// // }

// // challenge for switch statement

// // 1. create variable name (fruit) & store "banana"

// // let fruit = "Orange"

// // switch (fruit) {
// //     case "banana":
// //         console.log("Fruit is banana")
// //         break;
// //     case "Orange" :
// //         console.log("Fruit is Orange");
// //         break;
// //     case "Apple":
// //         console.log("Fruit is apple");
// //         break;
// //     default:
// //         console.log("I have never heared about that fruit");

// // }

// // Print your name and number from 0 to 1000

// // for loop challenge
// // for (let i = 0; i <= 1000; i++) {
// //     console.log("Muneeb", i);

// // }

// // challenge for while loop

// // let i = 10;

// // while (i <= 100) {
// //     console.log("Muneeb", i)
// //     i++
// // }

// // challeneg for do-while loop

// // let i = 20

// // do {
// //     console.log("Muneeb", i);
// //     i++

// // } while (i <= 400)

// // challenge for Array

// // 1. Create array name (fav singers) store 3 favorite singers

// // const fvrtSingers = ["Muneeb", "Afzal", "Zohraib"]

// // console.log(fvrtSingers[0]);

// // 2. Create array name (fvrtNumbers) and store 4 fav numbers

// // const fvrtNumbers = [1, 2, 3, 4]

// // 3. create array name mixedArr store ["string", ["other array"], 123, true]

// // const mixedArr = ["Muneeb",  ["Afzal", "Ahmad"],["zohraib"], 123, true]

// // console.log(mixedArr[2][0]);

// // challenge for object

// // const car = {
// //     type: "",
// //     model: "",
// //     color: ""
// // }

// // car.type = "Toyota"
// // car.wheels = 4

// // console.table(car);

// // challenge for creating a functiion

// // function myFunction(x, y) {
// //     return (x * y)
// // }

// // console.log(typeof myFunction);

// // const res1 = myFunction(2, 3)

// // console.log(res1);

// // challenge for call back function

// // function showCallFunc (fn) {
// //     const number = 10
// //     fn(number)
// // }

// // showCallFunc (function (value) {
// //     console.log(value);

// // })

// // challenge for template strings

// // console.log(`
// //         The Quick
// //         brown fox
// //         jumps over
// //         the lazy dog
// //     `);

// //     const firstName = "Muneeb"
// //     const lastName = "Afzal"

// //     console.log(`My name is: ${firstName} and my father name is: ${lastName}`);

// // setTimeout ( () => {
// //     console.log("Hello");

// //     setTimeout(() => {
// //         console.log("hey");

// //         setTimeout(() => {
// //             console.log("hi")

// //             setTimeout(() => {
// //                 console.log("morning");

// //                 setTimeout (() => {
// //                     console.log("Evening")
// //                 }, 2000)
// //             }, 2000)
// //         }, 2000)
// //     }, 2000)
// // }, 2000)


// // const a = 1;
// // const b = 2;
// // const c = 3;


// // const obj =  {
// //   a,
// //   b,
// //   c
  
// // };

// // console.log(obj);


// // const lib = {
// //     sum: (a, b) => {
// //         return a +b
// //     },
// //     multi: (a, b) => {
// //         return a * b
// //     }
// // }

// // console.log(lib.sum(2, 3));
// // console.log(lib.multi(2, 3));


// // const getPerson = (name, age, height) => {
// //     return {
// //     name, 
// //     age, 
// //     height
// // }}

// // console.log(getPerson ("Muneeb", 20, 5));


// // function multiply (a, b = 4) {
// //     return a * b
// // }

// // const res = multiply(4)

// // console.log(res);


// // let arr = [1, 2, 3]
// // let arr2 = [4, 5]

// // const clone = [...arr, ...arr2]

// // console.log(clone)


// // const user = {
// //     name: "Muneeb",
// //     age: 20
// // }

// // const clone1 = {...user}

// // console.log(clone1)


// // const person = (...studenData) => {
// //     console.log(studenData)
// // }

// // person("Muneeb", "Afzal", 20, "ten", 2500)


// // const colors = ["green", "yellow", "orange", "black"]

// // const [color1, color2, color3] = colors


// // console.log(color1)
// // console.log(color2)
// // console.log(color3)


// // const person = {
// //     name: "Muneeb",
// //     age:  20,
// //     gender: "Male",
// //     country: "Paksitan"
// // }

// // const {name, gender, age, country} = person

// // console.table([name, gender, age, country])

// // const person = {
// //     name: "Muneeb",
// //     age: 20,
// //     gender: "Male",
// //     country: "Pakistan"
// // }

// // const {name: personName, age: personAge, gender: personGender, country: personCountry} = person

// // console.table([personName, personCountry, personAge, personGender])


// // const money = 2;

// // const checkMoney = money >= 20 ? "Buy Products" : "Need Money"

// // console.log(checkMoney);


// // const object = {a: 1, b: 2, c: 3}

// // for (const key in object) {
// //     console.log(`${key} : ${object[key]}`);
    
// // }

// // const text = "Muneeb"

// // const joinedText = [...text].join("")

// // for (const char of joinedText) {
// //     console.log(char)
// // }


// // const numbers = [1, 2, 3, 4, 5, 6]

// // const multiple = numbers.map((number) => number * 10)

// // console.log(multiple);


// // const ages = [32, 33, 16, 40]

// // const newAges = ages.map(age => age)

// // console.log(newAges)

// // const filteredData = newAges.filter((age) => age >= 25)

// // console.log(filteredData)


// // const ages = [3, 10, 18, 20]

// // function aged (age) {
// //     return age > 18
// // }

// // const res = ages.find(aged)

// // console.log(res);


// let products = [
//     {name: "Checkers", category : "Toys"},
//     {name: "Harry Poter", category : "Books"},
//     {name: "iphone", category : "Electronics"},
//     {name: "Learn PHP", category : "Books"},
// ]

// // const res = products.find(product => product.name === "Checkers")

// // console.log(res);

// const res = products.every((product) => product.category === "Electronics")
// const res2 = products.some((product) => product.category === "Electronics")

// console.log(res)
// console.log(res2)


// console.dir(document)

console.log(document.ATTRIBUTE_NODE)