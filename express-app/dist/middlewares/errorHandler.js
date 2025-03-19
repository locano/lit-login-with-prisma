"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAllErrors = (err, req, res) => {
    if (err) {
        console.error(err);
        console.log("catchAllErrors: ", err);
        res.sendStatus(500);
    }
    res.status(500).json({ error: 'Ocurrio un error inesperado' });
};
const send404 = (req, res, next) => {
    res.sendStatus(404);
};
exports.default = { catchAllErrors, send404 };
