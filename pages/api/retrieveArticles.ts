// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
var FeedParser = require("feedparser");

type Data = {
  name: string;
};

const targetFeeds = [
  "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
  "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
  "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //get all of the target fees
  let articles: Article[] = [];
  for (let i = 0; i < targetFeeds.length; i++) {
    let feed = targetFeeds[i];
    let rss = await fetchRSSFeed(feed);
    articles = [...articles, ...rss];
  }

  //fetch an article
  let article = await fetchArticle(articles[0].link);
  console.log(article);

  res.status(200).json({ name: "John Doe" });
}

interface Article {
  title: string;
  link: string;
  summary: string;
  date: Date;
  categories: string[];
  description: string;
}

const fetchRSSFeed = (url: string): Promise<Article[]> => {
  return new Promise((resolve, reject) => {
    var req = fetch(url);
    var feedparser = new FeedParser();

    //@ts-ignore
    const articles: any[] = [];

    req.then(
      function (res) {
        if (res.status !== 200) {
          throw new Error("Bad status code");
        } else {
          // The response `body` -- res.body -- is a stream
          //@ts-ignore
          res.body.pipe(feedparser);
        }
      },
      function (err) {
        // handle any request errors
      }
    );

    feedparser.on("error", function (error: any) {
      // always handle errors
    });

    feedparser.on("readable", function () {
      // This is where the action is!
      //@ts-ignore
      var stream = this; // `this` is `feedparser`, which is a stream
      //@ts-ignore
      var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
      var item;

      while ((item = stream.read())) {
        articles.push({
          title: item.title,
          link: item.link,
          summary: item.summary,
          date: item.date,
          categories: item.categories,
          description: item.meta.description,
        });
      }

      resolve(articles);
    });
  });
};

const fetchArticle = (url: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    //fetch the article
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
    });

    let html = await response.text();

    console.log(html);
    console.log(url);
  });
};
