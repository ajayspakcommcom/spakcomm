
import connectToMongoDB from './libs/mongodb';
import { User } from './models/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Error } from 'mongoose';
import { Error as MongooseError } from 'mongoose';
import runMiddleware from './libs/runMiddleware';
import Cors from 'cors';
import { sendEmail } from './utility/emailService';


interface UserType {
  name: string;
  email: string;
  mobile: string;
  message: string;
  createdAt: string;
}

interface ApiResponse {
  message?: string;
  error?: string;
  errorDetail?: any;
  data?: any;
}

const cors = Cors({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {

  await connectToMongoDB();
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {


    switch (req.body.type) {
      case 'CREATE':
        try {

          const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            message: req.body.message
          });

          const emailSent = await sendEmail({ recipient: 'ajay@spakcomm.com, sunil@spakcomm.com, shiv@spakcomm.com', subject: 'Enquiry Form', text: `<b>Message:</b> ${req.body.message}, <br /> <b>Mobile:</b> ${req.body.mobile}, <br /> <b>Email:</b> ${req.body.email}` });

          if (emailSent) {
            res.status(200).json({ message: 'User Created Successfully' });
          } else {
            res.status(500).json({ error: 'Internal error' });
          }

        } catch (error: any) {

          return res.status(400).json({ error: 'Duplicate Email', errorDetail: 'The email address is already in use. Please choose a different email.' });

        }
    }

    res.status(405).json({ error: 'No type provided' });

  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }

}





