"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generationRssFeedController = exports.generationRssFeedUseCase = void 0;
const RssToJson_1 = require("../../infra/RssToJson");
const GenerationRssFeedController_1 = require("./GenerationRssFeedController");
const GenerationRssFeedUseCase_1 = require("./GenerationRssFeedUseCase");
const rss = new RssToJson_1.RssToJson();
const generationRssFeedUseCase = new GenerationRssFeedUseCase_1.GenerationRssFeedUseCase(rss);
exports.generationRssFeedUseCase = generationRssFeedUseCase;
const generationRssFeedController = new GenerationRssFeedController_1.GenerationRssFeedController(generationRssFeedUseCase);
exports.generationRssFeedController = generationRssFeedController;
