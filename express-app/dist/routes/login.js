"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = require("../middlewares/isAuth");
const login_1 = require("../controllers/login");
const loginRouter = (0, express_1.Router)();
loginRouter.get('/', isAuth_1.isAuth, login_1.getloginInfo);
exports.default = loginRouter;
