// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File, Fields, Files } from 'formidable';
import fs from 'fs';
import runMiddleware from './libs/runMiddleware';
import Cors from 'cors';
import { JoinTheTale } from './models/JoinTheTale';
import connectToMongoDB from './libs/mongodb';
import { sendEmail } from './utility/emailService';


export const config = {
    api: {
        bodyParser: false,
    },
};


const cors = Cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

type Data = { message?: string, error?: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    await connectToMongoDB();
    await runMiddleware(req, res, cors);

    if (req.method === 'POST') {

        const form = new IncomingForm({ uploadDir: './public/uploads' });

        form.parse(req, (err: Error | null, fields: Fields, files: Files) => {

            console.clear();

            const { host } = req.headers;
            const protocol = req.headers['x-forwarded-proto'] || 'http'; // Check if behind a proxy

            const localhostUrl = `${protocol}://${host}`;
            console.log(localhostUrl);



            if (err) {
                console.error('Error parsing form:', err);
                res.status(500).json({ error: 'Error uploading image' });
                return;
            }

            const fileExtension = (files as any).image[0].originalFilename.split('.').pop();
            const uniqueFilename = `${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileExtension}`;
            const newFilePath = `./public/uploads/${uniqueFilename}`;

            const saveData = async () => {
                const data = await JoinTheTale.create({
                    name: fields.name![0],
                    email: fields.email![0],
                    mobile: fields.mobile![0],
                    file: `/uploads/${uniqueFilename}`
                });

                const emailSent = await sendEmail({ recipient: 'ajay@spakcomm.com', subject: 'Join The Tale', text: `<b>Name:</b> ${fields.name![0]}, <br /> <b>Email:</b> ${fields.email![0]}, <br /> <b>Mobile:</b> ${fields.mobile![0]}, <br /> <b>Document:</b> <a href=http://ec2-13-232-13-208.ap-south-1.compute.amazonaws.com/uploads/${uniqueFilename} target="_blank">Resume</a>` });

                if (emailSent) {
                    res.status(200).json({ message: 'User Created Successfully' });
                } else {
                    res.status(500).json({ error: 'Internal error' });
                }

            };

            saveData();

            try {
                fs.renameSync((files as any).image[0].filepath, newFilePath);
                res.status(200).json({ message: 'Success' });
            } catch (err: any) {
                res.status(500).json({ error: 'Internal Error' });
            }
        });

    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }




}
