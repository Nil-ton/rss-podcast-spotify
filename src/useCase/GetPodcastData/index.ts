import xmlToJson from "../../infra/XmlToJson";
import { GetPodcastDataController } from "./controller";
import { GetPodcastDataUseCase } from "./useCase";

const getPodcastDataUseCase = new GetPodcastDataUseCase(xmlToJson)
const getPodcastDataController= new GetPodcastDataController(getPodcastDataUseCase)

export {getPodcastDataUseCase, getPodcastDataController}