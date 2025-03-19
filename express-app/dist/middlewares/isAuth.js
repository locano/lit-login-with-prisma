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
exports.GENERATE_TOKEN = exports.isAuth = void 0;
const sendResponse_1 = __importDefault(require("../helpers/sendResponse"));
const apiCodes_1 = require("../helpers/apiCodes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = (req.headers.authorization || "")) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return (0, sendResponse_1.default)({
                code: apiCodes_1.ApiCodes.USER_NOT_VERIFIED,
                res,
                statusCode: 401,
            });
        }
        // Verificar el token usando tu JWT_SECRET
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return (0, sendResponse_1.default)({
                code: apiCodes_1.ApiCodes.EXPIRED_TOKEN,
                res,
                statusCode: 401,
            });
        }
        return next();
    }
    catch (error) {
        return (0, sendResponse_1.default)({
            code: apiCodes_1.ApiCodes.EXPIRED_TOKEN,
            res,
            statusCode: 401,
        });
    }
});
exports.isAuth = isAuth;
const GENERATE_TOKEN = (username, password) => {
    // Generar token con 1 año de expiración
    const token = jsonwebtoken_1.default.sign({
        username,
        password
    }, // Información a incluir en el token
    process.env.JWT_SECRET, // Clave secreta para firmar el token
    { expiresIn: "1 years" } // Expiración infinita
    );
    return token;
};
exports.GENERATE_TOKEN = GENERATE_TOKEN;
