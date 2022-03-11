"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const PodcastSpotifyFeed_1 = require("../../domain/PodcastSpotifyFeed");
describe('Generate rss feeds of spotify', () => {
    it('should be able to generate rss feeds', async () => {
        const sut = await _1.generationRssFeedUseCase.execute(PodcastSpotifyFeed_1.PodcastSpotifyFeed);
        expect(sut);
    });
});
