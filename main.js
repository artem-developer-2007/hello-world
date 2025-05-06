const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('Hello')
})

app.listen(3000)


let nameOne = 'Артем'
let nameTwo = 'Артем'

if (nameOne[0] == nameTwo[0]) {
    console.log('Первые буквы совпадают!!!')
} else {
    console.log('Первые буквы не совпадают(((')
}


const factorialChislo = int(input('Введите число, факториал которог нужно посчитать: '))

const proizvedenie = 1

for(i = 1; i < factorialChislo; i++) {
    proizvedenie = proizvedenie * i
}