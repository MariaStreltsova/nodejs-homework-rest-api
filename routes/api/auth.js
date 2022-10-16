const express = require("express");

const ctrlWrapper = require("../../utils/ctrlWrapper");

const { validateBody } = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const { schemas } = require("../../models/users/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);
module.exports = router;
