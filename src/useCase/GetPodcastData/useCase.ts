import axios from "axios";
import { XmlToJson } from "../../infra/XmlToJson";
import { PodcastFeed } from "../../podcasts/PodcastFeed";

export class GetPodcastDataUseCase {
    constructor(private xmlToJson: XmlToJson) {}
    async execute() {
        const allData = []

        for(const podcast of PodcastFeed) {
            const rss =(await axios.get(podcast.url)).data
            const data = await this.xmlToJson.parser(rss)
            const filterData = data.rss.channel

            allData.push({
                title: filterData.title,
                description: filterData.description,
                image: filterData.image.url,
                copyright: filterData.copyright,
                items: filterData.item.map(episodio => ({
                    title: episodio.title,
                    description: episodio.description,
                    duration: episodio['itunes:duration'],
                    pubDate: episodio.pubDate,
                    enclosure: episodio.enclosure.url,
                    image: episodio['itunes:image'].href
                }))
            })
        }

        return allData
    }
}