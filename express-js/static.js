const express = require('express')
const path = require('path')

const app = express()


const port = 8000

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname,'index.html'))
})


app.all("*", (req,res) => {
  res.status(404).send("Page not found")
})

// app.get('/', (req,res) => {
//   // res.writeHead('content-type',"")
//   res.status(200).send("Home page")
// })

// app.get('/about', (req,res) => {
//   res.status(200).send("Abnbout")
// })

// app.all("*", (req,res) => {
//   res.status(404).send(`<h1>Page not Found </h1>`)
// })




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
