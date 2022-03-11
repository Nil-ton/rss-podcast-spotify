"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PodcastSpotifyFeed_1 = require("../domain/PodcastSpotifyFeed");
const RssToJson_1 = require("./RssToJson");
describe('RssToJson test', () => {
    it('should be able generation rssfeed to json', async () => {
        const rssToJson = new RssToJson_1.RssToJson();
        const sut = await rssToJson.parseFeed(PodcastSpotifyFeed_1.PodcastSpotifyFeed);
        expect(sut);
    });
});
