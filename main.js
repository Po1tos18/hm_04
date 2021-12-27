// let age = prompt('Сколько вам лет?')
// if(age <= 2) {
//         alert('младенцы')
//     }
//     else if(age > 2 && age <= 10) {
//         alert('детство')
//     }
//     else if(age > 10 && age <= 17) {
//         alert('подростки')
//     }
//     else if(age > 18 && age <= 50) {
//         alert('взрослый')
//     }
// else {
//     alert('старый')
// }
// ----------------
// let number = prompt('Введите oднозначное число');
// if(number == 1) {
//         alert('!')
//     }
//     else if(number == 2) {
//         alert('@')
//     }
//     else if(number == 3) {
//         alert('#')
//     }
//     else if(number == 4) {
//         alert('$')
//     }
//     else if(number == 5) {
//         alert('%')
//     }
//     else if(number == 6) {
//         alert('^')
//     }
//     else if(number == 7) {
//         alert('&')
//     }
//     else if(number == 8) {
//         alert('*')
//     }
//     else if(number == 9) {
//         alert('(')
//     }
//     else if(number == 0) {
//         alert(')')
//     }
// else {
//     alert('Я же прoсил "Однозначное Число"')
// }
// ------------------
// let number = +prompt('Введите трехзначное число');
// let first = Math.trunc(number /100);
// let second = Math.trunc(number /10)%10;
// let third = Math.trunc(number %10);
// if(first == second || second == third || first == third) {
//     alert('Есть совпадение)')
// }
// else {
//     alert('Нету совпадений(')
// ------------------
// let year = +prompt('Введите год')
// if(year%4 == 0 && year%100 !=0 || year%400 == 0) {
//     alert('Високосный')
// }
// else {
//     alert('Не високосный')
// }
// ------------------
// let number = prompt('Введите пятизначное число')
// let first = Math.trunc(number % 10)
// let second = Math.trunc((number / 10) % 10)
// let fourth = Math.trunc((number / 1000) % 10)
// let fifth = Math.trunc((number / 10000) % 10)
// if(first == fifth && second == fourth) {
//     alert('Число палиндромное')
// }
// else {
//     alert('Не палиндромное')
// }
