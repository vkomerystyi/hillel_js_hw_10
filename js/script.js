"use strict"
/* 
Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.
    Наприклад: 
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const key = generateKey(16, characters);
    console.log(key); // eg599gb60q926j8i
*/
const userNum = parseInt(prompt("Введіть ціле число для генерації рядка:"))

const characters = "abcdefghijklmnopqrstuvwxyz0123456789"

function randomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function generateKey(userLength, characters) {
    if (userLength > 0) {
        let str = ""
        for (let i = 0; i < userLength; i++) {
            const random = randomNum(0, characters.length)
            str += characters[random]
        }
        return str
    } else {
        return "Parameters are invalid!"
    }
}

if (!userNum) {
    alert("Ви нічого не ввели!")
} else {
    const key = generateKey(userNum, characters)
    console.log("--- рядок випадкових символів із набору")
    console.log(key)
}
