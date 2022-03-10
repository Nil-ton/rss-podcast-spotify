import { IPodcastSpotifyFeed } from "../../domain/types";
import { IRssParse } from "../../infra/types";

export class GenerationRssFeedUseCase {
    constructor(private rss: IRssParse) {}

    async execute (urls: IPodcastSpotifyFeed) {
        try {
            const rssFeeds = await this.rss.parseFeed(urls)

            if(!rssFeeds) {
                throw new Error('urls invalid')
            }

            return rssFeeds

        } catch (error) {
            throw new Error('could not generate rssFeed')
        }
    }
}