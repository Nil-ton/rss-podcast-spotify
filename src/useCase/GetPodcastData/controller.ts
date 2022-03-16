import { Request, Response } from "express";
import { GetPodcastDataUseCase } from "./useCase";

export class GetPodcastDataController {
    constructor(private getAllPodcastUseCase: GetPodcastDataUseCase) { }
    async handle(request: Request, response: Response) {
        try {
            const data = await this.getAllPodcastUseCase.execute()
            return response.json(data)
        } catch (error) {
            return response.json(error.message)
        }
    }
}