import xml2js from 'xml2js'
import convert from 'xml-js'
import parser from 'xml2json'

export class XmlToJson {
    constructor() { }
    async parser(nameOfPodcast: string) {
        const jsonParser = JSON.parse(parser.toJson(nameOfPodcast))
        return jsonParser
    }
}
const xmlToJson = new XmlToJson()

export default xmlToJson