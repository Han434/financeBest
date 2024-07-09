var express = require('express');
var router = express.Router();

const teamList = [
  {
    id: 1,
    name: "Team 1",
  },
  {
    id: 2,
    name: "Team 2",
  },
  {
    id: 3,
    name: "Team 3",
  }
]

/* GET teams listing. */
router.get('/', (req, res, next) => {
  res.json(teamList);
});

router.post('/', (req, res, next) => {
  const team = req.body;
  teamList.push(team);
  res.json(teamList);
});

router.put('/', (req, res, next) => {
  const inputteam = req.body;
  const id = inputteam.id;
  const teamToUpdate = teamList.filter((team) => {
    return team.id == id;
  });
  for (let i = 0; i < teamList.length; i++) {
    if (teamList[i].id == id) {
      teamList[i] = inputteam;
    }
  }
  res.json(teamList);
})

module.exports = router;
