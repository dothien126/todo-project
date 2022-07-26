import mongoose from 'mongoose';
import 'dotenv/config';

async function connectToDb() {
  const dbUri = process.env.MONGOURI as string;
  try {
    await mongoose.connect(dbUri);
    console.log('Connected to DB');
  } catch (e: any) {
    console.error(`❌ Connected to DB failed with error: ${e}`);
  }
}

export default connectToDb;
