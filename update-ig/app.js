var fs = require('fs')
var child_process = require('child_process')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const port = 3310
app.use(bodyParser())

app.use(express.static('public'))

app.post('/update', (req, res) => {
  fs.writeFileSync("./url.txt", req.body.con)
  child_process.execSync('yarn run build')
  res.send("done!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

