"use strict"
// Крок 0. Введення даних

let productPrice = parseFloat(prompt('Введіть ціну товару', '0'))
let moneyAmount = parseFloat(prompt('Введіть кількість грошей, грн.', '0'))

// Крок 1. Обчислення результатів

const diffMoney = moneyAmount - productPrice

// Виведення результатів

if (diffMoney < 0 )
   document.write(`<p class="output-data">Вам не вистачає грошей, щоб купити товар</p>`)
else 
   document.write(`<p class="output-data">Вам вистачає грошей на товар</p>`)
   if (diffMoney >= 4)
   document.write(`<p class="output-data">Пропонуємо ще купити лотерейний квиток:)</p>`)
