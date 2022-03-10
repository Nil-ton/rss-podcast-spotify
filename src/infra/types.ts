import { IPodcastSpotifyFeed } from "../domain/types";

export interface IRssParse {
    parseFeed(urls: IPodcastSpotifyFeed):Promise<IRssFeeds[]>
}

export type IRssFeeds =  {
    title: any;
    description: any;
    link: any;
    image: any;
    category: any;
    items: any[];
}