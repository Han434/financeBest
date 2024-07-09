var express = require('express');
var router = express.Router();

const userList = [
  {
    id: 1,
    name: "Luke",
    age: 25
  },
  {
    id: 2,
    name: "Luke",
    age: 26
  },
  {
    id: 3,
    name: "Luke",
    age: 27
  }
]

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json(userList);
});

router.post('/', (req, res, next) => {
  const user = req.body;
  userList.push(user);
  res.json(userList);
});

router.put('/', (req, res, next) => {
  const inputUser = req.body;
  const id = inputUser.id;
  const userToUpdate = userList.filter((user) => {
    return user.id == id;
  });
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id == id) {
      userList[i] = inputUser;
    }
  }
  res.json(userList);
})

module.exports = router;
