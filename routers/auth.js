const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const authRouter = new Router();

/**Log in */

authRouter.post("/", async (req, res, next) => {
  // Here goes the login logic.
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user || !email || !password) {
      res.status(400).send("Wrong Credentials");
    }

    // check if parameter password === stored password
    const validPassword = bcrypt.compareSync(password, user.password);
    //const validPassword = password === user.dataValues.password; // without encrypting password

    // if all good => create token and send back
    if (validPassword) {
      console.log("Valid!!");
      // Create a token for this guy!
      const token = toJWT({ userId: user.id }); // data = { userId: 1 };
      res.send({ token });
    } else {
      res.status(400).send("Wrong credentials");
    }
  } catch (e) {
    next(e);
  }
});

authRouter.get("/test-auth", authMiddleware, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
  });
});
module.exports = authRouter;
