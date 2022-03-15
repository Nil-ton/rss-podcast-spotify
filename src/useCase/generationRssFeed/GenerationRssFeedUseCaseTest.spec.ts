import { generationRssFeedUseCase } from "."
import { PodcastSpotifyFeed } from "../../infra/podcasts/PodcastSpotifyFeed"

describe('Generate rss feeds of spotify', () => {
    it('should be able to generate rss feeds', async () => {
        const sut = await generationRssFeedUseCase.execute(PodcastSpotifyFeed)
        
        expect(sut)
    })
})