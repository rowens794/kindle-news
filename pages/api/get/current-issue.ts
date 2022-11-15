// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  articles: Article[];
  name: string;
};

type Article = {
  id: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  source: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    articles: articles,
    name: "The Bear Report of Times Gone By and of Yester-years of yore",
  });
}

const articles = [
  {
    id: "1",
    title:
      "FTX Founder Sam Bankman-Fried Attempts to Raise Fresh Cash Despite Bankruptcy",
    description: "This is the description for article 1",
    date: new Date("1/21/2022"),
    author: "John Doe",
    source: "wsj.com",
  },
  {
    id: "2",
    title: "Donald Trump’s Presidential Rerun",
    description:
      "This is the description for article 2 This is the description for article 2 This is the description for article 2 This is the description for article 2",
    date: new Date("1/21/2022"),
    author: "Lisa Joy",
    source: "bloomberg.com",
  },
  {
    id: "3",
    title: "Biden’s Student Loan Cancellation Loses Again",
    description: "This is the description for article 3",
    date: new Date("1/21/2022"),
    author: "Jerry Sing",
    source: "reuters.com",
  },
  {
    id: "4",
    title: "Amazon Set to Lay Off Thousands of Corporate Workers",
    description: "This is the description for article 4",
    date: new Date("1/21/2022"),
    author: "Jane Doe",
    source: "nytimes.com",
  },
  {
    id: "5",
    title: "13 Dashboard Design Examples That Catch the Eye",
    description: "This is the description for article 5",
    date: new Date("1/21/2022"),
    author: "John Doe",
    source: "wsj.com",
  },
  {
    id: "6",
    title: "JPMorgan Dodges a Buyout-Loan Bullet",
    description: "This is the description for article 6",
    date: new Date("1/21/2022"),
    author: "Lisa Joy",
    source: "bloomberg.com",
  },
  {
    id: "7",
    title: "Why Mark Wahlberg Wakes Up at 3:30 a.m.",
    description: "This is the description for article 7",
    date: new Date("1/21/2022"),
    author: "Jerry Sing",
    source: "reuters.com",
  },
];
