"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("./login"));
const perfil_1 = __importDefault(require("./perfil"));
const routes = (0, express_1.Router)();
routes.use("/login", login_1.default);
routes.use("/perfil", perfil_1.default);
exports.default = routes;
