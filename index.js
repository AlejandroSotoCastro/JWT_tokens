const express = require("express");
const port = process.env.PORT || 4000;
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const authMiddleware = require("./auth/middleware");

const jsonParser = express.json();

const app = express();
app.use(jsonParser);

app.use("/users", userRouter);
app.use("/images", authMiddleware, imageRouter);
app.use("/login", authRouter);

app.listen(port, () => "hey, listlen");
