const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  // 1. check for authorization header and "split" it.

  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
      const user = await User.findByPk(data.userId);
      // 4. If not found, set status to 404 "no user found";
      if (!user) {
        res.status(400).send("no user found");
      }
      // 5. If user is found, set it to `req.user = user` and call next();
      else {
        req.user = user;
        next();
      }
    } catch (e) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      });
    }
  }
  //    If not, we return a 401 status and the message: 'Please supply some valid credentials
  //    Remember to try/catch the call to "toData()".
  else {
    res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }
}

module.exports = auth;
