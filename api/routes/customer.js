var express = require('express');
var router = express.Router();

const customerList = [
  {
    id: 1,
    name: "customer 1",
  },
  {
    id: 2,
    name: "customer 2",
  },
  {
    id: 3,
    name: "customer 3",
  }
]

/* GET customers listing. */
router.get('/', (req, res, next) => {
  res.json(customerList);
});

router.post('/', (req, res, next) => {
  const customer = req.body;
  customerList.push(customer);
  res.json(customerList);
});

router.put('/', (req, res, next) => {
  const inputcustomer = req.body;
  const id = inputcustomer.id;
  const customerToUpdate = customerList.filter((customer) => {
    return customer.id == id;
  });
  for (let i = 0; i < customerList.length; i++) {
    if (customerList[i].id == id) {
      customerList[i] = inputcustomer;
    }
  }
  res.json(customerList);
})

module.exports = router;
