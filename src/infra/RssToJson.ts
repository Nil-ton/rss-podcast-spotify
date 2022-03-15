import { parse } from 'rss-to-json'
import { IPodcastSpotifyFeed } from '../domain/types'
import { IRssParse } from './types'

export class RssToJson implements IRssParse {
    async parseFeed(podcasts: IPodcastSpotifyFeed) {
        try {
            const generationRssFeed = async () => {
                const generationRssFeedDatas = []
                for (const url of podcasts) {
                    const rssGeneation = await parse(`${url}`, {})
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