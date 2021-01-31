// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url from 'url';

let cachedB: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedB) {
    return cachedB;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedB = db;

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const { email } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('users');

  await collection.insertOne({
    email,
    created_at: new Date(),
  });

  return response.status(201).json({ ok: `${email}` });
};
