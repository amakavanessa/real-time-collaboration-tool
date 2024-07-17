import { body } from "express-validator";

class AuthValidator {
  public login = [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must provide a valid email address"),
    body("password").exists().withMessage("Password is required"),
  ];
}
