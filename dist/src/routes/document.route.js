"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const document_controller_1 = require("../controllers/document/document.controller");
const document_validator_1 = require("../validators/document.validator");
const share_validator_1 = require("../validators/share.validator");
const share_controller_1 = require("../controllers/document/share/share.controller");
const validate_1 = __importDefault(require("../validators/validate"));
const router = (0, express_1.Router)();
router.get("/:token/:id", auth_1.authenticate, document_controller_1.documentController.getOneByToken);
router.get("/", auth_1.authenticate, document_controller_1.documentController.getAll);
router.put("/:id", auth_1.authenticate, (0, validate_1.default)(document_validator_1.documentValidator.update), document_controller_1.documentController.update);
router.post("/", auth_1.authenticate, document_controller_1.documentController.create);
router.delete("/:id", auth_1.authenticate, document_controller_1.documentController.delete);
router.post("/:id/share", auth_1.authenticate, (0, validate_1.default)(share_validator_1.shareValidator.create), share_controller_1.shareController.create);
router.delete("/:documentId/share/:userId", auth_1.authenticate, share_controller_1.shareController.delete);
exports.default = router;
