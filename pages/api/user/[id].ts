import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../libs/mongodb';
import { ObjectId } from 'mongodb';

// Define a type for the response data
type ResponseData = {
    id: string | string[] | undefined;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  
    const { id } = req.query;

    res.status(500).json({ id: id });
}