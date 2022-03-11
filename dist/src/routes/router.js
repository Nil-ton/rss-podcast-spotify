"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const generationRssFeed_1 = require("../useCase/generationRssFeed");
exports.router = (0, express_1.Router)();
exports.router.get('/', async (req, res) => await generationRssFeed_1.generationRssFeedController.handle(req, res));
