const { Router } = require("express");
const imageRouter = new Router();
const { toJWT, toData } = require("../auth/jwt");
const Images = require("../models").image;
const authMiddleware = require("../auth/middleware");

/**Add a new image */

imageRouter.post("/", async (req, res, next) => {
  try {
    const title = req.body.title;
    const url = req.body.url;
    if (!title || url === " ") {
      res.status(400).send("Must provide an url and title");
    } else {
      const image = await Images.create(req.body);
      res.json(image);
    }
  } catch (e) {
    next(e);
  }
});

/**Get an image */

imageRouter.get("/:imageId", async (req, res, next) => {
  try {
    const imageId = req.params.imageId;
    if (!imageId || imageId === " ") {
      res.status(400).send("imageId needed");
    } else {
      const image = await Images.findByPk(imageId);
      res.json(image);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = imageRouter;

/**Get all images with autentification */

imageRouter.get(
  "/",
  /*authMiddleware,*/ async (req, res, next) => {
    try {
      const limit = req.query.limit || 25;
      const offset = req.query.offset || 0;
      const allImages = await Images.findAndCountAll({ limit, offset });
      // res.send({allImages} );
      res.send({ images: allImages.rows, total: allImages.count });
    } catch (e) {
      next(e);
    }
  }
);
