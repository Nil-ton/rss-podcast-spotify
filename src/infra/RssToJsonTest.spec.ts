import { PodcastSpotifyFeed } from "../domain/PodcastSpotifyFeed"
import { RssToJson } from "./RssToJson"

describe('RssToJson test', () => {
    it('should be able generation rssfeed to json', async () => {
        const rssToJson = new RssToJson()
        const sut = await rssToJson.parseFeed(PodcastSpotifyFeed)

        expect(sut)
    })
})