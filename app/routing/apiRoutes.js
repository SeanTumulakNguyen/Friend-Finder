let friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        let user = req.body
        let bestMatch = null;
        let highScore = 0;

        // Console what was inputed
        // console.log(req.body);

        for (i = 0; i < friends.length; i++) {
            
            
            console.log(user.scores)
            console.log(friends[i].scores)
            let differences = 0

            for (x = 0; x < user.scores.length; x++) {
                differences += Math.abs(user.scores[x] - friends[i].scores[x])
                console.log(differences)

                if (highScore < differences) {
                    highscore = differences;
                    bestMatch = friends[i]
                }
            }
        }
        friends.push(user);
        console.log(bestMatch)
        res.json(bestMatch)
    });


};