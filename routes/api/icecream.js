const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Icecream = require("../../models/Icecream");

// @route GET api/icecream
// @description Test route / Fetch ice cream items
// @access Public
//router.get("/", (req, res) => res.send("Ice cream route..."));

router.get("/", async (req, res) => {
  try {
    Icecream.find({}, function(err, users) {
      var icecreamMap = {};

      users.forEach(function(user) {
        icecreamMap[user._id] = user;
      });

      res.send(icecreamMap);
    });
  } catch (err) {
    res.status(500).send("Server Error");
    console.log(err.response.data);
  }
});

// @route POST api/icecream
// @description Add new Icecream item
// @access Public
router.post(
  "/",
  [
    check("flavour", "Please provide a flavour for the new icecream.")
      .not()
      .isEmpty(),
    check("price", "Please name a price for the new icecream.")
      .not()
      .isEmpty(),
    check(
      "description",
      "Please enter a description of more than 15 letters for your icecream so people will buy it."
    )
      .not()
      .isEmpty()
      .isLength({ min: 15 }),
    check("quantity", "Please enter a quantity (at least one number).")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //return status 400 + send error
      return res.status(400).json({ errors: errors.array() });
    }

    //grab input
    const { flavour, price, description, quantity } = req.body;

    try {
      //see if icecream type exists
      let icecream = await Icecream.findOne({ flavour });

      if (icecream) {
        //send a similar error to the input ones on the clt
        return res
          .status(400)
          .json({ errors: [{ msg: "Icecream item already exists.." }] });
      }

      icecream = new Icecream({ flavour, price, description, quantity });

      //save new icecream item to the DB
      await icecream.save();

      res.send("Ice cream item registered...");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
