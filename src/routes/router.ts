import { Router } from "express";
import { generationRssFeedController } from "../useCase/generationRssFeed";

export const router = Router()

router.get('/', async (req,res) => await generationRssFeedController.handle(req,res))