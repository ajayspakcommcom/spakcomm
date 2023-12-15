import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../libs/mongodb';
import { ObjectId } from 'mongodb';
import { verifyToken } from '../libs/verifyToken';

type Holiday = { id: ObjectId; title: string; date: number; };

type ApiResponse = | { message: string } | Holiday | Holiday[] | { data: any } | { error: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {

  const user = verifyToken(req);

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  } else {

    if (req.method === 'POST') {

      switch (req.body.type) {

        case 'List':
          try {
            const client = await clientPromise;
            const db = client.db("user");
            const collection = db.collection<Holiday>("holiday");
            const data = await collection.find({}).toArray();
            res.status(200).json(data);
          }
          catch (err) {
            if (err instanceof Error) {
              res.status(500).json({ error: err.message });
            } else {
              res.status(500).json({ error: 'An unknown error occurred' });
            }
          }
          break;

        default:
          res.status(500).json({ data: '' });
      }
    }

    res.status(500).json({ data: 'Not Data Found' });




  }
}
