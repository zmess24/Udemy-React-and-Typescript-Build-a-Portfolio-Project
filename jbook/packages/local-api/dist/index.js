"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serve = (port, filename, dir) => {
    console.log("serving traffic on port", port);
    console.log("saving/fetching calls from", filename);
    console.log("that file is in dir", dir);
};
exports.default = serve;
