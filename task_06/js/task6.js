"use strict"
// Крок 0. Введення даних, позначення величин

let dayNumber = parseFloat(prompt('Введіть номер дня тижня, 1-7', '1'))

// Крок 1. Обчислення результатів

let dayValue

if (dayNumber === 1)
   dayValue = 'понеділок'
else if (dayNumber === 2)
   dayValue = 'вівторок'
else if (dayNumber === 3)
   dayValue = 'середа'
else if (dayNumber === 4)
   dayValue = 'четвер'
else if (dayNumber === 5)
   dayValue = 'п\'ятниця'
else if (dayNumber === 6)
   dayValue = 'субота'
else if (dayNumber === 7)
   dayValue = 'неділя'
else
   document.write(`<p class="output-data">Введіть номер дня тижня правильно</p>`)

// Виведення результатів
document.write(`
   <p class="output-data">День тижня - ${dayValue}</p>
`)