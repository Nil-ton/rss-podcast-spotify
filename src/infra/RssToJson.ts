import { parse } from 'rss-to-json'
import { IPodcastSpotifyFeed } from '../domain/types'
import { IRssParse } from './types'

export class RssToJson implements IRssParse {
    async parseFeed(urls: IPodcastSpotifyFeed) {
        try {
            const generationRssFeed = async () => {
                const generationRssFeedDatas = []
                for (const url of urls) {
                    const rssGeneation = await parse(`https://spotifeed.timdorr.com/${url.id}`, {})
                    generationRssFeedDatas.push(rssGeneation)
                }
                return generationRssFeedDatas
            }

            if(!await generationRssFeed()){
                throw new Error('urls is not valid')
            }

            return (await generationRssFeed())
        } catch (error) {
            throw new Error(error.message)
        }
    }

}