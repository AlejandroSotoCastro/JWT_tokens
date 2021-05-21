const { Router } = require("express");
const bcrypt = require("bcrypt");
const userRouter = new Router();
const User = require("../models").user;

userRouter.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).send("missing parameters");
    } else {
      const newUser = await User.create({
        email,
        password: bcrypt.hashSync(password, 10),
        fullName,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});
module.exports = userRouter;
