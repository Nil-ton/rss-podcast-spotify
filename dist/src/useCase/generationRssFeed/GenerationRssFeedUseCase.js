"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationRssFeedUseCase = void 0;
class GenerationRssFeedUseCase {
    rss;
    constructor(rss) {
        this.rss = rss;
    }
    async execute(urls) {
        try {
            const rssFeeds = await this.rss.parseFeed(urls);
            if (!rssFeeds) {
                throw new Error('urls invalid');
            }
            return rssFeeds;
        }
        catch (error) {
            throw new Error('could not generate rssFeed');
        }
    }
}
exports.GenerationRssFeedUseCase = GenerationRssFeedUseCase;
