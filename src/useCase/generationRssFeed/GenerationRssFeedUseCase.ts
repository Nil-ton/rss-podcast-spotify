import { IPodcastSpotifyFeed } from "../../infra/podcasts/types";
import { IRssFeeds, IRssParse } from "../../infra/types";

export class GenerationRssFeedUseCase {
    constructor(private rss: IRssParse) {}

    async execute (podcasts: IPodcastSpotifyFeed):Promise<IRssFeeds[]> {
        try {
            const rssFeeds = await this.rss.parseFeed(podcasts)
            return rssFeeds
        } catch (error) {
            throw new Error('could not generate rssFeed')
        }
    }
}