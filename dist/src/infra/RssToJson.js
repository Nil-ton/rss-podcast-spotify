"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RssToJson = void 0;
const rss_to_json_1 = require("rss-to-json");
class RssToJson {
    async parseFeed(urls) {
        try {
            const generationRssFeed = async () => {
                const generationRssFeedDatas = [];
                for (const url of urls) {
                    const rssGeneation = await (0, rss_to_json_1.parse)(`https://spotifeed.timdorr.com/${url.id}`, {});
                    generationRssFeedDatas.push(rssGeneation);
                }
                return generationRssFeedDatas;
            };
            if (!await generationRssFeed()) {
                throw new Error('urls is not valid');
            }
            return (await generationRssFeed());
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.RssToJson = RssToJson;
