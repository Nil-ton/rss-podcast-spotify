"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationRssFeedController = void 0;
const PodcastSpotifyFeed_1 = require("../../domain/PodcastSpotifyFeed");
class GenerationRssFeedController {
    generationRssFeedUseCase;
    constructor(generationRssFeedUseCase) {
        this.generationRssFeedUseCase = generationRssFeedUseCase;
    }
    async handle(request, response) {
        try {
            const data = await this.generationRssFeedUseCase.execute(PodcastSpotifyFeed_1.PodcastSpotifyFeed);
            return response.status(200).json(data);
        }
        catch (error) {
            return response.status(404).json(error.message);
        }
    }
}
exports.GenerationRssFeedController = GenerationRssFeedController;
