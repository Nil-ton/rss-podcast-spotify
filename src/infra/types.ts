import { IPodcastSpotifyFeed } from "./podcasts/types";

export interface IRssParse {
    parseFeed(urls: IPodcastSpotifyFeed):Promise<IRssFeeds[]>
}

export type IRssFeeds =  {
    title?: any;
    description?: any;
    link?: any;
    image?: any;
    category?: any;
    items?: any[];
    error?: {
        message: string,
        error: Error
    }
}