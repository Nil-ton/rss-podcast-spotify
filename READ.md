# Visão geral
O objetivo é converte os dados RSS dos podcasts do Spotify em JSON.

## instalação
```
# clone o projeto

# instale as dependências
npm install

# começa a aplicação
yarn dev
```

# Explicando o codigo
* src/domain/PodcastSpotifyFeed.ts

É o domínio da aplicação, os dados com o id de cada podcast do Spotify, você pode conseguir esse id entrando no Spotify e pegando o caminho.

-- exemplo: https://open.spotify.com/show/*6MsFZgRpVBRrHwKQMjCIfJ*

```
import { IPodcastSpotifyFeed } from "./types";

export const PodcastSpotifyFeed:IPodcastSpotifyFeed = [
    {
        name: "Balela",
        id: "7LmSPbAnZ9Be4pd4HocQDt"
    },
    {
        name: "Podpah",
        id: "1GLSDdk9CDEwziGNIlnb8a"
    },
    {
        name: "Matando Robôs Gigantes",
        id: "6MsFZgRpVBRrHwKQMjCIfJ"
    },
    {
        name: "PODDELAS",
        id: "4Rc0ZXgYLd0NZucIKYjurg"
    },
    {
        name: "NerdCast",
        id: "22Wgt4ASeaw8mmoqAWNUn1"
    }
]
```

* src/useCase/generationRssFeed/index.ts

É o domínio da aplicação, os dados com o id de cada podcast do Spotify, você pode conseguir esse id entrando no Spotify e pegando o caminho. 
```
import { RssToJson } from "../../infra/RssToJson";
import { GenerationRssFeedController } from "./GenerationRssFeedController";
import { GenerationRssFeedUseCase } from "./GenerationRssFeedUseCase";

const rss = new RssToJson()
const generationRssFeedUseCase = new GenerationRssFeedUseCase(rss)
const generationRssFeedController = new GenerationRssFeedController(generationRssFeedUseCase)

export {generationRssFeedUseCase, generationRssFeedController}
```
### Metodo do RssToJson
* src/infra/types.ts

```
import { IPodcastSpotifyFeed } from "../domain/types";

export interface IRssParse {
    parseFeed(urls: IPodcastSpotifyFeed):Promise<IRssFeeds[]>
}

export type IRssFeeds =  {
    title: any;
    description: any;
    link: any;
    image: any;
    category: any;
    items: any[];
}
```