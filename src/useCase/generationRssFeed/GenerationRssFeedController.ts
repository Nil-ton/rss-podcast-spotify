import { Request, Response } from "express";
import { PodcastSpotifyFeed } from "../../infra/podcasts/PodcastSpotifyFeed";
import { GenerationRssFeedUseCase } from "./GenerationRssFeedUseCase";

export class GenerationRssFeedController {
    constructor(private generationRssFeedUseCase: GenerationRssFeedUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const data = await this.generationRssFeedUseCase.execute(PodcastSpotifyFeed)
            
            return response.status(200).json(data)
        } catch (error) {
            return response.status(404).json(error.message)
        }
    }
}