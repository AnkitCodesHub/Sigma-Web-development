const express = require('express')
const app = express()
const mongoose = require('mongoose')
const employee = require('./models/employee')
mongoose.connect('mongodb+srv://ankit:6205323586@cluster0.ur7d2fs.mongodb.net/company?retryWrites=true&w=majority')
const port = 3000

app.set('view engine', 'ejs')
const getRandom = (arr) => { 
      let rno = Math.floor(Math.random() * arr.length)  
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' })
})

app.get('/generate', async (req, res) => {
    await employee.deleteMany({})
    let randomNames = ["Aman", "Raman", "Chaman", "Chutiya"]
    let randomLang = ["C", "Python", "Kotlin", "Java"]
    let randomCities = ["Navada", "Patna", "Kolkata", "Jehanabad"]
    for (let index = 0; index < 10; index++) {
        let e = await employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random()*22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random() > 0.5) ? true : false
        })
        console.log(`Employee ${index + 1} created:`, e)
    }
    res.json({ message: "10 employees generated!" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})