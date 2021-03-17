const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 3000

const student = {
  name: 'Mike',
  age: 23, 
  gender: 'Male',
  department: 'English',
  car: 'Honda' 
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json(student)
})

app.post('/', (req, res) => {
  const path = `C:\\Users\\lukas\\Desktop\\`
  const filename = `${req.body.filename}.${req.body.extension}`
  const contents = req.body.contents

  fs.writeFile(`${path}${filename}`, contents, (err) => {
    if (err) throw err
    res.send('The file was written successfully.')
  })
})
