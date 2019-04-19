var friends = require("../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        var bestmatch = {
            name: "",
            photo: "",
            friendsdif: Infinity
        }
        var userdata = req.body
        var userscores = userdata.scores
        var totaldif;

        for (var i = 0; i < friends.length; i++) {
            var currentfriend = friends[i]
            totaldif = 0
            console.log(currentfriend.name)

            for (var j = 0; j < currentfriend.scores.length; j++) {
                var currentfriendscore = currentfriend.scores[j]
                var currentuserscore = userscores[j]
                totaldif += Math.abs(parseInt(currentuserscore) - parseInt(currentfriendscore))
            }
            if (totaldif <= bestmatch.friendsdif) {
                bestmatch.name = currentfriend.name
                bestmatch.image = currentfriend.image
                bestmatch.friendsdif = totaldif
            }
            
        }
        friends.push(userdata)
        res.json(bestmatch)
    })
}