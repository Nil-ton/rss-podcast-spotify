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
                title: filterData.title._text|| filterData.title._cdata.trim(),
                description: filterData.description._text || filterData.description._cdata,
                image: filterData['itunes:image']._attributes.href || filterData.image.url._text,
                copyright: filterData.copyright._text || filterData.copyright._cdata,
                item: filterData.item.map(item => ({
                    title: item.title._text || item.title._cdata,
                    image: item['itunes:image']._attributes.href,
                    duration: item['itunes:duration']._text,
                    enclosure: item.enclosure._attributes.url,
                    pubDate: item.pubDate._text,
                    description: item.description
                }))
            })
        }

        return allData
    }
}