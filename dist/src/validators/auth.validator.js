"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class AuthValidator {
    constructor() {
        this.login = [
            (0, express_validator_1.body)("email")
                .isEmail()
                .normalizeEmail()
                .withMessage("Must provide a valid email address"),
            (0, express_validator_1.body)("password").exists().withMessage("Password is required"),
        ];
    }
}
