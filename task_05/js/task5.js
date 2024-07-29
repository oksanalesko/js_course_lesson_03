"use strict"
// Крок 0. Введення даних, позначення величин

let driverCategory = prompt('Введіть назву категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль)', 'A')

// Крок 1. Обчислення результатів

let categoryValue

if (driverCategory === 'A')
   categoryValue = 'мотоцикл'
else if (driverCategory === 'B')
   categoryValue = 'легковий автомобіль'
else if (driverCategory === 'C')
   categoryValue = 'вантажний автомобіль'
else
   // categoryValue = 'Введіть категорію водія правильно'
   document.write(`<p class="output-data">Введіть категорію водія правильно</p>`)

// Виведення результатів
document.write(`
   <p class="output-data">Ви можете керувати транспортним засобом: ${categoryValue}</p>
`)