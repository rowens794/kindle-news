// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
  kindleEmail: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "John Doe",
    email: "rowens794@gmail.com",
    kindleEmail: "rowens-2983249@kindle.com",
  });
}
