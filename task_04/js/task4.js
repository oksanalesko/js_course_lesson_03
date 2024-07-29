"use strict"
// Крок 0. Введення даних, позначення величин

let userAge = parseFloat(prompt('Вкажіть свій вік, у роках', '10'))

// Крок 1. Обчислення результатів та Виведення результатів

if (userAge > 0 && userAge < 3)
   document.write(`<p class="output-data">Ви немовля:)</p>`)
if (userAge >= 3 && userAge < 6)
   document.write(`<p class="output-data">Ви дитина в садочку:)</p>`)
if (userAge >= 6 && userAge < 17)
   document.write(`<p class="output-data">Ви школяр:)</p>`)
if (userAge >= 17 && userAge < 22)
   document.write(`<p class="output-data">Ви студент:)</p>`)
if (userAge >= 22 && userAge < 60)
   document.write(`<p class="output-data">Ви працівник:)</p>`)
if (userAge >= 60)
   document.write(`<p class="output-data">Ви пенсіонер:)</p>`)
if (userAge < 0)
   document.write(`<p class="output-data">Ваше ім\'я, випадково, не Бенджамін Баттон?:)</p>`)


