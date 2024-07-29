"use strict"
// Крок 0. Введення даних, позначення величин

let child1Name = prompt('Введіть ім\'я першої дитини', 'Петро')
let child1CandyNum = parseFloat(prompt('Введіть кількість цукерок у першої дитини', '0'))
let child2Name = prompt('Введіть ім\'я другої дитини', 'Василь')
let child2CandyNum = parseFloat(prompt('Введіть кількість цукерок у другої дитини', '0'))

// Крок 1. Обчислення результатів

let candyDiff = child1CandyNum - child2CandyNum

// Виведення результатів

if (candyDiff > 0)
   document.write(`<p class="output-data">${child1Name}</p>`)
else if (candyDiff < 0)
   document.write(`<p class="output-data">${child2Name}</p>`)
else if (candyDiff === 0)
   document.write(`<p class="output-data">Кількість цукерок у обох дітей однакова</p>`)