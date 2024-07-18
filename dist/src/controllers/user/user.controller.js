"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catch_async_1 = __importDefault(require("../../middlewares/catch-async"));
const express_validator_1 = require("express-validator");
const user_service_1 = require("../../services/user.service");
const responses_1 = require("../../responses");
class UserController {
    constructor() {
        this.register = (0, catch_async_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const err = (0, express_validator_1.validationResult)(req);
            if (!err.isEmpty) {
                return res.status(400).json(err);
            }
            const { email, password1 } = req.body;
            yield user_service_1.userService.createUser(email, password1);
            return res.sendStatus(200);
        }));
        this.getUser = (0, catch_async_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = parseInt(req.params.id);
            const user = yield user_service_1.userService.findUserById(userId);
            if (user === null)
                return res.sendStatus(400);
            return res.status(200).json(user);
        }));
        this.resetPassword = (0, catch_async_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const err = (0, express_validator_1.validationResult)(req);
            if (!err.isEmpty()) {
                return res.status(400).json(err);
            }
            const { email } = req.body;
            const user = yield user_service_1.userService.findUserByEmail(email);
            if (!user)
                return res.status(200).json(responses_1.resetPassword);
            yield user_service_1.userService.resetPassword(user);
            return res.status(200).json(responses_1.resetPassword);
        }));
    }
}
const userController = new UserController();
exports.userController = userController;
