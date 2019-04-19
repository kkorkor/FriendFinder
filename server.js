var express = require("express")
var bodyparser = require("body-parser")

var app = express()
var port = process.env.port || 8080

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

app.listen(port, function(){
    console.log("app listening on port " + port)
})