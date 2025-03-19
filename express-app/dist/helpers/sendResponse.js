"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendResponse(data) {
    if (!data.code && data.data) {
        return data.res.status(data.statusCode || 200).json(data.data);
    }
    return data.res.status(data.statusCode || 200).json({
        message: data.message,
        code: data.code,
        data: data.data,
    });
}
exports.default = sendResponse;
