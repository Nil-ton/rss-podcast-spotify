import { Router } from "express";
import { getPodcastDataController } from "../useCase/GetPodcastData";


export const router = Router()

router.get('/', async (req,res) => {
    await getPodcastDataController.handle(req,res)
})