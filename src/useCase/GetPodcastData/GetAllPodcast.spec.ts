import { getPodcastDataUseCase } from "."

describe('Get data podcast', () => {
    it('should be able get data podcast', async () => {
        const sut = await getPodcastDataUseCase.execute()
        expect(sut)
    },1000 * 60  /*1 min*/)
})