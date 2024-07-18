"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_validator_1 = require("../validators/auth.validator");
const auth_controller_1 = require("../controllers/auth/auth.controller");
const router = (0, express_1.Router)();
router.post("/login", auth_validator_1.authValidator.login, auth_controller_1.authController.login);
exports.default = router;
