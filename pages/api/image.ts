// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    image
  } = req.body;

  const fileName = `/images/logos/${Date.now().toString()}.svg`;

  fs.writeFile("./public" + fileName, image, 'utf-8', function (err) { console.log(err) });

  res.status(200).json(fileName);
}
