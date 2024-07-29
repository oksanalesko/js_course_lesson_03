"use strict"
// Крок 0. Введення даних, позначення величин

let monthNumber = parseFloat(prompt('Введіть номер місяця, 1-12', '1'))

// Крок 1. Обчислення результатів

let seasonValue

if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5)
   seasonValue = 'весна'
else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8)
   seasonValue = 'літо'
else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11)
   seasonValue = 'осінь'
else if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
   seasonValue = 'зима'
else
   document.write(`<p class="output-data">Введіть номер місяця правильно</p>`)

// Виведення результатів
document.write(`
   <p class="output-data">Пора року - ${seasonValue}</p>
`)