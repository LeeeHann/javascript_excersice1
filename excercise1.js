// //1. Write function to check if number is even, isEven(2) -> true, isEven(3) -> false

// function isEven(number) {
//     if (number % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(isEven(3));

// //2. Write function to convert string to prefix string, example: prefixStr('i love to learn','-') -> 'i-love-to-learn'

// // regular expression
// function prefixStr(d) {
//     const prefixStr = d.replace(/ /g,"-");
//     return prefixStr;
//   }
// console.log(prefixStr(`i love to learn`));

// //3. Write function to calculate age, example: calculateAge(1994) -> 29

// function birthyear(birth){
//     const age = 2023 - birth;
//     return age;
// }
// console.log(birthyear(2000))

// //4. Write function sum of three numbers, fn(a,b,c)

//     function sum(a,b,c) {
//         const total=a+b+c;
//         return total;
//     }
//     console.log(sum(1,2,3));

// //5. Write function to get random number from min to max

// //math.floor
// //math.random
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(1, 5)); 

// //6. Write function return typeof value, checkTypeOf('evondev') -> string

// // （typeof value）関数はタイプをチェックする
// function check(a) {
// return typeof a;
// }
// console.log(check(`evondev`));

// //7. Write function to check if str includes word, isIncludes("evondev", "vonz") -> false
// //a.includes(b): ｂのa

// function isIncludes(str, word) {
//     return str.includes(word);
//   }
// console.log(isIncludes("evondev", "von")); // true
// // // console.log(isIncludes("evondev", "vonz")); //false



