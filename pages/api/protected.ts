import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from './libs/verifyToken';

// Define a type for the response when unauthorized
type UnauthorizedResponse = {message: string;};

export default function handler(req: NextApiRequest, res: NextApiResponse<UnauthorizedResponse>) {
    
    const user = verifyToken(req);

    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Handle authorized case...
}