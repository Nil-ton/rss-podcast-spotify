import xml2js from 'xml2js'
import convert from 'xml-js'

export class XmlToJson {
    constructor() { }
    async parser(nameOfPodcast: string) {
        const parser = JSON.parse(convert.xml2json(nameOfPodcast, { compact: true, spaces: 4 }))
        return parser
    }
}
const xmlToJson = new XmlToJson()

export default xmlToJson