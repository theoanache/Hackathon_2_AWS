const express = require("express");

const router = express.Router();

const multer = require("multer");
const fs = require("fs");

const { v4: uuidv4 } = require("uuid");

const upload = multer({ dest: "uploads/" });

const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
// const firmRouter = require("./firmRouter");
// const roleRouter = require("./roleRouter");
const vehicleRouter = require("./vehicleRouter");
// const offerRouter = require("./offerRouter");
// const colorRouter = require("./colorRouter");
const cityRouter = require("./cityRouter");

router.use("/user", userRouter);
router.use("/admin", adminRouter);
// router.use("/firm", firmRouter);
// router.use("/role", roleRouter);
router.use("/vehicle", vehicleRouter);
// router.use("/offer", offerRouter);
// router.use("/color", colorRouter);
router.use("/city", cityRouter);

router.post("/photo", upload.single("photo"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;
  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});
module.exports = router;
