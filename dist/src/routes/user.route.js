"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_validator_1 = require("../validators/user.validator");
const user_controller_1 = require("../controllers/user/user.controller");
const auth_1 = require("../middlewares/auth");
const validate_1 = __importDefault(require("../validators/validate"));
const router = (0, express_1.Router)();
router.post("/", (0, validate_1.default)(user_validator_1.userValidator.register), user_controller_1.userController.register);
router.put("/verify-email/:token", user_controller_1.userController.verifyEmail);
router.get("/:id", auth_1.authenticate, user_controller_1.userController.getUser);
router.post("/reset-password", (0, validate_1.default)(user_validator_1.userValidator.resetPassword), user_controller_1.userController.resetPassword);
router.put("/password/:token", (0, validate_1.default)(user_validator_1.userValidator.confirmResetPassword), user_controller_1.userController.confirmResetPassword);
exports.default = router;
