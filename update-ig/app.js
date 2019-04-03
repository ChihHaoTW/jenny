var fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const port = 3310
app.use(bodyParser())

app.use(express.static('public'))

app.post('/update', (req, res) => {
  // console.log(req.body.con)
  fs.writeFileSync("./url.json", JSON.stringify({text: req.body.con}))

  res.send("done!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

