console.log("hola mundo");

const express = require('express')
const app = express()
app.use(express.json());



app.post('/',  (req, res)  => {
  console.log(req.body["edad"])
  console.log(req.body["direccion"])
   res.send({
    'msg': "se inserto correctamente"
   })
  })

app.listen(3000)