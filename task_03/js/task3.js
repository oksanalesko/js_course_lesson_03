"use strict"
// Крок 0. Введення даних, позначення величин

let minNumber = 1
let maxNumber = 5
let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
alert('Спробуйте вгадати номер від 1 до 5, згенерований випадковим чином, за 2 спроби')
let userNumber = parseFloat(prompt('Спроба №1. Введіть номер від 1 до 5', '1'))

// Крок 1. Обчислення результатів
// Виведення результатів

if (userNumber === randomNumber)
   document.write(`<p class="output-data">Вітаємо, ви вгадали номер. Випадковий номер: ${randomNumber}</p>`)
else {
   alert('На жаль, ви не вгадали, спробуйте ще раз, у вас залишилась 1 спроба')
   let userNumber = parseFloat(prompt('Спроба №2. Введіть номер від 1 до 5', '1'))
   if (userNumber === randomNumber)
      document.write(`<p class="output-data">Вітаємо, ви вгадали номер. Випадковий номер: ${randomNumber}</p>`)
   else
      document.write(`<p class="output-data">На жаль, ви не вгадали. Ваші спроби закінчилися. Випадковий номер: ${randomNumber}</p>`)
}