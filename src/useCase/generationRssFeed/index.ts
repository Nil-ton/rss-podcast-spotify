import { RssToJson } from "../../infra/RssToJson";
import { GenerationRssFeedController } from "./GenerationRssFeedController";
import { GenerationRssFeedUseCase } from "./GenerationRssFeedUseCase";

const rss = new RssToJson()
const generationRssFeedUseCase = new GenerationRssFeedUseCase(rss)
const generationRssFeedController = new GenerationRssFeedController(generationRssFeedUseCase)

export {generationRssFeedUseCase, generationRssFeedController}