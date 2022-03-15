import { parse } from 'rss-to-json'
import { IPodcastSpotifyFeed } from './podcasts/types'
import { IRssFeeds, IRssParse } from './types'



const generationRssFeed = async (podcasts: IPodcastSpotifyFeed) => {
    const generationRssFeedDatas = []

    for (const podcast of podcasts) {
        const rssGeneation = await parse(`${podcast.url}`, {})
        generationRssFeedDatas.push(rssGeneation)
    }
    
    return generationRssFeedDatas
}




export class RssToJson implements IRssParse {
    async parseFeed(podcasts: IPodcastSpotifyFeed): Promise<IRssFeeds[]> {

        const podcastData = await generationRssFeed(podcasts)

        return podcastData
    }
}